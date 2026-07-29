import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, getAreaBanner } from "@/components/area-page";

const BANNER = getAreaBanner("recuperacao-de-credito");

const TITULO = "Recuperação de Crédito";

export const Route = createFileRoute("/areas/recuperacao-de-credito")({
  head: () => ({
    meta: [
      { title: `${TITULO} | Oliveira Ritzmann Advogados` },
      {
        name: "description",
        content:
          "Recuperação de crédito com método, escala e previsibilidade: estratégia, execução e resultado.",
      },
      { property: "og:title", content: `${TITULO} | Oliveira Ritzmann Advogados` },
      {
        property: "og:description",
        content:
          "Prática dedicada à recuperação de créditos complexos, com leitura profunda do caso e execução previsível.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BANNER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: BANNER },
    ],
  }),
  component: () => <AreaPage titulo={TITULO} slug="recuperacao-de-credito" />,
});
