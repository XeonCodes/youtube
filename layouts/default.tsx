import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { NavBar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { SidebarMedium } from "@/components/sidebar-medium";
import { VideoCategory } from "@/components/videocategory";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col ">
      <Head />
      <NavBar />
      <main className="mt-14 flex ">
        <div className="scrollbar-hide h-screen overflow-scroll hidden xl:flex px-3 flex-col w-56">
          <Sidebar />
          <Sidebar />
          <Sidebar />
        </div>
        <div className=" hidden scrollbar-hide h-screen overflow-scroll md:flex flex-col xl:hidden ">
          <SidebarMedium />
        </div>
        <div className="w-full scrollbar-hide h-screen overflow-scroll">
          {children}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
