import { Film, Lightbulb, Mic, Radio, Scissors, Video } from "lucide-react";

import service01 from "@/assets/service-01.jpeg";
import service02 from "@/assets/service-02.jpeg";
import service03 from "@/assets/service-03.png";
import service04 from "@/assets/service-04.jpeg";
import service05 from "@/assets/service-05.jpeg";
import service06 from "@/assets/service-06.png";

import { SectionHeader } from "../components/SectionHeader";
import { Reveal } from "../primitives";

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
    <section id="servicos" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeader kicker="Serviços" title="Tudo o que sua marca precisa" />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((it, i) => (
          <Reveal key={it.title} delay={(i % 3) * 0.08}>
            <div className="group h-full overflow-hidden rounded-3xl glass transition-all hover:-translate-y-2 hover:glow-purple">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="absolute bottom-3 left-4 grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-purple)] shadow-[var(--glow-purple)]">
                  <it.icon className="h-5 w-5 text-white" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
