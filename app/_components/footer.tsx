

export default function Footer() {
  // const footerRef = useRef<HTMLElement>(null)

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       footerRef.current,
  //       { opacity: 0, y: 50 },
  //       { 
  //         opacity: 1, 
  //         y: 0, 
  //         duration: 1, 
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: footerRef.current,
  //           start: "top 90%"
  //         }
  //       }
  //     )
  //   }, footerRef)

  //   return () => ctx.revert()
  // }, [])

  return (
    <footer 
      // ref={footerRef}
      className="relative   border-t-2 border-orange-500/30"
    >
      {/* Orange glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10"></div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <span className="text-orange-400">📧</span>
                <a href="mailto:muhhedahmd@gmail.com" className="hover:text-orange-400 transition-colors">
                  muhhedahmd@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-orange-400">📱</span>
                <a href="tel:+201000183364" className="hover:text-orange-400 transition-colors">
                  +201000183364
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-orange-400">📍</span>
                Cairo, Egypt
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a href="#projects" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Skills
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-ahmed-34a379212" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-orange-400 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/muhhedahmd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-orange-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              About Me
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Passionate Frontend Developer specializing in building interactive, efficient user experiences 
              with clean and modern code. Currently expanding into full-stack development with Express.js and PostgreSQL.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/mohamed-ahmed-34a379212" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:scale-110 transition-transform duration-200"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/muhhedahmd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg hover:scale-110 transition-transform duration-200"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-500/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Mohamed Ahmed Elsaid. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with Next.js, GSAP & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
    </footer>
  )
}
