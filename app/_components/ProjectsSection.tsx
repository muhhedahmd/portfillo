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

                                <div className="flex gap-4">
                                    {project.links.liveDemo && (
                                        <a
                                            href={project.links.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#111111] hover:opacity-50 transition-opacity"
                                            title="Live Demo"
                                        >
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                                <path strokeLinecap="square" strokeLinejoin="miter" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#111111] hover:opacity-50 transition-opacity"
                                            title="Source Code"
                                        >
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}
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
