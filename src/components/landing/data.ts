import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  Compass,
  Layers,
  Lightbulb,
  Mic,
  Scissors,
  Sparkles,
  Stethoscope,
  Zap,
} from "lucide-react";

import {
  galleryBts,
  galleryGear,
  galleryHost,
  galleryMic,
  heroStudio,
  studioRoom,
} from "./assets";

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#galeria", label: "Galeria" },
  { href: "#faq", label: "FAQ" },
] as const;

export const STATS = [
  { value: 100, suffix: "+", label: "Podcasts Produzidos" },
  { value: 500, suffix: "+", label: "Horas Gravadas" },
  { value: 50, suffix: "+", label: "Clientes Atendidos" },
  { value: 5, suffix: "★", label: "Estrelas no Google", decimals: 0 },
] as const;

export const AUDIENCE_ITEMS: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Briefcase, title: "Empreendedores", desc: "Fortaleça sua autoridade no mercado." },
  {
    icon: Stethoscope,
    title: "Profissionais Liberais",
    desc: "Advogados, médicos, consultores e especialistas.",
  },
  { icon: Sparkles, title: "Criadores de Conteúdo", desc: "Produza conteúdo com qualidade profissional." },
  { icon: Building2, title: "Empresas", desc: "Crie comunicação institucional e posicionamento." },
];

export const DIFFERENTIAL_ITEMS: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Award, title: "Qualidade Profissional", desc: "Captação de áudio e vídeo em padrão profissional." },
  { icon: Layers, title: "Estrutura Completa", desc: "Ambiente preparado para gravações de alto nível." },
  { icon: Compass, title: "Direção de Conteúdo", desc: "Orientação para extrair o melhor da sua comunicação." },
  { icon: Zap, title: "Agilidade na Entrega", desc: "Processos organizados para acelerar resultados." },
];

export const PROCESS_STEPS: { icon: LucideIcon; title: string }[] = [
  { icon: Calendar, title: "Agendamento" },
  { icon: Lightbulb, title: "Planejamento" },
  { icon: Mic, title: "Gravação" },
  { icon: Scissors, title: "Edição" },
  { icon: Award, title: "Entrega" },
];

export const GALLERY_IMAGES = [
  { src: galleryMic, alt: "Microfone profissional" },
  { src: galleryBts, alt: "Bastidores da gravação" },
  { src: galleryGear, alt: "Equipamentos do estúdio" },
  { src: galleryHost, alt: "Host gravando podcast" },
  { src: studioRoom, alt: "Sala do estúdio" },
  { src: heroStudio, alt: "Gravação de podcast" },
] as const;

export const TESTIMONIALS = [
  { name: "Carla Mendes", role: "Advogada", text: "Profissionalismo do início ao fim. Meu conteúdo ganhou outro nível." },
  {
    name: "Rafael Souza",
    role: "Empreendedor",
    text: "Estrutura impecável e direção que fez toda a diferença na minha autoridade.",
  },
  {
    name: "Dra. Júlia Lima",
    role: "Médica",
    text: "Me senti à vontade e o resultado superou expectativas. Recomendo demais.",
  },
  {
    name: "Pedro Alves",
    role: "Criador de Conteúdo",
    text: "Qualidade de áudio e vídeo de cinema. Time atencioso e ágil.",
  },
  {
    name: "Marina Costa",
    role: "Consultora",
    text: "O posicionamento que construí com os episódios gerou novos clientes.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "Qual o valor da gravação?",
    a: "Cada projeto é personalizado conforme suas necessidades. Fale conosco no WhatsApp para um orçamento sob medida.",
  },
  {
    q: "Vocês oferecem edição?",
    a: "Sim. Oferecemos edição profissional completa, além de cortes otimizados para redes sociais.",
  },
  {
    q: "Quanto tempo leva a entrega?",
    a: "Os prazos variam conforme o escopo, mas trabalhamos com processos ágeis para acelerar seus resultados.",
  },
  {
    q: "Posso gravar sozinho?",
    a: "Sim. Atendemos episódios solo, entrevistas e formatos remotos com participantes em diferentes locais.",
  },
  {
    q: "É necessário experiência?",
    a: "Não. Nossa direção de conteúdo orienta você em cada etapa para extrair o melhor da sua comunicação.",
  },
] as const;
