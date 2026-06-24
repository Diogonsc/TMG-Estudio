import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { SectionHeader } from "../components/SectionHeader";
import { TESTIMONIALS } from "../data";

export function Testimonials() {
  const row = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative overflow-hidden py-24">
      <SectionHeader
        kicker="Depoimentos"
        title="★★★★★ 5.0 no Google"
        className="px-6"
      />
      <div className="relative mt-14 flex">
        <motion.div
          className="flex shrink-0 gap-5 pr-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {row.map((t, i) => (
            <div key={`${t.name}-${i}`} className="w-[320px] shrink-0 rounded-3xl glass p-7">
              <div className="flex text-purple-neon">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-purple)] font-bold text-white">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
