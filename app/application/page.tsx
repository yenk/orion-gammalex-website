"use client"

import { ApplicationHero, ApplicationDetailed } from '@/components/application';
import FooterGV from '@/components/FooterGV';
import Navigation from '@/components/Navigation';

export default function ApplicationPage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <ApplicationHero />
      <ApplicationDetailed />
      <FooterGV />
    </main>
  );
} 