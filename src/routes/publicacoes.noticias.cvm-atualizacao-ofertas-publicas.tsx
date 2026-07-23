/**
 * Notícia — CVM publica atualização sobre ofertas públicas de valores mobiliários.
 *
 * Estrutura (referência Simmons & Simmons):
 *  1. Hero editorial (categoria, título, data, autor + banner à direita)
 *  2. Barra utilitária (compartilhar / imprimir / data)
 *  3. Corpo do artigo (texto corrido)
 *  4. Segmentos de foco · Serviços · Contato
 *  5. Artigos relacionados
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Mail, Printer, Share2 } from "lucide-react";
import bannerUrl from "@/assets/noticias/cvm-ofertas-publicas.jpg";
import socioJorge from "@/assets/socios/jorge-ritzmann-de-oliveira.png.asset.json";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { BrandArrow, BrandLink } from "@/components/brand-ui";

const TITULO =
  "CVM publica atualização de ofertas públicas: o que muda para emissores e distribuidores";
const DESCRICAO =
  "A nova orientação da Comissão de Valores Mobiliários redesenha exigências de disclosure em ofertas públicas de valores mobiliários. Análise das implicações práticas para emissores, coordenadores e investidores.";
const DATA_ISO = "2026-07-21";
const DATA_LABEL = "21 de julho de 2026";
const AUTOR = "Jorge Ritzmann de Oliveira";
const AUTOR_CARGO = "Sócio-fundador · Mercado de Capitais";
const CATEGORIA = "Notícia · Mercado de Capitais";

export const Route = createFileRoute(
  "/publicacoes/noticias/cvm-atualizacao-ofertas-publicas",
)({
  head: () => ({
    meta: [
      { title: `${TITULO} — Oliveira Ritzmann Advogados` },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
      { property: "og:type", content: "article" },
      { property: "og:image", content: bannerUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: bannerUrl },
    ],
  }),
  component: NoticiaPage,
});

const SEGMENTOS = [
  { label: "Instituições financeiras", href: "/atuacao/segmentos/instituicoes-financeiras" },
  { label: "Fundos de investimento", href: "#" },
  { label: "Companhias abertas", href: "#" },
  { label: "Gestoras e asset managers", href: "#" },
];

const SERVICOS = [
  { label: "Mercado de capitais", href: "#" },
  { label: "Regulatório financeiro", href: "#" },
  { label: "Societário", href: "#" },
  { label: "Contencioso estratégico", href: "#" },
];

const RELACIONADOS: { categoria: string; data: string; titulo: string; href: string }[] = [
  {
    categoria: "Análise · Regulação",
    data: "Jul · 2026",
    titulo:
      "Ofertas 476 e o novo desenho de disclosure: o que sobrou da simplificação",
    href: "#",
  },
  {
    categoria: "Notícia · Bancos",
    data: "Jun · 2026",
    titulo:
      "Banco Central publica resolução sobre operações estruturadas com derivativos",
    href: "#",
  },
  {
    categoria: "Análise · Compliance",
    data: "Mai · 2026",
    titulo:
      "Governança de fundos: os limites da atuação do gestor após a nova instrução",
    href: "#",
  },
];

function NoticiaPage() {
  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: TITULO, url: window.location.href });
      } catch {
        /* usuário cancelou */
      }
      return;
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <article className="bg-[var(--sand)] text-[var(--ink)]">
      {/* HERO — banner jornalístico (padrão Simmons) */}
      <section className="relative">
        {/* Faixa de metadados no topo */}
        <div className="bg-[var(--ink)] pt-24 md:pt-28">
          <div className="mx-auto flex max-w-[1360px] flex-wrap items-center gap-x-6 gap-y-2 px-6 pb-4 text-[11px] uppercase tracking-[0.28em] text-[color-mix(in_oklch,var(--sand)_70%,transparent)]">
            <span className="text-[var(--gold)]">{CATEGORIA}</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <time dateTime={DATA_ISO}>{DATA_LABEL}</time>
          </div>
        </div>

        {/* Imagem em largura total */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-[var(--ink)] md:aspect-[21/8]">
          <img
            src={bannerUrl}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
            width={2100}
            height={900}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in oklch, var(--ink) 55%, transparent) 0%, color-mix(in oklch, var(--ink) 35%, transparent) 60%, color-mix(in oklch, var(--ink) 50%, transparent) 100%)",
              mixBlendMode: "multiply",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundColor: "color-mix(in oklch, var(--ink-2) 25%, transparent)",
            }}
          />
        </div>

        {/* Barra dourada de separação */}
        <div aria-hidden="true" className="h-[3px] w-full bg-[var(--gold)]" />

        {/* Título e resumo abaixo do banner */}
        <div className="bg-[var(--sand)]">
          <div className="mx-auto max-w-[1360px] px-6 py-12 md:py-20">
            <div className="max-w-[900px]">
              <h1 className="font-display text-3xl font-medium leading-[1.05] tracking-tight text-[var(--ink-2)] md:text-[52px]">
                {TITULO}
              </h1>
              <p className="mt-8 max-w-[720px] text-[17px] leading-relaxed text-[var(--ink)]/80 md:text-[19px]">
                {DESCRICAO}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CORPO */}
      <section className="mx-auto max-w-[1360px] px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Barra utilitária lateral */}
          <aside className="md:col-span-3">
            <div className="sticky top-28 flex flex-col gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--ink)]/60">
                  Autor
                </p>
                <p className="mt-3 font-display text-[16px] font-medium leading-tight text-[var(--ink-2)]">
                  {AUTOR}
                </p>
                <p className="mt-1 text-[12px] leading-snug text-[var(--ink)]/70">
                  {AUTOR_CARGO}
                </p>
                <div className="mt-3 flex items-center gap-3 text-[12px] text-[var(--ink)]/80">
                  <a
                    href="mailto:jorge@oliveiraritzmann.com.br"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--gold)]"
                  >
                    <Mail size={13} strokeWidth={1.5} /> E-mail
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--gold)]"
                  >
                    <Linkedin size={13} strokeWidth={1.5} /> LinkedIn
                  </a>
                </div>
              </div>



              <div className="flex items-center gap-3 pt-2 print:hidden">
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Compartilhar"
                  className="inline-flex h-10 w-10 items-center justify-center border border-[var(--ink)]/15 text-[var(--ink)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  <Share2 size={16} strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  aria-label="Imprimir"
                  className="inline-flex h-10 w-10 items-center justify-center border border-[var(--ink)]/15 text-[var(--ink)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  <Printer size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </aside>

          {/* Texto do artigo */}
          <div className="md:col-span-9">
            <div className="max-w-[760px] space-y-6 text-[16px] leading-[1.75] text-[var(--ink)]/90 md:text-[17px]">
              <p className="font-display text-[22px] leading-[1.4] tracking-tight text-[var(--ink-2)] md:text-[26px]">
                A Comissão de Valores Mobiliários publicou nova orientação sobre
                ofertas públicas de valores mobiliários, com efeitos práticos
                imediatos para emissores, coordenadores e investidores
                qualificados.
              </p>

              <p>
                A atualização consolida entendimentos que a autarquia vinha
                sinalizando desde o segundo semestre de 2025 e altera pontos
                sensíveis do fluxo de <em>disclosure</em>: prazos de resposta a
                exigências, escopo do prospecto simplificado e critérios de
                elegibilidade para o rito automático de registro.
              </p>

              <h2 className="pt-4 font-display text-[22px] font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-[26px]">
                Novo desenho de disclosure
              </h2>
              <p>
                O texto amplia as hipóteses de dispensa de prospecto para
                ofertas destinadas a investidores profissionais, mas eleva o
                nível de informação exigido nos memorandos de distribuição.
                Coordenadores passam a responder solidariamente pela adequação
                de risco quando a oferta for endereçada a investidores
                qualificados que não sejam profissionais.
              </p>

              <h2 className="pt-4 font-display text-[22px] font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-[26px]">
                Impacto para emissores
              </h2>
              <p>
                Companhias fechadas em processo de <em>IPO</em> ou de emissão
                privada com esforços restritos precisam revisar seus modelos de
                <em> due diligence</em> e as cláusulas de responsabilidade em
                contratos de coordenação. A leitura preliminar sugere que o
                custo regulatório caiu para operações estruturadas, mas subiu
                para ofertas de menor porte, que hoje concentram a maior parte
                do volume no país.
              </p>

              <h2 className="pt-4 font-display text-[22px] font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-[26px]">
                Próximos passos
              </h2>
              <p>
                A CVM abriu período de consulta pública de trinta dias para
                comentários sobre as regras de transição. O escritório está
                acompanhando os desdobramentos e permanece à disposição para
                orientar clientes na revisão de seus programas de emissão e nas
                contribuições ao processo consultivo.
              </p>
            </div>

            {/* Segmentos de foco · Serviços */}
            <div className="mt-16 grid grid-cols-1 gap-10 border-t border-[color-mix(in_oklch,var(--ink)_10%,transparent)] pt-12 md:grid-cols-2">

              <div>
                <SectionEyebrow tone="ink-2">Segmentos de foco</SectionEyebrow>
                <ul className="mt-6 divide-y divide-[color-mix(in_oklch,var(--ink)_10%,transparent)]">
                  {SEGMENTOS.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="group flex items-center justify-between py-3 text-[14px] text-[var(--ink)] transition-colors hover:text-[var(--gold)]"
                      >
                        <span>{s.label}</span>
                        <BrandArrow />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionEyebrow tone="ink-2">Áreas do Direito</SectionEyebrow>
                <ul className="mt-6 divide-y divide-[color-mix(in_oklch,var(--ink)_10%,transparent)]">
                  {SERVICOS.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="group flex items-center justify-between py-3 text-[14px] text-[var(--ink)] transition-colors hover:text-[var(--gold)]"
                      >
                        <span>{s.label}</span>
                        <BrandArrow />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ARTIGOS RELACIONADOS */}
      <section className="border-t border-[color-mix(in_oklch,var(--ink)_10%,transparent)] bg-[color-mix(in_oklch,var(--sand)_60%,white)]">
        <div className="mx-auto max-w-[1360px] px-6 py-12 md:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionEyebrow tone="ink-2">Artigos relacionados</SectionEyebrow>
              <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-[40px]">
                Continue a leitura.
              </h2>
            </div>
            <BrandLink href="/publicacoes">Ver todas as publicações</BrandLink>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {RELACIONADOS.map((a) => (
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
                    Ler
                    <BrandArrow />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
