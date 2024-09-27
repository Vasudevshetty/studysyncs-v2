import {
  FaChartBar,
  FaCalendarAlt,
  FaUsersCog,
  FaBookReader,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";

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
      color: "bg-gray-100 text-gray-800",
      darkColor: "dark:bg-gray-700 dark:text-gray-300",
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

export const social = [
  { link: "https://github.com/Vasudevshetty/studysyncs-v2", icon: FaGithub },
];
