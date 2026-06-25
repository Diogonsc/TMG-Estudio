import { motion } from "framer-motion";

import { SectionHeader } from "../components/SectionHeader";
import { PROCESS_STEPS } from "../data";
import { PremiumReveal } from "../primitives";

function TimelineStep({
  step,
  index,
  isLast,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
  isLast: boolean;
}) {
  return (
    <PremiumReveal
      delay={index * 0.12}
      className="relative flex gap-5 md:flex-1 md:flex-col md:items-center md:gap-0 md:text-center"
    >
      {!isLast && (
        <motion.div
          className="absolute left-[1.65rem] top-14 bottom-0 w-px origin-top bg-purple-neon/30 md:hidden"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.12 + 0.2, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          <div className="h-full w-full bg-gradient-to-b from-purple-neon/60 to-purple-neon/10" />
        </motion.div>
      )}

      <div className="relative z-10 flex shrink-0 flex-col items-center">
        <motion.span
          className="grid h-14 w-14 place-items-center rounded-full border-2 border-purple-neon/50 bg-card/90 glass shadow-[var(--glow-purple)] backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <step.icon className="h-6 w-6 text-purple-neon" />
        </motion.span>
      </div>

      <motion.div
        className="pb-10 md:pb-0 md:pt-7"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: index * 0.12 + 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-neon/70">
          Etapa {index + 1}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold sm:text-xl">{step.title}</h3>
        <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-muted-foreground md:mx-auto">
          {step.desc}
        </p>
      </motion.div>
    </PremiumReveal>
  );
}

export function Process() {
  return (
    <section id="processo" className="section-shell overflow-x-clip">
      <SectionHeader kicker="Processo" title="Como funciona" />
      <div className="relative mt-16 md:mt-24">
        <div
          className="pointer-events-none absolute left-[6%] right-[6%] top-7 hidden h-px overflow-hidden md:block"
          aria-hidden
        >
          <motion.div
            className="h-full w-full bg-gradient-to-r from-transparent via-purple-neon/50 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left center" }}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-3">
          {PROCESS_STEPS.map((step, i) => (
            <TimelineStep
              key={step.title}
              step={step}
              index={i}
              isLast={i === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
