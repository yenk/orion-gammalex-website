"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Scale, FileText, Shield } from "lucide-react"

function ViabilityScoring({ buttonClassName = "" }: { buttonClassName?: string }) {
  const [cpt, setCpt] = useState("77080")
  const [icd, setIcd] = useState("M81.0")
  const [note, setNote] = useState("Postmenopausal woman, history of fracture.")
  const [result, setResult] = useState<any>(null)
  function handleScore() {
    if (cpt === "99214" && note.toLowerCase().includes("no imaging")) {
      setResult({ likelihood: "Low", confidence: 0.55, red_flags: ["No imaging documented for high-complexity visit"] })
    } else if (cpt === "77080") {
      setResult({ likelihood: "High", confidence: 0.92, red_flags: [] })
    } else {
      setResult({ likelihood: "Medium", confidence: 0.75, red_flags: ["Missing prior auth history"] })
    }
  }
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <Input value={cpt} onChange={e=>setCpt(e.target.value)} placeholder="CPT Code" className="max-w-xs" />
        <Input value={icd} onChange={e=>setIcd(e.target.value)} placeholder="ICD-10 Code" className="max-w-xs" />
      </div>
      <Textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Brief Clinical Note" rows={2} />
      <Button onClick={handleScore} className={`w-full sm:w-auto ${buttonClassName}`}>Score Viability</Button>
      {result && (
        <div className="rounded-xl bg-sage-50 p-4 mt-2">
          <div className="text-lg font-bold mb-1">Approval Likelihood: {result.likelihood}</div>
          <div className="text-gray-700 mb-1">Confidence: {Math.round(result.confidence*100)}%</div>
          {result.red_flags.length ? (
            <div className="text-red-600">Red Flags: {result.red_flags.join(", ")}</div>
          ) : (
            <div className="text-green-700">No red flags detected.</div>
          )}
        </div>
      )}
    </div>
  )
}

function PreAuthWriter({ buttonClassName = "" }: { buttonClassName?: string }) {
  const [cpt, setCpt] = useState("77080")
  const [icd, setIcd] = useState("M81.0")
  const [payer, setPayer] = useState("Medicare")
  const [rationale, setRationale] = useState("Patient is postmenopausal with risk factors for osteoporosis.")
  const [output, setOutput] = useState("")
  function handleGen() {
    if (cpt === "77080") {
      setOutput(`Meets NCD 150.3: Bone density study is indicated for postmenopausal women at risk of osteoporosis. ICD-10: ${icd}. Rationale: ${rationale}`)
    } else {
      setOutput(`No matching LCD/NCD found for CPT ${cpt}. Please check payer policy. ICD-10: ${icd}. Rationale: ${rationale}`)
    }
  }
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <Input value={cpt} onChange={e=>setCpt(e.target.value)} placeholder="CPT Code" className="max-w-xs" />
        <Input value={icd} onChange={e=>setIcd(e.target.value)} placeholder="ICD-10 Code" className="max-w-xs" />
        <select value={payer} onChange={e=>setPayer(e.target.value)} className="max-w-xs rounded-md border-gray-300">
          <option>Medicare</option>
          <option>Medicaid</option>
          <option>Commercial</option>
        </select>
      </div>
      <Textarea value={rationale} onChange={e=>setRationale(e.target.value)} placeholder="Clinical Rationale" rows={2} />
      <Button onClick={handleGen} className={`w-full sm:w-auto ${buttonClassName}`}>Generate Statement</Button>
      {output && <div className="rounded-xl bg-sage-50 p-4 mt-2 font-mono whitespace-pre-wrap">{output}</div>}
    </div>
  )
}

function ComplyDraft({ buttonClassName = "" }: { buttonClassName?: string }) {
  const [input, setInput] = useState("Meets NCD 150.3: Bone density study is indicated for postmenopausal women at risk of osteoporosis. ICD-10: M81.0. Rationale: Patient is postmenopausal with risk factors for osteoporosis.")
  const [output, setOutput] = useState("")
  function handleWrap() {
    setOutput(`Justification for Pre-Auth/Appeal:\n${input}\n\n_This statement is ready for use in pre-auth forms, appeals, or legal review._`)
  }
  return (
    <div className="space-y-4">
      <Textarea value={input} onChange={e=>setInput(e.target.value)} rows={3} />
      <Button onClick={handleWrap} className={`w-full sm:w-auto ${buttonClassName}`}>Wrap for Submission</Button>
      {output && <div className="rounded-xl bg-sage-50 p-4 mt-2 whitespace-pre-line">{output}</div>}
    </div>
  )
}

function PolicyLookup({ buttonClassName = "" }: { buttonClassName?: string }) {
  const [cpt, setCpt] = useState("77080")
  const [info, setInfo] = useState<any>(null)
  function handleLookup() {
    if (cpt === "77080") {
      setInfo({
        summary: "Covered under NCD 150.3 for postmenopausal women at risk of osteoporosis.",
        frequency: "Once every 2 years",
        docs: "Clinical note, risk factors, prior imaging",
        source: "https://www.cms.gov/medicare-coverage-database/details/ncd-details.aspx?NCDId=256"
      })
    } else {
      setInfo({
        summary: `No NCD/LCD found for CPT ${cpt}.",`,
        frequency: "N/A",
        docs: "N/A",
        source: "https://www.cms.gov/medicare-coverage-database/"
      })
    }
  }
  return (
    <div className="space-y-4">
      <Input value={cpt} onChange={e=>setCpt(e.target.value)} placeholder="CPT Code or Keyword" className="max-w-xs" />
      <Button onClick={handleLookup} className={`w-full sm:w-auto ${buttonClassName}`}>Lookup Policy</Button>
      {info && (
        <div className="rounded-xl bg-sage-50 p-4 mt-2">
          <div className="font-bold mb-1">Coverage Summary</div>
          <div className="mb-1">{info.summary}</div>
          <div className="mb-1 text-gray-700">Frequency: {info.frequency}</div>
          <div className="mb-1 text-gray-700">Documentation Required: {info.docs}</div>
          <a href={info.source} target="_blank" rel="noopener noreferrer" className="text-sage-700 underline">Source Link</a>
        </div>
      )}
    </div>
  )
}

function AskGamma({ buttonClassName = "" }: { buttonClassName?: string }) {
  const [q, setQ] = useState("Is CPT 77080 covered for osteoporosis?")
  const [a, setA] = useState("")
  function handleAsk() {
    if (q.includes("77080")) setA("Covered under NCD 150.3 for postmenopausal women.")
    else if (q.toLowerCase().includes("denial")) setA("Common denial reasons: missing documentation, lack of medical necessity, frequency limits.")
    else setA("I'm Gamma, your AI copilot. Ask about CPT coverage, denials, or policy rules!")
  }
  return (
    <div className="space-y-4">
      <Input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask about CPT coverage or denials" />
      <Button onClick={handleAsk} className={`w-full sm:w-auto ${buttonClassName}`}>Ask Gamma</Button>
      {a && <div className="rounded-xl bg-sage-50 p-4 mt-2">{a}</div>}
    </div>
  )
}

export function ProductFeaturesDemo() {
  return (
    <section id="product" className="w-full max-w-7xl mx-auto py-28 px-2 sm:px-8">
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-4 font-satoshi">One Copilot. Every Step of Pre-Auth.</h2>
      <p className="text-2xl sm:text-3xl text-slate-600 text-center mb-12 max-w-3xl mx-auto font-satoshi">
        From policy matching to justification drafting, GammaLex replaces app clutter with clarity—so you can move faster with less risk.
      </p>
      <div className="flex flex-row gap-12 overflow-x-auto pb-6 snap-x snap-mandatory md:pb-0 w-full">
        {/* Step 1: Policy Lookup */}
        <div className="snap-center min-w-[320px] max-w-[400px] w-full flex flex-col items-start bg-white rounded-3xl shadow-lg border border-gray-100 p-10 min-h-[520px] justify-between transition-all">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 font-bold text-lg mr-3 border-2 border-sage-200">1</div>
            <span className="ml-3 text-2xl font-bold font-satoshi">Policy Lookup</span>
          </div>
          <div className="text-gray-700 text-base mb-6 text-left">
            Look up NCD/LCD policy info by CPT or keyword. Get summarized coverage rules, frequency, documentation needs, and source links—mocked for demo.
          </div>
          <PolicyLookup buttonClassName="w-full mt-4" />
        </div>
        {/* Step 2: Viability Scoring */}
        <div className="snap-center min-w-[320px] max-w-[400px] w-full flex flex-col items-start bg-white rounded-3xl shadow-lg border border-gray-100 p-10 min-h-[520px] justify-between transition-all">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 font-bold text-lg mr-3 border-2 border-sage-200">2</div>
            <Scale className="w-8 h-8 text-sage-600" />
            <span className="ml-3 text-2xl font-bold font-satoshi">Viability Scoring <span className="text-base font-normal">(beta)</span></span>
          </div>
          <div className="text-gray-700 text-base mb-6 text-left">
            Instantly score approval likelihood for pre-auth requests. Enter CPT, ICD-10, and a brief note to see risk, red flags, and confidence—all with mock data for now.
          </div>
          <ViabilityScoring buttonClassName="w-full mt-4" />
        </div>
        {/* Step 3: Pre-Auth Writer */}
        <div className="snap-center min-w-[320px] max-w-[400px] w-full flex flex-col items-start bg-white rounded-3xl shadow-lg border border-gray-100 p-10 min-h-[520px] justify-between transition-all">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center text-terracotta-600 font-bold text-lg mr-3 border-2 border-terracotta-200">3</div>
            <FileText className="w-8 h-8 text-terracotta-600" />
            <span className="ml-3 text-2xl font-bold font-satoshi">Pre-Auth Writer</span>
          </div>
          <div className="text-gray-700 text-base mb-6 text-left">
            Generate structured, policy-aligned medical necessity statements. Inputs: CPT, ICD-10, payer, and rationale. Output: a compliant justification, ready for review.
          </div>
          <PreAuthWriter buttonClassName="w-full mt-4" />
        </div>
        {/* Step 4: Comply Draft */}
        <div className="snap-center min-w-[320px] max-w-[400px] w-full flex flex-col items-start bg-white rounded-3xl shadow-lg border border-gray-100 p-10 min-h-[520px] justify-between transition-all">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-bronze-100 flex items-center justify-center text-bronze-600 font-bold text-lg mr-3 border-2 border-bronze-200">4</div>
            <Shield className="w-8 h-8 text-bronze-600" />
            <span className="ml-3 text-2xl font-bold font-satoshi">Comply Draft</span>
          </div>
          <div className="text-gray-700 text-base mb-6 text-left">
            Wraps Pre-Auth Writer output into a user-friendly format for clinicians and legal teams. Ready for pre-auth forms, appeals, or legal review.
          </div>
          <ComplyDraft buttonClassName="w-full mt-4" />
        </div>
        {/* Step 5: Ask Gamma (Chatbot) */}
        <div className="snap-center min-w-[320px] max-w-[400px] w-full flex flex-col items-start bg-white rounded-3xl shadow-lg border border-gray-100 p-10 min-h-[520px] justify-between transition-all">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 font-bold text-lg mr-3 border-2 border-sage-200">5</div>
            <span className="ml-3 text-2xl font-bold font-satoshi">Ask Gamma (Chatbot)</span>
          </div>
          <div className="text-gray-700 text-base mb-6 text-left">
            Ask any question about CPT coverage or denial reasons. Get a plain-English answer with a mock source, simulating the AI copilot experience.
          </div>
          <AskGamma buttonClassName="w-full mt-4" />
        </div>
      </div>
    </section>
  )
}

export { ViabilityScoring, PreAuthWriter, ComplyDraft, PolicyLookup, AskGamma } 