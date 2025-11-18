// App.js or JobManagementPage.js
import React from "react";

// Sidebar Component
const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-4 p-4 bg-white dark:bg-background-dark dark:border-r dark:border-white/10 w-64 fixed h-full">
      <div className="flex gap-3 items-center px-3 py-2">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9wrZkGQSTkl5IdsgM8S8TuH91NgTRy_YtlFYaEOJXBFcf2fGkFpmSbBlvFsYoVm3gURAhZAhWAdlygzi7EkIWFBIUrzrcDV9h-RmVvwqrtlD_qqQV_dntoelqPaxlr8GeWxnxt6ExqNvGO9UDPhnsff7JICVFPSF43BdD6XP9jLtt-REI6vYtxg4_Fcv2T6uzuwBA6G6iDF7rZ7ltdCPJNPlVElvIHgu59TN7FhBgspKp_Lrqs99nVqvikykDgnoRyvWgcuCl9IU')",
          }}
        ></div>
        <div className="flex flex-col">
          <h1 className="text-gray-900 dark:text-gray-100 text-base font-medium leading-normal">Admin</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">HerDhara Platform</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        <a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary/10 rounded-full" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <p className="text-sm font-medium leading-normal">Dashboard</p>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 rounded-full bg-primary/20 text-primary dark:bg-primary/30 dark:text-white" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
          <p className="text-sm font-medium leading-normal">Job Listings</p>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary/10 rounded-full" href="#">
          <span className="material-symbols-outlined">apartment</span>
          <p className="text-sm font-medium leading-normal">Organizations</p>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary/10 rounded-full" href="#">
          <span className="material-symbols-outlined">bar_chart</span>
          <p className="text-sm font-medium leading-normal">Analytics</p>
        </a>
      </nav>

      <div className="mt-auto flex flex-col gap-1">
        <a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary/10 rounded-full" href="#">
          <span className="material-symbols-outlined">settings</span>
          <p className="text-sm font-medium leading-normal">Settings</p>
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary/10 rounded-full" href="#">
          <span className="material-symbols-outlined">logout</span>
          <p className="text-sm font-medium leading-normal">Logout</p>
        </a>
      </div>
    </aside>
  );
};

// Job Table Component
const jobsData = [
  {
    title: "Community Health Worker",
    org: "Seva Foundation",
    location: "Mumbai, IN",
    date: "Oct 26, 2023",
    status: "Active",
    statusColor: "green",
  },
  {
    title: "Data Entry Operator",
    org: "RuralTech Solutions",
    location: "Jaipur, IN",
    date: "Oct 24, 2023",
    status: "Expired",
    statusColor: "red",
  },
  {
    title: "Handicrafts Artisan",
    org: "Crafts & Looms NGO",
    location: "Kolkata, IN",
    date: "Oct 22, 2023",
    status: "Active",
    statusColor: "green",
  },
  {
    title: "Micro-finance Officer",
    org: "Grameen Bank",
    location: "Patna, IN",
    date: "Oct 20, 2023",
    status: "Draft",
    statusColor: "yellow",
  },
  {
    title: "Organic Farm Assistant",
    org: "GreenHarvest Org",
    location: "Pune, IN",
    date: "Oct 18, 2023",
    status: "Active",
    statusColor: "green",
  },
];

const JobTable = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-white/5">
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Job Title</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Organization</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date Posted</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-white/20">
            {jobsData.map((job, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{job.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{job.org}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{job.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{job.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${job.statusColor}-100 text-${job.statusColor}-800 dark:bg-${job.statusColor}-900/50 dark:text-${job.statusColor}-300`}>
                    <span className={`w-2 h-2 mr-2 bg-${job.statusColor}-500 rounded-full`}></span> {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-primary hover:text-primary/80 dark:text-primary/80 dark:hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-xl">edit</span>
                    </button>
                    <button className="text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 p-2 rounded-full hover:bg-red-500/10 transition-colors">
                      <span className="material-symbols-outlined text-xl">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Page Component
const JobManagementPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <div className="flex h-full grow flex-row">
        <Sidebar />
        <main className="flex flex-1 flex-col ml-64">
          <div className="flex flex-col p-6 lg:p-8 gap-6">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-4 items-center">
              <div className="flex flex-col gap-1">
                <p className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Job Listings Management
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                  Add, edit, and remove job opportunities from NGOs and businesses.
                </p>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined">add_circle</span>
                <span className="truncate">Add New Job</span>
              </button>
            </div>

            {/* Search + Filters (optional: can be separate component) */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-grow">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-full h-full">
                    <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-background-dark items-center justify-center pl-4 rounded-l-full border border-gray-200 dark:border-white/20 border-r-0">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-200 dark:border-white/20 bg-white dark:bg-background-dark h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 text-base font-normal leading-normal"
                      placeholder="Search by job title, organization, or location..."
                    />
                  </div>
                </label>
              </div>
            </div>

            {/* Job Table */}
            <JobTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobManagementPage;
