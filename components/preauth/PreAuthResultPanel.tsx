"use client"

import { MalpracticeFlagNotice } from "./MalpracticeFlagNotice"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Shield } from "lucide-react"

// Mock output data
const mockResult = {
  risk: "High", // Low | Moderate | High
  weaknesses: [
    "Missing clinical notes",
    "Outdated lab results",
    "No prior authorization on file"
  ],
  malpracticeRelevant: true,
}

export function PreAuthResultPanel() {
  return (
    <div className="mt-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-sage-100">
        <div className="flex items-center mb-6 gap-4">
          <Shield className="h-7 w-7 text-terracotta-600" />
          <h2 className="text-2xl font-bold font-satoshi text-charcoal-900">AI Results</h2>
        </div>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-medium text-gray-700">Risk of Denial:</span>
          {mockResult.risk === "Low" && <Badge className="bg-green-100 text-green-700">Low</Badge>}
          {mockResult.risk === "Moderate" && <Badge className="bg-yellow-100 text-yellow-800">Moderate</Badge>}
          {mockResult.risk === "High" && <Badge className="bg-red-100 text-red-700">High</Badge>}
        </div>
        <div className="mb-4">
          <span className="font-medium text-gray-700">Justification Weaknesses:</span>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            {mockResult.weaknesses.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </div>
        {mockResult.malpracticeRelevant && <MalpracticeFlagNotice />}
        <div className="mt-8 text-xs text-gray-500 text-center">
          <CheckCircle className="inline mr-1 text-sage-600" /> HIPAA-safe AI. Backed by medical policy data. No data stored without consent.
        </div>
      </div>
    </div>
  )
} 