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
        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {FAQ_ITEMS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl glass border-none px-6 transition-colors data-[state=open]:bg-card/70"
            >
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
