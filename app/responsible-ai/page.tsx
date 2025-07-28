import { ResponsibleAIHero, ResponsibleAIPrinciples, ResponsibleAIPractices, ResponsibleAICTA } from '@/components/responsible-ai';
import Navigation from '@/components/Navigation';

export default function ResponsibleAIPage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <ResponsibleAIHero />
      <ResponsibleAIPrinciples />
      <ResponsibleAIPractices />
      <ResponsibleAICTA />
    </main>
  );
} 