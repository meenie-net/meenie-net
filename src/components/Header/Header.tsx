"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathName = usePathname();
  console.log("pathName", pathName);
  const menu = [
    {
      name: "Home",
      target: "/",
    },
    {
      name: "Projects",
      target: "/projects",
    },
    {
      name: "About Me",
      target: "/about",
    },
  ];
  return (
    <div className="sticky top-0 border-b-2 bg-white z-10">
      <div className="flex items-center justify-between max-w-[70rem] mx-auto">
        <div className="mr-10 text-3xl">Meenie</div>
        <ul className="flex gap-6 my-8">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`hover:text-black ${
                item.target === pathName ? "text-black" : "text-gray-300"
              }`}
            >
              <a href={item.target}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
