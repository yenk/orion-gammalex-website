import { TrustComplianceHero, TrustComplianceStandards, TrustComplianceSecurity, TrustComplianceCTA } from '@/components/trust-compliance';

export default function TrustCompliancePage() {
  return (
    <main className="bg-black text-white font-inter">
      <TrustComplianceHero />
      <TrustComplianceStandards />
      <TrustComplianceSecurity />
      <TrustComplianceCTA />
    </main>
  );
} 