"use client"

import { useState, useRef, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Scale, FileText, Shield, MessageCircle, Zap, Settings, Bot } from "lucide-react"
import { motion } from "framer-motion"

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

function AnimatedMilestoneFlow() {
  const labels = ["Ingest Data", "Infer & Score", "Fine-Tune", "Deploy Copilot"];
  const [active, setActive] = useState(0);
  // Animation timing: 0, 1, 2, 3, 2, 1, 0 (back and forth)
  const positions = [0, 1, 2, 3, 2, 1, 0];
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setActive(positions[i % positions.length]);
      i++;
    }, 570); // 4s total for 7 steps
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full flex flex-col items-center my-24">
      <div className="relative w-full flex flex-row items-center justify-between max-w-5xl mx-auto" style={{ minHeight: 80 }}>
        {/* Arrowed line behind dots */}
        <svg className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-8 z-0" viewBox="0 0 1000 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="24" y1="16" x2="976" y2="16" stroke="#23232B" strokeWidth="2" />
          <polyline points="40,4 24,16 40,28" fill="none" stroke="#23232B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="960,4 976,16 960,28" fill="none" stroke="#23232B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* Milestone columns */}
        {labels.map((label, i) => (
          <div key={label} className="flex flex-col items-center flex-1 z-10">
            <span className={`text-lg sm:text-xl font-medium font-inter mb-2 transition-colors duration-200 ${active === i ? "text-gammalex-orange" : "text-slate-900"}`}>{label}</span>
            <span className={`w-4 h-4 rounded-full border-2 border-white shadow transition-colors duration-200 ${active === i ? "bg-gammalex-orange" : "bg-slate-300"}`} style={{ position: 'relative', top: 0 }} />
          </div>
        ))}
        {/* Animated orange dot */}
        <motion.span
          className="w-4 h-4 bg-gammalex-orange rounded-full border-2 border-white shadow absolute z-20"
          animate={{ left: ["0%", "33.33%", "66.66%", "100%", "66.66%", "33.33%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "calc(50% + 22px)", transform: "translate(-50%, -50%)" }}
        />
      </div>
    </div>
  );
}

export function ProductFeaturesDemo() {
  return (
    <section id="product" className="w-full max-w-[1600px] mx-auto py-36 px-2 sm:px-12">
      {/* Headline with orange emphasis only */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-center mb-8 font-inter leading-tight text-slate-900">
        End-to-end clinical-legal <span className="text-gammalex-orange">AI</span> for pre-auth, <br />
        denial risk, and compliance
      </h2>
      <p className="text-2xl sm:text-3xl font-inter text-center mb-20 max-w-4xl mx-auto text-black leading-snug">
        Pre-auth, automated. Denials, reduced. Compliance, covered. <span className="text-gammalex-orange">GammaLex</span> empowers faster, safer care.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 w-full">
        {/* Inference Card */}
        <div className="flex flex-col items-start bg-white rounded-3xl shadow-2xl p-14 border border-sage-100 min-h-[420px]">
          <div className="flex items-center gap-5 mb-6">
            <Zap className="w-14 h-14 text-slate-400" />
            <span className="text-3xl font-inter text-gammalex-orange">Inference</span>
          </div>
          <div className="text-xl sm:text-2xl mb-6 text-slate-900 font-inter">Real-time clinical-legal intelligence for every pre-auth and denial</div>
          <ul className="list-disc pl-7 space-y-4 text-lg text-slate-700">
            <li>Policy Lookup: Instantly match clinical scenarios to payer rules and coverage policies.</li>
            <li>Risk Scoring: Quantify denial and compliance risk before care is delayed or denied.</li>
            <li>Compliance Checks: Ensure documentation meets clinical and legal standards.</li>
            <li>Enterprise-grade security and privacy (SOC 2, HIPAA).</li>
          </ul>
        </div>
        {/* Fine-Tuning Card */}
        <div className="flex flex-col items-start bg-white rounded-3xl shadow-2xl p-14 border border-sage-100 min-h-[420px]">
          <div className="flex items-center gap-5 mb-6">
            <Settings className="w-14 h-14 text-slate-400" />
            <span className="text-3xl font-inter text-gammalex-orange">Fine-Tuning</span>
          </div>
          <div className="text-xl sm:text-2xl mb-6 text-slate-900 font-inter">Custom AI for your clinical and legal workflows</div>
          <ul className="list-disc pl-7 space-y-4 text-lg text-slate-700">
            <li>Adapt to payer-specific rules, specialties, and evolving regulations.</li>
            <li>Generate compliant, evidence-backed documentation for pre-auths and appeals.</li>
            <li>Fine-tune LLM capabilities for GammaLex-specific medical, legal, and compliance contexts.</li>
          </ul>
        </div>
        {/* AI Copilot Card */}
        <div className="flex flex-col items-start bg-white rounded-3xl shadow-2xl p-14 border border-sage-100 min-h-[420px]">
          <div className="flex items-center gap-5 mb-6">
            <Bot className="w-14 h-14 text-slate-400" />
            <span className="text-3xl font-inter text-gammalex-orange">AI Copilot</span>
          </div>
          <div className="text-xl sm:text-2xl mb-6 text-slate-900 font-inter">Your always-on assistant for Copilot teams</div>
          <ul className="list-disc pl-7 space-y-4 text-lg text-slate-700">
            <li>Surface missing evidence, flag legal risk, and draft justifications in real time.</li>
            <li>Answer complex policy, coding, and compliance questions instantly.</li>
            <li>Empower clinicians, billers, and legal teams to work smarter and reduce burnout.</li>
          </ul>
        </div>
      </div>
      {/* Flow Arrow */}
      <AnimatedMilestoneFlow />
    </section>
  )
}

export { ViabilityScoring, PreAuthWriter, ComplyDraft, PolicyLookup, AskGamma } 