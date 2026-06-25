export const WHATSAPP_NUMBER = "5521975807070"; // TODO: substituir pelo número real do TMG Estúdio
export const WHATSAPP_MESSAGE = "Olá! Quero agendar uma gravação no TMG Estúdio.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
export const INSTAGRAM_LINK = "https://instagram.com/tmgestudio";
export const THREADS_LINK = "https://threads.net/@tmgestudio";
export const EMAIL = "tmgestudio21@gmail.com";
export const PHONE_DISPLAY = "(21) 97580-7070";
export const LOCATION = "Nova Iguaçu - RJ";
export const ADDRESS_STREET = "Rua Cosmorama, 984";
export const ADDRESS_AREA = "Cosmorama — Mesquita, RJ";
export const ADDRESS_LOCALITY = "Mesquita";
export const ADDRESS_REGION = "RJ";
export const POSTAL_CODE = "26582-020";
/** Formato E.164 para Schema.org / SEO */
export const PHONE_SCHEMA = "+55-21-97580-7070";
/** Coordenadas aproximadas de Rua Cosmorama, 984 — Cosmorama, Mesquita - RJ */
export const GEO_LATITUDE = -22.7932545;
export const GEO_LONGITUDE = -43.4172607;
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Rua+Cosmorama,+984,+Cosmorama,+Mesquita,+RJ";

/** URL canônica do site em produção — atualize se o domínio mudar */
export const SITE_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
  "https://tmgestudio.com.br";

export const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;