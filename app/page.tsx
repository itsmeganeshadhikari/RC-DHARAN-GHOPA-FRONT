import Landing from "./landing"

export const metadata = {
  title: "Rotary Club of Dharan Ghopa - Service Above Self",
  description:
    "Join the Rotary Club of Dharan Ghopa in making a difference through community service, humanitarian projects, and fellowship. Service Above Self.",
  keywords: "Rotary Club, Dharan Ghopa, community service, humanitarian, fellowship, Nepal, charity",
  openGraph: {
    title: "Rotary Club of Dharan Ghopa",
    description: "Service Above Self - Making a difference in our community",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotary Club of Dharan Ghopa",
    description: "Service Above Self - Making a difference in our community",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Landing />
    </div>
  )
}
