"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { JoinWaitlistModal } from '@/components/JoinWaitlistModal'
import { 
  Brain, 
  Mic, 
  Scan, 
  User, 
  Activity,
  Layout,
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle,
  UploadCloud,
  Settings,
  Volume2,
  ArrowRight
} from 'lucide-react'

const focusAreas = [
  {
    id: "intake",
    title: "Context-rich intake",
    summary: "Capture breast imaging studies with the right metadata so every model starts with context.",
    points: [
      "Ingest mammography, MRI, and ultrasound exams straight from PACS/RIS",
      "Attach indication, prior studies, and patient history to each study",
      "Normalize acquisition parameters so models compare consistent signals"
    ]
  },
  {
    id: "detection",
    title: "AI detection & triage",
    summary: "Deep ensembles sift through pixels, highlight subtle lesions, and rank studies by urgency.",
    points: [
      "Prioritize highest-probability cases so radiologists focus on what matters",
      "Balance sensitivity and specificity across dense and heterogenous tissue",
      "Show structured findings, heatmaps, and confidence in one glance"
    ]
  },
  {
    id: "ar",
    title: "AR localization",
    summary: "Augmented reality overlays translate AI insights into anatomical landmarks.",
    points: [
      "Project lesion outlines into 3D anatomy for precise localization",
      "Sync annotations with PACS zoom, pan, and slice state",
      "Share an augmented view with surgical and biopsy teams instantly"
    ]
  },
  {
    id: "voice",
    title: "Voice Command & Reporting",
    summary: "Navigate the platform, manipulate images, and dictate findings—all hands-free.",
    points: [
      "Control zoom, window/level, and layout with simple voice commands",
      "Dictate findings naturally while AI structures the report in real-time",
      "Reduce repetitive clicks and keep focus entirely on the imaging"
    ]
  },
  {
    id: "feedback",
    title: "Operational feedback",
    summary: "Measurements and quality signals feed back into the detection loop for continuous improvement.",
    points: [
      "Track recall vs biopsy outcomes per reader and modality",
      "Surface model drift indicators as the case mix shifts",
      "Close the loop with clinical teams on detection performance"
    ]
  }
]

const insights = [
  { label: "Detection lift", value: "42%" },
  { label: "Read time saved", value: "12m" },
  { label: "False positive drop", value: "37%" }
]

const MockWindow = ({ children, title }: { children: React.ReactNode, title: string }) => (
  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/5">
    <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
      <div className="flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400/80" />
        <div className="h-3 w-3 rounded-full bg-amber-400/80" />
        <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
      </div>
      <div className="ml-4 flex-1 text-center text-xs font-medium text-slate-500 font-mono">{title}</div>
      <div className="w-10" /> 
    </div>
    <div className="relative bg-slate-50/50 p-1 min-h-[300px] sm:min-h-[400px]">
      {children}
    </div>
  </div>
)

const MockIntake = () => (
  <div className="relative bg-slate-950 p-4 overflow-hidden h-[450px] flex flex-col rounded-xl border border-slate-800 shadow-2xl">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
       <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/20" />
          <span className="text-xs font-bold text-slate-400 tracking-wider">GAMMALEX INTAKE</span>
       </div>
       <div className="flex gap-2">
          <div className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">CONNECTED: PACS</div>
          <div className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-mono">SYNC: RIS</div>
       </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex gap-4">
       {/* Patient List */}
       <div className="w-1/3 border-r border-slate-800 pr-4 space-y-3">
          <div className="text-[10px] text-slate-500 font-mono mb-2">INCOMING STUDIES</div>
          {[
             { name: "Smith, J.", id: "PT-892", status: "Processing", time: "Just now" },
             { name: "Doe, A.", id: "PT-891", status: "Ready", time: "2m ago" },
             { name: "Chen, L.", id: "PT-890", status: "Ready", time: "5m ago" },
          ].map((pt, i) => (
             <div key={pt.id} className={`p-3 rounded-lg border ${i === 0 ? 'bg-slate-900 border-gammalex-purple/50' : 'bg-slate-900/50 border-slate-800'} flex flex-col gap-1`}>
                <div className="flex justify-between items-center">
                   <span className="text-sm font-medium text-slate-200">{pt.name}</span>
                   <span className="text-[10px] text-slate-500">{pt.time}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                   <span className="text-[10px] font-mono text-slate-400">{pt.id}</span>
                   <span className={`text-[10px] px-1.5 py-0.5 rounded ${i === 0 ? 'bg-blue-500/20 text-blue-400 animate-pulse' : 'bg-emerald-500/20 text-emerald-400'}`}>
                      {pt.status}
                   </span>
                </div>
             </div>
          ))}
       </div>

       {/* Processing View */}
       <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-slate-900/50 rounded-lg border border-slate-800 p-6 flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gammalex-purple/5 via-transparent to-transparent" />
             
             {/* Progress Circle */}
             <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="8" />
                   <circle cx="50" cy="50" r="45" fill="none" stroke="#8b5cf6" strokeWidth="8" strokeDasharray="283" strokeDashoffset="70" className="animate-[dash_1.5s_ease-in-out_infinite]" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <UploadCloud className="text-gammalex-purple mb-1" size={24} />
                   <span className="text-2xl font-bold text-white">75%</span>
                </div>
             </div>

             <div className="text-center space-y-2 z-10">
                <h4 className="text-slate-200 font-medium">Normalizing Dicom Data</h4>
                <div className="text-xs text-slate-500 font-mono flex flex-col gap-1">
                   <span className="text-emerald-400">✓ Header Anonymization</span>
                   <span className="text-emerald-400">✓ Pixel Spacing Check</span>
                   <span className="text-blue-400">➜ Contrast Analysis...</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
)

const MockDetection = () => (
  <div className="relative bg-black p-0 overflow-hidden h-[450px] flex flex-col rounded-xl border border-slate-800 shadow-2xl">
    {/* Toolbar */}
    <div className="h-12 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between px-4">
       <div className="flex gap-1 bg-black/50 p-1 rounded-lg">
          {['Axial', 'Coronal', 'Sagittal', '3D'].map((view, i) => (
             <button key={view} className={`px-3 py-1 rounded-md text-[10px] font-medium transition-colors ${i === 3 ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}>
                {view}
             </button>
          ))}
       </div>
       <div className="flex gap-4 text-slate-400">
          <Scan size={16} />
          <Activity size={16} />
          <Settings size={16} />
       </div>
    </div>

    {/* Main MLO View */}
    <div className="flex-1 relative overflow-hidden bg-black flex items-center justify-center">
       {/* Realistic MLO Breast Gradient */}
       <div className="absolute top-0 bottom-0 right-[15%] w-[60%] bg-gradient-to-l from-slate-800 via-slate-700 to-transparent rounded-l-[100%] opacity-60 blur-sm" />
       <div className="absolute top-[10%] bottom-[10%] right-[15%] w-[40%] bg-gradient-to-l from-slate-500 via-slate-600 to-transparent rounded-l-[100%] opacity-30 blur-md" />
       
       {/* Dense Tissue Texture Overlay */}
       <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />

       {/* Suspicious Finding Circle (Yellow Style) */}
       <div className="absolute top-[35%] right-[35%] z-10 group cursor-pointer">
          <div className="relative">
             <div className="w-24 h-24 border-2 border-amber-400/80 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.2)] animate-pulse" />
             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
               Suspicious
             </div>
             {/* Hover Detail */}
             <div className="absolute left-full ml-4 top-0 bg-slate-900 border border-slate-700 p-3 rounded-lg w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="text-xs text-slate-200 font-bold mb-1">Mass</div>
                <div className="text-[10px] text-slate-400">Irregular shape, spiculated margins. High probability of malignancy.</div>
             </div>
          </div>
       </div>

       {/* Labels */}
       <div className="absolute top-4 left-4 text-slate-500 text-xs font-mono">L MLO</div>
       <div className="absolute bottom-4 right-4 text-slate-500 text-xs font-mono">IMG: 24/80</div>
    </div>
  </div>
)

const MockAR = () => (
  <div className="relative bg-slate-950 p-0 overflow-hidden h-[450px] flex flex-col rounded-xl border border-slate-800 shadow-2xl">
    {/* Header Bar */}
    <div className="h-10 bg-[#1e1e2e] flex items-center justify-between px-4 border-b border-slate-800">
       <span className="text-gammalex-purple font-bold text-sm tracking-wider">GammaLex View</span>
       <div className="flex gap-3 text-slate-400">
          <Layout size={14} />
          <Activity size={14} />
       </div>
    </div>

    {/* Side-by-Side View (CC) */}
    <div className="flex-1 flex relative">
       {/* Divider */}
       <div className="absolute inset-y-0 left-1/2 w-px bg-slate-800 z-10" />

       {/* Right Breast (Shown on Left in Radiology) - R CC */}
       <div className="flex-1 bg-black relative overflow-hidden flex items-center justify-center">
          <div className="absolute top-4 left-4 text-[10px] text-slate-400 font-mono">R CC</div>
          <div className="w-[80%] h-[70%] bg-gradient-to-r from-slate-800 via-slate-600 to-transparent rounded-r-[100%] opacity-50 blur-sm ml-[-20%]" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
       </div>

       {/* Left Breast (Shown on Right in Radiology) - L CC */}
       <div className="flex-1 bg-black relative overflow-hidden flex items-center justify-center">
          <div className="absolute top-4 right-4 text-[10px] text-slate-400 font-mono">L CC</div>
          <div className="w-[80%] h-[70%] bg-gradient-to-l from-slate-800 via-slate-600 to-transparent rounded-l-[100%] opacity-50 blur-sm mr-[-20%]" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

          {/* Red Bounding Box Detection */}
          <div className="absolute top-[30%] right-[25%] z-20">
             <div className="relative w-20 h-20">
                {/* Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />
                
                {/* Content */}
                <div className="absolute inset-0 bg-red-500/10 animate-pulse" />
             </div>
             {/* Tag */}
             <div className="absolute -right-24 top-0 bg-slate-900/90 border border-red-500/30 px-2 py-1 rounded text-[9px] text-red-400 font-mono flex flex-col gap-0.5">
                <span>Mass 14mm</span>
                <span className="text-slate-500">Loc: 3:00</span>
             </div>
          </div>
       </div>
    </div>

    {/* Footer Controls */}
    <div className="h-12 bg-[#1e1e2e] border-t border-slate-800 flex items-center justify-between px-4">
       <div className="flex gap-4">
          <div className="flex flex-col">
             <span className="text-[9px] text-slate-500">NAME</span>
             <span className="text-[10px] text-slate-300">ERIKA MUSTERMANN</span>
          </div>
          <div className="flex flex-col">
             <span className="text-[9px] text-slate-500">DOB</span>
             <span className="text-[10px] text-slate-300">12.04.1960</span>
          </div>
       </div>
       <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-emerald-500 font-medium">AI SYNCED</span>
       </div>
    </div>
  </div>
)

const MockGenAI = () => (
  <div className="relative bg-slate-950 p-4 overflow-hidden h-[450px] flex flex-col rounded-xl border border-slate-800 shadow-2xl font-mono">
     {/* Voice Interface Header */}
     <div className="flex items-center justify-center py-6 border-b border-slate-800 relative bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
           <div className="w-8 h-8 rounded-full bg-gammalex-purple flex items-center justify-center shadow-lg shadow-gammalex-purple/30">
              <Mic size={16} className="text-white" />
           </div>
           <div className="flex gap-0.5 items-end h-4">
              {[...Array(5)].map((_, i) => (
                 <div key={i} className="w-1 bg-gammalex-purple rounded-full animate-[pulse_1s_ease-in-out_infinite]" style={{ height: `${40 + (i * 15) % 60}%`, animationDelay: `${i * 0.1}s` }} />
              ))}
           </div>
        </div>
        <span className="text-xs text-slate-400 tracking-widest uppercase font-medium">Listening...</span>
     </div>

     {/* Action & Report Area */}
     <div className="flex-1 flex flex-col gap-4 pt-4 overflow-hidden">
        
        {/* Command Log */}
        <div className="flex-1 space-y-3 overflow-y-auto px-2">
           {/* System Action */}
           <div className="flex justify-start">
              <div className="bg-slate-900 border border-slate-800 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                 <div className="text-[10px] text-emerald-500 mb-1 flex items-center gap-1">
                    <CheckCircle size={10} /> SYSTEM ACTION
                 </div>
                 <p className="text-xs text-slate-300">Zoomed to right breast, upper outer quadrant.</p>
              </div>
           </div>

           {/* User Command */}
           <div className="flex justify-end">
              <div className="bg-gammalex-purple/10 border border-gammalex-purple/30 rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] text-right">
                 <div className="text-[10px] text-gammalex-purple mb-1">VOICE COMMAND</div>
                 <p className="text-sm text-white">"Measure the mass and compare with prior."</p>
              </div>
           </div>

           {/* System Response */}
           <div className="flex justify-start">
              <div className="bg-slate-900 border border-slate-800 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                 <div className="text-[10px] text-blue-400 mb-1 flex items-center gap-1">
                    <Activity size={10} /> ANALYSIS
                 </div>
                 <p className="text-xs text-slate-300">Mass measured at 14mm. Compared to 2023 exam: New finding.</p>
              </div>
           </div>
           
           {/* Live Dictation */}
           <div className="flex justify-end opacity-70">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] text-right">
                 <div className="text-[10px] text-slate-400 mb-1">DICTATING...</div>
                 <p className="text-sm text-slate-200">"Impression: BI-RADS 4 suspicious abnormality..."</p>
              </div>
           </div>
        </div>

        {/* Context Bar */}
        <div className="h-10 bg-slate-900 rounded-lg border border-slate-800 flex items-center px-3 justify-between">
           <span className="text-[10px] text-slate-500">CONTEXT: 3D SCREENING</span>
           <div className="flex gap-2">
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Mic: On</span>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Auto-Nav: Active</span>
           </div>
        </div>
     </div>
  </div>
)

const MockFeedback = () => (
  <div className="relative bg-slate-950 p-4 overflow-hidden h-[450px] flex flex-col rounded-xl border border-slate-800 shadow-2xl">
     <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-slate-200 tracking-wide">PRACTICE ANALYTICS</h4>
        <div className="flex gap-2">
           <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded border border-slate-700">Last 30 Days</span>
        </div>
     </div>

     <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
           <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Recall Rate</div>
           <div className="text-2xl font-bold text-white">8.4%</div>
           <div className="text-[10px] text-emerald-400 mt-1">↓ 1.2% vs regional avg</div>
        </div>
        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
           <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Cancer Detection Rate</div>
           <div className="text-2xl font-bold text-white">5.1<span className="text-sm text-slate-500 font-normal">/1k</span></div>
           <div className="text-[10px] text-emerald-400 mt-1">↑ 0.8% improvement</div>
        </div>
     </div>

     <div className="flex-1 bg-slate-900/30 rounded-lg border border-slate-800 p-4 flex flex-col justify-end">
        <div className="text-[10px] text-slate-500 mb-4">Detection Accuracy Trend</div>
        <div className="flex items-end justify-between gap-2 h-32">
           {[40, 45, 42, 55, 58, 65, 70, 72, 75, 82].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-gammalex-purple/20 to-gammalex-purple/80 rounded-t hover:to-emerald-400 transition-all duration-300" style={{ height: `${h}%` }} />
           ))}
        </div>
        <div className="h-px bg-slate-800 w-full mt-px" />
     </div>
  </div>
)

const getMockComponent = (id: string) => {
  switch(id) {
    case 'intake': return <MockIntake />
    case 'detection': return <MockDetection />
    case 'ar': return <MockAR />
    case 'voice': return <MockGenAI />
    case 'feedback': return <MockFeedback />
    default: return <MockIntake />
  }
}

export default function HowWeDoItDetailed() {
  return (
    <section id="workflow" className="w-full font-inter relative bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight"
          >
            Designed for the future, <br className="hidden sm:block" />
            solving today's burnout
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-600 leading-relaxed"
          >
            Enhance focus and efficiency with Generative AI. GammaLex allows radiologists to keep their eyes on the images—dictating up to 2x faster with 90% fewer words—by fusing AI, AR, and voice into one seamless workflow.
          </motion.p>
        </div>

        {/* Focus Areas - Side by Side Sections */}
        <div className="space-y-32">
          {focusAreas.map((area, index) => (
            <motion.div 
              key={area.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Visual Side */}
              <div className="flex-1 w-full">
                <div className="relative group">
                   <div className={`absolute -inset-4 rounded-[2rem] blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-30 ${index % 2 === 0 ? 'bg-gammalex-purple' : 'bg-blue-400'}`} />
                   <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white transition-transform duration-500 hover:scale-[1.02]">
                      <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center gap-2 px-4">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/20" />
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 ml-2">GammaLex AI • {area.title}</div>
                      </div>
                      <div className="bg-slate-50/50 p-2 min-h-[300px]">
                        {getMockComponent(area.id)}
                      </div>
                   </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 w-full space-y-8">
                <div className="relative">
                  <div className="text-sm font-bold uppercase tracking-wider text-emerald-500 mb-3 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-emerald-500" />
                    Step {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                    {area.title}
                  </h3>
                </div>
                
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
                  {area.summary}
                </p>
                
                <ul className="space-y-4 pt-4 border-t border-slate-100">
                  {area.points.map((point) => (
                    <li key={point} className="flex items-start gap-4 group">
                      <div className="mt-1.5 h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-slate-600 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                   <Button variant="ghost" className="text-gammalex-purple hover:text-gammalex-purple-dark hover:bg-gammalex-purple/5 pl-0 gap-2">
                      Learn more about {area.title.split(' ')[0]} <ArrowRight className="w-4 h-4" />
                   </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-900 py-16 px-8 text-center"
        >
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {insights.map((insight) => (
                <div key={insight.label} className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-bold text-white">{insight.value}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">{insight.label}</div>
                </div>
              ))}
           </div>
           <div className="mt-12">
              <JoinWaitlistModal
                trigger={
                  <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg font-semibold rounded-full transition-all transform hover:scale-105">
                    Book a Live Demo
                  </Button>
                }
              />
           </div>
        </motion.div>
      </div>
    </section>
  )
}

