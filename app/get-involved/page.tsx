import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { WaysToGiveSection } from "@/components/ways-to-give-section"
import { VolunteerSection } from "@/components/volunteer-section"

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join Nhyira Foundation in empowering orphaned children through donations, volunteering, and partnerships. Every contribution makes a difference.",
  openGraph: {
    title: "Get Involved | Nhyira Foundation",
    description:
      "Make a difference in the lives of orphaned children in Benin. Donate, volunteer, or partner with us to provide quality education.",
  },
}

export default function GetInvolvedPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Join Us in Making a <span className="text-secondary">Difference</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your support transforms lives. Discover the many ways you can help empower orphaned children through
              education.
            </p>
          </div>
        </section>
        <CTASection showHeading={false} />
        <WaysToGiveSection />
        <VolunteerSection />
      </main>
      <Footer />
    </>
  )
}
