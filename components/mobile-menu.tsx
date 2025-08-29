"use client"

import { useHeaderStore } from "@/lib/header-store"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Droplet, Ambulance, Hospital, Book, FlaskConical, Stethoscope, Star } from "lucide-react"

const serviceLinks = [
  { name: "Introduction", icon: Droplet, href: "/introduction" },
  { name: "Committees", icon: Ambulance, href: "/committees" },
  { name: "Members", icon: Hospital, href: "/members" },
  { name: "Our Works", icon: Book, href: "/our-works" },
  { name: "Media", icon: FlaskConical, href: "/media" },
  { name: "Contact", icon: Stethoscope, href: "/contact" },
  { name: "Donate Us", icon: Star, href: "/donate-us" },
]

export function MobileMenu() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useHeaderStore()

  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={toggleMobileMenu}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-blue-100 transition-colors"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6 text-blue-700" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 bg-gradient-to-b from-blue-50 to-white">
        <SheetHeader>
          <SheetTitle className="text-left text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2 mt-8">
          {serviceLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className="flex items-center gap-4 text-gray-700 hover:text-blue-600 hover:bg-white/80 py-3 px-4 rounded-xl transition-all duration-200 group shadow-sm hover:shadow-md"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <link.icon className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-semibold">{link.name}</span>
            </Link>
          ))}
          <div className="mt-8 pt-6 border-t border-blue-200">
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg font-semibold"
              size="lg"
            >
              Join Our Club
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
