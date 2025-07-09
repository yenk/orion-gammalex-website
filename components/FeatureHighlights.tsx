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
      icon: <Shield className="h-8 w-8 text-gammalex-purple neon-text" />,
      bg: "bg-gammalex-purple/10",
      title: "Reduce Denials",
      desc: "AI-powered insights to identify potential coverage issues before submission"
    },
    {
      icon: <Zap className="h-8 w-8 text-gammalex-orange neon-text" />,
      bg: "bg-gammalex-orange/10",
      title: "Faster Approvals",
      desc: "Streamlined process with intelligent document analysis and recommendations"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-gammalex-purple-light neon-text" />,
      bg: "bg-gammalex-purple/20",
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
            whileHover={{ y: -6, boxShadow: "0 8px 32px #8b5cf6aa" }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <Card className="h-full flex flex-col items-center justify-center py-8 px-6 glass neon-glow border border-white/10 hover:border-gammalex-purple/40 hover:shadow-lg hover-glow transition-all duration-300">
              <div className={`rounded-full p-4 mb-4 ${f.bg} flex items-center justify-center neon-glow animate-pulse-glow`}> 
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center font-inter neon-text">{f.title}</h3>
              <p className="text-white/80 text-center text-base font-inter">{f.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 