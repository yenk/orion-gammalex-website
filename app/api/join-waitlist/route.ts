import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, phone, company, user_type } = await req.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ success: false, message: 'Invalid email.' }, { status: 400 });
    }

    if (phone && typeof phone !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid phone number.' }, { status: 400 });
    }

    if (company && typeof company !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid company name.' }, { status: 400 });
    }

    if (user_type && typeof user_type !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid user type.' }, { status: 400 });
    }

    const { error } = await supabase.from('gammalex_waitlist').insert([
      { 
        email: email.trim(), 
        phone: phone?.trim() || null,
        company: company?.trim() || null,
        user_type: user_type?.trim() || null,
      }
    ]);

    if (error) {
      console.error('Error storing waitlist entry:', JSON.stringify(error, null, 2));
      if (error.code === '23505') {
        return NextResponse.json(
          { success: false, message: 'This email is already on the waitlist.' },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { success: false, message: 'Failed to add to waitlist.' },
        { status: 500 }
      );
    }

    // Send confirmation email via Resend
    try {
      await resend.emails.send({
        from: 'no-reply@gammalex.com',
        to: email,
        subject: 'Thanks for Joining the GammaLex Waitlist',
        html: `<p>Hi there,</p>
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