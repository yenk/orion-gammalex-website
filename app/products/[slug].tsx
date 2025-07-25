"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

/**
 * ProductDetailPage - Dynamic product detail page for GammaLex toolkit products.
 * Displays placeholder content based on the product slug from the URL.
 */
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-24 font-inter">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 capitalize">
          {params.slug.replace(/-/g, ' ')}
        </h1>
        <p className="text-base text-gray-600 mb-10">
          This is a placeholder for the <span className="font-semibold">{params.slug.replace(/-/g, ' ')}</span> product page.<br />
          More details and interactive demos coming soon.
        </p>
        <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white font-bold px-6 py-3 rounded-xl">
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
    </main>
  )
} 