"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Shield, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"

export function PreAuthHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-sage-50 to-white text-center">
      <motion.h1
        className="text-5xl sm:text-6xl font-bold mb-6 font-satoshi text-charcoal-900"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Streamline Pre-Authorizations.<br className="hidden sm:inline" /> Reduce Denials.<br className="hidden sm:inline" /> Predict Malpractice Risk.
      </motion.h1>
      <motion.p
        className="text-xl sm:text-2xl text-gray-600 mb-10 font-satoshi max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Use AI to evaluate CPT coverage, detect denial risk, and surface malpractice-relevant patterns—all in seconds.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a href="#preauth-form">
          <Button size="lg" className="bg-terracotta-500 hover:bg-terracotta-600 text-white text-lg px-8 py-4 rounded-xl font-satoshi font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Launch Pre-Auth Assistant
          </Button>
        </a>
      </motion.div>

      {/* Feature Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-12"
      >
        <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-sage-100">
          <div className="bg-sage-100 p-3 rounded-full mb-4">
            <Shield className="h-8 w-8 text-sage-600" />
          </div>
          <h3 className="text-xl font-semibold text-charcoal-900 mb-2 font-satoshi">Reduce Denials</h3>
          <p className="text-gray-600 text-center font-satoshi">AI-powered insights to identify potential coverage issues before submission</p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-sage-100">
          <div className="bg-terracotta-100 p-3 rounded-full mb-4">
            <Zap className="h-8 w-8 text-terracotta-600" />
          </div>
          <h3 className="text-xl font-semibold text-charcoal-900 mb-2 font-satoshi">Faster Approvals</h3>
          <p className="text-gray-600 text-center font-satoshi">Streamlined process with intelligent document analysis and recommendations</p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-sage-100">
          <div className="bg-bronze-100 p-3 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-bronze-600" />
          </div>
          <h3 className="text-xl font-semibold text-charcoal-900 mb-2 font-satoshi">Coverage Insights</h3>
          <p className="text-gray-600 text-center font-satoshi">Detailed analysis of payer requirements and coverage criteria</p>
        </div>
      </motion.div>
    </section>
  )
} 