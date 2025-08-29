import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Heart, CreditCard, Shield, Users } from "lucide-react"

export const metadata = {
  title: "Donate - Rotary Club of Dharan Ghopa",
  description:
    "Support our humanitarian projects and community service initiatives. Every donation makes a difference.",
}

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-10 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Make a Difference
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous donation helps us continue our humanitarian work and community service projects across Nepal
            and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CreditCard className="w-6 h-6 text-blue-600" />
                Make a Donation
              </CardTitle>
              <CardDescription>Choose your donation amount and help us make a positive impact</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[25, 50, 100, 250].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="h-12 text-lg font-semibold hover:bg-blue-50 bg-transparent"
                  >
                    ${amount}
                  </Button>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="custom-amount">Custom Amount ($)</Label>
                  <Input id="custom-amount" type="number" placeholder="Enter amount" className="h-12" />
                </div>

                <div>
                  <Label htmlFor="donor-name">Full Name</Label>
                  <Input id="donor-name" placeholder="Your full name" className="h-12" />
                </div>

                <div>
                  <Label htmlFor="donor-email">Email Address</Label>
                  <Input id="donor-email" type="email" placeholder="your@email.com" className="h-12" />
                </div>

                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea id="message" placeholder="Leave a message..." className="min-h-[100px]" />
                </div>
              </div>

              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg font-semibold">
                <Shield className="w-5 h-5 mr-2" />
                Donate Securely
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  Impact of Your Donation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">$25 - Basic Support</p>
                    <p className="text-gray-600 text-sm">Provides school supplies for 5 children</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">$50 - Community Aid</p>
                    <p className="text-gray-600 text-sm">Funds clean water access for a family</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">$100 - Project Support</p>
                    <p className="text-gray-600 text-sm">Sponsors a community health workshop</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">$250 - Major Impact</p>
                    <p className="text-gray-600 text-sm">Funds a complete literacy program</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Why Donate to Rotary?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 100% of donations go directly to projects</li>
                  <li>• Tax-deductible contributions</li>
                  <li>• Transparent impact reporting</li>
                  <li>• Global network of trusted volunteers</li>
                  <li>• Sustainable community solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
