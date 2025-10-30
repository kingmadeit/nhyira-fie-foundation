"use client"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from 'next/image'

export function ImpactSection() {
  const sectionRef = useScrollAnimation<HTMLDivElement>()
  const imageRef = useScrollAnimation<HTMLImageElement>()

  return (
    <section id="impact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={sectionRef} className="scroll-slide-left">
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-balance">
              Transforming Lives Through Education
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              In Abomey-Calavi, Benin, countless orphaned children face barriers to education. Our home-based learning
              approach removes these obstacles, bringing quality education directly to the children who need it most.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every donation, every volunteer hour, and every partnership creates ripples of change that extend far
              beyond the classroom. We&apos;re not just teaching children—we&apos;re building a foundation for thriving
              communities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="font-serif font-bold text-3xl text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Transparent Fund Usage</div>
              </Card>
              <Card className="p-4 bg-secondary/5 border-secondary/20">
                <div className="font-serif font-bold text-3xl text-secondary mb-1">$50</div>
                <div className="text-sm text-muted-foreground">Educates One Child/Month</div>
              </Card>
            </div>
          </div>
          <div ref={imageRef} className="relative scroll-slide-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/happy-african-children-in-classroom-celebrating-le.jpg"
                alt="Children celebrating"
                className="w-full h-full object-cover"
                width={300}
                height={500}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
