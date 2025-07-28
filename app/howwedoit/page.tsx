"use client"

import { HowWeDoItHero, HowWeDoItDetailed } from '@/components/howwedoit';
import FooterGV from '@/components/FooterGV';

export default function HowWeDoItPage() {
  return (
    <main className="bg-black text-white font-inter">
      <HowWeDoItHero />
      <HowWeDoItDetailed />
      <FooterGV />
    </main>
  );
} 