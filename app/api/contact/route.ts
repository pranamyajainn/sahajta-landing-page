import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, project, budget } = body;

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
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Project: ${project}`);
        console.log(`Budget: ${budget || 'Not specified'}`);
        console.log(`Timestamp: ${new Date().toISOString()}`);
        console.log('==============================');

        return NextResponse.json(
            { success: true, message: 'Submission received.' },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Server error. Please try again.' },
            { status: 500 }
        );
    }
}
