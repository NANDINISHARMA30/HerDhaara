import React from "react";

export default function Signup() {
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
                    {/* Logo */}
                    <svg
                      fill="currentColor"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"></path>
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">HerDhara</h2>
                </div>

                <button className="flex min-w-[84px] items-center justify-center rounded-full h-12 px-5 bg-lilac-subtle dark:bg-lilac-light/20 text-base font-bold gap-2">
                  <span className="material-symbols-outlined text-2xl">
                    language
                  </span>
                  <span className="hidden sm:inline">Language</span>
                </button>
              </header>

              {/* Main Content */}
              <main className="flex flex-1 items-center justify-center py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl">
                  {/* Illustration */}
                  <div className="hidden lg:flex items-center justify-center p-4">
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-contain"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCR4LA4ilOVi3aBfDFprCJeJGot-_VJy4JESmh_m2IuoaFPYO5Yx90Ly6U4VLD3XLUZv4-EuGV7XJQ0QAcmdSN-PudJMg-3tYnXCRpPMnuk2Nzmu3bIAAmP0QJIrDbFG0Bd4MHICT6OrZqIVnvjPnrx__jmNUft2i7UKHuXJL3LRqU7PwQPDjN51h8mkWtz0RlFeR_ntY2RWrS3EOqujRJf1Ghg9dbDiqRyg7ABKvxrz2wUlUCpeJN_zE1xOTA2F7QlnHyol_Ei9NR1')",
                      }}
                    ></div>
                  </div>

                  {/* Form */}
                  <div className="flex flex-col justify-center bg-lilac-light/60 dark:bg-background-dark/50 p-6 sm:p-10 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold pb-4">
                      Create Your Account
                    </h1>

                    {/* Toggle Buttons */}
                    <div className="flex py-3">
                      <div className="flex h-14 flex-1 items-center justify-center rounded-full bg-lilac-subtle dark:bg-charcoal-gray/20 p-1.5">
                        <label className="flex cursor-pointer h-full grow items-center justify-center rounded-full px-2 has-[:checked]:bg-primary has-[:checked]:text-white">
                          <span>Sign Up</span>
                          <input
                            checked
                            type="radio"
                            name="auth"
                            className="invisible w-0"
                          />
                        </label>

                        <label className="flex cursor-pointer h-full grow items-center justify-center rounded-full px-2 has-[:checked]:bg-primary has-[:checked]:text-white">
                          <span>Log In</span>
                          <input
                            type="radio"
                            name="auth"
                            className="invisible w-0"
                          />
                        </label>
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="flex flex-col gap-4 py-3">
                      {/* Full Name */}
                      <div>
                        <p className="text-lg font-medium pb-2">Full Name</p>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-2xl">
                            person
                          </span>
                          <input
                            className="form-input w-full rounded-lg bg-white dark:bg-charcoal-gray/30 h-16 pl-14 pr-4 border"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      {/* Mobile */}
                      <div>
                        <p className="text-lg font-medium pb-2">Mobile Number</p>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-2xl">
                            phone_iphone
                          </span>
                          <input
                            className="form-input w-full rounded-lg bg-white dark:bg-charcoal-gray/30 h-16 pl-14 pr-4 border"
                            placeholder="Enter your mobile number"
                          />
                        </div>
                      </div>

                      {/* OTP */}
                      <div>
                        <p className="text-lg font-medium pb-2">
                          One-Time Password (OTP)
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="relative flex-grow">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-2xl">
                              password
                            </span>
                            <input
                              className="form-input w-full rounded-lg bg-white dark:bg-charcoal-gray/30 h-16 pl-14 pr-4 border"
                              placeholder="Enter OTP"
                              type="number"
                            />
                          </div>
                          <button className="rounded-lg h-16 px-6 bg-lilac-subtle text-primary text-lg font-bold">
                            Get OTP
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <button className="w-full rounded-lg h-16 px-6 bg-primary text-black text-xl font-bold shadow-lg mt-6">
                      Verify & Create Account
                    </button>

                    <p className="text-center text-gray-500 mt-6">
                      Already have an account?{" "}
                      <span className="font-bold text-primary cursor-pointer">
                        Log In
                      </span>
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
