import {
  mobile,
  Youtube,
  Qrun,
  Student,
  Healing,
  Github,
  Python,
  Java,
  C,
  SQL,
  Linux,
  Postman,
  backend,
  ReactNative,
  creator,
  web,
  Gao,
  AWS,
  TA,
  javascript,
  Spring,
  typescript,
  html,
  css,
  reactjs,
  fanique,
  redux,
  MUI,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  azure,
  starbucks,
  tesla,
  mysql,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Jira,
  django,
  Node,
  postgresql,
  sqlite,
  Vue,
  Firebase,
  XML,
  Bootstrap,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name:"Microsoft Azure",
    icon: azure,
  },
  {
    name: "Amazon Web Services",
    icon: AWS,
  },
  {
    name: "Github",
    icon: Github,
  },
  {
    name: "Postman",
    icon: Postman,
  },
  {
    name: "Jira",
    icon: Jira,
  }
];
const backendTech = [
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Spring/Spring Boot",
    icon: Spring,
  },
  {
    name: "Node.js",
    icon: Node,
  },
  {
    name:"PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQLite",
    icon: sqlite,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },


];

const frontendTech = [
  {
    name: "HTML5",
    icon: html,
  },

  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Vue",
    icon: Vue,

  },
  {
    name: "React Native",
    icon: ReactNative,
  },
  {
    name : "Material UI",
    icon: MUI,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,

  },
  {
    name :"XML",
    icon: XML,
  }

]

const ProgrammingLanguages = [
  {
    name:"Python",
    icon: Python,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C/C++",
    icon: C,
  },
  {
    name: "SQL",
    icon: SQL,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

];

const experiences = [
  {
    title: "Web developer",
    company_name: "Fanique Group",
    icon: fanique,
    iconBg: "#383E56",
    date: "April 2023 - August 2023",
    points: [
      "Developed a user-friendly official website for company called Healing using React.js, Django and MySQL, integrated Fanique’s internal UI/UX design patterns, worked closely with the UI/UX designer team.",
      "Enhanced backend of website using Django, MySQL to support real time user authentication, user socializing interface with AJAX, improved system performance and decreased system response time.",
      "Created backend servicesfor online store purchases and taking reservation request from users using Django and MySQL.",
      "Created reusable React components which significantly improved the development progress with best practicessuch as code- splitting, decreased page load times by 20%.",
    ],
  },
  {
    title: "Software developer",
    company_name: "GaoTek Inc.",
    icon: Gao,
    iconBg: "#383E56",
    date: "May 2023 - Aug 2023",
    points: [
      "Developed an application using React Native, Spring boot and MongoDB.",
      "Implemented user authentication and authorization using Spring Security, ensuring secure access to features and data.",
      "Designed and implemented MongoDB databases to store user profiles, order details, and interaction history. Utilized MongoDB's flexibility to accommodate complex data structures, enabling efficient querying and data management.",
      "Integrated geolocation services using Mapbox API, displaying distances between users and order destinations.",
    ],
  },
  {
    title: "Software engineer",
    company_name: "Transformers Academy",
    icon: TA,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - present",
    points: [
      "Developing and maintaining web applications using React.js Django and Express.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create an AI powered education platform.",
      "Created user dashboard, course builder page using React.js, Material UI.",
      "Integrated external APIs such as ChatGPT, replicate image analysis in Django better help customers to build their curriculum and improve their learning experience.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Student Management System",
    description:
      "Student Management System which allow admins manage teacher, student and parent in their system using React.js, Django, and PostgreSQL.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: Student,
    source_code_link: "https://github.com/UAlberta-CMPUT401/student-mgmt",
    demoType: "video",
  },
  {
    name: "Healing",
    description:
      "Official website for the company named Healing which aims city loners as their users and provide mental health services using React, Django, and MySQL.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: Healing,
    source_code_link: "https://github.com/YouweiPeng/Healing",
    demoType: "github",
  },
  {
    name: "QRun",
    description:
      "A Snapchat-like social media Android app based on QR scanning activity which encourage users to exercise and socialize outdoors , using Java, XML and Firebase",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: Qrun,
    source_code_link: "https://drive.google.com/file/d/14rvXqUDH7gsvCxb7Bm2OGG1qMfgPf03H/view?pli=1",
    demoType: "video",
  },
  {
    name: "Youtube Clone",
    description:
      "The Youtube clone project not only looks like exactly same with youtube website but also have more features in frontend techniques, using HTML and CSS. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: Youtube,
    source_code_link: "https://youweipeng.github.io/YoutubeClone/",
    demoType: "Website",
  },
];

export { services, technologies, experiences, testimonials, projects , backendTech, frontendTech, ProgrammingLanguages};
