import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="competencias"
      aria-label="Competências"
      className="relative w-full"
      style={{ backgroundColor: "var(--ink)", color: "var(--sand)" }}
    >
      {/* Respiro bege — separa o hero (vídeo escuro) da área de painéis e
          conecta cromaticamente com a luz das imagens abaixo. */}
      <div
        className="w-full"
        style={{
          backgroundColor: "var(--sand)",
          color: "var(--ink)",
        }}
      >
        <div className="mx-auto max-w-[1360px] px-6 pt-24 pb-16 md:pt-32 md:pb-24">
          <p className="eyebrow flex items-center gap-4" style={{ color: "var(--deep-green)" }}>
            <span className="hairline" aria-hidden="true" style={{ backgroundColor: "var(--gold)" }} />
            Duas competências, um método
          </p>
          <h2 className="mt-6 max-w-[22ch] font-display text-[clamp(1.9rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.01em]">
            Volume e estratégia,{" "}
            <span style={{ color: "var(--gold)" }}>conduzidos com o mesmo método.</span>
          </h2>
        </div>
      </div>



      {/* Dois painéis conectados — o hovered expande e invade o vizinho, como no Machado Meyer. */}
      <div className="flex w-full flex-col md:flex-row">
        {COMPETENCIAS.map((c, i) => {
          const isHovered = hovered === i;
          const otherHovered = hovered !== null && hovered !== i;
          // Proporções de expansão: 1 (repouso), ~1.7 (hovered), ~0.3 (vizinho encolhido)
          const flexGrow = isHovered ? 1.7 : otherHovered ? 0.3 : 1;
          return (
            <CompetenciaCard
              key={c.index}
              data={c}
              isLast={i === COMPETENCIAS.length - 1}
              flexGrow={flexGrow}
              isHovered={isHovered}
              onEnter={() => setHovered(i)}
              onLeave={() => setHovered((h) => (h === i ? null : h))}
            />
          );
        })}
      </div>
    </section>
  );
}

function CompetenciaCard({
  data,
  isLast,
  flexGrow,
  isHovered,
  onEnter,
  onLeave,
}: {
  data: Competencia;
  isLast: boolean;
  flexGrow: number;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      tabIndex={0}
      role="group"
      className="group relative block h-[560px] basis-0 overflow-hidden focus-visible:outline-none md:h-[680px]"
      style={{
        flexGrow,
        transition: "flex-grow 800ms cubic-bezier(0.16,0.84,0.24,1)",
        backgroundColor: "var(--ink)",
        borderRight: isLast ? undefined : "1px solid color-mix(in oklch, var(--gold) 55%, transparent)",
      }}
      aria-label={data.titulo}
    >

      {/* Imagem — cresce (zoom in) quando o card está ativo */}
      <img
        src={data.imagem}
        alt=""
        width={1600}
        height={1200}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,0.84,0.24,1)]"
        style={{ transform: isHovered ? "scale(1.06)" : "scale(1)" }}
      />

      {/* Overscura — mais forte no hover para dar suporte ao texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-[600ms]"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,38,36,0.15) 0%, rgba(8,38,36,0.55) 55%, rgba(8,38,36,0.92) 100%)",
          opacity: isHovered ? 1 : 0.7,
        }}
      />

      {/* Rótulo permanente (01/02 + área + título) — sobe um pouco no hover para dar lugar à descrição */}
      <div
        className="absolute inset-x-0 bottom-0 flex flex-col gap-3 px-8 pb-8 text-sand transition-[padding,transform] duration-[600ms] md:px-12 md:pb-10"
        style={{ transform: isHovered ? "translateY(-2px)" : "translateY(0)" }}
      >
        <span className="eyebrow" style={{ color: "color-mix(in oklch, var(--gold) 85%, white)" }}>
          {data.index} — {data.eyebrow}
        </span>
        <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.01em]">
          {data.titulo}
        </h3>

        {/* Descrição — aparece por baixo do título no mouse over */}
        <div
          className="grid transition-[grid-template-rows,opacity] duration-[600ms] ease-out"
          style={{
            gridTemplateRows: isHovered ? "1fr" : "0fr",
            opacity: isHovered ? 1 : 0,
          }}
        >
          <div className="overflow-hidden">
            <p className="max-w-[54ch] pt-3 text-[15px] leading-[1.65] text-sand/90 md:text-[16px]">
              {data.descricao}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span aria-hidden="true" className="block h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
              <span className="text-[11px] uppercase tracking-[0.24em]" style={{ color: "var(--gold)" }}>
                Conhecer a área
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}



