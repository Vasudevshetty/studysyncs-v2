import {
  FaChartBar,
  FaCalendarAlt,
  FaUsersCog,
  FaBookReader,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaInstagram,
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

export const user = {
  name: "Vasudev Shetty",
  email: "vasudeepu2815@gmail.com",
  image: "https://github.com/Vasudevshetty.png",
  college: "SJCE, Mysuru",
  course: "Computer Science",
  socials: [
    {
      link: "https://github.com/Vasudevshetty",
      icon: FaGithub,
    },
    {
      link: "https://linkedin.com/in/Vasudevshetty",
      icon: FaLinkedin,
    },
    {
      link: "https://instagram.com/_vasudev_shetty_",
      icon: FaInstagram,
    },
  ],
  semester: 4,
  downloads: [1, 2, 3, 4],
  bookmarks: [1, 2, 3, 4],
  friends: [1, 2, 3, 4, 5, 5],
};
