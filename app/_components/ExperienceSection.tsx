"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

const experiences = [
    {
        role: "Full-stack Engineer",
        company: "Website Builder Platform",
        date: "Mar 2025 – Present",
        description: "Engineered a full-stack, multi-language landing page builder with 8 dynamic composition types enabling non-technical users to create professional websites without coding. Architected backend API using Express.js and Prisma ORM. Implemented GSAP-powered animations, Lenis smooth scrolling, BlurHash progressive image loading, and real-time analytics tracking that reduced perceived load time by 30%.",
        tech: ["Next.js", "Express.js", "Prisma ORM"],
        links: {
            code: "end-user-github",
            live: "end-user",
            docs: "DOCS",
            adminLive: "back-end-live",
            adminEgypt: "Admin Egypt Solution"
        }
    },
    {
        role: "Backend Engineer",
        company: "POS System",
        date: "2026 – Present",
        description: "Designed a scalable REST API for a Point of Sale system with 8 modules: authentication, products, categories, stock, warehouses, sales, purchases, and shift management. Implemented RBAC using JWT and built multi-warehouse inventory system with real-time low-stock detection. Integrated Stripe payment gateway. Architected modular codebase using Repository Pattern.",
        tech: ["Node.js", "MongoDB", "Mongoose", "Socket.io"],
        links: {
            live: "API Status | Point of sale system",
            code: "muhhedahmd/pos",
            docs: "POS API Docs"
        }
    },
    {
        role: "Full-stack Developer",
        company: "White Board App",
        date: "Jun 2024 – Aug 2024",
        description: "Built a real-time collaborative whiteboard enabling instant drawing, annotation, and sharing with minimal latency via LiveKit integration. Synchronized all boards in real time with Convex. Optimized rendering with Canvas/WebGL and added lazy asset loading.",
        tech: ["Next.js", "Convex", "LiveKit"],
        links: {
            live: "https://flowing-anemone-30.accounts.dev",
            code: "Github"
        }
    },
    {
        role: "Full-stack Developer",
        company: "Library Management System",
        date: "Mar 2025 – May 2025",
        description: "Built a comprehensive web platform for managing and exploring digital books (PDFs) with an intuitive interface. Enabled purchasing via Stripe. Implemented intelligent recommendation engine that analyzed user activity. Applied responsive design achieving high Lighthouse scores.",
        tech: ["Next.js", "Prisma", "Stripe", "UploadThing"],
        links: {
            live: "librarypro",
            code: "library-management-system"
        }
    },
    {
        role: "Frontend Developer",
        company: "E-commerce React",
        date: "Mar 2023 - Mar 2024",
        description: "Developed a React-based e-commerce platform leveraging JSON-Placeholder API. Implemented global state with Context API. Built product browsing, add-to-cart, and checkout features. Refactored component tree and memoized heavy components to reduce re-renders by 10–15%.",
        tech: ["React", "Context API", "CSS"],
        links: {
            live: "https://flowing-anemone-30.accounts.dev",
            code: "Github"
        }
    },
]

export default function ExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        if (!containerRef.current) return
        const cards = containerRef.current.querySelectorAll('.experience-card')

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    }
                }
            )
        })
    }, { scope: containerRef })

    return (
        <section id="experience" ref={containerRef} className="py-24 md:py-32 w-full bg-[#fafafa] border-y-2 border-[#111111] text-[#111111] relative flex flex-col items-center">
            <div className="container px-6 md:px-10 mx-auto max-w-6xl">
                <div className="mb-16 md:mb-24">
                    <h2 className="text-[10vw] md:text-[6vw] font-black tracking-tighter leading-[0.85] uppercase m-0 p-0 text-[#111111]">
                        PROFESSIONAL<br />EXPERIENCE.
                    </h2>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="experience-card relative bg-white border-2 border-[#111111] hover:-translate-y-2 rounded-none p-8 md:p-12 transition-all duration-300 shadow-[8px_8px_0px_#111111]"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black text-[#111111] uppercase tracking-tighter mb-2 group-hover:italic transition-all">
                                        {exp.role}
                                    </h3>
                                    <p className="text-sm md:text-base font-bold uppercase tracking-widest opacity-60 text-[#111111]">
                                        {exp.company}
                                    </p>
                                </div>
                                <div className="px-4 py-2 border-2 border-[#111111] text-[#111111] text-xs font-bold uppercase tracking-widest bg-transparent">
                                    {exp.date}
                                </div>
                            </div>

                            <p className="text-[#333] font-medium leading-relaxed mb-8">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-[#111111] text-[#fafafa] text-xs font-bold uppercase tracking-wider"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links Section */}
                            {exp.links && (
                                <div className="flex flex-wrap gap-4 text-sm mt-8 pt-8 border-t-2 border-[#111111]/10">
                                    {exp.links.live && (
                                        <Link href={exp.links.live} target="_blank" rel="noopener noreferrer" className="text-[#111111] font-bold uppercase tracking-widest hover:opacity-50 transition-colors border-2 border-[#111111] px-4 py-2 hover:bg-[#111111] hover:text-[#fafafa]">
                                            Live Project
                                        </Link>
                                    )}
                                    {exp.links.code && (
                                        <Link href={exp.links.code} target="_blank" rel="noopener noreferrer" className="text-[#111111] font-bold uppercase tracking-widest hover:opacity-50 transition-colors border-2 border-[#111111] px-4 py-2 hover:bg-[#111111] hover:text-[#fafafa]">
                                            Source Code
                                        </Link>
                                    )}
                                    {exp.links.docs && (
                                        <Link href={exp.links.docs} target="_blank" rel="noopener noreferrer" className="text-[#111111] font-bold uppercase tracking-widest hover:opacity-50 transition-colors border-2 border-[#111111] px-4 py-2 hover:bg-[#111111] hover:text-[#fafafa]">
                                            Docs
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
