"use client"

import { WhatWeDoHero, WhatWeDoContent } from '@/components/whatwedo';
import FooterGV from '@/components/FooterGV';
import Navigation from '@/components/Navigation';

export default function WhatWeDoPage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <WhatWeDoHero />
      <WhatWeDoContent />
      <FooterGV />
    </main>
  );
} 