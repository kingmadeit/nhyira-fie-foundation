import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StatsSection } from "@/components/stats-section"
import { StoriesSection } from "@/components/stories-section"
import { ImpactSection } from "@/components/impact-section"

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "See the measurable impact Nhyira Foundation is making in the lives of orphaned children through education, infrastructure, and community support in Benin.",
  openGraph: {
    title: "Impact & Results | Nhyira Foundation",
    description:
      "Real stories and measurable results showing how education transforms the lives of orphaned children in Benin, West Africa.",
  },
}

export default function ImpactPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Measuring What <span className="text-tertiary">Matters</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every child reached, every classroom built, and every life transformed represents our commitment to
              creating lasting change.
            </p>
          </div>
        </section>
        <StatsSection bgColor="bg-gradient-to-br from-slate-700 to-slate-800" />
        <ImpactSection />
        <StoriesSection />
      </main>
      <Footer />
    </>
  )
}
