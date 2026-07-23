import { Link } from "@tanstack/react-router";
import { SectionEyebrow } from "./section-eyebrow";

export function NotFoundPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-[var(--ink)] text-[var(--sand)]">
      {/* Grafismo de fundo — 404 gigante em outline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06] select-none"
      >
        <span
          className="text-[38vw] leading-none font-extralight tracking-tighter text-[var(--gold)]"
          style={{
            WebkitTextStroke: "1px currentColor",
            color: "transparent",
          }}
        >
          404
        </span>
      </div>

      {/* Linhas decorativas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[8%] w-px bg-[var(--gold)]/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[8%] w-px bg-[var(--gold)]/20"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-24 md:py-32">
        <SectionEyebrow>Página não encontrada</SectionEyebrow>

        <h1 className="mt-6 font-light tracking-tight text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05]">
          Esta rota saiu do método.
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg font-light leading-relaxed text-[var(--sand)]/80">
          O endereço que você buscou não existe, foi movido ou nunca esteve por
          aqui. Toda operação previsível começa por voltar ao ponto de partida
          — siga por um dos caminhos abaixo.
        </p>

        <div className="mt-12 grid gap-px bg-[var(--gold)]/20 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/", label: "Início" },
            { to: "/atuacao/areas/direito-medico", label: "Áreas do Direito" },
            { to: "/publicacoes/noticias", label: "Publicações" },
            { to: "/contato", label: "Contato" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative flex items-center justify-between bg-[var(--ink)] px-6 py-6 transition-colors hover:bg-[var(--ink)]/60"
            >
              <span className="text-sm font-medium tracking-wide uppercase text-[var(--sand)]">
                {item.label}
              </span>
              <span
                aria-hidden
                className="text-[var(--gold)] transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-16 text-xs uppercase tracking-[0.25em] text-[var(--sand)]/50">
          Oliveira Ritzmann Advogados — 30 anos de método
        </p>
      </div>
    </section>
  );
}
