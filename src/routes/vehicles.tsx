import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Check, Download } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import scooterSide from "@/assets/scooter-side.jpg.asset.json";
import scooterTQ from "@/assets/scooter-three-quarter.jpg.asset.json";
import scooterFront from "@/assets/scooter-front.jpg.asset.json";
import scooterRear from "@/assets/scooter-rear.jpg.asset.json";

export const Route = createFileRoute("/vehicles")({
  head: () => ({
    meta: [
      { title: "Electric Scooters — KORO, NIX-DLX & POWER+ | Franklin EV" },
      {
        name: "description",
        content:
          "Compare Franklin EV electric scooters: KORO, NIX-DLX and POWER+. 60 km/h top speed, ~100 km range, cruise control, anti-theft alerts and a 3-year warranty. Find your perfect ride.",
      },
      { property: "og:title", content: "The Franklin EV Range — KORO, NIX-DLX, POWER+" },
      {
        property: "og:description",
        content: "Explore specs, features and details for every Franklin EV electric scooter.",
      },
      { property: "og:url", content: "/vehicles" },
    ],
    links: [{ rel: "canonical", href: "/vehicles" }],
  }),
  component: VehiclesPage,
});

type ModelKey = "all" | "koro" | "nix" | "power";

interface ModelData {
  key: ModelKey;
  name: string;
  tagline: string;
  body: string;
  chips: string[];
  features: string[];
  images: { src: string; alt: string }[];
  accent: string;
  variants?: string[];
}

const models: ModelData[] = [
  {
    key: "koro",
    name: "KORO",
    tagline: "The everyday essential",
    body: "KORO is built for the daily grind made effortless. Light, agile and remarkably efficient, it slips through city traffic in near silence and sips energy so you spend less and ride more. With cruise control for relaxed open stretches and anti-theft protection with key alerts, KORO keeps your commute simple and your mind at ease.",
    chips: ["Top speed 60 km/h", "Range ~100 km", "Cruise control", "Anti-theft + key alerts", "BLDC hub motor (up to 2.5 kW peak)"],
    features: [
      "Effortless, lightweight city handling",
      "One of the only scooters in its class with cruise control",
      "Anti-theft protection with instant key alerts",
      "Low running cost — a full charge for about ₹24.50",
    ],
    images: [{ src: scooterSide.url, alt: "Franklin EV KORO electric scooter full side view on a light background." }],
    accent: "from-accent/15 to-primary/5",
  },
  {
    key: "nix",
    name: "NIX-DLX",
    tagline: "Style meets substance",
    body: "NIX-DLX is for riders who want their scooter to say something. A premium finish, comfortable ergonomics and a confident stance meet the same intelligent features across the Franklin EV range. It's a refined, composed ride that feels as good on a long boulevard as it does weaving through the market.",
    chips: ["Top speed 60 km/h", "Range ~100 km", "Cruise control", "Anti-theft + key alerts", "BLDC hub motor (up to 2.5 kW peak)"],
    features: [
      "Premium design and refined finish",
      "Comfortable ergonomics for longer rides",
      "Cruise control for relaxed cruising",
      "Anti-theft protection with key alerts",
    ],
    images: [{ src: scooterTQ.url, alt: "Franklin EV NIX-DLX electric scooter, three-quarter front view." }],
    accent: "from-primary/15 to-accent/5",
  },
  {
    key: "power",
    name: "POWER+",
    tagline: "Maximum presence, maximum performance",
    body: "POWER+ is the Franklin EV flagship. Bold, planted and unmistakable, it's available in striking Blue and deep Maroon to match your personality. Strong performance, the full suite of smart features and a commanding road presence make POWER+ the statement ride of the range.",
    chips: ["Top speed 60 km/h", "Range ~100 km", "Cruise control", "Anti-theft + key alerts", "BLDC hub motor (up to 2.5 kW peak)"],
    features: [
      "Flagship performance and commanding stance",
      "Two signature colours — Blue and Maroon",
      "Cruise control and anti-theft with key alerts",
      "Backed by a 3-year / 50,000 km battery & motor warranty",
    ],
    images: [
      { src: scooterFront.url, alt: "Franklin EV POWER+ in electric blue, three-quarter front view." },
      { src: scooterRear.url, alt: "Franklin EV POWER+ in deep maroon, three-quarter front view." },
    ],
    accent: "from-maroon/15 to-primary/5",
    variants: ["Electric Blue", "Deep Maroon"],
  },
];

const faqs = [
  { q: "What motor do Franklin EV scooters use?", a: "A BLDC hub motor delivering up to 2.5 kW of peak power for smooth, silent acceleration." },
  { q: "What is the warranty?", a: "Three years or 50,000 km on the battery and motor, whichever comes first." },
  { q: "How do I charge it?", a: "A 650 W plug-and-play charger works on any standard 15 A household socket — no special setup needed." },
  { q: "How long does charging take?", a: "About 4 hours 30 minutes to reach 0–80%." },
  { q: "What does a full charge cost?", a: "Roughly ₹24.50 — about 3.5 units of electricity — for close to 100 km of range." },
  { q: "How far can I go on one charge?", a: "Approximately 100 km, depending on riding conditions." },
  { q: "Is there fast charging?", a: "Franklin EV scooters use standard charging and do not currently support fast charging, which helps protect long-term battery health." },
  { q: "Is there a mobile app?", a: "Yes — the Franklin EV app is available on both Google Play and the App Store." },
];

function VehiclesPage() {
  const [filter, setFilter] = useState<ModelKey>("all");
  const visible = filter === "all" ? models : models.filter((m) => m.key === filter);

  return (
    <>
      <section className="bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-12 text-center">
          <Reveal>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink">
              The Franklin EV <span className="text-primary-gradient">Range</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Three electric scooters engineered around the same promise — cleaner,
              quieter, smarter rides. Find the one that fits your life.
            </p>
          </Reveal>
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-surface border border-border shadow-soft">
            {([
              { k: "all" as ModelKey, l: "All" },
              { k: "koro" as ModelKey, l: "KORO" },
              { k: "nix" as ModelKey, l: "NIX-DLX" },
              { k: "power" as ModelKey, l: "POWER+" },
            ]).map((b) => (
              <button
                key={b.k}
                onClick={() => setFilter(b.k)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === b.k ? "bg-primary-gradient text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-ink"
                }`}
              >
                {b.l}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 space-y-24">
        {visible.map((m, i) => (
          <Reveal key={m.key}>
            <article className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className={`relative rounded-[2.5rem] aspect-square bg-gradient-to-br ${m.accent} border border-border shadow-soft overflow-hidden grid place-items-center`}>
                <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,oklch(0.62_0.18_248/0.15),transparent_70%)]" />
                <motion.img
                  src={m.images[0].src}
                  alt={m.images[0].alt}
                  loading="lazy"
                  className="relative max-h-[80%] w-auto object-contain"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <div>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
                  {m.name} <span className="block text-2xl mt-1 font-medium text-muted-foreground">— {m.tagline}</span>
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{m.body}</p>
                {m.variants && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {m.variants.map((v) => (
                      <span key={v} className="px-3 py-1 rounded-full bg-maroon/10 text-maroon text-xs font-semibold">{v}</span>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.chips.map((c) => (
                    <span key={c} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">{c}</span>
                  ))}
                </div>
                <ul className="mt-6 space-y-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-ink">
                      <Check className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-soft hover:shadow-lift transition-all">
                    Book a Test Ride <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-surface text-ink font-semibold hover:border-primary hover:text-primary transition-colors">
                    <Download className="w-4 h-4" /> Download Brochure
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* SPEC TABLE */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">Compare the range</h2>
        </Reveal>
        <Reveal>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-border bg-surface shadow-soft">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-background border-b border-border">
                  <th className="text-left p-4 font-semibold text-ink">Specification</th>
                  <th className="text-left p-4 font-semibold text-primary">KORO</th>
                  <th className="text-left p-4 font-semibold text-primary">NIX-DLX</th>
                  <th className="text-left p-4 font-semibold text-primary">POWER+</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Top speed", "60 km/h", "60 km/h", "60 km/h"],
                  ["Range per charge", "~100 km", "~100 km", "~100 km"],
                  ["Motor", "BLDC hub, up to 2.5 kW peak", "BLDC hub, up to 2.5 kW peak", "BLDC hub, up to 2.5 kW peak"],
                  ["Cruise control", "Yes", "Yes", "Yes"],
                  ["Anti-theft + key alerts", "Yes", "Yes", "Yes"],
                  ["Charger", "650 W plug-and-play (15 A socket)", "650 W plug-and-play (15 A socket)", "650 W plug-and-play (15 A socket)"],
                  ["Charge time", "~4 h 30 m (0–80%)", "~4 h 30 m (0–80%)", "~4 h 30 m (0–80%)"],
                  ["Full-charge cost", "~₹24.50 (~3.5 units)", "~₹24.50 (~3.5 units)", "~₹24.50 (~3.5 units)"],
                  ["Warranty", "3 yrs / 50,000 km", "3 yrs / 50,000 km", "3 yrs / 50,000 km"],
                  ["Colours", "—", "—", "Blue, Maroon"],
                ].map((row) => (
                  <tr key={row[0]} className="hover:bg-background/60">
                    <td className="p-4 font-medium text-ink">{row[0]}</td>
                    <td className="p-4 text-muted-foreground">{row[1]}</td>
                    <td className="p-4 text-muted-foreground">{row[2]}</td>
                    <td className="p-4 text-muted-foreground">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink text-center">
            Frequently asked questions
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-surface border border-border shadow-soft overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-ink">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-primary">
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-5 pb-5 text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
