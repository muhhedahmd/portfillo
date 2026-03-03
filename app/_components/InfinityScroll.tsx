"use client"

import { memo } from "react"

const SkillsSection = memo(() => {
  const skillsData = [
    {
      category: "Front-End",
      skills: [
        "HTML", "CSS", "SCSS", "JavaScript", "TypeScript",
        "React", "Next.js", "Tailwind", "Shadcn", "Responsive Design",
        "SEO", "Accessibility Guidelines", "Liquid (Shopify Templates)"
      ]
    },
    {
      category: "Back-End / Full-Stack",
      skills: [
        "Next.js API Routes", "Express.js", "PostgreSQL", "Prisma ORM",
        "REST API", "Authentication (NextAuth, Clerk)", "MongoDB", "Mongoose"
      ]
    },
    {
      category: "State Management & Tools",
      skills: [
        "Redux", "Redux Toolkit (RTK Query)", "Context API",
        "Git", "GitHub", "Postman", "Cloudinary", "Convex", "React Hook Form"
      ]
    },
    {
      category: "Concepts",
      skills: [
        "Data Structures", "Algorithms", "Coding Standards", "OOP",
        "Problem-Solving", "System Design", "SOLID Principles"
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#fafafa] w-full border-t-2 border-[#111111]">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="mb-16 md:mb-24">
          <h2 className="text-[10vw] md:text-[6vw] font-black tracking-tighter leading-[0.85] text-[#111111] uppercase m-0 p-0">
            TECHNICAL<br />SKILLS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {skillsData.map((group, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#111111] border-b-4 border-[#111111] pb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={skill + i}
                    className="px-4 py-2 bg-transparent border-2 border-[#111111] text-[#111111] text-sm md:text-base font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-[#fafafa] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

SkillsSection.displayName = "SkillsSection"

export default SkillsSection
