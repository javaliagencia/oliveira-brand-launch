import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import imgCorporativos from "@/assets/fold2-corporativos.jpg.asset.json";
import imgEmpresarial from "@/assets/fold2-empresarial.jpg.asset.json";

import carreiraBg from "@/assets/carreira-bg.jpg.asset.json";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { BrandLink, BrandArrow } from "@/components/brand-ui";
import socioBruna from "@/assets/socios/bruna-schmitt.png.asset.json";
import socioCarolina from "@/assets/socios/carolina-schmidt.jpg.asset.json";
import socioCintia from "@/assets/socios/cintia-carla-senem.png.asset.json";
import socioGuilherme from "@/assets/socios/guilherme-otte.jpg.asset.json";
import socioJorge from "@/assets/socios/jorge-ritzmann-de-oliveira.png.asset.json";
import socioJuliano from "@/assets/socios/juliano-schmitt.png.asset.json";
import socioMariana from "@/assets/socios/mariana-hillesheim.png.asset.json";
import socioSonia from "@/assets/socios/sonia-angulski.jpg.asset.json";
import socioTatiane from "@/assets/socios/tatiane-bittencourt.png.asset.json";
import simboloDourado from "@/assets/simbolo-dourado.png.asset.json";




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
      <ManifestoFold />
      <PublicacoesFold />
      <CarreiraFold />
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
        <p className="eyebrow text-[var(--gold)]">
          Método. Previsibilidade. Resultado.
        </p>
        <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(2.75rem,7.4vw,6.75rem)] font-medium leading-[1.02] tracking-[-0.015em] text-sand">
          Advocacia com{" "}
          <em className="font-normal italic" style={{ color: "var(--gold)" }}>
            profundidade
          </em>{" "}
          em qualquer escala.
        </h1>
      </div>

      {/* Indicador de continuidade — seta grande dourada */}
      <a
        href="#competencias"
        aria-label="Continuar para a próxima seção"
        className="group absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-3 text-sand/80 transition-colors hover:text-sand focus-visible:outline-none md:bottom-10"
      >
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
    eyebrow: "",
    titulo: "Clientes Corporativos",
    descricao:
      "Carteiras de contencioso ativo e passivo conduzidas com método, em qualquer setor: previsibilidade em cada etapa, indicadores auditáveis e o mesmo padrão em todo o país, com estrutura própria.",
    imagem: imgCorporativos.url,
    href: "/atuacao/contencioso-de-volume",
  },
  {
    index: "02",
    eyebrow: "",
    titulo: "Empresarial Estratégico",
    descricao:
      "Consultivo e contencioso para decisões de peso no negócio. O escritório estrutura antes do litígio e conduz o que já virou disputa, com a mesma disciplina que sustenta operações de escala nacional.",
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
        <div className="mx-auto max-w-[1360px] px-6 pt-14 pb-10 md:pt-20 md:pb-14">
          <SectionEyebrow tone="ink">Duas competências, um método</SectionEyebrow>
          <h2 className="mt-8 max-w-[22ch] font-display text-[clamp(2.1rem,4.6vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.015em]">
            Volume e estratégia, conduzidos com o{" "}
            <em className="font-normal italic" style={{ color: "var(--gold)" }}>
              mesmo método.
            </em>
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
          {data.eyebrow}
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
            <div className="mt-6">
              <BrandLink href={data.href} invert>
                Conhecer a área
              </BrandLink>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}


/**
 * Dobra 3 — Manifesto dos 30 anos.
 *
 * Composição em duas colunas sobre fundo bege:
 *  - Coluna esquerda: manifesto tipográfico em dois tons. A primeira
 *    sentença fica em ink/40 (quase filigrana), a segunda em ink cheio,
 *    ancorando a leitura no "é o método aplicado a ela".
 *  - Coluna direita: grafismo geométrico inspirado no Seyfarth,
 *    construído a partir do monograma OR (quartos de círculo em dourado
 *    e verde-profundo). Sem imagem raster, apenas SVG — nítido em
 *    qualquer resolução e dentro da paleta fechada.
 *
 * Abaixo, uma faixa discreta "Quem conduz o método" prepara a próxima
 * dobra de pessoas sem se comprometer com fotos ainda inexistentes.
 */
function ManifestoFold() {
  const wrapRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={wrapRef}
      id="manifesto"
      aria-label="Manifesto — trinta anos de método"
      className="relative w-full overflow-hidden"
    >
      {/* Símbolo institucional — estático, extravasando entre os blocos. */}
      <div
        className="pointer-events-none absolute hidden select-none md:block"
        aria-hidden="true"
        style={{
          right: "-8%",
          top: "10%",
          width: "min(46vw, 560px)",
          zIndex: 3,
        }}
      >
        <img
          src={simboloDourado.url}
          alt=""
          width={969}
          height={600}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full select-none"
        />
      </div>



      {/* Bloco 1 — Manifesto sobre branco */}
      <div
        className="relative"
        style={{ backgroundColor: "#ffffff", color: "var(--ink)", zIndex: 2 }}
      >
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-10 px-6 pb-20 pt-16 md:grid-cols-12 md:gap-10 md:pb-28 md:pt-20">
          <div className="md:col-span-6">
            <h2 className="font-display text-[clamp(1.5rem,2.6vw,2.35rem)] font-normal leading-[1.28] tracking-[-0.005em]">
              <span style={{ color: "color-mix(in oklch, var(--ink) 45%, white)" }}>
                Trinta anos de advocacia ensinam uma coisa: o que sustenta uma operação não é o tamanho dela.
              </span>{" "}
              <em
                className="font-display"
                style={{ color: "var(--ink)", fontStyle: "italic", fontWeight: 500 }}
              >
                É o método aplicado a ela.
              </em>
            </h2>
          </div>
          <div className="md:col-span-6" />
        </div>
      </div>

      {/* Bloco 2 — Faixa "Quem conduz" sobre verde-profundo.
          O símbolo dourado do bloco acima extravasa aqui dentro. */}
      <div
        className="relative"
        style={{ backgroundColor: "var(--ink)", color: "var(--sand)", zIndex: 0 }}
      >
        <div className="mx-auto max-w-[1360px] px-6 pb-24 pt-20 md:pb-28 md:pt-24">
          <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between" style={{ zIndex: 2 }}>
            <div className="max-w-[52ch]">
              <SectionEyebrow>Quem conduz o método</SectionEyebrow>
              <h3 className="mt-8 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.01em]" style={{ color: "var(--sand)" }}>
                Sócio responsável na ponta de cada relação, do primeiro contato à decisão.
              </h3>
            </div>
            <BrandLink href="/socios" invert>
              Conhecer os advogados
            </BrandLink>
          </div>

          <SociosCarousel />


        </div>
      </div>
    </section>
  );
}

/**
 * Dobra 4 — Carreira.
 *
 * Referência Sheppard/Seyfarth: fotografia institucional em fundo full-bleed
 * (aérea noturna, luzes quentes) e um card sólido sobreposto à esquerda com
 * eyebrow + título + parágrafo curto + link discreto. Sem sombra, cantos
 * quase retos (4px máximo do manual), hairline dourada.
 */

/**
 * Campo de partículas — nuvens coordenadas de bolinhas escuras que se
 * agrupam nas bordas dos cards da grade "Em ponto", como grãos soprados
 * ao redor das imagens (referência Simmons). Densidade cai do centro
 * de cada nuvem para fora.
 */
function ParticleField({
  count = 220,
  seed = 7,
  clusters,
  className = "",
}: {
  count?: number;
  seed?: number;
  /** Centros de nuvem em %. weight = fração das partículas; radius em % da caixa;
   *  angle em graus (direção da onda); dur em segundos (período da onda). */
  clusters?: {
    x: number; y: number; weight: number; radius: number;
    angle?: number; dur?: number;
  }[];
  className?: string;
}) {
  const rand = (n: number) => {
    const v = Math.sin(n * 9973 + seed * 131) * 43758.5453;
    return v - Math.floor(v);
  };
  // Amostra gaussiana simples via Box-Muller.
  const gauss = (a: number, b: number) => {
    const u = Math.max(1e-6, a);
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * b);
  };

  // Poucos clusters, mais densos, em zonas livres de texto.
  // Cada cluster tem uma "onda" com direção (angle) e período (dur) próprios;
  // as partículas oscilam perpendicularmente à direção da onda e recebem
  // um delay proporcional à projeção ao longo do eixo, criando o efeito de
  // crista viajante — como uma onda de mar coordenada.
  // Concentradas na faixa superior da seção, acima do link
  // "Ver todas as publicações" e ao redor do cabeçalho — sem cobrir texto.
  const defaultClusters = [
    // Acima do link "Ver todas as publicações" (canto superior direito).
    { x: 82, y: 4, weight: 0.30, radius: 8, angle: 0, dur: 5.2 },
    { x: 92, y: 10, weight: 0.22, radius: 6, angle: 0, dur: 5.8 },
    // Faixa central do topo — entre o título e o link.
    { x: 60, y: 6, weight: 0.22, radius: 7, angle: 0, dur: 5.5 },
    // Um respingo mais leve à esquerda, acima do título.
    { x: 20, y: 3, weight: 0.14, radius: 6, angle: 0, dur: 6.0 },
    { x: 45, y: 2, weight: 0.12, radius: 5, angle: 0, dur: 5.4 },
  ];

  const cl = clusters ?? defaultClusters;

  const perCluster = cl.map((c) => Math.round(count * c.weight));

  const dots: {
    i: number; size: number; left: number; top: number;
    dur: number; delay: number; ax: number; ay: number;
    opacity: number; tone: string;
  }[] = [];

  let idx = 0;
  cl.forEach((c, ci) => {
    const n = perCluster[ci];
    const angleRad = ((c.angle ?? 90) * Math.PI) / 180;
    const dirX = Math.cos(angleRad);
    const dirY = Math.sin(angleRad);
    // Vetor perpendicular à direção da onda — eixo de oscilação das partículas.
    const perpX = -dirY;
    const perpY = dirX;
    const dur = c.dur ?? 6;

    for (let k = 0; k < n; k++) {
      const r1 = rand(idx + 1);
      const r2 = rand(idx + 200);
      const r3 = rand(idx + 400);
      const r4 = rand(idx + 600);
      const r5 = rand(idx + 800);
      // Distribuição concentrada: núcleo denso, poucas nas bordas.
      const gx = gauss(r1, r2) * 0.55;
      const gy = gauss(r3, r4) * 0.55;
      const dx = gx * c.radius;
      const dy = gy * c.radius * 1.6; // faixas alongadas
      const left = Math.max(-2, Math.min(102, c.x + dx));
      const top = Math.max(-2, Math.min(102, c.y + dy));
      const dist = Math.min(1, Math.hypot(gx, gy));
      const size = 2 + (1 - dist) * 5 + r5 * 1.2; // 2–8px
      const opacity = 0.45 + (1 - dist) * 0.5;
      // Amplitude perpendicular à onda (em px).
      const amp = 10 + (1 - dist) * 14 + r5 * 4; // 10–28px
      const ax = perpX * amp;
      const ay = perpY * amp;
      // Fase = projeção da posição no eixo da onda → crista viaja pelo cluster.
      const proj = dx * dirX + dy * dirY; // em % da caixa
      const phase = (proj / (c.radius * 2)) * Math.PI * 2;
      const delay = -((phase / (2 * Math.PI)) * dur);
      const tone =
        r5 > 0.65
          ? "var(--ink)"
          : r5 > 0.3
            ? "color-mix(in oklch, var(--gold) 70%, var(--ink))"
            : "var(--gold)";
      dots.push({ i: idx, size, left, top, dur, delay, ax, ay, opacity, tone });
      idx++;
    }
  });

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {dots.map((d) => (
        <span
          key={d.i}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            backgroundColor: d.tone,
            opacity: d.opacity,
            boxShadow: `0 0 ${d.size * 1.1}px color-mix(in oklch, ${d.tone} 35%, transparent)`,
            animation: `particle-wave ${d.dur}s ease-in-out ${d.delay}s infinite`,
            // @ts-ignore custom props usados pelo keyframe
            "--ax": `${d.ax}px`,
            "--ay": `${d.ay}px`,
          } as React.CSSProperties}
        />
      ))}
      <style>{`
        @keyframes particle-wave {
          0%   { transform: translate3d(0, 0, 0); }
          25%  { transform: translate3d(var(--ax), var(--ay), 0); }
          50%  { transform: translate3d(0, 0, 0); }
          75%  { transform: translate3d(calc(var(--ax) * -1), calc(var(--ay) * -1), 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="particle-wave"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}





/**
 * Dobra Publicações — "Em ponto. Informação que desperta. De segunda a sexta."
 *
 * Referência Simmons & Simmons: fundo cromático quente (ocre-terroso),
 * animação sutil de manchas em movimento lento no fundo, e uma grade de
 * publicações. A primeira é destaque com imagem + texto sobrepostos e CTA
 * dentro do card. As demais têm imagem no topo, texto abaixo e um pequeno
 * CTA.
 */
type Publicacao = {
  data: string;
  categoria: string;
  titulo: string;
  resumo: string;
  imagem: string;
  href: string;
};

const PUBLICACOES: Publicacao[] = [
  {
    data: "21 jul 2026",
    categoria: "Publicação",
    titulo: "Contencioso de massa: o que os indicadores de 2026 revelam",
    resumo:
      "Uma leitura do desempenho do contencioso de volume no primeiro semestre e o que mudou na engenharia processual das grandes carteiras.",
    imagem: imgCorporativos.url,
    href: "/publicacoes/contencioso-massa-2026",
  },
  {
    data: "18 jul 2026",
    categoria: "Publicação",
    titulo: "Reforma tributária: o que decidir agora",
    resumo:
      "Movimentos regulatórios que já exigem posicionamento das áreas jurídica e financeira das empresas.",
    imagem: imgEmpresarial.url,
    href: "/publicacoes/reforma-tributaria-agora",
  },
  {
    data: "15 jul 2026",
    categoria: "Publicação",
    titulo: "Recuperação de crédito e o novo ciclo de juros",
    resumo:
      "Como calibrar estratégia, prazo e método diante da mudança de patamar da taxa básica.",
    imagem: carreiraBg.url,
    href: "/publicacoes/recuperacao-credito-juros",
  },
];

function PublicacoesFold() {
  return (
    <section
      id="publicacoes"
      aria-label="Publicações — Em ponto"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--sand)", color: "var(--ink)" }}
    >
      {/* Ritmo de fundo — colunas hairline douradas fixas + scanner vertical
          único (linha dourada horizontal deslizando de cima a baixo). Traz
          cadência editorial sem competir com o texto. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Colunas verticais discretas alinhadas à grade */}
        <div className="absolute inset-y-0 left-1/4 w-px" style={{ backgroundColor: "color-mix(in oklch, var(--gold) 35%, transparent)" }} />
        <div className="absolute inset-y-0 left-2/4 w-px" style={{ backgroundColor: "color-mix(in oklch, var(--gold) 35%, transparent)" }} />
        <div className="absolute inset-y-0 left-3/4 w-px" style={{ backgroundColor: "color-mix(in oklch, var(--gold) 35%, transparent)" }} />
        {/* Scanner vertical — hairline horizontal atravessando a seção */}
        <div
          className="absolute left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, color-mix(in oklch, var(--gold) 85%, transparent) 50%, transparent 100%)",
            animation: "empunto-scan 8s cubic-bezier(0.4,0,0.2,1) infinite",
          }}
        />
        <style>{`
          @keyframes empunto-scan {
            0%   { transform: translateY(-10%); opacity: 0; }
            50%  { opacity: 0.55; }
            100% { transform: translateY(110%); opacity: 0; }
          }
          @media (prefers-reduced-motion: reduce) {
            [style*="empunto-scan"] { animation: none !important; }
          }
        `}</style>
      </div>


      <div className="relative mx-auto max-w-[1360px] px-6 pb-16 pt-14 md:pb-20 md:pt-16">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[52ch]">
            <SectionEyebrow tone="ink">Publicações</SectionEyebrow>
            <h2 className="mt-6 font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
              O mesmo método que conduz a operação,{" "}
              <em className="font-normal italic" style={{ color: "color-mix(in oklch, var(--gold) 70%, var(--ink))" }}>
                aplicado ao que está mudando no Direito.
              </em>
            </h2>
          </div>
          <BrandLink href="/publicacoes">Ver todas as publicações</BrandLink>
        </div>

        {/* Grade — 1 destaque + 3 cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Destaque — imagem menor com texto e CTA por dentro */}
          <a
            href={PUBLICACOES[0].href}
            className="group relative col-span-1 block aspect-[16/10] overflow-hidden md:col-span-7 md:aspect-auto md:min-h-[340px]"
            style={{
              border: "1px solid color-mix(in oklch, var(--ink) 30%, transparent)",
              borderRadius: 4,
            }}
          >
            <img
              src={PUBLICACOES[0].imagem}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(8,38,36,0.05) 0%, rgba(8,38,36,0.5) 55%, rgba(8,38,36,0.9) 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-8 md:p-10">
              <span className="eyebrow" style={{ color: "color-mix(in oklch, var(--gold) 85%, white)" }}>
                {PUBLICACOES[0].data} — {PUBLICACOES[0].categoria}
              </span>
              <h3 className="max-w-[24ch] font-display text-[clamp(1.5rem,2.4vw,2.15rem)] font-medium leading-[1.15] tracking-[-0.01em] text-sand">
                {PUBLICACOES[0].titulo}
              </h3>
              <p className="max-w-[54ch] text-[15px] leading-[1.65] text-sand/85 md:text-[16px]">
                {PUBLICACOES[0].resumo}
              </p>
              <div className="mt-2">
                <span
                  className="eyebrow inline-flex items-center gap-2"
                  style={{ color: "var(--gold)" }}
                >
                  Ler publicação
                  <BrandArrow size={14} />
                </span>
              </div>
            </div>
          </a>

          {/* Cards menores — imagem no topo, texto abaixo, CTA no fim */}
          <div className="col-span-1 grid grid-cols-1 gap-6 md:col-span-5 sm:grid-cols-2 md:grid-cols-1">
            {PUBLICACOES.slice(1).map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="group flex flex-col overflow-hidden"
                style={{
                  backgroundColor: "color-mix(in oklch, white 65%, var(--sand))",
                  border: "1px solid color-mix(in oklch, var(--ink) 20%, transparent)",
                  borderRadius: 4,
                }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={p.imagem}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="eyebrow" style={{ color: "color-mix(in oklch, var(--ink) 65%, transparent)" }}>
                    {p.data} — {p.categoria}
                  </span>
                  <h3 className="font-display text-[clamp(1.1rem,1.5vw,1.35rem)] font-medium leading-[1.2] tracking-[-0.005em]" style={{ color: "var(--ink)" }}>
                    {p.titulo}
                  </h3>
                  <p className="text-[14px] leading-[1.6]" style={{ color: "color-mix(in oklch, var(--ink) 75%, transparent)" }}>{p.resumo}</p>
                  <div className="mt-auto pt-3">
                    <span
                      className="eyebrow inline-flex items-center gap-2"
                      style={{ color: "color-mix(in oklch, var(--gold) 60%, var(--ink))" }}
                    >
                      Ler
                      <BrandArrow size={12} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Dobra 4 — Carreira.
 */
function CarreiraFold() {
  return (
    <section
      id="carreira"
      aria-label="Carreira"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Imagem de fundo full-bleed */}
      <img
        src={carreiraBg.url}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Leve escurecida geral — coesão sem tingir de verde */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.28)" }}
      />



      <div className="relative mx-auto max-w-[1360px] px-6 py-24 md:py-36">
        <div
          className="max-w-[560px] p-8 backdrop-blur-3xl backdrop-saturate-100 md:p-12"
          style={{
            backgroundColor: "rgba(8, 38, 36, 0.015)",
            border: "1px solid color-mix(in oklch, var(--gold) 40%, transparent)",
            borderRadius: 4,
          }}
        >


          <SectionEyebrow>Carreira</SectionEyebrow>
          <h2 className="mt-8 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.08] tracking-[-0.015em] text-sand">
            Formar advogados que{" "}
            <em className="font-normal italic" style={{ color: "var(--gold)" }}>
              conduzem, não que executam.
            </em>
          </h2>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.7] text-sand/80 md:text-[16px]">
            Trinta anos formando profissionais que operam entre a disciplina do
            contencioso de volume e a profundidade do empresarial estratégico.
            O escritório procura quem assume rigor técnico, leitura técnica do
            risco e responsabilidade pela relação, do primeiro contato ao
            desfecho.
          </p>
          <div className="mt-10">
            <BrandLink href="/carreira" invert>
              Ver oportunidades
            </BrandLink>

          </div>
        </div>
      </div>
    </section>
  );
}

const SOCIOS: { nome: string; cargo: string; foto: string | null; href?: string; objectPosition?: string }[] = [
  { nome: "Jorge Ritzmann de Oliveira", cargo: "Sócio-fundador", foto: socioJorge.url, href: "/socios/jorge-ritzmann-de-oliveira" },
  { nome: "Juliano Schmitt", cargo: "Sócio", foto: socioJuliano.url },
  { nome: "Tatiane Bittencourt", cargo: "Sócia", foto: socioTatiane.url },
  { nome: "Cintia Carla Senem", cargo: "Sócia", foto: socioCintia.url },
  { nome: "Carolina Schmidt", cargo: "Sócia", foto: socioCarolina.url, objectPosition: "50% 20%" },
  { nome: "Sonia Angulski", cargo: "Sócia", foto: socioSonia.url },
  { nome: "Mariana Hillesheim", cargo: "Sócia", foto: socioMariana.url },
  { nome: "Bruna Schmitt", cargo: "Sócia", foto: socioBruna.url },
  { nome: "Guilherme Otte", cargo: "Sócio", foto: socioGuilherme.url },
];

function SociosCarousel() {
  const VISIBLE = 5;
  const LEN = SOCIOS.length;
  const LOOP = [...SOCIOS, ...SOCIOS];
  const [start, setStart] = useState(0);
  const [animate, setAnimate] = useState(true);

  // After sliding forward past the end, snap back silently.
  // After sliding backward below 0, snap forward silently.
  useEffect(() => {
    if (start >= LEN) {
      const t = setTimeout(() => {
        setAnimate(false);
        setStart((s) => s - LEN);
      }, 520);
      return () => clearTimeout(t);
    }
    if (start < 0) {
      const t = setTimeout(() => {
        setAnimate(false);
        setStart((s) => s + LEN);
      }, 520);
      return () => clearTimeout(t);
    }
  }, [start, LEN]);

  // Re-enable animation on the next frame after a silent snap.
  useEffect(() => {
    if (!animate) {
      const r = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(r);
    }
  }, [animate]);

  return (
    <div className="relative mt-14">
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            width: `${(LOOP.length / VISIBLE) * 100}%`,
            transform: `translateX(-${(start / LOOP.length) * 100}%)`,
            transition: animate ? "transform 500ms ease-out" : "none",
          }}
        >
          {LOOP.map((socio, i) => (
            <a
              key={`${socio.nome}-${i}`}
              href={socio.href ?? "/socios"}
              className="relative aspect-[3/4] shrink-0 overflow-hidden group"
              style={{
                width: `${100 / LOOP.length}%`,
                backgroundColor: "color-mix(in oklch, var(--ink) 82%, black)",
              }}
              aria-label={`Ver perfil de ${socio.nome}`}
            >
              {socio.foto ? (
                <img
                  src={socio.foto}
                  alt={socio.nome}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: socio.objectPosition ?? "50% 50%" }}
                  loading="lazy"
                />
              ) : null}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end gap-1.5 p-5 text-center">
                <span
                  className="font-display text-[15px] leading-tight whitespace-nowrap inline-flex items-center gap-2"
                  style={{
                    color: "var(--sand)",
                    textShadow: "0 1px 12px rgba(8,38,36,0.9), 0 0 2px rgba(0,0,0,0.6)",
                  }}
                >
                  <span
                    className="bg-no-repeat bg-[image:linear-gradient(currentColor,currentColor)] transition-[background-size] duration-300 ease-out"
                    style={{ backgroundSize: "0% 1px", backgroundPosition: "0 100%" }}
                    data-socio-name
                  >
                    {socio.nome}
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-[14px] w-[14px] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    style={{ color: "var(--gold)" }}
                  >
                    <path d="M7 17L17 7" strokeLinecap="square" />
                    <path d="M9 7h8v8" strokeLinecap="square" />
                  </svg>
                </span>
                <span
                  className="text-[10.5px] uppercase tracking-[0.22em]"
                  style={{
                    color: "var(--gold)",
                    textShadow: "0 1px 10px rgba(8,38,36,0.9)",
                  }}
                >
                  {socio.cargo}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        a.group:hover [data-socio-name] { background-size: 100% 1px !important; }
      `}</style>

      <button
        type="button"
        onClick={() => setStart((s) => s - 1)}
        aria-label="Anterior"
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center"
        style={{
          backgroundColor: "color-mix(in oklch, var(--ink) 70%, transparent)",
          border: "1px solid var(--gold)",
          color: "var(--gold)",
        }}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M15 6l-6 6 6 6" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => setStart((s) => s + 1)}
        aria-label="Próximo"
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center"
        style={{
          backgroundColor: "color-mix(in oklch, var(--ink) 70%, transparent)",
          border: "1px solid var(--gold)",
          color: "var(--gold)",
        }}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M9 6l6 6-6 6" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
      </button>
    </div>

  );
}


