import type { Metadata } from "next"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Events | Rotary Club of Dharan Ghopa",
  description:
    "Join our upcoming events and community service activities. Make a difference in your community with Rotary Club of Dharan Ghopa.",
  keywords: "rotary events, community service, charity events, dharan events, volunteer opportunities",
}

const upcomingEvents = [
  {
    id: 1,
    title: "Community Health Camp",
    description: "Free health checkups and medical consultations for the local community",
    date: "2024-02-15",
    time: "9:00 AM - 4:00 PM",
    location: "Dharan Community Center",
    category: "Health",
    attendees: 150,
    image: "/community-health-camp-medical-volunteers.png",
  },
  {
    id: 2,
    title: "Educational Scholarship Distribution",
    description: "Annual scholarship ceremony for deserving students from underprivileged families",
    date: "2024-02-22",
    time: "10:00 AM - 12:00 PM",
    location: "Rotary Hall, Dharan",
    category: "Education",
    attendees: 80,
    image: "/scholarship-ceremony-students-education.png",
  },
  {
    id: 3,
    title: "Clean Water Project Launch",
    description: "Inauguration of new water filtration system for rural communities",
    date: "2024-03-05",
    time: "11:00 AM - 2:00 PM",
    location: "Ghopa Village",
    category: "Water & Sanitation",
    attendees: 200,
    image: "/clean-water-project-rural-community.png",
  },
  {
    id: 4,
    title: "Youth Leadership Workshop",
    description: "Empowering young leaders with skills and knowledge for community development",
    date: "2024-03-12",
    time: "2:00 PM - 6:00 PM",
    location: "Dharan Youth Center",
    category: "Youth Development",
    attendees: 60,
    image: "/youth-leadership-workshop-training.png",
  },
]

const pastEvents = [
  {
    id: 5,
    title: "Blood Donation Drive",
    description: "Successfully collected 120 units of blood for local hospitals",
    date: "2024-01-20",
    location: "Dharan Hospital",
    category: "Health",
    attendees: 120,
    image: "/blood-donation-drive-volunteers.png",
  },
  {
    id: 6,
    title: "Tree Plantation Campaign",
    description: "Planted 500 saplings across Dharan to promote environmental conservation",
    date: "2024-01-10",
    location: "Various locations in Dharan",
    category: "Environment",
    attendees: 85,
    image: "/tree-plantation-environmental-conservation.png",
  },
]

function EventCard({ event, isPast = false }: { event: any; isPast?: boolean }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gradient-to-br from-emerald-100 to-teal-100">
        <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <Badge variant={isPast ? "secondary" : "default"} className="bg-emerald-600 text-white">
            {event.category}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl text-emerald-800">{event.title}</CardTitle>
        <CardDescription className="text-gray-600">{event.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4 text-emerald-600" />
          <span>
            {new Date(event.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        {event.time && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>{event.time}</span>
          </div>
        )}

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-emerald-600" />
          <span>{event.location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="w-4 h-4 text-emerald-600" />
          <span>
            {event.attendees} {isPast ? "participated" : "expected attendees"}
          </span>
        </div>

        {!isPast && (
          <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">
            Register Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 px-10">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white overflow-hidden">
          {/* Background Image */}
          <img
              src="landing.jpg"
              alt="Community service background"
              className="w-full h-[450px] object-cover opacity-90"
            />
          <div className="absolute inset-0 z-0 p-1">
          </div>
          {/* Content */}
          <div className="container mx-auto px-4 text-center relative z-10 py-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Events</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Join us in making a difference through community service, fellowship, and meaningful action. Together, we
              create lasting positive change in our community.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 relative">
          <div className="absolute inset-0 opacity-15">
            <div
              className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-emerald-800 mb-4">Upcoming Events</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't miss out on these exciting opportunities to serve your community and connect with fellow
                Rotarians.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 bg-white relative">
          <div className="absolute inset-0 opacity-25">
            <img
              src="/tree-plantation-environmental-conservation.png"
              alt="Past events background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/70"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-emerald-800 mb-4">Recent Events</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Take a look at our recent community service activities and their impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/rotary-club-members-testimonials-community-impact-.png"
              alt="Community impact background"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/70 to-teal-600/70"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-4">Want to Get Involved?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join our club and be part of meaningful community service projects that make a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-emerald-900 font-semibold">
                <Link href="/membership">Become a Member</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
