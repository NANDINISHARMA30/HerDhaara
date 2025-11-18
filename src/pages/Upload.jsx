import React, { useState } from "react";

// Theme Colors
const primary = "#9b5de5";
const softLavender = "#f6f0ff";
const softBorder = "#e3d8f5";
const textGray = "#6d5d84";

// Sidebar Component
const Sidebar = () => {
  return (
    <aside
      className="flex h-screen w-64 flex-col border-r sticky top-0"
      style={{
        backgroundColor: softLavender,
        borderColor: softBorder,
      }}
    >
      <div className="flex flex-col gap-4 p-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shadow-sm"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByDvdVPETcO81U61ubibu-8qgWekLVwS4A01WK6NLq1i3X8AM7dCQ9KocH_PD6aOl0_tCDugw6n-Qjd6X2wCEtP3MMuU_xlYJcnhPQAHBW5ZiI7a0JBVqwoDMwB5Pb31cGFsklpMHotcw56mMhVVhqV1uttCCE5URf2cE6w4mTkCr_eLCAuXkul_lKUynlRPZqGtrX9AAzMJtJlUJvC3Tk7uxsrv0OP7FvHyqc5x0Hhb8Y4Dw0uTsB35MIafh30lerXsymZoY3lqE')",
            }}
          ></div>
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold" style={{ color: textGray }}>
              HerDhara
            </h1>
            <p className="text-sm" style={{ color: "#907fa4" }}>
              Admin Panel
            </p>
          </div>
        </div>

        {/* Sidebar Items */}
        <div className="flex flex-col gap-2 mt-4">
          {[
            { icon: "edit_document", label: "Content Management", active: true },
            { icon: "school", label: "Courses" },
            { icon: "trophy", label: "Talent Showcase" },
            { icon: "work", label: "Job Listings" },
            { icon: "group", label: "Users" },
          ].map((item) => (
            <a
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                item.active
                  ? "shadow-sm"
                  : "hover:bg-white/70 hover:shadow-sm"
              }`}
              style={{
                backgroundColor: item.active ? "#ede3ff" : "transparent",
              }}
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{
                  color: item.active ? primary : textGray,
                }}
              >
                {item.icon}
              </span>
              <p
                className="text-sm font-medium"
                style={{
                  color: item.active ? primary : textGray,
                }}
              >
                {item.label}
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-auto p-4">
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/70 transition-all"
          href="#"
        >
          <span className="material-symbols-outlined" style={{ color: textGray }}>
            logout
          </span>
          <p className="text-sm font-medium" style={{ color: textGray }}>
            Logout
          </p>
        </a>
      </div>
    </aside>
  );
};

// Breadcrumbs
const Breadcrumbs = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <a className="text-sm" style={{ color: "#a198b6" }} href="#">
        Dashboard
      </a>
      <span className="text-sm" style={{ color: "#a198b6" }}>
        /
      </span>
      <span className="text-sm font-medium" style={{ color: textGray }}>
        Content Management
      </span>
    </div>
  );
};

// Content Form
const ContentForm = () => {
  const [publish, setPublish] = useState(false);
  const [selectedType, setSelectedType] = useState("Upload Course");

  return (
    <div className="space-y-8">
      {/* Segmented Control */}
      <div
        className="flex h-12 items-center justify-center rounded-xl p-1 shadow-sm"
        style={{ backgroundColor: softLavender }}
      >
        {["Upload Course", "Add Talent Showcase", "Post Job Listing"].map(
          (type) => (
            <label
              key={type}
              className={`flex cursor-pointer h-full grow items-center justify-center rounded-lg px-3 text-sm font-medium transition-all ${
                selectedType === type
                  ? "shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              style={{
                backgroundColor:
                  selectedType === type ? "#ffffffcc" : "transparent",
                color: selectedType === type ? primary : textGray,
              }}
            >
              {type}
              <input
                type="radio"
                className="hidden"
                checked={selectedType === type}
                onChange={() => setSelectedType(type)}
              />
            </label>
          )
        )}
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="md:col-span-2">
          <label className="flex flex-col">
            <p className="font-medium pb-2" style={{ color: textGray }}>
              Course Title
            </p>
            <input
              type="text"
              placeholder="e.g., Introduction to Digital Marketing"
              className="h-12 px-4 rounded-lg border"
              style={{
                backgroundColor: "white",
                borderColor: softBorder,
                color: textGray,
              }}
            />
          </label>
        </div>

        {/* Instructor */}
        <div>
          <label className="flex flex-col">
            <p className="font-medium pb-2" style={{ color: textGray }}>
              Instructor
            </p>
            <input
              type="text"
              placeholder="e.g., Jane Doe"
              className="h-12 px-4 rounded-lg border"
              style={{
                backgroundColor: "white",
                borderColor: softBorder,
                color: textGray,
              }}
            />
          </label>
        </div>

        {/* Category */}
        <div>
          <label className="flex flex-col">
            <p className="font-medium pb-2" style={{ color: textGray }}>
              Category
            </p>
            <select
              className="h-12 px-4 rounded-lg border"
              style={{
                backgroundColor: "white",
                borderColor: softBorder,
                color: textGray,
              }}
            >
              <option>Digital Skills</option>
              <option>Handicrafts</option>
              <option>Entrepreneurship</option>
              <option>Financial Literacy</option>
            </select>
          </label>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="flex flex-col">
            <p className="font-medium pb-2" style={{ color: textGray }}>
              Course Description
            </p>
            <textarea
              rows="5"
              placeholder="Provide a detailed description of the course..."
              className="p-4 rounded-lg border resize-y"
              style={{
                backgroundColor: "white",
                borderColor: softBorder,
                color: textGray,
              }}
            />
          </label>
        </div>
      </div>

      {/* File Upload */}
      <div className="space-y-2">
        <p className="font-medium" style={{ color: textGray }}>
          Upload Course Materials
        </p>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-48 rounded-xl border-2 border-dashed cursor-pointer transition-all"
          style={{
            backgroundColor: softLavender,
            borderColor: primary + "55",
          }}
        >
          <span
            className="material-symbols-outlined mb-2"
            style={{ fontSize: 40, color: primary }}
          >
            cloud_upload
          </span>
          <p className="text-sm" style={{ color: textGray }}>
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs" style={{ color: "#a198b6" }}>
            MP4, PDF, or PNG (MAX. 50MB)
          </p>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      {/* Publish Toggle */}
      <div
        className="flex items-center justify-between p-4 rounded-xl"
        style={{ backgroundColor: softLavender }}
      >
        <div>
          <p className="font-medium" style={{ color: textGray }}>
            Publish Course
          </p>
          <p className="text-sm" style={{ color: "#a198b6" }}>
            Make this course visible to all users.
          </p>
        </div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={publish}
            onChange={() => setPublish(!publish)}
          />
          <div
            className="w-11 h-6 rounded-full peer transition-all"
            style={{
              backgroundColor: publish ? primary : "#d3c5ea",
            }}
          >
            <div
              className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-all peer-checked:translate-x-full"
            />
          </div>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 pt-4">
        <button
          className="px-5 py-2.5 rounded-lg border shadow-sm transition-all"
          style={{
            color: textGray,
            background: "white",
            borderColor: softBorder,
          }}
        >
          Save as Draft
        </button>
        <button
          className="px-5 py-2.5 rounded-lg shadow-md transition-all"
          style={{
            backgroundColor: primary,
            color: "white",
          }}
        >
          Publish Course
        </button>
      </div>
    </div>
  );
};

// Main Layout
const UploadScreen = () => {
  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 p-8" style={{ backgroundColor: "#faf7ff" }}>
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs />
          <div className="mb-8">
            <p
              className="text-3xl font-bold"
              style={{ color: textGray }}
            >
              Upload & Publish Content
            </p>
            <p className="text-base mt-1" style={{ color: "#907fa4" }}>
              Select a content type below to begin uploading.
            </p>
          </div>
          <ContentForm />
        </div>
      </main>
    </div>
  );
};

export default UploadScreen;
