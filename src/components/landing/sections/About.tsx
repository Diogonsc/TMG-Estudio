import { Award, Building2, Compass, Layers, TriangleAlert } from "lucide-react";

import tmgSubscribe from "@/assets/tmg-subscribe.png";
import { FloatingOrb, Reveal } from "../primitives";

export function About() {

  const handleSubscribe = () => {
    window.open("https://www.youtube.com/@TMGEst%C3%BAdio", "_blank");
  };

  return (
    <section id="sobre" className="relative mx-auto max-w-6xl px-6 py-24">
      <FloatingOrb className="-left-20 top-20" size={350} />
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-purple-neon">
          Sobre o TMG
        </span>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">
          Gravar não é suficiente. <span className="text-gradient">Posicionar</span> é o que muda o
          jogo.
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-[1.45fr_1fr_1fr] md:grid-rows-2 md:gap-4">
        <Reveal className="md:row-span-2" delay={0.05}>
          <div onClick={handleSubscribe} className="cursor-pointer group relative h-full min-h-[320px] overflow-hidden rounded-3xl glass md:min-h-[440px]">
            <img
              src={tmgSubscribe}
              alt="Interior do estúdio TMG"
              width={1200}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
            
          </div>
        </Reveal>
        <Reveal className="md:col-span-2" delay={0.1}>
          <div className="flex h-full flex-col justify-center rounded-2xl glass p-5 md:p-6">
            <p className="text-base leading-relaxed text-muted-foreground md:text-[0.95rem]">
              Muita gente grava conteúdo.{" "}
              <span className="font-semibold text-foreground">
                Pouca gente entrega imagem que constrói autoridade.
              </span>{" "}
              A diferença entre um vídeo que passa despercebido e outro que gera percepção de valor
              está em três pilares:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Layers className="mt-0.5 h-4 w-4 shrink-0 text-purple-neon" />
                <span>
                  <span className="font-medium text-foreground">Estrutura técnica</span> — captura,
                  luz e áudio em padrão profissional
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-neon" />
                <span>
                  <span className="font-medium text-foreground">Ambiente certo</span> — espaço
                  preparado para transmitir credibilidade
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Compass className="mt-0.5 h-4 w-4 shrink-0 text-purple-neon" />
                <span>
                  <span className="font-medium text-foreground">Olhar estratégico</span> — direção
                  sobre o que está sendo produzido
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex h-full flex-col rounded-2xl glass p-5 transition-transform hover:-translate-y-2 md:p-6">
            <TriangleAlert className="h-6 w-6 text-purple-neon" />
            <p className="mt-3 font-display text-base font-bold">O custo do amadorismo</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Estúdio improvisado entrega resultado improvisado. Iluminação fraca, áudio sujo e
              enquadramento amador comunicam exatamente isso para quem assiste:{" "}
              <span className="font-medium text-foreground">amadorismo</span>. E no digital, a
              primeira percepção vale mais que o conteúdo em si.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex h-full flex-col rounded-2xl glass p-5 transition-transform hover:-translate-y-2 md:p-6">
            <Award className="h-6 w-6 text-purple-neon" />
            <p className="mt-3 font-display text-base font-bold">Por isso existe o TMG</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              O TMG Estúdio existe para resolver esse problema. Aqui, cada detalhe foi pensado para
              que o resultado final{" "}
              <span className="font-medium text-foreground">
                reforce a marca de quem está na frente das câmeras
              </span>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
