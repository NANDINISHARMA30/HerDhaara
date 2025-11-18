import React from "react";
import { NavLink,Link } from "react-router-dom";


export default function Sidebar() {
  const navItems = [
    { path: "/", label: "Home", icon: "home" },
    { path: "/catalog", label: "E-Learning", icon: "school" },
    { path: "/Onboarding", label: "onboarding", icon: "star" },
    { path: "/class", label: "Live Session", icon: "work" },
    { path: "/community", label: "Community Chat", icon: "forum" },

  ];

  return (
    <aside className="w-64 h-screen bg-white dark:bg-[#0a0a0a] shadow-lg p-4 flex flex-col">
      {/* Logo */}
      <div className="flex gap-3 items-center px-3 py-3">
        <div className="size-10 rounded-full bg-purple-500"></div>

        <div>
          <h1 className="text-lg font-bold text-deep-purple dark:text-off-white">
            HerDhara
          </h1>
          <p className="text-sm text-deep-purple/70 dark:text-off-white/70">
            Empowering Women
          </p>

             
        </div>
      </div>


      {/* Navigation */}
      <nav className="flex flex-col gap-2 mt-4">
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-full transition ${
                isActive
                  ? "bg-lilac/30 dark:bg-primary/20 text-primary font-semibold"
                  : "text-deep-purple dark:text-off-white hover:bg-lilac/20 dark:hover:bg-primary/20"
              }`
            }
            end={item.path === "/"}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div>

      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-gradient-to-r from-primary to-secondar  text-pink text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                       <Link to="/Dashboard">
                        <span className="truncate">Chat with an Expert</span>
                        </Link>
                      </button>

                      </div>

      <div className="mt-auto border-t border-gray-300 dark:border-white/10 pt-4">
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-full text-red-600 hover:bg-red-100 dark:hover:bg-red-900">
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>


      </div>
    </aside>
  );
}
