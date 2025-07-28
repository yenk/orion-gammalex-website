"use client"

import { HowWeDoItHero, HowWeDoItDetailed } from '@/components/howwedoit';
import FooterGV from '@/components/FooterGV';
import Navigation from '@/components/Navigation';

export default function HowWeDoItPage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <HowWeDoItHero />
      <HowWeDoItDetailed />
      <FooterGV />
    </main>
  );
} 