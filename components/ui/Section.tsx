import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className="scroll-mt-16">
      <div className="container-page">
        <div className="border-t border-line pt-16 pb-20 md:pt-20 md:pb-28">
          <h2
            id={titleId}
            className="mb-12 font-mono text-sm uppercase tracking-widest text-fg-muted"
          >
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}
