"use client"

import { EthicalAIHero, EthicalAIPractices, EthicalAIPrinciples, OpenSourceSection } from '@/components/ethical-ai';
import FooterGV from '@/components/FooterGV';
import Navigation from '@/components/Navigation';

export default function EthicalAIPage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <EthicalAIHero />
      <EthicalAIPrinciples />
      <OpenSourceSection />
      <EthicalAIPractices />
      <FooterGV />
    </main>
  );
} 