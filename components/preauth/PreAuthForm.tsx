"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  FileText, 
  Upload, 
  Brain, 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  Shield,
  TrendingUp
} from "lucide-react"

export function PreAuthForm() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const [formData, setFormData] = useState({
    procedureCode: "",
    procedureDescription: "",
    payer: "",
    patientAge: "",
    diagnosis: "",
    documents: [] as File[]
  })

  const payers = [
    "Aetna",
    "Anthem Blue Cross",
    "Blue Cross Blue Shield",
    "Cigna",
    "Humana",
    "Kaiser Permanente",
    "Medicare",
    "Medicaid",
    "UnitedHealthcare",
    "Other"
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ...files]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsAnalyzing(true)
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockResult = {
        riskLevel: "Low",
        approvalProbability: 85,
        estimatedProcessingTime: "3-5 business days",
        requiredDocuments: [
          "Clinical notes",
          "Imaging results",
          "Lab reports"
        ],
        recommendations: [
          "Include detailed clinical justification",
          "Ensure all supporting documentation is complete",
          "Consider peer-to-peer review if needed"
        ],
        coverageInsights: {
          covered: true,
          limitations: "May require prior authorization for certain modifiers",
          notes: "Procedure appears to meet medical necessity criteria"
        }
      }
      
      setAnalysisResult(mockResult)
      setIsAnalyzing(false)
    }, 3000)
  }

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low": return "text-green-600 bg-green-100"
      case "medium": return "text-yellow-600 bg-yellow-100"
      case "high": return "text-red-600 bg-red-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <section id="preauth-form" className="py-24 bg-white">
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
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-charcoal-900 mb-6 font-inter">
              Check Authorization Viability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              Enter your procedure details and let our AI analyze the authorization requirements and potential outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg border-sage-100">
                <CardHeader>
                  <CardTitle className="text-2xl font-inter text-charcoal-900 flex items-center">
                    <FileText className="mr-3 h-6 w-6 text-sage-600" />
                    Procedure Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* CPT Code */}
                    <div className="space-y-2">
                      <Label htmlFor="procedureCode" className="text-sm font-medium font-inter">
                        CPT Code
                      </Label>
                      <Input
                        id="procedureCode"
                        placeholder="e.g., 99213"
                        value={formData.procedureCode}
                        onChange={(e) => setFormData(prev => ({ ...prev, procedureCode: e.target.value }))}
                        className="font-inter"
                      />
                    </div>

                    {/* Procedure Description */}
                    <div className="space-y-2">
                      <Label htmlFor="procedureDescription" className="text-sm font-medium font-inter">
                        Procedure Description
                      </Label>
                      <Textarea
                        id="procedureDescription"
                        placeholder="Describe the procedure in detail..."
                        value={formData.procedureDescription}
                        onChange={(e) => setFormData(prev => ({ ...prev, procedureDescription: e.target.value }))}
                        className="font-inter"
                        rows={3}
                      />
                    </div>

                    {/* Payer Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="payer" className="text-sm font-medium font-inter">
                        Insurance Payer
                      </Label>
                      <Select value={formData.payer} onValueChange={(value) => setFormData(prev => ({ ...prev, payer: value }))}>
                        <SelectTrigger className="font-inter">
                          <SelectValue placeholder="Select insurance payer" />
                        </SelectTrigger>
                        <SelectContent>
                          {payers.map((payer) => (
                            <SelectItem key={payer} value={payer}>
                              {payer}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Patient Age */}
                    <div className="space-y-2">
                      <Label htmlFor="patientAge" className="text-sm font-medium font-inter">
                        Patient Age
                      </Label>
                      <Input
                        id="patientAge"
                        type="number"
                        placeholder="e.g., 45"
                        value={formData.patientAge}
                        onChange={(e) => setFormData(prev => ({ ...prev, patientAge: e.target.value }))}
                        className="font-inter"
                      />
                    </div>

                    {/* Diagnosis */}
                    <div className="space-y-2">
                      <Label htmlFor="diagnosis" className="text-sm font-medium font-inter">
                        Primary Diagnosis (ICD-10)
                      </Label>
                      <Input
                        id="diagnosis"
                        placeholder="e.g., M79.3 - Sciatica"
                        value={formData.diagnosis}
                        onChange={(e) => setFormData(prev => ({ ...prev, diagnosis: e.target.value }))}
                        className="font-inter"
                      />
                    </div>

                    {/* Document Upload */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium font-inter">
                        Supporting Documents
                      </Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <p className="text-sm text-gray-600 mb-2 font-inter">
                          Upload clinical notes, imaging, lab reports, etc.
                        </p>
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <label htmlFor="file-upload">
                          <Button type="button" variant="outline" className="font-inter">
                            Choose Files
                          </Button>
                        </label>
                      </div>
                      {formData.documents.length > 0 && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-600 font-inter">Uploaded files:</p>
                          <ul className="text-sm text-gray-500 mt-1">
                            {formData.documents.map((file, index) => (
                              <li key={index} className="font-inter">{file.name}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isAnalyzing}
                      className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-inter font-semibold py-3"
                    >
                      {isAnalyzing ? (
                        <>
                          <Brain className="mr-2 h-5 w-5 animate-pulse" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Shield className="mr-2 h-5 w-5" />
                          Check Authorization Viability
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {!analysisResult ? (
                <Card className="shadow-lg border-sage-100 h-full">
                  <CardContent className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <Brain className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                      <p className="text-gray-500 font-inter">
                        Enter procedure details and submit to get AI-powered authorization insights.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {/* Risk Assessment */}
                  <Card className="shadow-lg border-sage-100">
                    <CardHeader>
                      <CardTitle className="text-xl font-inter text-charcoal-900 flex items-center">
                        <Shield className="mr-3 h-5 w-5 text-sage-600" />
                        Risk Assessment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium font-inter">Risk Level:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold font-inter ${getRiskColor(analysisResult.riskLevel)}`}>
                          {analysisResult.riskLevel}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium font-inter">Approval Probability:</span>
                        <span className="text-lg font-bold text-sage-600 font-inter">
                          {analysisResult.approvalProbability}%
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Processing Time */}
                  <Card className="shadow-lg border-sage-100">
                    <CardHeader>
                      <CardTitle className="text-xl font-inter text-charcoal-900 flex items-center">
                        <Clock className="mr-3 h-5 w-5 text-terracotta-600" />
                        Processing Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold text-charcoal-900 font-inter">
                        {analysisResult.estimatedProcessingTime}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Coverage Insights */}
                  <Card className="shadow-lg border-sage-100">
                    <CardHeader>
                      <CardTitle className="text-xl font-inter text-charcoal-900 flex items-center">
                        <CheckCircle className="mr-3 h-5 w-5 text-bronze-600" />
                        Coverage Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-inter">Covered under plan</span>
                        </div>
                        <p className="text-sm text-gray-600 font-inter">
                          {analysisResult.coverageInsights.notes}
                        </p>
                        {analysisResult.coverageInsights.limitations && (
                          <div className="bg-yellow-50 p-3 rounded-lg">
                            <p className="text-sm text-yellow-800 font-inter">
                              <strong>Note:</strong> {analysisResult.coverageInsights.limitations}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recommendations */}
                  <Card className="shadow-lg border-sage-100">
                    <CardHeader>
                      <CardTitle className="text-xl font-inter text-charcoal-900 flex items-center">
                        <TrendingUp className="mr-3 h-5 w-5 text-sage-600" />
                        Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {analysisResult.recommendations.map((rec: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-sage-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 font-inter">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 