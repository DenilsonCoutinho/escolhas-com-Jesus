type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  viewBox: "0 0 24 24",
};

export const IconBook = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2z" />
    <path d="M22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z" />
  </svg>
);
export const IconChat = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z" />
  </svg>
);
export const IconCards = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="11" height="15" rx="2" />
    <path d="M17 4l3 .8a1.5 1.5 0 0 1 1 1.8L18 18" />
  </svg>
);
export const IconPeople = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M15.5 14.5A5 5 0 0 1 21 19" />
  </svg>
);
export const IconCheck = ({ className = "size-6" }: P) => (
  <svg {...base} strokeWidth={3} className={className}>
    <path d="M5 12l5 5L20 7" />
  </svg>
);
export const IconShield = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </svg>
);
export const IconBolt = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
  </svg>
);
export const IconHome = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v10h14V10" />
  </svg>
);
export const IconChurch = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M12 2v5M10 4h4" />
    <path d="M6 21V11l6-4 6 4v10" />
    <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
  </svg>
);
export const IconHeart = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M12 20s-7-4.5-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.5-9 9-9 9z" />
  </svg>
);

export function Leaf({ className = "w-8", flip = false, c1 = "#c6663c", c2 = "#486b48" }: { className?: string; flip?: boolean; c1?: string; c2?: string }) {
  return (
    <svg viewBox="0 0 54 90" fill="none" aria-hidden="true" className={`${className} ${flip ? "-scale-x-100" : ""}`}>
      <path d="M27 88V12" stroke={c1} strokeWidth="3" strokeLinecap="round" />
      <path d="M27 30C14 26 8 16 10 6c11 3 17 12 17 24z" fill={c1} />
      <path d="M27 48C40 44 46 34 44 24c-11 3-17 12-17 24z" fill={c2} />
      <path d="M27 66C14 62 8 52 10 42c11 3 17 12 17 24z" fill={c1} />
    </svg>
  );
}
