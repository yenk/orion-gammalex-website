"use client"

import { useState, useRef, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Scale, FileText, Shield, MessageCircle, Zap, Settings, Bot, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
      setResult({ likelihood: "Medium", confidence: 0.75, red_flags: ["Missing pre auth history"] })
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
      <div className="relative w-full flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-4 sm:gap-0" style={{ minHeight: 80 }}>
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

function FlaggingOverlay() {
  const [isOpen, setIsOpen] = useState(false)
  const riskFlags = [
    {
      flag: "Denial justification contradicts medical evidence",
      source: "Dwyer v. UnitedHealthcare",
      sourceUrl: "https://www.propublica.org/article/mental-health-insurance-denials-unitedhealthcare-cigna-doctors"
    },
    {
      flag: "Reviewer lacked specialty training in oncology",
      source: "Cunningham v. Aetna",
      sourceUrl: "https://www.propublica.org/article/malpractice-settlements-doctors-working-for-insurance-companies"
    },
    {
      flag: "Use of copy-paste language and templated rejections",
      source: "Salim v. BCBS",
      sourceUrl: "https://www.propublica.org/article/blue-cross-proton-therapy-cancer-lawyer-denial"
    },
    {
      flag: "AI denial issued without human review",
      source: "Class-action lawsuit",
      sourceUrl: "https://www.nbcnews.com/health/health-care/prior-authorization-insurance-denials-patients-treatment-rcna212068"
    }
  ]
  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        className="bg-gammalex-orange hover:bg-gammalex-orange/90 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg"
      >
        What Would GammaLex Flag?
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-sage-200"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="p-8 bg-sage-50 rounded-3xl">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 font-inter">
                      🚩 GammaLex Risk Detection
                    </h3>
                    <p className="text-lg text-slate-600 font-inter">
                      How AI identifies legal vulnerabilities in denial letters
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="sm"
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4 font-inter">📄 Sample Denial Letter</h4>
                  <pre className="bg-slate-100 rounded-xl p-6 text-base sm:text-lg font-mono text-slate-800 whitespace-pre-wrap border border-slate-200">
{`We regret to inform you that your request has been denied. The treatment is considered investigational and not medically necessary based on our guidelines.`}
                  </pre>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 font-inter">🚩 Legal Risk Flags Detected</h4>
                  <ul className="space-y-4">
                    {riskFlags.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-200">
                        <span className="mt-1 text-red-500 text-xl">•</span>
                        <div>
                          <span className="text-slate-900 font-semibold">"{item.flag}"</span>
                          <span className="block text-sm text-slate-600 mt-1">from <span className="font-medium">{item.source}</span></span>
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gammalex-orange hover:text-gammalex-orange/80 font-medium inline-flex items-center gap-1 mt-1"
                          >
                            Source ↗
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="bg-sage-600 hover:bg-sage-700 text-white font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function ProductFeaturesDemo() {
  return (
    <section id="product" className="w-full max-w-[1600px] mx-auto py-36 px-2 sm:px-12">
      {/* Headline with orange emphasis only */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-center mb-8 font-inter leading-tight text-slate-900">
        End-to-end <span className="text-gammalex-orange">clinical-legal</span> <span className="text-gammalex-orange">AI</span> for pre-auth, <br />
        denial risk, and <span className="text-gammalex-orange">compliance</span>
      </h2>
      <p className="text-2xl sm:text-3xl font-inter text-center mb-20 max-w-4xl mx-auto text-black leading-snug">
        Faster care. Fewer denials. No black boxes. <span className="text-gammalex-orange">GammaLex</span> delivers source-backed AI you can trust.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 w-full">
        {/* Inference Card */}
        <div className="flex flex-col items-start bg-white rounded-3xl shadow-2xl p-6 sm:p-14 border border-sage-100 h-[420px] sm:h-[500px] min-w-0 max-w-full overflow-hidden">
          <div className="flex items-center gap-5 mb-6">
            <Zap className="w-14 h-14 text-slate-400" />
            <span className="text-3xl sm:text-4xl font-inter text-gammalex-orange">Inference</span>
          </div>
          <div className="text-lg sm:text-xl mb-6 text-slate-900 font-inter">Real-time clinical-legal intelligence for every pre-auth and denial</div>
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100" style={{ WebkitOverflowScrolling: 'touch' }}>
            <ul className="space-y-4 text-lg text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Policy Lookup:</strong> Instantly match clinical scenarios to payer rules and coverage policies with source verification.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Risk Scoring:</strong> Quantify denial and compliance risk before care is delayed or denied, helping prevent denials and legal issues.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Compliance Checks:</strong> Ensure documentation meets both clinical and legal standards to prevent successful appeals.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Enterprise Security:</strong> SOC 2, HIPAA compliance with full audit trails for defensibility.</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Fine-Tuning Card */}
        <div className="flex flex-col items-start bg-white rounded-3xl shadow-2xl p-6 sm:p-14 border border-sage-100 h-[420px] sm:h-[500px] min-w-0 max-w-full overflow-hidden">
          <div className="flex items-center gap-5 mb-6">
            <Settings className="w-14 h-14 text-slate-400" />
            <span className="text-3xl sm:text-4xl font-inter text-gammalex-orange">Fine-Tuning</span>
          </div>
          <div className="text-lg sm:text-xl mb-6 text-slate-900 font-inter">Custom AI for your clinical and legal workflows</div>
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100" style={{ WebkitOverflowScrolling: 'touch' }}>
            <ul className="space-y-4 text-lg text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Legal Pattern Learning:</strong> Adapt models to recognize denial patterns from real lawsuits and case law.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Payer-Specific Training:</strong> Fine-tune for each insurer's unique denial patterns and legal vulnerabilities.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Compliance Documentation:</strong> Generate bulletproof justifications that withstand legal scrutiny and appeals.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Transparent AI:</strong> Full audit trails and explainable decisions for legal defensibility in court.</span>
              </li>
            </ul>
          </div>
        </div>
        {/* AI Copilot Card */}
        <div className="flex flex-col items-start bg-white rounded-3xl shadow-2xl p-6 sm:p-14 border border-sage-100 h-[420px] sm:h-[500px] min-w-0 max-w-full overflow-hidden">
          <div className="flex items-center gap-5 mb-6">
            <Bot className="w-14 h-14 text-slate-400" />
            <span className="text-3xl sm:text-4xl font-inter text-gammalex-orange">AI Copilot</span>
          </div>
          <div className="text-lg sm:text-xl mb-6 text-slate-900 font-inter">Your always-on assistant for Copilot teams</div>
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100" style={{ WebkitOverflowScrolling: 'touch' }}>
            <ul className="space-y-4 text-lg text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Legal Risk Surfacing:</strong> Flag vulnerabilities from real lawsuits before they become denials or liability.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Policy Intelligence:</strong> Answer complex clinical and legal questions with source-backed accuracy.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Team Empowerment:</strong> Reduce burnout by automating research and compliance checks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Clinical Integration:</strong> Seamlessly connect to EHR and care systems to automate workflows—while layering in legal intelligence to flag risks, prevent denials, and reduce lawsuit exposure.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Flow Arrow */}
      <AnimatedMilestoneFlow />
    </section>
  )
}

export { ViabilityScoring, PreAuthWriter, ComplyDraft, PolicyLookup, AskGamma, FlaggingOverlay } 