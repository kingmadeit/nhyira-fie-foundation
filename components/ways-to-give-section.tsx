"use client"

import { CreditCard, Calendar, Gift, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"


const givingOptions = [
  {
    icon: CreditCard,
    title: "One-Time Donation",
    description: "Make an immediate impact with a single contribution to support our programs.",
    cta: "Donate Now",
    gradient: "from-accent to-accent/90", // Yellow
    textColor: "text-mint-foreground",
  },
  {
    icon: Calendar,
    title: "Monthly Giving",
    description: "Provide sustained support through recurring monthly donations that create lasting change.",
    cta: "Become a Partner",
    gradient: "from-secondary to-secondary/90", // Green
    textColor: "text-secondary-foreground",
  },
  {
    icon: Gift,
    title: "Honor & Memorial",
    description: "Make a gift in honor or memory of a loved one to celebrate their legacy.",
    cta: "Give in Honor",
    gradient: "from-mint to-mint/90", // Mint
    textColor: "text-mint-foreground",
  },
  {
    icon: Building,
    title: "Corporate Partnership",
    description: "Partner with us to align your company's values with meaningful social impact.",
    cta: "Partner With Us",
    gradient: "from-tertiary to-tertiary/90", // Orange
    textColor: "text-tertiary-foreground",
  },
]

console.log(givingOptions);


export function WaysToGiveSection() {
  const sectionRef = useScrollAnimation()


  return (
    <section ref={sectionRef} className="py-24 px-4 scroll-fade-up">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ways to Give</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the giving option that works best for you. Every contribution makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
          {/* First card - spans 2 columns */}
          <div className="md:col-span-2 group relative overflow-hidden bg-gradient-to-br from-accent to-accent/90 rounded-3xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col justify-between min-h-[280px]">
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-3 text-accent-foreground">One-Time Donation</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Make an immediate impact with a single contribution to support our programs.
              </p>
            </div>
            <Button
              variant="secondary"
              className="rounded-full bg-accent-foreground text-white hover:bg-accent-foreground/90 relative z-10 w-fit"
            >
              Donate Now
            </Button>
          </div>

          {/* Second card - spans 2 columns */}
          <div className="md:col-span-2 group relative overflow-hidden bg-gradient-to-br from-secondary to-secondary/90 rounded-3xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col justify-between min-h-[280px]">
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white">Monthly Giving</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Provide sustained support through recurring monthly donations that create lasting change.
              </p>
            </div>
            <Button
              variant="secondary"
              className="rounded-full bg-white text-secondary hover:bg-white/90 relative z-10 w-fit"
            >
              Become a Partner
            </Button>
          </div>

          {/* Third card - spans 3 columns */}
          <div className="md:col-span-3 group relative overflow-hidden bg-gradient-to-br from-mint to-mint/90 rounded-3xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col justify-between min-h-[280px]">
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Gift className="w-8 h-8 text-mint-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-3 text-mint-foreground">Honor & Memorial</h3>
              <p className="text-mint-foreground/80 leading-relaxed mb-6">
                Make a gift in honor or memory of a loved one to celebrate their legacy.
              </p>
            </div>
            <Button
              variant="secondary"
              className="rounded-full bg-mint-foreground text-white hover:bg-mint-foreground/90 relative z-10 w-fit"
            >
              Give in Honor
            </Button>
          </div>

          {/* Fourth card - spans 1 column */}
          <div className="md:col-span-1 group relative overflow-hidden bg-gradient-to-br from-tertiary to-tertiary/90 rounded-3xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col justify-between min-h-[280px]">
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white">Corporate Partnership</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Partner with us to align your company&apos;s values with meaningful social impact.
              </p>
            </div>
            <Button
              variant="secondary"
              className="rounded-full bg-white text-tertiary hover:bg-white/90 relative z-10 w-fit"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
