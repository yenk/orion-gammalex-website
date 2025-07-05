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
    icon: <FileText className="w-8 h-8" />,
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
    icon: <Bot className="w-8 h-8" />,
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
    icon: <Shield className="w-8 h-8" />,
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
    icon: <AlertTriangle className="w-8 h-8" />,
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
    icon: <CheckCircle className="w-8 h-8" />,
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
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const nextStep = () => {
    setCurrentStep(prev => prev < steps.length ? prev + 1 : 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev > 1 ? prev - 1 : steps.length);
  };

  const goToStep = (stepId: number) => {
    setCurrentStep(stepId);
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
    <section className="w-full flex flex-col items-center py-16 px-2 sm:px-0 bg-gradient-to-b from-sage-50/80 to-white">
      <h2 className="text-3xl sm:text-4xl font-inter font-normal text-center text-slate-900 mb-12 max-w-2xl mx-auto">
        GammaLex AI Process: Step-by-Step
      </h2>
      
      <div className="w-full max-w-6xl mx-auto">
        {/* Step Indicators */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-white rounded-2xl p-2 shadow-lg border border-sage-100">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => goToStep(step.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                  currentStep === step.id
                    ? 'bg-sage-100 text-slate-900 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-sage-50'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep === step.id ? 'bg-gammalex-orange text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {step.id}
                </div>
                <span className="hidden sm:inline">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
              isAutoPlay 
                ? 'bg-gammalex-orange text-white' 
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-sage-50'
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${isAutoPlay ? 'bg-white' : 'bg-gammalex-orange'}`} />
            {isAutoPlay ? 'Auto-play On' : 'Auto-play Off'}
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-sage-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row items-center gap-8"
            >
              {/* Left: Icon and Navigation */}
              <div className="flex flex-col items-center lg:items-start gap-6">
                <div 
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: currentStepData?.color }}
                >
                  {currentStepData?.icon}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={prevStep}
                    className="p-2 rounded-lg bg-sage-100 text-slate-700 hover:bg-sage-200 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextStep}
                    className="p-2 rounded-lg bg-gammalex-orange text-white hover:bg-gammalex-orange/90 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {currentStepData?.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-4">
                    {currentStepData?.subtitle}
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    {currentStepData?.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {currentStepData?.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 bg-white rounded-2xl p-4 shadow-lg border border-sage-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-700">Progress</span>
            <span className="text-sm text-slate-600">{currentStep} of {steps.length}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <motion.div
              className="bg-gammalex-orange h-2 rounded-full"
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
