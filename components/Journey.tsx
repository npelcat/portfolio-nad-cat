import { JOURNEY_INTRO, LANGUAGES, journey } from "@/content/experience";
import Section from "@/components/ui/Section";

export default function Journey() {
  return (
    <Section id="journey" title="Parcours">
      <p className="mb-16 max-w-2xl text-xl leading-snug tracking-tight md:text-2xl">
        {JOURNEY_INTRO}
      </p>

      <ol className="border-b border-line">
        {journey.map((step) => (
          <li
            key={`${step.period}-${step.title}`}
            className="grid gap-2 border-t border-line py-8 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-8"
          >
            <p className="font-mono text-sm text-fg-muted">{step.period}</p>
            <div>
              <h3 className="font-medium">
                {step.title}
                {step.place && (
                  <span className="text-fg-muted"> · {step.place}</span>
                )}
              </h3>
              {step.type && (
                <p className="mt-1 text-sm text-accent">{step.type}</p>
              )}
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-sm text-fg-muted">
        <span className="mr-3 font-mono text-xs uppercase tracking-wider">
          Langues
        </span>
        {LANGUAGES}
      </p>
    </Section>
  );
}
