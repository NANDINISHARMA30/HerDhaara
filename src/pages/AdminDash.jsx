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
    <th className="px-6 py-4 font-medium text-neutral-text-primary dark:text-white whitespace-nowrap" scope="row">
      {title}
    </th>
    <td className="px-6 py-4 text-neutral-text-secondary dark:text-white/80">{submitter}</td>
    <td className="px-6 py-4 text-neutral-text-secondary dark:text-white/80">{date}</td>
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
          <div className="size-8 text-brand-lilac">
            {/* SVG Logo */}
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                fill="currentColor"
              />
              <path
                clipRule="evenodd"
                d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-brand-navy dark:text-white text-lg font-bold leading-tight">HerDhara</h2>
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
            {/* Admin Profile */}
            <div className="flex gap-3 px-3 py-4 border-t border-neutral-border dark:border-white/10">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdcgHgWTFMNuIcIdD3SdMQfFkQUzjb8aBYAuqHDUGxpgSV9Yxml7QrJmkndXtjgq6woujAF_DcwyBVpk4pbktL94KNYB6mLRUT5AZd1JZHoinzfxuEvcRm9YeCwI8N_4bxkleosEzPnH_xtJWr8Ytyofcf37DH-LTe0hhdy3x26h50baLZAHGZw711kQhzYpv3qFFwOZh0ddbMQpvytChh1GqPaj-x0zYePWmJpNnX82LOlXUfC6Iw_ZeW-5Ni39MOLsfi15Ohc4A")',
                }}
              />
              <div className="flex flex-col">
                <h1 className="text-brand-navy dark:text-white text-base font-medium leading-normal">
                  Priya Sharma
                </h1>
                <p className="text-neutral-text-secondary dark:text-white/70 text-sm font-normal leading-normal">
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
        {/* Top Navbar */}
        <header className="sticky top-0 flex h-16 items-center justify-between whitespace-nowrap border-b border-solid border-neutral-border dark:border-white/10 bg-neutral-card dark:bg-background-dark px-10">
          <label className="flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-neutral-text-secondary dark:text-white/70 flex border-none bg-background-light dark:bg-white/10 items-center justify-center pl-4 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined !font-light !text-2xl">
                  search
                </span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-text-primary dark:text-white focus:outline-0 focus:ring-0 border-none bg-background-light dark:bg-white/10 focus:border-none h-full placeholder:text-neutral-text-secondary dark:placeholder:text-white/50 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                placeholder="Search..."
              />
            </div>
          </label>
          <div className="flex flex-1 justify-end gap-4">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-background-light dark:bg-white/10 text-neutral-text-secondary dark:text-white/70 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0">
              <span className="material-symbols-outlined !font-light">notifications</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvqyei0ObsuiOpgj0G5yHOZgI_ZIYG0tOkldex5g4Gipj4OdffgXzbu9PYefqEGXRlrJFR-drfLRpuzWq7-LcEXLcnmZh7VLfUavRXfBDEMRtT6r9aOcEDMXDO7Gk_5lohvQTkNtKbqrHWZ2y8qhfKmbiR4a0gHrFbO8rK93Wjk2UToyI0WgDz0dUKHSa-v8-AuK28t07nM4qJ2oqCG-jZG-SDNdFR0bk35quvoVOmL-NTdxo6VE2_DnLyuznCAg8RJfudSYQWyZ8")',
              }}
            />
          </div>
        </header>

        <div className="p-6 md:p-10 space-y-8">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex min-w-72 flex-col gap-2">
              <p className="text-brand-navy dark:text-white text-3xl font-bold leading-tight tracking-tight">
                Dashboard Overview
              </p>
              <p className="text-neutral-text-secondary dark:text-white/70 text-base font-normal leading-normal">
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
             
