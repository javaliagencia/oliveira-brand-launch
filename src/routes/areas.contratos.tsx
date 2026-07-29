import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, getAreaBanner } from "@/components/area-page";

const TITULO = "Contratos";
const BANNER = getAreaBanner("contratos");

export const Route = createFileRoute("/areas/contratos")({
  head: () => ({
    meta: [
      { title: `${TITULO} | Oliveira Ritzmann Advogados` },
      {
        name: "description",
        content:
          "Negociação, redação e revisão de contratos empresariais com visão de contencioso.",
      },
      { property: "og:title", content: `${TITULO} | Oliveira Ritzmann Advogados` },
      {
        property: "og:description",
        content:
          "Documentos escritos para funcionar na execução e sustentar a posição do cliente no dia difícil.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BANNER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: BANNER },
    ],
  }),
  component: () => <AreaPage titulo={TITULO} slug="contratos" />,
});
