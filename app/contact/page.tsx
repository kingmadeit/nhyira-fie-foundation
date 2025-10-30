import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Nhyira Foundation. We're here to answer your questions about our programs, partnerships, and how you can help orphaned children in Benin.",
  openGraph: {
    title: "Contact Nhyira Foundation",
    description:
      "Reach out to learn more about our educational programs for orphaned children in Benin or to discuss partnership opportunities.",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Let&apos;s <span className="text-primary">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our work or want to get involved? We&apos;d love to hear from you.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
