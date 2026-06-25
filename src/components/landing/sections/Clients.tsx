import { cn } from "@/lib/utils";

import { SectionHeader } from "../components/SectionHeader";
import { CLIENTES_IMAGES } from "../data";

interface LogoItem {
  src: string;
  alt: string;
  name: string;
}

const row1: LogoItem[] = [...CLIENTES_IMAGES];
const row2: LogoItem[] = [...CLIENTES_IMAGES].reverse();

interface MarqueeRowProps {
  items: LogoItem[];
  reverse?: boolean;
}

function Track({ items }: { items: LogoItem[] }) {
  return (
    <div className="flex">
      {items.map((item, index) => (
        <div
          key={`${item.name}-${index}`}
          className="group mx-[35px] flex shrink-0 flex-col items-center gap-3"
        >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="h-[70px] w-[98px] object-contain grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
          />
          <p className="max-w-[98px] truncate text-center text-xs font-medium text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: MarqueeRowProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        <Track items={items} />
        <Track items={items} />
        <Track items={items} />
        <Track items={items} />
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <section id="clientes" className="section-shell relative w-full overflow-x-clip py-16 sm:py-24">
      <SectionHeader
        kicker="Clientes"
        title="Marcas que confiam no TMG"
        subtitle="Podcasts, empresas e criadores que já produziram conteúdo em nosso estúdio."
        className="px-4 sm:px-6"
      />

      <div className="mt-10 space-y-10 sm:mt-14">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
