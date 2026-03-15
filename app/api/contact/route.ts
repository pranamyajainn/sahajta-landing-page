import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

const RECIPIENT_EMAILS = [
    'pranamyajeet@gmail.com',
    'shubhangsethi@gmail.com',
    'hello@sahajta.com',
    'sahajta.ai@gmail.com',
];

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, project, budget, source } = body;

        // Validate required fields
        if (!name || !email || !project) {
            return NextResponse.json(
                { error: 'Name, email, and project description are required.' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address.' },
                { status: 400 }
            );
        }

        // Log to console (Vercel captures these as function logs)
        console.log('=== NEW CONTACT SUBMISSION ===');
        console.log(`Source: ${source || 'form'}`);
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone || 'Not provided'}`);
        console.log(`Project: ${project}`);
        console.log(`Budget: ${budget || 'Not specified'}`);
        console.log(`Timestamp: ${new Date().toISOString()}`);
        console.log('==============================');

        // Send email notification
        const sourceLabel = source === 'popup' ? '🔔 Popup Form' : '📋 Contact Form';
        const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

        const htmlBody = `
            <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F5F0E8; border: 1px solid #2D5016; padding: 0;">
                <div style="background: #0B2818; padding: 24px 32px;">
                    <h1 style="color: #F5F0E8; font-size: 18px; margin: 0; letter-spacing: 0.1em; font-weight: 400;">
                        SAHAJTA AI — NEW LEAD
                    </h1>
                </div>
                <div style="padding: 32px;">
                    <p style="font-size: 11px; color: #0B2818; opacity: 0.5; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 24px 0;">
                        ${sourceLabel} · ${timestamp}
                    </p>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid rgba(45,80,22,0.15); font-size: 11px; color: #0B2818; opacity: 0.5; letter-spacing: 0.1em; text-transform: uppercase; width: 120px; vertical-align: top;">Name</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid rgba(45,80,22,0.15); font-size: 15px; color: #0B2818; font-weight: 500;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid rgba(45,80,22,0.15); font-size: 11px; color: #0B2818; opacity: 0.5; letter-spacing: 0.1em; text-transform: uppercase; width: 120px; vertical-align: top;">Email</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid rgba(45,80,22,0.15); font-size: 15px; color: #0B2818;">
                                <a href="mailto:${email}" style="color: #2D5016; text-decoration: underline;">${email}</a>
                            </td>
                        </tr>
                        ${phone ? `
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid rgba(45,80,22,0.15); font-size: 11px; color: #0B2818; opacity: 0.5; letter-spacing: 0.1em; text-transform: uppercase; width: 120px; vertical-align: top;">Phone</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid rgba(45,80,22,0.15); font-size: 15px; color: #0B2818;">${phone}</td>
                        </tr>
                        ` : ''}
                        ${budget ? `
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid rgba(45,80,22,0.15); font-size: 11px; color: #0B2818; opacity: 0.5; letter-spacing: 0.1em; text-transform: uppercase; width: 120px; vertical-align: top;">Budget</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid rgba(45,80,22,0.15); font-size: 15px; color: #0B2818; font-weight: 500;">${budget}</td>
                        </tr>
                        ` : ''}
                        <tr>
                            <td style="padding: 12px 0; font-size: 11px; color: #0B2818; opacity: 0.5; letter-spacing: 0.1em; text-transform: uppercase; width: 120px; vertical-align: top;">Project</td>
                            <td style="padding: 12px 0; font-size: 15px; color: #0B2818; line-height: 1.6;">${project}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid rgba(45,80,22,0.15);">
                        <a href="mailto:${email}?subject=Re: Your project inquiry — Sahajta AI&body=Hi ${name},%0A%0AThank you for reaching out to Sahajta AI." 
                           style="display: inline-block; background: #0B2818; color: #F5F0E8; padding: 12px 24px; text-decoration: none; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">
                            Reply to ${name} →
                        </a>
                    </div>
                </div>
            </div>
        `;

        const textBody = `
NEW LEAD — ${sourceLabel}
${timestamp}

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${budget ? `Budget: ${budget}` : ''}
Project: ${project}
        `.trim();

        await Promise.all(
            RECIPIENT_EMAILS.map((recipient) =>
                transporter.sendMail({
                    from: `"Sahajta AI Website" <${process.env.GMAIL_USER}>`,
                    to: recipient,
                    replyTo: email,
                    subject: `🚀 New Lead: ${name} — ${budget || 'No budget specified'}`,
                    text: textBody,
                    html: htmlBody,
                })
            )
        );

        console.log('✅ Email sent successfully to all recipients');

        return NextResponse.json(
            { success: true, message: 'Submission received.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('❌ Contact form error:', error);
        return NextResponse.json(
            { error: 'Server error. Please try again.' },
            { status: 500 }
        );
    }
}
