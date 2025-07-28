import { TrustComplianceHero, TrustComplianceStandards, TrustComplianceSecurity, TrustComplianceCTA } from '@/components/trust-compliance';
import Navigation from '@/components/Navigation';

export default function TrustCompliancePage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <TrustComplianceHero />
      <TrustComplianceStandards />
      <TrustComplianceSecurity />
      <TrustComplianceCTA />
    </main>
  );
} 