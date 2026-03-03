"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function EducationAwards() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        if (!containerRef.current) return
        const items = containerRef.current.querySelectorAll('.edu-item')

        items.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                    }
                }
            )
        })
    }, { scope: containerRef })

    return (
        <section className="py-24 md:py-32 w-full bg-[#fafafa] text-[#111111] overflow-hidden">
            <div className="container px-6 md:px-10 mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

                    {/* Education & Certs */}
                    <div className="space-y-8">
                        <div className="mb-12">
                            <h2 className="text-[10vw] md:text-[6vw] lg:text-[4vw] font-black tracking-tighter leading-[0.85] uppercase m-0 p-0 text-[#111111]">
                                EDUCATION.
                            </h2>
                        </div>

                        <div className="edu-item bg-white border-2 border-[#111111] p-8 hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_#111111]">
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-2 text-[#111111]">Bachelor&apos;s Degree in Faculty of Computer Science</h3>
                            <p className="text-[#111111] text-xs font-bold uppercase tracking-widest opacity-60">October 6 University, Giza, 6 October</p>
                        </div>

                        <div className="edu-item bg-white border-2 border-[#111111] p-8 hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_#111111]">
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-2 text-[#111111]">Front End Engineer course</h3>
                            <p className="text-[#111111] text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Amit Learning, Cairo, Maadi</p>
                            <p className="text-[#333] text-sm font-medium">Experience. Credential URL: View Certificate (External PDF)</p>
                        </div>
                    </div>

                    {/* Awards & Languages */}
                    <div className="space-y-8">
                        <div className="mb-12">
                            <h2 className="text-[10vw] md:text-[6vw] lg:text-[4vw] font-black tracking-tighter leading-[0.85] uppercase m-0 p-0 text-[#111111]">
                                AWARDS &<br />LANGUAGES.
                            </h2>
                        </div>

                        <div className="edu-item bg-white border-2 border-[#111111] p-8 hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_#111111]">
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4 text-[#111111]">
                                🏆 4 kyu – Codewars
                            </h3>
                            <p className="text-[#111111] text-xs font-bold uppercase tracking-widest opacity-60 mb-4">Issued by: CodeWars | Year: 2025</p>
                            <p className="text-[#333] text-sm md:text-base font-medium leading-relaxed mb-6">Achieved 4 kyu rank by solving algorithmic challenges and demonstrating advanced problem-solving skills in JavaScript and other languages.</p>
                            <a href="https://www.codewars.com/users/muhhedahmd/stats" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border-2 border-[#111111] text-xs font-bold tracking-widest uppercase hover:bg-[#111111] hover:text-[#fafafa] transition-colors">
                                Profile Stats
                            </a>
                        </div>

                        <div className="edu-item bg-white border-2 border-[#111111] p-8 hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_#111111]">
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-6 text-[#111111]">Languages</h3>
                            <div className="flex flex-col space-y-4">
                                <div className="flex justify-between items-center p-4 border-2 border-[#111111] bg-transparent">
                                    <span className="font-black tracking-tighter uppercase text-xl text-[#111111]">ARABIC</span>
                                    <span className="text-[#111111] text-xs font-bold uppercase tracking-widest">Fluent</span>
                                </div>
                                <div className="flex justify-between items-center p-4 border-2 border-[#111111] bg-transparent">
                                    <span className="font-black tracking-tighter uppercase text-xl text-[#111111]">ENGLISH</span>
                                    <span className="text-[#111111] text-xs font-bold uppercase tracking-widest">Native</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
