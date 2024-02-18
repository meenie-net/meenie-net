"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumb = () => {
  const pathArr = usePathname().split("/");
  return (
    <div>
      <div className="flex items-center justify-between max-w-[70rem] mx-auto py-10">
        <span className="bg-slate-100 rounded p-1">
          📂<span className="text-black px-2">Projects</span>
          {pathArr.slice(2).map((path, index) => {
            return (
              path && (
                <span key={index} className="text-gray-500 px-2">
                  <span className="mr-2">▶</span>
                  <span>{path}</span>
                </span>
              )
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;
