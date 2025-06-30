"use client"

import { motion } from "framer-motion"
import { 
  Brain, 
  FileText, 
  Shield, 
  Clock, 
  TrendingUp, 
  Users,
  CheckCircle,
  AlertTriangle
} from "lucide-react"

export function PreAuthFeatures() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze procedure codes, payer policies, and historical data to predict authorization outcomes.",
      color: "sage"
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description: "Automatically extract and validate clinical documentation, ensuring all required information is present and accurate.",
      color: "terracotta"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify potential denial risks and provide actionable recommendations to improve approval chances.",
      color: "bronze"
    },
    {
      icon: Clock,
      title: "Real-time Processing",
      description: "Get instant feedback on authorization viability with detailed coverage analysis and next steps.",
      color: "sage"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track approval rates, processing times, and identify patterns to optimize your authorization workflow.",
      color: "terracotta"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share insights and recommendations with your team to ensure consistent, high-quality submissions.",
      color: "bronze"
    }
  ]

  const benefits = [
    "Reduce authorization denials by up to 40%",
    "Cut processing time by 60%",
    "Improve first-pass approval rates",
    "Enhance revenue cycle efficiency",
    "Provide better patient experience",
    "Ensure compliance with payer requirements"
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-none w-full px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-charcoal-900 mb-6 font-satoshi">
              Intelligent Pre-Authorization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-satoshi">
              Leverage AI to transform your medical authorization process with predictive insights and automated analysis.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-${feature.color}-100 p-3 rounded-full w-fit mb-6`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4 font-satoshi">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-satoshi">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-sage-100"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl xs:text-3xl font-bold text-charcoal-900 mb-4 font-satoshi">
                Proven Results
              </h3>
              <p className="text-lg text-gray-600 font-satoshi">
                Organizations using our AI assistant have achieved significant improvements in their authorization processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-satoshi">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 