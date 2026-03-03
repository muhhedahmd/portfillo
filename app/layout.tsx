import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"

const goodtimeFont = localFont({
  src: "/GOODTIME.woff",
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
})

export const metadata: Metadata = {

  title: "Mohamed Ahmed El Sayed - Full Stack Engineer | Next.js Expert",
  description:
    "Mohamed Ahmed El Sayed - Full-stack Engineer and Web Developer with a strong focus on building clean, modern, and responsive interfaces. Specializing in Next.js, React, Express.js, and PostgreSQL.",
  keywords:
    "Full Stack Engineer, Full Stack Developer, Next.js Developer, React Developer, TypeScript, Web Development, Frontend Developer, Backend Developer, Express.js, PostgreSQL, Portfolio, Mohamed Ahmed El Sayed",
  authors: [{ name: "Mohamed Ahmed El Sayed" }],
  creator: "Mohamed Ahmed El Sayed",
  publisher: "Mohamed Ahmed El Sayed",
  robots: "index, follow",
  openGraph: {
    title: "Mohamed Ahmed El Sayed - Full Stack Engineer",
    description:
      "Full-stack Engineer and Web Developer specializing in Next.js, React, Express.js, and PostgreSQL.",
    type: "website",
    locale: "en_US",
    url: "https://portfillo-puce.vercel.app/",
    siteName: "Mohamed Ahmed Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Ahmed El Sayed - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ahmed El Sayed - Full Stack Engineer",
    description: "Full-stack Engineer specializing in Next.js, React, Express.js, and PostgreSQL.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://portfillo-puce.vercel.app/",
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
        <meta name="theme-color" content="#fafafa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`overflow-x-hidden ${goodtimeFont.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
