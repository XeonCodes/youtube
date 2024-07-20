import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { NavBar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { SidebarMedium } from "@/components/sidebar-medium";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative px-2 flex flex-col ">
      <Head />
      <NavBar />
      <main className=" flex items-center gap-5">
        <div className=" hidden xl:flex flex-col w-56">
          <Sidebar />
        </div>
        <div className=" hidden md:flex flex-col xl:hidden px-5">
          <SidebarMedium />
        </div>
        <div className="w-full">{children}</div>
      </main>
      <footer></footer>
    </div>
  );
}
