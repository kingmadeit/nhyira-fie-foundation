"use client"

import { BookOpen, Heart, Users, Target } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function MissionSection() {
  const sectionRef = useScrollAnimation()

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach our work with empathy and deep care for the children we serve.",
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "We believe education is the foundation for breaking cycles of poverty.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work collaboratively with local leaders, families, and international partners.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in our educational programs and operations.",
    },
  ]

  return (
    <section id="mission" ref={sectionRef} className="py-24 px-4 scroll-fade-up">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 md:p-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-balance">Our Mission & Vision</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To empower orphaned children in Benin through accessible home-based education, providing them with the
              knowledge, skills, and support necessary to build successful futures and become thriving members of their
              communities.
            </p>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <ValueCard key={index} icon={Icon} title={value.title} description={value.description} index={index} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function ValueCard({
  icon: Icon,
  title,
  description,
  index,
}: { icon: Icon; title: string; description: string; index: number }) {
  const cardRef = useScrollAnimation()

  return (
    <div
      ref={cardRef}
      className={`scroll-scale-in animation-delay-${(index + 2) * 100} bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1`}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
    </div>
  )
}
