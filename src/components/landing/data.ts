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
  gallery01,
  gallery02,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  teamHost,
  teamOwner,
  cliente01,
  cliente02,
  cliente03,
  cliente04,
} from "./assets";

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#galeria", label: "Galeria" },
  { href: "#faq", label: "FAQ" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Podcasts Produzidos" },
  { value: 1000, suffix: "+", label: "Horas Gravadas" },
  { value: 200, suffix: "+", label: "Clientes Atendidos" },
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
  { src: gallery01, alt: "Estúdio TMG — ambiente de gravação" },
  { src: gallery02, alt: "Equipamentos profissionais do estúdio" },
  { src: gallery04, alt: "Bastidores de produção audiovisual" },
  { src: gallery05, alt: "Gravação em andamento no estúdio" },
  { src: gallery06, alt: "Estrutura e iluminação do estúdio" },
  { src: gallery07, alt: "Produção de conteúdo no TMG Estúdio" },
] as const;

export const STUDIO_VIDEOS = [
  {
    src: "/videos/studio-01.mp4",
    poster: gallery01,
    title: "Tour pelo estúdio",
  },
  {
    src: "/videos/studio-02.mp4",
    poster: gallery02,
    title: "Equipamentos em ação",
  },
  {
    src: "/videos/studio-03.mp4",
    poster: gallery07,
    title: "Produção de podcast",
  },
  {
    src: "/videos/studio-04.mp4",
    poster: gallery04,
    title: "Bastidores da gravação",
  },
  {
    src: "/videos/studio-05.mp4",
    poster: gallery05,
    title: "Gravação em andamento",
  },
  {
    src: "/videos/studio-06.mp4",
    poster: gallery06,
    title: "Estrutura do TMG Estúdio",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    image: teamOwner,
    role: "Responsável Técnico",
    description:
      "Responsável pela operação técnica do estúdio, direção de gravação, captação de áudio e vídeo e garantia da qualidade das produções realizadas no TMG Estúdio.",
  },
  {
    image: teamHost,
    role: "Host e Atendimento",
    description:
      "Recepção dos convidados, suporte durante as gravações e condução da experiência dentro do estúdio, garantindo conforto, organização e profissionalismo em cada produção.",
  },
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


export const CLIENTES_IMAGES = [
  {
    src: cliente01,
    alt: "Cliente 01",
    name: "Papo de Crente Cast"
  },
  {
    src: cliente02,
    alt: "Cliente 02",
    name: "Brabo Cast"
  },
  {
    src: cliente03,
    alt: "Cliente 03",
    name: "TMG Cast"
  },
  {
    src: cliente04,
    alt: "Cliente 04",
    name: "Alini Cast"
  }
]