import { Counter, Reveal } from "../primitives";
import { STATS } from "../data";

export function Stats() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="glass rounded-2xl p-6 text-center transition-transform hover:-translate-y-2 hover:glow-purple">
              <div className="font-display text-4xl font-extrabold text-gradient md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} decimals={"decimals" in s ? s.decimals : 0} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
