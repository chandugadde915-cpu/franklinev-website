import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Check, Download } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/vehicles")({
  head: () => ({
    meta: [
      { title: "Electric Scooters in Hyderabad — Power ++ & Rapid | Franklin EV" },
      {
        name: "description",
        content:
          "Compare Franklin EV Power ++ and Rapid electric scooters in Hyderabad. Review range, top speed, BLDC motor performance, cruise control, charging details, smart features and warranty support.",
      },
      {
        name: "keywords",
        content:
          "Franklin EV models, Power ++ electric scooter, Rapid electric scooter, best electric scooter for daily commute in Hyderabad, long range electric scooter in Hyderabad, electric scooter with cruise control in India",
      },
      { property: "og:title", content: "The Franklin EV Range — Power ++, Rapid" },
      {
        property: "og:description",
        content:
          "Explore Franklin EV scooter specs, model features, battery charging details and test ride options.",
      },
      { property: "og:url", content: "https://www.franklinev.co.in/vehicles" },
    ],
    links: [{ rel: "canonical", href: "https://www.franklinev.co.in/vehicles" }],
  }),
  component: VehiclesPage,
});

type ModelKey = "power" | "rapid";

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
    key: "power",
    name: "Power ++",
    tagline: "Maximum presence, maximum confidence",
    body: "Power ++ is Franklin EV's flagship electric scooter for riders who want stronger road presence, practical long-range confidence and smart everyday ownership in Hyderabad.",
    chips: [
      "Top speed 60 km/h",
      "Range up to 120 km",
      "Cruise control",
      "Anti-theft + key alerts",
      "BLDC hub motor (up to 2.5 kW peak)",
    ],
    features: [
      "Flagship performance and commanding road stance",
      "Cruise control support for smoother long stretches",
      "Anti-theft protection with instant key alerts",
      "Backed by a 3-year / 50,000 km battery & motor warranty",
    ],
    images: [
      {
        src: "/assets/models/premium-colors-layout/power-silver-angle-layout.png",
        alt: "Franklin EV Power ++ electric scooter in Silver, three-quarter front view.",
      },
    ],
    accent: "from-maroon/15 to-primary/5",
    variants: ["Silver", "Sky Blue", "Maroon"],
  },
  {
    key: "rapid",
    name: "Rapid",
    tagline: "Daily city riding, made simple",
    body: "Rapid is Franklin EV's focused city scooter for riders who want quick daily mobility, smart essentials and low running costs without unnecessary complexity.",
    chips: [
      "Top speed 60 km/h",
      "Range ~100 km",
      "Cruise control",
      "Anti-theft + key alerts",
      "BLDC hub motor (up to 2.5 kW peak)",
    ],
    features: [
      "City-focused electric scooter for everyday travel",
      "Comfortable, practical ride for regular commutes",
      "Cruise control for relaxed open-road use",
      "Anti-theft protection with key alerts",
    ],
    images: [
      {
        src: "/assets/models/premium-colors-layout/power-maroon-front-layout.png",
        alt: "Franklin EV Rapid electric scooter in Maroon, front view on a light background.",
      },
    ],
    accent: "from-primary/15 to-accent/5",
    variants: ["Silver", "Sky Blue", "Maroon"],
  },
];

const faqs = [
  {
    q: "What motor do Franklin EV scooters use?",
    a: "A BLDC hub motor delivering up to 2.5 kW of peak power for smooth, silent acceleration.",
  },
  {
    q: "What is the warranty?",
    a: "Three years or 50,000 km on the battery and motor, whichever comes first.",
  },
  {
    q: "How do I charge it?",
    a: "A 650 W plug-and-play charger works on any standard 15 A household socket — no special setup needed.",
  },
  {
    q: "How long does charging take?",
    a: "About 4 hours 30 minutes to reach 0-80% with the standard charging setup.",
  },
  {
    q: "What does a full charge cost?",
    a: "Roughly Rs. 24.50 — about 3.5 units of electricity — for close to 100 km of range. Actual cost depends on your local electricity tariff.",
  },
  {
    q: "How far can I go on one charge?",
    a: "Approximately 100 km, depending on riding conditions.",
  },
  {
    q: "Is there fast charging?",
    a: "Franklin EV scooters use standard charging and do not currently support fast charging, which helps protect long-term battery health.",
  },
  {
    q: "Is there a mobile app?",
    a: "Franklin EV supports connected ownership features such as location, battery status and anti-theft alerts. Ask your nearest dealer about current app availability and supported features for your model.",
  },
];

const comparisonRows = [
  ["Top speed", "60 km/h", "60 km/h"],
  ["Range per charge", "Up to 120 km", "~100 km"],
  ["Motor", "BLDC hub, up to 2.5 kW peak", "BLDC hub, up to 2.5 kW peak"],
  ["Cruise control", "Yes", "Yes"],
  ["Anti-theft + key alerts", "Yes", "Yes"],
  ["Charger", "650 W plug-and-play (15 A socket)", "650 W plug-and-play (15 A socket)"],
  ["Charge time", "~4 h 30 m (0-80%)", "~4 h 30 m (0-80%)"],
  ["Full-charge cost", "~Rs. 24.50 (~3.5 units)", "~Rs. 24.50 (~3.5 units)"],
  ["Warranty", "3 yrs / 50,000 km", "3 yrs / 50,000 km"],
  ["Colours", "Silver, Sky Blue, Maroon", "Silver, Sky Blue, Maroon"],
] as const;

function VehiclesPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-12 text-center">
          <Reveal>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink">
              The Franklin EV <span className="text-primary-gradient">Range</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare Franklin EV Power ++ and Rapid by range, speed, motor, charging, connected
              features and warranty support before you book a test ride.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 space-y-24">
        {models.map((m, i) => (
          <Reveal key={m.key}>
            <article
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div
                className={`relative rounded-[2.5rem] aspect-square bg-gradient-to-br ${m.accent} border border-border shadow-soft overflow-hidden grid place-items-center`}
              >
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
                  {m.name}{" "}
                  <span className="block text-2xl mt-1 font-medium text-muted-foreground">
                    — {m.tagline}
                  </span>
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{m.body}</p>
                {m.variants && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {m.variants.map((v) => (
                      <span
                        key={v}
                        className="px-3 py-1 rounded-full bg-maroon/10 text-maroon text-xs font-semibold"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.chips.map((c) => (
                    <span
                      key={c}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary"
                    >
                      {c}
                    </span>
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
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-soft hover:shadow-lift transition-all"
                  >
                    Book a Test Ride <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-surface text-ink font-semibold hover:border-primary hover:text-primary transition-colors"
                  >
                    <Download className="w-4 h-4" /> Request Brochure
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* SPEC TABLE */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
            Compare the range
          </h2>
        </Reveal>
        <Reveal>
          <div className="mt-8 hidden overflow-x-auto rounded-3xl border border-border bg-surface shadow-soft lg:block">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="bg-background border-b border-border">
                  <th className="text-left p-4 font-semibold text-ink">Specification</th>
                  <th className="text-left p-4 font-semibold text-primary">Power ++</th>
                  <th className="text-left p-4 font-semibold text-primary">Rapid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonRows.map((row) => (
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
          <div className="mt-8 grid gap-4 lg:hidden">
            {comparisonRows.map(([spec, power, rapid]) => (
              <article
                key={spec}
                className="rounded-2xl border border-border bg-surface p-4 shadow-soft"
              >
                <h3 className="font-display text-lg font-bold text-ink">{spec}</h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {[
                    ["Power ++", power],
                    ["Rapid", rapid],
                  ].map(([modelName, value]) => (
                    <div key={modelName} className="rounded-xl bg-background/70 p-3">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        {modelName}
                      </span>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-muted-foreground">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
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
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
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
