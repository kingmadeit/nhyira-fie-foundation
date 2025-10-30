"use client"

import { StatCard } from "./stat-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface StatsSectionProps {
  bgColor?: string
}

export function StatsSection({ bgColor = "bg-gradient-to-br from-secondary to-secondary/90" }: StatsSectionProps) {
  const sectionRef = useScrollAnimation()

  const stats = [
    { value: "500+", label: "Children Served", description: "Orphaned children receiving education" },
    { value: "15", label: "Learning Centers", description: "Home-based facilities in Abomey-Calavi" },
    { value: "98%", label: "Success Rate", description: "Students advancing to next grade level" },
    { value: "25+", label: "Educators", description: "Dedicated teachers and mentors" },
  ]

  return (
    <section ref={sectionRef} className={`py-24 ${bgColor} text-white scroll-fade-up`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-4 text-balance">Our Impact in Numbers</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Transparent results that demonstrate the power of education and community support
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
