import { Avatar } from "@nextui-org/avatar";
import { MoreIcon } from "./icons";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

export const VideoComp = ({ item }: any) => {
  return (
    <div className=" w-full flex flex-col gap-2 cursor-pointer">
      {/* Thumbnail */}
      <div className="w-full relative">
        <Image
          width={"100%"}
          //   height={270}
          className=" object-cover rounded-none sm:rounded-2xl"
          src={item.thumbnail}
        />
        <p className=" absolute bottom-2 font-bold text-sm right-3 px-2 rounded-sm z-40 bg-zinc-800">
          {item.duration}
        </p>
      </div>
      {/* Post Bottom */}
      <div className="flex items-start px-3 sm:px-0 justify-between gap-2">
        {/* Creator's Pic */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <Avatar src={item.avater} size="sm" />
          </div>
          <div className="flex flex-col">
            {/* Video title */}
            <h1 className="text-sm font-normal sm:font-medium leading-5">
              {item.title}
            </h1>
            {/* Creator's name */}
            <div className="flex items-center gap-1">
              <p className=" text-xs text-gray-400">{item.channel}</p>
              {item.verified && (
                <div className="">
                  <MdVerified size={13} className="text-gray-400" />
                </div>
              )}
            </div>
            {/* View & Time */}
            <p className=" text-xs text-gray-400">
              {item.views}K views - {item.time}
            </p>
          </div>
        </div>
        <div className="">
          <IoEllipsisVertical />
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
