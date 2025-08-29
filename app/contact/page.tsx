import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export const metadata = {
  title: "Contact Us - Rotary Club of Dharan Ghopa",
  description: "Get in touch with the Rotary Club of Dharan Ghopa. We'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-10 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our projects, membership, or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-green-50">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact-first-name">First Name</Label>
                  <Input id="contact-first-name" placeholder="John" className="h-12" />
                </div>
                <div>
                  <Label htmlFor="contact-last-name">Last Name</Label>
                  <Input id="contact-last-name" placeholder="Doe" className="h-12" />
                </div>
              </div>

              <div>
                <Label htmlFor="contact-email">Email Address</Label>
                <Input id="contact-email" type="email" placeholder="john@example.com" className="h-12" />
              </div>

              <div>
                <Label htmlFor="contact-phone">Phone Number (Optional)</Label>
                <Input id="contact-phone" type="tel" placeholder="+977 98XXXXXXXX" className="h-12" />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this about?" className="h-12" />
              </div>

              <div>
                <Label htmlFor="contact-message">Message</Label>
                <Textarea id="contact-message" placeholder="Your message..." className="min-h-[120px]" />
              </div>

              <Button className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-lg font-semibold">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">
                      Dharan Sub-Metropolitan City
                      <br />
                      Sunsari District, Province 1<br />
                      Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+977 25-520XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@rotarydharanghopa.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Meeting Times</h3>
                    <p className="text-gray-600">
                      Every Friday at 7:00 PM
                      <br />
                      Hotel Annapurna, Dharan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Visit Us</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Join us for our weekly meetings every Friday evening. Visitors and prospective members are always
                  welcome!
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
