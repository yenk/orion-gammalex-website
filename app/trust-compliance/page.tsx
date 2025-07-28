import { TrustComplianceHero, TrustComplianceStandards, TrustComplianceSecurity, TrustComplianceCertifications, TrustComplianceCTA } from '@/components/trust-compliance';
import Navigation from '@/components/Navigation';

export default function TrustCompliancePage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <TrustComplianceHero />
      <TrustComplianceStandards />
      <TrustComplianceSecurity />
      <TrustComplianceCertifications />
      <TrustComplianceCTA />
    </main>
  );
} 