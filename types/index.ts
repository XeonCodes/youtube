import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface SidebarMediumTypes {
  icon: React.ReactNode;
  title: string;
}

export interface VideoCategoryTypes {
  title: string;
}
