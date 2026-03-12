import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#fafafa] text-[#111111] py-24 md:py-32 border-t-2 border-[#111111]">
      <div className="container mx-auto px-6 md:px-10 flex flex-col justify-between h-full">

        {/* Massive Text */}
        <div className="flex flex-col mb-16 md:mb-32">
          <p className="text-sm md:text-base font-bold uppercase tracking-widest mb-4 opacity-50">Have a project in mind?</p>
          <h2 className="text-[12vw] md:text-[10vw] font-black tracking-tighter leading-[0.85] m-0 p-0 uppercase hover:italic transition-all duration-300">
            LET&apos;S TALK
          </h2>
          <h2 className="text-[12vw] md:text-[10vw] font-black tracking-tighter leading-[0.85] m-0 p-0 uppercase hover:italic transition-all duration-300 text-right opacity-50">
            BUSINESS.
          </h2>
        </div>

        {/* Links and Contact Details */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t-2 border-[#111111] pt-10">

          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Socials</p>
            <Link href="http://linkedin.com/in/mohamed-ahmed-34a379212/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold uppercase hover:opacity-50 transition-opacity">
              LINKEDIN
            </Link>
            <Link href="https://github.com/muhhedahmd" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold uppercase hover:opacity-50 transition-opacity">
              GITHUB
            </Link>
          </div>

          <div className="flex flex-col gap-2 md:text-right">
            <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Direct</p>
            <a href="mailto:muhhedahmd@gmail.com" className="text-xl md:text-2xl font-bold hover:opacity-50 transition-opacity">
              muhhedahmd@gmail.com
            </a>
            <a href="tel:+201000183364" className="text-xl md:text-2xl font-bold hover:opacity-50 transition-opacity">
              +20 1000 183 364
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}
