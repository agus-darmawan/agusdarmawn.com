import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      message: 'Welcome to Agus Darmawan Website!',
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: 'Something went wrong ! Please try again',
    });
  }
}
