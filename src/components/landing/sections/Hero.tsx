import { ArrowRight, Star } from "lucide-react";

import { WHATSAPP_LINK } from "@/lib/site";
import { heroStudio } from "../assets";
import { Reveal } from "../primitives";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16">
      <img
        src={heroStudio}
        alt="Estúdio de podcast profissional TMG em Nova Iguaçu"
        width={1536}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover opacity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div
        className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.2 290 / 0.35), transparent 70%)" }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
            <span className="flex text-purple-neon">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="text-muted-foreground">5.0 no Google · +100 episódios produzidos</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl">
            Seu podcast merece mais do que uma <span className="text-gradient">gravação</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            Transformamos conversas em conteúdo profissional que fortalece sua autoridade, gera
            confiança e posiciona sua marca.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-purple)] px-7 py-3.5 font-semibold text-white shadow-[var(--glow-purple)] transition-transform hover:-translate-y-1"
            >
              Agendar Gravação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-semibold transition-transform hover:-translate-y-1"
            >
              Ver Estrutura
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
