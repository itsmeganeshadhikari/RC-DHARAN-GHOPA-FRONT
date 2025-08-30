import type { Metadata } from "next"
import Image from "next/image"
import { Mail, Phone, Calendar, Award, Users, Crown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Our Members | Rotary Club of Dharan Ghopa",
  description:
    "Meet our dedicated members who serve the community through various projects and initiatives. Join our family of service-minded individuals.",
  keywords: "rotary members, dharan ghopa members, community leaders, service volunteers",
}

const boardMembers = [
  {
    name: "Rajesh Sharma",
    position: "President",
    image: "/professional-man-in-suit-rotary-president.png",
    email: "president@rotarydharanghopa.org",
    phone: "+977-9801234567",
    joinDate: "2018",
    achievements: ["Paul Harris Fellow", "District Governor Nominee"],
    bio: "Leading our club with vision and dedication to community service.",
  },
  {
    name: "Sunita Rai",
    position: "Vice President",
    image: "/professional-woman-business-attire-rotary-leader.png",
    email: "vp@rotarydharanghopa.org",
    phone: "+977-9801234568",
    joinDate: "2019",
    achievements: ["Major Donor", "Polio Plus Champion"],
    bio: "Passionate about education and women empowerment initiatives.",
  },
  {
    name: "Amit Gurung",
    position: "Secretary",
    image: "/professional-man-glasses-secretary-rotary.png",
    email: "secretary@rotarydharanghopa.org",
    phone: "+977-9801234569",
    joinDate: "2020",
    achievements: ["Perfect Attendance", "Service Above Self Award"],
    bio: "Ensuring smooth operations and maintaining club records.",
  },
  {
    name: "Kamala Thapa",
    position: "Treasurer",
    image: "/professional-woman-accountant-treasurer-rotary.png",
    email: "treasurer@rotarydharanghopa.org",
    phone: "+977-9801234570",
    joinDate: "2017",
    achievements: ["Foundation Sustaining Member", "Club Service Award"],
    bio: "Managing club finances and ensuring transparency in all transactions.",
  },
]

const activeMembers = [
  {
    name: "Dr. Prakash Limbu",
    profession: "Medical Doctor",
    image: "/doctor-medical-professional-rotary-member.png",
    specialization: "Community Health",
    joinDate: "2021",
  },
  {
    name: "Sita Karki",
    profession: "Teacher",
    image: "/female-teacher-educator-rotary-member.png",
    specialization: "Education Projects",
    joinDate: "2022",
  },
  {
    name: "Binod Shrestha",
    profession: "Engineer",
    image: "/engineer-construction-professional-rotary-member.png",
    specialization: "Infrastructure Development",
    joinDate: "2020",
  },
  {
    name: "Maya Tamang",
    profession: "Social Worker",
    image: "/social-worker-community-service-rotary-member.png",
    specialization: "Community Outreach",
    joinDate: "2023",
  },
  {
    name: "Ravi Adhikari",
    profession: "Business Owner",
    image: "/businessman-entrepreneur-rotary-member.png",
    specialization: "Economic Development",
    joinDate: "2019",
  },
  {
    name: "Laxmi Gurung",
    profession: "Lawyer",
    image: "/female-lawyer-legal-professional-rotary-member.png",
    specialization: "Legal Aid Services",
    joinDate: "2021",
  },
]

const membershipStats = [
  { label: "Total Members", value: "45", icon: Users },
  { label: "Years of Service", value: "15", icon: Calendar },
  { label: "Paul Harris Fellows", value: "12", icon: Award },
  { label: "Board Members", value: "8", icon: Crown },
]

export default function MembersPage() {
  return (
    <div className="min-h-screen px-10">
      <div className="bg-gradient-to-br from-slate-50 to-emerald-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white">
          <div className="container mx-auto text-center">
            <img
              src="dedicated.jpg"
              alt="Community service background"
              className="w-full h-[400px] object-cover opacity-90"
            />
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-balance m-2">Our Dedicated Members</h1>
            <p className="text-xl md:text-xl text-emerald-100 max-w-3xl mx-auto text-balance">
              Meet the passionate individuals who make our community service possible through their dedication and
              commitment.
            </p>
          </div>
        </section>

        {/* Membership Stats */}
        <section className="py-10  bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {membershipStats.map((stat, index) => (
                <Card key={index} className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <stat.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-emerald-700 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Board of Directors</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our leadership team guides the club with vision, integrity, and commitment to service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-emerald-200">
                  <CardHeader className="text-center pb-4">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`${member.name} - ${member.position}`}
                        fill
                        className="rounded-full object-cover border-4 border-emerald-200 group-hover:border-emerald-400 transition-colors"
                      />
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full p-2">
                        <Crown className="w-4 h-4 text-emerald-800" />
                      </div>
                    </div>
                    <CardTitle className="text-emerald-800">{member.name}</CardTitle>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                      {member.position}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600 text-center">{member.bio}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4 text-emerald-600" />
                        <a href={`mailto:${member.email}`} className="hover:text-emerald-600 transition-colors">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4 text-emerald-600" />
                        <a href={`tel:${member.phone}`} className="hover:text-emerald-600 transition-colors">
                          {member.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>Member since {member.joinDate}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-emerald-100">
                      <h4 className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Achievements
                      </h4>
                      <div className="space-y-1">
                        {member.achievements.map((achievement, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-emerald-300 text-emerald-700">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Active Members */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Active Members</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our diverse group of professionals brings unique skills and perspectives to our service projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeMembers.map((member, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-emerald-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={`${member.name} - ${member.profession}`}
                          fill
                          className="rounded-full object-cover border-2 border-emerald-200 group-hover:border-emerald-400 transition-colors"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-emerald-800 mb-1">{member.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{member.profession}</p>
                        <Badge variant="outline" className="text-xs border-emerald-300 text-emerald-700">
                          {member.specialization}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-2">Member since {member.joinDate}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Membership CTA */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Family of Service</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Become part of a global network of leaders who are passionate about making a difference in their
              communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-emerald-900 font-semibold px-8 py-3"
              >
                Apply for Membership
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-3 bg-transparent"
              >
                Learn More About Rotary
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
