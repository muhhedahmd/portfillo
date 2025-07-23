"use client"

import { projects } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {  useEffect, useRef, useState } from "react"
// import Footer from "./footer"
// import Footer from "./footer"

export default function InstantHorizontalScroll( {
  isMobile
} : {
  isMobile:boolean
}) {
  // Refs for DOM elements
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const letterRef = useRef<HTMLSpanElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)

  // State for tracking scroll position and animation states
  const [isHorizontalScrollComplete, setIsHorizontalScrollComplete] = useState(0)
  // const [scrollTriggerPoint, setScrollTriggerPoint] = useState(0)
  // const [verticalScrollProgress, setVerticalScrollProgress] = useState(0)

  // Register GSAP plugins and set up horizontal scroll animation
  useGSAP(

    () => {
      if (!containerRef.current || !contentRef.current) return

      gsap.registerPlugin(ScrollTrigger)

      const container = containerRef.current
      const content = contentRef.current
      const maxScroll = content.scrollWidth - container.clientWidth

      // Create ScrollTrigger for horizontal scrolling effect
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom 100",
        onUpdate: (self) => {
          // Track when horizontal scroll is complete


          // Animate horizontal scroll based on vertical scroll progress
          gsap.to(content, {
            scrollLeft: self.progress * maxScroll,
            ease: "power2.out",
            duration: 0.1, // Faster duration
            overwrite: true, // Ensure animations don't conflict
            onUpdateParams: [self.progress],
            onUpdate: (self) => {
      
               setIsHorizontalScrollComplete(self)
               
            },
        
          })
        },
        scrub: 0.2, // Add smooth scrubbing for better reverse animation
      })
    },
    { scope: containerRef },
  )

 



  useGSAP(() => {
    // Animate the letter "t" with faster transitions and background
    gsap.to(letterRef.current, {
      color: isHorizontalScrollComplete >= 1 ? "#111" : "#fff",
      backgroundColor: "transparent",
      borderRadius: "0.5rem",
      padding: isHorizontalScrollComplete >= 1 ? "0.5rem" : "0",
  
      scale: (scalex) => {
        // More responsive scaling that works in both directions
        
        // const currentScale = isHorizontalScrollComplete * 40

        console.log({scale :letterRef.current?.style , scalex})
        if (isHorizontalScrollComplete === 0) return 1
        return isHorizontalScrollComplete  < .9 ? 1 : 1 * (isHorizontalScrollComplete * (isMobile? 60 : 30 ))
        
      },
      ease: "bounce.in",
      duration: 0.3, // Faster duration
    })

    // Animate the cards container
    gsap.to(cardsContainerRef.current, {
      y: isHorizontalScrollComplete >= .78 ? "-20rem" : 0,
      ease: "power2.inOut",
      duration: 0.1, // Faster duration
    } 
  )
  }, [isHorizontalScrollComplete])

  return (
    <>
      {/* Main container with height to allow scrolling */}
      <div ref={containerRef} className="w-full md:mt-20 mt-[20rem] bg-[#111]" style={{ height: "400rem" }}>
        {/* Sticky container for horizontal scroll effect */}
        <div className="sticky   top-0 h-screen w-full overflow-hidden">
          <div ref={contentRef} className="h-full w-full flex overflow-hidden">
            
            <div className="flex h-full items-center gap-4 px-4">

              <h1 className="rotate-3 flex text-white md:text-[24vw] text-[30rem] min-w-max">
                My Last Work Proje {"          "}
                {/* <span className="w-fit transition-all px-1" ref={isMobile  ?  null  : letterRef}> */}
                  t
                {/* </span> */}
                
        
                c
                {/* <span
                 ref={isMobile  ?  letterRef  : null}
                > */}

                s
                    <div className="text-amber-50">
                My Last Work 
            </div>
                {/* </span> */}
              </h1>
            </div>

          </div>
        </div>
      </div>

      {/* Cards section */}
      <div
        style={{
          height: cardsContainerRef.current?.getBoundingClientRect().height || 500 + 100
        }}
        className="relative min-h-max  w-screen bg-[#111]">
        <div
          ref={cardsContainerRef}
          className="absolute py-20overflow-hidden flex flex-col justify-center items-center 
                    gap-[40rem] min-h-screen w-screen top-0 left-0"
          style={{ background: "transparent" }}
        >
          {/* Project cards */}
          <div className="flex  flex-col justify-center items-center gap-[10rem]">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>


    </>
  )
}

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  liveDemo: string
  github: string
  gradient: string
  icon: string
  isInteractive?: boolean

}

interface ProjectCardProps {
  project: Project
  index: number
}



function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  // const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(cardRef.current, { opacity: 0, y: 100, rotationX: 15 })

      // Scroll trigger animation
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 110%",
        onEnter: () => {
          gsap.to(cardRef.current, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.4,
            delay: index * 0.01,
            ease: "power3.out",
          })
        },
      })

      // Hover animations
      const card = cardRef.current
      if (card) {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            rotationY: 5,
            duration: 0.3,
            ease: "power2.out",
          })
          gsap.to(card.querySelector(".card-glow"), {
            opacity: 0.8,
            scale: 1.1,
            duration: 0.3,
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            rotationY: 0,
            duration: 0.3,
            ease: "power2.out",
          })
          gsap.to(card.querySelector(".card-glow"), {
            opacity: 0.3,
            scale: 1,
            duration: 0.3,
          })
        })

        if (project.isInteractive && card) {
          card.addEventListener("click", () => {
            gsap.to(card, {
              rotationY: 360,
              duration: 1,
              ease: "power2.inOut",
            })

            // Add sparkle effect
            gsap.to(card.querySelector(".card-glow"), {
              scale: 1.3,
              opacity: 0.8,
              duration: 0.5,
              yoyo: true,
              repeat: 1,
            })
          })

          // Add cursor pointer for interactive card
          card.style.cursor = "pointer"
        }
      }
    }, cardRef)

    return () => ctx.revert()
  }, [index, project.isInteractive])

  return (
    <div ref={cardRef} className="relative group perspective-1000 max-w-[26.5rem] sm:max-w-2xl md:max-w-4xl  opacity-50" >
      {/* Glow effect */}
      <div
        className={`card-glow absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`}
      ></div>

      {/* Main card */}
      <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-orange-500/30 hover:border-orange-400/60 rounded-2xl p-4 sm:p-6 h-full min-h-[500px] sm:min-h-[550px] flex flex-col transition-all duration-300 shadow-2xl hover:shadow-orange-500/20">
        {/* Card header */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{project.icon}</div>
          <div className="flex gap-2">
            {project.liveDemo !== "#" && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:scale-110 transition-transform duration-200"
                title="Live Demo"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg hover:scale-110 transition-transform duration-200"
              title="GitHub Repository"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Project title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-300">
          {project.title}
        </h3>

        {/* Project description */}
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 flex-grow line-clamp-6">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="space-y-3">
          <h4 className="text-cyan-400 font-semibold text-sm">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-600 text-xs text-gray-200 rounded-full border border-slate-600/50 hover:border-cyan-400/50 transition-colors duration-200"
                style={{
                  animationDelay: `${techIndex * 0.1}s`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-orange-400/30"></div>
      </div>
    </div>
  )
}





 // Handle vertical scrolling after horizontal scroll is complete
  // useEffect(() => {
  //   if (!isHorizontalScrollComplete) {

  //     gsap.to(letterRef.current, {
  //       scale: 1
  //     })
  //     return
  //   }

  //   // const handleScroll = () => {

  //   //   const triggerPoint = scrollTriggerPoint
  //   //   const containerHeight = containerRef?.current?.clientHeight || 0
  //   //   const containerBottom = containerRef?.current?.getBoundingClientRect().bottom || 0

  //   //   // Only process scroll if we're in the right scroll range and container is still visible
  //   //   if (window.scrollY >= triggerPoint && containerBottom > 0) {
  //   //     // Calculate scroll progress as a value between 0 and 1
  //   //     const progress = gsap.utils.clamp(
  //   //       0,
  //   //       1,
  //   //       gsap.utils.normalize(triggerPoint, containerHeight - 500, window.scrollY),
  //   //     )

  //   //     setVerticalScrollProgress(progress)
  //   //   }
  //   // }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [scrollTriggerPoint, isHorizontalScrollComplete])

  // Animate the highlighted letter and cards based on vertical scroll progress
