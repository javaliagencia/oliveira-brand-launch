import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, getAreaBanner } from "@/components/area-page";

const TITULO = "Societário";
const BANNER = getAreaBanner("societario");

export const Route = createFileRoute("/areas/societario")({
  head: () => ({
    meta: [
      { title: `${TITULO} | Oliveira Ritzmann Advogados` },
      {
        name: "description",
        content:
          "Estruturação societária, acordos de sócios, governança e reorganizações conduzidas com método.",
      },
      { property: "og:title", content: `${TITULO} | Oliveira Ritzmann Advogados` },
      {
        property: "og:description",
        content:
          "Do desenho societário que sustenta o crescimento ao acordo que evita a disputa entre sócios.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BANNER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: BANNER },
    ],
  }),
  component: () => <AreaPage titulo={TITULO} slug="societario" />,
});
