/**
 * Presença — abrangência geográfica do escritório.
 *
 * 1. Hero editorial (verde-profundo)
 * 2. Números da presença
 * 3. Mapa animado do Brasil + lista sincronizada das nove unidades
 * 4. Nota de cobertura nacional + CTA
 */
import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { BrandButtonLink } from "@/components/brand-ui";
import { MapaPresenca, SEDES } from "@/components/mapa-presenca";

export const Route = createFileRoute("/presenca")({
  head: () => ({
    meta: [
      { title: "Presença — Nove unidades, um só método | Oliveira Ritzmann" },
      {
        name: "description",
        content:
          "Nove unidades próprias de Blumenau a Maceió, com cobertura em todo o território nacional. Conheça a abrangência geográfica do Oliveira Ritzmann Advogados.",
      },
      { property: "og:title", content: "Presença — Nove unidades, um só método | Oliveira Ritzmann" },
      {
        property: "og:description",
        content:
          "De Blumenau a Maceió: nove unidades próprias e operação coordenada em todo o Brasil, com o mesmo método em qualquer escala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Presença — Nove unidades, um só método" },
      {
        name: "twitter:description",
        content:
          "De Blumenau a Maceió: nove unidades próprias e operação coordenada em todo o Brasil.",
      },
    ],
  }),
  component: PresencaPage,
});

const NUMEROS = [
  { valor: "09", rotulo: "Unidades próprias" },
  { valor: "08", rotulo: "Estados com escritório" },
  { valor: "27", rotulo: "Unidades federativas atendidas" },
  { valor: "30", rotulo: "Anos de operação" },
];

function PresencaPage() {
  const [ativa, setAtiva] = React.useState<string | null>(null);

  return (
    <>
      {/* 1 — Hero */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          <SectionEyebrow tone="gold">Presença</SectionEyebrow>
          <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[1.03] tracking-[-0.02em] text-sand">
            Nove unidades.
            <br />
            Um só método.
          </h1>
          <p className="mt-8 max-w-[62ch] text-[17px] leading-relaxed text-sand/75">
            A abrangência do Oliveira Ritzmann não é uma rede de correspondentes.
            São unidades próprias, com equipes integradas e o mesmo padrão de
            condução, do Sul ao Nordeste, e de qualquer uma delas para todo o
            território nacional.
          </p>
        </div>
      </section>

      {/* 2 — Números */}
      <section className="border-b border-[color-mix(in_oklab,var(--ink)_12%,transparent)] bg-[color-mix(in_oklab,var(--sand)_45%,white)]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-y-10 px-6 py-14 md:grid-cols-4 md:px-10">
          {NUMEROS.map((n) => (
            <div key={n.rotulo}>
              <p className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-none text-ink">
                {n.valor}
              </p>
              <p className="mt-3 max-w-[18ch] text-[13px] uppercase leading-snug tracking-[0.16em] text-ink/60">
                {n.rotulo}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 — Mapa + lista */}
      <section className="bg-[color-mix(in_oklab,var(--sand)_45%,white)]">
        <div className="mx-auto max-w-[1240px] px-6 pb-24 pt-16 md:px-10 md:pb-32">
          <SectionEyebrow tone="ink">Abrangência geográfica</SectionEyebrow>

          <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div className="order-2 lg:order-1 lg:sticky lg:top-28 lg:self-start">
              <MapaPresenca ativa={ativa} onAtivar={setAtiva} />
            </div>

            <ul className="order-1 lg:order-2">
              {SEDES.map((s, i) => {
                const on = ativa === s.cidade;
                return (
                  <li
                    key={s.cidade}
                    onMouseEnter={() => setAtiva(s.cidade)}
                    onMouseLeave={() => setAtiva(null)}
                    onFocus={() => setAtiva(s.cidade)}
                    onBlur={() => setAtiva(null)}
                    tabIndex={0}
                    className="group border-t border-[color-mix(in_oklab,var(--ink)_14%,transparent)] py-5 outline-none transition-colors last:border-b"
                    style={{
                      backgroundColor: on
                        ? "color-mix(in oklab, var(--gold) 12%, transparent)"
                        : "transparent",
                    }}
                  >
                    <div className="flex items-baseline gap-4 px-3">
                      <span className="w-8 shrink-0 font-display text-[12px] tracking-[0.2em] text-[var(--gold)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-display text-[19px] font-medium leading-tight text-ink">
                          {s.cidade}
                          <span className="text-ink/40"> · {s.uf}</span>
                          {s.matriz && (
                            <span className="ml-3 align-[0.15em] text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">
                              Sede
                            </span>
                          )}
                        </p>
                        <div className="mt-1.5 text-[13.5px] leading-relaxed text-ink/65">
                          {s.linhas.map((linha) => (
                            <p key={linha}>{linha}</p>
                          ))}
                          <p>CEP {s.cep}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="mt-14 max-w-[70ch] text-[15px] leading-relaxed text-ink/65">
            Onde não há unidade própria, a operação segue conduzida pelas nossas
            equipes, com deslocamento e acompanhamento direto — a distância nunca
            transfere a responsabilidade pelo caso.
          </p>

          <div className="mt-10">
            <BrandButtonLink href="/contato" variant="solid" withArrow>
              Falar com o escritório
            </BrandButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
