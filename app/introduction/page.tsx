import type { Metadata } from "next"
import { Heart, Globe, Users, Award, Target, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Introduction - Rotary Club of Dharan Ghopa | Service Above Self",
  description:
    "Learn about Rotary Club of Dharan Ghopa, our mission, values, and commitment to community service. Discover how we make a difference through Service Above Self.",
  keywords: "Rotary Club, Dharan Ghopa, community service, humanitarian, introduction, mission, values",
  openGraph: {
    title: "Introduction - Rotary Club of Dharan Ghopa",
    description: "Learn about our mission, values, and commitment to community service through Service Above Self.",
    type: "website",
  },
}

export default function IntroductionPage() {
  return (
    <>
      <main className="min-h-screen px-10">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 lg:py-32 animate-in fade-in duration-1000">
          <div className="absolute inset-0 bg-black/20"></div>   
          <div className="absolute inset-0 z-0">
            <img
              src="/community-health-camp-medical-volunteers.png"
              alt="Community service background"
              className="w-full h-full object-cover opacity-60"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/60 via-teal-600/60 to-cyan-700/60"></div> */}
          </div>       
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 animate-in slide-in-from-top duration-700 delay-300">
                <Image
                  src="/logo.png"
                  alt="Rotary International Logo"
                  width={120}
                  height={120}
                  className="mx-auto mb-6 hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-in slide-in-from-bottom duration-700 delay-500">
                Welcome to <span className="text-yellow-400 animate-pulse">Rotary Club</span> of Dharan Ghopa
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 text-pretty animate-in slide-in-from-bottom duration-700 delay-700">
                Service Above Self - Transforming Communities Through Compassionate Action
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-700 delay-1000">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <Link href="/membership">Become a Member</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <Link href="/our-works">Our Impact</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-in fade-in duration-700 delay-300">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Our Club</h2>
                <p className="text-lg text-gray-600 text-pretty">
                  The Rotary Club of Dharan Ghopa is part of Rotary International, a global network of 1.4 million
                  neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to
                  create lasting change.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="animate-in slide-in-from-left duration-700 delay-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
                  <p className="text-gray-600 mb-4">
                    Founded with the vision of creating positive change in our community, the Rotary Club of Dharan
                    Ghopa has been serving the people of Dharan and surrounding areas through various humanitarian
                    projects and initiatives.
                  </p>
                  <p className="text-gray-600">
                    We believe in the power of collective action and work tirelessly to address the most pressing needs
                    of our community, from education and healthcare to environmental conservation and economic
                    development.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-right duration-700 delay-700">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="hover:scale-110 transition-transform duration-300">
                      <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse">50+</div>
                      <div className="text-sm text-gray-600">Active Members</div>
                    </div>
                    <div className="hover:scale-110 transition-transform duration-300">
                      <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse">100+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div className="hover:scale-110 transition-transform duration-300">
                      <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse">10K+</div>
                      <div className="text-sm text-gray-600">Lives Impacted</div>
                    </div>
                    <div className="hover:scale-110 transition-transform duration-300">
                      <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse">5+</div>
                      <div className="text-sm text-gray-600">Years of Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-in fade-in duration-700 delay-300">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
                  We are guided by our core values and commitment to making a positive difference in the world.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-500">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 hover:rotate-12 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Service Above Self</h3>
                  <p className="text-gray-600">
                    Our motto guides everything we do. We prioritize the needs of others and work selflessly to create
                    positive change in our communities.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-700">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 hover:rotate-12 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Global Impact</h3>
                  <p className="text-gray-600">
                    As part of Rotary International, we contribute to global initiatives while focusing on local
                    community needs and sustainable development.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-900">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 hover:rotate-12 transition-transform duration-300">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Fellowship</h3>
                  <p className="text-gray-600">
                    We build lasting friendships and professional networks while working together towards common goals
                    of service and community development.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-1100">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 hover:rotate-12 transition-transform duration-300">
                    <Award className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in all our projects and initiatives, ensuring maximum impact and
                    sustainable results for the communities we serve.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-1300">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 hover:rotate-12 transition-transform duration-300">
                    <Target className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Focus Areas</h3>
                  <p className="text-gray-600">
                    We focus on education, healthcare, clean water, economic development, and environmental
                    sustainability to create lasting change.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-1500">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 hover:rotate-12 transition-transform duration-300">
                    <Handshake className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Partnerships</h3>
                  <p className="text-gray-600">
                    We collaborate with local organizations, government agencies, and international partners to amplify
                    our impact and reach more people in need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white animate-in fade-in duration-700 delay-300">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-in slide-in-from-bottom duration-700 delay-500">
                Join Our Mission
              </h2>
              <p className="text-xl mb-8 text-blue-100 text-pretty animate-in slide-in-from-bottom duration-700 delay-700">
                Be part of a global movement that's making a real difference. Together, we can create lasting change and
                build stronger communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-700 delay-900">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:rotate-1"
                >
                  <Link href="/membership">Become a Member</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 bg-transparent hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:-rotate-1"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
