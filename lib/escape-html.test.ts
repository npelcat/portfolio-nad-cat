import { describe, expect, it } from "vitest";
import { escapeHtml } from "./escape-html";

describe("escapeHtml", () => {
  it("replaces < > & \" and '", () => {
    expect(escapeHtml(`<a href="x">Tom & 'Jerry'</a>`)).toBe(
      "&lt;a href=&quot;x&quot;&gt;Tom &amp; &#39;Jerry&#39;&lt;/a&gt;",
    );
  });

  it("keeps normal text unchanged", () => {
    expect(escapeHtml("Bonjour, je suis Nadège.")).toBe(
      "Bonjour, je suis Nadège.",
    );
  });

  it("replaces & before the other characters", () => {
    expect(escapeHtml("&lt;")).toBe("&amp;lt;");
  });
});
