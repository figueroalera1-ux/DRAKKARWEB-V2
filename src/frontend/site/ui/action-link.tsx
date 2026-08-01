import type { AnchorHTMLAttributes, ReactNode } from "react";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
};

export function ActionLink({
  children,
  variant = "solid",
  className = "",
  ...props
}: ActionLinkProps) {
  return (
    <a
      className={`action-link action-link--${variant} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
