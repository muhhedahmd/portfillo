"use client"

import type React from "react"
import { useRef, memo, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

export interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string | ((t: number) => number)
  splitType?: "chars" | "words" | "lines" | "words, chars"
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  threshold?: number
  rootMargin?: string
  textAlign?: React.CSSProperties["textAlign"]
  onLetterAnimationComplete?: () => void
  animState: "top" | "middle" | "bottom"
}

const SplitText: React.FC<SplitTextProps> = memo(
  ({
    animState,
    text,
    className = "",
    delay = 100,
    duration = 0.6,
    ease = "power3.out",

    textAlign = "center",
    onLetterAnimationComplete,
  }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const timelineRef = useRef<gsap.core.Timeline | null>(null)
    const wordsRef = useRef<string[]>([])

    // Memoize processed words to avoid recalculation
    const words = text
      .trim()
      .split(" ")
      .filter((word) => word.length > 0)

    // Only update words ref if text actually changed
    if (JSON.stringify(wordsRef.current) !== JSON.stringify(words)) {
      wordsRef.current = words
    }

    const animateWords = useCallback(() => {
      if (!containerRef.current) return

      // Kill existing timeline
      if (timelineRef.current) {
        timelineRef.current.kill()
      }

      const wordElements = containerRef.current.querySelectorAll(".split-word")
      if (wordElements.length === 0) return

      // Create single timeline for all animations
      const tl = gsap.timeline({
        onComplete: onLetterAnimationComplete,
      })

      // Set initial state for all elements at once
      gsap.set(wordElements, { opacity: 0, y: 40 })

      // Animate all elements with stagger
      tl.to(wordElements, {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: ease,
        stagger: delay / 1000,
      })

      timelineRef.current = tl
    }, [delay, duration, ease, onLetterAnimationComplete])

    const updateColors = useCallback(() => {
      if (!containerRef.current) return

      const wordElements = containerRef.current.querySelectorAll(".split-word")
      const targetColor = animState === "middle" ? "#000" : "#fff"
      const animDuration = animState === "middle" ? 0.2 : 0.5

      // Use a single tween for all color changes
      gsap.to(wordElements, {
        color: targetColor,
        duration: animDuration,
        ease: "power2.out",
        stagger: 0.02, // Much smaller stagger for color changes
      })
    }, [animState])

    // Initial animation
    useGSAP(
      () => {
        animateWords()
      },
      { dependencies: [text], scope: containerRef },
    )

    // Color animation based on animState
    useGSAP(
      () => {
        updateColors()
      },
      { dependencies: [animState], scope: containerRef },
    )

    // Cleanup on unmount
    useGSAP(() => {
      return () => {
        if (timelineRef.current) {
          timelineRef.current.kill()
        }
      }
    }, [])

    return (
      <div ref={containerRef} className="max-w-6xl flex flex-wrap text-wrap" style={{ textAlign }}>
        {wordsRef.current.map((word, index) => {
          // Handle line breaks
          if (word === "<br/>") {
            return <div key={`br-${index}`} className="w-full h-4" />
          }

          return (
            <p
              key={index}
              className={cn("split-word w-fit ml-2",  animState === "middle" ? "text-black" : "text-white" , className)}
              style={{
                wordWrap: "break-word",
              }}
            >
              {word}
            </p>
          )
        })}
      </div>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.text === nextProps.text &&
      prevProps.animState === nextProps.animState &&
      prevProps.className === nextProps.className &&
      prevProps.delay === nextProps.delay &&
      prevProps.duration === nextProps.duration
    )
  },
)

SplitText.displayName = "SplitText"

export default SplitText
