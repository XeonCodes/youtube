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
import { MenuIcon, MicIcon, SearchIcon, YoutubeIcon } from "./icons";
import { Input } from "@nextui-org/input";

export const NavBar = () => {
  const { theme, setTheme } = useTheme();

  setTheme("dark");

  return (
    <div className=" py-2 flex justify-between px-3">
      {/* Logo & Menu */}
      <div className=" flex items-center gap-5  basis-1/3">
        <div className=" cursor-pointer hover:dark:bg-zinc-800 h-11 flex items-center justify-center w-11 rounded-full">
          <MenuIcon className=" w-7" />
        </div>
        <div>
          <YoutubeIcon />
        </div>
      </div>

      {/* Search Bar */}
      <div className="basis-1/3 gap-3 flex items-center">
        <div className=" w-full">
          <Input
            className=" h-11 w-full"
            variant="bordered"
            placeholder="Search"
            radius="full"
            type="email"
            endContent={
              // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              <SearchIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div className="cursor-pointer p-7 dark:bg-zinc-800 h-11 flex items-center justify-center w-11 rounded-full">
          <MicIcon className="" />
        </div>
      </div>

      {/* Button  */}
      <div className="basis-1/3 flex justify-end">
        <p>Buttons</p>
      </div>
    </div>
  );
};
