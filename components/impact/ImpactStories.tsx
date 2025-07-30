"use client"

import { motion } from "framer-motion"

export default function ImpactStories() {
  const impactStories = [
    {
      title: "Academic Medical Center",
      subtitle: "94% Authorization Success Rate",
      description: "A major academic medical center achieved a 94% authorization success rate using GammaLex's AI-powered platform, reducing claim denials by 67% and accelerating payment cycles by 3.2x.",
      metrics: [
        "67% reduction in claim denials",
        "3.2x faster payment cycles", 
        "$2.4M in protected revenue"
      ]
    },
    {
      title: "Specialty Hospital Network",
      subtitle: "Real-time Policy Intelligence",
      description: "A specialty hospital network leveraged GammaLex's real-time policy monitoring to achieve 98% accuracy in authorization predictions, processing over 15M claims with 99.9% uptime reliability.",
      metrics: [
        "98% prediction accuracy",
        "15M+ claims processed",
        "99.9% system reliability"
      ]
    },
    {
      title: "Healthcare System",
      subtitle: "Revenue Transformation",
      description: "A large healthcare system modernized their authorization operations with GammaLex, achieving 12x ROI improvement and 89% faster claims processing while serving 500+ healthcare partners.",
      metrics: [
        "12x ROI improvement",
        "89% faster processing",
        "500+ partner network"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Real Impact Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how healthcare organizations are transforming their authorization processes and achieving measurable results with GammaLex.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-gammalex-purple font-semibold">
                  {story.subtitle}
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {story.description}
              </p>

              <div className="space-y-3">
                {story.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gammalex-orange rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{metric}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="flex items-center gap-2 text-gammalex-purple font-semibold hover:gap-3 transition-all">
                  Read Full Case Study
                  <div className="w-4 h-4 border-r-2 border-t-2 border-gammalex-orange transform rotate-45"></div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 