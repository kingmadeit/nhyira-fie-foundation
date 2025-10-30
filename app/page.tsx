import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { MissionSection } from "@/components/mission-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <MissionSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
