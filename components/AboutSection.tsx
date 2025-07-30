"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  Zap, 
  Star, 
  FileText, 
  Shield, 
  Brain, 
  Users, 
  Eye, 
  Heart 
} from 'lucide-react'

interface TabItem {
  id: string
  label: string
  icon: React.ReactNode
}

interface ContentItem {
  icon: React.ReactNode
  title: string
  description: string
}

interface TabContent {
  title: string
  subtitle: string
  description?: string
  highlight?: string
  items?: ContentItem[]
}

interface ContentData {
  [key: string]: TabContent
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0)
  
  const tabs: TabItem[] = [
    { id: "origin", label: "Our Origin", icon: <Target className="w-6 h-6" /> },
    { id: "what-we-do", label: "What We Do", icon: <Zap className="w-6 h-6" /> },
    { id: "what-sets-us-apart", label: "What Sets Us Apart", icon: <Star className="w-6 h-6" /> }
  ]

  const content: ContentData = {
    origin: {
      title: "Born from the Front Lines",
      subtitle: "Why should revenue and patient care hinge on a system no one can fully decode?",
      description: "We spent years fighting for approvals, watching innovation stall. So we built the engine we always wished existed. GammaLex fuses AI with clinical and legal expertise to make reimbursement as precise as medicine itself.",
      highlight: "We built the engine we always wished existed."
    },
    "what-we-do": {
      title: "",
      subtitle: "",
      items: [
        {
          icon: <FileText className="w-8 h-8 text-gammalex-purple" />,
          title: "Translate & Automate",
          description: "Translates medical records and legal standards into bulletproof documentation."
        },
        {
          icon: <Shield className="w-8 h-8 text-gammalex-purple" />,
          title: "Predict & Protect",
          description: "Predicts denial risk and cuts waste to unlock revenue."
        },
        {
          icon: <Brain className="w-8 h-8 text-gammalex-purple" />,
          title: "Learn & Adapt",
          description: "Updates intelligence with latest rules to keep systems ahead."
        }
      ]
    },
    "what-sets-us-apart": {
      title: "",
      subtitle: "",
      items: [
        {
          icon: <Users className="w-8 h-8 text-gammalex-purple" />,
          title: "Founder-Led Team",
          description: "Founder-led team solving problems others ignore."
        },
        {
          icon: <Eye className="w-8 h-8 text-gammalex-purple" />,
          title: "Relentless Pursuit",
          description: "Open, auditable models that regulators and providers trust."
        },
        {
          icon: <Heart className="w-8 h-8 text-gammalex-purple" />,
          title: "Dedicated to Impact",
          description: "Restoring billions in lost revenue and patient access to care."
        }
      ]
    }
  }

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 font-inter relative bg-gradient-to-br from-black/30 via-purple-900/10 to-black/30">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-center leading-tight mb-8 px-2">
            <span className="multi-gradient-text">Defensible care</span>, by design.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gammalex-purple font-semibold mb-6 sm:mb-8">
            We're building GammaLex to reset the rules—where clarity and defensibility are the default.
          </p>
        </motion.div>

        {/* Interactive Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex bg-white/5 rounded-2xl p-3 border border-white/10">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-4 px-8 py-4 rounded-xl font-inter font-medium text-lg sm:text-xl transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-gammalex-purple/20 text-gammalex-purple border border-gammalex-purple/30' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[400px]"
        >
          {activeTab === 0 && (
            <motion.div 
              className="text-center max-w-4xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                {content.origin.title}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gammalex-purple font-semibold mb-6 sm:mb-8">
                {content.origin.subtitle}
              </p>
              <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 mb-6 sm:mb-8">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6">
                  {content.origin.description}
                </p>
                <div className="bg-gradient-to-r from-gammalex-purple/20 to-gammalex-orange/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gammalex-purple/30">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gammalex-purple">
                    "{content.origin.highlight}"
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="px-4"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {content["what-we-do"].title}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto">
                  {content["what-we-do"].subtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {content["what-we-do"].items?.map((item, index) => (
                  <motion.div
                    key={index}
                    className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-gammalex-purple/30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                      {item.icon}
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-gammalex-purple transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="px-4"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {content["what-sets-us-apart"].title}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto">
                  {content["what-sets-us-apart"].subtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {content["what-sets-us-apart"].items?.map((item, index) => (
                  <motion.div
                    key={index}
                    className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-gammalex-purple/30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                      {item.icon}
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-gammalex-purple transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
} 