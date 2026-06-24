import { FaWhatsapp } from "react-icons/fa6";
import { WHATSAPP_LINK } from "@/lib/site";
import { heroStudio } from "../assets";
import { Reveal } from "../primitives";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28">
      <img
        src={heroStudio}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.2 290 / 0.4), transparent 70%)" }}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">
            Sua autoridade começa quando seu conteúdo parece{" "}
            <span className="text-gradient">profissional</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Transforme suas ideias em conteúdo que gera credibilidade, conexão e oportunidades.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-purple)] px-8 py-4 font-bold text-white shadow-[var(--glow-purple)] transition-transform hover:-translate-y-1"
            >
              AGENDAR MINHA GRAVAÇÃO
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-neon text-white animate-pulse-cta hover:animate-none hover:bg-green-neon/90 motion-reduce:animate-none glass px-8 py-4 font-bold transition-transform hover:-translate-y-1"
            >
              <FaWhatsapp className="h-5 w-5 text-white" />
              FALAR NO WHATSAPP
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
