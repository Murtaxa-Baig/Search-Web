import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, subject, message } = body || {};

        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

        const info = await transporter.sendMail({
            from: `"Contact Form" <${email}>`,
            to: process.env.GMAIL_USER || `supportappnaya@gmail.com`,
            replyTo: email,
            subject: `New Message from ${firstName} ${lastName}: ${subject || 'No Subject'}`,
            html,
        });

        return NextResponse.json({
            message: "Email sent successfully",
            id: info.messageId,
        });
    } catch (error: any) {
        console.error("MAIL_ERROR:", error);
        return NextResponse.json(
            { error: error?.message || "Internal server error" },
            { status: 500 }
        );
    }
}
