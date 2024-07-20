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
import { AudioIcon, Logo, MenuIcon, SearchIcon, YoutubeIcon } from "./icons";
import { Input } from "@nextui-org/input";

export const NavBar = () => {
  const { theme, setTheme } = useTheme();

  setTheme("dark");

  return (
    <div className=" flex items-center justify-between py-3">
      <div className=" flex items-center gap-4">
        <div className=" cursor-pointer w-10 h-10 rounded-full p-2 hover:bg-zinc-800 items-center justify-center">
          <MenuIcon />
        </div>
        <div className="">
          <YoutubeIcon />
        </div>
      </div>
      <div className=" hidden md:flex">
        <p>Second</p>
      </div>
      <div>
        <p>Third</p>
      </div>
    </div>
  );
};
