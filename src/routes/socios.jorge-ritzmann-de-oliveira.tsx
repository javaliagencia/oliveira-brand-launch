import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, Contact, ArrowUpRight } from "lucide-react";
import jorgeCutout from "@/assets/socios/jorge-ritzmann-de-oliveira-cutout.png.asset.json";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { BrandArrow, BrandLink } from "@/components/brand-ui";

export const Route = createFileRoute("/socios/jorge-ritzmann-de-oliveira")({
  head: () => ({
    meta: [
      { title: "Jorge Ritzmann de Oliveira — Sócio | Oliveira Ritzmann Advogados" },
      {
        name: "description",
        content:
          "Sócio-fundador. Trinta anos conduzindo operações em escala e decisões que exigem profundidade. Método, previsibilidade e resultado.",
      },
      {
        property: "og:title",
        content: "Jorge Ritzmann de Oliveira — Sócio",
      },
      {
        property: "og:description",
        content:
          "Sócio-fundador do Oliveira Ritzmann Advogados. Estratégia contenciosa, cooperativismo de crédito e recuperação de créditos complexos.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JorgePage,
});

const FOCUS = [
  "Contencioso estratégico e de volume",
  "Cooperativas de crédito",
  "Empresarial estratégico",
  "Recuperação de créditos complexos",
  "Governança e compliance societário",
  "Reestruturação de operações",
];

const CREDENTIALS = [
  { label: "OAB/SC", value: "⟨PENDENTE⟩" },
  { label: "Formação", value: "Direito — Universidade Federal de Santa Catarina" },
  { label: "Pós-graduação", value: "Direito Empresarial" },
  { label: "Idiomas", value: "Português · Inglês · Espanhol" },
];

const ARTIGOS: { categoria: string; data: string; titulo: string; href: string }[] = [
  {
    categoria: "Cooperativas de crédito",
    data: "Jun · 2026",
    titulo: "Governança cooperativa: os limites entre autonomia decisória e responsabilidade dos administradores",
    href: "/inteligencia",
  },
  {
    categoria: "Contencioso estratégico",
    data: "Abr · 2026",
    titulo: "Carteiras de alto volume: quando o método operacional vira vantagem processual",
    href: "/inteligencia",
  },
  {
    categoria: "Empresarial",
    data: "Fev · 2026",
    titulo: "Reestruturações societárias e a leitura empresarial de longo prazo",
    href: "/inteligencia",
  },
];

function JorgePage() {
  return (
    <article className="bg-[var(--sand)] text-[var(--ink)]">
      {/* HERO — split escuro com foto recortada */}
      <section className="relative overflow-hidden bg-[var(--ink)] text-[var(--sand)] pt-28 md:pt-32">
        {/* filete dourado no topo */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{ backgroundColor: "var(--gold)" }}
        />

        <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-end gap-10 px-6 pb-0 md:grid-cols-[1.05fr_1fr] md:gap-16 md:pt-16">
          {/* Coluna texto */}
          <div className="pb-16 md:pb-24">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Sócio · Fundador
            </p>

            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[1.02] tracking-[-0.02em] text-[var(--sand)]">
              Jorge Ritzmann
              <br />
              de Oliveira
            </h1>

            <div
              aria-hidden="true"
              className="mt-8 h-px w-16"
              style={{ backgroundColor: "var(--gold)" }}
            />

            {/* Contatos */}
            <ul className="mt-8 flex flex-col gap-3 text-[13px] tracking-wide text-[var(--sand)]/85">
              <li>
                <a
                  href="tel:+554832221234"
                  className="group inline-flex items-center gap-3 transition-colors hover:text-[var(--gold)]"
                >
                  <Phone size={15} strokeWidth={1.5} className="text-[var(--gold)]" />
                  ⟨PENDENTE⟩
                </a>
              </li>
              <li>
                <a
                  href="mailto:jorge@oliveiraritzmann.com.br"
                  className="group inline-flex items-center gap-3 transition-colors hover:text-[var(--gold)]"
                >
                  <Mail size={15} strokeWidth={1.5} className="text-[var(--gold)]" />
                  jorge@oliveiraritzmann.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-3 transition-colors hover:text-[var(--gold)]"
                >
                  <Linkedin size={15} strokeWidth={1.5} className="text-[var(--gold)]" />
                  LinkedIn
                  <ArrowUpRight size={13} strokeWidth={1.5} className="opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="/vcards/jorge-ritzmann.vcf"
                  className="group inline-flex items-center gap-3 transition-colors hover:text-[var(--gold)]"
                >
                  <Contact size={15} strokeWidth={1.5} className="text-[var(--gold)]" />
                  Baixar vCard
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna foto recortada — assenta no baseline do hero */}
          <div className="relative">
            {/* filetes de composição */}
            <div
              aria-hidden="true"
              className="absolute -left-4 top-6 hidden h-24 w-px md:block"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <img
              src={jorgeCutout.url}
              alt="Jorge Ritzmann de Oliveira"
              className="relative z-10 mx-auto block h-[520px] w-auto object-contain md:h-[640px] lg:h-[720px]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* PULL QUOTE — dourado, uma sentença */}
      <section className="border-y border-[var(--gold)]/25 bg-[var(--ink-2)] py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
            Em uma frase
          </p>
          <blockquote className="mt-6 font-display text-[clamp(1.6rem,3.2vw,2.6rem)] font-medium leading-[1.2] tracking-[-0.01em] text-[var(--gold)]">
            “Jorge é o estrategista a quem lideranças recorrem quando a decisão precisa
            de método — e coragem para sustentá-lo até o resultado.”
          </blockquote>
        </div>
      </section>

      {/* BIO + ÁREAS DE FOCO */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-16 px-6 md:grid-cols-[1.4fr_1fr] md:gap-20">
          {/* Bio */}
          <div>
            <SectionEyebrow>Biografia</SectionEyebrow>
            <div className="mt-8 space-y-6 font-sans text-[16px] leading-[1.75] text-[var(--ink)]/85 md:text-[17px]">
              <p>
                Sócio-fundador do Oliveira Ritzmann Advogados, Jorge conduz há três
                décadas operações que exigem escala industrial de execução e, ao mesmo
                tempo, a profundidade estratégica que separa uma decisão bem tomada de
                um passivo evitável.
              </p>
              <p>
                Sua atuação combina o rigor do contencioso de volume — carteiras com
                milhares de processos ativos — à mesa das decisões empresariais mais
                sensíveis: reestruturações, disputas societárias, recuperação de
                créditos complexos e a arquitetura jurídica de cooperativas de crédito
                em todo o país.
              </p>
              <p>
                É reconhecido pela combinação rara entre método operacional
                mensurável e leitura empresarial de longo prazo. Palestrante frequente
                em fóruns de cooperativismo e advocacia contenciosa, publica
                regularmente sobre governança, gestão de contencioso e estratégia
                jurídica corporativa.
              </p>
            </div>

            <div className="mt-12">
              <SectionEyebrow>Artigos relacionados</SectionEyebrow>
              <ul className="mt-8 divide-y divide-[var(--ink)]/10 border-t border-[var(--ink)]/10">
                {ARTIGOS.map((a) => (
                  <li key={a.titulo}>
                    <a
                      href={a.href}
                      className="group flex items-start justify-between gap-6 py-5 transition-colors hover:text-[var(--ink-2)]"
                    >
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--ink)]/55">
                          {a.categoria} · {a.data}
                        </p>
                        <p className="mt-2 font-display text-[17px] leading-snug text-[var(--ink)] md:text-[19px]">
                          {a.titulo}
                        </p>
                      </div>
                      <BrandArrow className="mt-2 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <BrandLink href={`mailto:jorge@oliveiraritzmann.com.br`}>
                  Fale diretamente com o Jorge
                </BrandLink>
              </div>
            </div>
          </div>

          {/* Áreas de foco + credenciais */}
          <aside className="md:pl-10 md:border-l md:border-[var(--gold)]/25">
            <SectionEyebrow>Áreas de foco</SectionEyebrow>
            <ul className="mt-8 flex flex-col gap-3">
              {FOCUS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-display text-[15px] leading-snug text-[var(--ink)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[10px] block h-px w-4 flex-none"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <SectionEyebrow>Credenciais</SectionEyebrow>
              <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5">
                {CREDENTIALS.map((c) => (
                  <div key={c.label} className="flex flex-col gap-1">
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-[var(--ink)]/55">
                      {c.label}
                    </dt>
                    <dd className="font-display text-[15px] leading-snug text-[var(--ink)]">
                      {c.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA rodapé */}
      <section className="border-t border-[var(--ink)]/10 bg-[var(--sand)] py-16 md:py-20">
        <div className="mx-auto flex max-w-[1360px] flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--ink)]/60">
              Voltar
            </p>
            <a
              href="/socios"
              className="group mt-4 inline-flex items-center gap-3 font-display text-[clamp(1.35rem,2.2vw,1.9rem)] font-medium tracking-[-0.01em] text-[var(--ink)] transition-colors hover:text-[var(--ink-2)]"
            >
              Conhecer o time completo
              <BrandArrow />
            </a>
          </div>
          <p className="max-w-[420px] text-[13px] leading-[1.7] text-[var(--ink)]/70">
            Método. Previsibilidade. Resultado — os três compromissos que atravessam
            cada mandato conduzido pelo escritório.
          </p>
        </div>
      </section>
    </article>
  );
}
