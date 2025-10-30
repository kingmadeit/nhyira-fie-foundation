import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const footerLinks = {
    About: [
      { label: "Our Mission", href: "#mission" },
      { label: "Our Team", href: "#about" },
      { label: "Annual Reports", href: "#" },
      { label: "Financials", href: "#" },
    ],
    "Get Involved": [
      { label: "Donate", href: "#" },
      { label: "Volunteer", href: "#" },
      { label: "Partner With Us", href: "#" },
      { label: "Fundraise", href: "#" },
    ],
    Resources: [
      { label: "Impact Stories", href: "#" },
      { label: "News & Updates", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-11 h-11 bg-background rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                <span className="text-foreground font-serif font-bold text-xl">N</span>
              </div>
              <span className="font-serif font-bold text-xl">Nhyira Foundation</span>
            </Link>
            <p className="text-background/80 mb-6 leading-relaxed text-sm">
              Empowering orphaned children in Benin through accessible home-based education, building successful futures
              one child at a time.
            </p>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-background/60 flex-shrink-0" />
                <span className="text-background/80">New Jersey, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-background/60 flex-shrink-0" />
                <a
                  href="mailto:info@nhyirafoundation.org"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  info@nhyirafoundation.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-background/60 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-background/80 hover:text-background transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-base mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Nhyira Foundation. All rights reserved. 501(c)(3) Tax-Exempt Organization.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
