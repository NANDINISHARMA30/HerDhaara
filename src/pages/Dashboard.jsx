import React from "react";
import Sidebar from "./Sidebar.jsx";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#faf7ff]">
      <Sidebar />

      {/* Main Wrapper */}
      <div className="font-display bg-[#faf7ff] min-h-screen flex flex-1">

        {/* Main Area */}
        <main className="flex-1 flex flex-col">

          {/* Header */}
          <header className="flex items-center justify-between border-b border-[#e8d9ff] px-10 py-4 bg-white sticky top-0 z-10 shadow-sm">
            <h2 className="text-[#5a3fa3] text-xl font-bold">Home</h2>

            <div className="flex flex-1 justify-end gap-4">

              {/* Search */}
              <label className="flex flex-col min-w-40 max-w-sm w-full">
                <div className="flex w-full items-stretch rounded-full h-10 shadow-inner bg-[#f4eaff]">
                  <div className="text-[#5a3fa3]/70 flex items-center justify-center pl-4 rounded-l-full">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="form-input flex w-full rounded-full bg-transparent px-4 text-sm text-[#5a3fa3] placeholder:text-[#5a3fa3]/60 focus:outline-none"
                    placeholder="Search courses, opportunities..."
                  />
                </div>
              </label>

              {/* Notifications */}
              <button className="flex items-center justify-center rounded-full h-10 w-10 bg-[#f4eaff] hover:bg-[#e9d7ff] transition text-[#5a3fa3] shadow-sm">
                <span className="material-symbols-outlined text-xl">
                  notifications
                </span>
              </button>
            </div>
          </header>

          {/* Scroll Content */}
          <div className="flex-1 p-10 overflow-y-auto">

            {/* Welcome */}
            <div className="flex justify-between mb-10">
              <p className="text-[#5a3fa3] text-4xl font-extrabold tracking-tight">
                Welcome back, Anita! 💜
              </p>
            </div>

            {/* Resume Section */}
            <section>
              <h2 className="text-[#5a3fa3] text-[22px] font-semibold px-4 pb-3 pt-2">
                Resume Your Activity
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">

                {/* Card */}
                <div className="flex items-stretch gap-4 rounded-2xl bg-white p-5 shadow-md border border-[#f2e8ff] hover:shadow-lg transition">
                  <div className="flex flex-col gap-4 w-2/3">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#5a3fa3] font-bold text-lg">
                        Introduction to Digital Marketing
                      </p>
                      <p className="text-[#5a3fa3]/70 text-sm">
                        You are 75% complete—keep going!
                      </p>
                    </div>

                    <button className="flex items-center gap-1 rounded-full h-9 px-4 bg-[#e9d7ff] hover:bg-[#d9c0ff] transition text-[#5a3fa3] text-sm font-medium w-fit shadow-sm">
                      Continue Course
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>

                  <div
                    className="bg-center bg-cover rounded-xl flex-1 aspect-video"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCt8HArENdBWdn87-a-2dzSRvrWXENHaokbcTntLIdEgdqxN8qYXmvZkbunbRsiCCxKoZt1EHNDTJdDRyt8cG102GpnUV3XYX8OG0-Dp7JptaolwJPOZISYoJ1-98TpyZ541YovdPO8QKgF7q35wO8fxNYQhgL79Xbxj0KavX0Duc2KwJcH2zkdl5gbLLx6zT2UxVJkwwCQHsK-w7QqKGwxtE8lBddjxqZseOSIcxTIyj7nXuTUTWYYVHMT2E6DkzYrcApdF2B7nTI')",
                    }}
                  ></div>
                </div>
              </div>
            </section>

            {/* New for You */}
            <section className="mt-10">
              <h2 className="text-[#5a3fa3] text-[22px] font-semibold px-4 pb-3">
                New for You
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">

                {[
                  {
                    label: "New Course",
                    title: "Financial Literacy for Entrepreneurs",
                    desc: "Manage your business finances effectively.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ27q8HWLp3ns6Viubip9Rsh4DeJHg7KA1RGqh4haQbClvVGlVy2upi9Vt1ZhwA35SQD9H2eavkTXKGUl87IjaWTbeE7TjNNxogxqPXHqVsO9UWKZ8cLDOR076MJNK09Z-YFbN9kGCUcCjgIXIGiPnt4KLARipa_z71ydu2XtJfk42SbWvVZP_-kXtZql9KEvqh_Wu7wG3FxfufbF1Un346DeUxLGMYDVtZWX2EdSYdQx35ybCmSt3JotJdx4Ako5e51yWUoVdjm6P",
                    button: "View Course",
                  },
                  {
                    label: "Job Opportunity",
                    title: "Handicraft Artisan Wanted",
                    desc: "Local cooperative seeking skilled artisans.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABIXlwgXxrhbCwr78vymFkhJPzPgK-s4wLb_3ozdd9sh1ezJmXNodIQpFDI3Y2UymMRvEm0uOX2CjXxoUSIWcHdhKo_PJBMFGhg-UVXYI0TxKLlw72VoM5kVyd8_eOgNVqvybJVyZMELDa2AnrhhCti3iHxMH1oPjgXJFLs_35CfJOSn9hgK734G7PhafmBc0F3rJY2OaAFAjbCSAQakjeZvEV4N9afZDiJOPjG2eCYOtIOg35ItuBbW6MiybvFWfeTCmOHCr1ej-u",
                    button: "Learn More",
                  },
                  {
                    label: "Community",
                    title: "Marketing Tips for Small Businesses",
                    desc: "Join the conversation & share experiences.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDoQJ2SnUtGgCjPKt0Ut5s0xqVmLsQ0AxMvRDUSjonDdwwWbyjQ8C63HEw5vUNsYE1iaJ8XGvALd8fxZ43HfiB4hXi5qOxgkx0aUVUAeNL9eTNyBLDcdLcNgiBbQ-OKnS1ReULqyYx24I-5525Z2gIN8ZOgdA9epd2JeaxLJAYlmw_JsT_hTqZPwdpoLA9MGSiDycmWvT5xfFwiotl3ykDdJtn2OsTJDPP9QwfDhJ4cyh-VfBJvTBlZraJVEzubeu1oPXnNK3M41aE",
                    button: "Join Discussion",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-md border border-[#f2e8ff] hover:shadow-lg transition"
                  >
                    <div
                      className="w-full bg-center bg-cover rounded-xl aspect-video"
                      style={{ backgroundImage: `url('${card.img}')` }}
                    ></div>

                    <p className="text-xs text-[#a074ff] uppercase font-bold tracking-wide">
                      {card.label}
                    </p>

                    <p className="text-[#5a3fa3] font-bold text-lg">
                      {card.title}
                    </p>

                    <p className="text-[#5a3fa3]/70 text-sm">{card.desc}</p>

                    <button className="flex mt-auto w-full justify-center rounded-full h-9 px-4 bg-[#e9d7ff] hover:bg-[#d9c0ff] transition text-[#5a3fa3] text-sm font-medium shadow-sm">
                      {card.button}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Talent Spotlight */}
            <section className="mt-10">
              <h2 className="text-[#5a3fa3] text-[22px] font-semibold px-4 pb-3">
                Talent Spotlight
              </h2>

              <div className="p-4">
                <div className="flex flex-col md:flex-row gap-8 rounded-2xl bg-white p-8 shadow-md border border-[#f2e8ff] hover:shadow-lg transition">
                  <div
                    className="w-full md:w-1/2 bg-center bg-cover rounded-xl aspect-video md:aspect-auto"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeT8YYEqCXkAMCj98V9kP4qHMElca_7G04sXSVSiWzme98Zs9KhishkYd2OnwZSPprfDJmdWxe1eDljxB5j7keUB6pRsCsMHJRG3JYNDmvyAzqhleAlC0K1HoTgZXPxWBDQiNj8Z_v3o6sOATnhb6LJ2tdBpPMosukLqtZfhWVcfDjBr7EDhXL1nBh0N9VYqpFxJFRb47TVZ_BtfJ31SjH75_2Mhv_95J5T9260gGu97ppvTSNtGhn1kTSf6NM4YK5KfeumEnepGU2')",
                    }}
                  ></div>

                  <div className="flex flex-col gap-4 flex-1 justify-center">
                    <p className="text-[#5a3fa3] text-2xl font-bold">
                      Meet Anjali: From Hobby to Thriving Business
                    </p>
                    <p className="text-[#5a3fa3]/70 text-base leading-relaxed">
                      "HerDhara’s E-learning modules on business management
                      helped me turn my pottery hobby into a real business. The
                      community support made all the difference!"
                    </p>

                    <button className="flex items-center gap-1 rounded-full h-9 px-4 bg-[#e9d7ff] hover:bg-[#d9c0ff] transition text-[#5a3fa3] text-sm font-medium w-fit shadow-sm">
                      Read Her Story
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
