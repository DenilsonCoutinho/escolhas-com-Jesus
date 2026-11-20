import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import {
  IconBolt, IconBook, IconCards, IconChat, IconCheck, IconChurch, IconHeart, IconHome, IconPeople, IconShield, Leaf,
} from "@/components/Icons";
import { site, situations, testimonials } from "@/config/site";

const Pill = ({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "terracotta" | "cream" }) => {
  const t = {
    green: "bg-green text-cream",
    terracotta: "bg-terracotta text-cream",
    cream: "bg-cream text-teal",
  }[tone];
  return <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-black uppercase tracking-wider ${t}`}>{children}</span>;
};

const Trust = ({ light = false, center = false }: { light?: boolean; center?: boolean }) => (
  <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-extrabold ${center ? "justify-center" : ""} ${light ? "text-cream-2" : "text-green"}`}>
    <li className="flex items-center gap-1.5"><IconCheck className="size-4" />Pagamento único</li>
    <li className="flex items-center gap-1.5"><IconBolt className="size-4" />Acesso imediato</li>
    <li className="flex items-center gap-1.5"><IconShield className="size-4" />Garantia de {site.guaranteeDays} dias</li>
  </ul>
);

/* ---------------------------------------------------------------- HERO */
export function Hero() {
  return (
    <header className="relative overflow-hidden bg-cream">
      <div className="bg-teal px-4 py-2 text-center text-sm font-extrabold tracking-wide text-cream-2">
        50 situações reais • Princípio bíblico em cada carta • Perguntas para conversar
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-[1.05fr_0.95fr] md:pb-24 md:pt-16">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Leaf className="w-6" />
            <Pill>Baralho digital para imprimir</Pill>
          </div>
          <h1 className="font-display text-[2.6rem] uppercase leading-[0.98] text-teal sm:text-6xl lg:text-7xl">
            E agora,{" "}
            <span className="block font-serif normal-case italic text-terracotta underline decoration-copper/70 decoration-4 underline-offset-8">o que Jesus faria?</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl font-extrabold leading-snug text-teal sm:text-2xl">
            50 situações do dia a dia para ajudar seu filho a{" "}
            <strong className="rounded-full bg-sand px-2.5 py-0.5 font-black text-teal">pensar, escolher e agir</strong> à luz da Bíblia.
          </p>
          <p className="mt-4 max-w-xl text-lg font-semibold leading-relaxed text-teal/90">
            Em cada carta, a criança lê uma situação, escolhe entre duas opções e conversa com você a partir de um versículo e de uma
            pergunta. Uma forma leve de levar os ensinamentos de Jesus para a vida real.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["50 cartas", "Versículo em cada carta", "Leia, Escolha, Converse"].map((c) => (
              <li key={c} className="flex items-center gap-1.5 rounded-full border-2 border-teal/15 bg-white px-4 py-1.5 text-sm font-extrabold text-teal">
                <IconCheck className="size-4 text-green" />
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-start gap-4">
            <CtaButton>Liberar acesso agora</CtaButton>
            <p className="flex items-center gap-1.5 text-sm font-extrabold text-teal">
              <IconBolt className="size-4 text-terracotta" />
              Pronto para imprimir em minutos
            </p>
            <Trust />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_rgba(19,62,68,0.25)]">
            <Image src="/images/foto-mae.jpg" alt="Mãe lendo uma carta do baralho Escolhas com Jesus com a filha" fill priority sizes="(max-width: 768px) 90vw, 450px" className="object-cover object-[50%_55%]" />
          </div>
          <div className="absolute -left-4 top-8 rotate-[-4deg] rounded-2xl bg-cream px-5 py-3 shadow-xl sm:-left-10">
            <p className="font-display text-2xl text-teal">A ou B?</p>
          </div>
          <div className="absolute -bottom-6 -right-3 w-28 rotate-[8deg] sm:-right-8 sm:w-36">
            <Image src="/images/verso.png" alt="" width={629} height={945} className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------- PROBLEMA */
const scenes = [
  { img: "/images/cena-roda.png", label: "No recreio", text: "Chegou uma criança nova e ela está sozinha." },
  { img: "/images/cena-estojo.png", label: "Quando ninguém vê", text: "Achou um estojo no pátio e ninguém viu." },
  { img: "/images/cena-foto.png", label: "No celular", text: "Uma foto engraçada do amigo: mandar no grupo?" },
  { img: "/images/cena-bebe.png", label: "Em casa", text: "O irmãozinho chegou e a atenção mudou." },
];

export function Problem() {
  return (
    <section className="bg-teal px-5 py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-4xl font-display text-4xl uppercase leading-none sm:text-5xl lg:text-6xl">
            Saber a história bíblica é o começo. <span className="text-sage">Viver como Jesus é o caminho.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-cream-2">
            Seu filho conhece Davi e Golias, Noé e a arca. Mas as atitudes que formam o caráter dele acontecem longe da igreja:
            no recreio, no grupo da turma, em casa e quando ninguém está olhando.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {scenes.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <article className="h-full overflow-hidden rounded-3xl bg-cream text-teal">
                <div className="relative aspect-[3/1]">
                  <Image src={s.img} alt={s.label} fill sizes="(max-width: 640px) 90vw, 280px" className="object-cover" />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Pill tone="terracotta">{s.label}</Pill>
                    <span className="font-display text-lg text-green">A ou B?</span>
                  </div>
                  <p className="text-lg font-extrabold leading-snug">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <figure className="mx-auto mt-14 max-w-3xl text-center">
            <blockquote className="font-serif text-2xl italic leading-snug sm:text-3xl">
              “Sede meus imitadores, como também eu sou de Cristo.”
            </blockquote>
            <figcaption className="mt-3 font-black uppercase tracking-widest text-sage">1 Coríntios 11:1</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- COMO FUNCIONA */
const steps = [
  { n: "1", t: "Leia", d: "Tire uma carta do baralho e leia a situação em voz alta.", c: "bg-teal" },
  { n: "2", t: "Escolha", d: "Seu filho diz como agiria, A ou B, e explica por quê.", c: "bg-terracotta" },
  { n: "3", t: "Converse", d: "Leiam juntos o trecho bíblico e usem a pergunta final para colocar em prática.", c: "bg-green" },
];

export function HowItWorks() {
  return (
    <section className="bg-cream px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal className="order-2 md:order-1">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-[0_24px_50px_rgba(19,62,68,0.2)]">
            <Image src="/images/foto-mesa.jpg" alt="Criança segurando a carta Um lugar na roda à mesa" fill sizes="(max-width: 768px) 90vw, 540px" className="object-cover" />
          </div>
        </Reveal>
        <div className="order-1 md:order-2">
          <Reveal>
            <Pill>Como funciona</Pill>
            <h2 className="mt-4 font-display text-4xl uppercase leading-none text-teal sm:text-5xl">
              Uma carta por vez. <span className="text-terracotta">Uma conversa que fica.</span>
            </h2>
            <p className="mt-4 text-lg font-semibold text-teal/85">Sem preparar aula, sem tela. Funciona no jantar, antes de dormir ou no devocional.</p>
          </Reveal>
          <ol className="mt-8 flex flex-col gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 100}>
                <li className="flex items-start gap-4 rounded-3xl border-2 border-sage bg-white p-5">
                  <span className={`grid size-12 shrink-0 place-items-center rounded-full font-display text-2xl text-cream ${s.c}`}>{s.n}</span>
                  <div>
                    <h3 className="font-display text-2xl uppercase text-teal">{s.t}</h3>
                    <p className="text-lg font-semibold leading-snug text-teal/85">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- CARTA POR DENTRO */
const parts = [
  { tag: "Situação", tone: "terracotta" as const, t: "Uma cena real da vida da criança", d: "Escola, amizades, família e internet." },
  { tag: "O que você faria?", tone: "green" as const, t: "Duas formas de agir: A ou B", d: "Seu filho pensa antes de responder." },
  { tag: "Na Bíblia", tone: "terracotta" as const, t: "Um princípio bíblico", d: "O versículo que ilumina aquela atitude." },
  { tag: "Vamos conversar?", tone: "green" as const, t: "Uma pergunta para conversar", d: "Para levar o ensino para a vida." },
];

export function InsideCard() {
  return (
    <section className="bg-cream-2 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Pill tone="terracotta">Veja por dentro</Pill>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl uppercase leading-none text-teal sm:text-5xl">
            Tudo o que a conversa precisa, <span className="text-terracotta">em uma carta só</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative mx-auto w-64 sm:w-80">
              <Image src="/images/carta-pao.png" alt="" width={630} height={945} className="absolute left-0 top-0 rotate-[-9deg] rounded-2xl opacity-90 shadow-xl" />
              <Image src="/images/carta-roda.png" alt="Carta Um lugar na roda, frente" width={630} height={945} className="relative rotate-[3deg] rounded-2xl shadow-2xl" />
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {parts.map((p, i) => (
              <Reveal key={p.tag} delay={i * 90}>
                <div className="h-full rounded-3xl bg-cream p-6 shadow-[0_10px_24px_rgba(19,62,68,0.08)]">
                  <Pill tone={p.tone}>{p.tag}</Pill>
                  <h3 className="mt-3 text-xl font-black leading-tight text-teal">{p.t}</h3>
                  <p className="mt-1 font-semibold text-teal/80">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- 50 SITUAÇÕES */
const gallery = ["carta-estojo", "carta-tarefa", "carta-foto", "carta-bebe", "carta-pao", "carta-roda"];

export function Situations() {
  const half = Math.ceil(situations.length / 2);
  const rows = [situations.slice(0, half), situations.slice(half)];
  return (
    <section className="overflow-hidden bg-cream py-20 md:py-28">
      <Reveal className="px-5 text-center">
        <Pill>As 50 situações</Pill>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl uppercase leading-none text-teal sm:text-5xl">
          <span className="text-terracotta">50 situações reais</span> que seu filho vive de verdade
        </h2>
      </Reveal>

      <div className="mt-10 flex flex-col gap-3" aria-label="Lista das 50 situações do baralho">
        {rows.map((row, r) => (
          <div key={r} className="flex w-max gap-3">
            <div className={`flex gap-3 ${r === 0 ? "marquee" : "marquee-reverse"}`}>
              {[...row, ...row].map((t, i) => (
                <span key={`${t}-${i}`} aria-hidden={i >= row.length} className="whitespace-nowrap rounded-full border-2 border-sage bg-white px-5 py-2 text-lg font-extrabold text-teal">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-5">
        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-6 md:overflow-visible md:px-0">
          {gallery.map((g, i) => (
            <Reveal key={g} delay={i * 70} className="w-44 shrink-0 snap-center md:w-auto">
              <Image src={`/images/${g}.png`} alt="Exemplo de carta do baralho" width={630} height={945} sizes="180px" className={`rounded-2xl shadow-xl ${i % 2 ? "rotate-2" : "-rotate-2"}`} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CtaButton>Quero as 50 cartas</CtaButton>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- PARA QUEM */
const audience = [
  { Icon: IconHome, t: "Pais e mães", d: "Que querem ir além da história bíblica e formar o caráter dos filhos no dia a dia." },
  { Icon: IconHeart, t: "Avós e padrinhos", d: "Um jeito leve de conversar sobre fé e atitudes quando os netos estão por perto." },
  { Icon: IconChurch, t: "Ministério infantil e EBD", d: "Dinâmica pronta para a aula: cada carta rende uma boa conversa em grupo." },
  { Icon: IconPeople, t: "Devocional em família", d: "Uma carta por dia no jantar ou antes de dormir, sem precisar preparar nada." },
];

export function Audience() {
  return (
    <section className="bg-cream-2 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl uppercase leading-none text-teal sm:text-5xl">
            Para quem é o <span className="text-terracotta">Escolhas com Jesus</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 90}>
              <div className="h-full rounded-3xl border-2 border-sage bg-cream p-6">
                <span className="grid size-14 place-items-center rounded-full bg-green text-cream"><Icon className="size-7" /></span>
                <h3 className="mt-4 text-xl font-black text-teal">{t}</h3>
                <p className="mt-2 font-semibold leading-snug text-teal/80">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- OFERTA */
const includes = [
  { Icon: IconCards, t: "50 cartas ilustradas", d: "Frente com a situação e verso com a marca do baralho." },
  { Icon: IconBook, t: "Guia “Como usar o baralho”", d: "O passo a passo Leia • Escolha • Converse." },
  { Icon: IconChat, t: "Princípio bíblico e pergunta em cada carta", d: "A conversa já vem guiada." },
  { Icon: IconBolt, t: "Acesso imediato", d: "Material digital: você recebe o arquivo logo após a compra." },
];

export function Offer() {
  return (
    <section id="oferta" className="relative bg-teal px-5 py-20 text-cream md:py-28">
      <Leaf className="absolute left-6 top-8 hidden w-10 md:block" c2="#bcc5a2" />
      <Leaf className="absolute right-6 top-8 hidden w-10 md:block" flip c1="#bcc5a2" c2="#c6663c" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl uppercase leading-none sm:text-5xl">
            Você recebe <span className="text-sage">tudo isso:</span>
          </h2>
          <ul className="mt-8 flex flex-col gap-4">
            {includes.map(({ Icon, t, d }) => (
              <li key={t} className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-copper text-cream"><Icon className="size-6" /></span>
                <div>
                  <p className="text-xl font-black">{t}</p>
                  <p className="font-semibold text-cream-2/90">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2rem] bg-cream p-7 text-center text-teal shadow-[0_30px_60px_rgba(0,0,0,0.3)] sm:p-10">
            <div className="relative mx-auto -mt-20 mb-4 h-40 w-64">
              <Image src="/images/verso.png" alt="" width={629} height={945} className="absolute left-4 top-2 w-24 -rotate-12 rounded-xl shadow-xl" />
              <Image src="/images/carta-bebe.png" alt="" width={630} height={945} className="absolute left-20 top-0 w-24 rounded-xl shadow-xl" />
              <Image src="/images/carta-estojo.png" alt="" width={630} height={945} className="absolute left-36 top-2 w-24 rotate-12 rounded-xl shadow-xl" />
            </div>
            <p className="font-display text-2xl uppercase text-green">Escolhas com Jesus</p>
            {site.priceFrom && <p className="mt-2 text-lg font-bold text-teal/60 line-through">De R$ {site.priceFrom}</p>}
            <p className="mt-1 font-display text-6xl leading-none text-terracotta sm:text-7xl">
              <span className="align-top text-3xl">R$</span> {site.price}
            </p>
            {site.installments && <p className="mt-2 font-bold text-teal/70">{site.installments}</p>}
            <p className="mt-2 font-extrabold text-green">Pagamento único • Acesso imediato</p>
            <CtaButton className="mt-6 w-full">Liberar acesso agora</CtaButton>
            <p className="mt-4 text-sm font-bold text-teal/70">Compra 100% segura pela Kiwify • Pix ou cartão</p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 rounded-3xl border-2 border-sage/60 p-6 text-center sm:flex-row sm:text-left">
          <span className="grid size-16 shrink-0 place-items-center rounded-full bg-sage text-teal"><IconShield className="size-8" /></span>
          <div>
            <p className="text-xl font-black">Garantia incondicional de {site.guaranteeDays} dias</p>
            <p className="font-semibold text-cream-2/90">
              Use com sua família. Se não gostar, peça o reembolso dentro de {site.guaranteeDays} dias e devolvemos 100% do valor, sem perguntas.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------------------------------------- DEPOIMENTOS (só aparece com depoimentos reais) */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="bg-cream px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-4xl uppercase text-teal">O que as famílias dizem</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border-2 border-sage bg-white p-6">
              <blockquote className="font-serif text-lg italic">“{t.text}”</blockquote>
              <figcaption className="mt-4 font-black text-teal">
                {t.name} <span className="font-semibold text-teal/70">• {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- FAQ */
const faq = [
  {
    q: "O baralho é físico?",
    a: "Não. É um material digital: logo após a compra você recebe o arquivo com as 50 cartas (frente e verso) e o guia de uso, prontos para imprimir em casa ou numa gráfica, quantas vezes quiser.",
  },
  {
    q: "Para qual idade é indicado?",
    a: "As situações são do dia a dia de crianças em idade escolar: escola, amizades, família e internet. Você adapta a conversa à idade do seu filho.",
  },
  {
    q: "Preciso preparar alguma coisa?",
    a: "Não. É só tirar uma carta e ler. A própria carta traz as duas opções, o princípio bíblico e a pergunta para conversar.",
  },
  {
    q: "Posso usar na igreja, na EBD ou no ministério infantil?",
    a: "Pode. Cada carta funciona muito bem como dinâmica em grupo: as crianças votam A ou B e a turma conversa sobre o versículo.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Assim que o pagamento é aprovado (no Pix é na hora), você recebe o acesso no e-mail usado na compra.",
  },
  {
    q: "E se eu não gostar?",
    a: `Você tem ${site.guaranteeDays} dias de garantia. Se não gostar, é só pedir o reembolso e devolvemos 100% do valor.`,
  },
];

export function Faq() {
  return (
    <section className="bg-cream px-5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-4xl uppercase leading-none text-teal sm:text-5xl">Perguntas frequentes</h2>
        <div className="mt-10 flex flex-col gap-3">
          {faq.map((f) => (
            <details key={f.q} className="group rounded-3xl border-2 border-sage bg-white px-6 py-5 open:shadow-[0_10px_24px_rgba(19,62,68,0.08)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-teal">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-cream-2 text-terracotta transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 font-semibold leading-relaxed text-teal/85">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- CTA FINAL + RODAPÉ */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-cream-2 px-5 py-20 text-center md:py-28">
      <Reveal>
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <div className="flex gap-3"><Leaf className="w-7" /><Leaf className="w-7" flip /></div>
          <h2 className="mt-4 font-display text-4xl uppercase leading-none text-teal sm:text-6xl">
            Ensine seu filho a <span className="text-terracotta">agir como Jesus</span> hoje à noite
          </h2>
          <p className="mt-5 max-w-xl text-lg font-semibold text-teal/85">
            Uma carta, uma pergunta e uma conversa que seu filho vai lembrar quando você não estiver por perto.
          </p>
          <CtaButton className="mt-8">Liberar acesso agora</CtaButton>
          <div className="mt-5"><Trust center /></div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-teal px-5 pb-28 pt-12 text-center text-cream-2 md:pb-12">
      <p className="font-display text-3xl uppercase text-cream">
        Escolhas <span className="text-sage">com Jesus</span>
      </p>
      <p className="mt-2 font-semibold">{site.tagline}</p>
      {/* <p className="mt-6 text-sm font-semibold">
        Dúvidas? <a className="underline underline-offset-4" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
      </p> */}
      <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-cream-2/70">
        © {site.year} Escolhas com Jesus. Todos os direitos reservados. Este site não faz parte do Facebook ou da Meta
        Platforms, Inc. e não é endossado por eles.
      </p>
    </footer>
  );
}
