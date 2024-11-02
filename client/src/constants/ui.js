import {
  FaChartBar,
  FaCalendarAlt,
  FaUsersCog,
  FaBookReader,
  FaDiscord,
  FaCalendarCheck,
  FaCalculator,
  FaRegCircle,
  FaBookmark,
  FaDownload,
  FaSave,
} from "react-icons/fa";
import { HiCheck, HiOutlinePlus, HiOutlineXCircle, HiX } from "react-icons/hi";
import { Resource } from "@/components/App/Resource";
import { user } from "./user";

export const links = [
  {
    link: "/app/dashboard",
    icon: FaChartBar,
    text: "Dashboard",
  },
  {
    link: "/app/attendance",
    icon: FaCalendarAlt,
    text: "Attendance",
    badge: {
      text: "new",
      color: "bg-green-300 text-gray-800",
      darkColor: "dark:bg-green-700 dark:text-gray-300",
    },
  },
  {
    link: "/app/events",
    icon: FaCalendarCheck,
    text: "Events",
    badge: {
      text: "soon",
      color: "bg-blue-100 text-blue-800",
      darkColor: "dark:bg-blue-900 dark:text-blue-300",
    },
  },
  {
    link: "/app/calculate-gpa",
    icon: FaCalculator,
    text: "Calculate GPA",
    badge: {
      text: "testing",
      color: "bg-violet-300 text-gray-800",
      darkColor: "dark:bg-violet-800 dark:text-gray-300",
    },
  },
  {
    link: "/app/notes",
    icon: FaBookReader,
    text: "Notes",
  },
  {
    link: "/app/discuss",
    icon: FaDiscord,
    text: "Discuss",
    badge: {
      text: "soon",
      color: "bg-blue-100 text-blue-800",
      darkColor: "dark:bg-blue-900 dark:text-blue-300",
    },
  },
  {
    link: "/app/profile",
    icon: FaUsersCog,
    text: "Profile",
  },
];

export const colors = [
  "bg-purple-700", // Purple
  "bg-teal-700", // Teal
  "bg-orange-700", // Orange
  "bg-indigo-700", // Indigo
  "bg-lime-700", // Lime
  "bg-pink-700", // Pink
  "bg-cyan-700", // Cyan
  "bg-amber-700", // Amber
  "bg-rose-700", // Rose
  "bg-fuchsia-700", // Fuchsia
];

export const statusColors = {
  attended: "bg-green-500",
  bunked: "bg-red-500",
  cancelled: "bg-gray-500",
};

export const attendanceOptions = [
  { icon: FaSave, name: "Save", color: "bg-green-500" },
  { icon: HiOutlinePlus, name: "Extra Class", color: "bg-yellow-500" },
  { icon: HiOutlineXCircle, name: "Reset", color: "bg-gray-800" },
];

export const periodOptions = [
  { icon: HiCheck, color: "bg-green-500", status: "attended" },
  { icon: HiX, color: "bg-red-500", status: "bunked" },
  { icon: FaRegCircle, color: "bg-gray-500", status: "cancelled" },
];

export const tabs = [
  {
    Component: Resource,
    icon: FaBookmark,
    content: user.bookmarks,
  },
  { icon: FaDownload, content: user.downloads, Component: Resource },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export const contributors = [
  {
    href: "https://linkedin.com/in/vasudevshetty",
    pic: "https://github.com/vasudevshetty.png",
  },
  {
    href: "https://www.linkedin.com/in/thejas-c-10b3a0259/",
    pic: "https://github.com/thejas027.png",
  },
];
