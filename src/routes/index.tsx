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

      {/* Indicador de continuidade — seta grande dourada */}
      <a
        href="#competencias"
        aria-label="Continuar para a próxima seção"
        className="group absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-3 text-sand/80 transition-colors hover:text-sand focus-visible:outline-none md:bottom-10"
      >
        <span className="text-[10px] uppercase tracking-[0.32em]">
          Continue
        </span>
        <svg
          width="44"
          height="56"
          viewBox="0 0 44 56"
          fill="none"
          aria-hidden="true"
          className="animate-[pulse_2.4s_ease-in-out_infinite] transition-transform duration-300 group-hover:translate-y-1"
        >
          <path
            d="M22 4 V48 M8 34 L22 48 L36 34"
            stroke="var(--gold)"
            strokeWidth="1.25"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
          />
        </svg>
      </a>

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
      id="competencias"
      aria-label="Competências"
      className="relative w-full"
      style={{ backgroundColor: "var(--ink)", color: "var(--sand)" }}
    >
      {/* Enunciado — sem "boxinho", tratado como abertura editorial */}
      <div className="mx-auto max-w-[1360px] px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        <p className="eyebrow flex items-center gap-4" style={{ color: "var(--gold)" }}>
          <span className="hairline" aria-hidden="true" />
          Duas competências, um método
        </p>
        <h2 className="mt-6 max-w-[22ch] font-display text-[clamp(1.9rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.01em]">
          Volume e estratégia,{" "}
          <span style={{ color: "var(--gold)" }}>conduzidos com o mesmo método.</span>
        </h2>
      </div>

      {/* Dois painéis conectados — full-bleed, sem gap. Filete dourado separa. */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {COMPETENCIAS.map((c, i) => (
          <CompetenciaCard key={c.index} data={c} isLast={i === COMPETENCIAS.length - 1} />
        ))}
      </div>
    </section>
  );
}

function CompetenciaCard({ data, isLast }: { data: Competencia; isLast: boolean }) {
  return (
    <a
      href={data.href}
      className="group relative block h-[560px] overflow-hidden focus-visible:outline-none md:h-[680px]"
      style={{
        backgroundColor: "var(--ink)",
        borderRight: isLast ? undefined : "1px solid color-mix(in oklch, var(--gold) 55%, transparent)",
      }}
      aria-label={`${data.titulo} — saber mais`}
    >
      {/* Bloco de descrição — por baixo, revelado quando a imagem escorrega horizontalmente */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 flex w-[58%] flex-col justify-center gap-6 px-8 py-12 text-sand md:px-12">
        <span className="eyebrow" style={{ color: "var(--gold)" }}>
          {data.index} — {data.eyebrow}
        </span>
        <h3 className="font-display text-[clamp(1.5rem,2.2vw,2rem)] font-medium leading-[1.15] tracking-[-0.01em]">
          {data.titulo}
        </h3>
        <p className="max-w-[42ch] text-[15px] leading-[1.7] text-sand/85 md:text-[16px]">
          {data.descricao}
        </p>
        <div className="mt-2 flex items-center gap-3">
          <span aria-hidden="true" className="block h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
          <span className="text-[11px] uppercase tracking-[0.24em]" style={{ color: "var(--gold)" }}>
            Conhecer a área
          </span>
        </div>
      </div>

      {/* Painel visual (imagem) — desliza para a esquerda no hover, revelando o texto à direita */}
      <div
        className="absolute inset-0 z-10 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,0.84,0.24,1)] group-hover:-translate-x-[58%] group-focus-visible:-translate-x-[58%]"
        style={{ backgroundColor: "var(--ink)" }}
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
              "linear-gradient(180deg, rgba(8,38,36,0) 0%, rgba(8,38,36,0.78) 100%)",
          }}
        />
        {/* Rótulo sobre a imagem — visível no estado de repouso */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-8 pb-8 md:px-12 md:pb-10">
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
    </a>
  );
}


