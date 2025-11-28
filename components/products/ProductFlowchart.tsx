"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ReactFlow, { 
  Background, 
  Controls, 
  Handle, 
  Position, 
  MarkerType 
} from 'reactflow'
import 'reactflow/dist/style.css'

// Custom Node Components
const StepNode = ({ data }: { data: { label: string, color: string } }) => (
  <div 
    className={`px-6 py-4 rounded-xl shadow-lg border-2 min-w-[240px] text-center font-semibold text-white transition-all hover:scale-105`}
    style={{ 
      backgroundColor: data.color,
      borderColor: 'rgba(255,255,255,0.2)',
      boxShadow: `0 10px 30px -10px ${data.color}`
    }}
  >
    <Handle type="target" position={Position.Top} className="!bg-white !w-3 !h-3 !-top-1.5" />
    {data.label}
    <Handle type="source" position={Position.Bottom} className="!bg-white !w-3 !h-3 !-bottom-1.5" />
  </div>
)

const NoteNode = ({ data }: { data: { label: string } }) => (
  <div className="px-4 py-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm rounded-lg shadow-sm max-w-[200px] relative">
    {/* Tail pointing left */}
    <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-yellow-50 border-l border-b border-yellow-200 transform rotate-45 -translate-y-1/2"></div>
    {data.label}
  </div>
)

const nodeTypes = {
  step: StepNode,
  note: NoteNode
}

const nodes = [
  // Main Flow Nodes
  { 
    id: '1', 
    type: 'step', 
    position: { x: 250, y: 0 }, 
    data: { label: 'Patient Uploads Imaging', color: '#10b981' } // emerald-500
  },
  { 
    id: '2', 
    type: 'step', 
    position: { x: 250, y: 120 }, 
    data: { label: 'AI Analysis Runs Automatically', color: '#3b82f6' } // blue-500
  },
  { 
    id: '3', 
    type: 'step', 
    position: { x: 250, y: 240 }, 
    data: { label: 'AI Highlights Suspicious Areas', color: '#3b82f6' } // blue-500
  },
  { 
    id: '4', 
    type: 'step', 
    position: { x: 250, y: 360 }, 
    data: { label: 'AR 3D Visualization Panel', color: '#10b981' } // emerald-500
  },
  { 
    id: '5', 
    type: 'step', 
    position: { x: 250, y: 480 }, 
    data: { label: 'Voice Commands for Navigation', color: '#8b5cf6' } // violet-500
  },
  { 
    id: '6', 
    type: 'step', 
    position: { x: 250, y: 600 }, 
    data: { label: 'Results & Recommendations Panel', color: '#f59e0b' } // amber-500
  },
  { 
    id: '7', 
    type: 'step', 
    position: { x: 250, y: 720 }, 
    data: { label: 'Radiologist / Clinician Decision', color: '#4b5563' } // gray-600
  },

  // Note Nodes (Right Side)
  { id: 'n1', type: 'note', position: { x: 550, y: 10 }, data: { label: 'Fast, seamless upload' } },
  { id: 'n2', type: 'note', position: { x: 550, y: 130 }, data: { label: 'Instant predictive insights' } },
  { id: 'n4', type: 'note', position: { x: 550, y: 370 }, data: { label: 'Interactive, clinician-friendly' } },
  { id: 'n6', type: 'note', position: { x: 550, y: 610 }, data: { label: 'Actionable summary' } },
]

const edges = [
  // Main Flow Edges
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: { stroke: '#94a3b8', strokeWidth: 2 } },
  { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: { stroke: '#94a3b8', strokeWidth: 2 } },
  { id: 'e3-4', source: '3', target: '4', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: { stroke: '#94a3b8', strokeWidth: 2 } },
  { id: 'e4-5', source: '4', target: '5', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: { stroke: '#94a3b8', strokeWidth: 2 } },
  { id: 'e5-6', source: '5', target: '6', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: { stroke: '#94a3b8', strokeWidth: 2 } },
  { id: 'e6-7', source: '6', target: '7', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: { stroke: '#94a3b8', strokeWidth: 2 } },

  // Note Connectors (Dotted Lines)
  { id: 'en1', source: '1', target: 'n1', type: 'straight', style: { stroke: '#e2e8f0', strokeWidth: 1, strokeDasharray: '5,5' }, sourceHandle: 'right', targetHandle: 'left' },
  { id: 'en2', source: '2', target: 'n2', type: 'straight', style: { stroke: '#e2e8f0', strokeWidth: 1, strokeDasharray: '5,5' } },
  { id: 'en4', source: '4', target: 'n4', type: 'straight', style: { stroke: '#e2e8f0', strokeWidth: 1, strokeDasharray: '5,5' } },
  { id: 'en6', source: '6', target: 'n6', type: 'straight', style: { stroke: '#e2e8f0', strokeWidth: 1, strokeDasharray: '5,5' } },
]

export default function ProductFlowchart() {
  return (
    <section className="w-full bg-slate-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            How We Do It
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            From seamless upload to actionable decision support, experience the complete intelligent imaging journey.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[800px] w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 pointer-events-none"></div>
          
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.2 }}
            proOptions={{ hideAttribution: true }}
            panOnScroll={false}
            zoomOnScroll={false}
            nodesDraggable={false}
            className="bg-transparent"
          >
            {/* <Background color="#94a3b8" gap={16} size={1} className="opacity-10" /> */}
            {/* <Controls className="bg-white shadow-lg border border-slate-200 rounded-lg" /> */}
          </ReactFlow>
        </motion.div>
      </div>
    </section>
  )
}

