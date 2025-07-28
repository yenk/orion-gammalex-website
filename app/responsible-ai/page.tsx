import { ResponsibleAIHero, ResponsibleAIPrinciples, ResponsibleAIPractices } from '@/components/responsible-ai';
import Navigation from '@/components/Navigation';
import FooterGV from '@/components/FooterGV';

export default function ResponsibleAIPage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <ResponsibleAIHero />
      <ResponsibleAIPrinciples />
      <ResponsibleAIPractices />
      <FooterGV />
    </main>
  );
} 