import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ServerHeader from "@/components/server-header"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: {
    default: "Rotary Club of Dharan Ghopa - Service Above Self",
    template: "%s | Rotary Club of Dharan Ghopa",
  },
  description:
    "Join the Rotary Club of Dharan Ghopa in making a difference through community service, humanitarian projects, and fellowship in Nepal.",
  keywords: [
    "Rotary Club",
    "Dharan Ghopa",
    "Nepal",
    "community service",
    "humanitarian",
    "fellowship",
    "charity",
    "volunteer",
  ],
  authors: [{ name: "Rotary Club of Dharan Ghopa" }],
  creator: "Rotary Club of Dharan Ghopa",
  publisher: "Rotary Club of Dharan Ghopa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rotary-dharan-ghopa.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rotary-dharan-ghopa.org",
    title: "Rotary Club of Dharan Ghopa - Service Above Self",
    description: "Join us in making a difference through community service and humanitarian projects in Nepal.",
    siteName: "Rotary Club of Dharan Ghopa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotary Club of Dharan Ghopa",
    description: "Service Above Self - Making a difference in our community",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rotary Club of Dharan Ghopa",
              description: "Community service organization dedicated to humanitarian projects and fellowship",
              url: "https://rotary-dharan-ghopa.org",
              logo: "https://rotary-dharan-ghopa.org/rotary-international-logo-yellow-wheel.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dharan",
                addressCountry: "Nepal",
              },
              sameAs: ["https://www.facebook.com/rotarydharanghopa", "https://www.instagram.com/rotarydharanghopa"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <ServerHeader />
          {children}
        <SiteFooter/>
        </body>
    </html>
  )
}
