"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Target, FileText, CheckCircle, User, Zap } from "lucide-react"

export function ViabilityPredictionDemo() {
  const [selectedCase, setSelectedCase] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [progress, setProgress] = useState(0)

  const caseTypes = [
    { value: "surgical", label: "Surgical Error - Wrong Site Surgery", score: 87, risk: "High Viability" },
    { value: "diagnosis", label: "Misdiagnosis - Delayed Cancer Detection", score: 72, risk: "Moderate Viability" },
    { value: "medication", label: "Medication Error - Wrong Dosage", score: 45, risk: "Low Viability" },
    { value: "birth", label: "Birth Injury - Cerebral Palsy", score: 91, risk: "High Viability" },
  ]

  const handleAnalyze = () => {
    if (!selectedCase) return

    setIsAnalyzing(true)
    setShowResults(false)
    setProgress(0)

    // Simulate AI analysis with progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsAnalyzing(false)
          setShowResults(true)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const selectedCaseData = caseTypes.find((c) => c.value === selectedCase)

  return (
    <div className="space-y-4">
      <div className="bg-cream-50 rounded-lg p-4 border border-cream-200">
        <h4 className="font-semibold text-charcoal-900 mb-3 flex items-center">
          <Brain className="w-4 h-4 mr-2 text-olive-600" />
          Case Analysis Input
        </h4>

        <Select value={selectedCase} onValueChange={setSelectedCase}>
          <SelectTrigger className="w-full mb-3">
            <SelectValue placeholder="Select a case scenario..." />
          </SelectTrigger>
          <SelectContent>
            {caseTypes.map((caseType) => (
              <SelectItem key={caseType.value} value={caseType.value}>
                {caseType.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={handleAnalyze}
          disabled={!selectedCase || isAnalyzing}
          className="w-full bg-olive-600 hover:bg-olive-700"
        >
          {isAnalyzing ? "Analyzing..." : "Analyze Case Viability"}
        </Button>
      </div>

      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-lg p-4 border border-neutral-200"
          >
            <div className="flex items-center mb-3">
              <Zap className="w-4 h-4 mr-2 text-copper-500 animate-pulse" />
              <span className="text-sm font-medium">AI Analysis in Progress</span>
            </div>
            <Progress value={progress} className="mb-2" />
            <p className="text-xs text-neutral-600">
              Analyzing medical records, precedent cases, and liability factors...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResults && selectedCaseData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg p-4 border border-neutral-200 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-charcoal-900">Viability Assessment</h4>
              <Badge
                variant={
                  selectedCaseData.score > 70 ? "default" : selectedCaseData.score > 50 ? "secondary" : "destructive"
                }
                className={
                  selectedCaseData.score > 70
                    ? "bg-green-100 text-green-800"
                    : selectedCaseData.score > 50
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                }
              >
                {selectedCaseData.risk}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Viability Score</span>
                <span className="text-2xl font-bold text-olive-600">{selectedCaseData.score}%</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-neutral-50 p-2 rounded">
                  <div className="font-medium text-charcoal-700">Settlement Probability</div>
                  <div className="text-olive-600">
                    {selectedCaseData.score > 70 ? "85%" : selectedCaseData.score > 50 ? "60%" : "25%"}
                  </div>
                </div>
                <div className="bg-neutral-50 p-2 rounded">
                  <div className="font-medium text-charcoal-700">Est. Timeline</div>
                  <div className="text-olive-600">
                    {selectedCaseData.score > 70 ? "18-24 mo" : selectedCaseData.score > 50 ? "24-36 mo" : "36+ mo"}
                  </div>
                </div>
              </div>

              <div className="text-xs text-neutral-600 bg-neutral-50 p-2 rounded">
                <strong>Key Factors:</strong> Medical standard deviation, expert testimony availability, damages
                quantification
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function SmartTriageDemo() {
  const [newCase, setNewCase] = useState({
    patientAge: "",
    caseType: "",
    severity: "",
  })
  const [isTriaging, setIsTriaging] = useState(false)
  const [triageResult, setTriageResult] = useState(null)

  const handleTriage = () => {
    if (!newCase.patientAge || !newCase.caseType || !newCase.severity) return

    setIsTriaging(true)

    setTimeout(() => {
      const specialists = {
        surgical: { name: "Dr. Sarah Martinez", specialty: "Surgical Malpractice", experience: "15 years" },
        diagnosis: { name: "Dr. Michael Chen", specialty: "Diagnostic Errors", experience: "12 years" },
        medication: { name: "Dr. Emily Rodriguez", specialty: "Pharmaceutical Liability", experience: "18 years" },
        birth: { name: "Dr. James Wilson", specialty: "Birth Injury", experience: "20 years" },
      }

      const priority =
        newCase.severity === "critical" ? "Urgent" : newCase.severity === "moderate" ? "Standard" : "Routine"

      setTriageResult({
        specialist: specialists[newCase.caseType] || specialists.surgical,
        priority,
        estimatedReview: priority === "Urgent" ? "2-4 hours" : priority === "Standard" ? "1-2 days" : "3-5 days",
        caseId: `GML-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      })
      setIsTriaging(false)
    }, 2000)
  }

  return (
    <div className="space-y-4">
      <div className="bg-cream-50 rounded-lg p-4 border border-cream-200">
        <h4 className="font-semibold text-charcoal-900 mb-3 flex items-center">
          <Target className="w-4 h-4 mr-2 text-olive-600" />
          New Case Intake
        </h4>

        <div className="space-y-3">
          <div>
            <label className="text-xs font-medium text-charcoal-700 block mb-1">Patient Age</label>
            <Input
              type="number"
              placeholder="Enter age"
              value={newCase.patientAge}
              onChange={(e) => setNewCase((prev) => ({ ...prev, patientAge: e.target.value }))}
              className="text-sm"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-charcoal-700 block mb-1">Case Type</label>
            <Select
              value={newCase.caseType}
              onValueChange={(value) => setNewCase((prev) => ({ ...prev, caseType: value }))}
            >
              <SelectTrigger className="text-sm">
                <SelectValue placeholder="Select case type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="surgical">Surgical Error</SelectItem>
                <SelectItem value="diagnosis">Misdiagnosis</SelectItem>
                <SelectItem value="medication">Medication Error</SelectItem>
                <SelectItem value="birth">Birth Injury</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-xs font-medium text-charcoal-700 block mb-1">Severity</label>
            <Select
              value={newCase.severity}
              onValueChange={(value) => setNewCase((prev) => ({ ...prev, severity: value }))}
            >
              <SelectTrigger className="text-sm">
                <SelectValue placeholder="Select severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="minor">Minor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleTriage}
            disabled={!newCase.patientAge || !newCase.caseType || !newCase.severity || isTriaging}
            className="w-full bg-olive-600 hover:bg-olive-700 text-sm"
          >
            {isTriaging ? "Routing Case..." : "Route to Specialist"}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isTriaging && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-lg p-4 border border-neutral-200"
          >
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-olive-600 mr-3"></div>
              <span className="text-sm">Analyzing case complexity and matching with specialists...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {triageResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg p-4 border border-neutral-200 shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-charcoal-900">Case Routed Successfully</h4>
              <Badge className="bg-green-100 text-green-800">
                <CheckCircle className="w-3 h-3 mr-1" />
                Assigned
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="bg-neutral-50 p-3 rounded">
                <div className="flex items-center mb-2">
                  <User className="w-4 h-4 mr-2 text-olive-600" />
                  <span className="font-medium text-sm">{triageResult.specialist.name}</span>
                </div>
                <div className="text-xs text-neutral-600">
                  {triageResult.specialist.specialty} • {triageResult.specialist.experience}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-neutral-50 p-2 rounded">
                  <div className="font-medium text-charcoal-700">Priority</div>
                  <div
                    className={`${triageResult.priority === "Urgent" ? "text-red-600" : triageResult.priority === "Standard" ? "text-yellow-600" : "text-green-600"}`}
                  >
                    {triageResult.priority}
                  </div>
                </div>
                <div className="bg-neutral-50 p-2 rounded">
                  <div className="font-medium text-charcoal-700">Est. Review</div>
                  <div className="text-olive-600">{triageResult.estimatedReview}</div>
                </div>
              </div>

              <div className="text-xs text-neutral-600 bg-neutral-50 p-2 rounded">
                <strong>Case ID:</strong> {triageResult.caseId}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function AIDraftingDemo() {
  const [documentType, setDocumentType] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")
  const [currentText, setCurrentText] = useState("")

  const documentTemplates = {
    timeline: {
      title: "Medical Timeline",
      content: `MEDICAL TIMELINE - CASE #GML-2024-001

January 15, 2024 - Initial Consultation
• Patient presents with chest pain and shortness of breath
• Vital signs: BP 140/90, HR 95, O2 Sat 96%
• Physician orders basic metabolic panel

January 16, 2024 - Follow-up Visit  
• Patient reports worsening symptoms
• EKG shows irregular rhythm patterns
• Physician prescribes beta-blockers, schedules stress test

January 22, 2024 - Stress Test
• Test reveals significant cardiac abnormalities
• Cardiologist consultation recommended
• Patient experiences chest pain during test

February 1, 2024 - Cardiac Event
• Patient suffers myocardial infarction
• Emergency surgery required
• Delayed diagnosis contributed to severity

CRITICAL TIMELINE GAPS:
• 7-day delay between initial symptoms and stress test
• Failure to recognize urgent cardiac indicators
• Standard of care breach: immediate cardiology referral indicated`,
    },
    summary: {
      title: "Case Summary",
      content: `EXECUTIVE CASE SUMMARY

Case Overview:
Medical malpractice claim involving delayed diagnosis of acute myocardial infarction resulting in permanent cardiac damage.

Key Facts:
• 58-year-old male patient with classic cardiac symptoms
• Initial presentation: January 15, 2024
• Delayed diagnosis: 17 days
• Resulting injury: 40% reduction in cardiac function

Liability Analysis:
• Standard of care required immediate cardiac workup
• Defendant physician failed to recognize urgent indicators
• Expert testimony confirms deviation from accepted practice

Damages Assessment:
• Medical expenses: $180,000
• Lost wages: $95,000 (ongoing)
• Pain and suffering: Significant
• Future medical care: $250,000 estimated

Strength Assessment: HIGH VIABILITY
• Clear causation between delay and injury
• Strong expert witness support
• Well-documented medical records
• Significant economic and non-economic damages`,
    },
    outline: {
      title: "Legal Brief Outline",
      content: `LEGAL BRIEF OUTLINE - MEDICAL MALPRACTICE

I. STATEMENT OF THE CASE
   A. Procedural History
   B. Nature of Claims
   C. Relief Sought

II. STATEMENT OF FACTS
   A. Patient Background and Medical History
   B. Timeline of Medical Care
   C. Critical Decision Points
   D. Resulting Injuries

III. STANDARD OF CARE ANALYSIS
   A. Applicable Medical Standards
   B. Expert Witness Testimony
   C. Deviation from Standard Practice
   D. Causation Analysis

IV. DAMAGES ASSESSMENT
   A. Economic Damages
      1. Medical Expenses
      2. Lost Income
      3. Future Care Costs
   B. Non-Economic Damages
      1. Pain and Suffering
      2. Loss of Enjoyment
      3. Emotional Distress

V. LEGAL ARGUMENTS
   A. Negligence Claims
   B. Informed Consent Issues
   C. Institutional Liability

VI. CONCLUSION AND PRAYER FOR RELIEF`,
    },
  }

  const handleGenerate = () => {
    if (!documentType) return

    setIsGenerating(true)
    setGeneratedContent("")
    setCurrentText("")

    const template = documentTemplates[documentType]

    setTimeout(() => {
      setIsGenerating(false)
      setGeneratedContent(template.content)

      // Typewriter effect
      let index = 0
      const typeInterval = setInterval(() => {
        if (index < template.content.length) {
          setCurrentText(template.content.slice(0, index + 1))
          index++
        } else {
          clearInterval(typeInterval)
        }
      }, 20)
    }, 1500)
  }

  return (
    <div className="space-y-4">
      <div className="bg-cream-50 rounded-lg p-4 border border-cream-200">
        <h4 className="font-semibold text-charcoal-900 mb-3 flex items-center">
          <FileText className="w-4 h-4 mr-2 text-olive-600" />
          Document Generator
        </h4>

        <div className="space-y-3">
          <Select value={documentType} onValueChange={setDocumentType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select document type..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="timeline">Medical Timeline</SelectItem>
              <SelectItem value="summary">Case Summary</SelectItem>
              <SelectItem value="outline">Legal Brief Outline</SelectItem>
            </SelectContent>
          </Select>

          <Button
            onClick={handleGenerate}
            disabled={!documentType || isGenerating}
            className="w-full bg-olive-600 hover:bg-olive-700"
          >
            {isGenerating ? "Generating..." : "Generate Document"}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-lg p-4 border border-neutral-200"
          >
            <div className="flex items-center mb-3">
              <div className="animate-pulse w-2 h-2 bg-olive-600 rounded-full mr-2"></div>
              <span className="text-sm font-medium">AI Drafting in Progress</span>
            </div>
            <div className="text-xs text-neutral-600">
              Analyzing case facts, legal precedents, and generating structured content...
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg border border-neutral-200 shadow-lg"
          >
            <div className="bg-neutral-50 px-4 py-2 rounded-t-lg border-b border-neutral-200">
              <h4 className="font-semibold text-charcoal-900 text-sm">{documentTemplates[documentType]?.title}</h4>
            </div>
            <div className="p-4">
              <pre className="text-xs text-charcoal-700 whitespace-pre-wrap font-mono leading-relaxed">
                {currentText}
                {currentText.length < generatedContent.length && <span className="animate-pulse">|</span>}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
