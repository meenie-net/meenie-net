"use client";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import React, { useState, useEffect } from "react";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
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

function page() {
  const router = useRouter();
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  // const [editor, setEditor] = useState(null)                   // JS 语法

  // 编辑器内容
  const [html, setHtml] = useState("<p>hello</p>");

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {}, []);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    // const editorConfig = {                         // JS 语法
    placeholder: "请输入内容...",
    MENU_CONF: {
      uploadImage: {
        server: "/api/file/imgUpload",
        maxFileSize: 10 * 1024 * 1024,
      },
    },
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

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
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: "1px solid #ccc" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          style={{ height: "500px", overflowY: "hidden" }}
        />
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
