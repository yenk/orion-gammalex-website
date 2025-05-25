"use client"

import { motion } from "framer-motion"
import { AlertCircle, ExternalLink } from "lucide-react"

export function DidYouKnowCallout({
  fact,
  source,
  citation,
  sourceUrl,
  icon: Icon = AlertCircle,
  delay = 0,
}: {
  fact: string
  source: string
  citation: string
  sourceUrl?: string
  icon?: any
  delay?: number
}) {
  return (
    <motion.div
      className="bg-gradient-to-r from-copper-50 to-orange-50 border-l-4 border-copper-500 rounded-lg p-6 my-8 shadow-lg"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-start space-x-4">
        <div className="bg-copper-500 rounded-full p-2 flex-shrink-0">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-charcoal-900 mb-2 flex items-center">Did You Know?</h4>
          <p className="text-charcoal-800 text-lg leading-relaxed mb-3">{fact}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-charcoal-600 mb-1">Source: {source}</p>
              <p className="text-xs text-charcoal-500">{citation}</p>
            </div>
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper-600 hover:text-copper-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function InlineFact({
  label,
  value,
  description,
  source,
  icon: Icon,
  delay = 0,
}: {
  label: string
  value: string
  description: string
  source: string
  icon: any
  delay?: number
}) {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-olive-100 p-2 rounded-lg mr-3">
          <Icon className="w-5 h-5 text-olive-700" />
        </div>
        <div>
          <div className="text-2xl font-bold text-olive-600">{value}</div>
          <div className="text-sm font-medium text-charcoal-900">{label}</div>
        </div>
      </div>
      <p className="text-neutral-600 text-sm mb-3">{description}</p>
      <p className="text-xs text-neutral-500">Source: {source}</p>
    </motion.div>
  )
}

export function StatsBanner() {
  return (
    <motion.div
      className="bg-charcoal-800 text-white py-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 to-charcoal-700 opacity-50"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif text-white mb-2">The Medical Malpractice Reality</h3>
          <p className="text-charcoal-300">Industry statistics that drive the need for AI-powered solutions</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-3xl font-bold text-copper-400 mb-2">23%</div>
            <div className="text-sm text-charcoal-300">Claims result in payment</div>
            <div className="text-xs text-charcoal-400 mt-1">NPDB 2023</div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-3xl font-bold text-copper-400 mb-2">$4.2B</div>
            <div className="text-sm text-charcoal-300">Annual payouts (2023)</div>
            <div className="text-xs text-charcoal-400 mt-1">NPDB Report</div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-3xl font-bold text-copper-400 mb-2">31 mo</div>
            <div className="text-sm text-charcoal-300">Average case duration</div>
            <div className="text-xs text-charcoal-400 mt-1">Diederich 2022</div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-3xl font-bold text-copper-400 mb-2">$348K</div>
            <div className="text-sm text-charcoal-300">Median payout</div>
            <div className="text-xs text-charcoal-400 mt-1">NPDB 2023</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
