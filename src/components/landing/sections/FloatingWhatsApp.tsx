
import { FaWhatsapp } from "react-icons/fa6";
import { WHATSAPP_LINK } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-green-neon text-white animate-pulse-cta transition-transform hover:scale-110 hover:animate-none motion-reduce:animate-none"
    >
      <FaWhatsapp className="h-6 w-6" />
    </a>
  );
}
