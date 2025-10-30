import { Heart, Shield, BookOpen, Sparkles, Handshake, Award } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding in everything we do.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparency and accountability guide our operations.",
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Quality learning is the foundation of empowerment.",
    },
    {
      icon: Sparkles,
      title: "Empowerment",
      description: "We equip children with tools to shape their own futures.",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Collaboration amplifies our impact in communities.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in all our programs.",
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 md:p-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide our work and define who we are as an organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
