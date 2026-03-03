"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import CirclureSpin from "./CirclureSpin"

const LandingScene = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        delay: 2.4 // Wait for preloader transition
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={containerRef} className="w-full min-h-screen flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-10 bg-[#fafafa]">

      {/* Massive Typography Hero */}
      <div className="flex flex-col gap-0 uppercase font-black tracking-tighter leading-[0.85] text-[#111111]">
        <div className="overflow-hidden">
          <h1 className="hero-line text-[12vw] md:text-[12vw] m-0 p-0 transition-transform duration-700 hover:scale-[1.02] cursor-default origin-left">
            FULL STACK
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-line text-[12vw] md:text-[12vw] m-0 p-0 text-right transition-transform duration-700 hover:scale-[1.02] cursor-default origin-right">
            ENGINEER.
          </h1>
        </div>
      </div>

      {/* Lower Section Grid: Intro Text (Left) & Spinner (Right) */}
      <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-end">

        {/* Intro Text / Sub-headline */}
        <div className="lg:col-span-8 overflow-hidden">
          <p className="hero-line text-lg md:text-2xl font-medium text-[#333] leading-relaxed max-w-3xl">
            I&apos;m <strong>Mohamed Ahmed El Sayed</strong>. I engineer high-performance web applications and design
            uncompromising digital experiences. Specializing in the modern JavaScript ecosystem—specifically React,
            Next.js, and Node.js—I build scalable platforms from end-to-end. By rigorously marrying robust, type-safe
            {/* API architectures with immersive frontend animations, I deliver interfaces that are not just highly
            functional, but viscerally engaging. */}
          </p>
        </div>

        {/* Circular Spin (Right Aligned) */}
        <div className="lg:col-span-4 flex justify-start md:justify-end hero-line">
          <div className="hover:scale-105 transition-transform duration-500 cursor-pointer">
            <CirclureSpin />
          </div>
        </div>

      </div>

    </section>
  )
}

export default LandingScene