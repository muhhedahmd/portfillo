import gsap from "gsap"
// import { Suspense } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
// import dynamic from "next/dynamic"
// Lazy load client components to prevent hydration issues
import ClientWrapper from "../_components/ClientWraper"


gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  return (
    <>
      {/* SEO Content - Server Rendered */}


      {/* Client-only interactive components */}
              <ClientWrapper/>

    </>
  )
}
