/**
 * SectionEyebrow — padrão único de olho-de-seção do site.
 *
 * - Uppercase, 11px, letter-spacing 0.28em, cor dourada.
 * - Traço curto dourado (40px × 1px) logo ABAIXO do texto.
 * - Aceita `tone` para ajustar a cor do texto (mantém o traço dourado).
 *
 * Uso: <SectionEyebrow>Duas competências, um método</SectionEyebrow>
 */
export function SectionEyebrow({
  children,
  tone = "gold",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "gold" | "ink" | "sand";
  className?: string;
}) {
  const color =
    tone === "ink"
      ? "var(--ink)"
      : tone === "sand"
      ? "var(--sand)"
      : "var(--gold)";
  return (
    <div className={`flex flex-col items-start gap-3 ${className}`}>
      <span
        className="text-[11px] font-medium uppercase leading-none"
        style={{ color, letterSpacing: "0.28em" }}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className="block h-px w-10"
        style={{ backgroundColor: "var(--gold)" }}
      />
    </div>
  );
}
