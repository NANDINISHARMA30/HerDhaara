import React from "react";

const SidebarItem = ({ icon, label, active }) => {
  const baseClass =
    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium leading-normal";
  const activeClass =
    "bg-primary/20 text-primary dark:bg-primary/30 dark:text-white";
  const defaultClass =
    "text-neutral-text-secondary dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10";

  return (
    <a className={`${baseClass} ${active ? activeClass : defaultClass}`} href="#">
      <span
        className="material-symbols-outlined !font-light"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
      <p>{label}</p>
    </a>
  );
};

const StatsCard = ({ title, value, trend, trendColor }) => (
  <div className="flex flex-col gap-2 rounded-xl p-6 bg-neutral-card dark:bg-background-dark border border-neutral-border dark:border-white/10 shadow-sm cursor-pointer hover:border-brand-lilac/50 dark:hover:border-brand-lilac/70 transition-colors">
    <p className="text-neutral-text-secondary dark:text-white/70 text-base font-medium leading-normal">
      {title}
    </p>
    <p className="text-brand-navy dark:text-white tracking-light text-3xl font-bold leading-tight">
      {value}
    </p>
    <p className={`${trendColor} text-sm font-medium leading-normal`}>{trend}</p>
  </div>
);

const PendingApprovalRow = ({ title, submitter, date }) => (
  <tr className="border-b border-neutral-border dark:border-white/10">
    <th className="px-6 py-4 font-medium text-neutral-text-primary dark:text-white whitespace-nowrap">
      {title}
    </th>
    <td className="px-6 py-4 text-neutral-text-secondary dark:text-white/80">
      {submitter}
    </td>
    <td className="px-6 py-4 text-neutral-text-secondary dark:text-white/80">
      {date}
    </td>
    <td className="px-6 py-4 text-right space-x-2">
      <button className="bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 font-semibold py-1.5 px-3 rounded-md text-xs">
        Reject
      </button>
      <button className="bg-green-500/10 text-green-700 dark:bg-green-500/20 dark:text-green-400 font-semibold py-1.5 px-3 rounded-md text-xs">
        Approve
      </button>
    </td>
  </tr>
);

const Dashboard = () => {
  return (
    <div className="flex h-screen font-display bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col bg-neutral-card dark:bg-background-dark border-r border-neutral-border dark:border-white/10">
        <div className="flex h-16 shrink-0 items-center gap-4 px-6 border-b border-neutral-border dark:border-white/10">
          {/* Logo */}
          <div className="size-8 text-brand-lilac">
            <svg fill="none" viewBox="0 0 48 48">
              <path
                d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <h2 className="text-brand-navy dark:text-white text-lg font-bold leading-tight">
            HerDhara
          </h2>
        </div>

        <div className="flex flex-1 flex-col justify-between p-4">
          <div className="flex flex-col gap-2">
            <SidebarItem icon="dashboard" label="Dashboard" active />
            <SidebarItem icon="group" label="Users" />
            <SidebarItem icon="school" label="Teachers" />
            <SidebarItem icon="menu_book" label="Courses" />
            <SidebarItem icon="task_alt" label="Content Approval" />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex gap-3 px-3 py-4 border-t border-neutral-border dark:border-white/10">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdcgHgWTFMNuIcIdD3SdMQfFkQUzjb8aBYAuqHDUGxpgSV9Yxml7QrJmkndXtjgq6woujAF_DcwyBVpk4pbktL94KNYB6mLRUT5AZd1JZHoinzfxuEvcRm9YeCwI8N_4bxkleosEzPnH_xtJWr8Ytyofcf37DH-LTe0hhdy3x26h50baLZAHGZw711kQhzYpv3qFFwOZh0ddbMQpvytChh1GqPaj-x0zYePWmJpNnX82LOlXUfC6Iw_ZeW-5Ni39MOLsfi15Ohc4A")',
                }}
              />
              <div className="flex flex-col">
                <h1 className="text-brand-navy dark:text-white text-base font-medium">
                  Priya Sharma
                </h1>
                <p className="text-neutral-text-secondary dark:text-white/70 text-sm">
                  Administrator
                </p>
              </div>
            </div>

            <SidebarItem icon="settings" label="Settings" />
            <SidebarItem icon="logout" label="Logout" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-neutral-bg dark:bg-black/20">
        {/* Navbar */}
        <header className="sticky top-0 flex h-16 items-center justify-between border-b border-neutral-border dark:border-white/10 bg-neutral-card dark:bg-background-dark px-10">
          <label className="flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full h-full items-stretch rounded-lg">
              <div className="flex items-center justify-center pl-4 text-neutral-text-secondary dark:text-white/70 bg-background-light dark:bg-white/10 rounded-l-lg">
                <span className="material-symbols-outlined !font-light !text-2xl">
                  search
                </span>
              </div>
              <input
                className="form-input flex w-full px-4 text-base bg-background-light dark:bg-white/10 text-neutral-text-primary dark:text-white rounded-r-lg focus:outline-none"
                placeholder="Search..."
              />
            </div>
          </label>

          <div className="flex flex-1 justify-end gap-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-light dark:bg-white/10 text-neutral-text-secondary dark:text-white/70">
              <span className="material-symbols-outlined !font-light">
                notifications
              </span>
            </button>

            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvqyei0ObsuiOpgj0G5yHOZgI_ZIYG0tOkldex5g4Gipj4OdffgXzbu9PYefqEGXRlrJFR-drfLRpuzWq7-LcEXLcnmZh7VLfUavRXfBDEMRtT6r9aOcEDMXDO7Gk_5lohvQTkNtKbqrHWZ2y8qhfKmbiR4a0gHrFbO8rK93Wjk2UToyI0WgDz0dUKHSa-v8-AuK28t07nM4qJ2oqCG-jZG-SDNdFR0bk35quvoVOmL-NTdxo6VE2_DnLyuznCAg8RJfudSYQWyZ8")',
              }}
            />
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 md:p-10 space-y-8">
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex min-w-72 flex-col gap-2">
              <p className="text-brand-navy dark:text-white text-3xl font-bold">
                Dashboard Overview
              </p>
              <p className="text-neutral-text-secondary dark:text-white/70 text-base">
                Welcome back, Priya! Here's what's happening on HerDhara.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Active Users"
              value="1,250"
              trend="+5.2% this month"
              trendColor="text-green-600"
            />
            <StatsCard
              title="New Teacher Registrations"
              value="42"
              trend="+10% this month"
              trendColor="text-green-600"
            />
            <StatsCard
              title="Total Course Enrollments"
              value="8,630"
              trend="+2.8% this month"
              trendColor="text-green-600"
            />
            <StatsCard
              title="Pending Content Approvals"
              value="12"
              trend="Action required"
              trendColor="text-orange-500"
            />
          </div>

          {/* Pending Approvals Table */}
          <div className="bg-neutral-card dark:bg-background-dark rounded-xl border border-neutral-border dark:border-white/10 shadow-sm">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-brand-navy dark:text-white">
                Pending Approvals
              </h3>
              <p className="text-sm text-neutral-text-secondary dark:text-white/70 mt-1">
                Review and approve or reject new content submissions.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-neutral-bg dark:bg-white/5 text-xs uppercase text-neutral-text-secondary dark:text-white/70">
                  <tr>
                    <th className="px-6 py-3">Content Title</th>
                    <th className="px-6 py-3">Submitter</th>
                    <th className="px-6 py-3">Submission Date</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <PendingApprovalRow
                    title="Introduction to Digital Literacy"
                    submitter="Anita Desai"
                    date="2023-10-26"
                  />
                  <PendingApprovalRow
                    title="Handicraft Business Basics"
                    submitter="Sunita Yadav"
                    date="2023-10-25"
                  />
                  <PendingApprovalRow
                    title="Local Governance & You"
                    submitter="Meena Kumari"
                    date="2023-10-24"
                  />
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
