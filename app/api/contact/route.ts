import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 },
      );
    }

    // Envoi de l'email via Resend
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // À REMPLACER par votre domaine vérifié
      to: ["pelcat.nd@gmail.com"],
      replyTo: email, // Email de l'expéditeur pour pouvoir répondre
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
                  <span class="label">De :</span> ${name}
                </div>
                <div class="info-row">
                  <span class="label">Email :</span> ${email}
                </div>
                <div class="info-row">
                  <span class="label">Sujet :</span> ${subject}
                </div>
                <div class="message-box">
                  <p style="margin-top: 0;"><span class="label">Message :</span></p>
                  <p style="white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Email envoyé avec succès", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 },
    );
  }
}
