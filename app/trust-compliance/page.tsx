import { TrustComplianceHero, TrustComplianceStandards, TrustComplianceCertifications } from '@/components/trust-compliance';
import Navigation from '@/components/Navigation';
import FooterGV from '@/components/FooterGV';

export default function TrustCompliancePage() {
  return (
    <main className="bg-black text-white font-inter">
      <Navigation />
      <TrustComplianceHero />
      <TrustComplianceStandards />
      <TrustComplianceCertifications />
      <FooterGV />
    </main>
  );
} 