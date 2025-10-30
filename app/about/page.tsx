import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ImpactSection } from "@/components/impact-section"
import { ValuesSection } from "@/components/values-section"
import { TeamSection } from "@/components/team-section"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nhyira Foundation's mission, values, and team dedicated to empowering orphaned children through education in Benin, West Africa.",
  openGraph: {
    title: "About Nhyira Foundation",
    description:
      "Discover our mission to provide accessible home-based education to orphaned children in Benin through compassion, integrity, and excellence.",
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Building Futures Through <span className="text-secondary">Education</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nhyira Foundation is dedicated to empowering orphaned children in Benin with the tools they need to
              succeed through accessible, quality education.
            </p>
          </div>
        </section>
        <ImpactSection />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}
