import React from "react";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertTriangle, RefreshCcw, Stethoscope, Bot, FileText } from 'lucide-react';

// Define the step type
interface Step {
  label: string;
  icon: React.ReactNode;
  color: string;
  desc: string;
  outcome?: boolean;
  loop?: boolean;
}

const stepsWith: Step[] = [
  {
    label: 'Patient needs diagnostic test/treatment',
    icon: <Stethoscope className="w-8 h-8 text-gammalex-neon" />, 
    color: 'bg-gammalex-purple-dark/80',
    desc: 'Care journey begins',
  },
  {
    label: 'Doctor orders procedure',
    icon: <FileText className="w-8 h-8 text-gammalex-neon" />, 
    color: 'bg-gammalex-purple-dark/80',
    desc: 'Order placed',
  },
  {
    label: 'GammaLex AI Copilot reviews: policy, medical necessity, risk',
    icon: <Bot className="w-8 h-8 text-gammalex-neon" />, 
    color: 'bg-gammalex-purple-dark/80 border border-gammalex-purple/30',
    desc: 'AI flags issues before submission',
  },
  {
    label: 'Insurance reviews submission',
    icon: <FileText className="w-8 h-8 text-gammalex-neon" />, 
    color: 'bg-gammalex-purple-dark/80',
    desc: 'Payer review',
  },
  {
    label: 'Approved',
    icon: <CheckCircle className="w-8 h-8 text-gammalex-neon" />, 
    color: 'bg-gammalex-purple-dark/80 border border-gammalex-neon',
    desc: 'Patient receives care',
    outcome: true,
  },
  {
    label: 'Denied',
    icon: <AlertTriangle className="w-8 h-8 text-gammalex-neon" />, 
    color: 'bg-gammalex-purple-dark/80 border border-gammalex-neon',
    desc: 'GammaLex flags issues, provides support',
    outcome: true,
  },
  {
    label: 'Resubmit with GammaLex',
    icon: <RefreshCcw className="w-8 h-8 text-gammalex-neon" />, 
    color: 'bg-gammalex-purple-dark/80 border border-gammalex-purple/30',
    desc: 'Improved chance of approval',
    loop: true,
  },
];

const stepsWithout: Step[] = [
  {
    label: 'Blind submission',
    icon: <FileText className="w-8 h-8 text-gammalex-neon" />, 
    color: 'bg-gammalex-purple-dark/80',
    desc: 'No AI review',
  },
  {
    label: 'Denial',
    icon: <AlertTriangle className="w-8 h-8 text-gammalex-neon" />, 
    color: 'bg-gammalex-purple-dark/80 border border-gammalex-neon',
    desc: 'Missed risk, delayed care',
  },
  {
    label: 'Appeal',
    icon: <RefreshCcw className="w-8 h-8 text-gammalex-neon" />, 
    color: 'bg-gammalex-purple-dark/80 border border-gammalex-purple/30',
    desc: 'Manual, slow process',
  },
  {
    label: 'Delay',
    icon: <AlertTriangle className="w-8 h-8 text-gammalex-neon" />, 
    color: 'bg-gammalex-purple-dark/80 border border-gammalex-neon',
    desc: 'Patient waits',
  },
];

const flowVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
};

export default function GammaLexCareFlow() {
  const [withGammaLex, setWithGammaLex] = useState(true);
  const steps = withGammaLex ? stepsWith : stepsWithout;

  return (
    <section className="w-full flex flex-col items-center py-16 px-2 sm:px-0 bg-gradient-to-b from-gammalex-purple-dark/80 via-black/90 to-black/95 relative">
      <div className="flex justify-center mb-8 gap-4">
        <button
          className={`px-6 py-2 rounded-full transition-all duration-200 shadow-sm border text-lg ${withGammaLex ? 'bg-gammalex-purple gradient-text neon-text border-gammalex-purple' : 'glass-dark text-gammalex-neon border-gammalex-purple'}`}
          onClick={() => setWithGammaLex(true)}
        >
          With GammaLex
        </button>
        <button
          className={`px-6 py-2 rounded-full transition-all duration-200 shadow-sm border text-lg ${!withGammaLex ? 'bg-gammalex-purple gradient-text neon-text border-gammalex-purple' : 'glass-dark text-gammalex-neon border-gammalex-purple'}`}
          onClick={() => setWithGammaLex(false)}
        >
          Without GammaLex
        </button>
      </div>
      <h2 className="text-3xl sm:text-4xl font-inter text-center gradient-text neon-text mb-12 max-w-2xl mx-auto">
        How GammaLex helps prevent medical denials
      </h2>
      {/* Flow: horizontal on desktop, vertical on mobile */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 max-w-6xl mx-auto relative">
        <AnimatePresence initial={false} mode="wait">
          {steps.map((step, i) => (
            <motion.div
              key={step.label + withGammaLex}
              variants={flowVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`flex flex-col items-center justify-center text-center rounded-3xl neon-glow glass-dark px-6 py-8 min-w-[180px] max-w-xs relative border border-gammalex-purple/30 ${step.outcome ? 'border-2 border-gammalex-neon' : ''}`}
              style={{ zIndex: step.loop ? 2 : 1 }}
            >
              <div className="mb-3">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl neon-glow" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%)' }}>{step.icon}</span>
              </div>
              <div className="gradient-text neon-text text-lg sm:text-xl mb-1">{step.label}</div>
              <div className="text-gammalex-neon text-base mb-1">{step.desc}</div>
              {/* Animated arrow to next step */}
              {i < steps.length - 1 && (
                <motion.div
                  className="absolute md:top-1/2 md:right-[-32px] md:left-auto md:translate-y-[-50%] md:translate-x-0 left-1/2 bottom-[-32px] md:bottom-auto md:w-8 w-8 h-8 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.3 }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <defs>
                      <linearGradient id="arrow-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8b5cf6" />
                        <stop offset="1" stopColor="#c084fc" />
                      </linearGradient>
                    </defs>
                    {withGammaLex ? (
                      <>
                        <path d="M8 16h16" stroke="url(#arrow-gradient)" strokeWidth="3" strokeLinecap="round" className="hidden md:block" />
                        <path d="M16 8v16" stroke="url(#arrow-gradient)" strokeWidth="3" strokeLinecap="round" className="md:hidden" />
                        <path d="M24 16l-4-4m4 4l-4 4" stroke="url(#arrow-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="hidden md:block" />
                        <path d="M16 24l-4-4m4 4l4-4" stroke="url(#arrow-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:hidden" />
                      </>
                    ) : (
                      <>
                        <path d="M8 16h16" stroke="url(#arrow-gradient)" strokeWidth="3" strokeLinecap="round" className="hidden md:block" />
                        <path d="M16 8v16" stroke="url(#arrow-gradient)" strokeWidth="3" strokeLinecap="round" className="md:hidden" />
                        <path d="M24 16l-4-4m4 4l-4 4" stroke="url(#arrow-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="hidden md:block" />
                        <path d="M16 24l-4-4m4 4l4-4" stroke="url(#arrow-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:hidden" />
                      </>
                    )}
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Sticky CTA */}
      <div className="fixed bottom-4 left-0 w-full flex justify-center z-50 pointer-events-none">
        <div className="pointer-events-auto bg-gammalex-purple gradient-text neon-text px-8 py-4 rounded-2xl shadow-lg text-lg flex items-center gap-2 hover:bg-gammalex-purple/90 transition-all cursor-pointer">
          Try the GammaLex AI Copilot →
        </div>
      </div>
    </section>
  );
} 