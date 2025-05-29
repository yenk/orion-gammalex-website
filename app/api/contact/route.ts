import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  // Check if contact already exists
  const { data: existingContact, error: checkError } = await supabase
    .from('gammalex_contact')
    .select('*')
    .eq('email', email.trim())
    .single();

  const isReturningUser = !!existingContact;

  // Save new contact if not already present
  if (!isReturningUser) {
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
    // Send admin notification for new contact
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
    } catch (error) {
      console.error("Resend error (admin notification):", error);
      // Don't fail the user if admin notification fails
    }
  }

  // Send appropriate auto-reply email
  const messageHtml = isReturningUser
    ? `<p>Hi ${name || 'there'},</p>
      <p>We're thrilled you've reached out again! We're truly excited about your continued interest and look forward to supporting your work in the legal space.</p>
      <p>We'll be in touch soon. In the meantime, feel free to explore <a href="https://gammalex.com">gammalex.com</a>.</p>
      <p>Warm regards,<br />The GammaLex Team</p>`
    : `<p>Hi ${name || 'there'},</p>
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
    return NextResponse.json({ message: isReturningUser ? "We've got you on record, thanks for reaching out!" : "Message sent" }, { status: 200 });
  } catch (error) {
    console.error("Resend error (auto-reply):", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
} 