import React from "react";

export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 font-inter">
      <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
      <p className="mb-6 text-sm text-gray-500">Effective Date: May 29, 2025 | Last Updated: May 29, 2025</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the GammaLex website (<a href="https://gammalex.com" className="text-blue-600 underline">gammalex.com</a>) or any associated services ("Services"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time to reflect evolving business practices, technology, or legal requirements. As a pre-seed stage company, such changes are expected. Continued use of the Services after updates constitutes your acceptance of the revised Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Use of Services</h2>
        <ul className="list-disc list-inside">
          <li>You must be at least 18 years old to use our Services.</li>
          <li>You agree not to misuse the Services or attempt unauthorized access.</li>
          <li>You agree not to submit any unlawful, misleading, or harmful information through our platform.</li>
        </ul>
        <p className="mt-2">
          Our platform is intended to assist with legal information and tools, not to replace licensed legal advice or attorney-client relationships.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
        <p>
          All content, trademarks, logos, and technology on our site are owned by or licensed to GammaLex. You may not copy, reproduce, or distribute our materials without written permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Disclaimers</h2>
        <p>
          Our Services are provided on an "as is" and "as available" basis. While we strive to provide helpful tools, we make no guarantees of accuracy, completeness, or legal validity. GammaLex is not a law firm and does not provide legal representation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
        <p>
          To the extent permitted by law, GammaLex shall not be liable for any indirect, incidental, or consequential damages arising from your use of our Services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Third-Party Links</h2>
        <p>
          Our site may contain links to third-party websites. GammaLex is not responsible for the content, policies, or practices of any third-party sites.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the Services at our discretion, especially in cases of suspected misuse.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of California, without regard to its conflict of laws principles.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          If you have questions about these Terms, contact us at:
        </p>
        <p className="mt-2">
          <strong>GammaLex</strong><br />
          <a href="https://gammalex.com" className="text-blue-600 underline">https://gammalex.com</a><br />
          📧 <a href="mailto:legal@gammalex.com" className="text-blue-600 underline">legal@gammalex.com</a>
        </p>
      </section>
    </div>
  );
} 