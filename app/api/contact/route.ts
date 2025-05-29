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
      to: "yourteam@gammalex.com",
      subject: `New Contact Form Message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });
    return NextResponse.json({ message: "Message sent" }, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
} 