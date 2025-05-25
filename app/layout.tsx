import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GammaLex | Malpractice Risk Intelligence, Powered by AI",
  description: "From claim viability to resolution — next-gen legal infrastructure for medical malpractice litigation.",
  generator: "v0.dev",
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
