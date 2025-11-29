"use client"

import { motion } from "framer-motion"

export default function ImpactStories() {
  const impactStories = [
    {
      title: "Academic Medical Center",
      subtitle: "94% detection confidence",
      description: "A major academic medical center paired GammaLex AI with radiologist expertise, lowering false positives by 67% and accelerating treatment planning by 3.2x.",
      metrics: [
        "67% fewer false positives",
        "3.2x faster treatment planning",
        "$2.4M saved on avoidable imaging"
      ]
    },
    {
      title: "Specialty Hospital Network",
      subtitle: "AR & voice in real time",
      description: "A specialty hospital network combined AR overlays and voice-guided reporting to reduce read times to 12 minutes while keeping teams aligned across sites.",
      metrics: [
        "12-minute average read time",
        "15M+ imaging slices contextualized monthly",
        "99.9% system reliability"
      ]
    },
    {
      title: "Healthcare System",
      subtitle: "Outcome acceleration",
      description: "A large healthcare system modernized breast imaging with GammaLex, delivering 12x ROI in operational efficiency and 89% faster handoffs between radiology and treatment teams.",
      metrics: [
        "12x operational ROI",
        "89% faster handoffs",
        "500+ care partners aligned"
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
            See how healthcare organizations are transforming their breast imaging workflows and achieving measurable results with GammaLex.
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
                <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-gammalex-purple to-gammalex-purple-light text-white font-semibold px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-purple">
                  Read Full Case Study
                  <span className="w-4 h-4 border-r-2 border-t-2 border-white transform rotate-45 transition-transform duration-300 group-hover:translate-x-1"></span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}