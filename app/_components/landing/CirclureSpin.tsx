"use client"
import React, { useEffect, useRef } from 'react'

const CirclureSpin = () => {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return
    const text = textRef.current
    const chars = text.innerText.split("")
    text.innerText = ""

    // Map over characters and place them in a circle
    chars.forEach((char, i) => {
      const span = document.createElement("span")
      span.innerText = char
      span.style.transform = `rotate(${i * (360 / chars.length)}deg)`
      span.style.position = 'absolute'
      span.style.left = '50%'
      span.style.top = '0'
      span.style.transformOrigin = '0 100px' // Assuming 200px container, so radius is 100px
      span.style.height = '100px'
      span.style.display = 'block'
      text.appendChild(span)
    })
  }, [])

  return (
    <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex items-center justify-center">
      {/* The circular spinning text container */}
      <div className="absolute w-[200px] h-[200px] flex items-center justify-center pointer-events-none">
        <div
          ref={textRef}
          className="w-full h-full relative animate-spin text-sm font-bold uppercase tracking-widest text-[#111111]"
          style={{ animationDuration: '15s', animationTimingFunction: 'linear' }}
        >
          AVAILABLE FOR WORK • 2026 • AVAILABLE FOR WORK • 2026 •
        </div>
      </div>

      {/* Static Center Arrow inside a circle */}
      <div className="absolute flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#111111] text-[#111111] bg-transparent pointer-events-auto">
        <svg
          className="w-5 h-5 transform rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </div>

      {/* Static Center Arrow */}


    </div>
  )
}

export default CirclureSpin
