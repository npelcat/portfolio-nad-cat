"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Lock, Plus } from "lucide-react";
import { projects, type Project, type ProjectRole } from "@/content/projects";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";

const roleLabels: Record<ProjectRole, string> = {
  front: "Front-end",
  back: "Back-end",
  data: "Data",
};

const autonomyLabels = {
  solo: "Autonomie totale",
  binome: "En binôme",
};

function ProjectDetails({ project }: { project: Project }) {
  const meta = [
    { label: "Rôle", value: project.role.map((r) => roleLabels[r]).join(" · ") },
    { label: "Contexte", value: project.context },
    ...(project.autonomy
      ? [{ label: "Organisation", value: autonomyLabels[project.autonomy] }]
      : []),
  ];

  return (
    <div className="grid gap-10 pb-12 pt-2 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:pl-12">
      {/* The max width keeps tall images at most 32rem high, and the frame always fits the image. */}
      <div
        className="w-full self-start overflow-hidden rounded-lg border border-line bg-surface md:sticky md:top-24"
        style={{
          maxWidth: `calc(32rem * ${project.screenshot.width} / ${project.screenshot.height})`,
        }}
      >
        <Image
          src={project.screenshot.src}
          alt={project.screenshot.alt}
          width={project.screenshot.width}
          height={project.screenshot.height}
          sizes="(min-width: 1024px) 520px, 100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="flex flex-col gap-8">
        <p className="leading-relaxed text-fg-muted">{project.description}</p>

        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
          {meta.map(({ label, value }) => (
            <div key={label} className="contents">
              <dt className="font-mono text-xs uppercase tracking-wider text-fg-muted leading-5">
                {label}
              </dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <ul className="flex flex-col gap-4">
          {project.achievements.map((achievement) => (
            <li key={achievement.label} className="text-sm">
              <p className="font-medium">{achievement.label}</p>
              <p className="mt-1 leading-relaxed text-fg-muted">
                {achievement.details}
              </p>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        {project.link ? (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            {project.link.label}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : (
          <p className="inline-flex items-center gap-2 text-xs text-fg-muted">
            <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {project.githubNote}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="projects" title="Projets">
      <ul className="border-b border-line">
        {projects.map((project, index) => {
          const isOpen = openIndex === index;
          const buttonId = `project-${index}-button`;
          const panelId = `project-${index}-panel`;

          return (
            <li key={project.title} className="border-t border-line">
              <h3>
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-baseline gap-4 py-6 text-left md:gap-8"
                >
                  <span
                    className="w-8 shrink-0 font-mono text-xs text-accent"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block text-lg font-medium tracking-tight transition-colors group-hover:text-accent md:text-xl">
                      {project.title}
                    </span>
                    <span className="mt-1 block text-sm text-fg-muted">
                      {project.subtitle}
                    </span>
                  </span>
                  <span className="hidden text-sm text-fg-muted md:block">
                    {project.context}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 self-center text-fg-muted transition-transform duration-300 motion-reduce:transition-none ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>

              {/* Animating grid rows from 0fr to 1fr lets the panel grow to its real height.
                  overflow-clip (not hidden) hides the overflow without breaking the sticky image,
                  but unlike hidden it keeps the content height as minimum, so min-h-0 is needed to close. */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                inert={!isOpen}
                className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 overflow-clip">
                  <ProjectDetails project={project} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
