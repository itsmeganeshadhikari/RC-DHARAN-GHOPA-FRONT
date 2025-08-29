import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, CheckCircle, Globe, Heart, Trophy } from "lucide-react"

export const metadata = {
  title: "Membership - Rotary Club of Dharan Ghopa",
  description: "Join our community of service-minded individuals. Become a Rotarian and make a difference.",
}

export default function MembershipPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-10 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Join Our Community
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Become a Rotarian
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a global network of neighbors, friends, leaders, and problem-solvers who see a world where people unite
            and take action to create lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl">Membership Application</CardTitle>
              <CardDescription>Fill out this form to begin your journey as a Rotarian</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" className="h-12" />
                </div>
                <div>
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" className="h-12" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="h-12" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+977 98XXXXXXXX" className="h-12" />
              </div>

              <div>
                <Label htmlFor="profession">Profession/Occupation</Label>
                <Input id="profession" placeholder="Your profession" className="h-12" />
              </div>

              <div>
                <Label htmlFor="company">Company/Organization</Label>
                <Input id="company" placeholder="Your workplace" className="h-12" />
              </div>

              <div>
                <Label htmlFor="membership-type">Membership Type</Label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select membership type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active Member</SelectItem>
                    <SelectItem value="honorary">Honorary Member</SelectItem>
                    <SelectItem value="corporate">Corporate Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="motivation">Why do you want to join Rotary?</Label>
                <Textarea id="motivation" placeholder="Tell us about your motivation..." className="min-h-[100px]" />
              </div>

              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-lg font-semibold">
                Submit Application
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Membership Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-semibold">Global Network</p>
                    <p className="text-gray-600 text-sm">Connect with 1.4 million Rotarians worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-semibold">Service Opportunities</p>
                    <p className="text-gray-600 text-sm">Make a meaningful impact in your community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold">Leadership Development</p>
                    <p className="text-gray-600 text-sm">Develop skills through service and fellowship</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-500 mt-1" />
                  <div>
                    <p className="font-semibold">Professional Networking</p>
                    <p className="text-gray-600 text-sm">Build lasting business and personal relationships</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Membership Requirements</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Be a person of good character and reputation</li>
                  <li>• Have a business, profession, or community leadership role</li>
                  <li>• Commit to regular meeting attendance</li>
                  <li>• Participate in service projects</li>
                  <li>• Pay annual dues and fees</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Next Steps</h3>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Submit your application form</li>
                  <li>2. Attend a club meeting as a guest</li>
                  <li>3. Meet with membership committee</li>
                  <li>4. Board approval and induction ceremony</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
