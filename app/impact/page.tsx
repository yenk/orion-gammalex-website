"use client"

import { ImpactHero, ImpactStats, ImpactCTA } from '@/components/impact';
import Navigation from '@/components/Navigation';
import FooterGV from '@/components/FooterGV';

export default function ImpactPage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <ImpactHero />
      <ImpactStats />
      <ImpactCTA />
      <FooterGV />
    </main>
  );
} 