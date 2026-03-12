"use client"

import { projects } from "@/lib/utils"
import { useRef } from "react" // Added import for useRef

export default function ProjectsSection() {
    const containerRef = useRef(null); // Added declaration for containerRef

    return (
        <section id="projects" ref={containerRef} className="py-24 md:py-32 w-full bg-[#fafafa] text-[#111111] overflow-hidden border-t-2 border-[#111111]">
            <div className="container px-6 md:px-10 mx-auto">
                <div className="mb-16 md:mb-24">
                    <h2 className="text-[10vw] md:text-[6vw] font-black tracking-tighter leading-[0.85] m-0 p-0 uppercase">
                        FEATURED<br />PROJECTS.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col bg-white border-2 border-[#111111] p-8 md:p-12 hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_#111111]"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black text-[#111111] uppercase tracking-tighter mb-2 group-hover:italic transition-all">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-60">
                                        {project.role}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {project.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#111111] font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-[#fafafa] transition-all border-2 border-[#111111] px-4 py-2 text-xs"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <p className="text-[#333] text-sm md:text-base font-medium leading-relaxed mb-10 flex-grow">
                                {project.description}
                            </p>

                            <div className="mt-auto border-t-2 border-[#111111]/10 pt-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-[#111111] text-xs font-bold uppercase tracking-wider text-[#fafafa]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
