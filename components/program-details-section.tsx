import { BookOpen, Building2, DollarSign, Users, ClipboardCheck } from "lucide-react"

export function ProgramDetailsSection() {
  const activities = [
    {
      icon: BookOpen,
      title: "Educational Programming",
      description:
        "Comprehensive curriculum development, teacher training, and learning materials tailored to home-based education environments.",
      features: ["Curriculum Design", "Teacher Training", "Learning Materials", "Progress Monitoring"],
    },
    {
      icon: Building2,
      title: "Infrastructure Development",
      description:
        "Building and maintaining safe, conducive learning spaces that support effective education delivery.",
      features: ["Classroom Construction", "Learning Centers", "Technology Integration", "Facility Maintenance"],
    },
    {
      icon: DollarSign,
      title: "Resource Mobilization",
      description: "Strategic fundraising and resource allocation to ensure sustainable program operations and growth.",
      features: ["Fundraising Campaigns", "Grant Writing", "Donor Relations", "Financial Planning"],
    },
    {
      icon: Users,
      title: "Strategic Partnerships",
      description: "Collaborating with local organizations, schools, and community leaders to amplify our impact.",
      features: ["Community Engagement", "NGO Partnerships", "Government Relations", "Volunteer Programs"],
    },
    {
      icon: ClipboardCheck,
      title: "Program Management",
      description: "Rigorous monitoring, evaluation, and continuous improvement of all educational initiatives.",
      features: ["Impact Assessment", "Quality Assurance", "Data Analytics", "Reporting"],
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach ensures sustainable impact through strategic planning and execution.
          </p>
        </div>

        <div className="space-y-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div key={index} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{activity.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {activity.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
