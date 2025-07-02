"use client"

import { Shield, Zap, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

/**
 * FeatureHighlights - Clean, responsive feature card section for homepage.
 * Shows 3 key features in a modern grid, mobile and desktop friendly.
 */
export function FeatureHighlights() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-sage-600" />,
      bg: "bg-sage-100",
      title: "Reduce Denials",
      desc: "AI-powered insights to identify potential coverage issues before submission"
    },
    {
      icon: <Zap className="h-8 w-8 text-terracotta-600" />,
      bg: "bg-terracotta-100",
      title: "Faster Approvals",
      desc: "Streamlined process with intelligent document analysis and recommendations"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-bronze-600" />,
      bg: "bg-bronze-100",
      title: "Coverage Insights",
      desc: "Detailed analysis of payer requirements and coverage criteria"
    }
  ]
  return (
    <div className="w-full max-w-5xl mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            whileHover={{ y: -6, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <Card className="h-full flex flex-col items-center justify-center py-8 px-6 shadow-sm border border-gray-100">
              <div className={`rounded-full p-4 mb-4 ${f.bg} flex items-center justify-center`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center font-inter">{f.title}</h3>
              <p className="text-gray-600 text-center text-base font-inter">{f.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 