import { v4 as uuidv4 } from "uuid"; // Install uuid library for generating unique ids
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
  FaCalculator,
  FaUpload,
  FaRegCircle,
} from "react-icons/fa";
import { HiCheck, HiOutlinePlus, HiOutlineXCircle, HiX } from "react-icons/hi";

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
      text: "beta",
      color: "bg-red-100 text-gray-800",
      darkColor: "dark:bg-red-700 dark:text-gray-300",
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
        "ada",
        "os",
        "algebra",
        "toc",
        "dc",
        "se",
        "env",
        "os_l",
        "ada_l",
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

export const subjects = {
  toc: {
    name: "Theory of Computation",
    slug: "toc",
    credit: 3,
    color: colors[0], // Purple
  },
  se: {
    name: "Software Engineering",
    slug: "se",
    credit: 4,
    color: colors[1], // Teal
  },
  dc: {
    name: "Data Communication",
    slug: "dc",
    credit: 4,
    color: colors[2], // Orange
  },
  os: {
    name: "Operating Systems",
    slug: "os",
    credit: 3,
    color: colors[3], // Indigo
  },
  dbms: {
    name: "Database Management Systems",
    slug: "dbms",
    credit: 4,
    color: colors[4], // Lime
  },
  cn: {
    name: "Computer Networks",
    slug: "cn",
    credit: 3,
    color: colors[5], // Pink
  },
};

// Utility function to create a new instance of a subject with a unique id
const createSubjectInstance = (subject) => ({
  ...subject,
  id: uuidv4(), // Generate a unique ID for each instance
});

export const timetable = {
  start: "2024-09-28",
  end: "2024-12-10",
  weekdays: {
    sun: [
      createSubjectInstance(subjects.toc),
      createSubjectInstance(subjects.cn),
      createSubjectInstance(subjects.dc),
    ],
    mon: [
      createSubjectInstance(subjects.dc),
      createSubjectInstance(subjects.toc),
      createSubjectInstance(subjects.se),
      createSubjectInstance(subjects.os),
    ],
    tue: [
      createSubjectInstance(subjects.se),
      createSubjectInstance(subjects.dbms),
      createSubjectInstance(subjects.dc),
      createSubjectInstance(subjects.cn),
      createSubjectInstance(subjects.toc),
    ],
    wed: [
      createSubjectInstance(subjects.os),
      createSubjectInstance(subjects.se),
      createSubjectInstance(subjects.dbms),
      createSubjectInstance(subjects.toc),
      createSubjectInstance(subjects.dc),
      createSubjectInstance(subjects.cn),
    ],
    thu: [
      createSubjectInstance(subjects.toc),
      createSubjectInstance(subjects.dc),
      createSubjectInstance(subjects.cn),
      createSubjectInstance(subjects.os),
      createSubjectInstance(subjects.dbms),
      createSubjectInstance(subjects.se),
    ],
    fri: [
      createSubjectInstance(subjects.cn),
      createSubjectInstance(subjects.os),
      createSubjectInstance(subjects.toc),
      createSubjectInstance(subjects.se),
      createSubjectInstance(subjects.dbms),
      createSubjectInstance(subjects.dc),
    ],
    sat: [
      createSubjectInstance(subjects.toc),
      createSubjectInstance(subjects.se),
      createSubjectInstance(subjects.dbms),
    ],
  },
};

export const attendanceOptions = [
  { icon: FaUpload, name: "Upload", color: "bg-green-500" },
  { icon: HiOutlinePlus, name: "Extra Class", color: "bg-yellow-500" },
  { icon: HiOutlineXCircle, name: "Reset", color: "bg-gray-800" },
];

export const periodOptions = [
  { icon: HiCheck, color: "bg-green-500", status: "attended" },
  { icon: HiX, color: "bg-red-500", status: "bunked" },
  { icon: FaRegCircle, color: "bg-gray-500", status: "cancelled" },
];

export const attendanceRecord = [
  {
    date: "2024-09-30", // Today
    weekday: "mon",
    classes: [
      {
        ...subjects.toc,
        status: "attended",
      },
      {
        ...subjects.dc,
        status: "bunked",
      },
      {
        ...subjects.os,
        status: "cancelled",
      },
      {
        ...subjects.se,
        status: "bunked",
      },
    ],
    extraClasses: [
      {
        name: "Machine Learning Basics",
        slug: "mlb",
        credit: 2,
        color: "blue",
        status: "attended",
      },
    ],
  },
  {
    date: "2024-09-29", // Yesterday
    weekday: "sun",
    classes: [
      {
        ...subjects.toc,
        status: "attended",
      },
      {
        ...subjects.cn,
        status: "bunked",
      },
      {
        ...subjects.dc,
        status: "attended",
      },
    ],
    extraClasses: [],
  },
  {
    date: "2024-09-28", // Day before Yesterday
    weekday: "sat",
    classes: [
      {
        ...subjects.toc,
        status: "attended",
      },
      {
        ...subjects.se,
        status: "bunked",
      },
      {
        ...subjects.dbms,
        status: "attended",
      },
    ],
    extraClasses: [],
  },
];
