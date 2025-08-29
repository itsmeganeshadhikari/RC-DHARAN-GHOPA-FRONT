
import { Button } from "@/components/ui/button"
import { VedioFrame } from "@/components/video-frame"
import { Heart, Users, Trophy, Droplets, BookOpen, ArrowRight, Star, Globe, Handshake } from "lucide-react"
import Link from "next/link"

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-10">
      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <VedioFrame />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-purple-900/70"></div> */}
          <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-3 rounded-full text-sm font-bold mb-12 uppercase tracking-wide shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Star className="w-5 h-5" />
              Service Above Self
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-yellow-200 bg-clip-text text-transparent">
              Help Poor People Life
              <br />
              <span className="text-yellow-300">& Their Formation</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-blue-100 font-light">
              Rotary Club has built a platform focused on aiding entrepreneurs, startups, and companies raise capital
              from anyone
            </p>

            <Button asChild
              size="lg"
              className="bg-gradient-to-r from-white to-blue-50 text-blue-800 hover:from-blue-50 hover:to-white shadow-2xl font-bold px-10 py-6 text-lg rounded-full group transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/donate">
                <Users className="w-5 h-5 mr-3" />
                DONATE US
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>

        <div className="container mx-auto px-6 py-24 space-y-32">
          <section>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-700 group transform hover:scale-[1.02] transition-all duration-500">
              <video
                className="w-full h-[450px] md:h-[550px] object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/rotary-club-community-service-volunteers-helping-p.png"
              >
                <source src="/videos/rotary-hero.mp4" type="video/mp4" />
                <source src="/videos/rotary-hero.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                <div className="p-10 md:p-16 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-yellow-400 rounded-full">
                      <Globe className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold">Service Above Self</h3>
                  </div>
                  <p className="text-xl md:text-2xl opacity-90 max-w-3xl font-light leading-relaxed">
                    Watch how our members make a difference in communities across Nepal and beyond.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Community Service",
                desc: "Making a positive impact through local and international service projects.",
                icon: Heart,
                color: "text-red-600",
                bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
                borderColor: "border-red-200",
                hoverColor: "hover:border-red-400",
              },
              {
                title: "Fellowship",
                desc: "Building lasting friendships and professional networks with like-minded individuals.",
                icon: Users,
                color: "text-blue-600",
                bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
                borderColor: "border-blue-200",
                hoverColor: "hover:border-blue-400",
              },
              {
                title: "Leadership",
                desc: "Developing leadership skills and creating opportunities for personal growth.",
                icon: Trophy,
                color: "text-yellow-600",
                bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
                borderColor: "border-yellow-200",
                hoverColor: "hover:border-yellow-400",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className={`${feature.bgColor} rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${feature.borderColor} ${feature.hoverColor} group hover:-translate-y-2 transform`}
                >
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-white shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-10 h-10 ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>
                </div>
              )
            })}
          </section>

          <section>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
                <Handshake className="w-5 h-5" />
                Making a Difference
              </div>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-800 bg-clip-text text-transparent mb-8 leading-tight">
                Our Impact in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                See the real difference we're making in communities through our humanitarian projects and service
                initiatives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group transform hover:scale-105 transition-all duration-500">
                <video
                  className="w-full h-[350px] object-cover"
                  controls
                  poster="/rotary-club-water-project-clean-water-well-drillin.png"
                >
                  <source src="/videos/water-project.mp4" type="video/mp4" />
                  <source src="/videos/water-project.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-blue-400 rounded-full">
                      <Droplets className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white text-2xl font-bold">Clean Water Initiative</h3>
                  </div>
                  <p className="text-white/90 text-base">Providing clean water access to rural communities in Nepal</p>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl group transform hover:scale-105 transition-all duration-500">
                <video
                  className="w-full h-[350px] object-cover"
                  controls
                  poster="/rotary-club-education-project-school-children-lear.png"
                >
                  <source src="/videos/education-project.mp4" type="video/mp4" />
                  <source src="/videos/education-project.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-green-400 rounded-full">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white text-2xl font-bold">Education for All</h3>
                  </div>
                  <p className="text-white/90 text-base">
                    Supporting literacy and education programs for underprivileged children
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 md:p-20 shadow-2xl border border-blue-100">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/90 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
                <Users className="w-5 h-5" />
                Community Voices
              </div>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-800 bg-clip-text text-transparent mb-8 leading-tight">
                Voices from Our Community
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Hear directly from community members and fellow Rotarians about the impact of our work.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <video
                  className="w-full h-[450px] md:h-[550px] object-cover"
                  controls
                  poster="/rotary-club-members-testimonials-community-impact-.png"
                >
                  <source src="/videos/testimonials.mp4" type="video/mp4" />
                  <source src="/videos/testimonials.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          <section className="relative rounded-3xl overflow-hidden shadow-2xl">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/rotary-club-meeting-members-working-together-commu.png"
            >
              <source src="/videos/join-us-bg.mp4" type="video/mp4" />
              <source src="/videos/join-us-bg.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-purple-900/95"></div>
            <div className="relative z-10 text-center py-24 px-10">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
                <Handshake className="w-5 h-5" />
                Join Our Mission
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
                Join our community of dedicated individuals committed to service above self. Together, we can create
                lasting positive change.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-white to-blue-50 text-blue-800 hover:from-blue-50 hover:to-white shadow-2xl font-bold px-10 py-6 text-lg rounded-full group transform hover:scale-105 transition-all duration-300">
                  <Link href="/membership">
                    Become a Member
                   </Link>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-gradient-to-r from-white to-blue-50 text-blue-800 hover:from-blue-50 hover:to-white shadow-2xl font-bold px-10 py-6 text-lg rounded-full group transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact">
                  Contact Us Today
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
