import type { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded border border-line px-2 py-0.5 font-mono text-xs text-fg-muted">
      {children}
    </span>
  );
}
