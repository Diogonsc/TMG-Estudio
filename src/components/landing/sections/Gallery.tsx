import { useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SectionHeader } from "../components/SectionHeader";
import { GALLERY_IMAGES } from "../data";
import { Reveal } from "../primitives";

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="galeria" className="section-shell overflow-x-clip">
      <SectionHeader kicker="Galeria" title="Por dentro do estúdio" />
      <div className="mt-14 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {GALLERY_IMAGES.map((im, i) => (
          <Reveal key={im.src} delay={(i % 3) * 0.06}>
            <button
              onClick={() => setActive(im.src)}
              className="group block w-full overflow-hidden rounded-2xl glass transition-all hover:-translate-y-2 hover:glow-purple"
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </button>
          </Reveal>
        ))}
      </div>
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-white/10 bg-card/80 p-2 backdrop-blur-xl">
          {active && (
            <img src={active} alt="Ampliação" className="w-full rounded-xl object-contain" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
