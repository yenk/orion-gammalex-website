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
    <section className="w-full flex flex-col items-center py-6 sm:py-8 md:py-16 px-2 sm:px-4 bg-gradient-to-b from-sage-50/80 to-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter font-normal text-center text-slate-900 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-2 sm:px-4">
        Inside the GammaLex Engine
      </h2>
      
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        {/* Step Indicators - Mobile Optimized */}
        <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
          <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 md:p-3 shadow-lg border border-sage-100 max-w-full overflow-x-auto">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => goToStep(step.id)}
                className={`flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl transition-all duration-200 min-w-0 flex-shrink-0 ${
                  currentStep === step.id
                    ? 'bg-sage-100 text-slate-900 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-sage-50'
                }`}
              >
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  currentStep === step.id ? 'bg-gammalex-orange text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {step.id}
                </div>
                <span className="hidden sm:inline text-xs sm:text-sm md:text-base truncate max-w-16 sm:max-w-20 md:max-w-none">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content - Mobile Optimized */}
        <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-sage-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row lg:flex-row items-center gap-4 sm:gap-6 md:gap-8"
            >
              {/* Left: Icon and Navigation - Mobile Optimized */}
              <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4 md:gap-6">
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: currentStepData?.color }}
                >
                  {currentStepData?.icon}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={prevStep}
                    className="p-1.5 sm:p-2 rounded-lg bg-sage-100 text-slate-700 hover:bg-sage-200 transition-colors"
                    aria-label="Previous step"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={nextStep}
                    className="p-1.5 sm:p-2 rounded-lg bg-gammalex-orange text-white hover:bg-gammalex-orange/90 transition-colors"
                    aria-label="Next step"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Right: Content - Mobile Optimized */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-3 sm:mb-4 md:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    {currentStepData?.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-2 sm:mb-3 md:mb-4">
                    {currentStepData?.subtitle}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-slate-900 leading-relaxed">
                    {currentStepData?.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4 md:mt-6">
                  {currentStepData?.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm sm:text-base md:text-lg text-slate-900">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar - Mobile Optimized */}
        <div className="mt-4 sm:mt-6 md:mt-8 bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-lg border border-sage-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs sm:text-sm md:text-base font-medium text-slate-900">Progress</span>
            <span className="text-xs sm:text-sm md:text-base text-slate-600">{currentStep} of {steps.length}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-1.5 sm:h-2">
            <motion.div
              className="bg-gammalex-orange h-1.5 sm:h-2 rounded-full"
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
