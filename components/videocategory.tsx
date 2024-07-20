import React from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Button } from "@nextui-org/button";

export const VideoCategory = () => {
  return (
    <ScrollShadow
      orientation="horizontal"
      className=" w-full scrollbar-hide overflow-scroll"
    >
      <Button>Music</Button>
    </ScrollShadow>
  );
};
