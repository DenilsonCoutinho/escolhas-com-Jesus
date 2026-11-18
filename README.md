# Escolhas com Jesus — página de vendas

Landing page em Next.js 16 + Tailwind 4 para vender o baralho **Escolhas com Jesus** pela Kiwify.

## Antes de publicar (5 minutos)

Abra `src/config/site.ts` e preencha:

| Campo | O que colocar |
|---|---|
| `checkoutUrl` | Link do checkout da Kiwify (ou a variável `NEXT_PUBLIC_CHECKOUT_URL`) |
| `price` | Preço que aparece na oferta, ex.: `"19,90"` |
| `priceFrom` | Preço "de" riscado (opcional, deixe `""` para esconder) |
| `installments` | Texto do parcelamento (opcional) |
| `metaPixelId` | ID do Pixel do Meta (ou `NEXT_PUBLIC_META_PIXEL_ID`) |
| `supportEmail` | E-mail de suporte do rodapé |
| `url` | Domínio final do site (usado nas prévias de link) |
| `testimonials` | Depoimentos **reais** — a seção só aparece quando houver algum |

O Pixel dispara `PageView` ao abrir a página e `InitiateCheckout` em todo clique nos botões de compra.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

## Publicar

**Vercel (recomendado):** importe o repositório, configure `NEXT_PUBLIC_CHECKOUT_URL` e `NEXT_PUBLIC_META_PIXEL_ID` em *Environment Variables* e faça o deploy.

**Hospedagem estática (Hostinger, Netlify etc.):**

```bash
STATIC_EXPORT=1 npm run build   # gera a pasta out/
```

Suba o conteúdo de `out/` para a hospedagem.

## Estrutura

- `src/app/page.tsx` — ordem das seções
- `src/components/Sections.tsx` — todas as seções e a copy
- `src/components/CtaButton.tsx` / `StickyCta.tsx` — botões de compra (com evento do Pixel)
- `src/config/site.ts` — preço, links, pixel, as 50 situações e depoimentos
- `public/images/` — fotos e cartas usadas na página
- `src/fonts/` — fontes locais (Lilita One, Fraunces, Nunito), sem depender do Google Fonts
