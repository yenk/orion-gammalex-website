"use client"

import { PreAuthHero } from "@/components/preauth/PreAuthHero"
import { PreAuthStepperForm } from "@/components/preauth/PreAuthStepperForm"
import { PreAuthResultPanel } from "@/components/preauth/PreAuthResultPanel"

export default function PreAuthPage() {
  return (
    <div className="min-h-screen bg-white">
      <PreAuthHero />
      <div className="max-w-3xl mx-auto w-full px-4 py-12">
        <PreAuthStepperForm />
        <PreAuthResultPanel />
      </div>
    </div>
  )
} 