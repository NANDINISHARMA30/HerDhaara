import React from "react";
import { Link } from "react-router-dom"; 
import Chatbot from "../pages/Chatbot"; 

export default function HerDhara() {
  // const navigate = useNavigate();
  return (
    <div className="font-display bg-[#F9F5FF] text-[#4b3f55] dark:text-text-dark">
      <>
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

          {/* Soft Lavender Background Blurs */}
          <div aria-hidden="true" className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EAD8FF]/50 blur-3xl"></div>
          <div aria-hidden="true" className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-[#D6C7FF]/40 blur-3xl"></div>

          <header className="sticky top-0 z-50 w-full bg-lighter/80 backdrop-blur-md border-b border-primary/20 px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold">
            HD
          </div>
          <h1 className="text-xl font-bold text-primary tracking-tight">
            HerDhara
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="hover:text-primary transition" href="/dashboard">
            Home
          </a>
          <a className="text-primary font-semibold" href="/market">
            Marketplace
          </a>
          <a className="hover:text-primary transition" href="#">
            Community
          </a>
          <a className="hover:text-primary transition" href="#">
            Events
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <input
            className="hidden lg:block rounded-full px-4 py-2 border border-primary/30 bg-white text-sm focus:ring-primary focus:outline-none w-52"
            placeholder="Search..."
          />
          <button className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            🛒
          </button>
          <button className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            🔔
          </button>
        </div>
      </header>

          {/* Main */}
          <main className="flex h-full grow flex-col">
            <div className="flex flex-1 items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
              <div className="relative z-[1] flex max-w-6xl flex-1 flex-col items-center gap-12">

                {/* Hero Section */}
                <div className="@container w-full">
                  <div className="flex flex-col-reverse items-center gap-10 px-4 py-10 @[864px]:flex-row @[864px]:gap-12">

                    {/* Text */}
                    <div className="flex flex-col gap-6 text-center @[864px]:text-left @[864px]:items-start items-center">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-[#3b2d4f] text-4xl font-black sm:text-5xl lg:text-6xl">
                          Welcome to <span className="text-[#9b5de5]">HerDhara</span>
                        </h1>
                        <h2 className="text-[#6d5d84] text-base sm:text-lg">
                          Your digital space to learn, earn, and grow.
                        </h2>
                      </div>

                      <Link to="/Dashboard">
                        <button className="h-12 px-7 bg-gradient-to-r from-[#c084fc] to-[#a78bfa] text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition-opacity">
                          Get Started
                        </button>
                      </Link>
                    </div>

                    {/* Image */}
                    <div
                      className="w-full max-w-lg bg-center bg-no-repeat aspect-square bg-cover rounded-2xl shadow-xl border border-white/40"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmzIKtmuev3QT7iTrW7N3iJzwFGWBAEcfS2AIOB6mxTeV0j2opghjy5KHd5YJmHOqfedOZEOOOllK_HKsa133dmII1hU8lXoaVdGCAEQJwxq8BK1I_6-QM67v0QjwowUMVfVdqjUkkbDnyuqr2vmA4spECyLL98kXPN7lBmtDhAcm_We2AfJI0U0oN6YdG5ZLO-PoRry88otphMKswD4CmpI49TWjJXYjWktKTL0T6ynFcO5NzQDrKlCOuxYq0fyNqFzVjHRLJKfwp')",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Empower Section */}
                <div className="flex w-full max-w-6xl flex-col gap-10 px-4 py-10 @container">
                  <div className="flex flex-col gap-4 text-center">
                    <h3 className="text-[#3b2d4f] text-[32px] font-bold @[480px]:text-4xl">
                      Empowering Your Journey
                    </h3>
                    <p className="text-[#6d5d84] max-w-[720px] mx-auto">
                      We provide the tools and community to help you succeed. Here’s how we help you grow.
                    </p>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">

                    {/* Card 1 */}
                    <div className="flex flex-col items-center gap-4 rounded-xl border border-[#e9d8ff] bg-white/60 backdrop-blur-md p-6 text-center hover:-translate-y-1 transition-all shadow-md hover:shadow-lg">
                      <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#e7d9ff]">
                        <span className="material-symbols-outlined text-[#9b5de5] text-3xl">lightbulb</span>
                      </div>
                      <h4 className="font-bold text-lg text-[#3b2d4f]">Learn New Skills</h4>
                      <p className="text-sm text-[#6d5d84]">
                        Access courses and training to expand your knowledge.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center gap-4 rounded-xl border border-[#e9d8ff] bg-white/60 backdrop-blur-md p-6 text-center hover:-translate-y-1 transition-all shadow-md hover:shadow-lg">
                      <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#ecdfff]">
                        <span className="material-symbols-outlined text-[#a56eff] text-3xl">groups</span>
                      </div>
                      <h4 className="font-bold text-lg text-[#3b2d4f]">Connect with Peers</h4>
                      <p className="text-sm text-[#6d5d84]">
                        Join a supportive network of women just like you.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center gap-4 rounded-xl border border-[#e9d8ff] bg-white/60 backdrop-blur-md p-6 text-center hover:-translate-y-1 transition-all shadow-md hover:shadow-lg">
                      <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#e5e0ff]">
                        <span className="material-symbols-outlined text-[#8f5ef0] text-3xl">trending_up</span>
                      </div>
                      <h4 className="font-bold text-lg text-[#3b2d4f]">Discover Opportunities</h4>
                      <p className="text-sm text-[#6d5d84]">
                        Find new ways to earn and achieve financial independence.
                      </p>
                    </div>

                  </div>
                </div>

                <div className="w-full max-w-6xl">
                  <p className="text-[#7a6b99] text-sm pb-3 pt-1 text-center">
                    Already have an account?{" "}
                    <a className="font-bold text-[#9b5de5] underline" href="/signup">
                      Sign In
                    </a>
                  </p>
                </div>

              </div>
            </div>
          </main>
        </div>
      </>
      <Chatbot/>
      
    </div>
  );
}
// GOOGLE_API_KEY=AIzaSyC8rI6RWKiB5onNZYOdT7O07MWF5rXKB6Y