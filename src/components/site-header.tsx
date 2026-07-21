import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

/**
 * Header institucional — duas linhas.
 *
 *   Linha 1 (utilitária, ink-2): LinkedIn · Instagram, alinhados à direita.
 *   Linha 2 (principal, ink):    logo à esquerda, menu à direita.
 *
 * "Atuação" abre um dropdown com três entradas de primeiro nível e, abaixo
 * de um filete dourado, "Recuperação de créditos complexos".
 * Header sticky com redução suave de altura ao scroll. Sem sombra.
 * Mobile: drawer lateral com a mesma hierarquia.
 */

type NavItem = {
  label: string;
  href: string;
};

const NAV: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "O escritório", href: "/o-escritorio" },
  { label: "Atuação", href: "/atuacao" },
  { label: "Sócios", href: "/socios" },
  { label: "Inteligência", href: "/inteligencia" },
  { label: "Contato", href: "/contato" },
];

const ATUACAO_PRIMARY: NavItem[] = [
  { label: "Contencioso de volume", href: "/atuacao/contencioso-de-volume" },
  { label: "Cooperativas de crédito", href: "/atuacao/cooperativas-de-credito" },
  { label: "Empresarial estratégico", href: "/atuacao/empresarial-estrategico" },
];

const ATUACAO_SECONDARY: NavItem = {
  label: "Recuperação de créditos complexos",
  href: "/atuacao/recuperacao-de-creditos-complexos",
};

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [atuacaoOpen, setAtuacaoOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const openAtuacao = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setAtuacaoOpen(true);
  };
  const scheduleCloseAtuacao = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setAtuacaoOpen(false), 120);
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Linha 1 — utilitária */}
      <div
        className="w-full text-sand/85"
        style={{ backgroundColor: "var(--ink-2)" }}
      >
        <div className="mx-auto flex max-w-[1360px] items-center justify-end gap-6 px-6 py-1.5 text-[11px] tracking-[0.14em] uppercase">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
          >
            LinkedIn
          </a>
          <span aria-hidden="true" className="text-sand/30">·</span>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Linha 2 — principal */}
      <div
        className="w-full text-sand"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div
          className={`mx-auto flex max-w-[1360px] items-center justify-between px-6 transition-[padding] duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <Link
            to="/"
            className="group inline-flex items-baseline gap-2 focus-visible:outline-none"
            aria-label="Oliveira Ritzmann Advogados — Início"
          >
            <span className="font-display text-[15px] font-medium tracking-[0.02em] text-sand transition-colors group-hover:text-[var(--gold)]">
              Oliveira Ritzmann
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.22em] text-sand/60 sm:inline">
              Advogados
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Menu principal"
            className="hidden items-center gap-8 lg:flex"
          >
            {NAV.map((item) =>
              item.label === "Atuação" ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={openAtuacao}
                  onMouseLeave={scheduleCloseAtuacao}
                  onFocus={openAtuacao}
                  onBlur={(e) => {
                    if (
                      !e.currentTarget.contains(
                        e.relatedTarget as Node | null
                      )
                    ) {
                      scheduleCloseAtuacao();
                    }
                  }}
                >
                  <a
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={atuacaoOpen}
                    className="font-sans text-[13px] uppercase tracking-[0.16em] text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
                  >
                    {item.label}
                  </a>

                  {atuacaoOpen && (
                    <div
                      role="menu"
                      className="absolute right-0 top-full min-w-[320px] pt-4"
                    >
                      <div
                        className="border-t-[1px] py-4"
                        style={{
                          backgroundColor: "var(--ink)",
                          borderTopColor: "var(--gold)",
                        }}
                      >
                        <ul className="flex flex-col">
                          {ATUACAO_PRIMARY.map((sub) => (
                            <li key={sub.href}>
                              <a
                                role="menuitem"
                                href={sub.href}
                                className="block px-6 py-2.5 font-sans text-[13px] text-sand/90 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                          <li className="mx-6 my-2 h-px" style={{ backgroundColor: "var(--gold)" }} />
                          <li>
                            <a
                              role="menuitem"
                              href={ATUACAO_SECONDARY.href}
                              className="block px-6 py-2.5 font-sans text-[13px] text-sand/90 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
                            >
                              {ATUACAO_SECONDARY.label}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-sans text-[13px] uppercase tracking-[0.16em] text-sand/85 transition-colors duration-200 hover:text-[var(--gold)] focus-visible:text-[var(--gold)]"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={drawerOpen}
            className="inline-flex items-center gap-3 text-sand lg:hidden"
          >
            <span className="text-[11px] uppercase tracking-[0.2em]">Menu</span>
            <span
              aria-hidden="true"
              className="inline-flex h-[14px] w-6 flex-col justify-between"
            >
              <span className="block h-px w-full bg-sand" />
              <span className="block h-px w-full bg-sand" />
              <span className="block h-px w-full bg-sand" />
            </span>
          </button>
        </div>

        {/* Filete dourado */}
        <div className="h-px w-full" style={{ backgroundColor: "var(--gold)" }} />
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto px-6 py-6 text-sand"
            style={{ backgroundColor: "var(--ink)" }}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-[15px] font-medium tracking-[0.02em]">
                Oliveira Ritzmann
              </span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Fechar menu"
                className="text-[11px] uppercase tracking-[0.2em] text-sand/80 hover:text-[var(--gold)]"
              >
                Fechar
              </button>
            </div>
            <div className="h-px w-full" style={{ backgroundColor: "var(--gold)" }} />

            <nav aria-label="Menu principal (mobile)" className="mt-6 flex flex-col">
              {NAV.map((item) =>
                item.label === "Atuação" ? (
                  <div key="atuacao" className="py-3">
                    <span className="block font-sans text-[13px] uppercase tracking-[0.18em] text-sand">
                      Atuação
                    </span>
                    <ul className="mt-3 flex flex-col gap-2 pl-3">
                      {ATUACAO_PRIMARY.map((sub) => (
                        <li key={sub.href}>
                          <a
                            href={sub.href}
                            onClick={() => setDrawerOpen(false)}
                            className="block py-1.5 text-[14px] text-sand/85 hover:text-[var(--gold)]"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                      <li className="my-2 h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
                      <li>
                        <a
                          href={ATUACAO_SECONDARY.href}
                          onClick={() => setDrawerOpen(false)}
                          className="block py-1.5 text-[14px] text-sand/85 hover:text-[var(--gold)]"
                        >
                          {ATUACAO_SECONDARY.label}
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block py-3 font-sans text-[13px] uppercase tracking-[0.18em] text-sand hover:text-[var(--gold)]"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            <div className="mt-auto pt-8">
              <div className="h-px w-full" style={{ backgroundColor: "var(--gold)" }} />
              <div className="mt-4 flex gap-6 text-[11px] uppercase tracking-[0.18em] text-sand/80">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">
                  Instagram
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
