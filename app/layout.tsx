import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "GammaLex | Malpractice Risk Intelligence, Powered by AI",
  description: "From claim viability to resolution — next-gen legal infrastructure for medical malpractice litigation.",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.variable}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
