import { FaWhatsapp } from "react-icons/fa6";
import { WHATSAPP_LINK } from "@/lib/site";
import { heroStudio } from "../assets";
import { Reveal } from "../primitives";

export function FinalCta() {
  return (
    <section className="relative w-full overflow-x-clip py-16 sm:py-28">
      <img
        src={heroStudio}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100vw,28rem)] w-[min(100vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.2 290 / 0.4), transparent 70%)" }}
      />
      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-balance text-2xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Sua autoridade começa quando seu conteúdo parece{" "}
            <span className="text-gradient">profissional</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:text-base">
            Transforme suas ideias em conteúdo que gera credibilidade, conexão e oportunidades.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary animate-pulse-purple inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold hover:scale-[1.02] hover:brightness-110 hover:animate-none active:scale-[0.98] motion-reduce:animate-none sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              AGENDAR MINHA GRAVAÇÃO
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-neon px-6 py-3.5 text-sm font-bold text-white animate-pulse-cta transition-transform hover:-translate-y-1 hover:animate-none hover:bg-green-neon/90 motion-reduce:animate-none sm:w-auto sm:px-8 sm:py-4 sm:text-base"
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
