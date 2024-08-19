"use client";
import {
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../../components/Editor/Editor"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
function page() {
  const router = useRouter();

  const tags = [
    {
      id: "1",
      label: "react",
      value: "react",
    },
    {
      id: "2",
      label: "vue",
      value: "vue",
    },
    {
      id: "3",
      label: "nextjs",
      value: "nextjs",
    },
  ];

  return (
    <div className="max-w-[64rem] mx-auto">
      <Navbar>
        <NavbarBrand>
          <Icon icon="mdi:arrow-left" onClick={router.back} />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>添加Project</NavbarItem>
        </NavbarContent>
        <NavbarContent className="items-center" justify="end"></NavbarContent>
      </Navbar>
      <div className="flex flex-col gap-2">
        <Input label="标题" placeholder="请输入标题"></Input>
        <Select label="标签" placeholder="请选择标签" selectionMode="multiple">
          {tags.map((tag) => (
            <SelectItem key={tag.id} value={tag.value}>
              {tag.label}
            </SelectItem>
          ))}
        </Select>
        <Input label="项目演示地址" placeholder="请输入项目演示地址"></Input>
        <Input label="Github地址" placeholder="请输入Github地址"></Input>
      </div>
      <div style={{ border: "1px solid #ccc", zIndex: 100 }} className="mt-2">
        <Editor onConfirm={() => {}} />
      </div>
      <div className="flex justify-end mt-2 gap-2">
        <Button color="primary">预览</Button>
        <Button color="primary">保存草稿</Button>
        <Button color="primary">确认</Button>
      </div>
    </div>
  );
}

export default page;
