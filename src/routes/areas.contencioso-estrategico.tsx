import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, getAreaBanner } from "@/components/area-page";

const BANNER = getAreaBanner("contencioso-estrategico");

const TITULO = "Contencioso Estratégico";

export const Route = createFileRoute("/areas/contencioso-estrategico")({
  head: () => ({
    meta: [
      { title: `${TITULO} — Oliveira Ritzmann Advogados` },
      {
        name: "description",
        content:
          "Contencioso estratégico em causas decisivas: teses, tribunais superiores e gestão de risco.",
      },
      { property: "og:title", content: `${TITULO} — Oliveira Ritzmann Advogados` },
      {
        property: "og:description",
        content:
          "Atuação em disputas de alta complexidade, com construção de teses e condução técnica em todas as instâncias.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BANNER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: BANNER },
    ],
  }),
  component: () => <AreaPage titulo={TITULO} slug="contencioso-estrategico" />,
});
