import { SectionHeader } from "../components/SectionHeader";
import { DIFFERENTIAL_ITEMS } from "../data";
import { FloatingOrb, Reveal } from "../primitives";

export function Differentials() {
  return (
    <section className="section-shell max-w-5xl overflow-x-clip">
      <FloatingOrb className="-right-20 bottom-0" size={400} delay={2} />
      <SectionHeader
        kicker="Diferenciais"
        title={
          <>
            Por que o TMG entrega um <span className="text-gradient">resultado diferente</span>?
          </>
        }
      />
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {DIFFERENTIAL_ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <div className="flex h-full gap-4 rounded-3xl glass p-7 transition-transform hover:-translate-y-2">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-purple shadow-[var(--glow-purple)]">
                <it.icon className="h-6 w-6 text-white" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
