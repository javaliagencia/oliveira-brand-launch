/**
 * Segmento — Instituições Financeiras.
 *
 * Estrutura espelha a página de áreas de atuação (Direito Médico):
 *  1. Hero discreto (nome do segmento + banner sutil)
 *  2. Visão geral (texto editorial)
 *  3. Principais contatos (advogados vinculados)
 *  4. Outras áreas + Setores correlatos
 *  5. Publicações relacionadas
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";
import bannerImg from "@/assets/segmentos/instituicoes-financeiras.jpg";
import socioJorge from "@/assets/socios/jorge-ritzmann-de-oliveira.png.asset.json";
import socioJuliano from "@/assets/socios/juliano-schmitt.png.asset.json";
import socioGuilherme from "@/assets/socios/guilherme-otte.jpg.asset.json";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { BrandArrow, BrandLink } from "@/components/brand-ui";

export const Route = createFileRoute("/atuacao/segmentos/instituicoes-financeiras")({
  head: () => ({
    meta: [
      { title: "Instituições Financeiras — Oliveira Ritzmann Advogados" },
      {
        name: "description",
        content:
          "Assessoria a bancos, financeiras, cooperativas de crédito e fintechs. Contencioso de volume, recuperação de crédito e regulação com método, previsibilidade e resultado.",
      },
      { property: "og:title", content: "Instituições Financeiras — Oliveira Ritzmann Advogados" },
      {
        property: "og:description",
        content:
          "Prática dedicada ao sistema financeiro. Contencioso em escala, regulação bancária, contratos e recuperação de créditos complexos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: bannerImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: bannerImg },
    ],
  }),
  component: InstituicoesFinanceirasPage,
});

type Contato = {
  nome: string;
  cargo: string;
  foto: string;
  href: string;
  email: string;
  linkedin: string;
};

const CONTATOS: Contato[] = [
  {
    nome: "Jorge Ritzmann de Oliveira",
    cargo: "Sócio-fundador · Coordenação do segmento",
    foto: socioJorge.url,
    href: "/socios/jorge-ritzmann-de-oliveira",
    email: "jorge@oliveiraritzmann.com.br",
    linkedin: "https://www.linkedin.com",
  },
  {
    nome: "Juliano Schmitt",
    cargo: "Sócio · Contencioso bancário e recuperação de crédito",
    foto: socioJuliano.url,
    href: "#",
    email: "juliano@oliveiraritzmann.com.br",
    linkedin: "https://www.linkedin.com",
  },
  {
    nome: "Guilherme Otte",
    cargo: "Sócio · Regulação bancária e contratos",
    foto: socioGuilherme.url,
    href: "#",
    email: "guilherme@oliveiraritzmann.com.br",
    linkedin: "https://www.linkedin.com",
  },
];

const SERVICOS = [
  "Contencioso de volume: execuções, buscas e apreensões, revisionais e ações consumeristas.",
  "Recuperação de créditos complexos, com estratégias de negociação, cobrança e enforcement.",
  "Assessoria regulatória junto ao Banco Central, CVM e órgãos de defesa do consumidor.",
  "Contratos bancários, cédulas de crédito, garantias reais e fidejussórias.",
  "Estruturação de operações de crédito, cessões de carteira e securitização.",
  "Compliance bancário, prevenção à lavagem de dinheiro e LGPD aplicada ao setor.",
];

const OUTRAS_AREAS = [
  { label: "Contencioso estratégico", href: "/atuacao/contencioso-de-volume" },
  { label: "Recuperação de créditos", href: "/atuacao/recuperacao-de-creditos-complexos" },
  { label: "Tributário", href: "/areas/tributario" },
  { label: "Societário", href: "/areas/societario" },
  { label: "Cível", href: "/areas/civel" },
  { label: "Trabalhista", href: "/areas/trabalhista" },
];

const SETORES = [
  { label: "Bancos comerciais e múltiplos", href: "#" },
  { label: "Financeiras e SCFIs", href: "#" },
  { label: "Cooperativas de crédito", href: "#" },
  { label: "Fintechs e instituições de pagamento", href: "#" },
  { label: "Administradoras de consórcio", href: "#" },
  { label: "Securitizadoras e FIDCs", href: "#" },
  { label: "Corretoras e distribuidoras de valores", href: "#" },
  { label: "Seguradoras e resseguradoras", href: "#" },
];

const ARTIGOS: { categoria: string; data: string; titulo: string; href: string }[] = [
  {
    categoria: "Contencioso bancário",
    data: "Jul · 2026",
    titulo:
      "Busca e apreensão após a nova redação do DL 911: leitura prática do rito e da defesa possível",
    href: "/inteligencia",
  },
  {
    categoria: "Regulação",
    data: "Mai · 2026",
    titulo:
      "Bacen e a agenda de open finance: obrigações contratuais e o novo perímetro de responsabilidade",
    href: "/inteligencia",
  },
  {
    categoria: "Crédito",
    data: "Mar · 2026",
    titulo:
      "Recuperação de carteiras em escala: indicadores, governança e o papel do jurídico no ciclo do crédito",
    href: "/inteligencia",
  },
];

function InstituicoesFinanceirasPage() {
  return (
    <article className="bg-[var(--sand)] text-[var(--ink)]">
      {/* HERO — imagem em destaque + bloco editorial (referência Gowling) */}
      <section className="relative bg-[var(--sand)] pt-28 md:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <div className="mx-auto max-w-[1360px] px-6">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
            {/* Bloco editorial escuro */}
            <div className="relative z-10 order-2 bg-[var(--ink)] px-8 py-12 text-[var(--sand)] md:order-1 md:col-span-5 md:px-12 md:py-16">
              <SectionEyebrow tone="gold">Segmento</SectionEyebrow>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
                Instituições Financeiras
              </h1>
              <p className="mt-6 text-[15px] leading-relaxed text-[color-mix(in_oklch,var(--sand)_85%,transparent)] md:text-[16px]">
                Assessoria integral a bancos, financeiras, cooperativas de crédito, fintechs e
                administradoras de consórcio. Contencioso em escala, recuperação de crédito e
                regulação conduzidos com o método que sustenta trinta anos de atuação em
                decisões que exigem profundidade.
              </p>
            </div>

            {/* Imagem em destaque */}
            <div className="order-1 md:order-2 md:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/11]">
                <img
                  src={bannerImg}
                  alt="Instituições financeiras — arquitetura corporativa"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISÃO GERAL */}
      <section className="mx-auto max-w-[1360px] px-6 py-12 md:py-16">
        <SectionEyebrow tone="ink-2">Visão geral</SectionEyebrow>
        <div className="mt-8 max-w-[900px]">
          <p className="font-display text-2xl leading-[1.3] tracking-tight text-[var(--ink-2)] md:text-[32px]">
            Servir ao sistema financeiro exige advocacia que combine escala operacional,
            leitura regulatória e disciplina de resultado.
          </p>
          <div
            aria-hidden="true"
            className="mt-8 h-[2px] w-16"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[var(--ink)]/85 md:text-base">
            <p>
              Atendemos instituições financeiras em todo o ciclo do crédito: da estruturação
              contratual e regulatória à recuperação em carteira, com indicadores auditáveis e
              o mesmo padrão em todas as praças em que operamos. Volume não substitui método —
              e é o método que garante previsibilidade em cada etapa.
            </p>
            <p>
              A equipe integra sócios com atuação consolidada em contencioso bancário,
              recuperação de créditos, direito societário e regulação — condição necessária
              para tratar o setor financeiro na sua verdadeira complexidade multidisciplinar.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {SERVICOS.map((s) => (
              <li key={s} className="flex gap-3 text-[14px] leading-relaxed text-[var(--ink)]/85">
                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-4 shrink-0"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRINCIPAIS CONTATOS */}
      <section className="border-t border-[color-mix(in_oklch,var(--ink)_10%,transparent)] bg-[color-mix(in_oklch,var(--sand)_60%,white)]">
        <div className="mx-auto max-w-[1360px] px-6 py-12 md:py-16">
          <div>
            <SectionEyebrow tone="ink-2">Principais contatos</SectionEyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-[40px]">
              Quem conduz a prática para instituições financeiras.
            </h2>
          </div>

          <ul className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {CONTATOS.map((c) => (
              <li key={c.nome} className="group flex flex-col">
                <Link to={c.href as any} className="block overflow-hidden bg-[var(--ink)]">
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={c.foto}
                      alt={c.nome}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
                <div className="mt-4">
                  <p className="font-display text-[15px] font-medium leading-tight text-[var(--ink-2)]">
                    {c.nome}
                  </p>
                  <p className="mt-1 text-[12px] leading-snug text-[var(--ink)]/70">{c.cargo}</p>
                  <div className="mt-3 flex items-center gap-3 text-[12px] text-[var(--ink)]/80">
                    <a
                      href={`mailto:${c.email}`}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--gold)]"
                    >
                      <Mail size={13} strokeWidth={1.5} /> E-mail
                    </a>
                    <a
                      href={c.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--gold)]"
                    >
                      <Linkedin size={13} strokeWidth={1.5} /> LinkedIn
                    </a>
                  </div>
                  {c.nome === "Jorge Ritzmann de Oliveira" && (
                    <div className="mt-5">
                      <BrandLink href="/socios">Conhecer os advogados</BrandLink>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OUTRAS ÁREAS + SETORES */}
      <section className="mx-auto max-w-[1360px] px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <SectionEyebrow tone="ink-2">Outras áreas</SectionEyebrow>
            <h3 className="mt-6 font-display text-2xl font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-3xl">
              Práticas correlatas do escritório.
            </h3>
            <ul className="mt-8 divide-y divide-[color-mix(in_oklch,var(--ink)_10%,transparent)]">
              {OUTRAS_AREAS.map((a) => (
                <li key={a.href}>
                  <a
                    href={a.href}
                    className="group flex items-center justify-between py-4 text-[15px] text-[var(--ink)] transition-colors hover:text-[var(--gold)]"
                  >
                    <span>{a.label}</span>
                    <BrandArrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionEyebrow tone="ink-2">Outros segmentos</SectionEyebrow>
            <h3 className="mt-6 font-display text-2xl font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-3xl">
              Perfis com atuação recorrente.
            </h3>
            <ul className="mt-8 divide-y divide-[color-mix(in_oklch,var(--ink)_10%,transparent)]">
              {SETORES.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group flex items-center justify-between py-4 text-[15px] text-[var(--ink)] transition-colors hover:text-[var(--gold)]"
                  >
                    <span>{s.label}</span>
                    <BrandArrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PUBLICAÇÕES RELACIONADAS */}
      <section className="border-t border-[color-mix(in_oklch,var(--ink)_10%,transparent)] bg-[color-mix(in_oklch,var(--sand)_60%,white)]">
        <div className="mx-auto max-w-[1360px] px-6 py-12 md:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionEyebrow tone="ink-2">Publicações relacionadas</SectionEyebrow>
              <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-[40px]">
                Inteligência aplicada ao sistema financeiro.
              </h2>
            </div>
            <BrandLink href="/inteligencia">Ver todas as publicações</BrandLink>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {ARTIGOS.map((a) => (
              <li key={a.titulo}>
                <a
                  href={a.href}
                  className="group flex h-full flex-col justify-between gap-8 border border-[var(--ink)]/12 bg-[var(--sand)]/40 p-6 transition-colors hover:border-[var(--gold)] hover:bg-[var(--sand)]"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                      {a.categoria} · {a.data}
                    </p>
                    <p className="mt-5 font-display text-[18px] leading-snug text-[var(--ink)] md:text-[20px]">
                      {a.titulo}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-[var(--ink-2)]">
                    Ler
                    <BrandArrow />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
