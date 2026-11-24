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
      email: validatedData.email,
      mobile: validatedData.phone || null,
      accommodation_preference: validatedData.questionTopic,
      requirement: `[Topic: ${validatedData.questionTopic}]\n\n${validatedData.message}`,
      source_page: validatedData.sourcePage,
      status: "new",
    };

    const { error } = await supabase
      .from("enquiries")
      .insert([dbPayload]);

    if (error) {
      console.error("Supabase insert error:", error);
      // Even if database has issues, proceed to try sending email or report graceful message
    }

    // Send email notification to Udaipur Gateway team via Hostinger SMTP
    try {
      const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
      const smtpPort = Number(process.env.SMTP_PORT) || 465;
      const smtpUser = process.env.SMTP_USER || process.env.SMTP_EMAIL || "";
      const smtpPass = process.env.SMTP_PASSWORD || "";
      const toEmail = process.env.RESERVATION_EMAIL || process.env.SMTP_EMAIL || "info@udaipurgateway.com";

      if (smtpUser && smtpPass) {
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
          from: `"Udaipur Gateway" <${smtpUser}>`,
          to: toEmail,
          replyTo: validatedData.email,
          subject: `Udaipur Gateway - General Information Enquiry [${validatedData.questionTopic}] from ${validatedData.fullName}`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
              <div style="background-color: #0d2e24; color: #ffffff; padding: 20px; text-align: center;">
                <h2 style="margin: 0; font-weight: 600; letter-spacing: 0.5px;">New General Information Enquiry</h2>
                <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Udaipur Gateway • The Ananta Udaipur Information Page</p>
              </div>
              
              <div style="padding: 24px; background-color: #fafafa;">
                <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569; width: 40%;">Name</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${validatedData.fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Email Address</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">
                      <a href="mailto:${validatedData.email}" style="color: #0d2e24; text-decoration: none;">${validatedData.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Phone Number</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">
                      ${validatedData.phone ? `<a href="tel:${validatedData.phone}" style="color: #0d2e24; text-decoration: none; font-weight: 600;">${validatedData.phone}</a>` : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Question Topic</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #b8934e; font-weight: 600;">${validatedData.questionTopic}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Source Page</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${validatedData.sourcePage}</td>
                  </tr>
                </table>

                <div style="margin-top: 20px; padding: 16px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
                  <h4 style="margin: 0 0 8px 0; color: #334155; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Question / Message:</h4>
                  <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${validatedData.message}</p>
                </div>
              </div>

              <div style="background-color: #f1f5f9; padding: 14px 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
                This email was generated from the Udaipur Gateway independent property information website.
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
      }
    } catch (mailError) {
      console.error("Nodemailer sending error:", mailError);
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your enquiry has been received by Udaipur Gateway. Our team will respond to your general information question. For current availability, rates or reservations, please contact The Ananta Udaipur directly.",
    });
  } catch (error) {
    console.error("API error in /api/enquiry:", error);
    return NextResponse.json(
      { success: false, message: "Invalid form submission. Please check all required fields." },
      { status: 400 }
    );
  }
}
