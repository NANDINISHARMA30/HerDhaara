import React, { useRef, useEffect, useState } from "react";

export default function Signup() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [cameraActive, setCameraActive] = useState(false);
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Start / Stop webcam
  useEffect(() => {
    if (cameraActive) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((err) => console.error("Camera Error:", err));
    } else {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    }
  }, [cameraActive]);

  // Capture frame & send to backend
  const captureAndDetect = async () => {
    if (!videoRef.current) return;

    setLoading(true);
    setResults([]);
    setStatus("");

    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      const formData = new FormData();
      formData.append("file", blob, "frame.jpg");

      try {
        const response = await fetch("http://localhost:5000/api/detct", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          alert(errorData.detail);
          setLoading(false);
          return;
        }

        const data = await response.json();
        setResults(data);

        // Approve if first detected face is female
        if (data[0]?.gender === "Female") {
          setStatus("Approved ✅");
        } else {
          setStatus("Not Approved ❌");
        }
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    }, "image/jpeg");
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-charcoal-gray dark:text-off-white min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex grow flex-col">
          <div className="px-4 sm:px-10 lg:px-20 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1">
              
              {/* Header */}
              <header className="flex items-center justify-between px-4 sm:px-10 py-3">
                <div className="flex items-center gap-4 text-charcoal-gray dark:text-off-white">
                  <div className="h-8 w-8 text-primary">
                    <svg fill="currentColor" viewBox="0 0 48 48">
                      <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">HerDhara</h2>
                </div>
              </header>

              {/* Main Content */}
              <main className="flex flex-1 items-center justify-center py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl">
                  
                  {/* Camera Feed */}
                  <div className="hidden lg:flex items-center justify-center p-4 flex-col gap-4">
                    {!cameraActive ? (
                      <button
                        className="px-6 py-3 bg-primary text-white rounded-lg font-bold"
                        onClick={() => setCameraActive(true)}
                      >
                        Activate Camera
                      </button>
                    ) : (
                      <>
                        <video
                          ref={videoRef}
                          className="w-full h-96 rounded-lg border border-gray-300"
                          autoPlay
                          muted
                        />
                        <button
                          onClick={captureAndDetect}
                          className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold"
                        >
                          {loading ? "Analyzing..." : "Capture & Detect"}
                        </button>

                        {results.length > 0 && (
                          <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow w-full">
                            <p className="text-lg font-bold">Detection Result:</p>
                            {results.map((res, idx) => (
                              <div key={idx}>
                                <p>Gender: {res.gender}</p>
                                <p>Age: {res.age}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {status && (
                          <div className="mt-4 p-4 bg-green-200 text-green-800 rounded shadow w-full text-center font-bold">
                            {status}
                          </div>
                        )}

                        <canvas ref={canvasRef} className="hidden"></canvas>
                      </>
                    )}
                  </div>

                  {/* Form Section */}
                  <div className="flex flex-col justify-center bg-lilac-light/60 dark:bg-background-dark/50 p-6 sm:p-10 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold pb-4">Create Your Account</h1>
                    <div className="flex flex-col gap-4 py-3">
                      <div>
                        <p className="text-lg font-medium pb-2">Full Name</p>
                        <input className="form-input w-full rounded-lg h-16 pl-4 pr-4 border" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <p className="text-lg font-medium pb-2">Mobile Number</p>
                        <input className="form-input w-full rounded-lg h-16 pl-4 pr-4 border" placeholder="Enter your mobile number" />
                      </div>
                    </div>
                    <button className="w-full rounded-lg h-16 px-6 bg-primary text-black text-xl font-bold shadow-lg mt-6">
                      Create Account
                    </button>
                  </div>

                </div>
              </main>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
