/**
 * Brand UI — kit coerente com a identidade Oliveira Ritzmann.
 *
 * Usa apenas tokens da paleta fechada (verde-profundo, verde-escuro,
 * dourado, bege) e as utilidades definidas em src/styles.css.
 *
 * Botões:
 *   <BrandButton variant="solid">           — CTA primária (fundos claros)
 *   <BrandButton variant="outline">         — CTA secundária (fundos claros)
 *   <BrandButton variant="outline-invert">  — CTA sobre fundo verde-profundo
 *   <BrandLink>                              — link editorial com filete + seta
 *
 * Setas:
 *   <BrandArrow />        — seta inline animada no hover do pai
 *
 * Listas:
 *   <BrandBullets>         — bullets com filete dourado
 *   <BrandBulletsNumbered> — numeração 01 · 02 · 03 em dourado
 */
import * as React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---------- Seta editorial ---------- */
export function BrandArrow({
  direction = "right",
  className,
  size = 16,
}: {
  direction?: "right" | "up-right";
  className?: string;
  size?: number;
}) {
  const Icon = direction === "up-right" ? ArrowUpRight : ArrowRight;
  return (
    <Icon
      aria-hidden="true"
      className={cn("arrow", className)}
      size={size}
      strokeWidth={1.5}
    />
  );
}

/* ---------- Botão ---------- */
type ButtonVariant = "solid" | "outline" | "outline-invert";

type BrandButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  withArrow?: boolean;
  arrowDirection?: "right" | "up-right";
  asChild?: false;
};

export function BrandButton({
  variant = "solid",
  withArrow = false,
  arrowDirection = "right",
  className,
  children,
  ...rest
}: BrandButtonProps) {
  const variantClass =
    variant === "solid"
      ? "btn-solid"
      : variant === "outline-invert"
        ? "btn-outline-invert"
        : "btn-outline";
  return (
    <button className={cn("btn", variantClass, className)} {...rest}>
      <span>{children}</span>
      {withArrow && <BrandArrow direction={arrowDirection} />}
    </button>
  );
}

/* Variante <a> para links de navegação com estilo de botão */
export function BrandButtonLink({
  href,
  variant = "solid",
  withArrow = false,
  arrowDirection = "right",
  className,
  children,
  external,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  withArrow?: boolean;
  arrowDirection?: "right" | "up-right";
  external?: boolean;
}) {
  const variantClass =
    variant === "solid"
      ? "btn-solid"
      : variant === "outline-invert"
        ? "btn-outline-invert"
        : "btn-outline";
  return (
    <a
      href={href}
      className={cn("btn", variantClass, className)}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      {...rest}
    >
      <span>{children}</span>
      {withArrow && <BrandArrow direction={arrowDirection} />}
    </a>
  );
}

/* ---------- Link editorial ---------- */
export function BrandLink({
  href,
  invert = false,
  arrowDirection = "right",
  external,
  className,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  invert?: boolean;
  arrowDirection?: "right" | "up-right";
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn("btn-link", invert && "btn-link-invert", className)}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      {...rest}
    >
      <span>{children}</span>
      <BrandArrow direction={arrowDirection} size={14} />
    </a>
  );
}

/* ---------- Bullets ---------- */
export function BrandBullets({
  items,
  className,
}: {
  items: React.ReactNode[];
  className?: string;
}) {
  return (
    <ul className={cn("bullets", className)}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function BrandBulletsNumbered({
  items,
  className,
}: {
  items: React.ReactNode[];
  className?: string;
}) {
  return (
    <ol className={cn("bullets-num", className)}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}
