import { describe, expect, it } from "vitest";
import { contactSchema } from "./contact-schema";

const valid = {
  name: "Jane Dupont",
  email: "jane.dupont@example.com",
  subject: "Opportunité professionnelle",
  message: "Bonjour Nadège,\nJe vous contacte pour un poste.",
};

describe("contactSchema", () => {
  it("accepts valid data and trims spaces", () => {
    const result = contactSchema.safeParse({ ...valid, name: "  Jane  " });
    expect(result.success).toBe(true);
    expect(result.data?.name).toBe("Jane");
  });

  it("refuses an empty field or a field with only spaces", () => {
    expect(contactSchema.safeParse({ ...valid, name: "" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, message: "   " }).success).toBe(
      false,
    );
  });

  it("refuses an invalid email", () => {
    expect(
      contactSchema.safeParse({ ...valid, email: "not-an-email" }).success,
    ).toBe(false);
  });

  it("refuses fields that are too long", () => {
    expect(
      contactSchema.safeParse({ ...valid, name: "a".repeat(101) }).success,
    ).toBe(false);
    expect(
      contactSchema.safeParse({ ...valid, subject: "a".repeat(151) }).success,
    ).toBe(false);
    expect(
      contactSchema.safeParse({ ...valid, message: "a".repeat(5001) }).success,
    ).toBe(false);
  });

  it("refuses line breaks in name and subject", () => {
    expect(
      contactSchema.safeParse({ ...valid, name: "Jane\nDupont" }).success,
    ).toBe(false);
    expect(
      contactSchema.safeParse({ ...valid, subject: "Hello\r\nBcc: x@y.z" })
        .success,
    ).toBe(false);
  });
});
