import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type ClassProps = { className?: string };

export function Eyebrow({ children, className = "" }: ClassProps & { children: ReactNode }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function ActionLink({
  children,
  href,
  className = "",
  ...props
}: ClassProps & { children: ReactNode; href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={`action-link ${className}`} href={href} {...props}>{children}</a>;
}

export function PillButton({
  children,
  className = "",
  ...props
}: ClassProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`pill-button ${className}`} {...props}>{children}</button>;
}

export function Surface({
  children,
  className = "",
  ...props
}: ClassProps & HTMLAttributes<HTMLDivElement>) {
  return <div className={`surface ${className}`} {...props}>{children}</div>;
}
