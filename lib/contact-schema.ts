import { z } from "zod";
import { CONTACT_LIMITS, HONEYPOT_FIELD } from "./contact-limits";

// The subject becomes the email subject line, so line breaks are refused there too.
const singleLine = /^[^\r\n]*$/;

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(CONTACT_LIMITS.name).regex(singleLine),
  email: z.email(),
  subject: z
    .string()
    .trim()
    .min(1)
    .max(CONTACT_LIMITS.subject)
    .regex(singleLine),
  message: z.string().trim().min(1).max(CONTACT_LIMITS.message),
  [HONEYPOT_FIELD]: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
