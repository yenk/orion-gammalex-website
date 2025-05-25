import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GammaLex - AI Engine for Medical Malpractice Lawyers",
  description:
    "The first AI engine for medical malpractice lawyers. Predict claim strength, triage faster, and build stronger cases with AI-powered viability prediction, smart triage, and automated drafting.",
  keywords: "medical malpractice, AI lawyer tools, legal tech, case prediction, legal AI, malpractice litigation",
  authors: [{ name: "GammaLex" }],
  creator: "GammaLex",
  publisher: "GammaLex",
  robots: "index, follow",
  openGraph: {
    title: "GammaLex - AI Engine for Medical Malpractice Lawyers",
    description:
      "Predict claim strength. Triage faster. Build stronger cases. The first AI engine designed specifically for medical malpractice litigation.",
    url: "https://counsel.gammalex.com",
    siteName: "GammaLex",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GammaLex - AI Engine for Medical Malpractice Lawyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GammaLex - AI Engine for Medical Malpractice Lawyers",
    description: "Predict claim strength. Triage faster. Build stronger cases.",
    images: ["/og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6a7f64", // Olive green brand color
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Custom favicon - replace with actual GammaLex logo when available */}
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preload fonts for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
