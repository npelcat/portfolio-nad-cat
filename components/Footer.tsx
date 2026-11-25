import { PROFILE } from "@/content/profile";

const links = [
  { label: "GitHub", href: PROFILE.links.github },
  { label: "LinkedIn", href: PROFILE.links.linkedin },
  { label: "Email", href: `mailto:${PROFILE.email}` },
];

export default function Footer() {
  // Computed at build time: the year updates with the next deployment.
  const year = new Date().getFullYear();

  return (
    <footer className="container-page">
      <div className="flex flex-col gap-4 border-t border-line py-8 text-sm text-fg-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {PROFILE.name}
        </p>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
