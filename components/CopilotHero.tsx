"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/**
 * CopilotHero - Homepage hero section for GammaLex AI Copilot for Medical Pre-Auth and Denial Risk.
 * Displays main heading, subheading, and CTA with subtle motion.
 */
export function CopilotHero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden pt-12 md:pt-24">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-6 px-0 pb-10 sm:pb-32 items-start ml-16 break-words max-w-full">
        <motion.div
          className="mb-1 sm:mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sage-400 font-semibold text-base sm:text-lg lg:text-xl tracking-wide block font-satoshi text-left">
            AI COPILOT FOR MEDICAL PRE-AUTH
          </span>
        </motion.div>
        <motion.h1
          className="font-black text-gray-900 leading-[0.95] mb-3 sm:mb-8 font-sans tracking-tight break-words max-w-full text-5xl xs:text-7xl sm:text-8xl md:text-9xl flex items-baseline text-left font-satoshi"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI Copilot for Pre-Auth, Denial Risk & Legal Justification
        </motion.h1>
        <motion.p
          className="text-2xl sm:text-4xl text-gray-600 mb-8 sm:mb-12 leading-tight w-full font-satoshi text-left whitespace-normal break-words max-w-full px-1 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          GammaLex automates the paperwork battle—analyzing CPT codes, policy coverage, and clinical documentation to help you beat denials and uncover legal risk.
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 items-start mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/preauth">
            <Button size="lg" className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-3 text-base sm:text-xl font-bold rounded-xl transition-colors w-fit">
              Launch the Copilot
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 