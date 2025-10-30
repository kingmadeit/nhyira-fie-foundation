import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProgramsSection } from "@/components/programs-section"
import { ProgramDetailsSection } from "@/components/program-details-section"

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Explore Nhyira Foundation's educational programs, infrastructure development, and partnerships that empower orphaned children in Benin.",
  openGraph: {
    title: "Educational Programs | Nhyira Foundation",
    description:
      "Comprehensive educational programming, infrastructure development, and community partnerships serving orphaned children in Abomey-Calavi, Benin.",
  },
}

export default function ProgramsPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Transformative <span className="text-accent">Educational</span> Programs
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our comprehensive approach combines quality education, infrastructure development, and community
              partnerships to create lasting impact.
            </p>
          </div>
        </section>
        <ProgramsSection />
        <ProgramDetailsSection />
      </main>
      <Footer />
    </>
  )
}
