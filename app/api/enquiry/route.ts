import { NextResponse } from "next/server";
import { enquiryFormSchema } from "@/lib/validations/enquiry";
import { createClient } from "@/lib/supabase/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate the incoming data against the schema
    const validatedData = enquiryFormSchema.parse(body);

    const supabase = await createClient();

    // Map to snake_case for the database
    const dbPayload = {
      full_name: validatedData.fullName,
      mobile: validatedData.mobile,
      email: validatedData.email || null,
      preferred_travel_date: validatedData.checkInDate,
      guests: validatedData.adults + validatedData.children,
      accommodation_preference: validatedData.accommodationPreference || null,
      requirement: validatedData.requirement 
        ? `Rooms: ${validatedData.rooms}, Adults: ${validatedData.adults}, Children: ${validatedData.children}\nCheck-out Date: ${validatedData.checkOutDate}\n\n${validatedData.requirement}`
        : `Rooms: ${validatedData.rooms}, Adults: ${validatedData.adults}, Children: ${validatedData.children}\nCheck-out Date: ${validatedData.checkOutDate}`,
      source_page: validatedData.sourcePage,
      status: "new",
    };

    const { error } = await supabase
      .from("enquiries")
      .insert([dbPayload]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, message: "Unable to submit enquiry. Please try again." },
        { status: 500 }
      );
    }

    // Send email notification via Hostinger SMTP
    try {
      const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
      const smtpPort = Number(process.env.SMTP_PORT) || 465;
      const smtpUser = process.env.SMTP_USER || process.env.SMTP_EMAIL || "reservation@theaambyvalleyscity.com";
      const smtpPass = process.env.SMTP_PASSWORD || "Aamby@123890#";
      const toEmail = process.env.RESERVATION_EMAIL || process.env.SMTP_EMAIL || "reservation@theaambyvalleyscity.com";

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"Aamby Valley City" <${smtpUser}>`,
        to: toEmail,
        replyTo: validatedData.email || smtpUser,
        subject: `Aamby Valley City - New Enquiry from ${validatedData.fullName}`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="background-color: #0f3d2f; color: #ffffff; padding: 20px; text-align: center;">
              <h2 style="margin: 0; font-weight: 600; letter-spacing: 0.5px;">New Stay Enquiry Received</h2>
              <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Aamby Valley City</p>
            </div>
            
            <div style="padding: 24px; background-color: #fafafa;">
              <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569; width: 40%;">Guest Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${validatedData.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Mobile Number</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">
                    <a href="tel:${validatedData.mobile}" style="color: #0f3d2f; text-decoration: none; font-weight: 600;">${validatedData.mobile}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Guest Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">
                    ${validatedData.email ? `<a href="mailto:${validatedData.email}" style="color: #0f3d2f; text-decoration: none;">${validatedData.email}</a>` : '<span style="color: #94a3b8; font-style: italic;">N/A</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Check-in Date</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${validatedData.checkInDate}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Check-out Date</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${validatedData.checkOutDate}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Total Guests</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${validatedData.adults} Adults, ${validatedData.children} Children</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Rooms</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${validatedData.rooms}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Accommodation Preference</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${validatedData.accommodationPreference || '<span style="color: #94a3b8; font-style: italic;">Any</span>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Special Requirements</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${validatedData.requirement ? validatedData.requirement.replace(/\n/g, '<br/>') : '<span style="color: #94a3b8; font-style: italic;">None provided</span>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; color: #475569;">Source Page</td>
                  <td style="padding: 12px 0; color: #1e293b; font-weight: 500; font-size: 13px;">${validatedData.sourcePage}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
              This email was automatically generated from the Aamby Valley City website.
            </div>
          </div>
        `,
        text: `New Stay Enquiry Received:
Name: ${validatedData.fullName}
Mobile: ${validatedData.mobile}
Email: ${validatedData.email || "N/A"}
Check-in Date: ${validatedData.checkInDate}
Check-out Date: ${validatedData.checkOutDate}
Guests: ${validatedData.adults} Adults, ${validatedData.children} Children
Rooms: ${validatedData.rooms}
Accommodation Preference: ${validatedData.accommodationPreference || "N/A"}
Special Requirements: ${validatedData.requirement || "None provided"}
Source Page: ${validatedData.sourcePage}`
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Error sending email notification:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    
    // Zod validation errors
    if (error && typeof error === 'object' && 'name' in error && error.name === 'ZodError' && 'errors' in error) {
      return NextResponse.json(
        { success: false, message: "Invalid form data.", errors: (error as { errors: unknown }).errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Unable to submit enquiry. Please try again." },
      { status: 500 }
    );
  }
}
