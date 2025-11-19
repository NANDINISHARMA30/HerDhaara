import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { path: "/", label: "Home", icon: "home" },
    { path: "/catalog", label: "E-Learning", icon: "school" },
    { path: "/market", label: "Onboarding", icon: "star" },
    { path: "/class", label: "Live Session", icon: "work" },
    { path: "/CommunityHub", label: "Community Chat", icon: "forum" },
  ];

  return (
    <aside className="w-64 h-screen bg-white shadow-xl p-4 flex flex-col border-r border-lavender-200">

      {/* Logo */}
      <div className="flex gap-3 items-center px-3 py-4">
        <div className="size-10 rounded-full bg-lavender-500 shadow-md"></div>

        <div>
          <h1 className="text-xl font-extrabold text-purple-700">HerDhara</h1>
          <p className="text-sm text-purple-400 font-medium">
            Empowering Women
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 mt-6">
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all font-medium
              ${
                isActive
                  ? "bg-purple-200 text-purple-700 shadow-sm"
                  : "text-purple-600 hover:bg-purple-100"
              }`
            }
            end={item.path === "/"}
          >
            <span className="material-symbols-outlined text-lg">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Chat with Expert Button */}
      <div className="mt-8 px-2">
        <button className="w-full flex items-center justify-center rounded-full h-12 px-5 bg-gradient-to-r from-purple-400 to-purple-600 text-white text-base font-semibold shadow-lg hover:opacity-90 transition">
          <Link to="/Dashboard">
            <span className="truncate">Chat with an Expert</span>
          </Link>
        </button>
      </div>

      {/* Logout */}
      <div className="mt-auto border-t border-purple-200 pt-4">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-red-600 hover:bg-red-100 transition">
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
