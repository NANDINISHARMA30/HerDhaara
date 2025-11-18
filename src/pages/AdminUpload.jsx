// App.jsx
import React, { useState } from "react";

// Sidebar Component
const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 sticky top-0">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-3">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByDvdVPETcO81U61ubibu-8qgWekLVwS4A01WK6NLq1i3X8AM7dCQ9KocH_PD6aOl0_tCDugw6n-Qjd6X2wCEtP3MMuU_xlYJcnhPQAHBW5ZiI7a0JBVqwoDMwB5Pb31cGFsklpMHotcw56mMhVVhqV1uttCCE5URf2cE6w4mTkCr_eLCAuXkul_lKUynlRPZqGtrX9AAzMJtJlUJvC3Tk7uxsrv0OP7FvHyqc5x0Hhb8Y4Dw0uTsB35MIafh30lerXsymZoY3lqE')",
            }}
          ></div>
          <div className="flex flex-col">
            <h1 className="text-gray-900 dark:text-white text-base font-medium leading-normal">
              HerDhara
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
              Admin Panel
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20"
            href="#"
          >
            <span className="material-symbols-outlined fill text-primary">
              edit_document
            </span>
            <p className="text-primary text-sm font-medium leading-normal">
              Content Management
            </p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5" href="#">
            <span className="material-symbols-outlined text-gray-800 dark:text-gray-300">
              school
            </span>
            <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">
              Courses
            </p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5" href="#">
            <span className="material-symbols-outlined text-gray-800 dark:text-gray-300">
              spark
            </span>
            <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">
              Talent Showcase
            </p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5" href="#">
            <span className="material-symbols-outlined text-gray-800 dark:text-gray-300">
              work
            </span>
            <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">
              Job Listings
            </p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5" href="#">
            <span className="material-symbols-outlined text-gray-800 dark:text-gray-300">
              group
            </span>
            <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">
              Users
            </p>
          </a>
        </div>
      </div>

      <div className="mt-auto p-4">
        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5" href="#">
          <span className="material-symbols-outlined text-gray-800 dark:text-gray-300">
            logout
          </span>
          <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">
            Logout
          </p>
        </a>
      </div>
    </aside>
  );
};

// Breadcrumbs Component
const Breadcrumbs = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal" href="#">
        Dashboard
      </a>
      <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
      <span className="text-gray-800 dark:text-white text-sm font-medium leading-normal">Content Management</span>
    </div>
  );
};

// Content Form Component
const ContentForm = () => {
  const [publish, setPublish] = useState(false);
  const [selectedType, setSelectedType] = useState("Upload Course");

  return (
    <div className="space-y-8">
      {/* Segmented Buttons */}
      <div className="mb-8">
        <div className="flex h-12 w-full items-center justify-center rounded-lg bg-gray-200/60 dark:bg-background-dark/80 p-1">
          {["Upload Course", "Add Talent Showcase", "Post Job Listing"].map((type) => (
            <label
              key={type}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 text-sm font-medium leading-normal transition-all duration-200 ${
                selectedType === type
                  ? "bg-white dark:bg-primary/20 shadow-sm text-primary dark:text-white"
                  : "text-gray-500 dark:text-gray-400 dark:has-checked:text-white"
              }`}
            >
              <span className="truncate">{type}</span>
              <input
                type="radio"
                className="invisible w-0"
                name="content-type"
                value={type}
                checked={selectedType === type}
                onChange={() => setSelectedType(type)}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="flex flex-col">
            <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal pb-2">Course Title</p>
            <input
              type="text"
              placeholder="e.g., Introduction to Digital Marketing"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark/50 focus:border-primary dark:focus:border-primary h-12 px-4 text-sm font-normal leading-normal"
            />
          </label>
        </div>

        <div>
          <label className="flex flex-col">
            <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal pb-2">Instructor</p>
            <input
              type="text"
              placeholder="e.g., Jane Doe"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark/50 focus:border-primary dark:focus:border-primary h-12 px-4 text-sm font-normal leading-normal"
            />
          </label>
        </div>

        <div>
          <label className="flex flex-col">
            <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal pb-2">Category</p>
            <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark/50 focus:border-primary dark:focus:border-primary h-12 px-4 text-sm font-normal leading-normal">
              <option>Digital Skills</option>
              <option>Handicrafts</option>
              <option>Entrepreneurship</option>
              <option>Financial Literacy</option>
            </select>
          </label>
        </div>

        <div className="md:col-span-2">
          <label className="flex flex-col">
            <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal pb-2">Course Description</p>
            <textarea
              placeholder="Provide a detailed description of the course..."
              rows="5"
              className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark/50 focus:border-primary dark:focus:border-primary p-4 text-sm font-normal leading-normal"
            />
          </label>
        </div>
      </div>

      {/* File Upload */}
      <div className="space-y-2">
        <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">Upload Course Materials</p>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-background-dark/30 hover:bg-gray-100 dark:hover:bg-background-dark/60"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <span className="material-symbols-outlined text-gray-500 dark:text-gray-400" style={{ fontSize: "32px" }}>
                cloud_upload
              </span>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">MP4, PDF, or PNG (MAX. 50MB)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>

      {/* Publish Toggle */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-gray-100 dark:bg-background-dark/50">
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Publish Course</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Make this course visible to all users on the platform.</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={publish} onChange={() => setPublish(!publish)} />
          <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        <button className="px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-background-dark/50 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/10">
          Save as Draft
        </button>
        <button className="px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90">
          Publish Course
        </button>
      </div>
    </div>
  );
};

// Main Layout Component
const App = () => {
  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-10">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs />
          <div className="flex flex-wrap justify-between gap-3 mb-8">
            <div className="flex min-w-72 flex-col gap-2">
              <p className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">
                Upload & Publish Content
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                Select a content type below to begin uploading.
              </p>
            </div>
          </div>
          <ContentForm />
        </div>
      </main>
    </div>
  );
};

export default App;
