import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 font-inter">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6 text-sm text-gray-500">Effective Date: May 29, 2025 | Last Updated: May 29, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          GammaLex ("we", "our", or "us") is committed to protecting your privacy. This
          Privacy Policy describes how we collect, use, and share personal
          information through our website <a href="https://gammalex.com" className="text-blue-600 underline">https://gammalex.com</a>, including any
          subdomains like counsel.gammalex.com. This policy reflects our current practices
          as an early-stage company and may evolve as our services and operations grow.
          By using our site, you agree to the terms of this Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc list-inside">
          <li><strong>Personal Information:</strong> Name, email, phone number, legal case data (if voluntarily submitted)</li>
          <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages</li>
          <li><strong>Cookies & Tracking:</strong> To personalize content, analyze traffic, and improve services</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside">
          <li>Provide and improve our services</li>
          <li>Communicate with you about legal AI features and updates</li>
          <li>Analyze site usage for optimization</li>
          <li>Ensure platform security and fraud prevention</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="mt-2">
          As we develop our offerings, our use of data may expand. We will update this policy accordingly to maintain transparency.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. How We Share Your Information</h2>
        <ul className="list-disc list-inside">
          <li><strong>Service providers:</strong> Hosting, analytics (e.g., Vercel, Supabase, Google Analytics)</li>
          <li><strong>Legal partners:</strong> With your explicit consent</li>
          <li><strong>Legal authorities:</strong> If required to comply with law or enforce terms</li>
        </ul>
        <p className="mt-2">
          We aim to keep data sharing minimal and purposeful as we scale.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
        <p>We retain your data only as long as necessary for the purposes outlined, unless longer retention is required by law. As a pre-seed company, we are still defining our data lifecycle processes and will reflect changes here over time.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Security</h2>
        <p>We use encryption, access control, and best practices to protect your data. However, as an early-stage platform, we are continuously evolving our infrastructure to meet growing security needs.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have rights to:</p>
        <ul className="list-disc list-inside">
          <li>Access or update your personal information</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications</li>
        </ul>
        <p className="mt-2">To make a request, contact us at: <a href="mailto:privacy@gammalex.com" className="text-blue-600 underline">privacy@gammalex.com</a></p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. International Data Transfers</h2>
        <p>If you're located outside the United States, note that your information may be transferred and processed in the U.S. We are exploring best practices for international compliance as our user base grows.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Children's Privacy</h2>
        <p>GammaLex does not knowingly collect information from children under 13 (or 16 in some jurisdictions). If we become aware of such data, we will delete it promptly.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy occasionally. As we iterate on our features and business model during the pre-seed stage, changes are expected. We will notify you by updating the effective date or providing prominent notice on the site.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
        <p>If you have questions or concerns, reach out to:</p>
        <p className="mt-2">
          <strong>GammaLex</strong><br />
          <a href="https://gammalex.com" className="text-blue-600 underline">https://gammalex.com</a><br />
          📧 <a href="mailto:privacy@gammalex.com" className="text-blue-600 underline">privacy@gammalex.com</a>
        </p>
      </section>
    </div>
  );
} 