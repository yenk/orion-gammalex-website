"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, FileText, Shield, MessageCircle, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

/**
 * ToolkitSection - Unified, modern Copilot capabilities section for GammaLex.
 * Shows a single content block with headline, concise capabilities, and a minimal demo panel.
 */
export function ToolkitSection() {
  // Capabilities (not product names)
  const capabilities = [
    {
      icon: <Scale className="w-5 h-5 text-sage-600" />, text: "Search CPT & policy rules instantly"
    },
    {
      icon: <FileText className="w-5 h-5 text-terracotta-600" />, text: "Draft compliant notes in seconds"
    },
    {
      icon: <Shield className="w-5 h-5 text-bronze-600" />, text: "Flag denial & legal risk automatically"
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-sage-600" />, text: "Chat in plain English for instant answers"
    }
  ]

  // Minimal demo data (pick one for now)
  const demo = {
    heading: "Live Copilot Demo",
    content: "Try a CPT code, denial reason, or question. See how GammaLex responds in real time.",
    example: "Q: Does Medicare cover 99213? → A: Yes, with annual limit and documentation."
  }

  return (
    <section id="toolkit" className="py-24 bg-white font-inter">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-none w-full px-4 sm:px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Unified content block */}
          <div className="flex-1 w-full">
            <h2 className="text-4xl sm:text-5xl font-inter">
              Everything You Need to Beat Denials
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl font-inter">
              GammaLex is your AI Copilot for medical pre-auth, denial risk, and legal justification. One smooth, intelligent system—no more app overload.
            </p>
            <ul className="space-y-4">
              {capabilities.map((c, i) => (
                <li key={i} className="flex items-center gap-3 text-base sm:text-lg text-gray-800 font-inter">
                  <span className="inline-flex items-center justify-center rounded-full bg-sage-50/60 p-2 mr-2">
                    {c.icon}
                  </span>
                  {c.text}
                </li>
              ))}
            </ul>
          </div>
          {/* Minimal demo panel (desktop: right, mobile: below) */}
          <div className="flex-1 w-full mt-10 lg:mt-0 lg:ml-8 max-w-md mx-auto lg:mx-0">
            <AnimatePresence mode="wait">
              <motion.div
                key="demo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="rounded-2xl bg-gray-50/60 p-8">
                  <h3 className="text-2xl font-inter">{demo.heading}</h3>
                  <p className="text-base text-gray-700 mb-4 text-center font-inter">{demo.content}</p>
                  <div className="bg-white rounded-xl px-4 py-3 text-gray-800 text-center text-base font-mono border border-gray-100 font-inter">
                    {demo.example}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 