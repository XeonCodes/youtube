import { SidebarMediumTypes } from "@/types";
import {
  HomeIcon,
  LibraryIcon,
  ShortCreateIcon,
  SubscriptionIcon,
} from "../components/icons";

export const SidebarMediumLists: SidebarMediumTypes[] = [
  {
    icon: <HomeIcon style={{ width: 30 }} />,
    title: "Home",
  },
  {
    icon: <ShortCreateIcon style={{ width: 30 }} />,
    title: "Shorts",
  },
  {
    icon: <SubscriptionIcon style={{ width: 30 }} />,
    title: "Subscribe",
  },
  {
    icon: <LibraryIcon style={{ width: 30 }} />,
    title: "You",
  },
];
