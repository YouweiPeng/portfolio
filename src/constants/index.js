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
  Olia,
  Amelia,
  sd,
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
      "Constructed backend of website using Django, MySQL to support real time user authentication, user socializing interface with AJAX, improved system performance and decreased system response time.",
      "Enhanced backend servicesfor online store purchases and taking reservation request from users using Django and MySQL.",
      "Created reusable React components which significantly improved the development progress with best practices such as code-splitting, decreased page load times by 15%.",
    ],
  },
  {
    title: "Software engineer",
    company_name: "Transformers Academy",
    icon: TA,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Developed and maintained AI powered course platform using React.js, Flask and Express framework.",
      "Collaborated with cross-functional teams including UI/UX designers, product managers, and developers.",
      "Created user dashboard, course builder, course data table and progress pages by React.js, Material UI.",
      "Established logic and schema of backend and built backend system, implemented users, message, groups, child users andcourse services by PostgreSQL and Express in Typescript.",
      "Integrated GPT-4 API, replicate image analysis in Django, helped customers to build curriculum and improved their learning experience and efficiency."
    ],
  },
  {
    title: "Software engineer",
    company_name: "Amelia",
    icon: Amelia,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Mar 2024",
    points: [
      "Collaborated with a team of five developers and one UI/UX designer created a social media mobile app for tech- background women using React Native across iOS and Android platform.",
      "Built and enhanced user sign up flow, construct automation test regularly testing major functionalities of app which ensure users able to socializing by creating venues, hosting events and make new friends.",
      "Implemented new features of application such as socializing by creating venues, hosting events in Typescript.",
      "Helped team fixed dependency conflict problem and capable of building more features and moving forward."
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Throughout his internship, David displayed a commitment to his professional development. His eagerness to understand different aspects of software engineering and to explore various solutions to problems was commendable.",
    name: "Olia Stasiuk",
    designation: "CEO",
    company: "Transformers Academy",
    image: Olia,
    LinkedInURL: "https://www.linkedin.com/in/olia-stasiuk/",
  },
];

const projects = [
  {
    name: "Social distribution platform",
    description:
      "A Twitter-like social media app allows user posting, liking, sharing, create comments, following friends and so on, using plain Javascript and Django.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "heroku",
        color: "pink-text-gradient",
      },
    ],
    image: sd,
    source_code_link: "https://www.youtube.com/watch?v=PMXSVO6fO6A",
    demoType: "video",
  },
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
    source_code_link: "https://cmput401.ca/projects/f3993756-6ea5-4677-87f5-b7dc260625ce",
    demoType: "video",
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
];

export { services, technologies, experiences, testimonials, projects , backendTech, frontendTech, ProgrammingLanguages};
