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
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { BrandArrow } from "@/components/brand-ui";
import logoVerde from "@/assets/logo-horizontal-verde.png.asset.json";
import selo30 from "@/assets/selo-30-anos-dourado.png.asset.json";


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
    cidade: "Rio de Janeiro",
    uf: "RJ",
    linhas: ["Rua Visconde de Inhaúma, 134", "Salas 2001 a 2004, Centro"],
    cep: "20091-901",
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
  { label: "Recuperação de Crédito", href: "/areas/recuperacao-de-credito" },
  { label: "Contencioso de Volume", href: "/areas/contencioso-de-volume" },
  { label: "Contencioso Estratégico", href: "/areas/contencioso-estrategico" },
  { label: "Direito Cível", href: "/areas/civel" },
  { label: "Direito Tributário", href: "/areas/tributario" },
  { label: "Direito Trabalhista", href: "/areas/trabalhista" },
  { label: "Societário", href: "/areas/societario" },
  { label: "Planejamento Patrimonial e Sucessório", href: "/areas/planejamento-patrimonial-sucessorio" },
  { label: "Contratos", href: "/areas/contratos" },
  { label: "Direito Médico", href: "/areas/direito-medico" },
];

const SEGMENTOS_LINKS = [
  { label: "Clientes corporativos", href: "/atuacao/segmentos/clientes-corporativos" },
  { label: "Empresarial estratégico", href: "/atuacao/segmentos/empresarial-estrategico" },
  { label: "Instituições financeiras", href: "/atuacao/segmentos/instituicoes-financeiras" },
  { label: "Cooperativas de crédito", href: "/atuacao/segmentos/cooperativas-de-credito" },
  { label: "Seguradoras", href: "/atuacao/segmentos/seguradoras" },
  { label: "Concessionárias e serviços públicos", href: "/atuacao/segmentos/concessionarias-servicos-publicos" },
  { label: "Marketplaces e meios de pagamento", href: "/atuacao/segmentos/marketplaces-meios-de-pagamento" },
  { label: "Previdência complementar", href: "/atuacao/segmentos/previdencia-complementar" },
  { label: "Saúde e Direito Médico", href: "/areas/direito-medico" },
];

const PUBLICACOES_LINKS = [
  { label: "Notícias", href: "/publicacoes/noticias/cvm-atualizacao-ofertas-publicas" },
  { label: "Análises", href: "/publicacoes/analises" },
  { label: "Estudos", href: "/publicacoes/estudos-materiais" },
];

const ESCRITORIO_LINKS = [
  { label: "O Oliveira Ritzmann", href: "/presenca" },
  { label: "História", href: "/historia" },
  { label: "Presença", href: "/presenca" },
  { label: "Sócios", href: "/advogados" },
  { label: "Carreiras", href: "/carreiras" },
  { label: "Hub de Inovação", href: "/hub-de-inovacao" },

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
  return (
    <footer
      className="w-full text-sand"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Rodapé — presença, navegação e informações institucionais
      </h2>

      {/* ============================================================
          Faixa 1 — PRESENÇA (sedes)
          Fundo --ink (verde-profundo)
         ============================================================ */}
      <section
        aria-labelledby="sedes-heading"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="mx-auto max-w-[1360px] px-6 pb-20 pt-10 md:pb-24 md:pt-12">
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
            Estrutura própria em nove praças. Atuação em todo o país.
          </h3>

          <a
            href="/presenca"
            className="mt-6 inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.14em] text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
          >
            Ver a presença no mapa
            <BrandArrow />
          </a>


          <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {SEDES.map((sede) => (
              <SedeCard key={sede.cidade} sede={sede} />
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================
          Faixa 2 — NAVEGAÇÃO COMPLETA (SEO: espelha o menu sanduíche)
          Fundo --ink-2 (verde-escuro médio)
          Ordem: Início · Oliveira Ritzmann · Atuação · Advogados ·
                 Publicações · Contato
         ============================================================ */}
      <nav
        aria-label="Navegação do rodapé"
        style={{ backgroundColor: "var(--ink-2)" }}
      >
        <div className="mx-auto max-w-[1360px] px-6 pt-8 pb-16 md:pt-10 md:pb-20">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
            {/* (Início removido — âncora está no header) */}


            {/* Oliveira Ritzmann */}
            <div>
              <p className="eyebrow">
                <a href="/presenca" className="transition-colors duration-200 hover:text-[var(--gold)]">
                  Oliveira Ritzmann
                </a>
              </p>
              <span
                aria-hidden="true"
                className="mt-3 block h-px w-8"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <a href="/historia" className="text-[13px] leading-relaxed text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]">
                    História
                  </a>
                </li>
                <li>
                  <a href="/presenca" className="text-[13px] leading-relaxed text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]">
                    Presença
                  </a>
                </li>
                <li>
                  <a href="/carreiras" className="text-[13px] leading-relaxed text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="/hub-de-inovacao" className="text-[13px] leading-relaxed text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]">
                    Hub de Inovação
                  </a>
                </li>

              </ul>
            </div>

            {/* Atuação — Áreas do Direito + Segmentos */}
            <div className="col-span-2">
              <p className="eyebrow">Atuação</p>
              <span
                aria-hidden="true"
                className="mt-3 block h-px w-8"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-sand/55">
                    Áreas do Direito
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {AREAS_LINKS.map((item) => (
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
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-sand/55">
                    Segmentos
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {SEGMENTOS_LINKS.map((item) => (
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
              </div>
            </div>

            {/* Advogados */}
            <div>
              <p className="eyebrow">
                <a href="/advogados" className="transition-colors duration-200 hover:text-[var(--gold)]">
                  Advogados
                </a>
              </p>
              <span
                aria-hidden="true"
                className="mt-3 block h-px w-8"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <a href="/advogados" className="text-[13px] leading-relaxed text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]">
                    Sócios
                  </a>
                </li>
                <li>
                  <a href="/advogados/associados" className="text-[13px] leading-relaxed text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]">
                    Associados
                  </a>
                </li>
              </ul>
            </div>

            {/* Publicações */}
            <div>
              <p className="eyebrow">
                <a href="/publicacoes" className="transition-colors duration-200 hover:text-[var(--gold)]">
                  Publicações
                </a>
              </p>
              <span
                aria-hidden="true"
                className="mt-3 block h-px w-8"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <ul className="mt-4 flex flex-col gap-2.5">
                {PUBLICACOES_LINKS.map((item) => (
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

            {/* Contato */}
            <div>
              <p className="eyebrow">
                <a href="/contato" className="transition-colors duration-200 hover:text-[var(--gold)]">
                  Contato
                </a>
              </p>
              <span
                aria-hidden="true"
                className="mt-3 block h-px w-8"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <ul className="mt-4 flex flex-col gap-2.5">
                {CONTATO_LINKS.map((item) => (
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
              <p className="mt-4 text-[13px] leading-relaxed text-sand/70">
                <a
                  href={`tel:+5547${TELEFONE_INSTITUCIONAL.replace(/\D/g, "").slice(2)}`}
                  className="transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
                >
                  {TELEFONE_INSTITUCIONAL}
                </a>
              </p>
            </div>
          </div>





          {/* Assinatura entre Navegação e Institucional */}
          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2">
              <img
                src={logoVerde.url}
                alt="Oliveira Ritzmann Advogados"
                className="h-16 w-auto opacity-95"
              />
              <img
                src={selo30.url}
                alt="30 anos"
                className="h-14 w-auto"
              />
            </div>
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
          </div>
        </div>
      </nav>

      {/* ============================================================
          Faixa 3 — INSTITUCIONAL (Conformidade + Redes + copyright)
          Fundo mais escuro (mistura de --ink com preto)
         ============================================================ */}
      <section
        aria-label="Informações institucionais"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="mx-auto max-w-[1360px] px-6 py-10 md:py-12">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            {/* Conformidade — esquerda */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-sand/55">
                Conformidade
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {INSTITUCIONAL_LINKS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[13px] text-sand/80 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/transparencia"
                    className="text-[13px] text-sand/80 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
                  >
                    Portal da Transparência
                  </a>
                </li>
                <li>
                  <a
                    href="/politica-da-qualidade"
                    className="text-[13px] text-sand/80 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
                  >
                    Política da Qualidade
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes — direita */}
            <div className="md:justify-self-end">
              <p className="text-[11px] uppercase tracking-[0.22em] text-sand/55 md:text-right">
                Redes
              </p>
              <ul className="mt-3 flex gap-4 md:justify-end">
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center border transition-colors duration-200 hover:text-[var(--gold)] hover:border-[var(--gold)] focus-visible:text-[var(--gold)] focus-visible:border-[var(--gold)]"
                    style={{ borderColor: "color-mix(in oklch, var(--sand) 25%, transparent)" }}
                  >
                    <Linkedin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    className="inline-flex h-9 w-9 items-center justify-center border transition-colors duration-200 hover:text-[var(--gold)] hover:border-[var(--gold)] focus-visible:text-[var(--gold)] focus-visible:border-[var(--gold)]"
                    style={{ borderColor: "color-mix(in oklch, var(--sand) 25%, transparent)" }}
                  >
                    <Instagram className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    className="inline-flex h-9 w-9 items-center justify-center border transition-colors duration-200 hover:text-[var(--gold)] hover:border-[var(--gold)] focus-visible:text-[var(--gold)] focus-visible:border-[var(--gold)]"
                    style={{ borderColor: "color-mix(in oklch, var(--sand) 25%, transparent)" }}
                  >
                    <Facebook className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Filete + copyright */}
          <span
            aria-hidden="true"
            className="mt-8 block h-px w-full"
            style={{ backgroundColor: "color-mix(in oklch, var(--sand) 12%, transparent)" }}
          />
          <p className="mt-6 text-center text-[11px] uppercase tracking-[0.2em] text-sand/45">
            © 2026 Oliveira Ritzmann Advogados
          </p>
        </div>
      </section>
    </footer>
  );
}
