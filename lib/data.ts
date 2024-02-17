import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa"; 
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import openClassroomsImg from "@/public/oc.png"; // Placeholder, replace with actual image
import epsilonPartnersImg from "@/public/epsilon.png"; // Placeholder, replace with actual image
import taekwondoImg from "@/public/btkd.jpg"; // Placeholder, replace with actual image
import taekwondoDataImg from "@/public/datafight.png"; // Placeholder, replace with actual image
import { FcMultipleDevices } from "react-icons/fc";
import { IoIosAppstore } from "react-icons/io";




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
    icon: React.createElement(FaReact),
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
  
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Express",
  "Node.js",
  "Git/Github",
  "Leaflet",
  "Swift",
  "SwiftUI",
  // Assuming MongoDB is a skill given your internship; adjust as needed
  "MongoDB",
  // Additional skills from hobbies or interests
  "Taekwondo",
  "Diving", // Represented as an interest; adjust if you have relevant technical skills here
  "Astronomy",
  "Photography",
  
  // Soft skills, not typically listed here but consider incorporating elsewhere
] as const;
