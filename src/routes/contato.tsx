/**
 * Contato — página institucional.
 *
 * Estrutura inspirada em DLA Piper (Contact us), adaptada ao padrão
 * editorial do Oliveira Ritzmann. Sem os campos "Tipo" e "Country".
 *  1. Hero editorial — bloco escuro + imagem em destaque à direita.
 *  2. Formulário — nome, sobrenome, e-mail, telefone, empresa e mensagem.
 *  3. Sedes — resumo com CTA para o rodapé de presença.
 */
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import bannerImg from "@/assets/contato-hero.jpg.asset.json";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { BrandArrow } from "@/components/brand-ui";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Oliveira Ritzmann Advogados" },
      {
        name: "description",
        content:
          "Fale com o Oliveira Ritzmann Advogados. Envie sua mensagem e o sócio responsável retorna o contato — em qualquer uma das nove praças do país.",
      },
      { property: "og:title", content: "Contato — Oliveira Ritzmann Advogados" },
      {
        property: "og:description",
        content:
          "Envie sua mensagem e o sócio responsável retorna o contato — em qualquer uma das nove praças do país.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: bannerImg.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: bannerImg.url },
    ],
  }),
  component: ContatoPage,
});

const contactSchema = z.object({
  nome: z.string().trim().min(1, "Informe seu nome.").max(80),
  sobrenome: z.string().trim().min(1, "Informe seu sobrenome.").max(80),
  email: z.string().trim().email("E-mail inválido.").max(160),
  telefone: z.string().trim().max(40).optional().or(z.literal("")),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  mensagem: z
    .string()
    .trim()
    .min(10, "Descreva brevemente sua solicitação.")
    .max(1500, "Máximo de 1500 caracteres."),
  consentimento: z.literal(true, {
    errorMap: () => ({ message: "É preciso aceitar a Política de Privacidade." }),
  }),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

function ContatoPage() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const parsed = contactSchema.safeParse({
      nome: data.get("nome") ?? "",
      sobrenome: data.get("sobrenome") ?? "",
      email: data.get("email") ?? "",
      telefone: data.get("telefone") ?? "",
      empresa: data.get("empresa") ?? "",
      mensagem: data.get("mensagem") ?? "",
      consentimento: data.get("consentimento") === "on",
    });
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
    form.reset();
  }

  return (
    <article className="bg-[var(--sand)] text-[var(--ink)]">
      {/* HERO — padrão editorial */}
      <section className="relative bg-[var(--sand)] pt-28 md:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <div className="mx-auto max-w-[1360px] px-6">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
            <div className="relative z-10 order-2 bg-[var(--ink)] px-8 py-12 text-[var(--sand)] md:order-1 md:col-span-5 md:px-12 md:py-16 md:-mr-8 md:mt-16">
              <SectionEyebrow tone="gold">Contato</SectionEyebrow>
              <h1 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] md:text-[52px]">
                Fale com{" "}
                <span className="font-semibold" style={{ color: "var(--gold)" }}>
                  o escritório.
                </span>
              </h1>
              <p className="mt-6 text-[15px] leading-relaxed text-[color-mix(in_oklch,var(--sand)_85%,transparent)] md:text-[16px]">
                Envie sua mensagem pelo formulário. O contato é direcionado à
                área responsável, em qualquer uma das praças do país.
              </p>
            </div>

            <div className="order-1 md:order-2 md:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/11]">
                <img
                  src={bannerImg.url}
                  alt="Contato Oliveira Ritzmann"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section
        id="formulario"
        className="mx-auto max-w-[1360px] px-6 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionEyebrow tone="ink-2">Envie sua mensagem</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-[var(--ink-2)] md:text-[40px]">
              Preencha o formulário e entraremos em contato.
            </h2>
            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-[var(--ink)]/80">
              <p>
                Se você já é cliente do escritório, procure diretamente o
                advogado que conduz o seu caso.
              </p>
              <p>
                Para candidaturas a vagas, acesse a página de{" "}
                <a
                  href="/carreiras"
                  className="underline decoration-[var(--gold)] underline-offset-4 transition-colors hover:text-[var(--gold)]"
                >
                  Carreiras
                </a>
                .
              </p>
              <p>
                Ao enviar, você concorda com a nossa Política de Privacidade.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            {sent ? (
              <div
                role="status"
                className="border-t border-[color-mix(in_oklch,var(--ink)_12%,transparent)] pt-10"
              >
                <SectionEyebrow tone="gold">Mensagem enviada</SectionEyebrow>
                <p className="mt-6 font-display text-2xl font-light leading-tight tracking-tight text-[var(--ink-2)] md:text-[30px]">
                  Recebemos sua mensagem. Um sócio responsável entrará em
                  contato em breve.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn btn-outline mt-8"
                >
                  Enviar outra mensagem
                  <BrandArrow />
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={onSubmit}
                className="grid grid-cols-1 gap-6 border-t border-[color-mix(in_oklch,var(--ink)_12%,transparent)] pt-10 md:grid-cols-2"
              >
                <Field
                  label="Nome"
                  name="nome"
                  required
                  autoComplete="given-name"
                  error={errors.nome}
                />
                <Field
                  label="Sobrenome"
                  name="sobrenome"
                  required
                  autoComplete="family-name"
                  error={errors.sobrenome}
                />
                <Field
                  label="E-mail"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  error={errors.email}
                />
                <Field
                  label="Telefone"
                  name="telefone"
                  type="tel"
                  autoComplete="tel"
                  error={errors.telefone}
                />
                <Field
                  label="Empresa"
                  name="empresa"
                  autoComplete="organization"
                  className="md:col-span-2"
                  error={errors.empresa}
                />
                <TextArea
                  label="Mensagem"
                  name="mensagem"
                  required
                  rows={6}
                  className="md:col-span-2"
                  error={errors.mensagem}
                />

                <label className="md:col-span-2 flex items-start gap-3 text-[13px] leading-relaxed text-[var(--ink)]/80">
                  <input
                    type="checkbox"
                    name="consentimento"
                    className="mt-1 h-4 w-4 border border-[color-mix(in_oklch,var(--ink)_25%,transparent)] accent-[var(--gold)]"
                  />
                  <span>
                    Autorizo o Oliveira Ritzmann a utilizar meus dados para
                    responder a este contato, conforme a Política de
                    Privacidade.
                  </span>
                </label>
                {errors.consentimento && (
                  <p className="md:col-span-2 -mt-3 text-[12px] text-red-700">
                    {errors.consentimento}
                  </p>
                )}

                <div className="md:col-span-2 pt-2">
                  <button type="submit" className="btn btn-solid">
                    Enviar mensagem
                    <BrandArrow />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </article>
  );
}

/* ---------- Campos ---------- */
function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  className,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
  error?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className ?? ""}`}>
      <span className="text-[11px] uppercase tracking-[0.24em] text-[var(--ink)]/70">
        {label}
        {required && <span style={{ color: "var(--gold)" }}> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        className="border-b border-[color-mix(in_oklch,var(--ink)_25%,transparent)] bg-transparent py-3 text-[16px] text-[var(--ink)] outline-none transition-colors focus:border-[var(--gold)]"
      />
      {error && <span className="text-[12px] text-red-700">{error}</span>}
    </label>
  );
}

function TextArea({
  label,
  name,
  required,
  rows = 5,
  className,
  error,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
  className?: string;
  error?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className ?? ""}`}>
      <span className="text-[11px] uppercase tracking-[0.24em] text-[var(--ink)]/70">
        {label}
        {required && <span style={{ color: "var(--gold)" }}> *</span>}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        aria-invalid={!!error}
        className="border-b border-[color-mix(in_oklch,var(--ink)_25%,transparent)] bg-transparent py-3 text-[16px] leading-relaxed text-[var(--ink)] outline-none transition-colors focus:border-[var(--gold)] resize-none"
      />
      {error && <span className="text-[12px] text-red-700">{error}</span>}
    </label>
  );
}
