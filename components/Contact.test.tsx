// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CONTACT_LIMITS, HONEYPOT_FIELD } from "@/lib/contact-limits";
import Contact from "./Contact";

function fillAndSubmit() {
  fireEvent.change(screen.getByLabelText("Nom complet"), {
    target: { value: "Jane" },
  });
  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "jane@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Sujet"), {
    target: { value: "Bonjour" },
  });
  fireEvent.change(screen.getByLabelText("Message"), {
    target: { value: "Un message" },
  });
  fireEvent.submit(screen.getByRole("button", { name: "Envoyer le message" }));
}

describe("Contact", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("limits the fields to the same lengths as the server", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Nom complet").getAttribute("maxlength")).toBe(
      String(CONTACT_LIMITS.name),
    );
    expect(screen.getByLabelText("Sujet").getAttribute("maxlength")).toBe(
      String(CONTACT_LIMITS.subject),
    );
    expect(screen.getByLabelText("Message").getAttribute("maxlength")).toBe(
      String(CONTACT_LIMITS.message),
    );
  });

  it("announces the success in the status area and shows the check", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, status: 200 }));
    render(<Contact />);
    fillAndSubmit();
    const message = await screen.findByText(/Message envoyé/);
    expect(screen.getByRole("status").contains(message)).toBe(true);
    expect(screen.getByTestId("success-check")).toBeTruthy();
  });

  it("announces the error in the status area, without the check", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));
    render(<Contact />);
    fillAndSubmit();
    const message = await screen.findByText(/Une erreur est survenue/);
    expect(screen.getByRole("status").contains(message)).toBe(true);
    expect(screen.queryByTestId("success-check")).toBeNull();
  });

  it("keeps the honeypot out of reach for people and screen readers", () => {
    const { container } = render(<Contact />);
    const honeypot = container.querySelector(`#${HONEYPOT_FIELD}`);
    expect(honeypot?.getAttribute("tabindex")).toBe("-1");
    expect(honeypot?.closest("[aria-hidden='true']")).not.toBeNull();
  });
});
