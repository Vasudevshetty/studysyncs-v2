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
  stats: {
    cgpa: [
      { semester: "Sem 1", cgpa: 7.5, sgpa: 7.8 },
      { semester: "Sem 2", cgpa: 7.7, sgpa: 7.9 },
      { semester: "Sem 3", cgpa: 7.9, sgpa: 8.1 },
      { semester: "Sem 4", cgpa: 8.2, sgpa: 8.3 },
    ],
    attendance: {
      series: [{ name: "Subject", data: [92, 82, 44, 98, 72, 83, 89, 88, 66] }],
      categories: [
        "ADA",
        "OS",
        "Algebra",
        "TOC",
        "DC",
        "SE",
        "ENV",
        "OS_L",
        "ADA_L",
      ],
    },
    attendanceSummary: [
      { name: "Present", value: 80 },
      { name: "Absent", value: 15 },
      { name: "No Classes", value: 5 },
    ],
  },
};
