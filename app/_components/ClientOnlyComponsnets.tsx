"use client"
import gsap from "gsap"
import Header from "./landing/Header/Header"
import { useEffect, useRef, useState } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import type { LenisRef } from "lenis/react"
import SmoothScrolling from "./lenisScroll/lenis"
import { throttle } from "lodash"
import ParadoxScrollSection from "./paradoxSection"
import InfintyScroll from "./InfintyScroll"
import LandingScene from "./landing/LandingScene"

gsap.registerPlugin(ScrollTrigger)

export default function ClientOnlyComponents() {
  const landingPageRef = useRef<HTMLDivElement>(null)
  const [isScrolled] = useState(false)
  const [ScrollProgress, setScrollProgress] = useState<number>(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const lineRefs = useRef<HTMLElement[]>([])
  const lenisRef = useRef<LenisRef>(null)

  // Prevent hydration issues
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time)
    }
    gsap.ticker.add(update)
    return () => gsap.ticker.remove(update)
  }, [isClient])

  // Check for mobile
  useEffect(() => {
    if (!isClient) return

    const checkMobile = throttle(() => {
      setIsMobile(window.innerWidth < 768)
    }, 100)

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
      checkMobile.cancel()
    }
  }, [isClient])

  type AnimationState = "top" | "middle" | "bottom"
  const [animState, setAnimState] = useState<AnimationState>("top")
  const headerRef = useRef<HTMLDivElement | null>(null)

  // Main scroll trigger
  useGSAP(() => {
    if (!isClient || !landingPageRef.current) return

    let lastState: AnimationState = "top"

    ScrollTrigger.create({
      trigger: landingPageRef.current,
      start: "top top",
      end: "+=500",
      onUpdate: throttle((self: ScrollTrigger) => {
        const progress = self.progress
        let newState: AnimationState

        setScrollProgress(progress)
        console.log({progress})

        if (progress < 0.05  && !isMobile) {
          newState = "top"
        } else if (progress >= 0.05 && progress <= 0.7 && !isMobile) {
          newState = "middle"
        } else {
          newState = "bottom"
        }

        if (progress < .3 && isMobile ) {
          newState = "top"
        } else if (progress >= 0.3 && progress <= .99 && isMobile) {
          newState = "middle"
        } else {
          newState = "bottom"
        }

        if (newState !== lastState) {
          setAnimState(newState)
          lastState = newState
        }
      }, 50),
    })
  }, [isClient, landingPageRef.current])

  const lenuisRef = useRef<LenisRef>(null)

  if (!isClient) {
    return null
  }

  return (
    <SmoothScrolling ref={lenuisRef}>
      <div ref={landingPageRef} className="overflow-x-hidden relative">
        <Header
          isMobile={isMobile}
          headerRef={headerRef}
          animState={animState}
          lineRefs={lineRefs}
          isScrolled={isScrolled}
          ScrollProgress={ScrollProgress}
        />

        <LandingScene
          isMobile={isMobile}
          headerRef={headerRef}
          scrollProgress={ScrollProgress}
          animState={animState}
          lineRefs={lineRefs}
        />

        <InfintyScroll isMobile={isMobile} />
      </div>

      <ParadoxScrollSection isMobile={isMobile} />
    </SmoothScrolling>
  )
}
