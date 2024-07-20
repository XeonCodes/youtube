import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { VideoComp } from "@/components/PostComp";
import { VideoCategory } from "@/components/videocategory";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="px-5 pb-2 bg-black fixed z-50 w-full">
        <VideoCategory />
      </div>
      <section className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-5 justify-center gap-4">
        {/* Posts */}
        <VideoComp />
        <VideoComp />
        <VideoComp />
      </section>
    </DefaultLayout>
  );
}
