"use client"

import { AboutHero, AboutContent } from '@/components/about';
import FooterGV from '@/components/FooterGV';
import Navigation from '@/components/Navigation';

export default function AboutPage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <AboutHero />
      <AboutContent />
      <FooterGV />
    </main>
  );
} 