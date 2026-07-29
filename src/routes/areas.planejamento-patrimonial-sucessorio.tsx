import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, getAreaBanner } from "@/components/area-page";

const TITULO = "Planejamento Patrimonial e Sucessório";
const SLUG = "planejamento-patrimonial-sucessorio";
const BANNER = getAreaBanner(SLUG);

export const Route = createFileRoute("/areas/planejamento-patrimonial-sucessorio")({
  head: () => ({
    meta: [
      { title: `${TITULO} | Oliveira Ritzmann Advogados` },
      {
        name: "description",
        content:
          "Holdings familiares, sucessão, proteção patrimonial e inventários com eficiência tributária.",
      },
      { property: "og:title", content: `${TITULO} | Oliveira Ritzmann Advogados` },
      {
        property: "og:description",
        content:
          "Estruturas que protegem o patrimônio, ordenam a transmissão e preservam a convivência entre gerações.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BANNER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: BANNER },
    ],
  }),
  component: () => <AreaPage titulo={TITULO} slug={SLUG} />,
});
