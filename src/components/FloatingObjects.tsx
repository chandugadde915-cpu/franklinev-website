import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Battery, Zap, Leaf, Gauge } from "lucide-react";

interface FloatObject {
  Icon: typeof Battery;
  label: string;
  x: string;
  y: string;
  delay: number;
  depth: number;
  tint: string;
}

const objects: FloatObject[] = [
  { Icon: Zap, label: "60 km/h", x: "8%", y: "20%", delay: 0, depth: 30, tint: "from-primary/20 to-accent/10" },
  { Icon: Battery, label: "~100 km range", x: "82%", y: "18%", delay: 0.6, depth: 50, tint: "from-accent/20 to-primary/10" },
  { Icon: Leaf, label: "Zero emissions", x: "12%", y: "72%", delay: 1.2, depth: 40, tint: "from-accent/25 to-primary/10" },
  { Icon: Gauge, label: "Cruise control", x: "85%", y: "68%", delay: 0.3, depth: 35, tint: "from-primary/20 to-accent/15" },
];

export function FloatingObjects() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left - r.width / 2) / r.width);
      my.set((e.clientY - r.top - r.height / 2) / r.height);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* gradient blobs */}
      <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl" />

      {objects.map((o, i) => (
        <FloatItem key={i} obj={o} smx={smx} smy={smy} />
      ))}
    </div>
  );
}

function FloatItem({
  obj,
  smx,
  smy,
}: {
  obj: FloatObject;
  smx: ReturnType<typeof useSpring>;
  smy: ReturnType<typeof useSpring>;
}) {
  const tx = useTransform(smx, (v) => v * obj.depth);
  const ty = useTransform(smy, (v) => v * obj.depth);
  const { Icon } = obj;
  return (
    <motion.div
      style={{ left: obj.x, top: obj.y, x: tx, y: ty }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: obj.delay, duration: 0.8 }}
      className="absolute"
    >
      <div
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full glass-card shadow-soft bg-gradient-to-br ${obj.tint}`}
        style={{ animation: `float-bob 6s ease-in-out infinite`, animationDelay: `${obj.delay}s` }}
      >
        <span className="w-7 h-7 rounded-full bg-primary-gradient grid place-items-center text-primary-foreground">
          <Icon className="w-3.5 h-3.5" />
        </span>
        <span className="text-xs font-semibold text-ink whitespace-nowrap">{obj.label}</span>
      </div>
    </motion.div>
  );
}
