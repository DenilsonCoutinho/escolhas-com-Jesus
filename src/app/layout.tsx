import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { MetaPixel } from "@/components/MetaPixel";
import { site } from "@/config/site";
import "./globals.css";

const nunito = localFont({
  variable: "--font-nunito",
  display: "swap",
  src: [
    { path: "../fonts/nunito-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/nunito-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/nunito-latin-800-normal.woff2", weight: "800", style: "normal" },
    { path: "../fonts/nunito-latin-900-normal.woff2", weight: "900", style: "normal" },
  ],
});

const fraunces = localFont({
  variable: "--font-fraunces",
  display: "swap",
  src: [
    { path: "../fonts/fraunces-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/fraunces-latin-800-normal.woff2", weight: "800", style: "normal" },
    { path: "../fonts/fraunces-latin-600-italic.woff2", weight: "600", style: "italic" },
  ],
});

const lilita = localFont({
  variable: "--font-lilita",
  display: "swap",
  src: [{ path: "../fonts/lilita-one-latin-400-normal.woff2", weight: "400", style: "normal" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Escolhas com Jesus — 50 situações para seu filho aprender a agir como Jesus",
  description:
    "Baralho de conversas em família: 50 situações reais do dia a dia, princípio bíblico em cada carta e perguntas para conversar com seu filho.",
  openGraph: {
    title: "Seu filho agiria como Jesus se você não estivesse por perto?",
    description: "50 situações reais, princípios bíblicos e perguntas para conversar em família.",
    images: [{ url: "/images/foto-mae.jpg", width: 941, height: 1672 }],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#133e44",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${fraunces.variable} ${lilita.variable}`}>
      <body>
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
