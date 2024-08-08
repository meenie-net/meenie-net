"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../Logo/Logo";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  const pathName = usePathname().split("/");
  const menu = [
    {
      name: "Home",
      target: "/",
    },
    {
      name: "Projects",
      target: "/projects",
    },
  ];
  return (
    <Navbar isBordered className="z-50">
      <NavbarBrand>
        <Link href={"/"}>
          <Logo />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menu.map((item, index) => (
          <NavbarItem
            key={index}
            isActive={pathName[1] === item.target.slice(1)}
          >
            <Link color="foreground" href={item.target}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="items-center" justify="end">
        <ThemeSwitcher></ThemeSwitcher>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
