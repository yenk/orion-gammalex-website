import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const sender = payload.sender; // e.g., "user@email.com"
  const recipient = payload.recipient; // e.g., "legal@gammalex.com" or "privacy@gammalex.com"

  if (!sender || !recipient) {
    return NextResponse.json({ message: "Missing sender or recipient" }, { status: 400 });
  }

  let from = "";
  let subject = "";
  let html = "";

  if (recipient.toLowerCase().includes("legal")) {
    from = "GammaLex Legal <legal@gammalex.com>";
    subject = "We Received Your Legal Inquiry";
    html = `
      <p>Hi,</p>
      <p>Thank you for reaching out to the GammaLex legal team.</p>
      <p>We've received your message and will review it shortly. If your matter is urgent, please include "URGENT" in the subject line and we'll prioritize your response.</p>
      <p>– Legal Team at GammaLex</p>
    `;
  } else if (recipient.toLowerCase().includes("privacy")) {
    from = "GammaLex Privacy <privacy@gammalex.com>";
    subject = "Your Privacy Request Has Been Received";
    html = `
      <p>Hi,</p>
      <p>Thank you for contacting GammaLex regarding your privacy rights.</p>
      <p>We've received your request and will respond in accordance with applicable data protection laws (e.g., GDPR or CCPA). If needed, we may follow up to confirm your identity or request additional information.</p>
      <p>– Privacy Team at GammaLex</p>
    `;
  } else {
    return NextResponse.json({ message: "No auto-reply configured for this address" }, { status: 200 });
  }

  try {
    await resend.emails.send({
      from,
      to: sender,
      subject,
      html,
    });
    return NextResponse.json({ message: "Auto-reply sent" }, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ message: "Failed to send auto-reply" }, { status: 500 });
  }
} 