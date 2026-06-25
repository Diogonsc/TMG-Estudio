import { motion } from "framer-motion";

import { SectionHeader } from "../components/SectionHeader";
import { SpotlightCard } from "../components/SpotlightCard";
import { TEAM_MEMBERS } from "../data";
import { FloatingOrb, PremiumReveal } from "../primitives";

export function Team() {
  return (
    <section id="equipe" className="section-shell overflow-x-clip">
      <FloatingOrb className="-right-24 top-10" size={320} delay={0.5} />
      <SectionHeader
        kicker="Equipe"
        title={
          <>
            Quem está por trás do <span className="whitespace-nowrap">TMG Estúdio</span>
          </>
        }
        subtitle="Mais do que equipamentos e estrutura, acreditamos que uma produção de qualidade depende das pessoas por trás de cada gravação."
      />

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {TEAM_MEMBERS.map((member, i) => (
          <PremiumReveal key={member.role} delay={i * 0.1}>
            <SpotlightCard className="h-full rounded-3xl">
              <motion.article
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-purple-500/15 bg-white/[0.03] p-6 backdrop-blur-[20px] transition-[box-shadow,border-color] duration-500 hover:border-purple-neon/25 hover:shadow-[var(--glow-purple)] sm:p-8"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative mx-auto w-full max-w-sm shrink-0 md:max-w-none">
                  <div className="absolute -inset-2 rounded-[20px] bg-gradient-to-b from-purple-neon/25 via-purple-neon/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={member.image}
                    alt={member.role}
                    loading="lazy"
                    className="relative aspect-[3/4] w-full rounded-2xl object-cover shadow-[0_24px_48px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-8 flex flex-1 flex-col text-center md:mt-10 md:text-left">
                  <h3 className="font-display text-2xl font-bold text-purple-neon sm:text-3xl">
                    {member.role}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-7">
                    {member.description}
                  </p>
                </div>
              </motion.article>
            </SpotlightCard>
          </PremiumReveal>
        ))}
      </div>

      <PremiumReveal className="mt-20 sm:mt-24" delay={0.2}>
        <div className="relative mx-auto max-w-3xl text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(168,85,247,0.18) 0%, transparent 70%)",
            }}
          />
          <p className="text-lg font-semibold leading-relaxed sm:text-xl md:text-2xl">
            Tecnologia, experiência e atendimento humanizado para transformar sua mensagem em
            conteúdo de{" "}
            <span className="text-gradient">autoridade</span>.
          </p>
        </div>
      </PremiumReveal>
    </section>
  );
}
