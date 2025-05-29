import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  // Insert into Supabase
  const { error: dbError } = await supabase.from('gammalex_contact').insert([
    {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      created_at: new Date().toISOString(),
    },
  ]);
  if (dbError) {
    console.error('Supabase insert error:', dbError);
    return NextResponse.json({ message: 'Failed to save contact info' }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: "GammaLex <contact@gammalex.com>",
      to: "gammalex@gammalex.com",
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