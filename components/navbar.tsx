"use client";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { useTheme } from "next-themes";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import {
  AudioIcon,
  Logo,
  MenuIcon,
  NotificationIcon,
  Search,
  SearchIcon,
  ShortCreateIcon,
  YoutubeIcon,
} from "./icons";
import { Input } from "@nextui-org/input";

export const NavBar = () => {
  const { theme, setTheme } = useTheme();

  setTheme("dark");

  return (
    <div className=" flex items-center justify-between">
      <div className=" flex items-center gap-4 basis-1/3">
        <div className=" cursor-pointer flex items-center justify-center hover:bg-zinc-800 p-2 rounded-full">
          <MenuIcon className="w-6 h-6" />
        </div>
        <div className="">
          <YoutubeIcon />
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center w-full gap-3 basis-1/3">
        <Input
          type="text"
          radius="full"
          variant={"bordered"}
          placeholder="Search"
          endContent={
            <SearchIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <div className=" cursor-pointer flex items-center justify-center bg-zinc-800 p-2 rounded-full">
          <AudioIcon className="w-6 h-6" />
        </div>
      </div>
      <div className=" gap-1 md:gap-3 text-end basis-1/3 flex items-center justify-end">
        <div className=" md:hidden cursor-pointer flex items-center justify-center hover:bg-zinc-800 p-2 rounded-full">
          <Search className="w-6 h-6" />
        </div>
        <div className=" cursor-pointer flex items-center justify-center hover:bg-zinc-800 p-2 rounded-full">
          <ShortCreateIcon className="w-6 h-6" />
        </div>
        <div className=" cursor-pointer flex items-center justify-center hover:bg-zinc-800 p-2 rounded-full">
          <NotificationIcon className="w-6 h-6" />
        </div>
        <div className=" m-0 md:ml-4 cursor-pointer flex items-center justify-center hover:bg-zinc-800 p-2 rounded-full">
          <Avatar src="https://i.pravatar.cc/300" />
        </div>
      </div>
    </div>
  );
};
