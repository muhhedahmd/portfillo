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
      "Engineered a full-stack, multi-language landing page builder with 8 dynamic composition types (Carousel, Cube, Parallax, etc.). Built a comprehensive admin panel with RBAC for managing content across English and Arabic with full RTL support. Implemented GSAP-powered animations and real-time analytics tracking.",
    technologies: [
      "Next.js",
      "Express.js",
      "Prisma ORM",
      "TypeScript",
      "GSAP",
      "next-intl",
    ],
    links: [
      {
        label: "End-User Live",
        url: "https://end-user-landing-manager.vercel.app/en",
      },
      {
        label: "End-user Github",
        url: "https://github.com/muhhedahmd/end-user-landing-manager",
      },
      {
        label: "Admin Live",
        url: "https://admin-egypt-solution.vercel.app/admin",
      },
      {
        label: "Admin Github",
        url: "https://github.com/muhhedahmd/admin-egypt-solution",
      },

      {
        label: "Backend Live",
        url: "https://egypt-solution-back-end.vercel.app/",
      },

      {
        label: "API Docs",
        url: "https://egypt-solution-back-end.vercel.app/api/docs/",
      },
      {
        label: "Backend Github",
        url: "https://github.com/muhhedahmd/Egypt-Solution-back-End",
      },
    ],
  },
  {
    id: 2,
    title: "POS System",
    role: "Backend Engineer",
    description:
      "Designed and developed a scalable REST API for a Point of Sale system with 8 modules including stock, sales, and RBAC via JWT. Integrated Stripe payment gateway with secure checkout flows. Architected modular codebase using Repository Pattern with Zod validation and Swagger/OpenAPI documentation.",
    technologies: [
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "Stripe",
      "Zod",
    ],
    links: [
      { label: "live backend", url: "https://back-end-pos-system.vercel.app/" },
      {
        label: "Github",
        url: "https://github.com/muhhedahmd/back-end-pos-system",
      },
      {
        label: "API Docs",
        url: "https://back-end-pos-system.vercel.app/api-docs/",
      },
    ],
  },
  {
    id: 3,
    title: "White Board App",
    role: "Full-stack Developer",
    description:
      "Built a real-time collaborative whiteboard enabling instant drawing and sharing via LiveKit. Architected an organization-based model with RBAC using Clerk. Synchronized all boards in real-time with Convex and optimized rendering with Canvas/WebGL for high performance.",
    technologies: ["Next.js", "Convex", "LiveKit", "Clerk", "Canvas SDK"],
    links: [
      { label: "Live Demo", url: "https://flowing-anemone-30.accounts.dev" },
      { label: "Github", url: "https://github.com/muhhedahmd/board-app" },
    ],
  },
  {
    id: 4,
    title: "Library Management System",
    role: "Full-stack Developer",
    description:
      "Built a comprehensive web platform for managing digital books with an intuitive interface. Enabled browsing by category/author, progress tracking, and secure purchasing via Stripe. Developed a role-based admin dashboard with catalog analytics and content upload via UploadThing.",
    technologies: ["Next.js", "Prisma", "Stripe", "UploadThing"],
    links: [
      { label: "Live Demo", url: "https://librarypro.vercel.app" },
      {
        label: "Github",
        url: "https://github.com/muhhedahmd/library-management-system",
      },
    ],
  },
  {
    id: 5,
    title: "E-commerce React",
    role: "Frontend Developer",
    description:
      "Developed a React-based e-commerce platform leveraging JSON-Placeholder API. Optimized global state with Context API and refactored component tree to reduce re-renders. Designed clean navigation and UI patterns that significantly improved usability and checkout flow.",
    technologies: ["React", "Context API", "CSS", "JavaScript"],
    links: [
      { label: "Live Demo", url: "https://amitfinalproj.netlify.app/" },
      {
        label: "Github",
        url: "https://github.com/muhhedahmd/admin-egypt-solution",
      },
    ],
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
