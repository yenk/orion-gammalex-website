"use client"

import { AdvisoryCouncilHero, AdvisoryCouncilContent } from '@/components/advisory-council';
import FooterGV from '@/components/FooterGV';
import Navigation from '@/components/Navigation';

export default function AdvisoryCouncilPage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <AdvisoryCouncilHero />
      <AdvisoryCouncilContent />
      <FooterGV />
    </main>
  );
} 