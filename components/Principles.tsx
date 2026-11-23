import { PRINCIPLES } from "@/content/principles";
import Section from "@/components/ui/Section";

export default function Principles() {
  return (
    <Section id="principles" title="Ma façon de travailler">
      <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {PRINCIPLES.map((principle, index) => (
          <li key={principle.title} className="border-t border-line pt-6">
            <span className="font-mono text-xs text-accent" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-medium">{principle.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              {principle.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
