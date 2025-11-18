import React from "react";

export default function MarketplaceScreen() {
  return (
    <div className="bg-lighter font-display text-gray-900 min-h-screen">
      {/* Navbar */}
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
          <a className="hover:text-primary transition" href="#">
            Home
          </a>
          <a className="text-primary font-semibold" href="#">
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

      {/* Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 p-6">
          <button className="w-full bg-primary text-white rounded-xl py-3 font-bold shadow hover:bg-primary/90 transition">
            Sell Product
          </button>

          <div className="mt-8">
            <h3 className="font-bold text-gray-800 mb-3 px-2">Categories</h3>

            <div className="space-y-2">
              <a
                className="flex items-center gap-3 px-3 py-2 rounded-xl bg-primary/10 text-primary font-semibold"
                href="#"
              >
                All Products
              </a>

              <a
                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-soft transition"
                href="#"
              >
                Handicrafts
              </a>

              <a
                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-soft transition"
                href="#"
              >
                Textiles
              </a>

              <a
                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-soft transition"
                href="#"
              >
                Farm Produce
              </a>

              <a
                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-soft transition"
                href="#"
              >
                Art
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Hero Banner */}
          <div
            className="rounded-xl overflow-hidden h-64 bg-cover bg-center shadow-lg relative"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6')",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl font-bold">Featured Artisan of the Week</h2>
              <p className="opacity-90">Discover handcrafted excellence</p>
            </div>
          </div>

          {/* Trending Products */}
          <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">
            Trending Products
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-4">
            {/* Product Card 1 */}
            <div className="min-w-[240px] bg-white rounded-xl shadow hover:shadow-lg transition border border-primary/10">
              <div
                className="h-40 bg-cover bg-center rounded-t-xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1584917865442-de89df76afd3')",
                }}
              ></div>

              <div className="p-4">
                <p className="font-semibold text-gray-800">Painted Vase</p>
                <p className="text-gray-500 text-sm">₹850</p>

                <button className="w-full mt-3 bg-primary/10 text-primary font-bold py-2 rounded-full hover:bg-primary/20 transition">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="min-w-[240px] bg-white rounded-xl shadow hover:shadow-lg transition border border-primary/10">
              <div
                className="h-40 bg-cover bg-center rounded-t-xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600185365483-26d7a4a1da6c')",
                }}
              ></div>

              <div className="p-4">
                <p className="font-semibold text-gray-800">Silk Scarf</p>
                <p className="text-gray-500 text-sm">₹1200</p>

                <button className="w-full mt-3 bg-primary/10 text-primary font-bold py-2 rounded-full hover:bg-primary/20 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
