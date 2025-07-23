import type { RefObject } from "react"
import CirclureSpin from "../../_components/landing/CirclureSpin"
import SplitText from "../splitText"

const LandingScene = ({
  headerRef,
  lineRefs,
  animState,
  scrollProgress,
  isMobile,
}: {
  isMobile?: boolean
  scrollProgress: number
  headerRef: RefObject<HTMLDivElement | null>
  lineRefs: RefObject<HTMLElement[]>
  animState: "top" | "middle" | "bottom" | "top2"
}) => {
  return (
    <div className="w-full flex items-center justify-center  bg-black  py-[4rem] ">
      <div className="bg-black text-white flex justify-start items-center mt-[4rem]   container">

        <div className="relative z-100 space-y-1 w-full">
          <p
            ref={(el) => {
              if (el) lineRefs.current[0] = el
            }}
            style={{
              textShadow: "2px 3px 0px #fefeef ",
              display: "inline-block",
            }}
            className="text-4xl font-bold text-amber-400"
          >
            Full Stack Developer
          </p>

          <SplitText
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          animState={animState as any}
            text="Hey there! I&apos;m Mohamed Ahmed."

            className="text-2xl font-semibold text-center text-amber-400"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"


          />


          <br/>
       
          <SplitText
          animState={animState as  "top" | "middle" | "bottom"}
            text={` I'm a full stack developer with 2 years of experience creating dynamic and responsive web applications. 
            <br/>   I enjoy writing clean code, designing intuitive user experiences, and bringing ideas to life through technology.
             <br/> Problem-solving is at the heart of what I do—and I’m always excited to build solutions that make a real impact.`}
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"


          />
       

          <p className="text-lg max-w-xl"> </p>
        </div>

        <CirclureSpin isMobile={isMobile} headerRef={headerRef} scrollProgress={scrollProgress} animState={animState} />
      </div>
    </div>
  )
}

export default LandingScene

// ref={(el) => {
//   if (el) lineRefs.current[3] = el
// }}