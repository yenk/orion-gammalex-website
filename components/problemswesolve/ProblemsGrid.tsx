"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Users, DollarSign, Clock } from 'lucide-react'

export default function ProblemsGrid() {
  const problemCategories = [
    {
      icon: <AlertTriangle className="text-white" size={24} />,
      title: "Claim Denials",
      description: "Complex specialty procedures face higher denial rates due to evolving coverage policies and documentation requirements.",
      gradient: "from-red-500/10 to-red-600/5",
      iconGradient: "from-red-500 to-red-600",
      hoverGradient: "from-red-500/20"
    },
    {
      icon: <Clock className="text-white" size={24} />,
      title: "Revenue Cycle Delays",
      description: "Lengthy pre-authorization processes and payment delays impact cash flow and operational efficiency.",
      gradient: "from-orange-500/10 to-orange-600/5",
      iconGradient: "from-orange-500 to-orange-600",
      hoverGradient: "from-orange-500/20"
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Policy Complexity",
      description: "Rapidly evolving payer policies create uncertainty and require constant monitoring and adaptation.",
      gradient: "from-purple-500/10 to-purple-600/5",
      iconGradient: "from-purple-500 to-purple-600",
      hoverGradient: "from-purple-500/20"
    },
    {
      icon: <DollarSign className="text-white" size={24} />,
      title: "Documentation Burden",
      description: "Excessive administrative overhead diverts resources from patient care and clinical decision-making.",
      gradient: "from-blue-500/10 to-blue-600/5",
      iconGradient: "from-blue-500 to-blue-600",
      hoverGradient: "from-blue-500/20"
    },
    {
      icon: <AlertTriangle className="text-white" size={24} />,
      title: "Risk Management",
      description: "Lack of real-time risk assessment leads to preventable legal exposure and compliance issues.",
      gradient: "from-green-500/10 to-green-600/5",
      iconGradient: "from-green-500 to-green-600",
      hoverGradient: "from-green-500/20"
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Patient Impact",
      description: "Delayed care and coverage uncertainty directly impact patient outcomes and treatment timelines.",
      gradient: "from-pink-500/10 to-pink-600/5",
      iconGradient: "from-pink-500 to-pink-600",
      hoverGradient: "from-pink-500/20"
    }
  ];

  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {problemCategories.map((problem, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className={`relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm p-8 bg-gradient-to-br ${problem.gradient} group-hover:${problem.hoverGradient} transition-all duration-300`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${problem.iconGradient} flex items-center justify-center shadow-lg`}>
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{problem.title}</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 