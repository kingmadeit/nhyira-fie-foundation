"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useRef, useState } from "react"

interface StatCardProps {
  value: string
  label: string
  description: string
  index: number
}

export function StatCard({ value, label, description, index }: StatCardProps) {
  const cardRef = useScrollAnimation()
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const elementRef = useRef<HTMLDivElement>(null)

  const numericValue = Number.parseInt(value.replace(/[^0-9]/g, "")) || 0
  const suffix = value.replace(/[0-9]/g, "")

  useEffect(() => {
    if (!elementRef.current) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)

            const duration = 2000 // 2 seconds
            const steps = 60
            const increment = numericValue / steps
            let currentStep = 0

            const timer = setInterval(() => {
              currentStep++
              if (currentStep <= steps) {
                setCount(Math.floor(increment * currentStep))
              } else {
                setCount(numericValue)
                clearInterval(timer)
              }
            }, duration / steps)

            return () => clearInterval(timer)
          }
        })
      },
      { threshold: 0.3 },
    )

    observerRef.current.observe(elementRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [numericValue, hasAnimated])

  return (
    <div
      ref={(node) => {
        cardRef.current = node
        elementRef.current = node
      }}
      className={`text-center scroll-scale-in animation-delay-${(index + 1) * 100}`}
    >
      <div className="mb-4">
        <div className="font-bold text-5xl md:text-6xl mb-2">{hasAnimated ? `${count}${suffix}` : value}</div>
        <div className="text-xl font-semibold">{label}</div>
      </div>
      <p className="text-sm text-white/70 leading-relaxed">{description}</p>
    </div>
  )
}
