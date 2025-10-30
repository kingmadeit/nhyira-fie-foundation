"use client"

import { ProgramCard } from "./program-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ProgramsSection() {
  const sectionRef = useScrollAnimation()

  const programs = [
    {
      title: "Educational Programming",
      description:
        "Home-based curricula, tutoring, mentoring, and academic support services tailored to each child's needs.",
      image: "/children-learning-with-teacher-in-home-setting-ben.jpg",
      features: ["Personalized Learning", "Qualified Tutors", "Learning Materials", "Skills Training"],
    },
    {
      title: "Infrastructure Development",
      description:
        "Building and maintaining safe learning environments and community resource centers across Abomey-Calavi.",
      image: "/modern-learning-center-building-in-africa.jpg",
      features: ["Safe Facilities", "Resource Centers", "Community Spaces", "Modern Equipment"],
    },
    {
      title: "Partnership Development",
      description:
        "Connecting international donors with local programs, fostering cultural exchange and sustainable impact.",
      image: "/diverse-group-of-people-collaborating-on-education.jpg",
      features: ["Global Network", "Local Partnerships", "Volunteer Programs", "Cultural Exchange"],
    },
  ]

  return (
    <section id="programs" ref={sectionRef} className="py-24 bg-muted/30 scroll-fade-up">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-balance">Our Programs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive initiatives designed to provide holistic educational support
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
