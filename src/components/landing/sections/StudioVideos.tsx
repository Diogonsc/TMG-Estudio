import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { SectionHeader } from "../components/SectionHeader";
import { STUDIO_VIDEOS } from "../data";
import { PremiumReveal } from "../primitives";

function VideoCard({
  index,
  onOpen,
}: {
  index: number;
  onOpen: (index: number) => void;
}) {
  const video = STUDIO_VIDEOS[index];

  return (
    <PremiumReveal delay={(index % 3) * 0.06}>
      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`Assistir: ${video.title}`}
        className="group relative block w-full overflow-hidden rounded-2xl glass transition-all hover:-translate-y-2 hover:glow-purple"
      >
        <div className="relative aspect-[9/16] w-full bg-black/30">
          <video
            src={video.src}
            poster={video.poster}
            muted
            loop
            playsInline
            preload="none"
            onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
            onMouseLeave={(e) => {
              const v = e.currentTarget as HTMLVideoElement;
              v.pause();
              v.currentTime = 0;
            }}
            onTouchStart={(e) => (e.currentTarget as HTMLVideoElement).play()}
            className="h-full w-full object-contain transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-75"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />
          <span className="pointer-events-none absolute inset-0 grid place-items-center">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-black/40 text-white opacity-80 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-purple-neon/40 group-hover:bg-black/60 group-hover:opacity-100 group-hover:shadow-[var(--glow-purple)]">
              <Play className="h-6 w-6 fill-white" aria-hidden />
            </span>
          </span>
        </div>
      </button>
    </PremiumReveal>
  );
}

function VideoModal({
  activeIndex,
  onClose,
  onNavigate,
}: {
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const video = STUDIO_VIDEOS[activeIndex];
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < STUDIO_VIDEOS.length - 1;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onNavigate(activeIndex - 1);
      if (e.key === "ArrowRight" && hasNext) onNavigate(activeIndex + 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, hasNext, hasPrev, onClose, onNavigate]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => undefined);
    document.querySelector<HTMLElement>('[role="dialog"]')?.focus();
  }, [activeIndex]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Reprodutor de vídeo"
      tabIndex={-1}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/10"
        aria-label="Fechar"
      >
        <X className="h-5 w-5" aria-hidden />
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(activeIndex - 1);
          }}
          className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:left-6 sm:h-12 sm:w-12"
          aria-label="Vídeo anterior"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden />
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(activeIndex + 1);
          }}
          className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:right-6 sm:h-12 sm:w-12"
          aria-label="Próximo vídeo"
        >
          <ChevronRight className="h-6 w-6" aria-hidden />
        </button>
      )}

      <motion.div
        tabIndex={-1}
        className="w-full max-w-5xl"
        initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <video
          key={video.src}
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          controls
          playsInline
          preload="metadata"
          className="max-h-[80vh] w-full rounded-2xl bg-black object-contain shadow-[0_0_60px_rgba(168,85,247,0.2)]"
        />
        <p className="mt-4 text-center text-sm font-medium text-white/80 sm:text-base">{video.title}</p>
        <p className="mt-1 text-center text-xs text-white/40">
          {activeIndex + 1} / {STUDIO_VIDEOS.length}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function StudioVideos() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => setActiveIndex(null), []);
  const handleNavigate = useCallback((index: number) => setActiveIndex(index), []);

  return (
    <section id="videos" className="section-shell overflow-x-clip">
      <SectionHeader
        kicker="Vídeos"
        title="Veja o TMG Estúdio em ação"
        subtitle="Conheça nossa estrutura, bastidores e produções através de vídeos reais gravados em nosso estúdio."
      />
      <div className="mt-16 columns-2 gap-5 md:columns-3 md:gap-6 [&>*]:mb-5 md:[&>*]:mb-6">
        {STUDIO_VIDEOS.map((_, i) => (
          <VideoCard key={STUDIO_VIDEOS[i].src} index={i} onOpen={setActiveIndex} />
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <VideoModal
            activeIndex={activeIndex}
            onClose={handleClose}
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
