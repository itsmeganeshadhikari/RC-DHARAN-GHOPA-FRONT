import Link from "next/link"
import { Info, Users, UserCheck, Briefcase, Camera, Mail, Heart, Phone, Calendar,File } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MobileMenu } from "./mobile-menu"

const serviceLinks = [
  { name: "Introduction", icon: Info, href: "/introduction" },
  { name: "Committees", icon: Users, href: "/committees" },
  { name: "Members", icon: UserCheck, href: "/members" },
  { name: "Our Works", icon: Briefcase, href: "/works" },
  { name: "Events", icon: Calendar, href: "/events" },
  { name: "Media", icon: Camera, href: "/media" },
  { name: "Our Partner", icon: Users, href: "/our-partner" },
  { name: "Partner In Service", icon: UserCheck, href: "/partner-in-service" },
  { name: "Reports", icon: File, href: "/reports" },
  { name: "Contact", icon: Mail, href: "/contact" },
  { name: "Donate Us", icon: Heart, href: "/donate" },
]

export default function ServerHeader() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b" role="banner">
      <div className="container mx-auto px-10 py-5">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center space-x-3 flex-shrink-0"
            aria-label="Rotary Club of Dharan Ghopa - Home"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <Image
                src="/logo.png"
                alt="Rotary International Logo"
                width={56}
                height={56}
                className="w-full h-full"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900">Rotary Club of Dharan Ghopa</h1>
              <p className="text-sm text-blue-600">Service Above Self</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" aria-hidden="true" />
              <a
                href="tel:+9779801667788"
                className="hover:text-blue-600 font-medium text-sm transition-colors"
                aria-label="Call us at +977-9801667788"
              >
                +977-9801667788
              </a>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
              <Link href="/membership" aria-label="Join Our Club">
                Join Our Club
              </Link>
            </Button>
          </div>

          <MobileMenu />
        </div>

        <div className="sm:hidden mt-3 text-center">
          <h1 className="text-lg font-bold text-blue-900">Rotary Club of Dharan Ghopa</h1>
          <p className="text-sm text-blue-600">Service Above Self</p>
        </div>
      </div>

      <nav className="hidden md:block bg-gray-50 border-t" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto">
          <ul className="flex items-center overflow-x-auto justify-evenly whitespace-nowrap px-1 gap-1">
            {serviceLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center text-blue-800 hover:text-green-800 hover:bg-blue-50 whitespace-nowrap text-sm font-medium py-3 rounded-md transition-colors"
                >
                  <link.icon className="w-5 h-4 " aria-hidden="true" />
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="md:hidden bg-gray-50 border-t px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <a
              href="tel:+9779801667788"
              className="font-medium text-sm hover:text-blue-600 transition-colors"
              aria-label="Call us at +977-9801667788"
            >
              +977-9801667788
            </a>
          </div>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
            Join Club
          </Button>
        </div>
      </div>
    </header>
  )
}
