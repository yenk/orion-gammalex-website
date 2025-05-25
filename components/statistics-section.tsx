"use client"

import { motion } from "framer-motion"
import { ExternalLink, TrendingDown, Clock, DollarSign, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function StatisticsSection() {
  const statistics = [
    {
      icon: TrendingDown,
      number: "77%",
      title: "Claims Closed Without Payment",
      description: "of medical malpractice claims are closed without payment to plaintiffs",
      whyItMatters:
        "The vast majority of cases consume resources without generating revenue, making case selection critical for firm profitability.",
      howGammaLexHelps:
        "AI-powered viability prediction identifies weak cases early, allowing firms to focus resources on winnable claims.",
      source: "National Practitioner Data Bank",
      citation: "U.S. Department of Health and Human Services, NPDB 2023 Annual Report",
      sourceUrl: "https://www.npdb.hrsa.gov/resources/reports/annualReports.jsp",
    },
    {
      icon: Clock,
      number: "31 Months",
      title: "Average Resolution Time",
      description: "from claim filing to final resolution",
      whyItMatters: "Extended litigation timelines tie up firm resources and delay compensation for valid claims.",
      howGammaLexHelps:
        "Automated document generation and case timeline creation accelerate the litigation process significantly.",
      source: "Diederich Healthcare",
      citation: "Medical Malpractice Payout Analysis, Diederich Healthcare 2022",
      sourceUrl: "https://www.diederichlaw.com/medical-malpractice-statistics/",
    },
    {
      icon: DollarSign,
      number: "$348K",
      title: "Median Successful Payout",
      description: "median amount for successful malpractice claims",
      whyItMatters:
        "Significant payouts justify case investment, but only for viable claims with strong merit and proper evaluation.",
      howGammaLexHelps:
        "Risk scoring algorithms help prioritize cases with higher settlement potential and stronger legal foundations.",
      source: "National Practitioner Data Bank",
      citation: "NPDB 2023 Annual Report - Payment Analysis",
      sourceUrl: "https://www.npdb.hrsa.gov/resources/reports/annualReports.jsp",
    },
    {
      icon: Scale,
      number: "4%",
      title: "Cases That Reach Trial",
      description: "of filed malpractice cases actually proceed to trial verdict",
      whyItMatters: "Most cases settle or are dismissed, making early case assessment crucial for resource allocation.",
      howGammaLexHelps:
        "Smart triage system routes cases to appropriate resolution paths based on strength and complexity analysis.",
      source: "Bureau of Justice Statistics",
      citation: "U.S. Department of Justice, Civil Justice Survey of State Courts, 2019",
      sourceUrl:
        "https://bjs.ojp.gov/library/publications/civil-justice-survey-state-courts-2019-civil-bench-and-jury-trials-state",
    },
  ]

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal-900 mb-6">
            Why It Matters: <span className="text-olive-600">The Data Behind the Crisis</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Medical malpractice litigation faces systemic inefficiencies. Here's how GammaLex addresses each challenge
            with AI-powered solutions.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  {/* Icon and Number */}
                  <div className="flex items-center mb-6">
                    <div className="bg-olive-100 p-3 rounded-lg mr-4">
                      <stat.icon className="w-8 h-8 text-olive-700" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-olive-600">{stat.number}</div>
                      <div className="text-lg font-semibold text-charcoal-900">{stat.title}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 mb-6">{stat.description}</p>

                  {/* Why It Matters */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-charcoal-900 mb-2">Why It Matters:</h4>
                    <p className="text-sm text-neutral-700">{stat.whyItMatters}</p>
                  </div>

                  {/* How GammaLex Helps */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-olive-700 mb-2">How GammaLex Helps:</h4>
                    <p className="text-sm text-neutral-700">{stat.howGammaLexHelps}</p>
                  </div>

                  {/* Citation */}
                  <div className="border-t border-neutral-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-neutral-500 mb-1">Source: {stat.source}</p>
                        <p className="text-xs text-neutral-400">{stat.citation}</p>
                      </div>
                      {stat.sourceUrl !== "#" && (
                        <a
                          href={stat.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-olive-600 hover:text-olive-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-olive-800 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl mb-4">These inefficiencies cost firms millions annually.</h3>
            <p className="text-olive-200 text-lg mb-6">
              GammaLex Counsel transforms how you evaluate, triage, and build medical malpractice cases.
            </p>
            <motion.button
              className="bg-cream-500 text-charcoal-900 px-8 py-3 rounded-lg font-semibold hover:bg-cream-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See How We're Different
            </motion.button>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xs text-neutral-400 max-w-3xl mx-auto">
            Statistics compiled from publicly available government reports, medical liability insurance data, and
            peer-reviewed legal research. Individual case outcomes may vary. GammaLex provides analytical tools to
            support legal decision-making but does not guarantee specific results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
