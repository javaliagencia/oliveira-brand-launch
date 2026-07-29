import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, AREA_BANNER } from "@/components/area-page";

const TITULO = "Direito Cível";

export const Route = createFileRoute("/areas/civel")({
  head: () => ({
    meta: [
      { title: `${TITULO} — Oliveira Ritzmann Advogados` },
      {
        name: "description",
        content:
          "Direito cível empresarial: responsabilidade civil, contratos e disputas patrimoniais.",
      },
      { property: "og:title", content: `${TITULO} — Oliveira Ritzmann Advogados` },
      {
        property: "og:description",
        content:
          "Consultivo e contencioso cível conduzidos com método, profundidade e previsibilidade.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: AREA_BANNER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: AREA_BANNER },
    ],
  }),
  component: () => <AreaPage titulo={TITULO} slug="civel" />,
});
