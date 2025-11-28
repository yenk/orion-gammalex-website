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
  Volume2
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
    title: "Voice-guided review",
    summary: "Radiologists narrate findings while AI structures the report in real time.",
    points: [
      "Dictate with macros tied to AI findings and AR annotations",
      "Receive instant feedback when measurements or context are missing",
      "Send structured drafts to downstream teams without manual rewrites"
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
  <div className="flex h-full flex-col bg-slate-50">
    <div className="px-6 py-4 border-b border-slate-200 bg-white">
       <h3 className="font-semibold text-slate-900">Patient Panel</h3>
    </div>
    <div className="flex-1 p-6 grid gap-4">
      {/* Patient Info Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-3">
         <div className="flex items-start justify-between">
            <div className="flex gap-3">
               <div className="h-12 w-12 rounded-full bg-gammalex-purple/10 flex items-center justify-center text-gammalex-purple font-semibold">MJ</div>
               <div>
                  <div className="font-semibold text-slate-900">Maria Johnson</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">ID: PT-2024-0847</div>
               </div>
            </div>
            <div className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide border border-red-100">
               Elevated Risk
            </div>
         </div>
         <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-2 border-t border-slate-50">
            <div>
               <div className="text-slate-400 mb-0.5">Age</div>
               <div className="font-medium">52 years</div>
            </div>
            <div>
               <div className="text-slate-400 mb-0.5">Last Exam</div>
               <div className="font-medium">2024-10-28</div>
            </div>
         </div>
      </div>
      
      {/* Consent Status */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
               <CheckCircle size={16} />
            </div>
            <div>
               <div className="text-sm font-medium text-slate-900">Consent Verified</div>
               <div className="text-[10px] text-slate-500">Patient consents to AI analysis</div>
            </div>
         </div>
         <button className="text-xs text-gammalex-purple font-medium hover:underline">View Form</button>
      </div>

      {/* Upload Area */}
      <div className="flex-1 bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-4 text-center hover:bg-slate-200/50 transition-colors cursor-pointer">
         <UploadCloud className="text-slate-400 mb-2" size={32} />
         <div className="text-sm font-medium text-slate-700">Upload Imaging Data</div>
         <div className="text-xs text-slate-500 mt-1">Drag & drop DICOM files or Browse</div>
      </div>
    </div>
  </div>
)

const MockDetection = () => (
  <div className="flex h-[450px] flex-col sm:flex-row overflow-hidden bg-slate-950">
    {/* Viewer Side */}
    <div className="flex-1 relative overflow-hidden group bg-black flex flex-col">
      {/* Viewer Toolbar */}
      <div className="absolute top-0 inset-x-0 bg-black/50 backdrop-blur-sm p-2 flex justify-between items-center z-10 border-b border-white/10">
         <div className="flex gap-1">
            {['Axial', 'Coronal', 'Sagittal', '3D'].map((view, i) => (
               <button key={view} className={`px-3 py-1 rounded text-[10px] font-medium transition-colors ${i === 1 ? 'bg-gammalex-purple text-white' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}>
                  {view}
               </button>
            ))}
         </div>
         <div className="flex gap-2">
            <div className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-[10px] text-white cursor-pointer hover:bg-white/20">
               <Activity size={10} /> Density
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-[10px] text-white cursor-pointer hover:bg-white/20">
               <AlertTriangle size={10} /> Suspicious
            </div>
         </div>
      </div>

      {/* Simulated Mammogram Content */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black opacity-60" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
        <div className="absolute top-[10%] bottom-[10%] left-[10%] right-[20%] bg-gradient-to-r from-slate-800 to-transparent rounded-l-[40%] opacity-30 blur-3xl" />
        
        {/* Finding Overlay */}
        <div className="absolute top-[35%] left-[45%] w-24 h-24 group-hover:scale-105 transition-transform duration-500">
           <div className="absolute inset-0 border-2 border-red-500/80 rounded-full animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.3)]" />
           <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap flex items-center gap-1">
             <AlertTriangle size={8} /> Mass 87%
           </div>
        </div>

        {/* Ruler / Scale */}
        <div className="absolute bottom-8 left-4 w-24 h-1 bg-white/20 flex justify-between">
           <div className="w-px h-2 bg-white/40 mt-[-4px]" />
           <div className="w-px h-2 bg-white/40 mt-[-4px]" />
           <div className="absolute top-2 left-0 text-[8px] text-white/40">5cm</div>
        </div>
      </div>
    </div>

    {/* Sidebar Side - Results & Actions */}
    <div className="w-full sm:w-72 bg-white border-l border-slate-200 flex flex-col">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
         <h4 className="font-semibold text-slate-900 text-sm">Diagnostic Summary</h4>
      </div>
      <div className="p-4 space-y-6 overflow-y-auto">
        
        {/* BI-RADS Score */}
        <div className="flex items-center justify-between bg-red-50 border border-red-100 rounded-lg p-3">
           <div>
              <div className="text-xs text-red-600 font-medium uppercase tracking-wide">BI-RADS Category</div>
              <div className="text-2xl font-bold text-red-700">4A</div>
           </div>
           <div className="text-right">
              <div className="text-xs text-red-500">Suspicious</div>
              <div className="text-[10px] text-red-400">Overall Risk: Mod</div>
           </div>
        </div>

        {/* Findings List */}
        <div>
           <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Findings & Confidence</div>
           <div className="space-y-3">
              <div className="space-y-1">
                 <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">Mass (R)</span>
                    <span className="font-bold text-red-600">87%</span>
                 </div>
                 <div className="text-[10px] text-slate-500">Upper outer quadrant</div>
                 <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[87%]" />
                 </div>
              </div>
              <div className="space-y-1">
                 <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">Calcifications (L)</span>
                    <span className="font-bold text-amber-600">72%</span>
                 </div>
                 <div className="text-[10px] text-slate-500">Retroareolar</div>
                 <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[72%]" />
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-slate-100 bg-slate-50">
         <button className="w-full py-2.5 bg-gammalex-purple text-white text-xs font-bold uppercase tracking-wide rounded-lg hover:bg-gammalex-purple-dark transition shadow-lg shadow-gammalex-purple/20">
           Confirm & Next
         </button>
      </div>
    </div>
  </div>
)

const MockAR = () => (
  <div className="relative bg-slate-950 p-4 overflow-hidden h-[450px] flex flex-col">
    {/* 3D Environment Simulation */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-black" />
    
    {/* Grid Floor */}
    <div className="absolute inset-0 perspective-[1000px]">
      <div className="absolute inset-0 transform rotate-x-60 scale-150 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>

    {/* Simulated Anatomy Mesh (Abstract) */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
       <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
       <div className="absolute inset-4 border border-indigo-400/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-600/5 rounded-full blur-2xl" />
    </div>

    {/* Target Marker */}
    <div className="absolute top-[42%] left-[58%] z-10">
      <div className="relative">
        <div className="w-16 h-16 border border-emerald-400 rounded-full animate-ping opacity-20 absolute inset-0" />
        <div className="w-16 h-16 border border-emerald-400/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.3)]">
           <div className="w-1 h-1 bg-emerald-400 rounded-full box-shadow-[0_0_10px_#34d399]" />
        </div>
        {/* Label Line */}
        <div className="absolute left-full top-1/2 w-12 h-[1px] bg-emerald-400/50" />
        <div className="absolute left-[calc(100%+3rem)] top-1/2 -translate-y-1/2 bg-black/80 text-emerald-400 text-[10px] font-mono px-3 py-1.5 rounded border border-emerald-400/30 backdrop-blur whitespace-nowrap">
          Loc: 12mm Depth
        </div>
      </div>
    </div>
    
    {/* HUD Overlay */}
    <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
      <div className="flex justify-between text-emerald-400 font-mono text-xs tracking-widest opacity-80">
        <div className="flex gap-4">
           <span>AR: ACTIVE</span>
           <span>FOV: 42°</span>
        </div>
        <span>SYNC: ON</span>
      </div>
      
      <div className="flex justify-between items-end">
         <div className="w-32 h-32 border-l border-b border-slate-700/50 rounded-bl-2xl" />
         <div className="w-32 h-32 border-r border-b border-slate-700/50 rounded-br-2xl" />
      </div>
    </div>
  </div>
)

const MockVoice = () => (
  <div className="flex flex-col bg-slate-50 h-[450px]">
    <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-8">
       
       {/* Listening State */}
       <div className="relative">
          <div className="absolute inset-0 bg-gammalex-purple/20 rounded-full animate-ping" />
          <div className="relative h-20 w-20 bg-gammalex-purple text-white rounded-full flex items-center justify-center shadow-xl">
             <Mic size={32} />
          </div>
          <div className="mt-6 space-y-1">
             <div className="text-lg font-semibold text-slate-900">Listening...</div>
             <div className="text-sm text-slate-500">Say a command or dictate findings</div>
          </div>
       </div>

       {/* Visualizer */}
       <div className="h-12 flex items-center gap-1">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 bg-slate-900/20 rounded-full transition-all duration-75" 
              style={{ height: `${30 + (i * 13) % 60}%` }}
            />
          ))}
       </div>

       {/* Command Pills */}
       <div className="flex flex-wrap justify-center gap-3 max-w-sm">
          {['"Show Coronal View"', '"Highlight Lesion"', '"Next Patient"', '"Toggle Density"'].map((cmd) => (
             <div key={cmd} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-600 shadow-sm">
                {cmd}
             </div>
          ))}
       </div>
    </div>
    
    <div className="bg-white border-t border-slate-200 p-4">
       <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100">
          <div className="h-8 w-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
             <Volume2 size={14} />
          </div>
          <div className="flex-1 text-xs text-slate-600 font-mono">
             "Mass in upper outer quadrant..."
          </div>
       </div>
    </div>
  </div>
)

const MockFeedback = () => (
  <div className="p-6 flex flex-col gap-6 h-[450px] bg-slate-50">
    <div className="flex items-center justify-between mb-2">
       <h4 className="text-sm font-semibold text-slate-900">Performance Analytics</h4>
       <div className="flex gap-2 text-xs">
          <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">This Week</span>
          <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">All Modalities</span>
       </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10 text-violet-600"><Activity size={40} /></div>
        <div className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">Diagnostic Accuracy</div>
        <div className="text-3xl font-bold text-slate-900 tracking-tight">98.2%</div>
        <div className="text-[10px] font-medium flex items-center gap-1 mt-2">
          <span className="text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+2.4%</span> 
          <span className="text-slate-400">vs benchmark</span>
        </div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10 text-blue-600"><Layout size={40} /></div>
        <div className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">Avg Read Time</div>
        <div className="text-3xl font-bold text-slate-900 tracking-tight">1.8m</div>
        <div className="text-[10px] font-medium flex items-center gap-1 mt-2">
          <span className="text-green-600 bg-green-50 px-1.5 py-0.5 rounded">-45s</span> 
          <span className="text-slate-400">efficiency gain</span>
        </div>
      </div>
    </div>
    
    <div className="flex-1 bg-white rounded-xl border border-slate-200 p-5 flex flex-col shadow-sm">
      <div className="flex items-center justify-between mb-4">
         <span className="text-xs font-semibold text-slate-700">Cases Processed vs AI Usage</span>
      </div>
      <div className="flex-1 flex items-end gap-3">
        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full group gap-1">
            <div className="relative w-full bg-gammalex-purple/10 rounded-t transition-all duration-300 group-hover:bg-gammalex-purple/20" style={{ height: `${h}%` }}>
               <div className="absolute bottom-0 inset-x-0 bg-gammalex-purple/80 rounded-t transition-all duration-300 group-hover:bg-gammalex-purple" style={{ height: `${h * 0.7}%` }} />
               
               <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {h * 12} cases
               </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100 mt-2 pt-2 flex justify-between text-[10px] text-slate-400 font-mono">
         <span>Mon</span>
         <span>Tue</span>
         <span>Wed</span>
         <span>Thu</span>
         <span>Fri</span>
      </div>
    </div>
  </div>
)

const getMockComponent = (id: string) => {
  switch(id) {
    case 'intake': return <MockIntake />
    case 'detection': return <MockDetection />
    case 'ar': return <MockAR />
    case 'voice': return <MockVoice />
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
            Imaging diagnosis, made digestible
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-600 leading-relaxed"
          >
            GammaLex condenses AI, AR, and voice into a single interactive experience focused on sharper breast imaging detection.
          </motion.p>
        </div>

        {/* Focus Areas - Horizontal Scroll */}
        <div className="flex overflow-x-auto pb-12 gap-8 px-4 snap-x snap-mandatory no-scrollbar">
          {focusAreas.map((area, index) => (
            <motion.div 
              key={area.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[90vw] md:min-w-[900px] snap-center bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row"
            >
              {/* Text Side - Card Style */}
              <div className="flex-1 w-full relative p-10 flex flex-col justify-center border-r border-slate-50">
                {/* Big Number Background */}
                <div className="absolute top-0 left-8 text-[160px] font-bold text-emerald-50/80 leading-none select-none pointer-events-none -translate-y-10 z-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="relative z-10 pt-12">
                    <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">
                      {area.title}
                    </h3>
                    
                    {/* Divider Line */}
                    <div className="w-16 h-1 bg-emerald-400 mb-8 rounded-full"></div>

                    <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
                      {area.summary}
                    </p>
                    
                    <ul className="space-y-4">
                      {area.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-slate-500">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full bg-slate-50 p-8 flex items-center justify-center">
                <div className="relative w-full max-w-[500px]">
                   {/* Decorative blobs */}
                   <div className={`absolute -inset-4 rounded-full blur-3xl opacity-20 ${index % 2 === 0 ? 'bg-gammalex-purple' : 'bg-blue-400'}`} />
                   
                   <MockWindow title={`GammaLex - ${area.title}`}>
                      {getMockComponent(area.id)}
                   </MockWindow>
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

