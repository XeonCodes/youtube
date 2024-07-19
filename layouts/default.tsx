import { Link } from "@nextui-org/link";

import { Head } from "./head";
import { NavBar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col px-3">
      <Head />
      <NavBar />
      <main className="">{children}</main>
      <footer></footer>
    </div>
  );
}
