import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ success: false, message: 'Invalid email.' }, { status: 400 });
    }
    // Log the email (replace with DB or email service in production)
    console.log('New waitlist signup:', email);
    return NextResponse.json({ success: true, message: 'You have been added to the waitlist!' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Something went wrong.' }, { status: 500 });
  }
} 