// ============================================================
//  CONFIGURAÇÃO DA PÁGINA — edite aqui antes de publicar
// ============================================================

export const site = {
  name: "Escolhas com Jesus",
  tagline: "Baralho de conversas em família",
  url: "https://escolhascomjesus.com.br", // troque pelo seu domínio

  // Link do checkout da Kiwify (Produto > Links > Checkout)
  checkoutUrl:
    process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://pay.kiwify.com.br/TVxrIP6",

  // Preço exibido na oferta. Deixe priceFrom vazio ("") para não mostrar o "de/por".
  price: "10,00",
  priceFrom: "97,00", // preço "de" riscado; "" para esconder
  installments: "", // ex.: "ou 3x de R$ 7,23" — deixe vazio para esconder

  guaranteeDays: 7,

  // Pixel do Meta (Facebook/Instagram). Deixe vazio para desativar.
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "2172515843345711",

  // Microsoft Clarity (mapas de calor e gravações). Deixe vazio para desativar.
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || "zfs58511bw",

  // E-mail de suporte exibido no rodapé
  supportEmail: "contato@seudominio.com.br",

  year: 2026,
};

// As 50 situações do baralho (títulos reais das cartas)
export const situations = [
  "Um lugar na roda", "Um estojo no pátio", "Eu disse que fiz", "Pão para dois", "Hora de parar",
  "Quando eu perco", "Pedir desculpas", "Esperar a vez", "Ajudar de verdade", "O desenho escolhido",
  "O plano do grupo", "Ouvir os dois lados", "Uma ideia melhor", "Era sal, não açúcar", "O caderno aberto",
  "O combinado", "Igual ou justo?", "Quem arrumou tudo?", "Uma cadeira a mais", "O mérito da ideia",
  "Ninguém viu", "Antes de responder", "Ajudar do jeito certo", "Gentileza e cuidado", "Um presente repetido",
  "Um segredo pesado", "Só minha ideia vale?", "Posso compartilhar essa foto?", "Preciso parar agora", "Todo mundo vai fazer",
  "Eu ganhei!", "Ninguém está vendo", "Eu não consigo", "Verdade com carinho", "Ele pediu desculpas",
  "Quero ser o líder", "Preciso de uma pausa", "Não fui convidado", "Foi um engano", "Ainda dá para usar",
  "Depois eu devolvo", "O passeio adiado", "O ninho no jardim", "Antes do conselho", "Quando o bebê chegou",
  "O passo mais lento", "Todos estão olhando?", "Antes de prometer", "Uma regra diferente", "Ninguém pediu",
];

// Depoimentos REAIS de clientes. Enquanto estiver vazio, a seção não aparece.
export const testimonials: { name: string; role: string; text: string }[] = [];
