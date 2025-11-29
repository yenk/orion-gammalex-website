import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "GammaLex <contact@gammalex.com>",
      to: "gammalex@gammalex.com",
      subject: `Contact Form Message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });
  } catch (error) {
    console.error("Resend error (admin notification):", error);
    // Do not fail the request if the notification cannot be sent
  }

  const messageHtml = `<p>Hi ${name || 'there'},</p>
    <p>Thank you for reaching out to GammaLex. We're truly excited about your interest and look forward to exploring how we can support your work in the legal space.</p>
    <p>Our team is reviewing your message and will be in touch shortly. In the meantime, feel free to explore how we're redefining malpractice intelligence at <a href="https://gammalex.com">gammalex.com</a>.</p>
    <p>Warm regards,<br />The GammaLex Team</p>`;

  try {
    await resend.emails.send({
      from: 'GammaLex <gammalex@gammalex.com>',
      to: email,
      subject: 'Welcome to GammaLex — We\'re Excited to Connect',
      html: messageHtml,
    });
    return NextResponse.json({ message: "Message sent" }, { status: 200 });
  } catch (error) {
    console.error("Resend error (auto-reply):", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}