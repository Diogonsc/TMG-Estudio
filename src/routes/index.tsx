import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TMG Estúdio — Estúdio de Podcast Premium em Nova Iguaçu - RJ" },
      {
        name: "description",
        content:
          "Transformamos conversas em conteúdo profissional. Gravação de podcast, produção audiovisual e direção de conteúdo em Nova Iguaçu - RJ. Agende sua gravação.",
      },
      { property: "og:title", content: "TMG Estúdio — Estúdio de Podcast Premium" },
      {
        property: "og:description",
        content:
          "Conteúdo profissional que fortalece sua autoridade e posiciona sua marca. Nova Iguaçu - RJ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "TMG Estúdio",
          description:
            "Estúdio de podcast e produção audiovisual premium em Nova Iguaçu - RJ.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nova Iguaçu",
            addressRegion: "RJ",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "50",
          },
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
