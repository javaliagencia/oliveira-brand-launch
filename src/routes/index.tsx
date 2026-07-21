import { createFileRoute } from "@tanstack/react-router";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import imgCorporativos from "@/assets/fold2-corporativos.jpg.asset.json";
import imgEmpresarial from "@/assets/fold2-empresarial.jpg.asset.json";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Oliveira Ritzmann Advogados — Advocacia com profundidade em qualquer escala",
      },
      {
        name: "description",
        content:
          "Trinta anos conduzindo operações que exigem escala e decisões que exigem profundidade. Método, previsibilidade e resultado.",
      },
      {
        property: "og:title",
        content:
          "Oliveira Ritzmann Advogados — Advocacia com profundidade em qualquer escala",
      },
      {
        property: "og:description",
        content:
          "Método, previsibilidade e resultado — do contencioso de volume ao empresarial estratégico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/**
 * Home — Dobra 1 (Hero) apenas.
 *
 * Fullscreen (100vh). Vídeo institucional em loop, mudo, cobrindo toda a
 * viewport. Camada de overscura verde-profundo por cima para garantir
 * contraste do headline. Sem paginação lateral, sem outros folds — as
 * próximas dobras são construídas em passos seguintes.
 */
function Index() {
  return (
    <main className="bg-background text-foreground">
      <HeroFold />
      <CompetenciasFold />
    </main>
  );
}


function HeroFold() {
  return (
    <section
      aria-label="Advocacia com profundidade em qualquer escala"
      className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden text-sand"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Vídeo em loop — camada 0 */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        poster=""
      >
        <source src={heroVideo.url} type="video/mp4" />
      </video>

      {/* Overlay verde-profundo — garante contraste e tinge o vídeo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,38,36,0.72) 0%, rgba(8,38,36,0.58) 45%, rgba(8,38,36,0.88) 100%)",
        }}
      />

      {/* Grão sutil dourado — hairline horizontal decorativa */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px opacity-30"
        style={{ backgroundColor: "var(--gold)" }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col justify-end px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <p className="eyebrow flex items-center gap-4 text-[var(--gold)]">
          <span className="hairline" aria-hidden="true" />
          Método. Previsibilidade. Resultado.
        </p>
        <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(2.75rem,7.4vw,6.75rem)] font-medium leading-[1.02] tracking-[-0.015em] text-sand">
          Advocacia com profundidade em{" "}
          <span style={{ color: "var(--gold)" }}>qualquer escala.</span>
        </h1>
      </div>

      {/* Indicador de continuidade */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.32em] text-sand/70">
          Continuidade
        </span>
        <span
          aria-hidden="true"
          className="block h-6 w-px animate-pulse"
          style={{ backgroundColor: "var(--gold)" }}
        />
      </div>
    </section>
  );
}

/**
 * Dobra 2 — Competências.
 *
 * Fundo bege. No topo, um "boxinho" (chip institucional) com o título
 * curto "Volume e estratégia, conduzidos com o mesmo método." Abaixo,
 * dois cards lado a lado (Clientes Corporativos / Empresarial Estratégico).
 *
 * Interação (referência Machado Meyer): ao passar o mouse sobre o card,
 * a imagem desliza sutilmente para cima e revela, por baixo, um bloco
 * de texto descritivo com um link discreto. Sem parallax, sem sombras.
 */
type Competencia = {
  index: string;
  eyebrow: string;
  titulo: string;
  descricao: string;
  imagem: string;
  href: string;
};

const COMPETENCIAS: Competencia[] = [
  {
    index: "01",
    eyebrow: "Escala e volume",
    titulo: "Clientes Corporativos",
    descricao:
      "Contencioso de massa e recuperação de crédito conduzidos com engenharia processual: previsibilidade em cada etapa, indicadores auditáveis e método replicável em qualquer jurisdição.",
    imagem: imgCorporativos.url,
    href: "/atuacao/contencioso-de-volume",
  },
  {
    index: "02",
    eyebrow: "Decisão e profundidade",
    titulo: "Empresarial Estratégico",
    descricao:
      "Consultivo e contencioso de alta complexidade, para operações que exigem leitura fina do risco, sofisticação técnica e a mesma disciplina que estrutura o volume.",
    imagem: imgEmpresarial.url,
    href: "/atuacao/empresarial-estrategico",
  },
];

function CompetenciasFold() {
  return (
    <section
      aria-label="Competências"
      className="relative w-full"
      style={{ backgroundColor: "var(--sand)", color: "var(--ink)" }}
    >
      <div className="mx-auto max-w-[1360px] px-6 py-20 md:py-28">
        {/* Boxinho institucional com o enunciado curto */}
        <div className="mb-14 md:mb-20">
          <div
            className="inline-flex max-w-full flex-col gap-3 border px-6 py-5 md:px-8 md:py-6"
            style={{
              borderColor: "color-mix(in oklch, var(--gold) 55%, transparent)",
              backgroundColor: "color-mix(in oklch, var(--sand) 60%, white)",
            }}
          >
            <span className="eyebrow" style={{ color: "var(--gold-ink, #6f6647)" }}>
              Duas competências, um método
            </span>
            <p className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-medium leading-[1.2] tracking-[-0.005em]">
              Volume e estratégia, conduzidos com o mesmo método.
            </p>
          </div>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {COMPETENCIAS.map((c) => (
            <CompetenciaCard key={c.index} data={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CompetenciaCard({ data }: { data: Competencia }) {
  return (
    <a
      href={data.href}
      className="group relative block overflow-hidden focus-visible:outline-none"
      style={{ backgroundColor: "var(--ink)" }}
      aria-label={`${data.titulo} — saber mais`}
    >
      {/* Painel visual (imagem) — desliza para cima no hover */}
      <div className="relative h-[520px] w-full overflow-hidden md:h-[600px]">
        <div
          className="absolute inset-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,0.84,0.24,1)] group-hover:-translate-y-[38%] group-focus-visible:-translate-y-[38%]"
        >
          <img
            src={data.imagem}
            alt=""
            width={1280}
            height={1600}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
          {/* leve escurecimento inferior p/ legibilidade do rótulo */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/2"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,38,36,0) 0%, rgba(8,38,36,0.72) 100%)",
            }}
          />
          {/* Rótulo sobre a imagem */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-6 pb-7 md:px-8 md:pb-8">
            <div className="text-sand">
              <span
                className="eyebrow block"
                style={{ color: "color-mix(in oklch, var(--gold) 85%, white)" }}
              >
                {data.index} — {data.eyebrow}
              </span>
              <h3 className="mt-3 font-display text-[clamp(1.6rem,2.6vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.01em]">
                {data.titulo}
              </h3>
            </div>
            <span
              aria-hidden="true"
              className="hidden h-px w-16 shrink-0 self-center md:block"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </div>
        </div>
      </div>

      {/* Bloco de descrição — revelado por baixo da imagem no hover */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] px-6 pb-8 pt-6 text-sand md:px-8">
        <div className="flex h-full flex-col justify-between">
          <p className="max-w-[52ch] text-[15px] leading-[1.65] text-sand/85 md:text-[16px]">
            {data.descricao}
          </p>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="block h-px w-10"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <span
              className="text-[11px] uppercase tracking-[0.24em]"
              style={{ color: "var(--gold)" }}
            >
              Conhecer a área
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

