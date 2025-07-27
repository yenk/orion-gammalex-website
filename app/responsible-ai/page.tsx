import { ResponsibleAIHero, ResponsibleAIPrinciples, ResponsibleAIPractices, ResponsibleAICTA } from '@/components/responsible-ai';

export default function ResponsibleAIPage() {
  return (
    <main className="bg-black text-white font-inter">
      <ResponsibleAIHero />
      <ResponsibleAIPrinciples />
      <ResponsibleAIPractices />
      <ResponsibleAICTA />
    </main>
  );
} 