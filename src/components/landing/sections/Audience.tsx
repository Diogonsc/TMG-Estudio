import { SectionHeader } from "../components/SectionHeader";
import { AUDIENCE_ITEMS } from "../data";
import { PremiumReveal } from "../primitives";

export function Audience() {
  return (
    <section className="section-shell overflow-x-clip">
      <SectionHeader kicker="Para quem é" title="Feito para quem leva a imagem a sério" />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {AUDIENCE_ITEMS.map((it, i) => (
          <PremiumReveal key={it.title} delay={i * 0.08}>
            <div className="group premium-card flex h-full flex-col">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-purple-neon/20 ring-1 ring-purple-neon/30 transition-all duration-500 group-hover:bg-gradient-purple group-hover:shadow-[var(--glow-purple)]">
                <it.icon className="h-7 w-7 text-purple-neon transition-colors duration-500 group-hover:text-white" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          </PremiumReveal>
        ))}
      </div>
    </section>
  );
}
