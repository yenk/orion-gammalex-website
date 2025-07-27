"use client"

import { ProblemsHero, ProblemsDetailed, ProblemsCTA } from '@/components/problemswesolve';

export default function ProblemsWeSolvePage() {
  return (
    <main className="bg-black text-white font-inter">
      <ProblemsHero />
      <ProblemsDetailed />
      <ProblemsCTA />
    </main>
  );
} 