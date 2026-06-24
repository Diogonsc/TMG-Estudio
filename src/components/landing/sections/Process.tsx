import { SectionHeader } from "../components/SectionHeader";
import { PROCESS_STEPS } from "../data";
import { Reveal } from "../primitives";

export function Process() {
  return (
    <section id="processo" className="section-shell overflow-x-clip">
      <SectionHeader kicker="Processo" title="Como funciona" />
      <div className="relative mt-16 grid grid-cols-2 gap-8 md:grid-cols-5">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-purple-neon/40 to-transparent md:block" />
        {PROCESS_STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1} className="relative text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-card glass shadow-[var(--glow-purple)]">
              <s.icon className="h-6 w-6 text-purple-neon" />
            </span>
            <p className="mt-4 text-sm font-semibold text-muted-foreground">Etapa {i + 1}</p>
            <p className="font-display font-bold">{s.title}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
