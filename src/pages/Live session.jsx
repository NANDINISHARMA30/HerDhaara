import React from "react";

export default function LiveClassPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-10 w-full border-b border-black/10 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-4">
            <div className="text-primary size-7">
              {/* Logo */}
              <svg fill="none" viewBox="0 0 48 48">
                <path
                  d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                  fill="currentColor"
                />
                <path
                  d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight">HerDhara</h2>
          </div>

          <div className="flex items-center gap-6">
            <a className="hidden sm:block text-base font-medium hover:text-primary" href="#">
              Home
            </a>

            {/* Profile */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark shadow-sm">
              <span className="material-symbols-outlined text-2xl">person</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: VIDEO SECTION */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-900 shadow-lg">
              <div
                className="w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxp5LemMrW6UjsGPpaG4D8R0k0hfh75ULhoL_R4Ss3OJ2yP4k2sU0Mek58ikNHQj2Qlg4UG9b4R_QO08b-1SS2pIMGvpbWjJUE7eSSbO6W-KjXTXC8xrPmIaIOrAcsIqevMR2Pd9esnpPZ09ijy1CcsNHzNZSoV3lQt8yaxjNI1ztOzFmvPR-tg-JAuGG7xIM1AGr0KPJg4lJle4FH53FJ6SEGcA4vEuzhA6N15eW5g4r3QGq7oVJqY_hyispRqVkaYj4QgkIIfV7f')",
                }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* VIDEO CONTROLS */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-white">
                <div className="w-full group">
                  <div className="relative h-2 w-full cursor-pointer">
                    <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-white/20">
                      <div className="absolute h-full w-[65%] rounded-full bg-primary"></div>
                    </div>
                    <div
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary shadow"
                      style={{ left: "65%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-xs font-medium mt-2">
                    <span>28:15</span>
                    <span>45:00</span>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <button className="p-2 rounded-full hover:bg-white/10">
                      <span className="material-symbols-outlined text-3xl">replay_10</span>
                    </button>

                    <button className="p-3 bg-primary rounded-full hover:opacity-90">
                      <span className="material-symbols-outlined text-4xl">play_arrow</span>
                    </button>

                    <button className="p-2 rounded-full hover:bg-white/10">
                      <span className="material-symbols-outlined text-3xl">forward_10</span>
                    </button>

                    <span className="material-symbols-outlined text-2xl">volume_up</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-white/10">
                      <span className="material-symbols-outlined text-2xl">closed_caption</span>
                    </button>

                    <button className="p-2 rounded-full hover:bg-white/10">
                      <span className="material-symbols-outlined text-2xl">settings</span>
                    </button>

                    <button className="p-2 rounded-full hover:bg-white/10">
                      <span className="material-symbols-outlined text-2xl">fullscreen</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* TITLE + LIKE SHARE */}
            <div className="mt-6">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h1 className="text-3xl font-bold">Financial Literacy Basics</h1>
                  <p className="text-lg text-muted-light dark:text-muted-dark">With Anjali Sharma</p>
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 h-10 px-4 bg-primary/20 text-primary rounded-lg">
                    <span className="material-symbols-outlined">thumb_up</span> Like
                  </button>
                  <button className="flex items-center gap-2 h-10 px-4 bg-primary/20 text-primary rounded-lg">
                    <span className="material-symbols-outlined">share</span> Share
                  </button>
                </div>
              </div>

              <div className="mt-4 p-4 bg-surface-light dark:bg-surface-dark rounded-lg">
                <p className="text-muted-light dark:text-muted-dark">
                  This live session covers the fundamentals of financial literacy, including
                  budgeting, saving, and investing. Learn how to manage your money effectively and
                  plan for a secure financial future. Perfect for beginners!
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: LIVE CHAT */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg h-full flex flex-col">
            <div className="p-4 border-b border-black/10 dark:border-white/10 flex justify-between">
              <h2 className="text-xl font-bold">Live Chat</h2>

              <p className="text-sm font-medium text-primary flex items-center gap-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                128 watching
              </p>
            </div>

            <div className="flex-grow p-4 space-y-4 overflow-y-auto h-96">
              {/* Chat message */}
              {[
                {
                  name: "Sita",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiYGqDfhZUVfa17LHqZZ6F4o4qlw_BiUGxZWUBxWH96cNQ2I3P2VA6p4DNqd84OYmUJvLnXkBMAfvyUix0i08J4JIWb6MT7Hd4dWr-xUtzWUSM3DUFW0aDwj5zmYlY5yldyjTlBjy-qFhN5UgkqhXHEbMEVQrmdnpVfoY_GXDdMVem56mLDgJTSXshQ7UDjRlMaauC-ezo1vwmXtqh5hQgSyII1dkZ5zanqIoLePA3Ta3a_NEfX_0pTkPOHIRGZd2yFdOi0VPQZIZ-",
                  text: "This is so helpful, thank you Anjali ji!",
                },
                {
                  name: "Radha",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlbVdsx3BkqJFnpuNr7rTs7QLHtvtaZVT3H_kJmmvbENN8GmJHrVPKFXuD2gtiwgNX7id3iApaz_8izhj7yghVDU-sr4FT_y9B53tFbJWgRVMOYWa1TriNRX-g0RvFyrt3H0IFP14joNxUEhMCXo2MwM-baMl7_9_w2GdY2R2lPLPCzZ0CjHxNiaTtKghJPczTg_WtLUB61pZ8CWzsH3MJhLzNslycufMpn16Vmqsd2dxL_MUGx8OPPKxR_ThNP_y6xfVVZY2f7w4v",
                  text: "Can you explain the difference between saving and investing again?",
                },
                {
                  name: "Anjali Sharma (Instructor)",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6css8JutVAkDtbQtVXqtc2KOT_ZxUQGQ6mQaEubSWs846Xdlb6wtduUD4eXfaLiVb6h35w4yZTIWK-9fS1EEI8Jih6aHgSA1UGl8GwEeozazj4zYNTtmB_wQ-UzJwMFNT4d6sQ6ySw7wnTMEprxYRkgEWXIz5LmjFSyFQA7qEL40iVru10E1mIjcMjhJuoEJIRrM8-0ol94IYs4RrKV61qQOb0rLVv70KQeHKIsaWbHFR6_SICFVEP4XN_3hAYQrgqc0fCHogtR2p",
                  text: "Saving is for short-term goals, investing is for long-term growth.",
                  highlight: true,
                },
              ].map((msg, i) => (
                <div className="flex items-start gap-3" key={i}>
                  <img src={msg.img} alt={msg.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <p className={`text-sm font-bold ${msg.highlight ? "text-primary" : ""}`}>
                      {msg.name}
                    </p>
                    <p className="text-sm text-muted-light dark:text-muted-dark">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
