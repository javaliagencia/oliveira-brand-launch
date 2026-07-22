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

        <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-end gap-10 px-6 pb-0 md:min-h-[720px] md:pt-16">
          {/* Coluna texto */}
          <div className="relative z-20 pb-16 md:max-w-[610px] md:pb-24">
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[1.02] tracking-[-0.02em] text-[var(--sand)]">
              Jorge Ritzmann
              <br />
              de Oliveira
            </h1>

            <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Sócio fundador
            </p>

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

          {/* Coluna foto recortada — alinhada à direita e ao rodapé */}
          <div className="relative -mr-6 flex items-end justify-end self-end md:absolute md:inset-y-0 md:-right-[16px] md:mr-0 md:w-[48vw] md:min-w-[500px]">
            {/* filetes de composição */}
            <div
              aria-hidden="true"
              className="absolute -left-4 top-6 hidden h-24 w-px md:block"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <img
              src={jorgeCutout.url}
              alt="Jorge Ritzmann de Oliveira"
              className="relative z-10 block h-[520px] w-auto object-contain object-right-bottom md:absolute md:bottom-0 md:right-0 md:h-[720px] lg:h-[760px]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* PULL QUOTE — dourado, uma sentença */}
      <section className="relative border-y border-[var(--gold)]/40 bg-[var(--ink-2)] pt-8 pb-14 md:pt-10 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-24"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">
            Em uma frase
          </p>
          <div
            aria-hidden="true"
            className="mt-3 h-px w-16"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <blockquote className="mt-4 font-display text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.2] tracking-[-0.015em] text-[var(--gold)]">
            <span
              aria-hidden="true"
              className="mr-2 font-display text-[1.1em] leading-none text-[var(--gold)]/60"
            >
              “
            </span>
            Jorge é o estrategista a quem lideranças recorrem quando a decisão
            precisa de método — e coragem para sustentá-lo até o resultado.
            <span
              aria-hidden="true"
              className="ml-1 font-display text-[1.1em] leading-none text-[var(--gold)]/60"
            >
              ”
            </span>
          </blockquote>
        </div>
      </section>

      {/* BIO + ÁREAS DE FOCO */}
      <section className="py-24 md:py-36">
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-16 px-6 md:grid-cols-[1.4fr_1fr] md:gap-20">
          {/* Bio */}
          <div>
            <SectionEyebrow tone="ink-2">Biografia</SectionEyebrow>
            <h2 className="mt-8 font-display text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--ink-2)]">
              Três décadas conduzindo decisões que exigem método e coragem em
              igual medida.
            </h2>
            <div
              aria-hidden="true"
              className="mt-8 h-[2px] w-20"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div className="mt-10 space-y-6 font-sans text-[17px] leading-[1.8] text-[var(--ink)]/85 md:text-[18px]">
              <p className="text-[19px] leading-[1.7] text-[var(--ink)] md:text-[21px]">
                Sócio-fundador do Oliveira Ritzmann Advogados, Jorge conduz há
                três décadas operações que exigem escala industrial de execução
                e, ao mesmo tempo, a profundidade estratégica que separa uma
                decisão bem tomada de um passivo evitável.
              </p>
              <p>
                Sua atuação combina o rigor do contencioso de volume — carteiras
                com milhares de processos ativos — à mesa das decisões
                empresariais mais sensíveis: reestruturações, disputas
                societárias, recuperação de créditos complexos e a arquitetura
                jurídica de cooperativas de crédito em todo o país.
              </p>
              <p>
                É reconhecido pela combinação rara entre método operacional
                mensurável e leitura empresarial de longo prazo. Palestrante
                frequente em fóruns de cooperativismo e advocacia contenciosa,
                publica regularmente sobre governança, gestão de contencioso e
                estratégia jurídica corporativa.
              </p>
            </div>

            <div className="mt-20">
              <SectionEyebrow tone="ink-2">Artigos relacionados</SectionEyebrow>
              <h3 className="mt-8 font-display text-[clamp(1.75rem,2.8vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.015em] text-[var(--ink-2)]">
                Leitura recente de Jorge
              </h3>
              <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                {ARTIGOS.map((a) => (
                  <li key={a.titulo}>
                    <a
                      href={a.href}
                      className="group flex h-full flex-col justify-between gap-8 border border-[var(--ink)]/12 bg-[var(--sand)]/40 p-6 transition-colors hover:border-[var(--gold)] hover:bg-[var(--sand)]"
                    >
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                          {a.categoria} · {a.data}
                        </p>
                        <p className="mt-5 font-display text-[18px] leading-snug text-[var(--ink)] md:text-[20px]">
                          {a.titulo}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-[var(--ink-2)]">
                        Ler publicação
                        <BrandArrow />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <BrandLink href={`mailto:jorge@oliveiraritzmann.com.br`}>
                  Fale diretamente com o Jorge
                </BrandLink>
              </div>
            </div>
          </div>


          {/* Áreas de foco + credenciais */}
          <aside className="md:pl-10 md:border-l md:border-[var(--gold)]/25">
            <SectionEyebrow tone="ink-2">Áreas de foco</SectionEyebrow>
            <h2 className="mt-6 font-display text-[clamp(1.5rem,2.2vw,1.9rem)] font-medium leading-[1.15] tracking-[-0.015em] text-[var(--ink-2)]">
              Onde Jorge atua
            </h2>
            <div
              aria-hidden="true"
              className="mt-5 h-[2px] w-16"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <ul className="mt-8 flex flex-col gap-3">
              {FOCUS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-display text-[16px] leading-snug text-[var(--ink)]"
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

            <div className="mt-14">
              <SectionEyebrow tone="ink-2">Credenciais</SectionEyebrow>
              <h2 className="mt-6 font-display text-[clamp(1.5rem,2.2vw,1.9rem)] font-medium leading-[1.15] tracking-[-0.015em] text-[var(--ink-2)]">
                Formação e trajetória
              </h2>
              <div
                aria-hidden="true"
                className="mt-5 h-[2px] w-16"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5">
                {CREDENTIALS.map((c) => (
                  <div key={c.label} className="flex flex-col gap-1">
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-[var(--ink-2)]">
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
        <div className="mx-auto max-w-[1360px] px-6">
          <a
            href="/socios"
            className="group inline-flex items-center gap-3 font-display text-[clamp(1.35rem,2.2vw,1.9rem)] font-medium tracking-[-0.01em] text-[var(--ink)] transition-colors hover:text-[var(--ink-2)]"
          >
            Conhecer o time completo
            <BrandArrow />
          </a>
        </div>
      </section>
    </article>
  );
}
