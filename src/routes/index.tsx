import { createFileRoute } from "@tanstack/react-router";

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
          "Trinta anos conduzindo operações que exigem escala e decisões que exigem profundidade. Método, previsibilidade e resultado — do contencioso de volume ao empresarial estratégico.",
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
 * Home — dobras 1 a 3 (baseline seguindo o layout de referência do Claude,
 * a partir do qual iremos incrementar).
 *
 *   Fold 1 — Hero manifesto: fundo ink, headline em duas linhas
 *            ("Advocacia com profundidade em / qualquer escala.").
 *   Fold 2 — Duas competências: fundo sand com painel split 01/02
 *            (Clientes Corporativos · Empresarial Estratégico).
 *   Fold 3 — Manifesto: fundo ink, aspas grandes em gold e citação.
 */
function Index() {
  return (
    <main className="bg-background text-foreground">
      <HeroFold />
      <CompetenciasFold />
      <ManifestoFold />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Fold 1 — Hero                                                       */
/* ------------------------------------------------------------------ */
function HeroFold() {
  return (
    <section
      aria-label="Advocacia com profundidade em qualquer escala"
      className="relative overflow-hidden text-sand"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Wavy hairlines decorativas (opcionais, muito sutis) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[36%] w-full opacity-40"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1"
        />
        <path
          d="M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>

      <div className="relative mx-auto flex min-h-[86vh] max-w-[1360px] flex-col justify-end px-6 pb-16 pt-40 md:min-h-[92vh] md:pb-24 md:pt-56">
        <p className="eyebrow flex items-center gap-4 text-[var(--gold)]">
          <span className="hairline" aria-hidden="true" />
          Método. Previsibilidade. Resultado.
        </p>
        <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-[1.02] tracking-[-0.015em]">
          Advocacia com profundidade em{" "}
          <span style={{ color: "var(--gold)" }}>qualquer escala.</span>
        </h1>
      </div>

      {/* Indicador de continuidade */}
      <div className="relative flex flex-col items-center gap-3 pb-10">
        <span className="text-[10px] uppercase tracking-[0.32em] text-sand/70">
          Continuidade
        </span>
        <span
          aria-hidden="true"
          className="block h-8 w-px"
          style={{ backgroundColor: "var(--gold)" }}
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Fold 2 — Duas Competências                                          */
/* ------------------------------------------------------------------ */
function CompetenciasFold() {
  return (
    <section
      aria-label="Duas competências"
      style={{ backgroundColor: "var(--sand)" }}
      className="text-foreground"
    >
      {/* Cabeçalho editorial */}
      <div className="mx-auto max-w-[1360px] px-6 pt-24 md:pt-32">
        <p className="eyebrow flex items-center gap-4">
          <span className="hairline" aria-hidden="true" />
          Duas competências
        </p>
        <h2 className="mt-8 max-w-[22ch] font-display text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.01em]">
          Volume e estratégia, conduzidos com o mesmo método.
        </h2>
        <p className="mt-8 max-w-[52ch] font-sans text-[15px] leading-[1.75] text-foreground/75">
          Da defesa em escala à estratégia empresarial — a mesma maturidade
          na ponta de cada relação.
        </p>
      </div>

      {/* Split panels 01 / 02 */}
      <div className="mt-14 grid grid-cols-1 md:mt-20 md:grid-cols-2">
        <CompetenciaPanel
          index="01"
          title="Clientes Corporativos"
          summary="Contencioso de volume e cooperativas de crédito — previsibilidade, cadência e governança em cada carteira."
          href="/atuacao/contencioso-de-volume"
        />
        <CompetenciaPanel
          index="02"
          title="Empresarial Estratégico"
          summary="Assessoria de alta densidade em decisões societárias, contratuais e regulatórias que definem trajetórias."
          href="/atuacao/empresarial-estrategico"
        />
      </div>
    </section>
  );
}

function CompetenciaPanel({
  index,
  title,
  summary,
  href,
}: {
  index: string;
  title: string;
  summary: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group relative flex min-h-[560px] flex-col justify-between overflow-hidden p-10 text-sand transition-colors focus-visible:outline-none md:min-h-[640px] md:p-14"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Camada de textura sutil — hairlines verticais em gold */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 0, transparent calc(100% - 1px), var(--gold) calc(100% - 1px)), radial-gradient(ellipse at 30% 20%, var(--ink-2), transparent 65%)",
          backgroundSize: "25% 100%, 100% 100%",
        }}
      />

      <div className="relative">
        <span className="font-display text-[clamp(3rem,5vw,4.5rem)] font-light leading-none text-sand/25">
          {index}
        </span>
      </div>

      <div className="relative">
        <span
          aria-hidden="true"
          className="mb-6 block h-px w-10"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <h3 className="font-display text-[clamp(1.75rem,2.4vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.01em]">
          {title}
        </h3>
        <p className="mt-4 max-w-[38ch] font-sans text-[14.5px] leading-[1.75] text-sand/75">
          {summary}
        </p>
        <span className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-sand/80 transition-colors group-hover:text-[var(--gold)]">
          Conhecer
          <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
        </span>
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Fold 3 — Manifesto                                                  */
/* ------------------------------------------------------------------ */
function ManifestoFold() {
  return (
    <section
      aria-label="Manifesto"
      className="relative overflow-hidden text-sand"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-10 px-6 py-28 md:grid-cols-[1fr_5fr] md:py-40">
        <div className="relative">
          <span
            aria-hidden="true"
            className="font-display text-[9rem] font-medium leading-[0.7] text-[var(--gold)]/25 md:text-[12rem]"
          >
            &ldquo;
          </span>
        </div>

        <blockquote className="font-display text-[clamp(1.5rem,2.6vw,2.5rem)] font-medium leading-[1.35] tracking-[-0.005em]">
          <p className="text-sand/70">
            Trinta anos de advocacia ensinam uma coisa: o que sustenta uma
            operação não é o tamanho dela.
          </p>
          <p className="mt-4 text-sand">É o método aplicado a ela.</p>
          <footer className="mt-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.24em] text-sand/70">
            <span
              aria-hidden="true"
              className="inline-block h-px w-10"
              style={{ backgroundColor: "var(--gold)" }}
            />
            Oliveira Ritzmann Advogados
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
