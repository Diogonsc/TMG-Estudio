import { motion } from "framer-motion";

import { SectionHeader } from "../components/SectionHeader";
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

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {TEAM_MEMBERS.map((member, i) => (
          <PremiumReveal key={member.role} delay={i * 0.1}>
            <motion.article
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-purple-500/15 bg-white/[0.03] p-5 backdrop-blur-[20px] transition-[box-shadow] duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] sm:p-6"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative mx-auto w-full max-w-[280px] shrink-0 sm:max-w-none">
                <div className="absolute -inset-1 rounded-[18px] bg-gradient-to-b from-purple-500/20 to-transparent opacity-60" />
                <img
                  src={member.image}
                  alt={member.role}
                  loading="lazy"
                  className="relative aspect-[3/4] w-full rounded-2xl object-cover shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                />
              </div>
              <div className="mt-6 flex flex-1 flex-col text-center md:text-left">
                <h3 className="font-display text-xl font-bold text-purple-neon sm:text-2xl">{member.role}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {member.description}
                </p>
              </div>
            </motion.article>
          </PremiumReveal>
        ))}
      </div>

      <PremiumReveal className="mt-16 sm:mt-20" delay={0.2}>
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
