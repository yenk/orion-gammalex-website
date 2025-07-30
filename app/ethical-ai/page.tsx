"use client"

import { EthicalAIHero, EthicalAIPractices, EthicalAIPrinciples } from '@/components/ethical-ai';
import FooterGV from '@/components/FooterGV';
import Navigation from '@/components/Navigation';

export default function EthicalAIPage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <EthicalAIHero />
      <EthicalAIPrinciples />
      <EthicalAIPractices />
      <FooterGV />
    </main>
  );
} 