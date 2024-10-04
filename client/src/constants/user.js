import { v4 as uuidv4 } from "uuid"; // Install uuid library for generating unique ids
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

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

export const subjects = {
  toc: {
    name: "Theory of Computation",
    slug: "toc",
    credit: 3,
    color: colors[0], // Purple
    chapters: [
      {
        name: "Introduction to Automata",
        modules: [
          {
            name: "Finite Automata",
            resources: [
              {
                name: "Finite Automata Notes",
                size: "2 MB",
                date: "2024-01-15",
                url: "/resources/toc/finite_automata_notes.pdf",
              },
              {
                name: "Finite Automata Tutorial",
                size: "15 KB",
                date: "2024-01-16",
                url: "/resources/toc/finite_automata_tutorial",
              },
            ],
          },
          {
            name: "Deterministic vs. Non-Deterministic Automata",
            resources: [
              {
                name: "DFA vs NFA Comparison",
                size: "1.2 MB",
                date: "2024-01-17",
                url: "/resources/toc/dfa_nfa_comparison.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Context-Free Grammars",
        modules: [
          {
            name: "CFG and Parse Trees",
            resources: [
              {
                name: "CFG Notes",
                size: "1.5 MB",
                date: "2024-02-01",
                url: "/resources/toc/cfg_notes.pdf",
              },
              {
                name: "CFG Practice Problems",
                size: "10 KB",
                date: "2024-02-02",
                url: "/resources/toc/cfg_practice",
              },
            ],
          },
        ],
      },
      {
        name: "Pumping Lemma",
        modules: [
          {
            name: "Pumping Lemma for Regular Languages",
            resources: [
              {
                name: "Pumping Lemma Guide",
                size: "1.8 MB",
                date: "2024-02-15",
                url: "/resources/toc/pumping_lemma_guide.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Turing Machines",
        modules: [
          {
            name: "Introduction to Turing Machines",
            resources: [
              {
                name: "Turing Machines Overview",
                size: "2 MB",
                date: "2024-03-01",
                url: "/resources/toc/turing_machines_overview.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Decidability",
        modules: [
          {
            name: "Decidable and Undecidable Problems",
            resources: [
              {
                name: "Decidability Lecture Notes",
                size: "1.5 MB",
                date: "2024-03-15",
                url: "/resources/toc/decidability_notes.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  se: {
    name: "Software Engineering",
    slug: "se",
    credit: 4,
    color: colors[1], // Teal
    chapters: [
      {
        name: "Software Development Life Cycle",
        modules: [
          {
            name: "Waterfall Model",
            resources: [
              {
                name: "Waterfall Model Overview",
                size: "3 MB",
                date: "2024-01-10",
                url: "/resources/se/waterfall_overview.pdf",
              },
              {
                name: "Waterfall Model Explained",
                size: "20 KB",
                date: "2024-01-11",
                url: "/resources/se/waterfall_explained",
              },
            ],
          },
          {
            name: "Agile Methodology",
            resources: [
              {
                name: "Agile Guide",
                size: "1.8 MB",
                date: "2024-01-15",
                url: "/resources/se/agile_guide.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Requirements Engineering",
        modules: [
          {
            name: "Requirement Gathering",
            resources: [
              {
                name: "Requirement Gathering Techniques",
                size: "2.5 MB",
                date: "2024-02-01",
                url: "/resources/se/requirement_gathering.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "System Design",
        modules: [
          {
            name: "Architectural Design",
            resources: [
              {
                name: "Architectural Design Patterns",
                size: "3 MB",
                date: "2024-02-10",
                url: "/resources/se/architectural_design.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Testing",
        modules: [
          {
            name: "Unit Testing",
            resources: [
              {
                name: "Unit Testing Strategies",
                size: "1.5 MB",
                date: "2024-03-01",
                url: "/resources/se/unit_testing_strategies.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Maintenance",
        modules: [
          {
            name: "Software Maintenance",
            resources: [
              {
                name: "Software Maintenance Guide",
                size: "1.8 MB",
                date: "2024-03-15",
                url: "/resources/se/maintenance_guide.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  dc: {
    name: "Data Communication",
    slug: "dc",
    credit: 4,
    color: colors[2], // Orange
    chapters: [
      {
        name: "Introduction to Data Communication",
        modules: [
          {
            name: "Basics of Data Communication",
            resources: [
              {
                name: "Data Communication Basics",
                size: "3 MB",
                date: "2024-01-10",
                url: "/resources/dc/data_comm_basics.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Transmission Media",
        modules: [
          {
            name: "Guided Media",
            resources: [
              {
                name: "Guided Media Overview",
                size: "1.5 MB",
                date: "2024-01-20",
                url: "/resources/dc/guided_media_overview.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Network Topologies",
        modules: [
          {
            name: "Bus, Star, and Ring Topologies",
            resources: [
              {
                name: "Network Topologies Explained",
                size: "2 MB",
                date: "2024-02-01",
                url: "/resources/dc/network_topologies.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Switching Techniques",
        modules: [
          {
            name: "Circuit and Packet Switching",
            resources: [
              {
                name: "Switching Techniques Guide",
                size: "1.8 MB",
                date: "2024-02-15",
                url: "/resources/dc/switching_techniques.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Error Detection and Correction",
        modules: [
          {
            name: "Parity Checking",
            resources: [
              {
                name: "Error Detection Techniques",
                size: "1.6 MB",
                date: "2024-03-01",
                url: "/resources/dc/error_detection.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  os: {
    name: "Operating Systems",
    slug: "os",
    credit: 3,
    color: colors[3], // Indigo
    chapters: [
      {
        name: "Introduction to Operating Systems",
        modules: [
          {
            name: "Basic Concepts",
            resources: [
              {
                name: "OS Basics Overview",
                size: "2 MB",
                date: "2024-01-12",
                url: "/resources/os/os_basics_overview.pdf",
              },
              {
                name: "Introduction to OS Video",
                size: "25 MB",
                date: "2024-01-13",
                url: "/resources/os/introduction_to_os.mp4",
              },
            ],
          },
        ],
      },
      {
        name: "Process Management",
        modules: [
          {
            name: "Process Scheduling",
            resources: [
              {
                name: "Process Scheduling Notes",
                size: "1.8 MB",
                date: "2024-01-20",
                url: "/resources/os/process_scheduling_notes.pdf",
              },
              {
                name: "CPU Scheduling Algorithms",
                size: "1.2 MB",
                date: "2024-01-21",
                url: "/resources/os/cpu_scheduling_algorithms.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Memory Management",
        modules: [
          {
            name: "Paging and Segmentation",
            resources: [
              {
                name: "Memory Management Techniques",
                size: "2.5 MB",
                date: "2024-02-01",
                url: "/resources/os/memory_management.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Concurrency Control",
        modules: [
          {
            name: "Deadlocks",
            resources: [
              {
                name: "Deadlock Prevention Strategies",
                size: "1.9 MB",
                date: "2024-02-15",
                url: "/resources/os/deadlock_prevention.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "File Systems",
        modules: [
          {
            name: "File System Implementation",
            resources: [
              {
                name: "File Systems Notes",
                size: "2 MB",
                date: "2024-03-05",
                url: "/resources/os/file_systems_notes.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  la: {
    name: "Linear Algebra",
    slug: "la",
    credit: 3,
    color: colors[4], // Lime
    chapters: [
      {
        name: "Vectors and Matrices",
        modules: [
          {
            name: "Vector Spaces",
            resources: [
              {
                name: "Introduction to Vector Spaces",
                size: "1.5 MB",
                date: "2024-01-10",
                url: "/resources/la/vector_spaces.pdf",
              },
              {
                name: "Vector Space Examples",
                size: "900 KB",
                date: "2024-01-11",
                url: "/resources/la/vector_space_examples.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Determinants",
        modules: [
          {
            name: "Properties of Determinants",
            resources: [
              {
                name: "Determinants Properties",
                size: "1.3 MB",
                date: "2024-01-20",
                url: "/resources/la/determinants_properties.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Eigenvalues and Eigenvectors",
        modules: [
          {
            name: "Eigenvalue Problems",
            resources: [
              {
                name: "Eigenvalues and Eigenvectors Guide",
                size: "2 MB",
                date: "2024-02-01",
                url: "/resources/la/eigenvalues_guide.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Linear Transformations",
        modules: [
          {
            name: "Matrix Representation",
            resources: [
              {
                name: "Matrix Representation of Linear Transformations",
                size: "1.7 MB",
                date: "2024-02-15",
                url: "/resources/la/matrix_representation.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Orthogonality",
        modules: [
          {
            name: "Orthogonal Projections",
            resources: [
              {
                name: "Orthogonality Concepts",
                size: "1.5 MB",
                date: "2024-03-01",
                url: "/resources/la/orthogonality_concepts.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  ada: {
    name: "Design and Analysis of Algorithms",
    slug: "ada",
    credit: 4,
    color: colors[5], // Pink
    chapters: [
      {
        name: "Introduction to Algorithms",
        modules: [
          {
            name: "Algorithm Complexity",
            resources: [
              {
                name: "Complexity Analysis Notes",
                size: "2 MB",
                date: "2024-01-15",
                url: "/resources/ada/complexity_analysis_notes.pdf",
              },
              {
                name: "Big-O Notation Explained",
                size: "1 MB",
                date: "2024-01-16",
                url: "/resources/ada/big_o_notation.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Divide and Conquer",
        modules: [
          {
            name: "Merge Sort",
            resources: [
              {
                name: "Merge Sort Implementation",
                size: "1.8 MB",
                date: "2024-01-25",
                url: "/resources/ada/merge_sort.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Greedy Algorithms",
        modules: [
          {
            name: "Greedy Strategy",
            resources: [
              {
                name: "Greedy Algorithm Examples",
                size: "2.1 MB",
                date: "2024-02-01",
                url: "/resources/ada/greedy_examples.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Dynamic Programming",
        modules: [
          {
            name: "Optimal Substructure",
            resources: [
              {
                name: "Dynamic Programming Guide",
                size: "2.5 MB",
                date: "2024-02-15",
                url: "/resources/ada/dynamic_programming_guide.pdf",
              },
            ],
          },
        ],
      },
      {
        name: "Graph Algorithms",
        modules: [
          {
            name: "Shortest Path Algorithms",
            resources: [
              {
                name: "Dijkstra's Algorithm Notes",
                size: "2 MB",
                date: "2024-03-01",
                url: "/resources/ada/dijkstra_algorithm.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
};

// Utility function to create a new instance of a subject with a unique id
const createSubjectInstance = (subject, time) => ({
  ...subject,
  id: uuidv4(), // Generate a unique ID for each instance
  time: time,
});

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
        "la",
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
  timetable: {
    start: "2024-09-28",
    end: "2024-12-10",
    weekdays: {
      mon: [
        { ...createSubjectInstance(subjects.dc, "7:30") },
        { ...createSubjectInstance(subjects.se, "8:30") },
        { ...createSubjectInstance(subjects.toc, "11:00") },
        { ...createSubjectInstance(subjects.os, "12:40") },
      ],
      tue: [
        { ...createSubjectInstance(subjects.ada, "11:00") },
        { ...createSubjectInstance(subjects.la, "11:50") },
        { ...createSubjectInstance(subjects.dc, "2:30") },
        { ...createSubjectInstance(subjects.se, "3:30") },
        { ...createSubjectInstance(subjects.toc, "4:30") },
      ],
      wed: [
        { ...createSubjectInstance(subjects.la, "7:30") },
        { ...createSubjectInstance(subjects.toc, "8:30") },
        { ...createSubjectInstance(subjects.os, "9:30") },
      ],
      thu: [
        { ...createSubjectInstance(subjects.dc, "11:00") },
        { ...createSubjectInstance(subjects.ada, "11:50") },
        { ...createSubjectInstance(subjects.os, "2:30") },
        { ...createSubjectInstance(subjects.la, "3:30") },
        { ...createSubjectInstance(subjects.se, "4:30") },
      ],
      fri: [
        { ...createSubjectInstance(subjects.ada, "7:30") },
        { ...createSubjectInstance(subjects.os, "8:30") },
        { ...createSubjectInstance(subjects.la, "9:30") },
        { ...createSubjectInstance(subjects.toc, "11:00") },
        { ...createSubjectInstance(subjects.se, "11:50") },
        { ...createSubjectInstance(subjects.dc, "2:30") },
      ],
      sat: [
        { ...createSubjectInstance(subjects.toc, "2:30") },
        { ...createSubjectInstance(subjects.se, "3:30") },
        { ...createSubjectInstance(subjects.la, "4:30") },
      ],
      sun: [],
    },
  },
  attendanceRecord: [
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
          ...subjects.ada,
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
          ...subjects.ada,
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
          ...subjects.la,
          status: "attended",
        },
      ],
      extraClasses: [],
    },
  ],
};

export const createDefaultAttendanceRecord = (date) => {
  return {
    date: date,
    weekday: new Date(date)
      .toLocaleDateString("en-US", { weekday: "short" })
      .toLowerCase(),
    classes: user.timetable.weekdays[
      new Date(date).toDateString().split(" ")[0].toLowerCase()
    ].map((subject) => ({
      ...subject,
      status: "", // Default status is empty, meaning not marked
    })),
    extraClasses: [],
  };
};
