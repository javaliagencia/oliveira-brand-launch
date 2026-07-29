import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoVerde from "@/assets/logo-horizontal-verde.png.asset.json";
import selo30 from "@/assets/selo-30-anos-dourado.png.asset.json";

/**
 * Header institucional — minimalista.
 * Logo à esquerda ("Oliveira Ritzmann · Advogados"), ícone hambúrguer
 * discreto à direita. Sem linha utilitária no topo — LinkedIn/Instagram
 * ficam dentro do overlay do menu.
 *
 * O header é transparente por padrão (sobreposto ao hero em vídeo) e
 * ganha fundo sólido verde-profundo após um pequeno scroll.
 */

type NavItem = { label: string; href: string };
type NavGroup = { title: string; items: NavItem[] };
type NavSection = {
  label: string;
  href: string;
  children?: NavItem[];
  groups?: NavGroup[];
};

const AREAS_LINKS: NavItem[] = [
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

const SEGMENTOS_LINKS: NavItem[] = [
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

const NAV_SECTIONS: NavSection[] = [
  { label: "Início", href: "/" },
  {
    label: "Oliveira Ritzmann",
    href: "/presenca",
    children: [
      { label: "História", href: "/historia" },
      { label: "Presença", href: "/presenca" },
      { label: "Carreiras", href: "/carreiras" },
      { label: "Hub de Inovação", href: "/hub-de-inovacao" },

    ],
  },
  {
    label: "Atuação",
    href: "/atuacao",
    groups: [
      { title: "Áreas do Direito", items: AREAS_LINKS },
      { title: "Segmentos", items: SEGMENTOS_LINKS },
    ],
  },
  {
    label: "Advogados",
    href: "/advogados",
    children: [
      { label: "Sócios", href: "/advogados" },
      { label: "Associados", href: "/advogados/associados" },
    ],
  },
  {
    label: "Publicações",
    href: "/publicacoes",
    children: [
      { label: "Notícias", href: "/publicacoes/noticias/cvm-atualizacao-ofertas-publicas" },
      { label: "Análises", href: "/publicacoes/analises" },
      { label: "Estudos", href: "/publicacoes/estudos-materiais" },
    ],
  },
  {
    label: "Contato",
    href: "/contato",
    children: [
      { label: "Falar com o escritório", href: "/contato" },
      { label: "Canal de ética", href: "/etica" },
    ],
  },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 w-full text-sand transition-colors duration-500 ${
        scrolled ? "bg-[var(--ink)]/95 backdrop-blur-[2px]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-5 md:py-6">
        <Link
          to="/"
          className="group inline-flex items-center gap-1.5 focus-visible:outline-none md:gap-2"
          aria-label="Oliveira Ritzmann Advogados — 30 anos — Início"
        >
          <img
            src={logoVerde.url}
            alt="Oliveira Ritzmann Advogados"
            className="h-16 w-auto md:h-20"
            loading="eager"
            decoding="async"
          />
          <img
            src={selo30.url}
            alt="30 anos"
            className="h-14 w-auto md:h-16"
            loading="eager"
            decoding="async"
          />
        </Link>

        <div className="inline-flex items-center gap-5 md:gap-7">
          <a
            href="https://intranet.oliveiraritzmann.com.br"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-sand/80 transition-colors hover:text-[var(--gold)] md:inline-flex"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8.5" r="3.6" />
              <path d="M4.8 20c1.2-3.6 4-5.4 7.2-5.4s6 1.8 7.2 5.4" />
            </svg>
            Login
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="group inline-flex h-9 w-9 items-center justify-center text-sand transition-colors hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-[8px] w-6 flex-col justify-between"
            >
              <span className="block h-px w-full bg-current" />
              <span className="block h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </div>


      {/* Overlay menu — tela cheia */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--ink)" }}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="relative flex h-full w-full flex-col text-sand"
          >
            <div className="w-full">
              <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-5 md:py-6">
                <img
                  src={logoVerde.url}
                  alt="Oliveira Ritzmann Advogados"
                  className="h-11 w-auto md:h-12"
                />
                <div className="inline-flex items-center gap-6 md:gap-8">
                  <img
                    src={selo30.url}
                    alt="30 anos"
                    className="h-9 w-auto md:h-10"
                  />
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Fechar menu"
                    className="inline-flex h-9 w-9 items-center justify-center text-sand transition-colors hover:text-[var(--gold)]"
                  >
                    <span aria-hidden="true" className="relative inline-block h-4 w-4">
                      <span className="absolute left-0 top-1/2 block h-px w-4 rotate-45 bg-current" />
                      <span className="absolute left-0 top-1/2 block h-px w-4 -rotate-45 bg-current" />
                    </span>
                  </button>
                </div>
              </div>

              <div className="h-px w-full" style={{ backgroundColor: "var(--gold)" }} />
            </div>

            <div className="mx-auto w-full max-w-[1360px] flex-1 overflow-y-auto px-6 py-12 md:py-16">
              <nav aria-label="Navegação principal">
                <p className="eyebrow">Navegação</p>
                <ul className="mt-8 flex flex-col divide-y divide-sand/10">
                  {NAV_SECTIONS.map((section) => (
                    <li key={section.href} className="py-6 md:py-7">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-12">
                        <NavAnchor
                          href={section.href}
                          onNavigate={() => setOpen(false)}
                          className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.01em] text-sand transition-colors hover:text-[var(--gold)]"
                        >
                          {section.label}
                        </NavAnchor>

                        {section.children && (
                          <ul className="flex flex-col gap-2">
                            {section.children.map((sub) => (
                              <li key={sub.href}>
                                <NavAnchor
                                  href={sub.href}
                                  onNavigate={() => setOpen(false)}
                                  className="block text-[14px] leading-relaxed text-sand/80 transition-colors hover:text-[var(--gold)]"
                                >
                                  {sub.label}
                                </NavAnchor>
                              </li>
                            ))}
                          </ul>
                        )}

                        {section.groups && (
                          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                            {section.groups.map((group) => (
                              <div key={group.title}>
                                <p className="text-[11px] uppercase tracking-[0.22em] text-sand/55">
                                  {group.title}
                                </p>
                                <ul className="mt-3 flex flex-col gap-2">
                                  {group.items.map((sub) => (
                                    <li key={sub.href}>
                                      <NavAnchor
                                        href={sub.href}
                                        onNavigate={() => setOpen(false)}
                                        className="block text-[13.5px] leading-relaxed text-sand/80 transition-colors hover:text-[var(--gold)]"
                                      >
                                        {sub.label}
                                      </NavAnchor>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-sand/70">
                <a href="https://intranet.oliveiraritzmann.com.br" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 hover:text-[var(--gold)]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8.5" r="3.6" />
                    <path d="M4.8 20c1.2-3.6 4-5.4 7.2-5.4s6 1.8 7.2 5.4" />
                  </svg>
                  Login
                </a>
                <span aria-hidden="true" className="text-sand/30">·</span>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener" className="hover:text-[var(--gold)]">
                  LinkedIn
                </a>
                <span aria-hidden="true" className="text-sand/30">·</span>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener" className="hover:text-[var(--gold)]">
                  Instagram
                </a>
                <span aria-hidden="true" className="text-sand/30">·</span>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" className="hover:text-[var(--gold)]">
                  Facebook
                </a>
              </div>
            </div>

            <div className="w-full" style={{ backgroundColor: "var(--ink-2)" }}>
              <div className="mx-auto max-w-[1360px] px-6 py-5 text-center text-[11px] uppercase tracking-[0.24em] text-sand/70">
                Método. Previsibilidade. Resultado.
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * NavAnchor — link do menu que navega pelo roteador (sem recarregar a página)
 * e fecha o overlay. Mantém `href` real para acessibilidade e cmd+click.
 */
function NavAnchor({
  href,
  onNavigate,
  className,
  children,
}: {
  href: string;
  onNavigate: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        onNavigate();
        navigate({ to: href } as never);
      }}
    >
      {children}
    </a>
  );
}
