import React from "react";

const Breadcrumb = () => {
  return (
    <div>
      <div className="flex items-center justify-between max-w-[70rem] mx-auto py-10">
        <span className="bg-slate-100 rounded p-1">
          📂
          <a href="" className="text-black hover:bg-slate-200 px-2">
            Projects
          </a>
          ▶<span className="text-gray-500 px-2">react-blueprint-admin</span>
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;
