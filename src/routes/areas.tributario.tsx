import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, getAreaBanner } from "@/components/area-page";

const TITULO = "Direito Tributário";
const BANNER = getAreaBanner("tributario");

export const Route = createFileRoute("/areas/tributario")({
  head: () => ({
    meta: [
      { title: `${TITULO} — Oliveira Ritzmann Advogados` },
      {
        name: "description",
        content:
          "Planejamento, consultivo e contencioso tributário: reforma, passivos fiscais e defesa técnica.",
      },
      { property: "og:title", content: `${TITULO} — Oliveira Ritzmann Advogados` },
      {
        property: "og:description",
        content:
          "Redução legítima de carga tributária, gestão de passivos e atuação nas esferas administrativa e judicial.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BANNER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: BANNER },
    ],
  }),
  component: () => <AreaPage titulo={TITULO} slug="tributario" />,
});
