import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projects = [
  {
    id: 1,
    title: "Website Builder Platform",
    role: "Full-stack Engineer",
    description:
      "Engineered a full-stack, multi-language landing page builder with dynamic composition types. Built an admin panel with role-based access control.",
    technologies: ["Next.js", "Express.js", "Prisma ORM", "TypeScript"],
    links: {
      liveDemo: "https://end-user.com",
      github: "https://github.com/end-user-github",
      adminLive: "https://back-end-live.com",
      docs: "https://docs.link",
    },
  },
  {
    id: 2,
    title: "POS System",
    role: "Backend Engineer",
    description:
      "Designed a scalable REST API for a Point of Sale system with 8 modules including stock, sales, and RBAC via JWT. Integrated Stripe payment gateway.",
    technologies: ["Node.js", "MongoDB", "Mongoose", "Socket.io"],
    links: {
      liveDemo: "https://api-status.com",
      github: "https://github.com/muhhedahmd/pos",
      docs: "https://pos-api-docs.com",
    },
  },
  {
    id: 3,
    title: "White Board App",
    role: "Full-stack Developer",
    description:
      "Built a real-time collaborative whiteboard with minimal latency via LiveKit. Synchronized boards in real-time with Convex.",
    technologies: ["Next.js", "Convex", "LiveKit", "Canvas SDK"],
    links: {
      liveDemo: "https://flowing-anemone-30.accounts.dev",
      github: "https://github.com/muhhedahmd/board-app",
    },
  },
  {
    id: 4,
    title: "Library Management System",
    role: "Full-stack Developer",
    description:
      "Built a comprehensive web platform for managing and exploring digital books. Enabled purchasing via Stripe. Implemented intelligent recommendation engine.",
    technologies: ["Next.js", "Prisma", "Stripe", "UploadThing"],
    links: {
      liveDemo: "https://librarypro.vercel.app",
      github: "https://github.com/muhhedahmd/library-management-system",
    },
  },
  {
    id: 5,
    title: "E-commerce React",
    role: "Frontend Developer",
    description:
      "Developed a React e-commerce platform using JSON-Placeholder API. Optimized global state with Context API. Refactored component tree.",
    technologies: ["React", "Context API", "CSS"],
    links: {
      liveDemo: "https://amitfinalproj.netlify.app/",
      github: "https://github.com/muhhedahmd/AmitFinalProject",
    },
  },
];

export const imageUrls = [
  {
    url: "https://laa1n4ou8w.ufs.sh/f/EGQNGZ9NlijpNRK2p3UJRKu1orMglDGCSO8NY930PkzjTixZ",
  },
  {
    url: "https://laa1n4ou8w.ufs.sh/f/EGQNGZ9Nlijp0C5d2e8M7pQBJs6FloVYmNuhtUk3CgG4nRyD",
  },
];
