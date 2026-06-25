import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "../primitives";

type SectionHeaderProps = {
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  delay?: number;
};

export function SectionHeader({ kicker, title, subtitle, className, delay }: SectionHeaderProps) {
  return (
    <Reveal className={cn("mx-auto max-w-2xl text-center", className)} delay={delay}>
      <span className="text-sm font-semibold uppercase tracking-widest text-purple-neon">{kicker}</span>
      <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl md:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}
