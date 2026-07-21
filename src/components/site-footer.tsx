/**
 * Rodapé institucional.
 *
 * Fundo verde-profundo (ink), tipografia em bege (sand), filete dourado
 * de 1px no topo. Três blocos empilhados + assinatura centralizada.
 *
 * Bloco 1  — Sedes próprias (peso visual da peça).
 * Bloco 2  — Navegação (Atuação, O escritório, Sócios, Inteligência,
 *            Contato + Áreas do Direito).
 * Bloco 3  — Institucional (razão social, OAB, ética, privacidade,
 *            termos, LinkedIn, Instagram).
 * Assinatura: "Método. Previsibilidade. Resultado." em dourado.
 *
 * Endereços e telefones ficam ⟨PENDENTE⟩ visíveis — a definir com o
 * cliente. Cada endereço vem marcado com schema.org LocalBusiness.
 */
import logoVerde from "@/assets/logo-horizontal-verde.png.asset.json";


type Sede = {
  cidade: string;
  uf: string;
  matriz?: boolean;
};

const SEDES: Sede[] = [
  { cidade: "Blumenau", uf: "SC", matriz: true },
  { cidade: "São Paulo", uf: "SP" },
  { cidade: "Curitiba", uf: "PR" },
  { cidade: "Porto Alegre", uf: "RS" },
  { cidade: "Rio de Janeiro", uf: "RJ" },
  { cidade: "Salvador", uf: "BA" },
  { cidade: "Goiânia", uf: "GO" },
  { cidade: "Maceió", uf: "AL" },
  { cidade: "Aracaju", uf: "SE" },
];

const ATUACAO_LINKS = [
  { label: "Contencioso de volume", href: "/atuacao/contencioso-de-volume" },
  { label: "Cooperativas de crédito", href: "/atuacao/cooperativas-de-credito" },
  { label: "Empresarial estratégico", href: "/atuacao/empresarial-estrategico" },
  { label: "Recuperação de créditos complexos", href: "/atuacao/recuperacao-de-creditos-complexos" },
];

const AREAS_LINKS = [
  { label: "Tributário", href: "/areas/tributario" },
  { label: "Societário", href: "/areas/societario" },
  { label: "Trabalhista", href: "/areas/trabalhista" },
  { label: "Cível", href: "/areas/civel" },
];

const NAV_LINKS = [
  { label: "O escritório", href: "/o-escritorio" },
  { label: "Sócios", href: "/socios" },
  { label: "Inteligência", href: "/inteligencia" },
  { label: "Contato", href: "/contato" },
];

const INSTITUCIONAL_LINKS = [
  { label: "Canal de ética", href: "/etica" },
  { label: "Política de privacidade", href: "/privacidade" },
  { label: "Termos de uso", href: "/termos" },
];

function Pending({ label }: { label: string }) {
  return (
    <span
      className="inline-block text-sand/55"
      aria-label={`${label} pendente`}
      title="A definir"
    >
      ⟨PENDENTE⟩
    </span>
  );
}

function SedeCard({ sede }: { sede: Sede }) {
  return (
    <li
      itemScope
      itemType="https://schema.org/LocalBusiness"
      className="flex flex-col"
    >
      <meta itemProp="name" content={`Oliveira Ritzmann Advogados — ${sede.cidade}`} />
      <p className="font-display text-[17px] font-medium leading-tight text-sand">
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">{sede.cidade}</span>
          <span className="text-sand/50"> · </span>
          <span itemProp="addressRegion">{sede.uf}</span>
          {sede.matriz && (
            <span className="ml-2 align-[0.15em] text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">
              Sede
            </span>
          )}
        </span>
      </p>
      <p className="mt-2 text-[13px] leading-relaxed text-sand/70">
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">
            <Pending label={`Endereço ${sede.cidade}`} />
          </span>
        </span>
      </p>
      <p className="mt-1 text-[13px] leading-relaxed text-sand/70">
        <span itemProp="telephone">
          <Pending label={`Telefone ${sede.cidade}`} />
        </span>
      </p>
    </li>
  );
}

function LinkColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <span
        aria-hidden="true"
        className="mt-3 block h-px w-8"
        style={{ backgroundColor: "var(--gold)" }}
      />
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-[13px] leading-relaxed text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full text-sand"
      style={{ backgroundColor: "var(--ink)" }}
      aria-labelledby="footer-heading"
    >
      <span
        aria-hidden="true"
        className="block h-px w-full"
        style={{ backgroundColor: "var(--gold)" }}
      />

      <div className="mx-auto max-w-[1360px] px-6 py-20 md:py-24">
        <h2 id="footer-heading" className="sr-only">
          Rodapé — sedes, navegação e informações institucionais
        </h2>

        {/* Bloco 1 — Sedes próprias */}
        <section aria-labelledby="sedes-heading">
          <p className="eyebrow">Presença</p>
          <span
            aria-hidden="true"
            className="mt-3 block h-px w-10"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <h3
            id="sedes-heading"
            className="mt-6 max-w-3xl font-display text-3xl font-medium leading-[1.2] tracking-tight text-sand md:text-[40px]"
          >
            Nove sedes próprias. Atuação em 27 unidades da federação.
          </h3>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-sand/70">
            Estrutura própria, sem repasse a correspondente.
          </p>

          <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {SEDES.map((sede) => (
              <SedeCard key={sede.cidade} sede={sede} />
            ))}
          </ul>
        </section>

        {/* Filete separador */}
        <span
          aria-hidden="true"
          className="my-16 block h-px w-full"
          style={{ backgroundColor: "color-mix(in oklch, var(--gold) 32%, transparent)" }}
        />

        {/* Bloco 2 — Navegação */}
        <section aria-label="Navegação do rodapé" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <LinkColumn title="Atuação" items={ATUACAO_LINKS} />
          <LinkColumn title="Áreas do Direito" items={AREAS_LINKS} />
          <LinkColumn title="O escritório" items={[NAV_LINKS[0]]} />
          <LinkColumn title="Sócios" items={[NAV_LINKS[1]]} />
          <LinkColumn
            title="Contato"
            items={[NAV_LINKS[2], NAV_LINKS[3]]}
          />
        </section>

        {/* Filete separador */}
        <span
          aria-hidden="true"
          className="my-16 block h-px w-full"
          style={{ backgroundColor: "color-mix(in oklch, var(--gold) 32%, transparent)" }}
        />

        {/* Bloco 3 — Institucional */}
        <section
          aria-label="Informações institucionais"
          className="grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          <div>
            <p className="eyebrow">Razão social</p>
            <span
              aria-hidden="true"
              className="mt-3 block h-px w-8"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <p className="mt-4 text-[13px] leading-relaxed text-sand/80">
              <Pending label="Razão social completa" />
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-sand/70">
              OAB · <Pending label="Inscrição OAB" />
            </p>
          </div>

          <div>
            <p className="eyebrow">Conformidade</p>
            <span
              aria-hidden="true"
              className="mt-3 block h-px w-8"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <ul className="mt-4 flex flex-col gap-2.5">
              {INSTITUCIONAL_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[13px] text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Redes</p>
            <span
              aria-hidden="true"
              className="mt-3 block h-px w-8"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[13px] text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[13px] text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Assinatura */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <img
            src={logoVerde.url}
            alt="Oliveira Ritzmann Advogados"
            className="h-10 w-auto opacity-95"
          />
          <span
            aria-hidden="true"
            className="block h-px w-16"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <p
            className="font-display text-[13px] uppercase tracking-[0.32em]"
            style={{ color: "var(--gold)" }}
          >
            Método. Previsibilidade. Resultado.
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-sand/45">
            © {year} Oliveira Ritzmann Advogados
          </p>
        </div>
      </div>
    </footer>
  );
}
