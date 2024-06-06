import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: 'smtp.gmail.com', // Substitua pelo seu host SMTP
    port: 587, // Substitua pela porta correta
    secure: false, // true para port 465, false para outras portas
    auth: {
      user: 'carlosdalsoler@gmail.com', // Seu email
      pass: 'rrdw ivdu bckq ocww', // Sua senha
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'carlosdalsoler@gmail.com', // Substitua pelo email do destinatário
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}