// Dashboard.jsx
import React from "react";

export default function Dashboard() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      
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
                  alt="User avatar"
                  className="h-11 w-11 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM5KAgKEvx35CCv5MiKhn6roz57pyeKmeLZ0HNBxZSnnBardJjE9xcz1zRGArAzwuXYlAMhyd8sw2NIfe4-ZfvR4uVuBc-TX3-Fdj9uK3fnKgji-0YErhdis2UfF5iLVSMVOdQhMjpEPoHFLY1t4SGAEgdJwjH6shNVGZ9-lzFCUU7ddr8eBN3x23BArdUnyZjZ4rsbnZP_h7SqSSC-XtmCBRiF8p54D-C00rvfP1Pn9qlA4WI0s5wT7vmtLoJ4jMT0F474z9f2RxN"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-12">

          {/* Top Sellers Section */}
          <section className="w-full">
            <div className="flex snap-x snap-mandatory scroll-p-4 gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {[
                { name: "Priya S.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW1RRY-k9UQ72xnZVLXSIPrkLokSXI7RChmCBKzsKXA2TfDkrgUn21TOruiWqowXJuqn-RH5npIZVhTL4CHjaAk3u86eQtBYPFnzf-GijVbdJ21TNTY9pk58gYt8r6vLNgDXn7zIz3QHUwub6Lqb3d3qT2e5RCHeUR3VZKt7CpbVUO9Z7E1hziubj1OBmvMNmYSOhConkSR5u_PBbmL7N_9I1IKi5mWSerFzQBDtQuOeX7DCUbEZrT5kPeb44UdBoIrKFXBriNrVye" },
                { name: "Meena K.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_NFO4cTF4-u3I9-xRJ_bZPo02A2fzau-bV1WKQsV3ucS6BFXwiat9LUnHkFv6hQlI7wmCt8OJAKgI-8zNGLRPpBEqdlbclR2dCK5TUC7JEJOtf6H1sPrPkcD8tzq7goj4c7URbndgCHJYV-QpIU9KqoeLxOhOJetR4AEOzn-ksPK3y7Gg8WBAkAv1VhQOZdFUOkBsArIxUNrcKkL1qtL0E8NHSeZg-nR3svRAaEq87Tle2a-LQaS9I7NfMOjKc35h7XSv6zCb2x_-" },
                { name: "Sunita D.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDISQ3ngc21UkSsySWR3CnGZAuWp8_SMiSJXihsFOHBfPeKC3METtTO8kJxu0OcZLiv9sG62egGCLwcAdlDQtLoUk7jl3X6nmv9Ykch3IrH0ikL8A1sLG79QRD_aTJspUr-0yD50PmL5C-JTgbsbm_JxIN-sw0AYDjUWvKgcpHfzUkdQrLG44xmHphxlcCEyvoJATpL5tfeO0liGyyt-n-jxU3Ko5jdGvhO7fDTaX6eihAisMQEyA51J24TUnU8XQPPa3m4p9FR5pmN" },
                { name: "Anjali M.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeFvJ-5clNIIUr5KkZOCGIutQnoDzPAdEbOt6HBKaieYHcDn9qwJIRctd5lG8u3uzpb4uns1T8rEH0idKgZ-r-YpBNiuw4o42OY8QrR0GZSIKk17-NTyQSo3kE85s1Bzg4GKkcdXQpoMJu-eozcQfnOtTC-r6MKCFRf84PX3dMdLhdIxnm15ScP7PRbTTAnQf3SHJpibRe7sET0iJcNpMPYTmOO7SyXtGYcI7x6pAQNbasCtGkfO6zF1Pm7BCTEUV5KSVPoMMUpiGl" },
              ].map((seller, idx) => (
                <a key={idx} className="flex flex-none flex-col items-center justify-center gap-2.5 text-center w-20 group" href="#">
                  <div className="relative flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-violet-600 p-1 ring-2 ring-transparent ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark transition-transform group-hover:scale-105">
                    <img alt={seller.name} className="h-full w-full rounded-full object-cover border-2 border-background-light dark:border-background-dark" src={seller.img} />
                  </div>
                  <p className="text-sm font-medium text-text-light dark:text-text-dark truncate">{seller.name}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Featured Product Section */}
          <section className="w-full">
            <div className="relative mx-auto flex h-[550px] w-full max-w-sm flex-col items-center justify-center">
              <div className="absolute inset-x-0 top-0 z-10 h-full origin-bottom scale-[0.9] rounded-xl bg-background-light/50 dark:bg-background-dark/50 shadow-lg" style={{ transform: "translateY(2.5rem)" }}></div>
              <div className="absolute inset-x-0 top-0 z-20 h-full origin-bottom scale-[0.95] rounded-xl bg-background-light/70 dark:bg-background-dark/70 shadow-lg" style={{ transform: "translateY(1.25rem)" }}></div>
              <div className="relative z-30 flex h-full w-full flex-col justify-end overflow-hidden rounded-xl bg-background-light dark:bg-background-dark shadow-2xl shadow-black/10">
                <img alt="Hand-painted decorative plate" className="absolute inset-0 z-0 h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCPMixn-37qqHZh2oAWpEwaVEMeVJZyIgyDWHQIDxXCpveoyj6ANBWqt6rlf_R2bjcAcf-zK-6zwMRWVf5Sm4Ul24tDawUXuLxOfPxZPLqaZbGFIvj0IVsCVKABC0guwVHPpnupMwF0jbG3m7ObulEjPGPmnOmRAkilEsn3DwC4B9BP5WxQ_vX206GgC519z6-QCQDzQ9KU7eBaFd1XFKFDCkJApzZDBYwALvV4QGlHjOjFTE8ifyukd0kHdXJ_tqE_y4gQ7lx5kxs" />
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="relative z-20 flex flex-col gap-6 p-6 text-white">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <h2 className="text-3xl font-bold">Hand-painted Plate</h2>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                        <span className="material-symbols-outlined text-xl">verified</span>
                      </div>
                    </div>
                    <p className="text-base font-medium">by Geeta S.</p>
                    <p className="text-sm font-light leading-relaxed text-white/90 line-clamp-2">A beautifully crafted ceramic plate, hand-painted with traditional motifs. Perfect for decoration or special occasions.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-red-400 backdrop-blur-sm transition-colors hover:bg-white/20">
                      <span className="material-symbols-outlined !fill-0 text-4xl">close</span>
                    </button>
                    <button className="flex flex-grow items-center justify-center gap-2 rounded-full bg-primary py-4 px-6 text-lg font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105">
                      <span className="material-symbols-outlined !fill-0">shopping_cart</span>
                      <span>View Product</span>
                    </button>
                    <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-green-400 backdrop-blur-sm transition-colors hover:bg-white/20">
                      <span className="material-symbols-outlined !fill-0 text-4xl">favorite</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Welcome & Cards Section */}
          <div className="flex w-full flex-col gap-8">
            <h1 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark sm:text-4xl">Welcome back, Anita!</h1>

            <div className="grid grid-cols-1 gap-6 @container md:grid-cols-2 lg:grid-cols-3">
              {/* New Courses, Featured Products, Community Hub cards */}
              {/* Each card can be extracted as a separate component for cleanliness */}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
