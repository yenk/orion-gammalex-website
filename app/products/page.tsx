"use client"

import Navigation from '@/components/Navigation'
import FooterGV from '@/components/FooterGV'
import HowWeDoItDetailed from '@/components/howwedoit/HowWeDoItDetailed'
import ApplicationDetailed from '@/components/application/ApplicationDetailed'
import ProductFlowchart from '@/components/products/ProductFlowchart'

export default function ProductsPage() {
  return (
    <main className="bg-slate-50 font-inter text-slate-900 min-h-screen">
      <Navigation />
      <ProductFlowchart />
      <HowWeDoItDetailed />
      <ApplicationDetailed />
      <FooterGV />
    </main>
  )
}

