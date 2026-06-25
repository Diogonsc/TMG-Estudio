import LandingPage from "@/components/landing/LandingPage";
import {
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  ADDRESS_STREET,
  EMAIL,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  OG_IMAGE_URL,
  PHONE_SCHEMA,
  POSTAL_CODE,
  SITE_URL,
} from "@/lib/site";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TMG Estúdio — Estúdio de Podcast Premium em Nova Iguaçu - RJ" },
      {
        name: "description",
        content:
          "Transformamos conversas em conteúdo profissional. Gravação de podcast, produção audiovisual e direção de conteúdo em Nova Iguaçu - RJ. Agende sua gravação.",
      },
      { property: "og:title", content: "TMG Estúdio — Estúdio de Podcast" },
      {
        property: "og:description",
        content:
          "Conteúdo profissional que fortalece sua autoridade e posiciona sua marca. Nova Iguaçu - RJ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "TMG Estúdio — Estúdio de Podcast Premium em Nova Iguaçu - RJ",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
      {
        name: "twitter:title",
        content: "TMG Estúdio — Estúdio de Podcast Premium em Nova Iguaçu - RJ",
      },
      {
        name: "twitter:description",
        content:
          "Transformamos conversas em conteúdo profissional. Gravação de podcast, produção audiovisual e direção de conteúdo em Nova Iguaçu - RJ.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "TMG Estúdio",
          description:
            "Estúdio de podcast e produção audiovisual premium em Nova Iguaçu - RJ.",
          url: SITE_URL,
          telephone: PHONE_SCHEMA,
          email: EMAIL,
          image: OG_IMAGE_URL,
          address: {
            "@type": "PostalAddress",
            streetAddress: ADDRESS_STREET,
            addressLocality: ADDRESS_LOCALITY,
            addressRegion: ADDRESS_REGION,
            postalCode: POSTAL_CODE,
            addressCountry: "BR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: GEO_LATITUDE,
            longitude: GEO_LONGITUDE,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "09:00",
              closes: "13:00",
            },
          ],
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
