import { motion, useInView, useMotionValue, useReducedMotion, useSpring, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 20,
  animateOnMount = false,
  duration = 0.6,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  animateOnMount?: boolean;
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const target = prefersReducedMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      {...(animateOnMount
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, margin: "-40px" } })}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function BlurReveal({
  children,
  delay = 0,
  className,
  animateOnMount = false,
  duration = 0.8,
  blur = 12,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  animateOnMount?: boolean;
  duration?: number;
  blur?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const target = prefersReducedMotion
    ? undefined
    : { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      className={className}
      initial={
        prefersReducedMotion ? false : { opacity: 0, y: 16, filter: `blur(${blur}px)` }
      }
      {...(animateOnMount
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, margin: "-50px" } })}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleReveal({
  children,
  delay = 0,
  className,
  animateOnMount = false,
  duration = 0.7,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  animateOnMount?: boolean;
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const target = prefersReducedMotion ? undefined : { opacity: 1, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
      {...(animateOnMount
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, margin: "-50px" } })}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PremiumReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, y: 28, filter: "blur(10px)", scale: 0.95 }
      }
      whileInView={
        prefersReducedMotion
          ? undefined
          : { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }
      }
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
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
  duration = 1.8,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(prefersReducedMotion ? to : 0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [duration, inView, prefersReducedMotion, to]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function MouseSpotlight() {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 25 });
  const sy = useSpring(y, { stiffness: 120, damping: 25 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [prefersReducedMotion, x, y]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-30 hidden h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        left: sx,
        top: sy,
        background:
          "radial-gradient(circle, oklch(0.66 0.22 303 / 0.1), oklch(0.55 0.24 320 / 0.04) 40%, transparent 65%)",
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
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute hidden rounded-full blur-[100px] md:block ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle, oklch(0.5 0.2 290 / 0.4), transparent 70%)",
      }}
      animate={prefersReducedMotion ? undefined : { y: [0, -30, 0], x: [0, 20, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 12, repeat: Infinity, ease: "easeInOut", delay }
      }
    />
  );
}
