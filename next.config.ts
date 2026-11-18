import type { NextConfig } from "next";

// Padrão: deploy na Vercel (recomendado).
// Opcional: STATIC_EXPORT=1 npm run build  -> gera a pasta "out" com HTML estático (Hostinger, Netlify etc.)
const isStatic = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStatic
    ? { output: "export" as const, images: { unoptimized: true } }
    : { cacheComponents: true, partialPrefetching: true }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
