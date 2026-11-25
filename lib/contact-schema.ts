import { z } from "zod";

// The subject becomes the email subject line, so line breaks are refused there too.
const singleLine = /^[^\r\n]*$/;

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(100).regex(singleLine),
  email: z.email(),
  subject: z.string().trim().min(1).max(150).regex(singleLine),
  message: z.string().trim().min(1).max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;
