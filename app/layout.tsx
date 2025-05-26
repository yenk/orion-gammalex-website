import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GammaLex | Malpractice Risk Intelligence, Powered by AI",
  description: "From claim viability to resolution — next-gen legal infrastructure for medical malpractice litigation.",
  generator: "v0.dev",
  icons: {
    icon: "/images/gammalex-logo-glx-final.png",
    shortcut: "/images/gammalex-logo-glx-final.png",
    apple: "/images/gammalex-logo-glx-final.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
