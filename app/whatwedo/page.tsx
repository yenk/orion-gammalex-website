"use client"

import { WhatWeDoHero, WhatWeDoContent } from '@/components/whatwedo';
import FooterGV from '@/components/FooterGV';

export default function WhatWeDoPage() {
  return (
    <main className="bg-black text-white font-inter">
      <WhatWeDoHero />
      <WhatWeDoContent />
      <FooterGV />
    </main>
  );
} 