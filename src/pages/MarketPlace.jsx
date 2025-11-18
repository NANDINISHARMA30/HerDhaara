import React from "react";

export default function MarketPlace() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display 
      bg-[var(--background-light)] text-[var(--text-light)] 
      dark:bg-[var(--background-dark)] dark:text-[var(--text-dark)]">

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b 
        border-[var(--border-light)] dark:border-[var(--border-dark)]
        bg-[var(--background-light)]/80 dark:bg-[var(--background-dark)]/80 backdrop-blur-md">
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[var(--primary)] text-4xl">spa</span>
              <span className="text-2xl font-bold">HerDhara</span>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="flex h-11 w-11 items-center justify-center rounded-full 
                hover:bg-[var(--lavender-light)]/50 dark:hover:bg-white/10">
                <span className="material-symbols-outlined">notifications</span>
              </button>

              <img
                alt="User avatar"
                className="h-11 w-11 rounded-full object-cover ring-2 ring-[var(--lavender-light)] dark:ring-[var(--lavender-dark)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM5KAgKEvx35CCv5MiKhn6roz57pyeKmeLZ0HNBxZSnnBardJjE9xcz1zRGArAzwuXYlAMhyd8sw2NIfe4-ZfvR4uVuBc-TX3-Fdj9uK3fnKgji-0YErhdis2UfF5iLVSMVOdQhMjpEPoHFLY1t4SGAEgdJwjH6shNVGZ9-lzFCUU7ddr8eBN3x23BArdUnyZjZ4rsbnZP_h7SqSSC-XtmCBRiF8p54D-C00rvfP1Pn9qlA4WI0s5wT7vmtLoJ4jMT0F474z9f2RxN"
              />
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-12">

          {/* TOP SELLERS */}
          <section className="w-full">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory 
              scrollbar-hide">
              
              {[ /* same sellers */ ].map((seller, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center w-20 gap-2 snap-center group"
                >
                  <div className="relative h-[70px] w-[70px] rounded-full p-[3px]
                    bg-gradient-to-br from-[var(--lavender-light)] via-[var(--lavender)] to-[var(--lavender-dark)]
                    group-hover:scale-105 transition">
                    <img
                      alt={seller.name}
                      src={seller.img}
                      className="h-full w-full rounded-full object-cover border border-white"
                    />
                  </div>
                  <p className="text-sm font-medium truncate">{seller.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FEATURED PRODUCT */}
          <section className="w-full flex justify-center">
            <div className="relative h-[520px] w-full max-w-sm">

              {/* Lavender soft shadow layers */}
              <div className="absolute inset-0 scale-95 translate-y-4 rounded-xl 
                bg-[var(--lavender-light)]/40 shadow-lg"></div>
              <div className="absolute inset-0 scale-90 translate-y-8 rounded-xl 
                bg-[var(--lavender-light)]/60 shadow-xl"></div>

              <div className="relative z-20 h-full w-full rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCPMixn-37qqHZh2oAWpEwaVEMeVJZyIgyDWHQIDxXCpveoyj6ANBWqt6rlf_R2bjcAcf-zK-6zwMRWVf5Sm4Ul24tDawUXuLxOfPxZPLqaZbGFIvj0IVsCVKABC0guwVHPpnupMwF0jbG3m7ObulEjPGPmnOmRAkilEsn3DwC4B9BP5WxQ_vX206GgC519z6-QCQDzQ9KU7eBaFd1XFKFDCkJApzZDBYwALvV4QGlHjOjFTE8ifyukd0kHdXJ_tqE_y4gQ7lx5kxs"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t 
                  from-black/70 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 p-6 z-30 text-white">
                  <h2 className="text-3xl font-bold">Hand-painted Plate</h2>
                  <p className="opacity-90 mt-1">by Geeta S.</p>

                  <p className="text-sm opacity-80 mt-2">
                    A beautifully crafted ceramic plate with traditional motifs.
                  </p>

                  <div className="flex gap-4 mt-6">

                    <button className="h-14 w-14 flex items-center justify-center rounded-full 
                      bg-white/10 text-red-300 hover:bg-white/20">
                      <span className="material-symbols-outlined text-3xl">close</span>
                    </button>

                    <button className="flex-1 flex items-center justify-center gap-2 
                      bg-[var(--primary)] py-4 rounded-full text-lg font-bold text-white 
                      hover:scale-[1.03] transition">
                      <span className="material-symbols-outlined">shopping_cart</span>
                      View Product
                    </button>

                    <button className="h-14 w-14 flex items-center justify-center rounded-full 
                      bg-white/10 text-pink-300 hover:bg-white/20">
                      <span className="material-symbols-outlined text-3xl">favorite</span>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WELCOME SECTION */}
          <section>
            <h1 className="text-3xl font-bold">Welcome back, Anita!</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="h-40 rounded-xl p-6 bg-[var(--lavender-light)] shadow hover:shadow-md">
                New Courses
              </div>
              <div className="h-40 rounded-xl p-6 bg-[var(--lavender-light)] shadow hover:shadow-md">
                Featured Products
              </div>
              <div className="h-40 rounded-xl p-6 bg-[var(--lavender-light)] shadow hover:shadow-md">
                Community Hub
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
