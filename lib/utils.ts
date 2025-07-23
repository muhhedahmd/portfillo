import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const projects = [
  
  {
    id: 0,
    title: "Interactive Portfolio Demo",
    description:
      "Experience this interactive demonstration showcasing modern web development techniques. This card features real-time animations, dynamic color schemes, and responsive design patterns. Built with Next.js 14, GSAP animations, and Tailwind CSS, it demonstrates advanced frontend capabilities including scroll-triggered animations, 3D transformations, and smooth user interactions. The demo includes hover effects, gradient animations, and performance-optimized rendering techniques that create an engaging user experience across all devices. Click to see the 360° rotation effect!",
    technologies: ["Next.js 14", "GSAP", "Tailwind CSS", "TypeScript", "3D CSS"],
    liveDemo: "#interactive",
    github: "#demo",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    icon: "⚡",
    isInteractive: true,
  },
  {
    id: 1,
    title: "Library Management System",
    description:
      "A comprehensive full-stack library management platform engineered with Next.js and Prisma ORM. This sophisticated system enables users to explore an extensive digital book collection, track detailed reading progress with analytics, and purchase books through an integrated e-commerce interface. Features intelligent recommendation algorithms based on author preferences, category analysis, and publisher data. The platform includes a powerful admin dashboard for complete system management, user analytics, inventory control, and sales reporting. Implements secure authentication, payment processing, and real-time notifications for an enhanced user experience.",
    technologies: ["Next.js", "Prisma", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe"],
    liveDemo: "https://librarypro.vercel.app/",
    github: "https://github.com/muhhedahmd/library-management-system",
    gradient: "from-purple-600 via-blue-600 to-cyan-500",
    icon: "📚",
  },
  {
    id: 2,
    title: "White Board App",
    description:
      "Revolutionary collaborative whiteboard application built with cutting-edge real-time synchronization technology. This platform enables seamless team collaboration through organization-based board sharing, instant multi-user editing, and persistent data storage. Features include advanced drawing tools, shape recognition, text annotations, and media embedding capabilities. The application supports unlimited concurrent users with conflict resolution algorithms, ensuring smooth collaborative experiences. Includes role-based permissions, board templates, export functionality, and integration with popular productivity tools for enhanced workflow management.",
    technologies: ["Next.js", "ConvexDB", "Real-time Sync", "WebSockets", "Canvas API"],
    liveDemo: "https://board-app-ivory.vercel.app/",
    github: "https://github.com/muhhedahmd/board-app",
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Advanced Media Player",
    description:
      "Sophisticated media streaming platform developed with Next.js and ConvexDB, featuring comprehensive audio management capabilities. The application supports multiple audio formats, playlist creation, and advanced playback controls including shuffle, repeat, and crossfade effects. Implements secure file upload with automatic format conversion, metadata extraction, and thumbnail generation. Features include user authentication via Clerk, social sharing, collaborative playlists, and detailed listening analytics. The platform also supports offline playback, background audio processing, and integration with external music services for a complete audio experience.",
    technologies: ["Next.js", "ConvexDB", "Clerk Auth", "Audio Processing", "File Upload"],
    liveDemo: "#",
    github: "https://github.com/muhhedahmd/mediaplayer",
    gradient: "from-pink-500 via-red-500 to-orange-500",
    icon: "🎵",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description:
      "Modern React-based e-commerce solution featuring comprehensive product management and seamless shopping experiences. Built with JSONPlaceholder API integration for dynamic product data, the platform implements advanced Context API state management for optimal performance. Features include intelligent product filtering, advanced search functionality, shopping cart persistence, wishlist management, and secure checkout processes. The application includes user authentication, order tracking, review systems, and responsive design optimized for all devices. Implements SEO best practices and performance optimization techniques for enhanced user engagement and conversion rates.",
    technologies: ["React", "Context API", "REST API", "Local Storage", "Responsive Design"],
    liveDemo: "https://amitfinalproj.netlify.app/",
    github: "https://github.com/muhhedahmd/AmitFinalProject",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: "🛒",
  },
  {
    id: 5,
    title: "ACFM Course Management",
    description:
      "Enterprise-grade academic course file management system designed for educational institutions. This comprehensive platform organizes semester materials with sophisticated categorization by academic years, departments, and course codes. Features robust role-based access control distinguishing between faculty, staff, and student permissions. The system includes automated file versioning, collaborative document editing, assignment submission workflows, and grade management integration. Implements advanced search capabilities, bulk file operations, and detailed audit trails for compliance requirements. Supports multiple file formats with preview capabilities and automated backup systems for data security.",
    technologies: ["React", "Role-based Auth", "File Management", "Academic System", "Database"],
    liveDemo: "#",
    github: "https://github.com/muhhedahmd/graduation-project--ACFM-",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    icon: "🎓",
  },
  {
    id: 6,
    title: "Interactive Quiz System",
    description:
      "Comprehensive quiz application featuring advanced assessment capabilities and real-time performance analytics. Built with Next.js and Tailwind CSS, the platform supports multiple question types, dynamic scoring algorithms, and intelligent time management with per-question countdown timers. Features include automatic answer validation, immediate visual feedback, and detailed performance summaries with statistical analysis. The system supports quiz categories, difficulty levels, and adaptive questioning based on user performance. Includes progress tracking, achievement systems, leaderboards, and comprehensive reporting tools for educators and learners alike.",
    technologies: ["Next.js", "Tailwind CSS", "Real-time Scoring", "JSON Data", "Analytics"],
    liveDemo: "https://quiz-app-in-next-js-main-sigma.vercel.app/",
    github: "https://github.com/muhhedahmd/Quiz-App-in-NextJS-main",
    gradient: "from-green-500 via-blue-500 to-purple-500",
    icon: "🧠",
  },
  {
    id: 7,
    title: "Social Media & Chat Platform",
    description:
      "Full-stack social networking platform combining traditional social media features with advanced real-time communication capabilities. Built with Next.js, TypeScript, and Zustand for optimal state management, the platform supports comprehensive social interactions including posts, comments, likes, and media sharing. Features real-time chat with message encryption, file sharing, emoji reactions, and typing indicators. Implements video and audio calling using LiveKit technology, media uploads via Cloudinary with automatic optimization, and infinite scroll for enhanced user experience. Includes advanced notification systems, user profiles, friend connections, and content moderation tools.",
    technologies: ["Next.js", "TypeScript", "Zustand", "LiveKit", "Cloudinary", "Real-time"],
    liveDemo: "#",
    github: "https://github.com/muhhedahmd/scoial-media-with-chat-app",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    icon: "💬",
  },
]



export const imageUrls = [
  {
    url : "https://laa1n4ou8w.ufs.sh/f/EGQNGZ9NlijpNRK2p3UJRKu1orMglDGCSO8NY930PkzjTixZ"
  }, 
  {
    url  : "https://laa1n4ou8w.ufs.sh/f/EGQNGZ9Nlijp0C5d2e8M7pQBJs6FloVYmNuhtUk3CgG4nRyD"
  }
]