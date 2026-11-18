import type { StaticImageData } from "next/image";

import memotaleImg from "@/public/projects/memotale.webp";
import momocheeImg from "@/public/projects/momochee.webp";
import babyiqImg from "@/public/projects/babyiq.webp";
import kntxImg from "@/public/projects/kntx-vision.webp";
import kechwafflesImg from "@/public/kechwaffles.png";
import andcoImg from "@/public/andco.png";
import pahnImg from "@/public/pahntkd.png";
import datafightImg from "@/public/datafight.png";
import bronImg from "@/public/btkd.png";
import epsilonImg from "@/public/epsilon.png";
import instagridImg from "@/public/oc.png";

/** Canonical host: the apex younesouasmi.com redirects to www on Vercel. */
export const siteUrl = "https://www.younesouasmi.com";

export const contact = {
  email: "y.ouasmi@gmail.com",
  linkedin: "https://www.linkedin.com/in/younes-ouasmi-468926142/",
  github: "https://github.com/CODEFORYOU69",
  cv: "/younesouasmicv.pdf",
} as const;

export const links = [
  { name: "Projects", key: "projects", hash: "#projects" },
  { name: "Services", key: "services", hash: "#services" },
  { name: "Experience", key: "experience", hash: "#experience" },
  { name: "Skills", key: "skills", hash: "#skills" },
  { name: "Contact", key: "contact", hash: "#contact" },
] as const;

export type FeaturedProject = {
  slug: "kntx" | "memotale" | "momochee" | "babyiq";
  name: string;
  /** Public URL; omitted for private platforms (no "visit site" link is rendered). */
  url?: string;
  year: string;
  image: StaticImageData;
  /** Brand color of the product, used as a hover/accent cue only. */
  accent: string;
  stack: readonly string[];
};

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "kntx",
    name: "KNTX Labs",
    year: "2026",
    image: kntxImg,
    accent: "#2563EB",
    stack: [
      "PyTorch",
      "YOLO",
      "RTMPose",
      "MotionBERT",
      "FastAPI",
      "Modal (GPU)",
      "pgvector",
      "Weights & Biases",
      "Next.js 15",
      "Prisma",
      "Electron",
      "SwiftUI",
    ],
  },
  {
    slug: "memotale",
    name: "MemoTale",
    url: "https://memotale.app",
    year: "2026",
    image: memotaleImg,
    accent: "#B5562F",
    stack: [
      "Expo / React Native",
      "Convex",
      "TanStack Start",
      "Vercel AI SDK",
      "Gemini",
      "better-auth",
      "Apple IAP · Play Billing",
    ],
  },
  {
    slug: "momochee",
    name: "Momochee",
    url: "https://momochee.com",
    year: "2026",
    image: momocheeImg,
    accent: "#2F80C0",
    stack: [
      "Next.js 15",
      "Expo / React Native",
      "Prisma",
      "PostgreSQL · Supabase",
      "Better Auth",
      "Stripe",
      "Turborepo",
    ],
  },
  {
    slug: "babyiq",
    name: "BabyIQ",
    url: "https://babyiqapp.com",
    year: "2026",
    image: babyiqImg,
    accent: "#FF6B6B",
    stack: [
      "Expo / React Native",
      "Convex",
      "TanStack Start",
      "better-auth",
      "Stripe · Apple IAP · Play Billing",
      "PostHog",
      "Cloudflare R2",
    ],
  },
];

export const workCategories = ["all", "ai", "saas", "web", "mobile"] as const;
export type WorkCategory = (typeof workCategories)[number];

export type WorkProject = {
  slug: string;
  title: string;
  categories: readonly Exclude<WorkCategory, "all">[];
  tags: readonly string[];
  image?: StaticImageData;
};

export const workProjects: readonly WorkProject[] = [
  {
    slug: "regulaai",
    title: "RegulaAI",
    categories: ["ai", "web"],
    tags: ["RAG", "LangGraph", "pgvector", "FastAPI", "Next.js"],
  },
  {
    slug: "andco",
    title: "AndCo",
    categories: ["saas", "web"],
    tags: ["Next.js", "React", "MongoDB"],
    image: andcoImg,
  },
  {
    slug: "pahn",
    title: "PAHN TKD Champ",
    categories: ["web"],
    tags: ["Next.js", "TypeScript"],
    image: pahnImg,
  },
  {
    slug: "datafight",
    title: "DataFight",
    categories: ["web"],
    tags: ["Next.js", "MongoDB", "Express"],
    image: datafightImg,
  },
  {
    slug: "kechwaffles",
    title: "Kechwaffles",
    categories: ["web"],
    tags: ["Next.js", "React", "E-commerce"],
    image: kechwafflesImg,
  },
  {
    slug: "epsilon",
    title: "Epsilon Partners",
    categories: ["web"],
    tags: ["React", "Next.js", "MongoDB"],
    image: epsilonImg,
  },
  {
    slug: "bron",
    title: "Bron Taekwondo",
    categories: ["web"],
    tags: ["Website"],
    image: bronImg,
  },
  {
    slug: "instagrid",
    title: "Instagrid",
    categories: ["mobile"],
    tags: ["Swift", "SwiftUI", "Xcode"],
    image: instagridImg,
  },
];

export const serviceCases = ["docs", "data", "automation", "rag", "agents", "custom"] as const;
export type ServiceCase = (typeof serviceCases)[number];

export const experienceSlugs = ["ios", "intern", "logistics", "trainer"] as const;

/** Skill groups. "ai" and "ml" are translated (descriptive items), the others are tool names. */
export const skillGroups = [
  { key: "ai", translated: true, items: [] as readonly string[] },
  { key: "ml", translated: true, items: [] as readonly string[] },
  {
    key: "front",
    translated: false,
    items: ["TypeScript", "JavaScript", "React", "Next.js", "TanStack", "Tailwind CSS", "Framer Motion", "HTML / CSS"],
  },
  {
    key: "mobile",
    translated: false,
    items: ["React Native", "Expo", "Swift", "SwiftUI"],
  },
  {
    key: "back",
    translated: false,
    items: ["Node.js", "Express", "Convex", "PostgreSQL", "Supabase", "Prisma", "MongoDB", "Better Auth", "Stripe"],
  },
  {
    key: "tools",
    translated: false,
    items: ["Git", "Docker", "Turborepo", "PostHog", "Cloudflare R2", "Vercel"],
  },
] as const;
