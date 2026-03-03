"use client"

import Link from "next/link"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-6 md:p-10 z-[100] mix-blend-difference text-[#fafafa] flex justify-between items-start pointer-events-none">

      {/* Brand / Logo Area */}
      <div className="pointer-events-auto">
        <h1 className="text-xl md:text-3xl font-black tracking-tighter uppercase leading-[0.85]">
          MOHAMED<br />AHMED
        </h1>
        <p className="text-[0.65rem] md:text-xs font-semibold tracking-widest uppercase mt-2 opacity-80">Full Stack Engineer</p>

      </div>

      {/* Navigation Links (Top Right or next to branding) */}
      <nav className="pointer-events-auto flex flex-col items-end space-y-2 mt-1 md:mt-2">
        {[
          { name: "Skills", href: "#skills" },
          { name: "Experience", href: "#experience" },
          { name: "Projects", href: "#projects" },
          { name: "Contact", href: "#contact" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm md:text-base font-bold uppercase tracking-widest hover:opacity-50 transition-opacity duration-300"
          >
            {item.name}
          </Link>
        ))}
      </nav>

    </header>
  )
}

export default Header
