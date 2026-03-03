import Preloader from "../_components/Preloader"
import SmoothScrolling from "../_components/lenisScroll/lenis"
import Header from "../_components/landing/Header/Header"
import LandingScene from "../_components/landing/LandingScene"
import InfinityScroll from "../_components/InfinityScroll"
import ExperienceSection from "../_components/ExperienceSection"
import EducationAwards from "../_components/EducationAwards"
import ProjectsSection from "../_components/ProjectsSection"
import Footer from "../_components/footer"

export default function Home() {
  return (
    <>
      <Preloader>
        <SmoothScrolling ref={null}>
          <Header />
          <main className="w-full min-h-screen relative overflow-x-hidden">
            <LandingScene />
            <InfinityScroll />
            <ExperienceSection />
            <EducationAwards />
            <ProjectsSection />
            <Footer />
          </main>
        </SmoothScrolling>
      </Preloader>
    </>
  )
}
