import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nhyirafoundation.org"),
  title: {
    default: "Nhyira Foundation | Empowering Orphaned Children Through Education in Benin",
    template: "%s | Nhyira Foundation",
  },
  description:
    "Nhyira Foundation provides accessible home-based education to orphaned children in Benin, West Africa. Join us in building successful futures through quality education and compassionate support.",
  keywords: [
    "orphan education",
    "Benin charity",
    "West Africa education",
    "nonprofit organization",
    "child education",
    "Nhyira Foundation",
    "educational programs",
    "Abomey-Calavi",
    "501c3 nonprofit",
  ],
  authors: [{ name: "Nhyira Foundation" }],
  creator: "Nhyira Foundation",
  publisher: "Nhyira Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nhyirafoundation.org",
    siteName: "Nhyira Foundation",
    title: "Nhyira Foundation | Empowering Orphaned Children Through Education",
    description:
      "Providing accessible home-based education to orphaned children in Benin, West Africa. Join us in building successful futures through quality education.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nhyira Foundation - Empowering Children Through Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhyira Foundation | Empowering Orphaned Children Through Education",
    description:
      "Providing accessible home-based education to orphaned children in Benin, West Africa. Join us in making a difference.",
    images: ["/og-image.jpg"],
    creator: "@nhyirafoundation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Nhyira Foundation",
              alternateName: "Nhyira Foundation for Orphaned Children",
              url: "https://nhyirafoundation.org",
              logo: "https://nhyirafoundation.org/logo.png",
              description:
                "Nhyira Foundation provides accessible home-based education to orphaned children in Benin, West Africa.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New Jersey",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "Place",
                name: "Abomey-Calavi, Benin",
              },
              foundingDate: "2020",
              nonprofitStatus: "501(c)(3)",
              sameAs: [
                "https://facebook.com/nhyirafoundation",
                "https://twitter.com/nhyirafoundation",
                "https://instagram.com/nhyirafoundation",
                "https://linkedin.com/company/nhyirafoundation",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "info@nhyirafoundation.org",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
