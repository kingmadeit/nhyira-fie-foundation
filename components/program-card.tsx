"use client"

import { Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from 'next/image'

interface ProgramCardProps {
  title: string
  description: string
  image: string
  features: string[]
  index: number
}

export function ProgramCard({ title, description, image, features, index }: ProgramCardProps) {
  const cardRef = useScrollAnimation()

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl scroll-fade-up animation-delay-${(index + 1) * 200}`}
    >
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          width={300}
          height={500}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="font-bold text-3xl mb-3 text-white">{title}</h3>
          <p className="text-white/90 mb-6 leading-relaxed">{description}</p>

          {/* Features with modern styling */}
          <div className="space-y-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit"
              >
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-white" size={14} />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
