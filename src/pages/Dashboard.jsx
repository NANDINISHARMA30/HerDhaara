import React from "react";

export default function Dashboard() {
  return (
    <div className="font-display bg-off-white dark:bg-background-dark min-h-screen flex">
      {/* Sidebar */}
      <aside className="flex h-screen min-w-[280px] max-w-[280px] flex-col justify-between bg-white dark:bg-background-dark p-4 border-r border-light-grey/50 dark:border-white/10 sticky top-0">

        {/* Logo */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 items-center px-3 pt-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByDz3TeMSFCqa6FfChstsenpWA2xo-FtzuD9_LTu3xWxqV5xxaU0mUumOPorCUcJT671erq13Lk8FS9iqoC2WUOpMYLc2leA21mKpbOACLq1BtnZwOxFtL_IXuOhq13DSotMQ627g8QZHkAvp67kbpzZHR2UlZq8qcS4G03ReDccEfr-Kz_MOCQG9_zyaVi4s54YXwVly3OTrMB00XcWBmKpOUCAtuR75U1sEasooP9FMzGN9vnfmuDdCxDnRRzjoeYj3nwr-d73x3')",
              }}
            ></div>

            <div className="flex flex-col">
              <h1 className="text-deep-purple dark:text-off-white text-base font-medium leading-normal">
                HerDhara
              </h1>
              <p className="text-deep-purple/70 dark:text-off-white/70 text-sm">
                Empowering Women
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {[
              ["home", "Home", true],
              ["school", "E-Learning"],
              ["star", "Talent Showcase"],
              ["work", "Opportunities"],
              ["forum", "Community Chat"],
            ].map(([icon, label, active], i) => (
              <a
                key={i}
                className={`flex items-center gap-3 px-3 py-2 rounded-full ${
                  active
                    ? "bg-lilac/20 dark:bg-primary/20"
                    : "hover:bg-lilac/20 dark:hover:bg-primary/20"
                }`}
                href="#"
              >
                <span className="material-symbols-outlined text-deep-purple dark:text-off-white">
                  {icon}
                </span>
                <p className="text-deep-purple dark:text-off-white text-sm font-medium">
                  {label}

                </p>

                
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30">
            Chat with an Expert
          </button>

          <div className="flex items-center gap-3 px-3 py-2 border-t border-light-grey/50 dark:border-white/10 pt-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBS5qr6qwbp_Co_EcTAicH0w3a-LX0koO9FF69NEygw7sgkbepmboIGn27Fr4pY50UajG234NBWGErWCPlE-eqFGQ6roiCPi9vJPHQ27L0HHQSihYn9kBBDnhsBnOqsNJ9ggtGigr-62nTPdaeLIiBanAYdImWmfxuyQe2Qa8h3u1_SbffW8vVd7c9Dm7IIjFiq8Rm54MmLQBD6aurFUEzINZypdJ_-Qm_HqeZF7EotnWhfWsEb_cT9snXl3LU5TmAf9fqliAVcA9AC')",
              }}
            ></div>

            <div className="flex flex-col">
              <p className="text-deep-purple dark:text-off-white text-sm font-medium">
                Anita Sharma
              </p>
              <a
                href="#"
                className="text-deep-purple/70 dark:text-off-white/70 text-xs hover:underline"
              >
                View Profile
              </a>
            </div>

            <span className="material-symbols-outlined ml-auto text-deep-purple/70 dark:text-off-white/70">
              settings
            </span>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col">

        {/* Top Header */}
        <header className="flex items-center justify-between border-b border-light-grey/50 dark:border-white/10 px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-10">
          <h2 className="text-deep-purple dark:text-off-white text-lg font-bold">
            Home
          </h2>

          <div className="flex flex-1 justify-end gap-4">
            {/* Search */}
            <label className="flex flex-col min-w-40 max-w-sm w-full">
              <div className="flex w-full items-stretch rounded-full h-10">
                <div className="text-deep-purple/70 dark:text-off-white/70 flex bg-soft-lavender/50 dark:bg-white/10 items-center justify-center pl-4 rounded-l-full">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full rounded-full text-deep-purple dark:text-off-white bg-soft-lavender/50 dark:bg-white/10 px-4 text-sm placeholder:text-deep-purple/70 dark:placeholder:text-off-white/70 focus:outline-0 focus:ring-2 focus:ring-primary/50"
                  placeholder="Search courses, opportunities..."
                />
              </div>
            </label>

            {/* Notification */}
            <button className="flex items-center justify-center rounded-full h-10 bg-soft-lavender/50 dark:bg-white/10 text-deep-purple dark:text-off-white px-2.5">
              <span className="material-symbols-outlined text-xl">
                notifications
              </span>
            </button>
          </div>
        </header>

        {/* Scroll Content */}
        <div className="flex-1 p-10 overflow-y-auto">

          {/* Welcome Text */}
          <div className="flex justify-between mb-8">
            <p className="text-deep-purple dark:text-off-white text-4xl font-black">
              Welcome back, Anita!
            </p>
          </div>

          {/* Resume Your Activity */}
          <section>
            <h2 className="text-deep-purple dark:text-off-white text-[22px] font-bold px-4 pb-3 pt-5">
              Resume Your Activity
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
              {/* Card */}
              <div className="flex items-stretch gap-4 rounded-lg bg-white dark:bg-white/5 p-4 shadow-sm">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-deep-purple dark:text-off-white font-bold">
                      Introduction to Digital Marketing
                    </p>
                    <p className="text-deep-purple/70 dark:text-off-white/70 text-sm">
                      You are 75% complete with this module. Keep going!
                    </p>
                  </div>

                  <button className="flex items-center gap-1 rounded-full h-8 px-4 bg-soft-lavender dark:bg-white/10 text-deep-purple dark:text-off-white text-sm font-medium w-fit">
                    Continue Course
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </button>
                </div>

                <div
                  className="w-full bg-center bg-cover rounded-md flex-1 aspect-video"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCt8HArENdBWdn87-a-2dzSRvrWXENHaokbcTntLIdEgdqxN8qYXmvZkbunbRsiCCxKoZt1EHNDTJdDRyt8cG102GpnUV3XYX8OG0-Dp7JptaolwJPOZISYoJ1-98TpyZ541YovdPO8QKgF7q35wO8fxNYQhgL79Xbxj0KavX0Duc2KwJcH2zkdl5gbLLx6zT2UxVJkwwCQHsK-w7QqKGwxtE8lBddjxqZseOSIcxTIyj7nXuTUTWYYVHMT2E6DkzYrcApdF2B7nTI')",
                  }}
                ></div>
              </div>
            </div>
          </section>

          {/* New for you */}
          <section className="mt-8">
            <h2 className="text-deep-purple dark:text-off-white text-[22px] font-bold px-4 pb-3 pt-5">
              New for You
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {/* Card 1 */}
              {[
                {
                  label: "New Course",
                  title: "Financial Literacy for Entrepreneurs",
                  desc: "Learn to manage your business finances effectively.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ27q8HWLp3ns6Viubip9Rsh4DeJHg7KA1RGqh4haQbClvVGlVy2upi9Vt1ZhwA35SQD9H2eavkTXKGUl87IjaWTbeE7TjNNxogxqPXHqVsO9UWKZ8cLDOR076MJNK09Z-YFbN9kGCUcCjgIXIGiPnt4KLARipa_z71ydu2XtJfk42SbWvVZP_-kXtZql9KEvqh_Wu7wG3FxfufbF1Un346DeUxLGMYDVtZWX2EdSYdQx35ybCmSt3JotJdx4Ako5e51yWUoVdjm6P",
                  button: "View Course",
                },
                {
                  label: "Job Opportunity",
                  title: "Handicraft Artisan Wanted",
                  desc: "Local cooperative looking for skilled artisans.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABIXlwgXxrhbCwr78vymFkhJPzPgK-s4wLb_3ozdd9sh1ezJmXNodIQpFDI3Y2UymMRvEm0uOX2CjXxoUSIWcHdhKo_PJBMFGhg-UVXYI0TxKLlw72VoM5kVyd8_eOgNVqvybJVyZMELDa2AnrhhCti3iHxMH1oPjgXJFLs_35CfJOSn9hgK734G7PhafmBc0F3rJY2OaAFAjbCSAQakjeZvEV4N9afZDiJOPjG2eCYOtIOg35ItuBbW6MiybvFWfeTCmOHCr1ej-u",
                  button: "Learn More",
                },
                {
                  label: "Community Discussion",
                  title: "Marketing Tips for Small Businesses",
                  desc: "Join the conversation and share your experiences.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDoQJ2SnUtGgCjPKt0Ut5s0xqVmLsQ0AxMvRDUSjonDdwwWbyjQ8C63HEw5vUNsYE1iaJ8XGvALd8fxZ43HfiB4hXi5qOxgkx0aUVUAeNL9eTNyBLDcdLcNgiBbQ-OKnS1ReULqyYx24I-5525Z2gIN8ZOgdA9epd2JeaxLJAYlmw_JsT_hTqZPwdpoLA9MGSiDycmWvT5xfFwiotl3ykDdJtn2OsTJDPP9QwfDhJ4cyh-VfBJvTBlZraJVEzubeu1oPXnNK3M41aE",
                  button: "Join Discussion",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 rounded-lg bg-white dark:bg-white/5 p-4 shadow-sm"
                >
                  <div
                    className="w-full bg-center bg-cover rounded-md aspect-video"
                    style={{ backgroundImage: `url('${card.img}')` }}
                  ></div>

                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-primary uppercase font-bold">
                      {card.label}
                    </p>
                    <p className="text-deep-purple dark:text-off-white font-bold">
                      {card.title}
                    </p>
                    <p className="text-deep-purple/70 dark:text-off-white/70 text-sm">
                      {card.desc}
                    </p>
                  </div>

                  <button className="flex mt-auto w-full justify-center rounded-full h-9 px-4 bg-soft-lavender dark:bg-white/10 text-deep-purple dark:text-off-white text-sm font-medium">
                    {card.button}
                  </button>e learning
                </div>
              ))}
            </div>
          </section>

          {/* Talent Spotlight */}
          <section className="mt-8">
            <h2 className="text-deep-purple dark:text-off-white text-[22px] font-bold px-4 pb-3 pt-5">
              Talent Spotlight
            </h2>

            <div className="p-4">
              <div className="flex flex-col md:flex-row gap-8 rounded-lg bg-white dark:bg-white/5 p-6 shadow-sm">
                <div
                  className="w-full md:w-1/2 bg-center bg-cover rounded-md aspect-video md:aspect-auto"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeT8YYEqCXkAMCj98V9kP4qHMElca_7G04sXSVSiWzme98Zs9KhishkYd2OnwZSPprfDJmdWxe1eDljxB5j7keUB6pRsCsMHJRG3JYNDmvyAzqhleAlC0K1HoTgZXPxWBDQiNj8Z_v3o6sOATnhb6LJ2tdBpPMosukLqtZfhWVcfDjBr7EDhXL1nBh0N9VYqpFxJFRb47TVZ_BtfJ31SjH75_2Mhv_95J5T9260gGu97ppvTSNtGhn1kTSf6NM4YK5KfeumEnepGU2')",
                  }}
                ></div>

                <div className="flex flex-col gap-4 flex-1 justify-center">
                  <div className="flex flex-col gap-2">
                    <p className="text-deep-purple dark:text-off-white text-2xl font-bold">
                      Meet Anjali: From Hobby to Thriving Business
                    </p>
                    <p className="text-deep-purple/70 dark:text-off-white/70 text-base">
                      "HerDhara's E-learning modules on business management gave
                      me the confidence to turn my passion for pottery into a
                      successful online store. The community support has been
                      incredible!"
                    </p>
                  </div>

                  <button className="flex items-center gap-1 rounded-full h-9 px-4 bg-lilac/20 dark:bg-white/10 text-deep-purple dark:text-off-white text-sm font-medium w-fit">
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
  );
}
