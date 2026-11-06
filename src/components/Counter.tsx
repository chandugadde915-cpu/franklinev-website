import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function Counter({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "120px 0px" });
  const reduced = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 90, damping: 24 });
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView && reduced && textRef.current) textRef.current.textContent = value.toFixed(decimals);
    else if (inView) mv.set(value);
  }, [inView, mv, value, reduced, decimals]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (textRef.current) textRef.current.textContent = v.toFixed(decimals);
    });
  }, [spring, decimals]);

  return (
    <span ref={ref}>
      <span ref={textRef}>0</span>
      {suffix}
    </span>
  );
}
