import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"
import Footer from "./_components/footer"

const goodtimeFont = localFont({
  src: "/GOODTIME.woff",
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Mohamed Ahmed - Full Stack Developer | Next.js React Expert",
  description:
    "Mohamed Ahmed Elsaid - Experienced Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies. 2+ years building dynamic, responsive web applications.",
  keywords:
    "Full Stack Developer, Next.js Developer, React Developer, TypeScript, Web Development, Frontend Developer, Backend Developer, JavaScript, Node.js, Portfolio, Mohamed Ahmed",
  authors: [{ name: "Mohamed Ahmed Elsaid" }],
  creator: "Mohamed Ahmed Elsaid",
  publisher: "Mohamed Ahmed Elsaid",
  robots: "index, follow",
  openGraph: {
    title: "Mohamed Ahmed - Full Stack Developer | Next.js React Expert",
    description:
      "Experienced Full Stack Developer with 2+ years building dynamic web applications. Specializing in Next.js, React, TypeScript, and modern web technologies.",
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Mohamed Ahmed Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Ahmed - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ahmed - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in Next.js, React, and modern web technologies.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`overflow-x-hidden ${goodtimeFont.className} antialiased`}>{children}

        <Footer/>
      </body>
    </html>
  )
}
