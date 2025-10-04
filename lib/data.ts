import React from "react";

import { MdOutlineSportsMartialArts } from "react-icons/md";
import openClassroomsImg from "@/public/oc.png"; // Placeholder, replace with actual image
import epsilonPartnersImg from "@/public/epsilon.png"; // Placeholder, replace with actual image
import taekwondoImg from "@/public/btkd.png"; // Placeholder, replace with actual image
import taekwondoDataImg from "@/public/datafight.png"; // Placeholder, replace with actual image
import pahnImg from "@/public/pahntkd.png";
import andcoImg from "@/public/andco.png";
import { FcMultipleDevices } from "react-icons/fc";
import { IoIosAppstore } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGit,
  SiSwift,
  SiTailwindcss,
  SiFramer
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";





export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "iOS Developer Training",
    location: "OpenClassrooms",
    description:
      "Completed iOS development training with Swift and SwiftUI, mastering Xcode and data management with CoreData.",
    icon: React.createElement(IoIosAppstore),
    date: "since sept 2023", // Replace with actual dates if available
  },
  {
    title: "Web Developer Intern",
    location: "Epsilon Partners",
    description:
      "Internship focusing on front-end integration with HTML5, CSS3, JavaScript, React, and Next.js; managed databases with MongoDB.",
    icon: React.createElement(FcMultipleDevices),
    date: "02/2023 - 06/2023 ", // Replace with actual dates if available
  },
  {
    title: "Logistics Technician & Technicien Referent",
    location: "Boehringer Ingelheim",
    description:
      "Managed logistics operations, specializing in goods reception, aseptic operations, sterilization, and continuous improvement.",
    icon: React.createElement(GrUserWorker),
    date: "08/2016 - Present", // Adjust based on your tenure
  },
  {
    title: "Taekwondo Trainer",
    location: "Bron",
    description:
      "Management of athletes, organization of events and competitions, and development of training programs.",
    icon: React.createElement(MdOutlineSportsMartialArts), // Assuming FaBelt as a placeholder; consider using a more appropriate icon if available
    date: "Since September 2013",
  },
] as const;

export const projectsData = [
  {
    title: "DataFight",
    description: "A web app designed for analyzing Taekwondo fights and improving training methodologies. Responsive and user-friendly, it helps coaches and athletes track performance and strategize better.",
    tags: ["Next.js", "MongoDB", "Express"],
    imageUrl: taekwondoDataImg, // Placeholder, replace with actual image path
  },
  {
    title: "Instagrid",
    description: "Developed iOS applications using Swift and SwiftUI during my training at OpenClassrooms.",
    tags: ["Swift", "SwiftUI", "Xcode"],
    imageUrl: openClassroomsImg,
  },
  {
    title: "Epsilon partners site",
    description: "Contributed to web projects, focusing on front-end technologies and MongoDB for database management.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js", "MongoDB"],
    imageUrl: epsilonPartnersImg,
  },
  {
    title: "Bron Tkd website",
    description: "Managed the website and digital presence for the Taekwondo association, enhancing community engagement.",
    tags: ["Website Management", "Community Engagement"],
    imageUrl: taekwondoImg,
  },
  {
    title: "PAHN TKD Champ",
    description: "Talent detection and development platform for French Taekwondo Federation. Features athlete evaluation, performance tracking, and talent management for preparing future champions.",
    tags: ["Next.js", "TypeScript", "Talent Detection", "FFTDA"],
    imageUrl: pahnImg,
  },
  {
    title: "AndCo",
    description: "Comprehensive SaaS platform for martial arts club management. Includes online event registration, automatic tournament brackets, member management, and automated communication tools.",
    tags: ["Next.js", "React", "MongoDB", "SaaS"],
    imageUrl: andcoImg,
  },

] as const;


export const skillsData = [
  { name: "HTML", icon: React.createElement(SiHtml5) },
  { name: "CSS", icon: React.createElement(SiCss3) },
  { name: "JavaScript", icon: React.createElement(SiJavascript) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "React", icon: React.createElement(SiReact) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "Node.js", icon: React.createElement(SiNodedotjs) },
  { name: "Express", icon: React.createElement(SiExpress) },
  { name: "MongoDB", icon: React.createElement(SiMongodb) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { name: "Prisma", icon: React.createElement(SiPrisma) },
  { name: "Docker", icon: React.createElement(SiDocker) },
  { name: "Git", icon: React.createElement(SiGit) },
  { name: "Swift", icon: React.createElement(SiSwift) },
  { name: "SwiftUI", icon: React.createElement(SiSwift) },
  { name: "Better Auth", icon: React.createElement(MdSecurity) },
  { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss) },
  { name: "Framer Motion", icon: React.createElement(SiFramer) },
];
