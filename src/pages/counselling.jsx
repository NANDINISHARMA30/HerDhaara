import React from "react";

export default function Dashboard() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen w-full">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-4xl">spa</span>
              <span className="text-2xl font-bold">HerDhara</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative flex h-11 w-11 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5">
                <span className="material-symbols-outlined text-text-light dark:text-text-dark !fill-0">notifications</span>
              </button>
              <button>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM5KAgKEvx35CCv5MiKhn6roz57pyeKmeLZ0HNBxZSnnBardJjE9xcz1zRGArAzwuXYlAMhyd8sw2NIfe4-ZfvR4uVuBc-TX3-Fdj9uK3fnKgji-0YErhdis2UfF5iLVSMVOdQhMjpEPoHFLY1t4SGAEgdJwjH6shNVGZ9-lzFCUU7ddr8eBN3x23BArdUnyZjZ4rsbnZP_h7SqSSC-XtmCBRiF8p54D-C00rvfP1Pn9qlA4WI0s5wT7vmtLoJ4jMT0F474z9f2RxN"
                  alt="User avatar"
                  className="h-11 w-11 rounded-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Welcome back, Anita!</h1>

          {/* Example section placeholder */}
          <div className="rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-background-dark p-6">
            <h2 className="text-xl font-bold mb-4">Your Dashboard Content</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Add your dashboard components here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}