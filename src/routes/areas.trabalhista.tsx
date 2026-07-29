import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, getAreaBanner } from "@/components/area-page";

const BANNER = getAreaBanner("trabalhista");

const TITULO = "Direito Trabalhista";

export const Route = createFileRoute("/areas/trabalhista")({
  head: () => ({
    meta: [
      { title: `${TITULO} — Oliveira Ritzmann Advogados` },
      {
        name: "description",
        content:
          "Consultivo preventivo, negociação sindical e defesa em contencioso trabalhista para empresas com operação intensiva em pessoas.",
      },
      { property: "og:title", content: `${TITULO} — Oliveira Ritzmann Advogados` },
      {
        property: "og:description",
        content:
          "Prevenção de passivos, relações sindicais e defesa técnica conduzidas com método e previsibilidade.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BANNER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: BANNER },
    ],
  }),
  component: () => <AreaPage titulo={TITULO} slug="trabalhista" />,
});
