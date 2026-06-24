import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function MouseSpotlight() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 25 });
  const sy = useSpring(y, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-30 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        left: sx,
        top: sy,
        background:
          "radial-gradient(circle, oklch(0.66 0.22 303 / 0.08), transparent 60%)",
      }}
    />
  );
}

export function FloatingOrb({
  className,
  size = 400,
  delay = 0,
}: {
  className?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[100px] ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle, oklch(0.5 0.2 290 / 0.4), transparent 70%)",
      }}
      animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}