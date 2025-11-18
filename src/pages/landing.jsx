import React from "react";
import { Link } from "react-router-dom";  

export default function HerDhara() {
  return (
    <div className="font-display bg-background-light  text-text-light dark:text-text-dark">
      {/* Entire HTML content converted to JSX */}
      <> 
        {/* Head elements like fonts and scripts should be placed in index.html or using Helmet */}

        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          {/* Background Blurs */}
          <div aria-hidden="true" className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>
          <div aria-hidden="true" className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/10 blur-3xl"></div>

          {/* Header */}
          <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6">
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">spa</span>
                  <span className="text-xl font-bold">HerDhara</span>
                </div>

                <button className="hidden sm:block text-slate-700 dark:text-black hover:text-primary-darker transition-colors text-sm font-medium">Home</button>



                <div className="flex items-center">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-gradient-to-r from-primary to-secondar  text-pink text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                       <Link to="/signup"> 
                        <span className="truncate">Sign In</span>
                         </Link>
                      </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main */}
          <main className="flex h-full grow flex-col">
            <div className="flex flex-1 items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
              <div className="relative z-[1] flex max-w-6xl flex-1 flex-col items-center gap-12">

                {/* Hero Section */}
                <div className="@container w-full">
                  <div className="flex flex-col-reverse items-center gap-8 px-4 py-10 @[864px]:flex-row @[864px]:gap-12">

                    <div className="flex flex-col gap-6 text-center @[864px]:text-left @[864px]:items-start items-center">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl">
                          Welcome to <span className="text-primary">HerDhara</span>
                        </h1>
                        <h2 className="text-text-light dark:text-text-dark text-base font-normal leading-normal sm:text-lg">
                          Your digital space to learn, earn, and grow.
                        </h2>
                      </div>

                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-gradient-to-r from-primary to-secondar  text-pink text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                       <Link to="/Dashboard">
                        <span className="truncate">Get Started</span>
                        </Link>
                      </button>
                    </div>

                    <div
                      className="w-full max-w-lg bg-center bg-no-repeat aspect-square bg-cover rounded-xl @[864px]:w-full"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmzIKtmuev3QT7iTrW7N3iJzwFGWBAEcfS2AIOB6mxTeV0j2opghjy5KHd5YJmHOqfedOZEOOOllK_HKsa133dmII1hU8lXoaVdGCAEQJwxq8BK1I_6-QM67v0QjwowUMVfVdqjUkkbDnyuqr2vmA4spECyLL98kXPN7lBmtDhAcm_We2AfJI0U0oN6YdG5ZLO-PoRry88otphMKswD4CmpI49TWjJXYjWktKTL0T6ynFcO5NzQDrKlCOuxYq0fyNqFzVjHRLJKfwp')",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Empowering Section */}
                <div className="flex w-full max-w-6xl flex-col gap-10 px-4 py-10 @container">
                  <div className="flex flex-col gap-4 text-center">
                    <h3 className="text-text-light dark:text-text-dark tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto">
                      Empowering Your Journey
                    </h3>
                    <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal max-w-[720px] mx-auto">
                      We provide the tools and community to help you succeed. Here’s how we help you grow.
                    </p>
                  </div>

                  <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 lg:gap-6 p-0">
                    {/* Card 1 */}
                    <div className="flex flex-1 gap-4 rounded-lg border border-border-light dark:border-border-dark bg-white/50 dark:bg-background-dark/50 backdrop-blur-sm p-6 flex-col text-center items-center transition-all hover:shadow-xl hover:-translate-y-1">
                      <div className="flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 h-14 w-14 mb-2">
                        <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Learn New Skills</h4>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                          Access courses and training to expand your knowledge.
                        </p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-1 gap-4 rounded-lg border border-border-light dark:border-border-dark bg-white/50 dark:bg-background-dark/50 backdrop-blur-sm p-6 flex-col text-center items-center transition-all hover:shadow-xl hover:-translate-y-1">
                      <div className="flex items-center justify-center rounded-full bg-secondary/10 dark:bg-secondary/20 h-14 w-14 mb-2">
                        <span className="material-symbols-outlined text-secondary text-3xl">groups</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Connect with Peers</h4>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                          Join a supportive network of women just like you.
                        </p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-1 gap-4 rounded-lg border border-border-light dark:border-border-dark bg-white/50 dark:bg-background-dark/50 backdrop-blur-sm p-6 flex-col text-center items-center transition-all hover:shadow-xl hover:-translate-y-1">
                      <div className="flex items-center justify-center rounded-full bg-success/10 dark:bg-success/20 h-14 w-14 mb-2">
                        <span className="material-symbols-outlined text-success text-3xl">trending_up</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Discover Opportunities</h4>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                          Find new ways to earn and achieve financial independence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-6xl">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                    Already have an account? <a className="font-bold text-primary underline" href="/signup">Sign In</a>
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    </div>
  );
}
