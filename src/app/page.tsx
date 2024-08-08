"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-[64rem] mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden flex justify-center items-center relative mt-10">
            <Image fill src={"/avatar.png"} alt={""}></Image>
          </div>
          <div className="border-b-2 text-center text-3xl my-4">Meenie</div>
          <div className="mb-2">认清现实，放弃幻想</div>
          <div className="flex gap-4 items-center border-t-2">
            <div className="border-r-2 h-3"></div>
            <div className="leading-10">React</div>
            <div className="border-r-2 h-3"></div>
            <div className="leading-10">Vue</div>
            <div className="border-r-2 h-3"></div>
            <div className="leading-10">Nextjs</div>
            <div className="border-r-2 h-3"></div>
            <div className="leading-10">NestJs</div>
            <div className="border-r-2 h-3"></div>
          </div>
          <div className="flex gap-10 mt-4">
            <div>
              <div className="text-lg">信息</div>
              <div className="flex flex-col gap-1 mt-2">
                <div>西北师范大学</div>
                <div>本科</div>
                <div>数学专业</div>
                <div>Web</div>
                <div>编辑</div>
              </div>
            </div>
            <div>
              <div className="text-lg">联系</div>
              <div className="flex flex-col gap-1 mt-2">
                <div className="flex items-center">
                  <Icon icon="mdi:phone" fontSize={18} className={``} />
                  <span>18393918951</span>
                </div>
                <div className="flex items-center">
                  <Icon icon="mdi:wechat" fontSize={18} className={``} />
                  <span>m1004460703</span>
                </div>
                <div className="flex items-center">
                  <Link
                    href={"https://github.com/meenie-net"}
                    target="_blank"
                    className="flex items-center underline"
                  >
                    <Icon icon="mdi:github" fontSize={18} className={``} />
                    <span>meenie-net</span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <Icon icon="mdi:qqchat" fontSize={18} className={``} />
                  <span>1004460703</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
