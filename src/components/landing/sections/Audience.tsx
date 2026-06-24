import { SectionHeader } from "../components/SectionHeader";
import { AUDIENCE_ITEMS } from "../data";
import { Reveal } from "../primitives";

export function Audience() {
  return (
    <section className="section-shell overflow-x-clip">
      <SectionHeader kicker="Para quem é" title="Feito para quem leva a imagem a sério" />
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {AUDIENCE_ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <div className="group h-full rounded-3xl glass p-7 transition-all hover:-translate-y-2 hover:glow-purple">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-neon/20 ring-1 ring-purple-neon/30 transition-colors group-hover:bg-gradient-purple">
                <it.icon className="h-6 w-6 text-purple-neon transition-colors group-hover:text-white" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
