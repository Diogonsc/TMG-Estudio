import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "../primitives";

type SectionHeaderProps = {
  kicker: string;
  title: ReactNode;
  className?: string;
  delay?: number;
};

export function SectionHeader({ kicker, title, className, delay }: SectionHeaderProps) {
  return (
    <Reveal className={cn("mx-auto max-w-2xl text-center", className)} delay={delay}>
      <span className="text-sm font-semibold uppercase tracking-widest text-purple-neon">{kicker}</span>
      <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">{title}</h2>
    </Reveal>
  );
}
