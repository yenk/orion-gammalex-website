import React, { useState } from 'react';
import { Bot, FileText, CheckCircle, AlertTriangle, Settings, MessageCircle, Sparkles, Shield, User, UserCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  features: string[];
}

const steps: Step[] = [
  {
    id: 1,
    title: "Data Ingestion",
    subtitle: "Multi-source input processing",
    icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "#6366f1",
    description: "GammaLex ingests clinical scenarios, medical documents, and payer policies from multiple sources.",
    features: [
      "Clinical scenarios and patient data",
      "Medical documents and reports",
      "Payer policies and coverage rules",
      "Historical denial patterns"
    ]
  },
  {
    id: 2,
    title: "AI Processing",
    subtitle: "Advanced NLP & legal intelligence",
    icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "#f59e0b",
    description: "Advanced AI processes data through NLP analysis, legal intelligence, and risk assessment.",
    features: [
      "Natural language processing",
      "Legal compliance checking",
      "Risk assessment algorithms",
      "Real-time analysis"
    ]
  },
  {
    id: 3,
    title: "Source Grounding",
    subtitle: "Traceable to policy & law",
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "#10b981",
    description: "Every output is traceable to specific payer rules, coverage policies, or case law.",
    features: [
      "Policy citation tracking",
      "Legal precedent mapping",
      "Audit trail generation",
      "Compliance verification"
    ]
  },
  {
    id: 4,
    title: "Risk Detection",
    subtitle: "Flag vulnerabilities before denials",
    icon: <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "#ef4444",
    description: "Identifies potential denial risks and legal vulnerabilities before they become issues.",
    features: [
      "Denial risk scoring",
      "Legal violation detection",
      "Bias identification",
      "Compliance gap analysis"
    ]
  },
  {
    id: 5,
    title: "Actionable Output",
    subtitle: "Clear guidance for next steps",
    icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "#22c55e",
    description: "Provides clear, actionable guidance for approval, revision, or appeal strategies.",
    features: [
      "Approval likelihood scoring",
      "Documentation recommendations",
      "Appeal strategy guidance",
      "Compliance documentation"
    ]
  }
];

export default function GammaLexInteractiveStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const nextStep = () => {
    setCurrentStep(prev => prev < steps.length ? prev + 1 : 1);
    setIsAutoPlay(false); // Pause auto-play when user manually navigates
  };

  const prevStep = () => {
    setCurrentStep(prev => prev > 1 ? prev - 1 : steps.length);
    setIsAutoPlay(false); // Pause auto-play when user manually navigates
  };

  const goToStep = (stepId: number) => {
    setCurrentStep(stepId);
    setIsAutoPlay(false); // Pause auto-play when user manually selects a step
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentStep(prev => prev < steps.length ? prev + 1 : 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay, steps.length]);

  const currentStepData = steps.find(step => step.id === currentStep);

  return (
    <section className="w-full flex flex-col items-center py-10 sm:py-16 md:py-24 px-2 sm:px-8 bg-gradient-to-b from-gammalex-purple-dark/80 via-black/90 to-black/95">
      <h2 className="whitespace-nowrap overflow-x-auto text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter text-center gradient-text neon-text mb-10 sm:mb-14 md:mb-20 max-w-full mx-auto px-2 sm:px-4 leading-[1.2] pb-2">
        Inside the GammaLex Engine
      </h2>
      
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        {/* Step Indicators - Larger & Responsive */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-14">
          <div className="flex flex-nowrap justify-center items-center gap-2 sm:gap-4 glass-dark rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 shadow-2xl border border-gammalex-purple/30 w-full">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => goToStep(step.id)}
                className={`flex-1 flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl transition-all duration-200 min-w-0 flex-shrink-0 text-lg sm:text-xl md:text-2xl font-inter font-semibold ${
                  currentStep === step.id
                    ? 'bg-gammalex-purple/30 text-white neon-text shadow-lg'
                    : 'text-gammalex-neon hover:text-white hover:bg-gammalex-purple/10'
                }`}
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl flex-shrink-0 ${
                  currentStep === step.id ? 'bg-gammalex-purple neon-text' : 'bg-gammalex-purple-dark text-gammalex-neon'
                }`}>
                  {step.id}
                </div>
                <span className="hidden sm:inline text-base sm:text-lg md:text-xl gradient-text leading-tight break-words">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content - Larger & Responsive */}
        <div className="glass-dark rounded-3xl md:rounded-4xl neon-glow p-6 sm:p-10 md:p-14 lg:p-20 border border-gammalex-purple/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row lg:flex-row items-center gap-8 sm:gap-12 md:gap-16"
            >
              {/* Left: Icon and Navigation - Larger */}
              <div className="flex flex-col items-center md:items-start gap-6 sm:gap-8 md:gap-10">
                <div 
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl flex items-center justify-center neon-glow shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%)' }}
                >
                  {currentStepData?.icon}
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={prevStep}
                    className="p-3 sm:p-4 rounded-xl glass-dark text-gammalex-neon hover:bg-gammalex-purple/20 transition-colors text-xl sm:text-2xl"
                    aria-label="Previous step"
                  >
                    <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                  <button
                    onClick={nextStep}
                    className="p-3 sm:p-4 rounded-xl glass-dark text-gammalex-neon hover:bg-gammalex-purple/20 transition-colors text-xl sm:text-2xl"
                    aria-label="Next step"
                  >
                    <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                </div>
              </div>

              {/* Right: Content - Larger */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl gradient-text neon-text mb-4">
                    {currentStepData?.title}
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl text-gammalex-neon mb-4 sm:mb-6 md:mb-8">
                    {currentStepData?.subtitle}
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                    {currentStepData?.description}
                  </p>
                </div>
                <ul className="list-disc pl-8 space-y-4 text-white/80 text-lg sm:text-xl md:text-2xl">
                  {currentStepData?.features.map((feature, idx) => (
                    <li key={idx} className="gradient-text">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar - Larger & Responsive */}
        <div className="mt-8 sm:mt-10 md:mt-14 glass-dark rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gammalex-purple/30">
          <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
            <span className="text-lg sm:text-xl md:text-2xl font-medium text-white/90">Progress</span>
            <span className="text-lg sm:text-xl md:text-2xl text-white/60">{currentStep} of {steps.length}</span>
          </div>
          <div className="w-full bg-[#23232b] rounded-full h-0.5 sm:h-1 md:h-1.5">
            <motion.div
              className="bg-gammalex-orange h-0.5 sm:h-1 md:h-1.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
