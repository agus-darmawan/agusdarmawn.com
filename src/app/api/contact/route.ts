import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const username = process.env.NEXT_EMAIL_USERNAME;
  const password = process.env.NEXT_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PERSONAL_EMAIL;

  if (!username || !password || !myEmail) {
    return NextResponse.json(
      { message: 'Environment variables not set' },
      { status: 500 },
    );
  }

  try {
    const formData = await request.formData();
    const name = formData.get('name') as string | null;
    const email = formData.get('email') as string | null;
    const message = formData.get('message') as string | null;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Invalid form data' },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: username,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website Email from ${email}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Success: email was sent' });
  } catch (error) {
    return NextResponse.json(
      { message: 'COULD NOT SEND MESSAGE' },
      { status: 500 },
    );
  }
}
