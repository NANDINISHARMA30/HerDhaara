import React from "react";

export default function TeacherProfile() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-body min-h-screen">
      {/* HEADER */}
      <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-4 sm:px-10 md:px-20 lg:px-40 py-3 bg-white dark:bg-background-dark shadow-sm">
        <div className="flex items-center gap-4 text-text-headings dark:text-gray-200">
          <div className="size-6 text-primary">
            {/* Logo SVG */}
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold">HerDhara</h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <div className="flex items-center gap-9">
            <a className="text-text-headings dark:text-gray-300 text-sm">Home</a>
            <a className="text-text-headings dark:text-gray-300 text-sm">
              Find a Teacher
            </a>
            <a className="text-text-headings dark:text-gray-300 text-sm">
              About Us
            </a>
          </div>

          <button className="h-10 px-4 bg-primary text-white rounded-lg text-sm font-bold">
            Log In
          </button>

          <div
            className="size-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7TmF3vW1EBkFQTSD9rXsnDP2DKDMDH1iMOgTf3zx43vAFso23wCT7od7mdctoazTZ7csuPUjJCHSs7TRdZ7YZH1AyF_rf3LrX3lEgbyOrF3YlBTAUYmJWZL9cFtPKSulJaCvTA1Mc6Lt_Y8ZJjr9jEe83azz_klG5MDpEabKhbpDrlWsKbGGqrP5--LatPuxs63xIL3RB-2v9d3aVJTgy0M1p6p-_K8GgunhVuCtPAqbdpaowojHTTHgJmCdDkDyA8X6JSY4qRbGC')",
            }}
          ></div>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden text-text-headings dark:text-gray-200">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="px-4 sm:px-10 md:px-20 lg:px-40 py-5 md:py-10 flex justify-center">
        <div className="w-full max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex flex-wrap gap-2 p-4">
            <a className="text-sm">Home</a>
            <span>/</span>
            <a className="text-sm">Teachers</a>
            <span>/</span>
            <span className="text-sm font-medium text-text-headings dark:text-gray-200">
              Ananya Sharma
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
            {/* LEFT SIDEBAR */}
            <aside className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border">
                <div className="flex flex-col items-center text-center gap-4">
                  {/* Profile Image */}
                  <div
                    className="rounded-full w-32 aspect-square bg-cover border-4 border-primary"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHZH6vh9_Z2eU9Xn2r7-KAzR2nXx8r3EnsG149i9MVECq1PJIkUcyQpKHaUnQqveP7VzfhZcYG9ONO_zK7iJctu_F5AswIklX-T7nFqsopk-a1viUk8d6WNrLe23Pjyh31XD8ebEiivKODOJSYNthLlpV-Xwa-JKSBljepcNTKZWKeWvEAIh0Clujr0ViGGZovJh2YrOPRU3fzOWsF6Ir0HV6cRymg5KT38Dzoz6bVM0ZoTWwcVNViOyEozuswraCv5ZmXmKqml4qe')",
                    }}
                  ></div>

                  <h1 className="text-[22px] font-bold text-text-headings dark:text-gray-100">
                    Ananya Sharma
                  </h1>
                  <p className="text-sm text-text-body dark:text-gray-400">
                    Jaipur, Rajasthan
                  </p>

                  {/* Verified */}
                  <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1 rounded-full text-sm font-medium">
                    <span className="material-symbols-outlined text-primary">
                      verified
                    </span>
                    <p className="text-primary">Verified Teacher</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary">
                      star
                    </span>
                    <span className="material-symbols-outlined text-primary">
                      star
                    </span>
                    <span className="material-symbols-outlined text-primary">
                      star
                    </span>
                    <span className="material-symbols-outlined text-primary">
                      star
                    </span>
                    <span className="material-symbols-outlined text-primary">
                      star_half
                    </span>
                    <span className="text-sm">(4.5 / 24 reviews)</span>
                  </div>

                  {/* Buttons */}
                  <div className="w-full flex flex-col gap-3 mt-4">
                    <button className="h-12 bg-primary text-white rounded-lg font-bold">
                      Book a Session
                    </button>
                    <button className="h-12 border border-gray-300 dark:border-gray-600 rounded-lg font-bold">
                      Contact Teacher
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border space-y-8">
              {/* Tabs (Static UI) */}
              <div className="flex border-b gap-8 px-4 pb-3">
                <a className="border-b-4 border-primary pb-3 text-primary font-bold">
                  About
                </a>
                <a className="text-text-body dark:text-gray-400 pb-3">Skills</a>
                <a className="text-text-body dark:text-gray-400 pb-3">
                  Reviews
                </a>
                <a className="text-text-body dark:text-gray-400 pb-3">
                  Pricing
                </a>
              </div>

              {/* ABOUT */}
              <section>
                <h3 className="text-lg font-bold text-text-headings dark:text-gray-100">
                  About Ananya
                </h3>
                <p className="mt-2 leading-relaxed">
                  Hello! I'm Ananya, a passionate educator from Jaipur with over
                  8 years of experience in community development and skill
                  training. My mission is to empower women through education,
                  helping them gain financial independence and confidence.
                </p>
              </section>

              {/* SKILLS */}
              <section>
                <h3 className="text-lg font-bold text-text-headings dark:text-gray-100">
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    "Digital Literacy",
                    "Financial Planning",
                    "Handicrafts",
                    "Spoken English",
                    "Business Communication",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-secondary/30 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
