import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/african-children-studying-together-in-classroom-be.jpg"
          alt="Children learning together in Benin"
          className="w-full h-full object-cover scale-105"
          width={300}
          height={500}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/50 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 px-4 lg:px-8 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-md border border-background/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-background">Empowering Children Since 2020</span>
          </div>

          <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-background mb-8 text-balance leading-[1.1] tracking-tight animate-fade-in-up animation-delay-200">
            Every child deserves the gift of education
          </h1>
          <p className="text-xl md:text-2xl text-background/95 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-400">
            Nhyira Foundation empowers orphaned children in Benin through accessible home-based education, building
            successful futures one child at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              className="rounded-full text-lg px-10 py-7 bg-tertiary hover:bg-tertiary/90 text-white shadow-2xl shadow-tertiary/30 hover:shadow-tertiary/50 transition-all hover:scale-105"
            >
              Make a Difference
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-lg px-10 py-7 bg-background/15 backdrop-blur-md border-2 border-background/30 text-background hover:bg-background/25 hover:border-background/40 transition-all"
            >
              <Play className="mr-2" size={20} fill="currentColor" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-background/70 font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-background/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-background/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
