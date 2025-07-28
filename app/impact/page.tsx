"use client"

import { ImpactHero, ImpactStats, ImpactCTA } from '@/components/impact';
import Navigation from '@/components/Navigation';

export default function ImpactPage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <ImpactHero />
      <ImpactStats />
      <ImpactCTA />
    </main>
  );
} 