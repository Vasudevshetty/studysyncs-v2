import {
  FaChartBar,
  FaCalendarAlt,
  FaUsersCog,
  FaBookReader,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCalendarCheck,
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
    link: "/app/events",
    icon: FaCalendarCheck,
    text: "Events",
    badge: {
      text: "alpha",
      color: "bg-red-100 text-gray-800",
      darkColor: "dark:bg-red-700 dark:text-gray-300",
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
  downloads: [
    {
      name: "MongoDB Tutorial",
      type: "pdf",
      size: "2.3 MB",
      date: "2023-10-01",
    },
    {
      name: "Docker Workshop",
      type: "ppt",
      size: "5.2 MB",
      date: "2023-09-10",
    },
    {
      name: "Kubernetes Deployment",
      type: "pdf",
      size: "3.3 MB",
      date: "2023-10-05",
    },
    {
      name: "React State Management",
      type: "ppt",
      size: "4.5 MB",
      date: "2023-09-18",
    },
    {
      name: "Advanced CSS Animations",
      type: "pdf",
      size: "1.2 MB",
      date: "2023-08-28",
    },
    {
      name: "NoSQL vs SQL Databases",
      type: "ppt",
      size: "3.8 MB",
      date: "2023-07-11",
    },
    {
      name: "DevOps for Beginners",
      type: "pdf",
      size: "2.9 MB",
      date: "2023-09-29",
    },
    {
      name: "Python Programming",
      type: "pdf",
      size: "3.8 MB",
      date: "2023-08-25",
    },
    {
      name: "Web Development Roadmap",
      type: "pdf",
      size: "1.5 MB",
      date: "2023-07-12",
    },
    {
      name: "Machine Learning Basics",
      type: "ppt",
      size: "6.0 MB",
      date: "2023-09-22",
    },
  ],
  bookmarks: [
    {
      name: "JavaScript Basics",
      type: "pdf",
      size: "1.2 MB",
      date: "2023-08-12",
    },
    {
      name: "React Introduction",
      type: "ppt",
      size: "3.4 MB",
      date: "2023-09-15",
    },
    {
      name: "Node.js Guide",
      type: "pdf",
      size: "2.1 MB",
      date: "2023-07-20",
    },
    {
      name: "CSS Tips and Tricks",
      type: "pdf",
      size: "850 KB",
      date: "2023-08-30",
    },
    {
      name: "Database Concepts",
      type: "ppt",
      size: "4.7 MB",
      date: "2023-06-18",
    },
  ],
  friends: [{}, {}, {}, {}, {}, {}],
  stats: {
    cgpa: {
      categories: ["Semester 1", "Semester 2", "Semester 3", "Semester 4"],
      series: [
        {
          name: "CGPA",
          data: [9.33, 9.4, 9.3, 9.0],
        },
        {
          name: "SGPA",
          data: [9.33, 9.45, 9.1, 8.9],
        },
      ],
    },
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
    attendanceSummary: {
      labels: ["Present", "Absent", "Leave"],
      series: [75, 15, 10],
    },
  },
};

export const events = [
  {
    date: "08 Aug",
    title: "CIE-1",
    description:
      "The first CIE will cover chapters 1-2. It will be crucial for building a strong foundation and securing good grades in the SEE.",
  },
  {
    date: "11 Sept",
    title: "Event-1",
    description:
      "A seminar on recent technological advancements. Attendance is mandatory, and it's an opportunity to explore new fields and network with industry professionals.",
  },
  {
    date: "18 Oct",
    title: "CIE-2",
    description:
      "The second CIE will cover chapters 3-4. Focus on problem-solving and applied concepts, as it will help in scoring well in the final examination.",
  },
  {
    date: "21 Dec",
    title: "SEE",
    description:
      "The semester-end exam will be comprehensive, covering all chapters and concepts discussed throughout the semester.",
  },
  {
    date: "10 Nov",
    title: "Workshop on AI & ML",
    description:
      "An interactive workshop covering the basics of AI and Machine Learning. Ideal for students looking to gain practical knowledge in the growing AI industry.",
  },
  {
    date: "15 Nov",
    title: "Cultural Fest",
    description:
      "A day-long celebration featuring student performances, competitions, and guest appearances. It's a great time to relax and showcase talents beyond academics.",
  },
  {
    date: "05 Dec",
    title: "Hackathon",
    description:
      "A 24-hour hackathon where students can participate to build innovative solutions. Teams will compete to solve real-world challenges and win exciting prizes.",
  },
];
