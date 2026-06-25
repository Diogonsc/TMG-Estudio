import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp, FaThreads, FaInstagram } from "react-icons/fa6";
import {
  EMAIL,
  INSTAGRAM_LINK,
  LOCATION,
  PHONE_DISPLAY,
  THREADS_LINK,
  WHATSAPP_LINK,
} from "@/lib/site";
import { Logo } from "../components/Logo";
import { StarRating } from "../components/StarRating";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Estúdio de podcast e produção audiovisual premium em {LOCATION}.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
            <StarRating className="h-3 w-3" />
            Avaliação máxima no Google
          </div>
          <div className="mt-5"></div>
        </div>
        <div>
          <h3 className="font-display font-bold">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-purple-neon" /> {PHONE_DISPLAY}
            </li>
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground"
              >
                <FaWhatsapp className="h-4 w-4 text-purple-neon" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground"
              >
                <FaInstagram className="h-4 w-4 text-purple-neon" /> @tmgestudio
              </a>
            </li>
            <li>
              <a
                href={THREADS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground"
              >
                <FaThreads className="h-4 w-4 text-purple-neon" /> @tmgestudio
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-purple-neon" /> {EMAIL}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-purple-neon" /> {LOCATION}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display font-bold">Localização</h3>
          <div className="mt-4 overflow-hidden rounded-2xl glass">
            <iframe
              title="Mapa TMG Estúdio - Nova Iguaçu"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14713.169690907842!2d-43.414033!3d-22.791626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9967f41a001f39%3A0x5f829a3ae679c4cb!2sEst%C3%BAdio%20de%20Podcast%20TMG!5e0!3m2!1spt-PT!2sbr!4v1782329208019!5m2!1spt-PT!2sbr"
              className="h-44 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs flex gap-2 items-center justify-center">
        © {new Date().getFullYear()} TMG Estúdio. Todos os direitos reservados.
        |{" "}
        <span className="text-purple-neon">
          <a
            href="https://wa.me/5521973819373"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-neon hover:underline"
            >
            Desenvolvido por{" "}
            Diogo Nascimento
          </a>{" "}
        </span>
      </div>
    </footer>
  );
}
