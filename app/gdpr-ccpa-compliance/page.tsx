import React from "react";

export default function GdprCcpaCompliance() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">GDPR & CCPA Compliance Statement</h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: May 29, 2025 | Last Updated: May 29, 2025</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Your Privacy Rights</h2>
        <p>
          GammaLex is committed to protecting your privacy and complying with data protection laws including the General Data Protection Regulation ("GDPR") and the California Consumer Privacy Act ("CCPA"). As a pre-seed startup, our data practices are evolving, but our principles remain firm: we aim to collect minimal data, safeguard it responsibly, and maintain transparency with our users.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What Data We Collect</h2>
        <p>
          We may collect basic personal information such as your name, email address, and usage data when you visit our site or contact us. We do not sell your data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Your Rights Under GDPR</h2>
        <ul className="list-disc list-inside">
          <li>Right to access your personal data</li>
          <li>Right to rectify inaccuracies</li>
          <li>Right to erasure ("right to be forgotten")</li>
          <li>Right to restrict or object to processing</li>
          <li>Right to data portability</li>
        </ul>
        <p className="mt-2">
          If you reside in the EU or EEA and wish to exercise these rights, contact us at <a href="mailto:privacy@gammalex.com" className="text-blue-600 underline">privacy@gammalex.com</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Your Rights Under CCPA</h2>
        <ul className="list-disc list-inside">
          <li>Right to know what personal data we collect</li>
          <li>Right to request deletion of your data</li>
          <li>Right to opt-out of sale of personal information (we do not sell personal information)</li>
          <li>Right to non-discrimination for exercising CCPA rights</li>
        </ul>
        <p className="mt-2">
          If you are a California resident and would like to exercise any of these rights, email <a href="mailto:privacy@gammalex.com" className="text-blue-600 underline">privacy@gammalex.com</a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Future Compliance</h2>
        <p>
          As GammaLex grows, we will continue to evolve our privacy practices to remain compliant with applicable laws and industry best practices. Significant updates will be reflected in our Privacy Policy and this statement.
        </p>
      </section>
    </div>
  );
} 