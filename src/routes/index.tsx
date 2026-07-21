import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

// Layout base vazio — Prompt A. Header, rodapé e dobras da home ainda não
// foram construídos (Prompts B e C). Esta tela apenas confirma que o
// sistema de design (paleta fechada, tipografia Manrope + DM Sans,
// hairlines em dourado, respiro editorial) está aplicado corretamente.
function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full">
        <p className="eyebrow">Método. Previsibilidade. Resultado.</p>
        <span className="hairline mt-6" aria-hidden="true" />
        <h1 className="mt-8 text-3xl md:text-4xl font-display font-medium tracking-tight">
          Oliveira Ritzmann Advogados
        </h1>
        <p className="mt-6 text-base text-foreground/75 leading-relaxed">
          Trinta anos conduzindo operações que exigem escala e decisões que
          exigem profundidade.
        </p>
        <p className="mt-10 text-xs uppercase tracking-[0.18em] text-foreground/50">
          Site em construção — Prompt A concluído
        </p>
      </div>
    </main>
  );
}
