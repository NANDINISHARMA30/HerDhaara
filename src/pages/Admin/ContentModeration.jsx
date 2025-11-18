import React from "react";

const ContentModeration = () => {
  return (
    <div className="flex h-screen w-full font-display bg-off-white dark:bg-background-dark text-charcoal dark:text-off-white">
      {/* Left Panel: SideNavBar */}
      <aside className="flex h-full w-64 flex-col border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              data-alt="Admin avatar"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrrPVTRoQcovPrg0C84PkEbRSgiBzmHKGD8KudzMsNKBvijxBg8fNP2jr91ZkcYN2LJjqPp8L7SF2yy5SrV1zHRHOP8OJl5AFluSTTWoKugmt_lunwdle_-8okx5wXWya2HM-B_9U9NYd43bRNaJ4KmnuxfqqECgUs3LLTvsf0t13LYEGq3yvHbFNUOk4WCSPVoR1_TsXqZDudDUEzHAXQB00-2ce7pH8lTMI2RLPVCSxP0tvElBqmHD2IGp4wj5anpYXk3lGHUMY")'
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-charcoal dark:text-off-white text-base font-medium leading-normal">
                Priya Sharma
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                HerDhara Platform
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 mt-4">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lilac/20 dark:hover:bg-lilac/30" href="#">
              <span className="material-symbols-outlined text-charcoal dark:text-off-white">
                dashboard
              </span>
              <p className="text-charcoal dark:text-off-white text-sm font-medium leading-normal">
                Dashboard
              </p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lilac/20 dark:hover:bg-lilac/30" href="#">
              <span className="material-symbols-outlined text-charcoal dark:text-off-white">
                group
              </span>
              <p className="text-charcoal dark:text-off-white text-sm font-medium leading-normal">
                Users
              </p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-lilac/20 dark:bg-lilac/30" href="#">
              <span className="material-symbols-outlined text-purple-accent dark:text-lilac">
                rate_review
              </span>
              <p className="text-purple-accent dark:text-lilac text-sm font-medium leading-normal">
                Content Moderation
              </p>
            </a>
          </nav>
        </div>

        {/* Bottom Settings */}
        <div className="mt-auto flex flex-col gap-1">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lilac/20 dark:hover:bg-lilac/30" href="#">
            <span className="material-symbols-outlined text-charcoal dark:text-off-white">
              settings
            </span>
            <p className="text-charcoal dark:text-off-white text-sm font-medium leading-normal">
              Settings
            </p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lilac/20 dark:hover:bg-lilac/30" href="#">
            <span className="material-symbols-outlined text-charcoal dark:text-off-white">
              logout
            </span>
            <p className="text-charcoal dark:text-off-white text-sm font-medium leading-normal">
              Logout
            </p>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 grid grid-cols-12 overflow-hidden">
        {/* Center Panel: Content Queue */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-5 flex flex-col h-screen border-r border-border-light dark:border-border-dark">
          <div className="p-6 border-b border-border-light dark:border-border-dark">
            <p className="text-charcoal dark:text-off-white text-3xl font-bold leading-tight tracking-tight">
              Content Moderation
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Review and manage user-submitted content.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="p-4 border-b border-border-light dark:border-border-dark bg-subtle-light dark:bg-subtle-dark">
            <label className="flex flex-col w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-11">
                <div className="text-gray-500 dark:text-gray-400 flex border-y border-l border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark items-center justify-center pl-3 rounded-l-lg">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-charcoal dark:text-off-white focus:outline-none focus:ring-2 focus:ring-purple-accent border-y border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 text-sm font-normal leading-normal"
                  placeholder="Search by user or keyword..."
                  value=""
                />
              </div>
            </label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              <select className="form-select flex w-full rounded-lg text-charcoal dark:text-off-white focus:outline-none focus:ring-2 focus:ring-purple-accent border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark h-10 px-3 text-sm font-normal leading-normal appearance-none">
                <option selected>All Content Types</option>
                <option>Talent Showcase</option>
                <option>Lesson Plan</option>
                <option>Community Post</option>
              </select>
              <select className="form-select flex w-full rounded-lg text-charcoal dark:text-off-white focus:outline-none focus:ring-2 focus:ring-purple-accent border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark h-10 px-3 text-sm font-normal leading-normal appearance-none">
                <option selected>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
              <input
                type="date"
                className="form-input flex w-full rounded-lg text-charcoal dark:text-off-white focus:outline-none focus:ring-2 focus:ring-purple-accent border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark h-10 px-3 text-sm font-normal leading-normal"
              />
            </div>
          </div>

          {/* Batch Actions */}
          <div className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
            <div className="flex items-center gap-2">
              <input className="form-checkbox h-4 w-4 rounded text-lilac focus:ring-purple-accent" type="checkbox" />
              <span className="text-sm">Select All</span>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-sm font-medium text-white bg-positive-green rounded-md hover:bg-green-700">
                Approve Selected
              </button>
              <button className="px-3 py-1.5 text-sm font-medium text-white bg-negative-red rounded-md hover:bg-red-700">
                Reject Selected
              </button>
            </div>
          </div>

          {/* Content Cards */}
          <div className="flex flex-col">
            {/* Example Card */}
            <div className="flex items-start gap-4 p-4 border-b border-border-light dark:border-border-dark bg-lilac/10 dark:bg-lilac/20 cursor-pointer">
              <input className="form-checkbox h-4 w-4 rounded text-lilac focus:ring-purple-accent mt-1" type="checkbox" />
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxm3yV-I4YFQ9czboylQWwHxMEQV8ATm_JNsxAkzYEtIRydk00DuOUkfjSLXucSpmF7vke_mbguQJIPNZ8Ji6pCV50rWWB0GDf2PrbPUv_X_-TS7sVB5fwrvygO7lcD7ghOSc1FHqJ9mMaRBoMEzXRD7hPt74qs_xRYnS61UoV7ulcXEm3DPQQ-JIO5g0f53hr3nW7AdAkBWMEkYoGPDUZWnFOTmIgogwkTY0ekLZPq6B-QCk215AvTKbISlRo8dEKPeSRE_IwP4w")'
                }}
              ></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-charcoal dark:text-off-white">
                    Lesson Plan: Weaving Techniques
                  </h3>
                  <span className="text-xs font-medium text-yellow-800 bg-yellow-200 px-2 py-0.5 rounded-full">
                    Pending
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Submitted by Anjali Devi</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">June 26, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Detail & Action */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-7 hidden lg:flex flex-col h-screen">
          <div className="flex-1 overflow-y-auto p-8">
            <h2 className="text-2xl font-bold text-charcoal dark:text-off-white">
              Lesson Plan: Weaving Techniques
            </h2>
            <div className="mt-4">
              <div
                className="aspect-video w-full bg-cover bg-center rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWVMysT7_-Zudef2hjKsPRjpCwrZr60DQfRZsBfa7wTPpLYA1fwxFFM-nuVpkO-Y_ZFgfBwABDpVe7zbeesml6bv-EyMVWj1vAzJGRGHyhYizxvCCqB8Q1YXi7N6sBI2Rc_AeB-zgkBSymkEWt0UccqWSl2jB8je0NN7nL5jIDEfpQrhh4To_EYtJCCzUX3_DpP-mYudaI8LNqpkID0r0n3LGWFZrfCSYakdREW9yVGzAOSqCPTFvCSeg6dOtdvCv6LZ_PeP4g21w")'
                }}
              ></div>
            </div>
            <div className="mt-6 prose dark:prose-invert max-w-none prose-p:text-charcoal dark:prose-p:text-off-white prose-headings:text-charcoal dark:prose-headings:text-off-white">
              <p>
                This lesson plan covers the traditional art of backstrap loom weaving, a technique passed down through generations in our community. It includes step-by-step instructions, patterns, and a list of materials needed.
              </p>
              <h4>Objectives:</h4>
              <ul>
                <li>Understand the history and cultural significance of weaving.</li>
                <li>Learn to set up a backstrap loom.</li>
                <li>Master basic weaving patterns.</li>
              </ul>
            </div>
            <hr className="my-6 border-border-light dark:border-border-dark" />

            {/* Submission Details */}
            <div>
              <h3 className="text-lg font-semibold text-charcoal dark:text-off-white">Submission Details</h3>
              <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Submitted By</p>
                  <p className="font-medium text-purple-accent hover:underline cursor-pointer">Anjali Devi</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Submission Date</p>
                  <p className="font-medium">June 26, 2024</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Content Type</p>
                  <p className="font-medium">Lesson Plan</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Status</p>
                  <p className="font-medium text-yellow-600">Pending Review</p>
                </div>
              </div>
            </div>

            <hr className="my-6 border-border-light dark:border-border-dark" />

            {/* Moderation History */}
            <div>
              <h3 className="text-lg font-semibold text-charcoal dark:text-off-white">Moderation History</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                No previous actions on this item.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 border-t border-border-light dark:border-border-dark bg-subtle-light dark:bg-subtle-dark">
            <label className="flex flex-col mb-4">
              <p className="text-charcoal dark:text-off-white text-sm font-medium leading-normal pb-2">
                Rejection Reason (optional)
              </p>
              <textarea
                className="form-textarea flex w-full min-w-0 resize-y rounded-lg text-charcoal dark:text-off-white focus:outline-none focus:ring-2 focus:ring-purple-accent border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark h-24 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                placeholder="Provide feedback to the user..."
              />
            </label>
            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 text-sm font-semibold text-charcoal dark:text-off-white bg-white dark:bg-gray-600 border border-border-light dark:border-border-dark rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500">
                Edit
              </button>
              <button className="px-5 py-2 text-sm font-semibold text-white bg-negative-red rounded-lg hover:bg-red-700">
                Reject
              </button>
              <button className="px-5 py-2 text-sm font-semibold text-white bg-positive-green rounded-lg hover:bg-green-700">
                Approve
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContentModeration;
