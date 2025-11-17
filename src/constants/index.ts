import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,

  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,

  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  laravel,
  mysql,
  php,
  bootstrap,
  jira,
  shadcn,
  python,
  agile,
  canvas


} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact ", title: "Contact me" },
];

const services: TService[] = [
  { title: "Web Developer", icon: web },
  { title: "frontend Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "cyber defense", icon: creator },
];

const technologies: TTechnology[] = [
  { name: "shadcn", icon: shadcn },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
 
  { name: "laravel", icon: laravel },
  { name: "mysql", icon: mysql },
  { name: "php", icon: php },
  { name: "Bootstrap", icon:   bootstrap,
 },
  { name: "jira", icon: jira },
  { name: "python", icon: python },
  { name: "agile", icon: agile },
   { name: "canvas", icon: canvas },

  




];

const experiences: TExperience[] = [
  {
    title: "Web Developer Intern",
    companyName: "Siprof",
    icon: starbucks,
    iconBg: "#d12222ff",
    date: "March 3, 2025 – March 28, 2025",
    points: [
      "Designed and developed a web application as part of the internship project.",
      "Gained hands-on experience with the company’s IT infrastructure, including network configuration, switches, IP addressing, and system management.",
      "Observed and collaborated with IT professionals to understand how web applications interact within a secured network environment",
    ],
  },
  {
    title: "University Competition",
    companyName: "",
    icon: tesla,
    iconBg: "#023074ff",
    date: "June 5, 2025",
    points: [
      "Participated in a university competition focused on developing an innovative Software as a Service (SaaS) web application.",
      "Collaborated within a multidisciplinary team to design, develop, and deploy a functional prototype within a limited timeframe.",
      "Worked on both front-end and back-end development using modern web technologies",
      "Strengthened skills in communication, teamwork, and time management under pressure.",
      "The project demonstrated creativity, technical ability, and a strong understanding of real-world software development challenges.",
       
    ],
  },
  {
    title: "Education",
    companyName: "ISTICG,OFPPT",
    icon: shopify,
    iconBg: "#ffffffe2",
    date: "2024 – 2025",
    points: [
      "Comprehensive training in front-end and back-end web development",
      "Technologies: HTML, CSS, JavaScript, ReactJS, PHP, Laravel, MySQL",
      "Hands-on projects: websites, web applications, and database integration",
      "Developed strong teamwork and project management skills.",
    ],
  },
  {
    title: "Cyber Defense Certification",
    companyName: "Jobintech, Data Protect",
    icon: meta,
    iconBg: "#fffffffe",
    date: "october 10, 2025-  january 01 ,2025",
    points: [
      "Specialized training in cybersecurity and cyber defense.",
      "Focus areas: network security, threat detection, system protection, and cybersecurity tools.",
      "Practical experience in identifying and mitigating cyber threats.",
      "Final project: network and web application security assessment.",
    ],
  },
];


    
  
const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

// ✅ Export final
export { services, technologies, experiences, testimonials, projects };