import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-center leading-10 text-gray-400 text-sm">
      Copyright © 2023-2024 Meenie{" "}
      <Link href={"https://beian.miit.gov.cn"}>陇ICP备2024006708号</Link>
    </div>
  );
};

export default Footer;
