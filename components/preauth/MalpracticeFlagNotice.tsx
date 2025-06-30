"use client"

import { AlertTriangle } from "lucide-react"

export function MalpracticeFlagNotice() {
  return (
    <div className="flex items-center gap-3 bg-bronze-100 border border-bronze-300 rounded-lg px-4 py-3 my-4">
      <AlertTriangle className="h-5 w-5 text-terracotta-600" />
      <span className="font-semibold text-bronze-800">Legal Risk Detected:</span>
      <span className="text-bronze-700">This case may be malpractice-relevant. Review with legal counsel.</span>
    </div>
  )
} 