"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const payers = [
  "Aetna", "Anthem Blue Cross", "Blue Cross Blue Shield", "Cigna", "Humana", "Kaiser Permanente", "Medicare", "Medicaid", "UnitedHealthcare", "Other"
]

export function PreAuthStepperForm() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    procedure: "",
    diagnosis: "",
    payer: "",
    coverageDoc: null as File | null,
    evidence: null as File | null,
  })

  return (
    <div id="preauth-form" className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8 flex justify-center">
        <div className="flex gap-4">
          {["Procedure Info", "Insurer Info", "Upload Evidence"].map((label, i) => (
            <div key={label} className={`flex flex-col items-center ${step === i ? "text-terracotta-600" : "text-gray-400"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${step === i ? "border-terracotta-500 bg-terracotta-100" : "border-gray-300 bg-gray-100"}`}>{i+1}</div>
              <span className="text-xs mt-1 font-satoshi">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step1" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.3}}>
            <div className="space-y-4">
              <Label htmlFor="procedure">CPT/Procedure</Label>
              <Input id="procedure" value={form.procedure} onChange={e=>setForm(f=>({...f, procedure:e.target.value}))} placeholder="e.g. 99213 or Colonoscopy" />
              <Label htmlFor="diagnosis">Diagnosis Code</Label>
              <Input id="diagnosis" value={form.diagnosis} onChange={e=>setForm(f=>({...f, diagnosis:e.target.value}))} placeholder="e.g. M79.3" />
            </div>
            <div className="flex justify-end mt-8">
              <Button onClick={()=>setStep(1)} disabled={!form.procedure}>Next</Button>
            </div>
          </motion.div>
        )}
        {step === 1 && (
          <motion.div key="step2" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.3}}>
            <div className="space-y-4">
              <Label>Payer</Label>
              <Select value={form.payer} onValueChange={v=>setForm(f=>({...f, payer:v}))}>
                <SelectTrigger><SelectValue placeholder="Select payer" /></SelectTrigger>
                <SelectContent>
                  {payers.map(p=>(<SelectItem key={p} value={p}>{p}</SelectItem>))}
                </SelectContent>
              </Select>
              <Label htmlFor="coverageDoc">Or upload coverage doc (PDF)</Label>
              <Input id="coverageDoc" type="file" accept=".pdf" onChange={e=>setForm(f=>({...f, coverageDoc:e.target.files?.[0]||null}))} />
            </div>
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={()=>setStep(0)}>Back</Button>
              <Button onClick={()=>setStep(2)} disabled={!form.payer && !form.coverageDoc}>Next</Button>
            </div>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="step3" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.3}}>
            <div className="space-y-4">
              <Label htmlFor="evidence">Upload Evidence (PDF, optional)</Label>
              <Input id="evidence" type="file" accept=".pdf" onChange={e=>setForm(f=>({...f, evidence:e.target.files?.[0]||null}))} />
            </div>
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={()=>setStep(1)}>Back</Button>
              <Button type="submit">Run AI Check</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 