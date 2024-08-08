"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const page = () => {
  const projects = [
    {
      id: "1",
      title: "react-blueprint-admin",
      desc: "react-blueprint-admin是一个开箱即用的后台template,框架使用react,UI部分使用blueprint,设计架构方面参考了<a>Geeker Admin</a>",
      url: "",
      github: "",
      featured: true,
      tags: ["react", "template"],
    },
    {
      id: "2",
      title: "Bamboo-Health心理健康测验促成交网站",
      desc: "Bamboo-Health是一个为心理健康疗愈机构设计的一个促成交网站",
      url: "http://bamboo-health.meenie.net",
      github: "https://github.com/meenie-net/bamboo-health",
      featured: true,
      tags: ["nextjs", "react"],
    },
    {
      id: "3",
      title: "知乎仿写（react版本/vue版本）",
      desc: "对知乎核心功能和页面分别使用react和vue进行了仿写，面向用户的主站，",
      url: "",
      github: "",
      featured: false,
      tags: ["react", "vue"],
    },
    {
      id: "4",
      title: "知乎仿写（后台）",
      desc: "对知乎核心功能和页面分别使用react和vue进行了仿写，后台管理模块，",
      url: "",
      github: "",
      featured: false,
      tags: ["react", "vue"],
    },
    {
      id: "5",
      title: "AiGouWu商城小程序",
      desc: "SalesMs酒吧餐吧销售管理系统包括",
      url: "",
      github: "",
      featured: false,
      tags: ["uni-app"],
    },
    {
      id: "6",
      title: "SalesMs酒吧餐吧销售管理系统（PC+大屏）",
      desc: "SalesMs酒吧餐吧销售管理系统包括",
      url: "",
      github: "",
      featured: false,
      tags: ["react"],
    },
    {
      id: "7",
      title: "SalesMs酒吧餐吧销售管理系统（后台）",
      desc: "SalesMs酒吧餐吧销售管理系统包括",
      url: "",
      github: "",
      featured: false,
      tags: ["react"],
    },
  ];

  return (
    <div>
      <div className="max-w-[64rem] mx-auto">
        <div className="flex justify-end my-5">
          <Button as={Link} href="/projects/add" size="sm">
            添加
          </Button>
        </div>
        <div className="mb-12">
          {projects.map((item, index) => (
            <div className="p-4 rounded border-b-2" key={index}>
              <div className="flex items-center mb-1 gap-2">
                <Link
                  href={item.url}
                  target="_blank"
                  className="hover:underline"
                >
                  <h1 className="text-lg mr-2">
                    {item.featured && <span>⭐</span>}
                    {item.title}
                  </h1>
                </Link>
                <Link href={item.github} target="_blank">
                  <Icon icon="mdi:github" fontSize={20}></Icon>
                </Link>
              </div>
              <div className="text-gray-100 flex gap-1">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    className="bg-slate-200 rounded text-black p-1 scale-[0.8]"
                    key={tagIndex}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <p
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                  className="inner-html leading-5 mt-1"
                ></p>
                <div className="mt-4 flex gap-2">
                  <Link
                    href={"/projects/" + item.id}
                    className="underline"
                    target="_blank"
                  >
                    查看更多
                  </Link>
                  <Link
                    href={"/projects/edit/" + item.id}
                    className="underline"
                    target="_blank"
                  >
                    编辑
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  const projects = [
    {
      id: "1",
      title: "react-blueprint-admin",
      desc: "react-blueprint-admin是一个开箱即用的后台template,框架使用react,UI部分使用blueprint,设计架构方面参考了<a>Geeker Admin</a>",
      url: "",
      featured: true,
      tags: ["react", "admin", "template"],
    },
    {
      id: "2",
      title: "Bamboo-Health心理健康测验促成交网站",
      desc: "Bamboo-Health是一个为心理健康疗愈机构设计的一个促成交网站",
      url: "",
      featured: true,
      tags: ["nextjs", "react"],
    },
    {
      id: "3",
      title: "知乎仿写（react版本/vue版本）",
      desc: "对知乎核心功能和页面分别使用react和vue进行了仿写，面向用户的主站，",
      url: "",
      featured: false,
      tags: ["react", "vue"],
    },
    {
      id: "4",
      title: "知乎仿写（后台）",
      desc: "对知乎核心功能和页面分别使用react和vue进行了仿写，后台管理模块，",
      url: "",
      featured: false,
      tags: ["react", "admin"],
    },
    {
      id: "5",
      title: "知乎后端",
      desc: "对知乎核心功能和页面分别使用react和vue进行了仿写，后台管理模块，",
      url: "",
      featured: false,
      tags: ["Java", "SpringBoot"],
    },
    {
      id: "6",
      title: "AiGouWu商城小程序",
      desc: "SalesMs酒吧餐吧销售管理系统包括",
      url: "",
      featured: false,
      tags: ["uni-app", "vue"],
    },
    {
      id: "7",
      title: "AiGouWu商城小程序后端",
      desc: "SalesMs酒吧餐吧销售管理系统包括",
      url: "",
      featured: false,
      tags: ["nestjs", "mysql"],
    },
    {
      id: "8",
      title: "SalesMs酒吧餐吧销售管理系统（PC+大屏+后台）",
      desc: "SalesMs酒吧餐吧销售管理系统包括",
      url: "",
      featured: false,
      tags: ["react"],
    },
    {
      id: "9",
      title: "SalesMs酒吧餐吧销售管理系统后端",
      desc: "SalesMs酒吧餐吧销售管理系统包括",
      url: "",
      featured: false,
      tags: ["nestjs"],
    },
  ];

  return (
    <div>
      <div className="max-w-[70rem] mx-auto">
        <div>
          <div>projects</div>
          <button>add</button>
        </div>
        <div className="mb-12">
          {projects.map((item, index) => (
            <div className="p-4 rounded" key={index}>
              <div className="flex items-center mb-2">
                <Link href={"/projects/" + item.id} className="hover:underline">
                  <h1 className="text-xl mr-2">
                    {item.featured && <span>⭐</span>}
                    {item.title}
                  </h1>
                </Link>
                <div className="text-gray-100 flex gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      className="bg-slate-100 rounded text-black p-1"
                      key={tagIndex}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p
                dangerouslySetInnerHTML={{ __html: item.desc }}
                className="inner-html leading-5"
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
