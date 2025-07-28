"use client"

import { ProblemsHero, ProblemsDetailed } from '@/components/problemswesolve';
import FooterGV from '@/components/FooterGV';
import Navigation from '@/components/Navigation';

export default function ProblemsWeSolvePage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <ProblemsHero />
      <ProblemsDetailed />
      <FooterGV />
    </main>
  );
} 