"use client"

import { ProblemsHero, ProblemsDetailed } from '@/components/problemswesolve';
import FooterGV from '@/components/FooterGV';

export default function ProblemsWeSolvePage() {
  return (
    <main className="bg-black text-white font-inter">
      <ProblemsHero />
      <ProblemsDetailed />
      <FooterGV />
    </main>
  );
} 