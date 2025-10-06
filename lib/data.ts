import React from "react";

import { MdOutlineSportsMartialArts } from "react-icons/md";
import openClassroomsImg from "@/public/oc.png"; // Placeholder, replace with actual image
import epsilonPartnersImg from "@/public/epsilon.png"; // Placeholder, replace with actual image
import taekwondoImg from "@/public/btkd.png"; // Placeholder, replace with actual image
import taekwondoDataImg from "@/public/datafight.png"; // Placeholder, replace with actual image
import pahnImg from "@/public/pahntkd.png";
import andcoImg from "@/public/andco.png";
import kechwafflesImg from "@/public/kechwaffles.png";
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
    slug: "ios",
    title: "iOS Developer Training",
    location: "OpenClassrooms",
    description:
      "Completed iOS development training with Swift and SwiftUI, mastering Xcode and data management with CoreData.",
    icon: React.createElement(IoIosAppstore),
    date: "since sept 2023", // Replace with actual dates if available
  },
  {
    slug: "intern",
    title: "Web Developer Intern",
    location: "Epsilon Partners",
    description:
      "Internship focusing on front-end integration with HTML5, CSS3, JavaScript, React, and Next.js; managed databases with MongoDB.",
    icon: React.createElement(FcMultipleDevices),
    date: "02/2023 - 06/2023 ", // Replace with actual dates if available
  },
  {
    slug: "logistics",
    title: "Logistics Technician & Technicien Referent",
    location: "Boehringer Ingelheim",
    description:
      "Managed logistics operations, specializing in goods reception, aseptic operations, sterilization, and continuous improvement.",
    icon: React.createElement(GrUserWorker),
    date: "08/2016 - Present", // Adjust based on your tenure
  },
  {
    slug: "trainer",
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
    title: "Kechwaffles",
    slug: "kechwaffles",
    description: "E-commerce website for authentic Belgian waffles. Features online ordering, product showcase, and streamlined checkout experience.",
    tags: ["Next.js", "React", "E-commerce"],
    imageUrl: kechwafflesImg,
  },
  {
    title: "AndCo",
    slug: "andco",
    description: "Comprehensive SaaS platform for martial arts club management. Includes online event registration, automatic tournament brackets, member management, and automated communication tools.",
    tags: ["Next.js", "React", "MongoDB", "SaaS"],
    imageUrl: andcoImg,
  },
  {
    title: "PAHN TKD Champ",
    slug: "pahn",
    description: "Talent detection and development platform for French Taekwondo Federation. Features athlete evaluation, performance tracking, and talent management for preparing future champions.",
    tags: ["Next.js", "TypeScript", "Talent Detection", "FFTDA"],
    imageUrl: pahnImg,
  },
  {
    title: "Bron Tkd website",
    slug: "bron",
    description: "Managed the website and digital presence for the Taekwondo association, enhancing community engagement.",
    tags: ["Website Management", "Community Engagement"],
    imageUrl: taekwondoImg,
  },
  {
    title: "Epsilon partners site",
    slug: "epsilon",
    description: "Contributed to web projects, focusing on front-end technologies and MongoDB for database management.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js", "MongoDB"],
    imageUrl: epsilonPartnersImg,
  },
  {
    title: "Instagrid",
    slug: "instagrid",
    description: "Developed iOS applications using Swift and SwiftUI during my training at OpenClassrooms.",
    tags: ["Swift", "SwiftUI", "Xcode"],
    imageUrl: openClassroomsImg,
  },
  {
    title: "DataFight",
    slug: "datafight",
    description: "A web app designed for analyzing Taekwondo fights and improving training methodologies. Responsive and user-friendly, it helps coaches and athletes track performance and strategize better.",
    tags: ["Next.js", "MongoDB", "Express"],
    imageUrl: taekwondoDataImg, // Placeholder, replace with actual image path
  },

] as const;


export const skillsData = [
  { name: "HTML", icon: React.createElement(SiHtml5), color: "#E34F26" },
  { name: "CSS", icon: React.createElement(SiCss3), color: "#1572B6" },
  { name: "JavaScript", icon: React.createElement(SiJavascript), color: "#F7DF1E" },
  { name: "TypeScript", icon: React.createElement(SiTypescript), color: "#3178C6" },
  { name: "React", icon: React.createElement(SiReact), color: "#61DAFB" },
  { name: "Next.js", icon: React.createElement(SiNextdotjs), color: "#000000" },
  { name: "Node.js", icon: React.createElement(SiNodedotjs), color: "#339933" },
  { name: "Express", icon: React.createElement(SiExpress), color: "#000000" },
  { name: "MongoDB", icon: React.createElement(SiMongodb), color: "#47A248" },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql), color: "#4169E1" },
  { name: "Prisma", icon: React.createElement(SiPrisma), color: "#2D3748" },
  { name: "Docker", icon: React.createElement(SiDocker), color: "#2496ED" },
  { name: "Git", icon: React.createElement(SiGit), color: "#F05032" },
  { name: "Swift", icon: React.createElement(SiSwift), color: "#FA7343" },
  { name: "SwiftUI", icon: React.createElement(SiSwift), color: "#FA7343" },
  { name: "Better Auth", icon: React.createElement(MdSecurity), color: "#10B981" },
  { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss), color: "#06B6D4" },
  { name: "Framer Motion", icon: React.createElement(SiFramer), color: "#FF0055" },
];
