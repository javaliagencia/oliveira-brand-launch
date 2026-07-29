import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, getAreaBanner } from "@/components/area-page";

const BANNER = getAreaBanner("contencioso-de-volume");

const TITULO = "Contencioso de Volume";

export const Route = createFileRoute("/areas/contencioso-de-volume")({
  head: () => ({
    meta: [
      { title: `${TITULO} — Oliveira Ritzmann Advogados` },
      {
        name: "description",
        content:
          "Gestão de contencioso de volume com método, tecnologia e previsibilidade de resultado.",
      },
      { property: "og:title", content: `${TITULO} — Oliveira Ritzmann Advogados` },
      {
        property: "og:description",
        content:
          "Operação de massa conduzida com governança, indicadores e o mesmo rigor técnico do contencioso estratégico.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BANNER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: BANNER },
    ],
  }),
  component: () => <AreaPage titulo={TITULO} slug="contencioso-de-volume" />,
});
