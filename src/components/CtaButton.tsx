"use client";

import { site } from "@/config/site";

type Props = {
  children?: React.ReactNode;
  variant?: "terracotta" | "teal" | "cream";
  className?: string;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const styles: Record<NonNullable<Props["variant"]>, string> = {
  terracotta: "bg-terracotta text-cream hover:bg-terracotta-dark",
  teal: "bg-teal text-cream hover:bg-teal-dark",
  cream: "bg-cream text-teal hover:bg-white",
};

export function CtaButton({ children = "Liberar acesso agora", variant = "terracotta", className = "" }: Props) {
  return (
    <a
      href={site.checkoutUrl}
      onClick={() => window.fbq?.("track", "InitiateCheckout")}
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-8 py-4 font-display text-lg uppercase tracking-wide shadow-[0_10px_24px_rgba(19,62,68,0.22)] transition hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-copper sm:text-xl ${styles[variant]} ${className}`}
    >
      {children}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}
