"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AVAILABILITY } from "@/lib/availability";
import { CONTACT_LIMITS, HONEYPOT_FIELD } from "@/lib/contact-limits";
import { PROFILE } from "@/content/profile";
import Section from "@/components/ui/Section";
import { buttonClass } from "@/components/ui/ButtonLink";

type Status = "idle" | "loading" | "success" | "error";

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  [HONEYPOT_FIELD]: "",
};

const statusMessages: Record<Status, string> = {
  idle: "",
  loading: "Envoi en cours…",
  success: "Message envoyé, merci ! Je vous répondrai rapidement.",
  error: "Une erreur est survenue. Veuillez réessayer.",
};

const fields = [
  {
    id: "name",
    label: "Nom complet",
    type: "text",
    placeholder: "Jane Dupont",
    maxLength: CONTACT_LIMITS.name,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "jane.dupont@example.com",
    maxLength: undefined,
  },
  {
    id: "subject",
    label: "Sujet",
    type: "text",
    placeholder: "Opportunité professionnelle",
    maxLength: CONTACT_LIMITS.subject,
  },
] as const;

const links = [
  { label: "Email", href: `mailto:${PROFILE.email}`, text: PROFILE.email },
  { label: "LinkedIn", href: PROFILE.links.linkedin, text: "nadege-pelcat" },
  { label: "GitHub", href: PROFILE.links.github, text: "npelcat" },
];

const inputClass =
  "w-full rounded-md border border-line bg-surface px-4 py-3 text-fg transition-colors placeholder:text-fg-muted hover:border-fg-muted";

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData(emptyForm);
      } else {
        setStatus("error");
      }
    } catch (error) {
      // fetch only throws on network errors (offline, server unreachable).
      console.error("Error:", error);
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-16">
        <div className="flex flex-col gap-10">
          <p className="max-w-md text-xl leading-snug tracking-tight md:text-2xl">
            Une question ? Un projet ? N&apos;hésitez pas à me contacter.
          </p>

          <div className="flex flex-col gap-1 text-sm">
            <p className="flex items-center gap-2 font-medium">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              {AVAILABILITY.next}
            </p>
            <p className="pl-4 text-fg-muted">{AVAILABILITY.current}</p>
          </div>

          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
            <dt className="font-mono text-xs uppercase leading-5 tracking-wider text-fg-muted">
              Lieu
            </dt>
            <dd>{PROFILE.location}</dd>
            {links.map((link) => (
              <div key={link.label} className="contents">
                <dt className="font-mono text-xs uppercase leading-5 tracking-wider text-fg-muted">
                  {link.label}
                </dt>
                <dd>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-1 underline-offset-4 hover:text-accent hover:underline"
                  >
                    {link.text}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="relative flex flex-col gap-6">
          {fields.map(({ id, label, type, placeholder, maxLength }) => (
            <div key={id} className="flex flex-col gap-2">
              <label htmlFor={id} className="text-sm font-medium">
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                required
                maxLength={maxLength}
                placeholder={placeholder}
                className={inputClass}
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={CONTACT_LIMITS.message}
              rows={6}
              placeholder="Votre message…"
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Honeypot: hidden from people, keyboard and screen readers, but bots fill it in. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor={HONEYPOT_FIELD}>Ne pas remplir ce champ</label>
            <input
              type="text"
              id={HONEYPOT_FIELD}
              name={HONEYPOT_FIELD}
              value={formData[HONEYPOT_FIELD]}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className={`${buttonClass("primary")} disabled:opacity-60`}
            >
              Envoyer le message
            </button>
            <div className="flex items-center gap-2">
              {status === "success" && (
                <svg
                  viewBox="0 0 24 24"
                  className="animate-draw-check h-5 w-5 shrink-0 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  data-testid="success-check"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" pathLength={1} />
                </svg>
              )}
              {/* The status area must stay in the page so screen readers announce its new text. */}
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${status === "error" ? "text-danger" : "text-fg-muted"}`}
              >
                <span key={status} className="animate-fade-in inline-block">
                  {statusMessages[status]}
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}
