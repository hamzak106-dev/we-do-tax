import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email configuration:", {
        EMAIL_USER: process.env.EMAIL_USER ? "Set" : "Missing",
        EMAIL_PASS: process.env.EMAIL_PASS ? "Set" : "Missing",
      });
      return NextResponse.json(
        {
          error:
            "Email configuration not set up. Please check your .env.local file.",
        },
        { status: 500 }
      );
    }

    // Determine SMTP configuration based on email domain
    const emailDomain = process.env.EMAIL_USER?.split('@')[1];
    let transporterConfig;

    if (emailDomain === 'gmail.com') {
      // Gmail configuration
      transporterConfig = {
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      };
    } else if (emailDomain === 'outlook.com' || emailDomain === 'hotmail.com' || emailDomain === 'live.com') {
      // Outlook/Hotmail/Live configuration
      transporterConfig = {
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          ciphers: 'SSLv3',
          rejectUnauthorized: false
        }
      };
    } else {
      // Custom domain configuration (including wedotaxes.co)
      // Try Outlook/Office 365 SMTP first (most common for custom domains)
      transporterConfig = {
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          ciphers: 'SSLv3',
          rejectUnauthorized: false
        }
      };
    }

    console.log(`Attempting to configure email for domain: ${emailDomain}`);
    const transporter = nodemailer.createTransport(transporterConfig);

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log("Email transporter verified successfully");
    } catch (verifyError) {
      console.error("Email transporter verification failed:", verifyError);
      
      // Try alternative configuration if the first one fails
      if (emailDomain !== 'gmail.com') {
        console.log("Trying alternative SMTP configuration...");
        
        const alternativeConfig = {
          host: "mail." + emailDomain, // Try domain-specific SMTP
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            rejectUnauthorized: false
          }
        };

        const alternativeTransporter = nodemailer.createTransport(alternativeConfig);
        
        try {
          await alternativeTransporter.verify();
          console.log("Alternative email transporter verified successfully");
          // Use the alternative transporter for sending
          return await sendEmailWithTransporter(alternativeTransporter, { name, email, phone, service, message });
        } catch (altVerifyError) {
          console.error("Alternative transporter also failed:", altVerifyError);
        }
      }
      
      // Return detailed error information for debugging
      return NextResponse.json(
        {
          error: "Email configuration is invalid. Please check your credentials.",
          details: verifyError instanceof Error ? verifyError.message : "Unknown verification error",
          suggestions: [
            "1. Verify that your email and app password are correct",
            "2. If using Gmail, make sure you're using an App Password (not your regular password)",
            "3. If using Outlook/Office 365, make sure you're using an App Password",
            "4. If using a custom domain, verify your email provider's SMTP settings",
            "5. Make sure 2-factor authentication is enabled for your email account"
          ],
          debugInfo: {
            emailDomain,
            configType: emailDomain === 'gmail.com' ? 'Gmail Service' : (emailDomain === 'outlook.com' || emailDomain === 'hotmail.com' ? 'Outlook Service' : 'Custom SMTP'),
            user: process.env.EMAIL_USER,
          }
        },
        { status: 500 }
      );
    }

    // Send email using the verified transporter
    return await sendEmailWithTransporter(transporter, { name, email, phone, service, message });

  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      {
        error: "Failed to process contact form",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Helper function to send email
async function sendEmailWithTransporter(
  transporter: nodemailer.Transporter, 
  formData: { name: string; email: string; phone?: string; service: string; message: string }
) {
  const { name, email, phone, service, message } = formData;

    // Email content - Send to info@wedotaxes.co
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@wedotaxes.co",
      subject: `WE DO TAX - GENERAL INQUIRY - ${service}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Inquiry Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                  
                  <!-- Header with Logo -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0B3D91 0%, #1F5893 100%); padding: 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                        New Contact Form Submission
                      </h1>
                      <p style="color: #ffc107; margin: 10px 0 0 0; font-size: 16px; font-weight: 600;">
                        Professional Tax & Accounting Services
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Contact Information Section -->
                  <tr>
                    <td style="padding: 30px;">
                      <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-left: 4px solid #ffc107; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
                        <h2 style="color: #0B3D91; margin: 0 0 20px 0; font-size: 20px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
                          📋 Contact Information
                        </h2>
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">
                              <strong style="color: #0B3D91; min-width: 120px; display: inline-block;">Name:</strong>
                              <span style="color: #333; font-weight: 500;">${name}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">
                              <strong style="color: #0B3D91; min-width: 120px; display: inline-block;">Email:</strong>
                              <span style="color: #333; font-weight: 500;">${email}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">
                              <strong style="color: #0B3D91; min-width: 120px; display: inline-block;">Phone:</strong>
                              <span style="color: #333; font-weight: 500;">${
                                phone || "Not provided"
                              }</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #0B3D91; min-width: 120px; display: inline-block;">Service:</strong>
                              <span style="color: #333; font-weight: 500; background-color: #ffc107; padding: 4px 8px; border-radius: 4px; font-size: 14px;">${service}</span>
                            </td>
                          </tr>
                        </table>
                      </div>
                      
                      <!-- Message Section -->
                      <div style="background-color: #ffffff; border: 2px solid #e9ecef; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                        <h2 style="color: #0B3D91; margin: 0 0 15px 0; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
                          💬 Message Details
                        </h2>
                        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #60C130;">
                          <p style="margin: 0; line-height: 1.6; color: #333; font-size: 16px;">${message}</p>
                        </div>
                      </div>
                      
                      <!-- Action Section -->
                      <div style="background: linear-gradient(135deg, #60C130 0%, #4ea326 100%); border-radius: 8px; padding: 20px; text-align: center;">
                        <h3 style="color: #ffffff; margin: 0 0 10px 0; font-size: 16px; font-weight: bold;">
                          ⚡ Immediate Action Required
                        </h3>
                        <p style="color: #ffffff; margin: 0; font-size: 14px; opacity: 0.9;">
                          This inquiry was submitted from your website contact form. Please respond within 24 hours for best customer experience.
                        </p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #0B3D91; padding: 25px; text-align: center;">
                      <div style="color: #ffffff; margin-bottom: 15px;">
                        <strong style="font-size: 16px;">WE DO TAX, LLC</strong><br>
                        <span style="font-size: 14px; opacity: 0.8;">2 Gold Street, New York, NY 10038</span><br>
                        <span style="font-size: 14px; opacity: 0.8;">info@wedotaxes.co</span>
                      </div>
                      <div style="border-top: 1px solid rgba(255, 255, 255, 0.2); padding-top: 15px;">
                        <p style="color: #ffc107; margin: 0; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                          Professional Tax & Accounting Services
                        </p>
                      </div>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
}
