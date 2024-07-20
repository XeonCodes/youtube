import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { NavBar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative px-2 flex flex-col ">
      <Head />
      <NavBar />
      <main className="">{children}</main>
      <footer></footer>
    </div>
  );
}
