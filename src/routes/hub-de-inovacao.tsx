/**
 * Hub de Inovação — Dados e Inteligência Artificial.
 *
 * Estrutura:
 *  1. Hero editorial desalinhado (bloco escuro + imagem).
 *  2. Visão geral — frase-síntese + parágrafos de apoio.
 *  3. Frentes de trabalho.
 *  4. Faixa de fechamento em fundo ink.
 */
import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/hub-inovacao-hero.jpg";
import oliveIaLogo from "@/assets/oliv-ia-logo-claro.png";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { BrandArrow } from "@/components/brand-ui";

export const Route = createFileRoute("/hub-de-inovacao")({
  head: () => ({
    meta: [
      { title: "Hub de Inovação — Dados e Inteligência Artificial" },
      {
        name: "description",
        content:
          "Dados, inteligência artificial e conhecimento jurídico ampliam nossa capacidade de análise e fortalecem a tomada de decisão.",
      },
      { property: "og:title", content: "Hub de Inovação — Dados e Inteligência Artificial" },
      {
        property: "og:description",
        content:
          "Inteligência de dados, automação e IA conectadas ao conhecimento jurídico para aperfeiçoar processos e ampliar a eficiência.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HubInovacaoPage,
});

const FRENTES: { titulo: string; texto: string }[] = [
  {
    titulo: "Inteligência de dados",
    texto:
      "Organização e leitura das informações do escritório para sustentar análises consistentes e decisões mais precisas.",
  },
  {
    titulo: "Automação de processos",
    texto:
      "Fluxos automatizados que reduzem esforço repetitivo e ampliam a previsibilidade das rotinas operacionais.",
  },
  {
    titulo: "Inteligência artificial aplicada",
    texto:
      "Modelos e ferramentas conectados ao conhecimento jurídico da casa, sempre com revisão técnica de advogados.",
  },
  {
    titulo: "Apoio às áreas",
    texto:
      "A estrutura serve às diferentes áreas do escritório, fortalecendo a capacidade analítica e a qualidade das entregas.",
  },
];

function HubInovacaoPage() {
  return (
    <article className="bg-[var(--sand)] text-[var(--ink)]">
      {/* HERO */}
      <section className="relative bg-[var(--sand)] pt-28 md:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <div className="mx-auto max-w-[1360px] px-6">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
            <div className="relative z-10 order-2 bg-[var(--ink)] px-8 py-12 text-[var(--sand)] md:order-1 md:col-span-5 md:px-12 md:py-16 md:-mr-8 md:mt-16">
              <SectionEyebrow tone="gold">Hub de Inovação</SectionEyebrow>
              <h1 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] md:text-[52px]">
                Dados e{" "}
                <span className="font-semibold" style={{ color: "var(--gold)" }}>
                  Inteligência&nbsp;Artificial
                </span>
              </h1>
              <p className="mt-6 text-[15px] leading-relaxed text-[color-mix(in_oklch,var(--sand)_85%,transparent)] md:text-[16px]">
                Dados, inteligência artificial e conhecimento jurídico ampliam
                nossa capacidade de análise e fortalecem a tomada de decisão.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a href="#visao-geral" className="btn btn-outline-invert">
                  Visão geral
                  <BrandArrow />
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2 md:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/11]">
                <img
                  src={bannerImg}
                  alt="Hub de Inovação do Oliveira Ritzmann"
                  width={1600}
                  height={1100}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISÃO GERAL */}
      <section id="visao-geral" className="mx-auto max-w-[1360px] px-6 py-16 md:py-24">
        <SectionEyebrow tone="ink-2">Visão geral</SectionEyebrow>
        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12">
          <p className="md:col-span-7 font-display text-2xl font-light leading-[1.3] tracking-tight text-[var(--ink-2)] md:text-[34px]">
            Dados, inteligência artificial e conhecimento jurídico ampliam nossa
            capacidade de análise e fortalecem a tomada de decisão.
          </p>
          <div className="md:col-span-5">
            <div
              aria-hidden="true"
              className="mb-6 h-[2px] w-16"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div className="space-y-5 text-[15px] leading-relaxed text-[var(--ink)]/85 md:text-base">
              <p>
                Nossa atuação integra inteligência de dados, automação e
                inteligência artificial para apoiar as diferentes áreas do
                escritório. Essa estrutura fortalece a organização das
                informações, o aprimoramento dos processos e a capacidade
                analítica, contribuindo para decisões mais precisas e uma
                atuação cada vez mais consistente.
              </p>
              <p>
                O Hub de Inovação reúne essa frente de trabalho, conectando
                tecnologia e conhecimento jurídico para aperfeiçoar processos,
                ampliar a eficiência operacional e fortalecer a qualidade das
                entregas para clientes e equipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FRENTES */}
      <section className="border-t border-[color-mix(in_oklch,var(--ink)_10%,transparent)] bg-[color-mix(in_oklch,var(--sand)_60%,white)]">
        <div className="mx-auto max-w-[1360px] px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <SectionEyebrow tone="ink-2">Frentes de trabalho</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-[40px]">
              Tecnologia a serviço do trabalho jurídico.
            </h2>
          </div>

          <ol className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
            {FRENTES.map((f, i) => (
              <li
                key={f.titulo}
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
                    {f.titulo}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink)]/80">
                    {f.texto}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="relative overflow-hidden bg-[var(--ink)] text-[var(--sand)]">
        <div className="mx-auto max-w-[1360px] px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <SectionEyebrow tone="gold">Experiência</SectionEyebrow>
              <h2 className="mt-6 font-display text-3xl font-light leading-tight tracking-[-0.02em] text-[var(--sand)] md:text-[44px]">
                Nossa inteligência artificial nasce da experiência jurídica
                construída ao longo de{" "}
                <span className="font-semibold" style={{ color: "var(--gold)" }}>
                  quase três décadas de atuação.
                </span>
              </h2>
              <p className="mt-6 max-w-[52ch] text-[15px] font-light leading-relaxed text-[color-mix(in_oklch,var(--sand)_72%,transparent)]">
                Cada rotina, cada tese e cada decisão acumulada em trinta anos
                de método viram dado, critério e contexto. É essa memória de
                atuação que orienta a tecnologia, e não o contrário.
              </p>
            </div>

            <div className="md:col-span-5 md:justify-self-end">
              <div className="border border-[color-mix(in_oklch,var(--sand)_18%,transparent)] px-10 py-12 text-center">
                <img
                  src={oliveIaLogo}
                  alt="Oliv.ia — inteligência artificial do Oliveira Ritzmann"
                  width={1248}
                  height={544}
                  loading="lazy"
                  className="mx-auto w-full max-w-[300px]"
                />
                <p className="mt-6 text-[12px] uppercase tracking-[0.18em] text-[color-mix(in_oklch,var(--sand)_65%,transparent)]">
                  Inteligência artificial proprietária
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[color-mix(in_oklch,var(--sand)_45%,transparent)]">
                  Logo provisório
                </p>
              </div>

              <div className="mt-8 border-l border-[color-mix(in_oklch,var(--gold)_45%,transparent)] pl-6">
                <p className="text-[15px] font-light leading-relaxed text-[color-mix(in_oklch,var(--sand)_80%,transparent)]">
                  A <span className="font-medium text-[var(--sand)]">Oliv.ia</span>{" "}
                  é a inteligência artificial desenvolvida dentro do Oliveira
                  Ritzmann. Ela nasce de trinta anos de construção de método:
                  aprende com os fluxos, as teses e os controles do escritório
                  para transformar volume em leitura estratégica.
                </p>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-[color-mix(in_oklch,var(--sand)_70%,transparent)]">
                  A partir dessa base, desenhamos soluções customizadas para
                  cada cliente, ajustadas à sua operação, aos seus indicadores e
                  ao nível de risco que precisa ser controlado.
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>
    </article>
  );
}
