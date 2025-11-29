"use client"

import Navigation from '@/components/Navigation'
import FooterGV from '@/components/FooterGV'
import ApplicationHero from '@/components/application/ApplicationHero'
import HowWeDoItDetailed from '@/components/howwedoit/HowWeDoItDetailed'
import ApplicationDetailed from '@/components/application/ApplicationDetailed'
import ProductFlowchart from '@/components/products/ProductFlowchart'

export default function ProductsPage() {
  return (
    <main className="bg-slate-50 font-inter text-slate-900 min-h-screen">
      <Navigation />
      <ApplicationHero />
      <ProductFlowchart />
      <HowWeDoItDetailed />
      <ApplicationDetailed />
      <FooterGV />
    </main>
  )
}

