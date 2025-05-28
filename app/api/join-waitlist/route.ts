import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { email, phone, company, user_type } = await req.json();
    
    // Validate email (required)
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ success: false, message: 'Invalid email.' }, { status: 400 });
    }

    // Validate phone if provided
    if (phone && typeof phone !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid phone number.' }, { status: 400 });
    }

    // Validate company if provided
    if (company && typeof company !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid company name.' }, { status: 400 });
    }

    // Validate user_type if provided
    if (user_type && typeof user_type !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid user type.' }, { status: 400 });
    }

    // Store data in Supabase
    const { error } = await supabase
      .from('waitlist')
      .insert([{ 
        email, 
        phone: phone || null,
        company: company || null,
        user_type: user_type || null,
        created_at: new Date().toISOString() 
      }]);

    if (error) {
      console.error('Error storing waitlist entry:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to add to waitlist.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'You have been added to the waitlist!' });
  } catch (error) {
    console.error('Error in waitlist signup:', error);
    return NextResponse.json({ success: false, message: 'Something went wrong.' }, { status: 500 });
  }
} 