import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { PROFILE } from "@/content/profile";
import { HONEYPOT_FIELD } from "@/lib/contact-limits";
import { contactSchema } from "@/lib/contact-schema";
import { escapeHtml } from "@/lib/escape-html";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Champs invalides ou manquants" },
      { status: 400 },
    );
  }

  // A filled honeypot means a bot: answer as if it worked, so it does not try another way.
  if (result.data[HONEYPOT_FIELD]) {
    return NextResponse.json({ message: "Email envoyé" }, { status: 200 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is missing");
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 },
    );
  }

  const { name, email, subject, message } = result.data;
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    subject: escapeHtml(subject),
    message: escapeHtml(message),
  };

  try {
    // Created here and not at the top of the file, so the build does not need the key.
    const resend = new Resend(apiKey);
    // send() does not throw when Resend refuses the email: it returns an error object.
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [PROFILE.email],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(to right, #3B82F6, #8B5CF6);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .info-row {
                margin-bottom: 15px;
                padding-bottom: 15px;
                border-bottom: 1px solid #e5e7eb;
              }
              .label {
                font-weight: bold;
                color: #3B82F6;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin-top: 20px;
                border-left: 4px solid #3B82F6;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">Nouveau message depuis votre portfolio</h1>
              </div>
              <div class="content">
                <div class="info-row">
                  <span class="label">De :</span> ${safe.name}
                </div>
                <div class="info-row">
                  <span class="label">Email :</span> ${safe.email}
                </div>
                <div class="info-row">
                  <span class="label">Sujet :</span> ${safe.subject}
                </div>
                <div class="message-box">
                  <p style="margin-top: 0;"><span class="label">Message :</span></p>
                  <p style="white-space: pre-wrap;">${safe.message}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend refused the email:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Email envoyé" }, { status: 200 });
  } catch (error) {
    console.error("Error while sending the email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 },
    );
  }
}
