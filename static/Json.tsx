import { SidebarMediumTypes, VideoCategoryTypes } from "@/types";
import {
  HistoryIcon,
  HomeIcon,
  LibraryIcon,
  LikeIcon,
  PlayListIcon,
  ShortCreateIcon,
  SubscriptionIcon,
  WatchLaterIcon,
} from "../components/icons";

export const SidebarMediumLists: SidebarMediumTypes[] = [
  {
    id: 0,
    icon: <HomeIcon style={{ width: 30 }} />,
    title: "Home",
  },
  {
    id: 1,
    icon: <ShortCreateIcon style={{ width: 30 }} />,
    title: "Shorts",
  },
  {
    id: 2,
    icon: <SubscriptionIcon style={{ width: 30 }} />,
    title: "Subscribe",
  },
  {
    id: 3,
    icon: <LibraryIcon style={{ width: 30 }} />,
    title: "You",
  },
];

export const SidebaLists1: SidebarMediumTypes[] = [
  {
    id: 0,
    icon: <HomeIcon style={{ width: 26 }} />,
    title: "Home",
  },
  {
    id: 1,
    icon: <ShortCreateIcon style={{ width: 26 }} />,
    title: "Shorts",
  },
  {
    id: 2,
    icon: <SubscriptionIcon style={{ width: 26 }} />,
    title: "Subscribe",
  },
];

export const SidebaLists2: SidebarMediumTypes[] = [
  {
    id: 3,
    icon: <HistoryIcon style={{ width: 26 }} />,
    title: "History",
  },
  {
    id: 4,
    icon: <PlayListIcon style={{ width: 26 }} />,
    title: "Playlists",
  },

  {
    id: 5,
    icon: <WatchLaterIcon style={{ width: 26 }} />,
    title: "Watch later",
  },
  {
    id: 6,
    icon: <LikeIcon style={{ width: 26 }} />,
    title: "Like videos",
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

export const VideoPostLists = [
  {
    title: "BREAKING NEWS: Mrs Dana White Introduces Donald Trump At The RNC",
    channel: "Fox News",
    avater: "https://i.pravatar.cc/150?img=1",
    verified: false,
    views: 562,
    time: "4 days ago",
    thumbnail: "/assets/thumb1.jpg",
    duration: "2:29:17",
  },
  {
    title: "JavaScript Basics: Understanding the Fundamentals",
    channel: "Programming with Mosh",
    avater: "https://i.pravatar.cc/150?img=2",
    verified: true,
    views: 12034,
    time: "1 week ago",
    thumbnail: "/assets/thumb2.jpg",
    duration: "20:01",
  },
  {
    title: "Live Concert: Coldplay - Fix You",
    channel: "Coldplay Official",
    avater: "https://i.pravatar.cc/150?img=3",
    verified: true,
    views: 98765,
    time: "2 hours ago",
    thumbnail: "/assets/thumb3.jpg",
    duration: "02:51",
  },
  {
    title: "Top 10 Gaming PCs for 2024",
    channel: "Tech Guru",
    avater: "https://i.pravatar.cc/150?img=4",
    verified: false,
    views: 3241,
    time: "3 days ago",
    thumbnail: "/assets/thumb4.jpg",
    duration: "1:20:01",
  },
  {
    title: "Understanding Cybersecurity in 10 Minutes",
    channel: "CyberTech",
    avater: "https://i.pravatar.cc/150?img=5",
    verified: true,
    views: 8421,
    time: "1 month ago",
    thumbnail: "/assets/thumb5.jpg",
    duration: "50:01",
  },
  {
    title: "The Future of AI: Opportunities and Challenges",
    channel: "AI Insider",
    avater: "https://i.pravatar.cc/150?img=6",
    verified: true,
    views: 54321,
    time: "2 weeks ago",
    thumbnail: "/assets/thumb6.jpg",
    duration: "08:32",
  },
  {
    title: "Innovations in Technology: What's Next?",
    channel: "TechCrunch",
    avater: "https://i.pravatar.cc/150?img=7",
    verified: false,
    views: 11234,
    time: "5 days ago",
    thumbnail: "/assets/thumb7.jpg",
    duration: "07:00",
  },
  {
    title: "Living a Life of Righteousness: A Guide",
    channel: "Faith Talks",
    avater: "https://i.pravatar.cc/150?img=8",
    verified: false,
    views: 876,
    time: "3 weeks ago",
    thumbnail: "/assets/thumb8.jpg",
    duration: "50:40",
  },
  {
    title: "Sunday Service Live Stream",
    channel: "Church Online",
    avater: "https://i.pravatar.cc/150?img=9",
    verified: true,
    views: 4532,
    time: "6 hours ago",
    thumbnail: "/assets/thumb9.jpg",
    duration: "06:38",
  },
  {
    title: "Learn to Dance: Salsa for Beginners",
    channel: "Dance Academy",
    avater: "https://i.pravatar.cc/150?img=10",
    verified: false,
    views: 2098,
    time: "2 days ago",
    thumbnail: "/assets/thumb10.jpg",
    duration: "06:38",
  },
  {
    title: "The Ultimate Guide to Cooking Pasta",
    channel: "Chef John's Kitchen",
    avater: "https://i.pravatar.cc/150?img=11",
    verified: true,
    views: 13234,
    time: "1 week ago",
    thumbnail: "/assets/thumb11.jpg",
    duration: "02:38",
  },
  {
    title: "Exploring the World: Top 10 Travel Destinations",
    channel: "Travel Vlogs",
    avater: "https://i.pravatar.cc/150?img=12",
    verified: true,
    views: 6789,
    time: "4 days ago",
    thumbnail: "/assets/thumb12.jpg",
    duration: "03:08:38",
  },
  {
    title: "Daily Workout Routine for Beginners",
    channel: "Fitness Pro",
    avater: "https://i.pravatar.cc/150?img=13",
    verified: false,
    views: 4321,
    time: "5 days ago",
    thumbnail: "/assets/thumb13.jpg",
    duration: "5:06:38",
  },
];
