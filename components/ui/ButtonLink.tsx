import type { ComponentProps } from "react";

const variants = {
  primary: "bg-accent text-accent-fg hover:bg-accent-hover",
  secondary: "border border-line text-fg hover:border-fg",
};

type Variant = keyof typeof variants;

// Shared with the form's submit button, which is a <button> and not a link.
export function buttonClass(variant: Variant = "primary") {
  return `inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors ${variants[variant]}`;
}

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
};

export default function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return <a className={`${buttonClass(variant)} ${className}`} {...props} />;
}
