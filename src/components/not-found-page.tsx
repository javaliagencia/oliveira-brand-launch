import { Link } from "@tanstack/react-router";
import { SectionEyebrow } from "./section-eyebrow";

export function NotFoundPage() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[var(--ink)] text-[var(--sand)]">
      {/* Glow radial dourado */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 -right-1/4 h-[80vh] w-[80vh] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--gold) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/3 -left-1/4 h-[60vh] w-[60vh] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--gold) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        {/* Coluna visual — 404 monumental */}
        <div className="relative flex items-center justify-center lg:justify-start">
          <div className="relative">
            <span
              aria-hidden
              className="block font-extralight leading-none tracking-tighter text-[clamp(12rem,28vw,22rem)]"
              style={{
                WebkitTextStroke: "1px var(--gold)",
                color: "transparent",
              }}
            >
              404
            </span>
            <span
              aria-hidden
              className="absolute inset-0 block font-extralight leading-none tracking-tighter text-[clamp(12rem,28vw,22rem)] text-[var(--gold)] opacity-20 blur-[2px]"
            >
              404
            </span>
          </div>


        </div>

        {/* Coluna editorial */}
        <div>
          <SectionEyebrow>Página não encontrada</SectionEyebrow>

          <h1 className="mt-6 font-light tracking-tight text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05]">
            Esta rota saiu do método.
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg font-light leading-relaxed text-[var(--sand)]/80">
            O endereço que você buscou não existe, foi movido ou nunca esteve
            por aqui. Toda operação previsível começa por voltar ao ponto de
            partida, siga por um dos caminhos abaixo.
          </p>

          <div className="mt-10 flex flex-col divide-y divide-[var(--gold)]/15 border-y border-[var(--gold)]/15">
            {[
              { to: "/", label: "Início" },
              { to: "/atuacao/areas/direito-medico", label: "Áreas do Direito" },
              { to: "/publicacoes/noticias", label: "Publicações" },
              { to: "/contato", label: "Contato" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-center justify-between py-4 transition-colors hover:text-[var(--gold)]"
              >
                <span className="text-sm font-medium tracking-wide uppercase">
                  {item.label}
                </span>
                <span
                  aria-hidden
                  className="text-[var(--gold)] transition-transform group-hover:translate-x-2"
                >
                  →
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-xs uppercase tracking-[0.25em] text-[var(--sand)]/50">
            Oliveira Ritzmann Advogados, 30 anos de método
          </p>
        </div>
      </div>
    </section>
  );
}
