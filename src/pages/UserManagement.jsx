import React from "react";

const UserManagement = () => {
  const users = [
    {
      name: "Priya Sharma",
      email: "priya.s@example.com",
      role: "Teacher",
      dateJoined: "2023-10-26",
      status: "Active",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuRLZlYrJ7hSZRTAW6ULmBmBES08j7uLl-1wjENuGeBCJE8VFdDnjwYDIHGciydDJfDJ0XqqvLDxKvC8p5v-zmrZOaAOAw_tTnave5byBwjMVW8HneVPyGI6neNu5nVdytEC95taFoT8MSJWkPqvhw8kr252FKXIUMhysTpmxpjfS_0Qc0JTrUDB0lgDNT018P3OuM0Y1kH3vJUhDbeTJlMjMQKXyhgAfXOONhzRKbX7LOZC3emspyhKW9p_CnQQInyPvvF--3IGc",
      actions: ["edit", "block", "delete"],
    },
    {
      name: "Sunita Desai",
      email: "sunita.d@example.com",
      role: "Teacher",
      dateJoined: "2023-11-01",
      status: "Pending Approval",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuD0TKlXFIsvVkbeuP7wsApbh-ArWn4vVsYW1ntteobggDT_B8HuxFJmUrBgPDCn3zZM_A1tMBmNgiHHsnOtbnoCfjZeH_JXHUCtfS9PHu6NGwjVdsXNzDIpb7wouiUkTM9srzhktwsbm6IaJ3u4DTTDbc1gEeRbvr370Mpx5RY-M3lS-Mk2l2Gg9SUxliCYfcLHPX_C0erdeNsbCnTy2itOkyP9dlNVwfSL9xA9Cd8G7lrXqcLr6oPH17w2WW3GBUocSsV-AGms8",
      actions: ["check_circle", "cancel"],
    },
    {
      name: "Anjali Mehta",
      email: "anjali.m@example.com",
      role: "Expert",
      dateJoined: "2023-09-15",
      status: "Active",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3-dZ_vT4k_EHrjFulxi4aPD609_6pQhSbJPOLMBFCC5RxpIc7zn9PkmgbhdrNHOF8pTz5s-OZ5zNYwcBJTiDi8x2Lwerc6GlxR1l_pQQQ8QItfI0yboWYuLXrUi6Akm32HoyxgbOBxuQUoTvOrTopV0ZVpFicUiSkSmNAuLBKcQSgRKnyvMaOf7xDpb_5IqqgVs7RkcCcCN_uBdoij1ZLis1VgEpCLuffrIRQBImV6G9Stv236FZic-Ljf1m4UQ8aci_CdbJWp9w",
      actions: ["edit", "block", "delete"],
    },
    {
      name: "Rina Patel",
      email: "rina.p@example.com",
      role: "User",
      dateJoined: "2023-08-20",
      status: "Suspended",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5w5u6E0ZsJXAfCbZb_7qWLRCt3qyHAe9qRrgnnC05Bx_h3fGi45ZcrFJjJipxG_05MmffXIE-AfwGxxcDqMljFLbyX1ZVc1pUlJmru84YQzHaUuEQx4g_FVHLlwBCIcqVyupj-4paLwodYfjLn-0oHPjYSFSIvcJJfXr9mLYCmImo_k4_HlDzilWrB7Y6izSraf4_IVvkxeUGASgZ9-0TluLYput4ZstXpZtrBDgBjpNGx8wPQsCB8MRIA5xi6pb3GkoCh0IiSGU",
      actions: ["edit", "play_circle", "delete"],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300";
      case "Pending Approval":
        return "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300";
      case "Suspended":
        return "bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* SideNavBar */}
      <aside className="w-64 bg-white dark:bg-black/20 p-4 flex flex-col justify-between border-r border-gray-200 dark:border-gray-700/50">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfvlXg0JZNTfTdDKORs7xWiwp2YeXSg5AlFY-3wWfzUYV6Q1ijhKHpvx6tmvkcG_WPqMud5jbRBpg9h-s4PE3RKP1I0H2GMJKPhprM-gVmqoCjMdMl6bjxkmdrMh0YcB5h6RHktQaoyYOF8GS909awVSCkAK8fNRrPBzLcYWExXz8ktNcMGLQa_Y3OWHO9C0358yVgn2SnrU_FODo9UTTNyBsXGpxeMvAQytAOYCarYny_k0XkHXZenws1nmg9tZW-0DpkaZ-aZw0")',
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-charcoal dark:text-white text-base font-bold leading-normal">HerDhara Admin</h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Welcome, Admin!</p>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-2 mt-4">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lilac/20 dark:hover:bg-primary/20 group" href="#">
              <span className="material-symbols-outlined text-charcoal dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary">
                dashboard
              </span>
              <p className="text-charcoal dark:text-gray-200 text-sm font-medium leading-normal group-hover:text-primary dark:group-hover:text-primary">Dashboard</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-lilac/30 dark:bg-primary/30" href="#">
              <span className="material-symbols-outlined text-primary dark:text-primary font-bold">group</span>
              <p className="text-primary dark:text-primary text-sm font-medium leading-normal">Users</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lilac/20 dark:hover:bg-primary/20 group" href="#">
              <span className="material-symbols-outlined text-charcoal dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary">article</span>
              <p className="text-charcoal dark:text-gray-200 text-sm font-medium leading-normal group-hover:text-primary dark:group-hover:text-primary">Content</p>
            </a>
          </div>
        </div>

        {/* Settings */}
        <div className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lilac/20 dark:hover:bg-primary/20 group" href="#">
            <span className="material-symbols-outlined text-charcoal dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary">
              settings
            </span>
            <p className="text-charcoal dark:text-gray-200 text-sm font-medium leading-normal group-hover:text-primary dark:group-hover:text-primary">Settings</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lilac/20 dark:hover:bg-primary/20 group" href="#">
            <span className="material-symbols-outlined text-charcoal dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary">
              logout
            </span>
            <p className="text-charcoal dark:text-gray-200 text-sm font-medium leading-normal group-hover:text-primary dark:group-hover:text-primary">Log Out</p>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto flex flex-col">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <h1 className="text-charcoal dark:text-white text-3xl font-black tracking-tight">User Management</h1>
            <button className="flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal gap-2 hover:bg-primary/90">
              <span className="material-symbols-outlined text-base">add</span>
              <span className="truncate">Add User</span>
            </button>
          </div>

          {/* Search & Filters */}
          <div className="w-full bg-white dark:bg-black/20 rounded-xl p-4 mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-grow">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-gray-500 dark:text-gray-400 flex bg-light-gray dark:bg-background-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      type="text"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-charcoal dark:text-white focus:outline-0 focus:ring-2 focus:ring-lilac dark:focus:ring-primary border-none bg-light-gray dark:bg-background-dark h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 pl-2 text-base font-normal leading-normal"
                      placeholder="Search by name, email, or ID..."
                    />
                  </div>
                </label>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-3 flex-wrap items-center">
                <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-light-gray dark:bg-background-dark pl-4 pr-2 text-charcoal dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700/50">
                  <p className="text-sm font-medium leading-normal">Status: All</p>
                  <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-xl">expand_more</span>
                </button>
                <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-light-gray dark:bg-background-dark pl-4 pr-2 text-charcoal dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700/50">
                  <p className="text-sm font-medium leading-normal">Role: All</p>
                  <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-xl">expand_more</span>
                </button>
                <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-light-gray dark:bg-background-dark px-4 text-charcoal dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700/50">
                  <p className="text-sm font-medium leading-normal">Clear Filters</p>
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-black/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-light-gray dark:bg-background-dark/50">
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date Joined</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">
                  {users.map((user, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-white/5">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <div
                              className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10"
                              style={{ backgroundImage: `url(${user.avatar})` }}
                            ></div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-charcoal dark:text-white">{user.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{user.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{user.dateJoined}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          {user.actions.map((action, i) => (
                            <button key={i} className={`text-${action === "edit" || action === "check_circle" ? "primary" : "red-500"} hover:text-opacity-80`}>
                              <span className="material-symbols-outlined text-xl">{action}</span>
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">97</span> results
            </p>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-charcoal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-charcoal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
