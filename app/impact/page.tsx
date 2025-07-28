"use client"

import { ImpactHero, ImpactStats, ImpactCTA } from '@/components/impact';

export default function ImpactPage() {
  return (
    <main className="bg-black text-white font-inter">
      <ImpactHero />
      <ImpactStats />
      <ImpactCTA />
    </main>
  );
} 