import { Avatar } from "@nextui-org/avatar";
import { MoreIcon } from "./icons";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";

export const VideoComp = () => {
  return (
    <div className=" w-full flex flex-col gap-2">
      {/* Thumbnail */}
      <div className="bg-blue-900">
        <p>Thumbnail</p>
      </div>
      {/* Post Bottom */}
      <div className="flex items-start px-5 sm:px-0 justify-between gap-3">
        {/* Creator's Pic */}
        <div className="flex-shrink-0">
          <Image
            className="rounded-full object-cover"
            width={40}
            height={40}
            loading="lazy"
            alt="NextUI hero Image"
            src="https://i.pravatar.cc/300"
          />
        </div>
        <div className="flex flex-col">
          {/* Video title */}
          <h1 className="text-sm font-normal sm:font-medium leading-5">
            BREAKING NEWS: Dana White Introduces Donald Trump At The RNC
          </h1>
          {/* Creator's name */}
          <div>
            <p className=" text-xs text-gray-400">Fox News</p>
            <div></div>
          </div>
          {/* View & Time */}
          <p className=" text-xs text-gray-400">562K views * 4 days ago</p>
        </div>
        <div>
          <MoreIcon />
        </div>
      </div>
    </div>
  );
};

// Font name: Roboto, Arial, sans-serif
// Font size: 14px
// Font weight: 400
// Line height: 20px
// Font color: rgb(170, 170, 170)
