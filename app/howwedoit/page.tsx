"use client"

import { HowWeDoItHero, HowWeDoItMethodology, HowWeDoItCapabilities, HowWeDoItCTA } from '@/components/howwedoit';

export default function HowWeDoItPage() {
  return (
    <main className="bg-black text-white font-inter">
      <HowWeDoItHero />
      <HowWeDoItMethodology />
      <HowWeDoItCapabilities />
      <HowWeDoItCTA />
    </main>
  );
} 