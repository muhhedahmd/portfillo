"use client"

import { cn } from "@/lib/utils"
import { type RefObject, useRef } from "react"
import gsap, { type TimelineLite } from "gsap"
import { useGSAP } from "@gsap/react"


const Header = ({
  isMobile,
  headerRef: HeaderRef,
  animState,
  // lineRefs,
  // isScrolled,
  // ScrollProgress,
}: {
  isMobile: boolean
  headerRef: RefObject<HTMLDivElement | null>
  lineRefs: RefObject<HTMLElement[]>
  animState: "top" | "middle" | "bottom" | "top2"
  ScrollProgress: number
  isScrolled: boolean
}) => {
  const tl = useRef<TimelineLite | null>(gsap.timeline())
  const innerHeaderRef = useRef<HTMLDivElement | null>(null)
  const boxInner = useRef<HTMLDivElement | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)

  // Animation control based on state
  useGSAP(() => {
    if (!HeaderRef.current) return

    tl.current?.kill()
    tl.current = gsap.timeline({ overwrite: true })

    switch (animState) {
      case "top2":
        tl.current
          .to(boxInner.current, { opacity: 1, duration: 0.2 })
          .to(HeaderRef.current, {
            width: "72vw",
            height: "2rem",
            left: "1%",
            top: "2rem",
            duration: 0.3,
          })
          .to(
            innerHeaderRef.current,
            {
              width: "100%",
              height: "100%",
            },
            0,
          )
        break

      case "top":
        tl.current
          .to(boxInner.current, { opacity: 1, duration: 0.2 })
          .to(HeaderRef.current, {
              width:"100%",

            // width: !isMobile ? "75vw" : "85vw",
            height: "2rem",
            left: "50%",
            top: "2rem",
            duration: 0.3,
          })
          .to(
            innerHeaderRef.current,
            {
              width: "100%",
              height: "100%",
            },
            0,
          ).to(
            navRef.current,
            {
              opacity: 1,
              duration: 0.3,
            },
            0
          )
        break

      case "middle":
        tl.current
          .to(boxInner.current, { opacity: 0, duration: 0.2 })
          .to(HeaderRef.current, {
            borderRadius: "1rem",
          //  maxWidth: "20rem",
          })
          .to(
            HeaderRef.current,
            {
              width:"100%",
              // width: !isMobile ? "81vw" : "90vw",
              height: "15rem",
              left: "50%",
              top: "1rem",
              duration: 0.3,
            },
            "<",
          )
          .to(
            innerHeaderRef.current,
            {
              height: "100%",
              width: "100%",
              borderRadius: "1rem",
            },
            0,
          ).to(
            navRef.current,
            {
              opacity: 0,
              duration: 0.3,
            },
            "<",
          )
        break

      case "bottom":
        tl.current
          .to(boxInner.current, {
            opacity: 0,
            visibility: "hidden",
            duration: 0.1,
          })
          .to(
            HeaderRef.current,
            {
              // width: "max-content",
              height: "2rem",
              left: "50%",
              top: "2rem",
              duration: 0.3,
            },
            0,
          )
          .to(
            innerHeaderRef.current,
            {
              height: "100%",
              width: "100%",
              duration: 0.1,
            },
            "<",
          )
          .to(
            boxInner.current,
            {
              opacity: 1,
              visibility: "visible",
              flexDirection: "row",
              duration: 0.1,
            },
            "<",
          ).to(
            navRef.current,
            {
              opacity: 1,
              duration: 0.3,
            },
            0
          ).to(innerHeaderRef.current,

            { width: "100%",
              animationDelay: 0

             }
            , 0).to(HeaderRef.current , {

              // width: !isMobile ? "75vw" : "85vw",
              width: "11rem",
            })
        break
    }
  }, [animState, isMobile])

  return (
    <>
      <div
        className="container px-[5rem]"
      >

        <header

          ref={HeaderRef}
          style={{
            background: "#000",
          }}
          className={cn(

            `
          container
          fixed top-[2rem] left-1/2 -translate-x-1/2
           font-semibold text-[14px] rounded-full shadow-md
           transition-all duration-300 z-20 glow-border`,
          )}
        >
          <div
            ref={innerHeaderRef}
            className="relative z-10 px-2 rounded-full w-full h-[2rem] bg-accent flex items-center justify-between text-xl font-bold"
          >
            <div ref={boxInner} className="flex flex-row gap-2 items-center justify-center">

              <p className="text-sm font-medium mt-1">Mohamed Ahmed</p>
            </div>

            {/* Navigation Links */}
            <nav
              ref={navRef}

              className="hidden md:flex items-center gap-6">

            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-2">

              {/* Mobile menu button */}
              <button className="md:hidden p-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
