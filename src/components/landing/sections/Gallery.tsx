import { useState } from "react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SectionHeader } from "../components/SectionHeader";
import { GALLERY_IMAGES } from "../data";
import { Reveal } from "../primitives";

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  const activeImage = GALLERY_IMAGES.find((im) => im.src === active);

  return (
    <section id="galeria" className="section-shell overflow-x-clip">
      <SectionHeader kicker="Galeria" title="Por dentro do estúdio" />
      <div className="mt-16 columns-2 gap-5 md:columns-3 md:gap-6 [&>*]:mb-5 md:[&>*]:mb-6">
        {GALLERY_IMAGES.map((im, i) => (
          <Reveal key={im.src} delay={(i % 3) * 0.06}>
            <button
              type="button"
              onClick={() => setActive(im.src)}
              aria-label={`Ampliar imagem: ${im.alt}`}
              className="group block w-full overflow-hidden rounded-2xl glass transition-all hover:-translate-y-2 hover:glow-purple"
            >
              <img
                src={im.src}
                alt={im.alt}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </button>
          </Reveal>
        ))}
      </div>
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-white/10 bg-card/80 p-2 backdrop-blur-xl">
          <DialogTitle className="sr-only">
            {activeImage ? `Ampliação: ${activeImage.alt}` : "Ampliação de imagem"}
          </DialogTitle>
          {activeImage && (
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              width={800}
              height={600}
              decoding="async"
              className="w-full rounded-xl object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
