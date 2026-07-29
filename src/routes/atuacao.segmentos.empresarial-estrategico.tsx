/**
 * Segmento — Empresarial Estratégico.
 *
 * Mesma estrutura da página de Instituições Financeiras.
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";
import bannerImg from "@/assets/segmentos/empresarial-estrategico.jpg";
import socioJorge from "@/assets/socios/jorge-ritzmann-de-oliveira.png.asset.json";
import socioJuliano from "@/assets/socios/juliano-schmitt.png.asset.json";
import socioGuilherme from "@/assets/socios/guilherme-otte.jpg.asset.json";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { BrandArrow, BrandLink } from "@/components/brand-ui";

export const Route = createFileRoute("/atuacao/segmentos/empresarial-estrategico")({
  head: () => ({
    meta: [
      { title: "Empresarial Estratégico | Oliveira Ritzmann Advogados" },
      {
        name: "description",
        content:
          "Advocacia para decisões empresariais de alto impacto: transações, disputas relevantes e movimentos societários conduzidos com método.",
      },
      { property: "og:title", content: "Empresarial Estratégico | Oliveira Ritzmann Advogados" },
      {
        property: "og:description",
        content:
          "Assessoria dedicada a decisões que definem o rumo da empresa: M&A, disputas de alto valor, reorganizações e governança.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: bannerImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: bannerImg },
    ],
  }),
  component: EmpresarialEstrategicoPage,
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
    cargo: "Sócio · Contencioso estratégico e arbitragens",
    foto: socioJuliano.url,
    href: "#",
    email: "juliano@oliveiraritzmann.com.br",
    linkedin: "https://www.linkedin.com",
  },
  {
    nome: "Guilherme Otte",
    cargo: "Sócio · Societário, M&A e governança",
    foto: socioGuilherme.url,
    href: "#",
    email: "guilherme@oliveiraritzmann.com.br",
    linkedin: "https://www.linkedin.com",
  },
];

const SERVICOS = [
  "Contencioso estratégico: disputas de alto valor, teses inéditas e casos com impacto reputacional.",
  "Arbitragens empresariais nacionais e internacionais, com curadoria de câmaras e árbitros.",
  "M&A e reorganizações societárias: desenho, due diligence e negociação em transações complexas.",
  "Acordos de sócios e governança corporativa para grupos empresariais e empresas familiares.",
  "Planejamento patrimonial e sucessório integrado às decisões societárias.",
  "Assessoria em situações de crise, investigações internas e resposta a autoridades.",
];

const OUTRAS_AREAS = [
  { label: "Contencioso estratégico", href: "/atuacao/contencioso-estrategico" },
  { label: "Societário", href: "/areas/societario" },
  { label: "Planejamento patrimonial e sucessório", href: "/areas/planejamento-patrimonial" },
  { label: "Contratos", href: "/areas/contratos" },
  { label: "Tributário", href: "/areas/tributario" },
  { label: "Cível", href: "/areas/civel" },
];

const SETORES = [
  { label: "Grupos familiares e holdings", href: "#" },
  { label: "Empresas de capital fechado", href: "#" },
  { label: "Sócios investidores e founders", href: "#" },
  { label: "Fundos de investimento", href: "#" },
  { label: "Conselhos de administração", href: "#" },
  { label: "Executivos C-level", href: "#" },
];

const ARTIGOS: { categoria: string; data: string; titulo: string; href: string }[] = [
  {
    categoria: "Societário",
    data: "Jul · 2026",
    titulo:
      "Acordos de sócios em grupos familiares: quando a governança deixa de ser opcional",
    href: "/inteligencia",
  },
  {
    categoria: "Contencioso",
    data: "Mai · 2026",
    titulo:
      "Disputas de alto valor: curadoria estratégica e a leitura de risco antes da tese",
    href: "/inteligencia",
  },
  {
    categoria: "Arbitragem",
    data: "Mar · 2026",
    titulo:
      "Câmaras arbitrais e escolha de árbitros: o que uma decisão bem desenhada preserva",
    href: "/inteligencia",
  },
];

function EmpresarialEstrategicoPage() {
  return (
    <article className="bg-[var(--sand)] text-[var(--ink)]">
      {/* HERO — imagem em destaque + bloco editorial */}
      <section className="relative bg-[var(--sand)] pt-28 pb-0 md:pt-32 md:pb-20">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <div className="mx-auto max-w-[1360px] px-6">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
            <div className="relative z-10 order-2 bg-[var(--ink)] px-8 py-12 text-[var(--sand)] md:order-1 md:col-span-5 md:px-12 md:py-16 md:-mr-8 md:mt-16 md:mb-[-4rem]">
              <SectionEyebrow tone="gold">Segmento</SectionEyebrow>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
                Empresarial Estratégico
              </h1>
              <p className="mt-6 text-[15px] leading-relaxed text-[color-mix(in_oklch,var(--sand)_85%,transparent)] md:text-[16px]">
                Advocacia para decisões que definem o rumo da empresa. Transações complexas,
                disputas de alto valor e movimentos societários conduzidos com o mesmo método
                que sustenta trinta anos de casos relevantes.
              </p>
            </div>

            <div className="order-1 md:order-2 md:col-span-7 md:self-start">
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/11]">
                <img
                  src={bannerImg}
                  alt="Empresarial estratégico, sala de decisão"
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
            Decisões estratégicas exigem advocacia que combine leitura de negócio, sensibilidade
            reputacional e execução impecável.
          </p>
          <div
            aria-hidden="true"
            className="mt-8 h-[2px] w-16"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[var(--ink)]/85 md:text-base">
            <p>
              Atuamos ao lado de sócios, conselhos e executivos em decisões que definem o rumo
              da empresa: transações, disputas relevantes, reorganizações e situações de crise.
              A entrega é a mesma em qualquer escala, método, profundidade e presença.
            </p>
            <p>
              A equipe integra sócios com atuação consolidada em contencioso estratégico,
              societário, arbitragens e governança, condição necessária para conduzir os casos
              em que a decisão importa mais do que o volume.
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
              Quem conduz a prática empresarial estratégica.
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
                Inteligência aplicada às decisões que importam.
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
