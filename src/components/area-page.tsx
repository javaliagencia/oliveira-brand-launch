/**
 * AreaPage — estrutura padrão das páginas de Área de Atuação.
 *
 * Estrutura única; o conteúdo varia por slug (src/lib/areas-content.ts).
 */
import { Link } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";
import socioJorge from "@/assets/socios/jorge-ritzmann-de-oliveira.png.asset.json";
import socioCarolina from "@/assets/socios/carolina-schmidt.jpg.asset.json";
import socioSonia from "@/assets/socios/sonia-angulski.jpg.asset.json";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { BrandArrow, BrandLink } from "@/components/brand-ui";
import { getAreaContent } from "@/lib/areas-content";

export { getAreaBanner } from "@/lib/areas-content";


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
    cargo: "Sócio-fundador · Coordenação da área",
    foto: socioJorge.url,
    href: "/socios/jorge-ritzmann-de-oliveira",
    email: "jorge@oliveiraritzmann.com.br",
    linkedin: "https://www.linkedin.com",
  },
  {
    nome: "Carolina Schmidt",
    cargo: "Sócia · Contencioso e regulação",
    foto: socioCarolina.url,
    href: "#",
    email: "carolina@oliveiraritzmann.com.br",
    linkedin: "https://www.linkedin.com",
  },
  {
    nome: "Sônia Angulski",
    cargo: "Sócia · Consultivo e contratos",
    foto: socioSonia.url,
    href: "#",
    email: "sonia@oliveiraritzmann.com.br",
    linkedin: "https://www.linkedin.com",
  },
];

const AREAS = [
  { label: "Recuperação de Crédito", href: "/areas/recuperacao-de-credito" },
  { label: "Contencioso de Volume", href: "/areas/contencioso-de-volume" },
  { label: "Contencioso Estratégico", href: "/areas/contencioso-estrategico" },
  { label: "Direito Cível", href: "/areas/civel" },
  { label: "Direito Tributário", href: "/areas/tributario" },
  { label: "Direito Médico", href: "/areas/direito-medico" },
];


export function AreaPage({ titulo, slug }: { titulo: string; slug?: string }) {
  const outrasAreas = AREAS.filter((a) => !slug || !a.href.endsWith(slug));
  const conteudo = getAreaContent(slug);
  const { servicos: SERVICOS, setores: SETORES, artigos: ARTIGOS } = conteudo;
  return (
    <article className="bg-[var(--sand)] text-[var(--ink)]">
      {/* HERO */}
      <section className="relative bg-[var(--sand)] pt-28 pb-0 md:pt-32 md:pb-20">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <div className="mx-auto max-w-[1360px] px-6">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
            <div className="relative z-10 order-2 bg-[var(--ink)] px-8 py-12 text-[var(--sand)] md:order-1 md:col-span-5 md:px-12 md:py-16 md:-mr-8 md:mt-16 md:mb-[-4rem]">
              <SectionEyebrow tone="gold">Área de atuação</SectionEyebrow>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
                {titulo}
              </h1>
              <p className="mt-6 text-[15px] leading-relaxed text-[color-mix(in_oklch,var(--sand)_85%,transparent)] md:text-[16px]">
                Assessoria integral a médicos, clínicas, hospitais, operadoras e cooperativas.
                Defesa técnica, regulação e governança conduzidas com o mesmo método que
                sustenta trinta anos de atuação em decisões que exigem profundidade.
              </p>
            </div>

            <div className="order-1 md:order-2 md:col-span-7 md:self-start">
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/11]">
                <img
                  src={bannerImg.url}
                  alt={titulo}
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
            A prática médica exige advocacia que compreenda ciência, ética e regulação —
            e que traduza tudo isso em decisão segura.
          </p>
          <div
            aria-hidden="true"
            className="mt-8 h-[2px] w-16"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[var(--ink)]/85 md:text-base">
            <p>
              Atuamos ao lado de profissionais e instituições de saúde nos momentos em que
              a resposta jurídica precisa acompanhar o rigor técnico da medicina. Do
              contencioso individual à estruturação de grandes operadoras, o método é o
              mesmo: leitura profunda do caso, definição clara da estratégia e execução
              previsível.
            </p>
            <p>
              A equipe integra sócios com atuação consolidada em responsabilidade civil,
              regulação sanitária, direito societário e contratos empresariais — condição
              necessária para tratar a saúde como o setor multidisciplinar que ela é.
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
              Quem conduz a prática de {titulo}.
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
              {outrasAreas.map((a) => (
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
            <SectionEyebrow tone="ink-2">Segmentos</SectionEyebrow>
            <h3 className="mt-6 font-display text-2xl font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-3xl">
              Segmentos com atuação recorrente.
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
                Inteligência aplicada ao setor de saúde.
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
