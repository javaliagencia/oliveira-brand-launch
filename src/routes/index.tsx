import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import imgCorporativos from "@/assets/fold2-corporativos.jpg.asset.json";
import imgEmpresarial from "@/assets/fold2-empresarial.jpg.asset.json";
import simboloDourado from "@/assets/simbolo-dourado.png.asset.json";
import carreiraBg from "@/assets/carreira-bg.jpg.asset.json";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { BrandLink } from "@/components/brand-ui";
import socioBruna from "@/assets/socios/bruna-schmitt.png.asset.json";
import socioCintia from "@/assets/socios/cintia-carla-senem.png.asset.json";
import socioJorge from "@/assets/socios/jorge-ritzmann-de-oliveira.png.asset.json";
import socioJuliano from "@/assets/socios/juliano-schmitt.png.asset.json";
import socioMariana from "@/assets/socios/mariana-hillesheim.png.asset.json";
import socioTatiane from "@/assets/socios/tatiane-bittencourt.png.asset.json";




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
  return (
    <section
      id="manifesto"
      aria-label="Manifesto — trinta anos de método"
      className="relative w-full overflow-hidden"
    >
      {/* Símbolo institucional — atravessa o fundo bege e extravasa
          para dentro da faixa verde-profundo abaixo. Mesma cor dourada
          nas duas metades: só o fundo muda. */}
      <img
        src={simboloDourado.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute select-none hidden md:block"
        style={{
          right: "-8%",
          top: "10%",
          width: "min(46vw, 560px)",
          height: "auto",
          opacity: 1,
          zIndex: 3,
        }}
      />

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
                Sócios e advogados que respondem pelo caso do primeiro contato à decisão final.
              </h3>
            </div>
            <BrandLink href="/socios" invert>
              Conhecer o time
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
          className="max-w-[560px] p-8 backdrop-blur-2xl backdrop-saturate-150 md:p-12"
          style={{
            backgroundColor: "rgba(8, 38, 36, 0.22)",
            border: "1px solid color-mix(in oklch, var(--gold) 40%, transparent)",
            borderRadius: 4,
          }}
        >


          <SectionEyebrow>Carreira</SectionEyebrow>
          <h2 className="mt-8 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.08] tracking-[-0.015em] text-sand">
            Formar advogados que{" "}
            <em className="font-normal italic" style={{ color: "var(--gold)" }}>
              respondem pelo método.
            </em>
          </h2>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.7] text-sand/80 md:text-[16px]">
            Trinta anos formando profissionais que operam entre a disciplina do
            contencioso de volume e a profundidade do empresarial estratégico.
            Buscamos quem se compromete com o rigor técnico, a leitura fina do
            risco e a responsabilidade pelo caso do primeiro contato à decisão
            final.
          </p>
          <div className="mt-10">
            <BrandLink href="/carreira" invert>
              Junte-se ao escritório
            </BrandLink>
          </div>
        </div>
      </div>
    </section>
  );
}

const SOCIOS: { nome: string; foto: string | null }[] = [
  { nome: "Jorge Ritzmann de Oliveira", foto: socioJorge.url },
  { nome: "Juliano Schmitt", foto: socioJuliano.url },
  { nome: "Tatiane Bittencourt", foto: socioTatiane.url },
  { nome: "Cintia Carla Senem", foto: socioCintia.url },
  { nome: "Guilherme Otte", foto: null },
  { nome: "Sonia Angulski", foto: null },
  { nome: "Mariana Hillesheim", foto: socioMariana.url },
  { nome: "Bruna Schmitt", foto: socioBruna.url },
  { nome: "Carolina Schmidt", foto: null },
];

function SociosCarousel() {
  // Duplicamos a lista para criar loop infinito via translate -50%.
  const loop = [...SOCIOS, ...SOCIOS];
  return (
    <div
      className="relative mt-14 overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div
        className="flex w-max"
        style={{
          animation: "socios-marquee 48s linear infinite",
        }}
      >
        {loop.map((socio, i) => (
          <div
            key={`${socio.nome}-${i}`}
            className="relative aspect-[3/4] shrink-0 overflow-hidden"
            style={{
              width: "calc((min(1360px, 100vw) - 3rem) / 5)",
              backgroundColor: "color-mix(in oklch, var(--ink) 82%, black)",
            }}
          >
            {socio.foto ? (
              <img
                src={socio.foto}
                alt={socio.nome}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            ) : null}
            <div
              className="absolute inset-x-0 bottom-0 h-1/2"
              style={{
                background:
                  "linear-gradient(to top, rgba(8,38,36,0.92) 0%, rgba(8,38,36,0.55) 55%, transparent 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-end p-5">
              <div className="flex flex-col gap-2">
                <span
                  className="text-[10px] uppercase tracking-[0.28em]"
                  style={{ color: "var(--gold)" }}
                >
                  {String((i % SOCIOS.length) + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-display text-[15px] leading-tight"
                  style={{ color: "var(--sand)" }}
                >
                  {socio.nome}
                </span>
                {!socio.foto ? (
                  <span
                    className="text-[10px] uppercase tracking-[0.24em]"
                    style={{
                      color: "color-mix(in oklch, var(--sand) 55%, transparent)",
                    }}
                  >
                    Foto ⟨PENDENTE⟩
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes socios-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}


