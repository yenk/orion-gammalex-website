"use client"

import { ProblemsHero, ProblemsGrid, ProblemsCTA } from '@/components/problemswesolve';

export default function ProblemsWeSolvePage() {
  return (
    <main className="bg-black text-white font-inter">
      <ProblemsHero />
      <ProblemsGrid />
      <ProblemsCTA />
    </main>
  );
} 