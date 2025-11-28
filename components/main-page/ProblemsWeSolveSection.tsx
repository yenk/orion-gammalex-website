"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function ProblemsWeSolveSection() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white mb-8">
            Breast imaging accuracy still varies by reader and drives risk
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Sensitivity averages in the mid-80s, so cancers slip by on the first read while callbacks and biopsies spike under avoidable false positives. GammaLex brings AI + AR + voice to stabilize readings and deliver early detection at scale.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-white">
              Inter-reader variability
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Individual radiologists show a wide range of abnormal interpretation and biopsy-positive predictive values, exposing patients to missed cancers or unnecessary procedures.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              GammaLex applies AI consensus to standardize accuracy and highlight early-stage findings that otherwise hide in plain sight.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-white">
              False positives & workflow friction
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              AI + voice reduces the noise of open-ended dictation, while AR overlays lower targeting errors and keep the team in sync on next steps.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              The result is fewer callbacks, shorter reading sessions, and more confident breast imaging interpretations.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
            AI, AR, and voice make breast imaging more consistent
          </h3>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
            We standardize decision support, overlay findings onto anatomy, and capture structured voice reports so every mammogram or biopsy review stays explainable and error-proof.
          </p>
        </motion.div>
      </div>
    </section>
  )
}