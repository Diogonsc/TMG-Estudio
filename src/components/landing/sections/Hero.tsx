import { ArrowRight, Star } from "lucide-react";

import { WHATSAPP_LINK } from "@/lib/site";
import { Reveal } from "../primitives";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-x-clip overflow-y-hidden pt-24 pb-12 sm:min-h-screen sm:pt-28 sm:pb-16">
      <video
        src="/videos/video-tmg.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[min(100vw,28rem)] w-[min(100vw,28rem)] -translate-x-1/2 rounded-full blur-[80px] sm:h-[700px] sm:w-[700px] sm:blur-[120px]"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.2 290 / 0.35), transparent 70%)" }}
      />
      <div className="relative z-10 w-full max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <div className="mx-auto mb-5 flex w-fit max-w-full flex-col items-center gap-1.5 rounded-full glass px-3 py-1.5 text-[11px] leading-snug sm:mb-6 sm:flex-row sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs">
            <span className="flex shrink-0 text-purple-neon">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" />
              ))}
            </span>
            <span className="text-center text-muted-foreground sm:text-left">
              5.0 no Google · +100 episódios produzidos
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-balance text-[1.75rem] font-extrabold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
            Seu podcast merece mais do que uma <span className="text-gradient">gravação</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
            Transformamos conversas em conteúdo profissional que fortalece sua autoridade, gera
            confiança e posiciona sua marca.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-primary animate-pulse-purple inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold hover:scale-[1.02] hover:brightness-110 hover:animate-none active:scale-[0.98] motion-reduce:animate-none sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Agendar Gravação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="btn-outline inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold hover:scale-[1.02] hover:border-purple-neon hover:bg-purple-neon/20 hover:shadow-[var(--glow-purple)] active:scale-[0.98] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Ver Estrutura
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
