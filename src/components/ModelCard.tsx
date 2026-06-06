import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { ArrowRight } from "lucide-react";

interface Props {
  name: string;
  tagline: string;
  image: string;
  alt: string;
  chips: string[];
  accent?: "blue" | "maroon" | "teal";
}

const accentMap = {
  blue: "from-primary/10 to-accent/5",
  maroon: "from-maroon/10 to-primary/5",
  teal: "from-accent/15 to-primary/5",
};

export function ModelCard({ name, tagline, image, alt, chips, accent = "blue" }: Props) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  const tRx = useTransform(srx, (v) => `${v}deg`);
  const tRy = useTransform(sry, (v) => `${v}deg`);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 10);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: tRx, rotateY: tRy, transformPerspective: 1000 }}
      className="group relative rounded-3xl bg-surface border border-border shadow-soft hover:shadow-lift transition-shadow overflow-hidden"
    >
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${accentMap[accent]} grid place-items-center overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,oklch(0.62_0.18_248/0.15),transparent_70%)]" />
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="relative max-h-[85%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-ink">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span key={c} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
              {c}
            </span>
          ))}
        </div>
        <Link
          to="/vehicles"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link"
        >
          View {name}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
