"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Heart, Users, Mail, Shield, CheckCircle, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface CTASectionProps {
  taxExemptBgColor?: string
  showHeading?: boolean
}

export function CTASection({
  taxExemptBgColor = "bg-gradient-to-br from-primary to-primary/90",
  showHeading = true,
}: CTASectionProps) {
  const sectionRef = useScrollAnimation()

  const actions = [
    {
      icon: Heart,
      title: "Donate",
      description: "Your contribution directly funds educational programs and materials for orphaned children.",
      action: "Donate Now",
      bgGradient: "from-accent via-accent/90 to-accent/80", // Yellow - optimism
      accentColor: "accent",
      textColor: "text-white", // Dark text for yellow background
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Share your skills and time to make a lasting impact on children's lives and futures.",
      action: "Get Involved",
      bgGradient: "from-primary via-primary/90 to-primary/80", // Navy - trust
      accentColor: "primary",
      textColor: "text-white",
    },
    {
      icon: Mail,
      title: "Partner",
      description: "Join us as an organizational partner to amplify our collective impact across communities.",
      action: "Connect",
      bgGradient: "from-secondary via-secondary/90 to-secondary/80", // Green - growth
      accentColor: "secondary",
      textColor: "text-white",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background via-muted/20 to-background scroll-fade-up"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {showHeading && (
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Join Us in <em className="text-secondary">Making a Difference</em>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              There are many ways to support our mission and transform lives through education
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {actions.map((action, index) => (
            <ActionCard key={index} action={action} index={index} />
          ))}
        </div>

        <div className="flex justify-center">
          <Card className="relative overflow-hidden max-w-4xl w-full border-2 border-primary/20 shadow-2xl">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-tertiary/20" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24" />

            <div className="relative p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Icon section */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                      <Shield className="text-white" size={40} strokeWidth={2} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-secondary to-secondary/90 rounded-full flex items-center justify-center shadow-md">
                      <CheckCircle className="text-white" size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <h3 className="font-bold text-2xl md:text-3xl text-foreground">
                      501(c)(3) Tax-Exempt Organization
                    </h3>
                    <Award className="text-primary hidden md:block" size={24} />
                  </div>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                    All donations are tax-deductible. We maintain full transparency and accountability in our
                    operations.
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                      <CheckCircle className="text-primary" size={16} />
                      <span className="text-sm font-medium text-foreground">Tax-Deductible</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                      <CheckCircle className="text-secondary" size={16} />
                      <span className="text-sm font-medium text-foreground">Transparent</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-tertiary/20 rounded-full">
                      <CheckCircle className="text-tertiary-foreground" size={16} />
                      <span className="text-sm font-medium text-foreground">Accountable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

function ActionCard({ action, index }: { action: any; index: number }) {
  const cardRef = useScrollAnimation()

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl h-[420px] scroll-scale-in animation-delay-${(index + 2) * 100}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${action.bgGradient}`}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black rounded-full blur-3xl transform -translate-x-24 translate-y-24" />
        </div>
      </div>

      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        {/* Icon at top */}
        <div className="flex justify-end">
          <div
            className={`w-16 h-16 ${action.textColor === "text-white" ? "bg-white/20" : "bg-black/10"} backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}
          >
            <action.icon className={action.textColor} size={32} strokeWidth={2} />
          </div>
        </div>

        {/* Content at bottom */}
        <div>
          <h3 className={`font-bold text-3xl mb-4 ${action.textColor}`}>{action.title}</h3>
          <p
            className={`${action.textColor === "text-white" ? "text-white/90" : "text-gray-800"} mb-6 leading-relaxed text-base`}
          >
            {action.description}
          </p>

          <Button
            className={`rounded-full ${action.textColor === "text-white" ? "bg-white/20 text-white hover:bg-white hover:text-gray-900 border-white/30 hover:border-white" : "bg-black/10 text-gray-900 hover:bg-black hover:text-white border-black/20 hover:border-black"} backdrop-blur-md transition-all duration-300 border px-6 py-6 font-semibold text-base group/btn`}
          >
            {action.action}
            <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={18} />
          </Button>
        </div>
      </div>

      <div
        className={`absolute inset-0 ${action.textColor === "text-white" ? "bg-white/0 group-hover:bg-white/5" : "bg-black/0 group-hover:bg-black/5"} transition-all duration-500`}
      />
    </div>
  )
}
