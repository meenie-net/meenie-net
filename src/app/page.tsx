import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-[50rem] mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-[12rem] h-[12rem] rounded-full overflow-hidden flex justify-center items-center relative mt-10">
            <Image fill src={"/avatar.png"} alt={""}></Image>
          </div>
          <div className="border-b-2 text-center text-3xl my-4">Meenie</div>
          <div className="mb-2">认清现实，放弃幻想</div>
          <div className="flex gap-4 items-center border-t-2">
            <div className="border-r-2 h-3"></div>
            {Array.from({ length: 5 }).map((item, index) => (
              <>
                <div className="leading-10">Web</div>
                <div className="border-r-2 h-3"></div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
