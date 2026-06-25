import { FaWhatsapp } from "react-icons/fa6";

import { WHATSAPP_LINK } from "@/lib/site";
import { AuroraBackground } from "../components/AuroraBackground";
import { heroPoster } from "../assets";
import { BlurReveal, ScaleReveal } from "../primitives";

export function FinalCta() {
  return (
    <section className="relative w-full overflow-x-clip py-24 sm:py-36 md:py-44">
      <img
        src={heroPoster}
        alt=""
        aria-hidden
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/92 to-background" />
      <AuroraBackground intensity="strong" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100vw,32rem)] w-[min(100vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.66 0.22 303 / 0.35), oklch(0.5 0.2 290 / 0.15) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
        <BlurReveal>
          <h2 className="text-balance text-3xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
            Sua autoridade começa quando seu conteúdo parece{" "}
            <span className="text-gradient">profissional</span>.
          </h2>
        </BlurReveal>
        <ScaleReveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
            Transforme suas ideias em conteúdo que gera credibilidade, conexão e oportunidades.
            O TMG Estúdio está pronto para elevar sua marca ao próximo nível.
          </p>
        </ScaleReveal>
        <ScaleReveal delay={0.25}>
          <div className="mt-10 flex w-full flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary animate-pulse-purple inline-flex w-full scale-[0.97] items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold shadow-[var(--glow-purple)] transition-transform duration-300 hover:scale-105 hover:brightness-110 hover:animate-none active:scale-[0.98] motion-reduce:scale-100 motion-reduce:animate-none sm:w-auto sm:px-10 sm:py-5 sm:text-base"
            >
              AGENDAR MINHA GRAVAÇÃO
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full scale-[0.97] items-center justify-center gap-2 rounded-xl border border-green-neon/30 bg-green-neon px-8 py-4 text-sm font-bold text-white animate-pulse-cta shadow-[var(--glow-green)] transition-transform duration-300 hover:scale-105 hover:animate-none hover:bg-green-neon/90 motion-reduce:scale-100 motion-reduce:animate-none sm:w-auto sm:px-10 sm:py-5 sm:text-base"
            >
              <FaWhatsapp className="h-5 w-5 text-white" />
              FALAR NO WHATSAPP
            </a>
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
}
