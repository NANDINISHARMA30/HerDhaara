import React, { useState } from "react";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, mobileNumber }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message);
        return;
      }

      setMessage("Account created successfully!");
      setFullName("");
      setMobileNumber("");

    } catch (err) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-charcoal-gray dark:text-off-white">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-10 lg:px-20 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1">
              
              {/* HEADER */}
              <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3">
                <div className="flex items-center gap-4 text-charcoal-gray dark:text-off-white">
                  <div className="h-8 w-8 text-primary">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.8261 30.5736C16.7203 ..."></path>
                    </svg>
                  </div>
                  <h2 className="text-charcoal-gray dark:text-off-white text-2xl font-bold leading-tight tracking-[-0.015em]">
                    HerDhara
                  </h2>
                </div>
                
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-lilac-subtle dark:bg-lilac-light/20 text-charcoal-gray dark:text-off-white text-base font-bold leading-normal tracking-[0.015em] gap-2">
                  <span className="material-symbols-outlined text-2xl">language</span>
                  <span className="truncate hidden sm:inline">Language</span>
                </button>
              </header>
              
              {/* MAIN */}
              <main className="flex flex-1 items-center justify-center py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl">
                  
                  {/* IMAGE SIDE */}
                  <div className="hidden lg:flex items-center justify-center p-4">
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-contain aspect-square"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCR4LA4ilOVi3aBfDFprCJeJGot-_VJy4JESmh_m2IuoaFPYO5Yx90Ly6U4VLD3XLUZv4-EuGV7XJQ0QAcmdSN-PudJMg-3tYnXCRpPMnuk2Nzmu3bIAAmP0QJIrDbFG0Bd4MHICT6OrZqIVnvjPnrx__jmNUft2i7UKHuXJL3LRqU7PwQPDjN51h8mkWtz0RlFeR_ntY2RWrS3EOqujRJf1Ghg9dbDiqRyg7ABKvxrz2wUlUCpeJN_zE1xOTA2F7QlnHyol_Ei9NR1")'
                      }}
                    ></div>
                  </div>
                  
                  {/* FORM CARD */}
                  <div className="flex flex-col justify-center bg-[#e9d7ff] dark:bg-background-dark/50 p-6 sm:p-10 rounded-lg shadow-lg">
                    <h1 className="text-charcoal-gray dark:text-off-white tracking-tight text-4xl font-bold leading-tight text-left pb-4">
                      Create Your Account
                    </h1>
                    
                    {/* Toggle Buttons */}
                    <div className="flex px-0 py-3">
                      <div className="flex h-14 flex-1 items-center justify-center rounded-full bg-lilac-subtle dark:bg-charcoal-gray/20 p-1.5">
                        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-primary has-[:checked]:dark:bg-primary has-[:checked]:shadow-md has-[:checked]:text-black text-gray-500 dark:text-black-400 text-lg font-medium transition-all duration-300">
                          <span>Sign Up</span>
                          <input className="invisible w-0" type="radio" name="auth-toggle" defaultChecked />
                        </label>
                        
                        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-primary has-[:checked]:dark:bg-primary has-[:checked]:shadow-md has-[:checked]:text-black text-gray-500 dark:text-gray-400 text-lg font-medium transition-all duration-300">
                          <span>Log In</span>
                          <input className="invisible w-0" type="radio" name="auth-toggle" />
                        </label>
                      </div>
                    </div>
                    
                    {/* FORM FIELDS */}
                    <div className="flex flex-col gap-4 py-3">
                      
                      {/* Full Name */}
                      <div className="relative flex flex-col">
                        <p className="text-lg font-medium pb-2">Full Name</p>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-2xl">
                            person
                          </span>
                          <input
                            className="form-input w-full rounded-lg h-16 pl-14 pr-4 border bg-white dark:bg-charcoal-gray/30"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      {/* Mobile Number */}
                      <div className="relative flex flex-col">
                        <p className="text-lg font-medium pb-2">Mobile Number</p>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-2xl">
                            phone_iphone
                          </span>
                          <input
                            type="tel"
                            className="form-input w-full rounded-lg h-16 pl-14 pr-4 border bg-white dark:bg-charcoal-gray/30"
                            placeholder="Enter your mobile number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Submit */}
                    <div className="mt-6">
                      <button
                        onClick={handleSubmit}
                        className="w-full flex items-center justify-center gap-2 rounded-lg h-16 px-6 bg-primary text-black text-xl font-bold shadow-lg hover:opacity-90 transition-opacity"
                      >
                        <span>Verify & Create Account</span>
                        <span className="material-symbols-outlined text-3xl">arrow_forward</span>
                      </button>
                    </div>
                    
                    {/* Message Display */}
                    {message && (
                      <p className={`text-center font-semibold mt-4 ${message.includes('successfully') ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                        {message}
                      </p>
                    )}
                    
                    <p className="text-center text-gray-500 dark:text-gray-400 text-base mt-6">
                      Already have an account?{" "}
                      <a href="#" className="font-bold text-primary hover:underline">
                        Log In
                      </a>
                    </p>
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