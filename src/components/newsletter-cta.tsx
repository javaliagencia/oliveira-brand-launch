import { Linkedin, Instagram, Facebook } from "lucide-react";
import simboloDourado from "@/assets/simbolo-dourado.png.asset.json";



/**
 * Faixa "Assine / Conecte-se" — inspirada na barra roxa do Gowling WLG,
 * adaptada à paleta Oliveira Ritzmann: fundo verde-escuro, tipografia
 * bege, filetes dourados. Serve como transição entre a última dobra da
 * página e o rodapé institucional.
 */
export function NewsletterCta() {
  return (
    <section
      aria-label="Assine e conecte-se"
      className="relative overflow-hidden text-sand"
      style={{ backgroundColor: "var(--ink-2)" }}
    >
      {/* Símbolo oficial da marca, em ouro sutil */}
      <img
        src={simboloDourado.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 h-[180%] w-auto -translate-y-1/2 opacity-[0.12] select-none"
      />


      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-16 md:py-20">
        {/* Coluna 1 — Assine */}
        <div>
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.01em]">
            Receba nossas publicações
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-sand/80">
            Análises e boletins do escritório sobre mudanças legislativas,
            jurisprudência e método aplicado à prática empresarial.
          </p>

          <form
            className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              E-mail
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Seu e-mail corporativo"
              className="h-12 flex-1 border border-sand/25 bg-transparent px-4 text-[14px] text-sand placeholder:text-sand/50 focus:border-[var(--gold)] focus:outline-none"
              style={{ borderRadius: "2px" }}
            />
            <button
              type="submit"
              className="btn btn-outline-invert h-12 whitespace-nowrap"
            >
              Assinar
            </button>
          </form>
        </div>

        {/* Coluna 2 — Conecte-se */}
        <div className="relative">
          <p className="eyebrow">Conecte-se</p>
          <span
            aria-hidden="true"
            className="mt-3 block h-px w-8"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <h3 className="mt-4 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.15] tracking-[-0.01em]">
            Acompanhe o escritório
          </h3>

          <ul className="mt-6 flex items-center gap-4">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/oliveiraritzmann",
                Icon: Linkedin,
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/oliveiraritzmann",
                Icon: Instagram,
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/oliveiraritzmann",
                Icon: Facebook,
              },
              {
                label: "E-mail",
                href: "mailto:contato@oliveiraritzmann.com.br",
                Icon: Mail,
              },
            ].map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center border border-sand/30 text-sand transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)] focus-visible:border-[var(--gold)] focus-visible:text-[var(--gold)] focus-visible:outline-none"
                  style={{ borderRadius: "2px" }}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Filete dourado inferior — costura visual com o rodapé */}
      <div
        aria-hidden="true"
        className="h-px w-full"
        style={{ backgroundColor: "color-mix(in oklch, var(--gold) 40%, transparent)" }}
      />
    </section>
  );
}
