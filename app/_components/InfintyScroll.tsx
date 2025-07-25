"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { memo, useRef, useEffect } from "react"
// import GsapIcon from "@/public/icons/gsap.svg"
// import FigmaIcon from "@/public/icons/icons8-figma.svg"
// import GitIcon from "@/public/icons/icons8-git.svg"
// import GitHubIcon from "@/public/icons/icons8-github-logo.svg"
// import NextJsIcon from "@/public/icons/icons8-nextjs.svg"
// import PrismaIcon from "@/public/icons/icons8-prisma-orm.svg"
// import ReactIcon60 from "@/public/icons/icons8-react-60.svg"
// import ReduxIcon from "@/public/icons/icons8-redux.svg"
// import threeJs from "@/public/icons/Three.js.svg"
// import SupabaseIcon from "@/public/icons/icons8-supabase.svg"
// import Tailwind24 from "@/public/icons/icons8-tailwind-css-24.svg"
// import shadcn from "@/public/icons/shadcn.svg"
// import TypeScriptIcon from "@/public/icons/icons8-typescript.svg"
import Image from "next/image"
import { cn } from "@/lib/utils"

const InfinityScroll = memo(({ isMobile }: { isMobile: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)
  const animationsRef = useRef<{ skills?: gsap.core.Tween; icons?: gsap.core.Tween }>({})

  const svgComponents = [
   { src: "/icons/gsap.svg", name: "Gsap" },
  { src: "/icons/icons8-figma.svg", name: "Figma" },
  { src: "/icons/icons8-git.svg", name: "Git" },
  { src: "/icons/icons8-github-logo.svg", name: "GitHub" },
  { src: "/icons/icons8-nextjs.svg", name: "NextJs" },
  { src: "/icons/icons8-prisma-orm.svg", name: "Prisma" },
  { src: "/icons/shadcn.svg", name: "shadcn" },
  { src: "/icons/Three.js.svg", name: "threeJs" },
  { src: "/icons/icons8-react-60.svg", name: "React" },
  { src: "/icons/icons8-redux.svg", name: "Redux" },
  { src: "/icons/icons8-supabase.svg", name: "Supabase" },
  { src: "/icons/icons8-tailwind-css-24.svg", name: "Tailwind" },
  { src: "/icons/icons8-typescript.svg", name: "TypeScript" },
  ]

  // Cleanup function to prevent memory leaks
  useEffect(() => {
    return () => {
      // Kill all animations on unmount
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(animationsRef.current).forEach((animation) => {
        animation?.kill()
      })
    }
  }, [])

  useGSAP(() => {
    if (isMobile) return

    // Kill existing animations first
    Object.values(animationsRef.current).forEach((animation) => {
      animation?.kill()
    })

    // Skills animation
    if (skillsRef.current) {
      const skillsContainer = skillsRef.current
      const firstChild = skillsContainer.firstElementChild as HTMLElement

      if (firstChild) {
        const skillsWidth = firstChild.offsetWidth * skillsContainer.children.length

        // Create seamless loop animation
        animationsRef.current.skills = gsap.to(skillsContainer, {
          x: -skillsWidth,
          duration: 50,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x: string) => Number.parseFloat(x) % skillsWidth),
          },
        })
      }
    }

    // Icons animation
    if (iconsRef.current) {
      const iconsContainer = iconsRef.current
      const firstChild = iconsContainer.firstElementChild as HTMLElement

      if (firstChild) {
        const iconsWidth = firstChild.offsetWidth * iconsContainer.children.length

        // Create seamless loop animation
        animationsRef.current.icons = gsap.to(iconsContainer, {
          x: -iconsWidth,
          duration: 40,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x: string) => Number.parseFloat(x) % iconsWidth),
          },
        })
      }
    }

  }, [isMobile])

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-white">
      {/* Skills Marquee */}
      <div className="relative ">
        <div ref={skillsRef} className="flex w-max gap-4 whitespace-nowrap">
          {/* Create enough items for seamless loop - no dynamic cloning */}
          {[...Array(30)].map((_, i) => (

            <div key={`skill-${i}`} className="px-4 py-2 flex-shrink-0" style={{ minWidth: "100px" }}>
              <h3 className="text-2xl font-bold text-black">SKILLS</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Icons Marquee */}
      <div className="relative overflow-hidden mt-1">
        <div ref={iconsRef} className="flex w-max gap-8 whitespace-nowrap px-4 py-2">
          {/* Create enough items for seamless loop - no dynamic cloning */}
          {[...Array(6)].map((_, setIndex) =>
            svgComponents.map(({ src , name } , iconIndex) => (
              <div
                key={`icon-${name}-${setIndex}-${iconIndex}`}
                className="flex items-center justify-center flex-shrink-0"
                style={{ minWidth: "80px" }}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={name}
                  width={40}
                  height={40}
                  className={cn("w-[2.5rem] object-contain", name === "Gsap" && "w-[4rem]")}
                />
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  )
})

InfinityScroll.displayName = "InfinityScroll"

export default InfinityScroll
