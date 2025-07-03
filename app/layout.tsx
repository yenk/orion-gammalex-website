import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: "GammaLex | Clinical-Legal Intelligence for Malpractice, Denials & Compliance",
  description: "From claim viability to compliance—source-backed AI for the realities of care, coverage, and legal risk.",
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
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
