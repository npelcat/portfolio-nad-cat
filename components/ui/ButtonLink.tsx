import type { ComponentProps } from "react";

const variants = {
  primary: "bg-accent text-accent-fg hover:bg-accent-hover",
  secondary: "border border-line text-fg hover:border-fg",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: keyof typeof variants;
};

export default function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
