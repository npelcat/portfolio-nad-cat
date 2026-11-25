import { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// vi.mock is moved to the top of the file, so the fake send() must be created with vi.hoisted.
const send = vi.hoisted(() => vi.fn());

vi.mock("resend", () => ({
  Resend: class {
    emails = { send };
  },
}));

import { POST } from "./route";

const valid = {
  name: "Jane Dupont",
  email: "jane.dupont@example.com",
  subject: "Opportunité professionnelle",
  message: "Bonjour Nadège",
};

function postRequest(body: string) {
  return new NextRequest("http://localhost/api/contact", {
    method: "POST",
    body,
  });
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.stubEnv("RESEND_API_KEY", "re_test_key");
    send.mockReset();
    send.mockResolvedValue({ data: { id: "email-id" }, error: null });
    // Keeps the test output clean: the route logs errors on purpose.
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("returns 400 for invalid data, without calling Resend", async () => {
    const response = await POST(
      postRequest(JSON.stringify({ ...valid, email: "not-an-email" })),
    );
    expect(response.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("returns 400 when the body is not JSON", async () => {
    const response = await POST(postRequest("not json"));
    expect(response.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("returns 200 without data when the email is sent", async () => {
    const response = await POST(postRequest(JSON.stringify(valid)));
    expect(response.status).toBe(200);
    expect(await response.json()).not.toHaveProperty("data");
  });

  it("escapes the fields in the email HTML", async () => {
    await POST(
      postRequest(JSON.stringify({ ...valid, name: "<script>alert(1)</script>" })),
    );
    const { html } = send.mock.calls[0][0];
    expect(html).toContain("&lt;script&gt;alert(1)&lt;/script&gt;");
    expect(html).not.toContain("<script>");
  });

  it("returns 500 when Resend returns an error", async () => {
    send.mockResolvedValue({
      data: null,
      error: { message: "Invalid API key", statusCode: 401, name: "validation_error" },
    });
    const response = await POST(postRequest(JSON.stringify(valid)));
    expect(response.status).toBe(500);
  });

  it("returns 500 when RESEND_API_KEY is missing, without calling Resend", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const response = await POST(postRequest(JSON.stringify(valid)));
    expect(response.status).toBe(500);
    expect(send).not.toHaveBeenCalled();
  });
});
