"use client"
import useScrollSpeed from "@/hooks/useScrollSpeed"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ArrowDownRightIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef, type RefObject, memo, useCallback, useMemo } from "react"

const CircularSpin = memo(
  ({
    animState,
    headerRef,
    isMobile = false,
  }: {
    isMobile?: boolean
    headerRef: RefObject<HTMLDivElement | null>
    scrollProgress: number
    animState: "top" | "middle" | "bottom" | "top2"
  }) => {
    const scrollSpeed = useScrollSpeed()
    const TEXT = "MOHAMED*AHAMED*"
    const [rotation, setRotation] = useState(0)
    const [currentSpeed, setCurrentSpeed] = useState(0)
    const animationRef = useRef<number | null>(null)
    const circleNameDivRef = useRef<HTMLDivElement>(null)

    // New interactive states
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    // Base rotation speed (when idle)
    const baseSpeed = 0.2
    // Decay factor - how quickly speed returns to normal (higher = faster decay)
    const decayFactor = 0.95
    // Track if this is the initial render
    const [isFirstRender, setIsFirstRender] = useState(true)

    useEffect(() => {
      // Set first render to false after component mounts
      setIsFirstRender(false)
    }, [])

    useEffect(() => {
      // Update current speed based on scroll speed and hover state
      if (Math.abs(scrollSpeed) > 0.1) {
        // When actively scrolling, update the speed
        const scrollMultiplier = isHovered ? 0.5 : 0.3 // Faster when hovered
        setCurrentSpeed(baseSpeed + Math.abs(scrollSpeed) * scrollMultiplier)
      } else if (isHovered) {
        // When hovering but not scrolling, increase base speed
        setCurrentSpeed(baseSpeed * 3)
      }
    }, [scrollSpeed, isHovered])

    useEffect(() => {
      // Animation function that continuously updates rotation
      const animate = () => {
        // Apply decay to gradually return to base speed when not scrolling
        setCurrentSpeed((prevSpeed) => {
          const targetSpeed = isHovered ? baseSpeed * 3 : baseSpeed
          // If close enough to target speed, just return to target speed
          if (Math.abs(prevSpeed - targetSpeed) < 0.05) {
            return targetSpeed
          }
          // Otherwise, gradually decay toward target speed
          return targetSpeed + (prevSpeed - targetSpeed) * decayFactor
        })

        setRotation((prevRotation) => prevRotation + currentSpeed)
        animationRef.current = requestAnimationFrame(animate)
      }

      // Start the animation
      animationRef.current = requestAnimationFrame(animate)

      // Clean up animation on unmount
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }, [currentSpeed, isHovered]) // Depend on currentSpeed and hover state

    const [radius, setRadius] = useState(50)
    const [fontSpansSize, setfontSpansSize] = useState(1)

    // Memoize spans for better performance
    const spans = useMemo(() => {
      const centerX = 0
      const centerY = 0
      return TEXT.split("").map((char, index) => {
        // Calculate the angle for this character
        const angle = (index / TEXT.length) * 2 * Math.PI
        // Position the character on the circle
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)
        // Calculate the rotation angle in degrees
        const rotation = angle * (180 / Math.PI) + 90 // +90 makes the letters face outward

        return {
          char,
          transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
          key: `${char}-${index}`,
        }
      })
    }, [radius])

    // New interactive event handlers
    const handleMouseEnter = useCallback(() => {
      setIsHovered(true)
      // Add hover animation
      gsap.to(circleNameDivRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      })
    }, [])

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false)
      // Reset hover animation
      gsap.to(circleNameDivRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }, [])

    const handleClick = useCallback(() => {
      setIsClicked(true)

      // Click animation - 360 spin on the container
      gsap.to(circleNameDivRef.current, {
        rotationZ: "+=360",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setIsClicked(false)
        },
      })

      // Pulse effect
      gsap.fromTo(
        circleNameDivRef.current,
        { scale: isHovered ? 1.1 : 1 },
        {
          scale: 1.3,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        },
      )

      console.log("Circular spin clicked!")
    }, [isHovered])

    const handleDoubleClick = useCallback(() => {
      // Double click for special effect
      gsap.to(circleNameDivRef.current, {
        rotationY: "+=360",
        duration: 0.8,
        ease: "power2.inOut",
      })

      // Color change effect on spans
      gsap.to(
        spans.map((_, i) => `.span-${i}`),
        {
          color: "#ff6b6b",
          duration: 0.3,
          stagger: 0.05,
          yoyo: true,
          repeat: 1,
        },
      )
    }, [spans])

    const tl = useRef(gsap.timeline({ defaults: { ease: "power2.out" } }))
    const SpansDivRef = useRef<HTMLDivElement>(null)
    const arrowRef = useRef<SVGSVGElement>(null)
    const bgArrowRef = useRef<HTMLDivElement>(null)

    // Initial fade-in animation
    useEffect(() => {
      if (isFirstRender && circleNameDivRef.current && headerRef.current) {
        // Get the correct initial position
        const targetLeft = headerRef.current.getBoundingClientRect().right
        // Set initial position before fading in
        gsap.set(circleNameDivRef.current, {
          position: "fixed",
          zIndex: 100,
          top: 8,
          left: `calc(${targetLeft}px - 3.9rem)`,
          opacity: 0,
        })
        // Fade in smoothly
        gsap.to(circleNameDivRef.current, {
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.inOut",
        })
      }
    }, [isFirstRender, headerRef])

    useGSAP(
      () => {
        if (!headerRef.current || isFirstRender) return
        // Get target positions
        const targetLeft = headerRef.current.getBoundingClientRect().right
        const targetTop = headerRef.current.getBoundingClientRect().top
          ? headerRef.current.getBoundingClientRect().top + 24 + 45
          : 0

        // Clear previous timeline
        if (tl.current) {
          tl.current.kill()
          tl.current = gsap.timeline({ defaults: { ease: "power2.out" } })
        }

        // Apply animations based on state
        if (animState === "top") {
          tl.current
            .to(
              SpansDivRef.current,
              {
                transition: "all ease-in-out",
                visibility: "hidden",
                opacity: 0,
                duration: 0.1,
              },
              0,
            )
            .to(
              arrowRef.current,
              {
                width: "1.5rem",
                height: "1.5rem",
                fontSize: "1rem",
                color: "white",
              },
              0,
            )
            .to(
              circleNameDivRef.current,
              {
                visibility: "visible",
                position: "fixed",
                zIndex: 100,
                top: 8,
                left: `calc(${targetLeft}px - 3.9rem)`,
                opacity: 1,
                ease: "power2.out",
              },
              0,
            )
            .to(
              bgArrowRef.current,
              {
                background: "rgb(255 204 0)",
              },
              0,
            )
            .to(
              arrowRef.current,
              {
                width: "1.6rem",
                height: "1.6rem",
                fontSize: "1.5rem",
                color: "#fff",
              },
              0.1,
            )
        } else if (animState === "middle") {
          if (!isMobile) {
            tl.current
              .to(
                circleNameDivRef.current,
                {
                  opacity: 1,
                  position: "fixed",
                  zIndex: 100,
                  bottom: "unset",
                  top: `calc(${targetTop}px + 1rem)`,
                  left: `calc(${targetLeft}px - 9rem)`,
                  onComplete: () => {
                    setfontSpansSize(1.5)
                    setRadius(80)
                  },
                },
                0,
              )
              .to(
                SpansDivRef.current,
                {
                  visibility: "visible",
                  opacity: 1,
                  alpha: 1,
                },
                0,
              )
              .to(
                bgArrowRef.current,
                {
                  background: "linear-gradient(45deg, #fff, #fff)",
                },
                0,
              )
              .to(
                arrowRef.current,
                {
                  width: "8.5rem",
                  height: "8.5rem",
                  fontSize: "10rem",
                  color: "#fee685",
                },
                0.1,
              )
              .duration(0.3)
          } else {
            tl.current.to(
              circleNameDivRef.current,
              {
                visibility: "hidden",
                opacity: 0,
              },
              0,
            )
          }
        } else if (animState === "bottom") {
          tl.current
            .to(
              circleNameDivRef.current,
              {
                visibility: "visible",
                opacity: 1,
                position: "fixed",
                zIndex: 100,
                bottom: "1.5rem",
                left: "unset",
                right: "1.5rem",
                top: "auto",
                onComplete: () => {
                  setRadius(50)
                  setfontSpansSize(1)
                },
              },
              0,
            )
            .to(
              arrowRef.current,
              {
                borderRadius: "999px",
                background: "rgb(255 204 0)",
                visibility: "visible",
                width: "2.5rem",
                height: "2.5rem",
                fontSize: "1rem",
                color: "#fee685",
              },
              0,
            )
            .to(
              SpansDivRef.current,
              {
                visibility: "visible",
                opacity: 1,
                alpha: 1,
              },
              0,
            )
        
        }
      },
      {
        dependencies: [
          animState,
          headerRef.current?.getBoundingClientRect().left,
          headerRef.current?.getBoundingClientRect().height,
          headerRef.current?.getBoundingClientRect().width,
          headerRef.current?.getBoundingClientRect().top,
          isFirstRender,
        ],
      },
    )

    return (
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          opacity: 0, // Start with opacity 0, will be animated by GSAP
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
        ref={circleNameDivRef}
        className={cn(
          "font-sans w-[5rem] h-[5rem] rounded flex items-center justify-center cursor-pointer select-none",
          isHovered && "scale-110",
          isClicked && "scale-125",
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        <div
          className="text-primary flex items-center justify-center relative w-[500px] h-[500px]"
          style={{ position: "relative" }}
        >
          <div
            ref={SpansDivRef}
            style={{
              transform: `rotate(${rotation}deg)`,
              willChange: "transform",
            }}
            className="absolute z-30 inset-0 flex items-center justify-center"
          >
            {spans.map(({ char, transform, key }, index) => (
              <span
                style={{
                  transform,
                  fontSize: fontSpansSize + "rem",
                  willChange: "transform",
                }}
                className={`span-${index} absolute text-accent z-20 p-1 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0,0,0,1)] pointer-events-none`}
                key={key}
              >
                {char}
              </span>
            ))}
          </div>
          <div
            className={cn(
              "w-[200px] z-20 transition-all duration-150 rounded-full h-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
              animState === "middle" ? "bg-primary" : "bg-transparent",
              isHovered && "bg-primary/20",
            )}
          />
          <div
            ref={bgArrowRef}
            className={cn(
              " w-max text-center z-30 flex justify-center items-center text-primary text-3xl shadow-lg rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
              isHovered && "shadow-xl shadow-amber-400/50",
            )}
          >
            {
              animState  === "middle"? 
              <Image
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ref={arrowRef as RefObject<any>}
              
              src={"/avatar.png"}
              alt={"avatar"}
              width={1000}
              height={1000}
              className="w-[10rem] h-[10rem] object-cover rounded-full"
              
              />
              :<span className="">


              <ArrowDownRightIcon
                ref={arrowRef}
                className={cn(
                  "rotate-[-83deg] text-amber-200 transition-all duration-300",
                  isHovered && "text-amber-100 drop-shadow-lg",
                )}
                />
            </span>
                }
          </div>
        </div>
      </div>
    )
  },
)

CircularSpin.displayName = "CircularSpin"

export default CircularSpin
