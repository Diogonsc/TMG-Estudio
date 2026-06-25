import { cn } from "@/lib/utils";

import { SectionHeader } from "../components/SectionHeader";
import { CLIENTES_IMAGES } from "../data";
import { PremiumReveal } from "../primitives";

interface LogoItem {
  src: string;
  alt: string;
  name: string;
}

const row1: LogoItem[] = [...CLIENTES_IMAGES];
const row2: LogoItem[] = [...CLIENTES_IMAGES].reverse();

function Track({ items }: { items: LogoItem[] }) {
  return (
    <div className="flex">
      {items.map((item, index) => (
        <div
          key={`${item.name}-${index}`}
          className="group mx-8 flex w-max shrink-0 flex-col items-center gap-4 px-1 py-3 sm:mx-10"
        >
          <div className="flex h-[88px] w-[122px] origin-center items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] px-4 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-purple-neon/20 group-hover:shadow-[var(--glow-purple)] sm:h-[96px] sm:w-[130px]">
            <img
              src={item.src}
              alt={item.alt}
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
          <p className="whitespace-nowrap text-center text-xs font-medium text-muted-foreground transition-colors duration-500 group-hover:text-foreground sm:text-sm">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  className,
}: {
  items: LogoItem[];
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden py-4 sm:py-5", className)}>
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
    <section id="clientes" className="section-shell relative w-full overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[70%] -translate-y-1/2 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.66 0.22 303 / 0.1) 0%, transparent 65%)",
        }}
      />

      <PremiumReveal>
        <SectionHeader
          kicker="Clientes"
          title="Marcas que confiam no TMG"
          subtitle="Podcasts, empresas e criadores que já produziram conteúdo em nosso estúdio."
          className="px-4 sm:px-6"
        />
      </PremiumReveal>

      <PremiumReveal delay={0.15} className="mt-12 sm:mt-16">
        <MarqueeRow items={row1} className="pb-0 sm:pb-0" />
        <MarqueeRow items={row2} reverse className="pt-2 sm:pt-3" />
      </PremiumReveal>
    </section>
  );
}
