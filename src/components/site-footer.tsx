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
  linhas: string[];
  cep: string;
  telefones: string[];
};

const SEDES: Sede[] = [
  {
    cidade: "Blumenau",
    uf: "SC",
    matriz: true,
    linhas: ["Rua Frederico Guilherme Busch, 87", "Jardim Blumenau"],
    cep: "89010-360",
    telefones: [],
  },
  {
    cidade: "São Paulo",
    uf: "SP",
    linhas: ["Avenida Paulista, 1636", "Conj. 1507-1509, Bela Vista"],
    cep: "01310-200",
    telefones: [],
  },
  {
    cidade: "Curitiba",
    uf: "PR",
    linhas: ["Rua da Glória, 251", "Ed. NEO Corporate, Conj. 202", "Centro Cívico"],
    cep: "80030-060",
    telefones: [],
  },
  {
    cidade: "Porto Alegre",
    uf: "RS",
    linhas: ["Avenida Ipiranga, 40", "Conj. 603-604-605, Praia de Belas"],
    cep: "90160-090",
    telefones: [],
  },
  {
    cidade: "Rio de Janeiro",
    uf: "RJ",
    linhas: ["Rua Visconde de Inhaúma, 134", "Salas 2001 a 2004, Centro"],
    cep: "20091-901",
    telefones: [],
  },
  {
    cidade: "Salvador",
    uf: "BA",
    linhas: ["Avenida Tancredo Neves, 450", "23º andar, Caminho das Árvores"],
    cep: "41820-901",
    telefones: [],
  },
  {
    cidade: "Goiânia",
    uf: "GO",
    linhas: ["Avenida 136, Quadra F44, nº 761", "Sala A1, Setor Sul"],
    cep: "74093-250",
    telefones: [],
  },
  {
    cidade: "Maceió",
    uf: "AL",
    linhas: ["Rua José Maia Gomes, 258", "SL 5, CXPST 264, Jatiúca"],
    cep: "57036-240",
    telefones: [],
  },
  {
    cidade: "Aracaju",
    uf: "SE",
    linhas: ["Rua Manoel Espírito Santo, 165", "Sala 201, Pavimento Superior", "Grageru"],
    cep: "49025-440",
    telefones: [],
  },
];

const TELEFONE_INSTITUCIONAL = "(47) 3041-9565";

const AREAS_LINKS = [
  { label: "Bancário", href: "/areas/bancario" },
  { label: "Recuperação de Crédito", href: "/areas/recuperacao-de-credito" },
  { label: "Cível", href: "/areas/civel" },
  { label: "Consumidor", href: "/areas/consumidor" },
  { label: "Trabalhista", href: "/areas/trabalhista" },
  { label: "Tributário", href: "/areas/tributario" },
  { label: "Societário", href: "/areas/societario" },
  { label: "Sucessório e Planejamento Patrimonial", href: "/areas/sucessorio-planejamento-patrimonial" },
  { label: "Previdenciário", href: "/areas/previdenciario" },
];

const SEGMENTOS_LINKS = [
  { label: "Instituições financeiras", href: "/atuacao/segmentos/instituicoes-financeiras" },
  { label: "Cooperativas de crédito", href: "/atuacao/segmentos/cooperativas-de-credito" },
  { label: "Seguradoras", href: "/atuacao/segmentos/seguradoras" },
  { label: "Concessionárias e serviços públicos", href: "/atuacao/segmentos/concessionarias-servicos-publicos" },
  { label: "Marketplaces e meios de pagamento", href: "/atuacao/segmentos/marketplaces-meios-de-pagamento" },
  { label: "Previdência complementar", href: "/atuacao/segmentos/previdencia-complementar" },
  { label: "Saúde e Direito Médico", href: "/atuacao/segmentos/saude-direito-medico" },
];

const PUBLICACOES_LINKS = [
  { label: "Análises", href: "/publicacoes/analises" },
  { label: "Notícias", href: "/publicacoes/noticias" },
  { label: "Estudos e materiais", href: "/publicacoes/estudos-materiais" },
];

const ESCRITORIO_LINKS = [
  { label: "O Oliveira Ritzmann", href: "/oliveira-ritzmann" },
  { label: "Método", href: "/metodo" },
  { label: "Presença", href: "/presenca" },
  { label: "Sócios", href: "/advogados" },
  { label: "Carreiras", href: "/carreiras" },
];

const CONTATO_LINKS = [
  { label: "Falar com o escritório", href: "/contato" },
  { label: "Canal de ética", href: "/etica" },
];

const INSTITUCIONAL_LINKS = [
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
  const streetAddress = sede.linhas.join(", ");
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
      <div
        className="mt-2 text-[13px] leading-relaxed text-sand/70"
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
      >
        <meta itemProp="streetAddress" content={streetAddress} />
        {sede.linhas.map((linha) => (
          <p key={linha}>{linha}</p>
        ))}
        <p itemProp="postalCode">CEP {sede.cep}</p>
      </div>
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
          <LinkColumn title="Áreas do Direito" items={AREAS_LINKS} />
          <LinkColumn title="Segmentos" items={SEGMENTOS_LINKS} />
          <LinkColumn title="Publicações" items={PUBLICACOES_LINKS} />
          <LinkColumn title="Oliveira Ritzmann" items={[NAV_LINKS[0], NAV_LINKS[1]]} />
          <LinkColumn title="Contato" items={[NAV_LINKS[3]]} />
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
          className="grid grid-cols-1 gap-10 md:grid-cols-2"
        >


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
