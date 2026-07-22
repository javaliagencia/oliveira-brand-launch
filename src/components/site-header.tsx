import { Link } from "@tanstack/react-router";
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

const NAV: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Oliveira Ritzmann", href: "/oliveira-ritzmann" },
  { label: "Atuação", href: "/atuacao" },
  { label: "Advogados", href: "/advogados" },
  { label: "Publicações", href: "/publicacoes" },
  { label: "Contato", href: "/contato" },
];

const ATUACAO_PRIMARY: NavItem[] = [
  { label: "Áreas do Direito", href: "/atuacao/areas-do-direito" },
  { label: "Segmentos", href: "/atuacao/segmentos" },
];

const PUBLICACOES_LINKS: NavItem[] = [
  { label: "Análises", href: "/publicacoes/analises" },
  { label: "Notícias", href: "/publicacoes/noticias" },
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
            className="h-11 w-auto md:h-12"
            loading="eager"
            decoding="async"
          />
          <img
            src={selo30.url}
            alt="30 anos"
            className="h-9 w-auto md:h-10"
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

            <div className="mx-auto grid w-full max-w-[1360px] flex-1 grid-cols-1 gap-16 px-6 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
              <nav aria-label="Navegação principal" className="flex flex-col">
                <p className="eyebrow">Navegação</p>
                <ul className="mt-8 flex flex-col gap-4">
                  {NAV.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.01em] text-sand transition-colors hover:text-[var(--gold)]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col">
                <p className="eyebrow">Atuação</p>
                <ul className="mt-8 flex flex-col gap-3">
                  {ATUACAO_PRIMARY.map((sub) => (
                    <li key={sub.href}>
                      <a
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className="block font-display text-[clamp(1.125rem,1.5vw,1.4rem)] font-medium text-sand/90 transition-colors hover:text-[var(--gold)]"
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="eyebrow mt-10">Publicações</p>
                <ul className="mt-8 flex flex-col gap-3">
                  {PUBLICACOES_LINKS.map((sub) => (
                    <li key={sub.href}>
                      <a
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className="block font-display text-[clamp(1.125rem,1.5vw,1.4rem)] font-medium text-sand/90 transition-colors hover:text-[var(--gold)]"
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-sand/70">
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
                </div>
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
