import { AVAILABILITY } from "@/lib/availability";
import { PROFILE } from "@/content/profile";
import ButtonLink from "@/components/ui/ButtonLink";

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-20 md:pt-40">
      <div className="container-page animate-fade-in">
        <p className="mb-8 font-mono text-sm text-fg-muted">
          {PROFILE.location}
        </p>

        <h1 className="max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl">
          {PROFILE.role}.{" "}
          <span className="text-fg-muted">{PROFILE.tagline}</span>
        </h1>

        <p className="mt-8 font-mono text-sm text-fg-muted">
          {PROFILE.stack.join(" · ")}
        </p>

        <div className="mt-12 flex flex-col gap-1 text-sm">
          <p className="flex items-center gap-2 font-medium">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            {AVAILABILITY.next}
          </p>
          <p className="pl-4 text-fg-muted">{AVAILABILITY.current}</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="#contact">Me contacter</ButtonLink>
          <ButtonLink href={PROFILE.cv.fr} variant="secondary" download>
            Télécharger le CV
          </ButtonLink>
          <a
            href={PROFILE.cv.en}
            download
            lang="en"
            className="px-2 text-sm text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
          >
            English resume
          </a>
        </div>
      </div>
    </section>
  );
}
