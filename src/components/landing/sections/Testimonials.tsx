import { useState } from "react";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

import { SectionHeader } from "../components/SectionHeader";
import { SpotlightCard } from "../components/SpotlightCard";
import { TESTIMONIALS } from "../data";

type Testimonial = (typeof TESTIMONIALS)[number];

function TestimonialCard({
  testimonial,
  highlighted,
}: {
  testimonial: Testimonial;
  highlighted?: boolean;
}) {
  return (
    <SpotlightCard
      className={cn(
        "mx-3 h-[22rem] w-[min(88vw,24rem)] shrink-0 rounded-3xl sm:mx-4 sm:h-[24rem] sm:w-[26rem]",
        highlighted && "z-10",
      )}
      spotlightSize={400}
      spotlightOpacity={highlighted ? 0.18 : 0.1}
    >
      <div
        className={cn(
          "flex h-full flex-col rounded-3xl glass p-8 transition-all duration-500 sm:p-10",
          highlighted
            ? "scale-[1.02] border-purple-neon/30 shadow-[var(--glow-purple)]"
            : "border border-white/10",
        )}
      >
        <div className="flex shrink-0 items-center gap-1 text-purple-neon">
          {Array.from({ length: 5 }).map((_, j) => (
            <Star
              key={j}
              className={cn(
                "h-5 w-5 fill-current drop-shadow-[0_0_8px_oklch(0.66_0.22_303_/_0.5)]",
                highlighted && "scale-110",
              )}
            />
          ))}
          <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-purple-neon">
            5.0
          </span>
        </div>
        <p className="mt-5 flex-1 text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="mt-auto flex shrink-0 items-center gap-4 border-t border-white/10 pt-6">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-purple text-base font-bold text-white shadow-[var(--glow-purple)]">
            {testimonial.name.charAt(0)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{testimonial.name}</p>
            <p className="truncate text-sm text-white/60">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Testimonial[];
  reverse?: boolean;
}) {
  const [paused, setPaused] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setHoveredKey(null);
      }}
    >
      <div
        className={cn(
          "flex w-max items-stretch",
          reverse ? "animate-marquee-slow-reverse" : "animate-marquee-slow",
          paused && "[animation-play-state:paused]",
        )}
      >
        {duplicated.map((t, i) => {
          const key = `${t.name}-${i}`;
          return (
            <div
              key={key}
              className="flex"
              onMouseEnter={() => setHoveredKey(key)}
              onMouseLeave={() => setHoveredKey(null)}
            >
              <TestimonialCard testimonial={t} highlighted={hoveredKey === key} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Testimonials() {
  const row1 = [...TESTIMONIALS];
  const row2 = [...TESTIMONIALS].reverse();

  return (
    <section className="relative w-full overflow-x-clip py-20 sm:py-28 md:py-32">
      <SectionHeader
        kicker="Depoimentos"
        title="★★★★★ 5.0 no Google"
        className="px-4 sm:px-6"
      />

      <div className="mt-14 space-y-8 sm:mt-16 sm:space-y-10">
        <MarqueeRow items={row1} />
      </div>
    </section>
  );
}
