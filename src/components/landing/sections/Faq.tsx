import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "../components/SectionHeader";
import { FAQ_ITEMS } from "../data";
import { Reveal } from "../primitives";

export function Faq() {
  return (
    <section id="faq" className="section-shell max-w-3xl overflow-x-clip">
      <SectionHeader kicker="FAQ" title="Perguntas frequentes" />
      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="mt-14 space-y-3 sm:mt-16">
          {FAQ_ITEMS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] px-5 transition-colors data-[state=open]:border-purple-neon/25 data-[state=open]:bg-card/60 sm:px-6"
            >
              <AccordionTrigger className="min-h-11 py-4 text-left font-display text-base font-semibold text-foreground hover:no-underline sm:min-h-12 sm:py-5 sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="border-t border-white/8 pb-5 pt-1 text-sm leading-relaxed text-white/70 sm:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
