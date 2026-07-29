import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, AREA_BANNER } from "@/components/area-page";

const TITULO = "Recuperação de Crédito";

export const Route = createFileRoute("/areas/recuperacao-de-credito")({
  head: () => ({
    meta: [
      { title: `${TITULO} — Oliveira Ritzmann Advogados` },
      {
        name: "description",
        content:
          "Recuperação de crédito com método, escala e previsibilidade: estratégia, execução e resultado.",
      },
      { property: "og:title", content: `${TITULO} — Oliveira Ritzmann Advogados` },
      {
        property: "og:description",
        content:
          "Prática dedicada à recuperação de créditos complexos, com leitura profunda do caso e execução previsível.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: AREA_BANNER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: AREA_BANNER },
    ],
  }),
  component: () => <AreaPage titulo={TITULO} slug="recuperacao-de-credito" />,
});
