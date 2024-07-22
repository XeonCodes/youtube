import { SidebarMediumTypes, VideoCategoryTypes } from "@/types";
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

export const VideoCategoryLists: VideoCategoryTypes[] = [
  {
    title: "All",
  },
  {
    title: "JavaScript",
  },
  {
    title: "Live",
  },
  {
    title: "Music",
  },
  {
    title: "Gamming",
  },
  {
    title: "Cyber",
  },
  {
    title: "AI",
  },
  {
    title: "Technology",
  },
  {
    title: "Righteousness",
  },
  {
    title: "Church",
  },
  {
    title: "Dance",
  },
  {
    title: "Cooking",
  },
  {
    title: "Travel",
  },
  {
    title: "Fitness",
  },
  {
    title: "Education",
  },
  {
    title: "Vlogs",
  },
  {
    title: "Podcasts",
  },
  {
    title: "Comedy",
  },
  {
    title: "Sports",
  },
];
