import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type AuroraBackgroundProps = {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
};

const blobs = [
  {
    className: "left-[-10%] top-[-15%] h-[55%] w-[55%]",
    color: "radial-gradient(circle, oklch(0.66 0.22 303 / 0.35), transparent 70%)",
    animate: { x: [0, 60, 20, 0], y: [0, 30, 60, 0], scale: [1, 1.08, 0.96, 1] },
    duration: 22,
  },
  {
    className: "right-[-5%] top-[10%] h-[50%] w-[45%]",
    color: "radial-gradient(circle, oklch(0.55 0.24 320 / 0.28), transparent 70%)",
    animate: { x: [0, -50, -20, 0], y: [0, 40, 10, 0], scale: [1, 0.94, 1.06, 1] },
    duration: 26,
  },
  {
    className: "bottom-[-20%] left-[20%] h-[60%] w-[50%]",
    color: "radial-gradient(circle, oklch(0.5 0.2 285 / 0.3), transparent 70%)",
    animate: { x: [0, 40, -30, 0], y: [0, -40, -10, 0], scale: [1, 1.1, 1, 1] },
    duration: 30,
  },
  {
    className: "bottom-[5%] right-[15%] h-[40%] w-[35%]",
    color: "radial-gradient(circle, oklch(0.62 0.26 330 / 0.22), transparent 70%)",
    animate: { x: [0, -30, 20, 0], y: [0, 20, -30, 0], scale: [1, 1.05, 0.98, 1] },
    duration: 24,
  },
] as const;

const intensityOpacity = {
  subtle: "opacity-60",
  medium: "opacity-80",
  strong: "opacity-100",
} as const;

export function AuroraBackground({ className, intensity = "subtle" }: AuroraBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className={cn("absolute inset-0", intensityOpacity[intensity])}>
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className={cn("absolute rounded-full blur-[100px] sm:blur-[140px]", blob.className)}
            style={{ background: blob.color }}
            animate={blob.animate}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, oklch(0.66 0.22 303 / 0.06), transparent 70%)",
        }}
      />
    </div>
  );
}
