import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // In production, you would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Resend
    // For now, we'll log the submission and you can integrate your preferred service

    console.log("New waitlist signup:", { name, email });
    console.log("Notification should be sent to: nidrosoft@outlook.com");

    // Example integration with a service like Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Nourishr <noreply@nourishr.com>',
    //   to: 'nidrosoft@outlook.com',
    //   subject: 'New Waitlist Signup!',
    //   html: `
    //     <h2>New Waitlist Signup</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //   `,
    // });

    // For now, store in a simple way (in production, use a database)
    // You can also use services like:
    // - Airtable
    // - Google Sheets API
    // - Supabase
    // - MongoDB

    return NextResponse.json(
      { 
        success: true, 
        message: "Successfully joined the waitlist!",
        data: { name, email }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
