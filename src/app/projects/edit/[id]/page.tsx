"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../../../components/Editor/Editor"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

function page({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="max-w-[64rem] mx-auto">
      <Navbar>
        <NavbarBrand>
          <Icon icon="mdi:arrow-left" onClick={router.back} />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>编辑Project</NavbarItem>
        </NavbarContent>
        <NavbarContent className="items-center" justify="end"></NavbarContent>
      </Navbar>
      <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
        <Editor onConfirm={() => {}} />
      </div>
    </div>
  );
}

export default page;
