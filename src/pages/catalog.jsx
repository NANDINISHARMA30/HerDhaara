import React from "react";

export default function Catalog() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 bg-background-light/80 dark:bg-background-dark/80 px-4 sm:px-8 md:px-10 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-4 text-slate-900 dark:text-slate-100">
          <div className="size-6 text-primary-darker dark:text-primary">
            {/* Logo */}
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M13.8 30.57C16.72 29.88 20.22 29.48 24 29.48c3.78 0 7.28.4 10.17 1.1 2.74.65 5.82 2.18 7.18 3.25L24.85 7.36a1 1 0 0 0-1.7 0L6.64 33.84c1.36-1.07 4.44-2.6 7.18-3.27Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight">HerDhara</h2>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <button className="hidden sm:block text-slate-700 dark:text-slate-300 hover:text-primary-darker transition-colors text-sm font-medium">Home</button>
          <button className="hidden sm:block text-slate-900 dark:text-slate-100 font-bold text-sm">My Courses</button>

          <button className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-200 transition-colors text-slate-700 dark:text-slate-300">
            <span className="material-symbols-outlined text-2xl">notifications</span>
          </button>

          <div
            className="size-10 bg-center bg-cover rounded-full"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRakQvPCJkmTF7WxvenV9jK7yKyR6X64uh2DaKAUmGCMAezxSRH7Vcc5sLwEFNT2h15gfDvYlgjJgGbxJhM9vIynnRX5Tk7EwcQkb27y0PFwd2OMoIdYLxTwaxFSUYFjedwPkJOHQDbwyvgBSUaxkBrGtM8ZsFM0vcZCjQNE6v76py5VtxjV05zWEzhzKT0u_NyqHxwL57emHwBZTAMQjaPb_6qYtHkSI1NJXswXPRBQ18IH-vCmvkkXXV94ZipcvoD0QFVlBFpAab")',
            }}
          ></div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 py-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 lg:w-72 md:sticky top-24 self-start">
            <div className="bg-white dark:bg-slate-900/50 p-4 rounded-lg flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center text-primary-darker">
                  <span className="material-symbols-outlined">auto_stories</span>
                </div>
                <div>
                  <h1 className="text-base font-medium text-slate-900 dark:text-slate-100">HerDhara</h1>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Categories</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {[
                  { label: "Basic Education", icon: "auto_stories", active: true },
                  { label: "Vocational Skills", icon: "construction" },
                  { label: "Arts & Crafts", icon: "brush" },
                  { label: "Digital Literacy", icon: "smartphone" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 px-3 py-2 rounded-full cursor-pointer transition-colors ${
                      item.active
                        ? "bg-primary/20 text-primary-darker"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                    <p className="text-sm font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Courses Grid */}
          <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900/50 rounded-xl p-4 shadow-sm flex flex-col gap-3 hover:shadow-md transition"
              >
                <div className="aspect-video rounded-lg bg-primary/20"></div>
                <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-base">
                  Basic Literacy Course {i + 1}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Learn essential reading, writing & communication.
                </p>
                <button className="mt-auto bg-primary text-white py-2 rounded-lg hover:bg-primary-darker transition">
                  Start Learning
                </button>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
