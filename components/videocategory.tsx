import React from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Button } from "@nextui-org/button";
import { VideoCategoryLists } from "@/static/Json";

export const VideoCategory = () => {
  return (
    <ScrollShadow
      orientation="horizontal"
      className=" flex gap-3 w-full scrollbar-hide overflow-scroll"
    >
      {VideoCategoryLists.map((v, i) => (
        <div
          key={i}
          className={`${i == 0 ? "bg-white" : "bg-zinc-800"}  ${i == VideoCategoryLists.length - 1 ? "mr-6" : "mr-0"} h-max py-2 px-3 rounded-lg`}
        >
          <p className={`font-semibold text-sm ${i == 0 && "text-black"} `}>
            {v.title}
          </p>
        </div>
      ))}
    </ScrollShadow>
  );
};
