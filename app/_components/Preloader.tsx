"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function Preloader({ children }: { children: React.ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const loaderRef = useRef<HTMLDivElement>(null)
    const nameContainerRef = useRef<HTMLDivElement>(null)
    const nameRef = useRef<HTMLHeadingElement>(null)
    const loadingTextRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Scroll lock while loading
        document.body.style.overflow = "hidden"
        window.scrollTo(0, 0)

        const tl = gsap.timeline({
            onComplete: () => {
                setIsLoaded(true)
                document.body.style.overflow = ""
            },
        })

        // Animate the "Loading..." text out first
        tl.to(loadingTextRef.current, {
            opacity: 0,
            duration: 0.4,
            delay: 1.0, // Hold in the center for a bit
            ease: "power2.inOut",
        })

        // Calculate move to top-left (Header position)
        const isMd = window.innerWidth >= 768
        const targetX = isMd ? 40 : 24 // p-10 (2.5rem=40px) or p-6 (1.5rem=24px)
        const targetY = isMd ? 40 : 24
        const targetScale = 0.4166667 // text-xl/text-5xl or text-3xl/text-7xl

        if (nameRef.current) {
            const rect = nameRef.current.getBoundingClientRect()
            const moveX = targetX - rect.left
            const moveY = targetY - rect.top

            tl.to(
                nameRef.current,
                {
                    x: moveX,
                    y: moveY,
                    scale: targetScale,
                    transformOrigin: "top left",
                    duration: 1.2,
                    ease: "power3.inOut",
                },
                "-=0.2"
            )
        }

        // Fade out background overlay, blending cleanly with the underlying layout
        tl.to(
            loaderRef.current,
            {
                opacity: 0,
                duration: 0.6,
                ease: "power2.inOut",
            },
            "-=0.4"
        )

        return () => {
            tl.kill()
            document.body.style.overflow = ""
        }
    }, [])

    return (
        <>
            <div
                ref={loaderRef}
                className={`fixed inset-0 z-[9999] bg-[#fafafa] flex items-center justify-center pointer-events-none transition-opacity ${isLoaded ? "hidden" : ""
                    }`}
            >
                <div ref={nameContainerRef} className="relative flex flex-col items-center justify-center">
                    <h1
                        ref={nameRef}
                        className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] text-[#111111] m-0 p-0"
                    >
                        MOHAMED<br />AHMED
                    </h1>
                    <div
                        ref={loadingTextRef}
                        className="absolute -bottom-8 md:-bottom-12 text-[0.65rem] md:text-xs font-bold tracking-widest uppercase opacity-40 text-[#111111]"
                    >
                        Initializing...
                    </div>
                </div>
            </div>

            {/* Hide scrollbar but keep component mounted so GSAP matches underlying positions */}
            <div className={`w-full h-full ${isLoaded ? "" : "h-screen overflow-hidden"}`}>
                {children}
            </div>
        </>
    )
}
