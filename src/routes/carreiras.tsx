/**
 * Carreiras — página institucional.
 *
 * Estrutura (referência Gowling WLG, no idioma da marca):
 *  1. Hero editorial — bloco escuro à esquerda + imagem em destaque à direita.
 *  2. Manifesto — frase-síntese + parágrafo de apoio.
 *  3. Como se cresce aqui — quatro pilares numerados.
 *  4. Onde você cresce — áreas e segmentos com atuação recorrente.
 *  5. Oportunidades — CTA para o portal de vagas.
 */
import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/carreiras-hero.jpg.asset.json";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { BrandArrow, BrandLink } from "@/components/brand-ui";

export const Route = createFileRoute("/carreiras")({
  head: () => ({
    meta: [
      { title: "Carreiras — Oliveira Ritzmann Advogados" },
      {
        name: "description",
        content:
          "Onde a advocacia se aprende com método. Trinta anos formando advogados em nove praças do país, com sócio acompanhando o trabalho e caminho interno de crescimento.",
      },
      { property: "og:title", content: "Carreiras — Oliveira Ritzmann Advogados" },
      {
        property: "og:description",
        content:
          "Estrutura de formação, sócio acompanhando o trabalho e caminho interno de crescimento, em nove praças do país.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: bannerImg.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: bannerImg.url },
    ],
  }),
  component: CarreirasPage,
});

const PILARES: { titulo: string; texto: string }[] = [
  {
    titulo: "Estrutura de formação",
    texto:
      "Trilha desenhada por sócios: leitura de processo, redação técnica, sustentação oral e condução de audiências acompanhadas desde o primeiro ano.",
  },
  {
    titulo: "Sócio acompanhando o trabalho",
    texto:
      "Nenhum processo corre sem supervisão. O sócio responsável está na ponta da relação com o cliente e na revisão do que sai do escritório.",
  },
  {
    titulo: "Caminho interno de crescimento",
    texto:
      "Promoções construídas com plano de carreira transparente. A maioria dos sócios atuais começou como estagiário ou advogado júnior na casa.",
  },
  {
    titulo: "Nove praças, um método",
    texto:
      "Blumenau, São Paulo, Rio de Janeiro, Curitiba, Porto Alegre, Salvador, Goiânia, Maceió e Aracaju — mesmo padrão técnico em todo o país.",
  },
];

const AREAS = [
  { label: "Contencioso estratégico", href: "#" },
  { label: "Contencioso de volume", href: "#" },
  { label: "Recuperação de créditos", href: "#" },
  { label: "Tributário", href: "#" },
  { label: "Societário e M&A", href: "#" },
  { label: "Trabalhista", href: "#" },
  { label: "Cível e consumidor", href: "#" },
  { label: "Direito Médico", href: "/areas/direito-medico" },
];

function CarreirasPage() {
  return (
    <article className="bg-[var(--sand)] text-[var(--ink)]">
      {/* HERO — bloco escuro à esquerda + imagem em destaque à direita (padrão Gowling) */}
      <section className="relative bg-[var(--sand)] pt-28 md:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <div className="mx-auto max-w-[1360px] px-6">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
            {/* Bloco editorial escuro — mesmo desalinhamento das páginas de área */}
            <div className="relative z-10 order-2 bg-[var(--ink)] px-8 py-12 text-[var(--sand)] md:order-1 md:col-span-5 md:px-12 md:py-16 md:-mr-8 md:mt-16">
              <SectionEyebrow tone="gold">Carreiras</SectionEyebrow>
              <h1 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] md:text-[52px]">
                Onde a advocacia{" "}
                <span className="font-semibold" style={{ color: "var(--gold)" }}>
                  se aprende com&nbsp;método.
                </span>
              </h1>
              <p className="mt-6 text-[15px] leading-relaxed text-[color-mix(in_oklch,var(--sand)_85%,transparent)] md:text-[16px]">
                Trinta anos formando advogados. Estrutura de formação, sócio
                acompanhando o trabalho e caminho de crescimento interno,
                em nove praças do país.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#oportunidades"
                  className="btn btn-outline-invert"
                >
                  Ver oportunidades
                  <BrandArrow />
                </a>
              </div>
            </div>

            {/* Imagem em destaque */}
            <div className="order-1 md:order-2 md:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/11]">
                <img
                  src={bannerImg.url}
                  alt="Carreiras no Oliveira Ritzmann"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto max-w-[1360px] px-6 py-16 md:py-24">
        <SectionEyebrow tone="ink-2">Formação</SectionEyebrow>
        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12">
          <p className="md:col-span-7 font-display text-2xl font-light leading-[1.3] tracking-tight text-[var(--ink-2)] md:text-[34px]">
            Formar advogado é trabalho de sócio — com o mesmo padrão técnico
            que sustenta operações de escala nacional.
          </p>
          <div className="md:col-span-5">
            <div
              aria-hidden="true"
              className="mb-6 h-[2px] w-16"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div className="space-y-5 text-[15px] leading-relaxed text-[var(--ink)]/85 md:text-base">
              <p>
                O escritório procura curiosidade técnica, rigor de leitura e
                disposição para assumir responsabilidade. A formação acontece
                na operação, com acompanhamento desde o primeiro ano.
              </p>
              <p>
                O escritório se organiza para que cada advogado tenha um sócio
                de referência, um caminho claro de desenvolvimento e a chance
                de circular entre áreas e praças.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="border-t border-[color-mix(in_oklch,var(--ink)_10%,transparent)] bg-[color-mix(in_oklch,var(--sand)_60%,white)]">
        <div className="mx-auto max-w-[1360px] px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <SectionEyebrow tone="ink-2">O que sustenta a carreira aqui</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-[40px]">
              Quatro coisas que valem em todas as praças.
            </h2>
          </div>

          <ol className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
            {PILARES.map((p, i) => (
              <li
                key={p.titulo}
                className="grid grid-cols-[3rem_1fr] gap-6 border-t border-[color-mix(in_oklch,var(--ink)_12%,transparent)] pt-8"
              >
                <span
                  className="font-display text-[13px] font-medium tracking-[0.14em]"
                  style={{ color: "var(--gold)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[22px] font-medium leading-snug tracking-tight text-[var(--ink-2)] md:text-[24px]">
                    {p.titulo}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink)]/80">
                    {p.texto}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="mx-auto max-w-[1360px] px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionEyebrow tone="ink-2">Onde você cresce</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-[40px]">
              Áreas com atuação recorrente e frentes em expansão.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--ink)]/80">
              Trabalhamos lado a lado com nossos clientes de forma integrada.
              Conheça os times em que você pode desenvolver a sua trajetória.
            </p>
          </div>

          <ul className="md:col-span-7 divide-y divide-[color-mix(in_oklch,var(--ink)_10%,transparent)] border-y border-[color-mix(in_oklch,var(--ink)_10%,transparent)]">
            {AREAS.map((a) => (
              <li key={a.label}>
                <a
                  href={a.href}
                  className="group flex items-center justify-between py-5 text-[16px] text-[var(--ink)] transition-colors hover:text-[var(--gold)]"
                >
                  <span className="font-display font-medium tracking-tight">
                    {a.label}
                  </span>
                  <BrandArrow />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OPORTUNIDADES — CTA */}
      <section
        id="oportunidades"
        className="relative overflow-hidden bg-[var(--ink)] text-[var(--sand)]"
      >
        <div className="mx-auto max-w-[1360px] px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionEyebrow tone="gold">Oportunidades</SectionEyebrow>
              <h2 className="mt-6 font-display text-3xl font-light leading-tight tracking-[-0.02em] text-[var(--sand)] md:text-[44px]">
                Vagas abertas em{" "}
                <span className="font-semibold" style={{ color: "var(--gold)" }}>
                  nove praças do país.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[color-mix(in_oklch,var(--sand)_80%,transparent)] md:text-[16px]">
                Envie a sua candidatura para as posições abertas de estágio,
                advocacia júnior, pleno e sênior. Também recebemos candidaturas
                espontâneas ao longo do ano.
              </p>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <BrandLink
                href="https://oliveiraeantunes.inhire.app/vagas"
                invert
              >
                Ver vagas abertas
              </BrandLink>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
