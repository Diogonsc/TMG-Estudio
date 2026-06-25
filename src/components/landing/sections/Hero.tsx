import { ArrowRight, Star } from "lucide-react";

import { WHATSAPP_LINK } from "@/lib/site";
import { AuroraBackground } from "../components/AuroraBackground";
import { HERO_STATS } from "../data";
import { BlurReveal, Counter, Reveal, ScaleReveal } from "../primitives";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-x-clip overflow-y-hidden pt-24 pb-16 sm:min-h-screen sm:pt-28 sm:pb-20">
      <video
        src="/videos/video-tmg.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full scale-105 object-cover"
      />

      {/* Overlay preto para contraste e legibilidade */}
      <div className="absolute inset-0 z-[1] bg-black/55" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/40 via-black/60 to-background" />

      <div
        aria-hidden
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 40%, transparent 30%, oklch(0.05 0.005 290 / 0.6) 100%)",
        }}
      />

      <AuroraBackground className="z-[4]" intensity="subtle" />

      <div className="relative z-10 w-full max-w-5xl px-4 text-center sm:px-6">
        <BlurReveal>
          <h1 className="text-balance text-[2rem] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_32px_rgba(0,0,0,0.8)] sm:text-6xl md:text-7xl lg:text-8xl">
            Seu podcast merece mais do que uma{" "}
            <span className="text-gradient">gravação</span>.
          </h1>
        </BlurReveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg md:text-xl">
            Transformamos conversas em conteúdo profissional que fortalece sua autoridade, gera
            confiança e posiciona sua marca.
          </p>
        </Reveal>

        <ScaleReveal delay={0.25}>
          <div className="mx-auto mt-8 w-fit max-w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-5 backdrop-blur-sm sm:mt-10 sm:px-8 sm:py-6">
            <div className="flex items-center justify-center gap-2">
              <span className="flex text-purple-neon">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
                ))}
              </span>
              <span className="text-sm font-semibold text-white sm:text-base">5.0 no Google</span>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-extrabold text-gradient sm:text-3xl">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScaleReveal>

        <Reveal delay={0.35}>
          <div className="mt-10 flex w-full flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-primary inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold shadow-[var(--glow-purple)] transition-transform duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] sm:w-auto sm:min-h-12 sm:px-10 sm:text-base"
            >
              Agendar Gravação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-transparent px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:border-purple-neon hover:bg-purple-neon/10 active:scale-[0.98] sm:w-auto sm:min-h-12 sm:px-10 sm:text-base"
            >
              Ver Estrutura
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
