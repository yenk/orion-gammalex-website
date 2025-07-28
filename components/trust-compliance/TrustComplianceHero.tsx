"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

export default function TrustComplianceHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/impact/icons/image23.png)',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">
        {/* Main Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-relaxed tracking-tight max-w-7xl mx-auto">
            Enterprise Security & Privacy, <span className="text-gammalex-orange">Built for Scale</span>
          </h1>
        </motion.div>

        {/* Introductory Paragraph */}
        <motion.div
          className="text-center mb-32 pt-8 pb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/90 leading-loose max-w-4xl mx-auto">
            At GammaLex, data protection is foundational and we're continuously building and strengthening our multi-layered security framework. From day one, our focus has been on ensuring confidentiality, integrity, and availability to give you full confidence in safeguarding your most critical information.
          </p>
        </motion.div>

        {/* Two Column Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
        >
          {/* Left Section: Our privacy philosophy */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-inter font-normal text-white">
              Our privacy philosophy: Data minimization and client control of data
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              The two core philosophies of data minimization and client control consistently inform how our team — from engineering to client success — builds our vertical AI for healthcare and handles client data. Unlike many other AI/ML companies, we aim to collect the minimum data required to provide our services (and nothing more). Additionally, we always provide our healthcare clients transparency around and control over their data. They choose which healthcare systems and data sources to provide via secure API access, and can turn off API access to any data source at any time. For more information on our privacy program, please see our <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
          </motion.div>

          {/* Right Section: Our security philosophy */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white">
              Our security philosophy:
            </h3>
            <ul className="list-disc list-inside text-white/90 space-y-2 mb-8">
              <li>Confidentiality</li>
              <li>Integrity</li>
              <li>Availability</li>
            </ul>
            <p className="text-base text-white/90 leading-relaxed">
              Our security program is aligned with SOC 2 Type II and ISO 27000 standards. While we are still working toward full certification, we maintain industry leading administrative, physical, and technical safeguards to protect healthcare client data. We continuously monitor and strengthen our vertical AI application, systems, and processes to meet the demands of a constantly evolving security landscape, with transparency and trust at the core of our approach.
            </p>
          </motion.div>
        </motion.div>


      </div>
    </section>
  )
} 