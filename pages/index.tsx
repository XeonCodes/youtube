import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { VideoComp } from "@/components/PostComp";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-5 justify-center gap-4">
        {/* Posts */}
        <VideoComp />
        <VideoComp />
        <VideoComp />
      </section>
    </DefaultLayout>
  );
}
