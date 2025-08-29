import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Organization Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Image
                  src="/rotary-international-logo-yellow-wheel.png"
                  alt="Rotary Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Rotary Club Dharan Ghopa</h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Service Above Self - Creating positive change in our community and around the world.
            </p>

            <div className="flex space-x-2">
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 hover:bg-blue-400 hover:text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 hover:bg-pink-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-blue-900">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/members" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Our Members
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-blue-900">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">Dharan Sub-Metropolitan City</p>
                  <p className="text-gray-600">Sunsari, Nepal</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+9779801667788" className="text-gray-600 hover:text-blue-600 transition-colors">
                  +977-9801667788
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <a
                  href="mailto:info@rotarydharanghopa.org"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  info@rotarydharanghopa.org
                </a>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium w-full mt-3">Donate Now</Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
            <p className="text-gray-500">© 2024 Rotary Club of Dharan Ghopa. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-gray-500 hover:text-blue-600 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-blue-600 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
