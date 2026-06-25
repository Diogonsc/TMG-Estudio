import { AuroraBackground } from "../components/AuroraBackground";
import { SectionHeader } from "../components/SectionHeader";
import { DIFFERENTIAL_ITEMS } from "../data";
import { PremiumReveal } from "../primitives";

export function Differentials() {
  return (
    <section className="section-shell relative max-w-5xl overflow-x-clip">
      <AuroraBackground intensity="subtle" />
      <div className="relative z-10">
        <SectionHeader
          kicker="Diferenciais"
          title={
            <>
              Por que o TMG entrega um <span className="text-gradient">resultado diferente</span>?
            </>
          }
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {DIFFERENTIAL_ITEMS.map((it, i) => (
            <PremiumReveal key={it.title} delay={i * 0.08}>
              <div className="group premium-card flex h-full gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-purple shadow-[var(--glow-purple)] transition-transform duration-500 group-hover:scale-105">
                  <it.icon className="h-7 w-7 text-white" />
                </span>
                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-xl font-bold">{it.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </PremiumReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
