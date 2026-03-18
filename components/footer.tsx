import Link from "next/link"
import Image from "next/image"
import { Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
  ],
  services: [
    { name: "Software Development", href: "/services#software" },
    { name: "Web Applications", href: "/services#web" },
    { name: "Mobile Applications", href: "/services#mobile" },
    { name: "Cloud & DevOps", href: "/services#cloud" },
    { name: "AI & Automation", href: "/services#ai" },
    { name: "IT Consulting", href: "/services#consulting" },
  ],
  resources: [
    { name: "Projects", href: "/projects" },
    { name: "Case Studies", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const social = [
  { name: "LinkedIn", href: "https://linkedin.com/company/quantixlab", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/quantixlab", icon: Github },
  { name: "Email", href: "mailto:quantixlabs123@gmail.com", icon: Mail },
]

export function Footer() {
  return (
    <>
      <footer className="border-t border-white/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 group">
                <img 
                  src="/Quantix Labs.svg" 
                  alt="Quantix Labs Logo" 
                  className="shrink-0 h-10 w-10 transition-transform group-hover:scale-110"
                />
                
                <span className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Quantix<span className="font-light">Labs</span>
                </span>
              </Link>
              
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                TURNING IDEAS INTO INTELLIGENT SOLUTIONS. 
                Engineering digital innovation for modern businesses.
              </p>

              <div className="mt-6 flex gap-4">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-400 transition-all hover:bg-[#00AEEF] hover:text-white hover:border-[#00AEEF]"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Navigation Columns */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-zinc-400 transition-colors hover:text-[#00AEEF]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
              <ul className="mt-4 space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-zinc-400 transition-colors hover:text-[#00AEEF]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Section */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#00AEEF] mt-0.5 shrink-0" />
                  <span className="text-sm text-zinc-400">
                    Madurai TamilNadu, India<br />
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#00AEEF] shrink-0" />
                  <a href="tel:+918122575337" className="text-sm text-zinc-400 hover:text-[#00AEEF]">
                    +91 8122575337
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#00AEEF] shrink-0" />
                  <a href="mailto:info@quantixlab.com" className="text-sm text-zinc-400 hover:text-[#00AEEF]">
                    infoquantixlab@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} Quantix Labs. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-sm text-zinc-500 hover:text-[#00AEEF]">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-zinc-500 hover:text-[#00AEEF]">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}