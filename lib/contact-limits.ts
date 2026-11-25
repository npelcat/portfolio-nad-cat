// Kept apart from contact-schema.ts so the form can import them without sending zod to the browser.
export const CONTACT_LIMITS = {
  name: 100,
  subject: 150,
  message: 5000,
};

// Hidden field that only bots fill in.
export const HONEYPOT_FIELD = "website";
