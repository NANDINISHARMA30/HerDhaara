import React from "react";

export default function CommunityHub() {
  return (
    <div className="bg-background-soft font-display text-text-main min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">

        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-50 flex h-16 items-center justify-center border-b border-border-color bg-background-light px-6">
          <div className="flex w-full max-w-screen-xl items-center justify-between">

            {/* Left Section */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-text-main">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* svg PATHS */}
                </svg>
                <h1 className="text-xl font-bold">HerDhara</h1>
              </div>

              <nav className="hidden items-center gap-6 lg:flex">
                <a className="text-sm font-medium text-text-secondary hover:text-primary" href="#">Home</a>
                <a className="text-sm font-medium text-text-secondary hover:text-primary" href="#">Learning</a>
                <a className="text-sm font-medium text-text-secondary hover:text-primary" href="#">Resources</a>
                <a className="text-sm font-bold text-primary" href="#">Community Hub</a>
              </nav>
            </div>

            {/* Right Section */}
            <div className="flex flex-1 items-center justify-end gap-4">
              <div className="hidden max-w-xs flex-1 md:block">
                <label className="relative text-text-secondary focus-within:text-text-main">
                  <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                    search
                  </span>
                  <input
                    type="search"
                    placeholder="Search HerDhara..."
                    className="form-input h-10 w-full rounded-full border-none bg-background-soft pl-10 pr-4 text-sm placeholder:text-text-secondary"
                  />
                </label>
              </div>

              <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-background-soft text-text-main">
                <span className="material-symbols-outlined">notifications</span>
                <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent"></div>
              </button>

              <div
                className="h-10 w-10 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC98LXAjScAcPwUBvtpGrWNMGH_x5eFSGhNseJqA4F8rvZruExx_FOW9dA4AzVyAtM6T2weEofMu8tkdr4d_YwFQfgRts7BamlAp2O6Gid6rvolqVPneQnOJkEANS7Asxq0nuxGZktgSGxru5xEhc0BJHWrrURR0fyoNYeBHv_fmYjOvKGBFiBjgcgZHaGveigNaTKTdTzr10f894HWQvTHmPgYnRRdcC7rLLwMUBBi1CVjlkbcF5C1-3f469q_LhJQlDk9j2J3GgY')",
                }}
              ></div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto w-full max-w-screen-xl flex-1 p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

            {/* LEFT SIDEBAR */}
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-24 space-y-6">

                {/* Navigation Menu */}
                <div className="rounded-lg bg-background-light p-4 shadow-sm">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-secondary">
                    Navigation
                  </h3>
                  <nav className="space-y-2">
                    <a className="flex items-center gap-3 rounded-md bg-primary-soft px-3 py-2 text-primary" href="#">
                      <span className="material-symbols-outlined text-xl">dynamic_feed</span>
                      <span className="text-sm font-bold">My Feed</span>
                    </a>
                    <a className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-background-soft" href="#">
                      <span className="material-symbols-outlined text-xl text-text-secondary">trending_up</span>
                      <span className="text-sm font-medium text-text-main">Trending</span>
                    </a>
                    <a className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-background-soft" href="#">
                      <span className="material-symbols-outlined text-xl text-text-secondary">schedule</span>
                      <span className="text-sm font-medium text-text-main">Newest</span>
                    </a>
                  </nav>
                </div>

                {/* Groups */}
                <div className="rounded-lg bg-background-light p-4 shadow-sm">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-secondary">My Groups</h3>

                  <nav className="space-y-2">
                    {/* Group Item */}
                    {/* Repeat as needed */}
                  </nav>

                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary hover:bg-primary/20">
                    <span className="material-symbols-outlined text-xl">add</span>
                    Discover Groups
                  </button>
                </div>

              </div>
            </aside>

            {/* CENTER FEED */}
            <div className="col-span-1 space-y-6 lg:col-span-6">

              {/* Composer Box */}
              <div className="rounded-lg bg-background-light p-4 shadow-sm">
                <div className="flex items-start gap-4">

                  {/* Avatar */}
                  <div
                    className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPGDEITkvT9w33E3ydH56lUHPu7CfehENP-SRqDkne2_MxoxzQpARE2TL7eLKFL60MhdS-TA4318ZSmWvi5BubblyG0ROeBmLuMAg-RGvFFi-1fS6J7v4os220SuCphZNm8iQC1sg4yB_QPeACwiWo93u-GUIxMBIyXNpTYTBj0lO7wRBjtynOOkxpqPMwKloEQOxzudVwZj4KJabQp4VvauN9sxuH1fAK12_kDT-SMDYTdsiobd88-MYqEXMQCmXYAIEqGTGUeFE')",
                    }}
                  ></div>

                  {/* Input */}
                  <div className="flex-1">
                    <textarea
                      rows="3"
                      placeholder="Share your story, Anjali..."
                      className="form-input w-full resize-none rounded bg-background-soft p-3 text-base text-text-main placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary border-none"
                    ></textarea>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-text-secondary">
                        <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-background-soft">
                          <span className="material-symbols-outlined text-xl">image</span>
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-background-soft">
                          <span className="material-symbols-outlined text-xl">sell</span>
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-background-soft">
                          <span className="material-symbols-outlined text-xl">sentiment_satisfied</span>
                        </button>
                      </div>

                      <button className="h-9 rounded-full bg-primary px-6 text-sm font-bold text-white hover:bg-primary/90">
                        Post
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* POSTS */}
              {/* PostCard 1 + PostCard 2 should be here the same way as HTML */}
              {/* I can convert them too — tell me “convert posts also” */}

            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-24 space-y-6">

                {/* Trending Topics */}
                <div className="rounded-lg bg-background-light p-4 shadow-sm">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-secondary">
                    Trending Topics
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-text-main">#SkillSharing</p>
                      <p className="text-xs text-text-secondary">1,204 posts</p>
                    </div>
                  </div>
                </div>

                {/* Events */}
                <div className="rounded-lg bg-background-light p-4 shadow-sm">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-secondary">
                    Upcoming Events
                  </h3>

                  <div className="space-y-4">
                    {/* event items */}
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </main>

      </div>
    </div>
  );
}