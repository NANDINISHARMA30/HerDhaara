// App.jsx
import React from "react";

// Sidebar Component
const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col border-r border-border-light dark:border-border-dark bg-white dark:bg-background-dark">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-2">
            <div className="bg-primary/20 rounded-lg p-2 text-primary">
              <span className="material-symbols-outlined">school</span>
            </div>
            <h1 className="text-xl font-bold">HerDhara</h1>
          </div>
          <div className="flex flex-col gap-1">
            <a
              className="flex items-center gap-3 rounded px-3 py-2 text-text-light dark:text-text-dark/80 hover:bg-primary/20"
              href="#"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium">Dashboard</p>
            </a>
            <a
              className="flex items-center gap-3 rounded px-3 py-2 bg-primary/20 text-primary dark:text-primary"
              href="#"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>book</span>
              <p className="text-sm font-bold">Course Management</p>
            </a>
            <a
              className="flex items-center gap-3 rounded px-3 py-2 text-text-light dark:text-text-dark/80 hover:bg-primary/20"
              href="#"
            >
              <span className="material-symbols-outlined">group</span>
              <p className="text-sm font-medium">User Management</p>
            </a>
            <a
              className="flex items-center gap-3 rounded px-3 py-2 text-text-light dark:text-text-dark/80 hover:bg-primary/20"
              href="#"
            >
              <span className="material-symbols-outlined">bar_chart</span>
              <p className="text-sm font-medium">Analytics</p>
            </a>
            <a
              className="flex items-center gap-3 rounded px-3 py-2 text-text-light dark:text-text-dark/80 hover:bg-primary/20"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium">Settings</p>
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="border-t border-border-light dark:border-border-dark pt-4 flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD61kT8vJEZ9bq22xdVJMzdqwWGLab2gy3Jcd8wWYxZ6NHl93TISOmnFqLfIFGU6lmWoRJV-ohjnwo2U2B3ngy102blqQ6IeMthiv138_TOCdueJcG22ENtqYXl4uQitcJNM8q9wItMC-QJJfJVTvm7EC-b-SvaUmxoTvxBWcyuTLs7v_kuhV2C9QwndyhWhsP1OHy_0hd1KeIrzMUfwnVIqoeIVVaDxKi-DiAWxwyTaTctlXmBG3jk3pxXgIGd1IetEsb1L_pwvvs')",
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-base font-medium">Admin Name</h1>
              <p className="text-sm font-normal text-text-light/70 dark:text-text-dark/60">
                Administrator
              </p>
            </div>
          </div>
          <a
            className="mt-4 flex items-center gap-3 rounded px-3 py-2 text-text-light dark:text-text-dark/80 hover:bg-primary/20"
            href="#"
          >
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium">Log Out</p>
          </a>
        </div>
      </div>
    </aside>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-col">
        <p className="text-3xl font-bold tracking-tight">Course Management</p>
        <p className="text-base font-normal text-text-light/70 dark:text-text-dark/60">
          Add, edit, and manage all e-learning courses for HerDhara.
        </p>
      </div>
      <button className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded bg-primary px-4 text-white hover:bg-primary-darker text-sm font-bold">
        <span className="material-symbols-outlined text-base">add</span>
        <span className="truncate">Add New Course</span>
      </button>
    </header>
  );
};

// TableRow Component
const TableRow = ({ course }) => {
  return (
    <tr>
      <td className="p-4">
        <input
          className="form-checkbox rounded border-gray-400 text-primary focus:ring-primary/50 dark:bg-background-dark/80 dark:border-border-dark"
          type="checkbox"
        />
      </td>
      <td className="px-4 py-3 text-sm font-medium">{course.title}</td>
      <td className="px-4 py-3 text-sm text-text-light/80 dark:text-text-dark/70">
        {course.category}
      </td>
      <td className="px-4 py-3 text-sm text-text-light/80 dark:text-text-dark/70">
        {course.teacher}
      </td>
      <td className="px-4 py-3 text-sm text-center text-text-light/80 dark:text-text-dark/70">
        {course.enrolled}
      </td>
      <td className="px-4 py-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
            course.status === "Published"
              ? "bg-success/10 text-success"
              : "bg-gray-500/10 text-gray-600 dark:text-gray-400"
          }`}
        >
          {course.status}
        </span>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <button className="text-primary-darker hover:text-primary">
            <span className="material-symbols-outlined text-xl">edit</span>
          </button>
          <button className="text-error/80 hover:text-error">
            <span className="material-symbols-outlined text-xl">delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

// CourseTable Component
const CourseTable = ({ courses }) => {
  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-left">
          <thead>
            <tr className="bg-background-light dark:bg-background-dark">
              <th className="w-12 p-4">
                <input
                  className="form-checkbox rounded border-gray-400 text-primary focus:ring-primary/50 dark:bg-background-dark/80 dark:border-border-dark"
                  type="checkbox"
                />
              </th>
              <th className="px-4 py-3 text-sm font-semibold">Course Title</th>
              <th className="px-4 py-3 text-sm font-semibold">Category</th>
              <th className="px-4 py-3 text-sm font-semibold">Teacher</th>
              <th className="px-4 py-3 text-sm font-semibold text-center">Enrolled</th>
              <th className="px-4 py-3 text-sm font-semibold">Status</th>
              <th className="px-4 py-3 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light dark:divide-border-dark">
            {courses.map((course, index) => (
              <TableRow key={index} course={course} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// MainContent Component
const MainContent = () => {
  const courses = [
    {
      title: "Financial Literacy 101",
      category: "Financial Literacy",
      teacher: "Anjali Sharma",
      enrolled: 152,
      status: "Published",
    },
    {
      title: "Introduction to Digital Skills",
      category: "Digital Skills",
      teacher: "Priya Mehta",
      enrolled: 230,
      status: "Published",
    },
    {
      title: "Advanced Weaving Techniques",
      category: "Handicrafts",
      teacher: "Sunita Devi",
      enrolled: 78,
      status: "Draft",
    },
    {
      title: "Marketing Your Products Online",
      category: "Business",
      teacher: "Rani Verma",
      enrolled: 0,
      status: "Draft",
    },
  ];

  return (
    <main className="flex-1 overflow-y-auto p-8">
      <Header />
      <CourseTable courses={courses} />
    </main>
  );
};

// App Component
const App = () => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
