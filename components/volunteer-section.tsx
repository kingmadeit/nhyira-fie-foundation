import { Users, Plane, Laptop, Heart } from "lucide-react"

export function VolunteerSection() {
  const opportunities = [
    {
      icon: Users,
      title: "On-Site Volunteering",
      description: "Join us in Benin to work directly with students and teachers in our educational programs.",
    },
    {
      icon: Laptop,
      title: "Remote Support",
      description: "Contribute your professional skills remotely in areas like marketing, design, or administration.",
    },
    {
      icon: Plane,
      title: "Mission Trips",
      description: "Participate in organized mission trips to experience our work firsthand and support our team.",
    },
    {
      icon: Heart,
      title: "Fundraising",
      description: "Organize fundraising events in your community to support our educational initiatives.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-background rounded-3xl p-12 md:p-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Volunteer Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Share your time, skills, and passion to help empower orphaned children through education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon
              return (
                <div key={index} className="bg-muted rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{opportunity.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
