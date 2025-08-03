import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: "GammaLex AI Inc. | Predictive Intelligence for Pre-Authorizations, Denials, and Clinical Compliance",
  description: "Source-Backed AI for the Frontlines of Clinical, Financial, and Legal Risk.",
  generator: "v0.dev",
  icons: {
    icon: "/gammalexlogo.png",
    shortcut: "/gammalexlogo.png",
    apple: "/gammalexlogo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased relative">
        {/* Futuristic background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20 pointer-events-none z-0" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none z-0" />
        
        <div className="relative z-10">
          <GoogleAnalytics />
          {children}
        </div>
      </body>
    </html>
  )
}
