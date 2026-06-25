import { Film, Lightbulb, Mic, Radio, Scissors, Video } from "lucide-react";

import service01 from "@/assets/service-01.webp";
import service02 from "@/assets/service-02.webp";
import service03 from "@/assets/service-03.webp";
import service04 from "@/assets/service-04.webp";
import service05 from "@/assets/service-05.webp";
import service06 from "@/assets/service-06.webp";

import { SectionHeader } from "../components/SectionHeader";
import { SpotlightCard } from "../components/SpotlightCard";
import { PremiumReveal } from "../primitives";

const services = [
  {
    img: service01,
    icon: Mic,
    title: "Gravação de Podcast",
    desc: "Produção completa para entrevistas e conteúdos.",
  },
  {
    img: service02,
    icon: Radio,
    title: "Podcast Remoto",
    desc: "Participantes em diferentes locais.",
  },
  {
    img: service03,
    icon: Film,
    title: "Produção Audiovisual",
    desc: "Vídeos institucionais e comerciais.",
  },
  {
    img: service04,
    icon: Scissors,
    title: "Cortes para Redes Sociais",
    desc: "Conteúdo otimizado para Instagram e TikTok.",
  },
  {
    img: service05,
    icon: Video,
    title: "Captação de Eventos",
    desc: "Registro profissional de eventos.",
  },
  {
    img: service06,
    icon: Lightbulb,
    title: "Consultoria de Conteúdo",
    desc: "Planejamento estratégico para posicionamento.",
  },
] as const;

export function Services() {
  return (
    <section id="servicos" className="section-shell overflow-x-clip">
      <SectionHeader kicker="Serviços" title="Tudo o que sua marca precisa" />
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
        {services.map((it, i) => (
          <PremiumReveal key={it.title} delay={(i % 3) * 0.08}>
            <SpotlightCard className="service-card group h-full overflow-hidden rounded-3xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  width={566}
                  height={417}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-purple shadow-[var(--glow-purple)] transition-transform duration-500 group-hover:scale-105">
                  <it.icon className="h-5 w-5 text-white" />
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </SpotlightCard>
          </PremiumReveal>
        ))}
      </div>
    </section>
  );
}
