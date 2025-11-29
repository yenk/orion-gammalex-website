import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, message, user_type } = await req.json();

    // Require all fields except message
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ success: false, message: 'Name is required.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ success: false, message: 'Valid email is required.' }, { status: 400 });
    }
    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return NextResponse.json({ success: false, message: 'Phone is required.' }, { status: 400 });
    }
    if (!company || typeof company !== 'string' || !company.trim()) {
      return NextResponse.json({ success: false, message: 'Company is required.' }, { status: 400 });
    }
    if (user_type && typeof user_type !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid user type.' }, { status: 400 });
    }

    const adminHtml = `<p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>User type:</strong> ${user_type || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'N/A'}</p>`;

    try {
      await resend.emails.send({
        from: 'no-reply@gammalex.com',
        to: 'gammalex@gammalex.com',
        subject: 'New Waitlist Submission',
        html: adminHtml,
      });
    } catch (emailError) {
      console.error('Admin notification error:', emailError);
    }

    try {
      await resend.emails.send({
        from: 'no-reply@gammalex.com',
        to: email,
        subject: 'Thanks for Joining the GammaLex Waitlist',
        html: `<p>Hi ${name},</p>
               <p>Thanks for joining the <strong>GammaLex</strong> waitlist. We'll keep you updated as we roll out early access.</p>`,
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
    }

    return NextResponse.json({ success: true, message: 'You have been added to the waitlist!' });
  } catch (error) {
    console.error('Error in waitlist signup:', error);
    return NextResponse.json({ success: false, message: 'Something went wrong.' }, { status: 500 });
  }
}