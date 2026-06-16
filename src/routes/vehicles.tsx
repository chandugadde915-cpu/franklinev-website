import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  Battery,
  BatteryCharging,
  ChevronDown,
  Check,
  Download,
  Gauge,
  GraduationCap,
  KeyRound,
  Leaf,
  Monitor,
  PackageOpen,
  Route as RouteIcon,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/vehicles")({
  head: () => ({
    meta: [
      { title: "Electric Scooters in Hyderabad — Low Speed & High Speed | Franklin EV" },
      {
        name: "description",
        content:
          "Compare Franklin EV low-speed and high-speed electric scooter variants in Hyderabad. Review top speed, 250W BLDC motor details, lithium-ion and graphene battery options, range, charging and warranty support.",
      },
      {
        name: "keywords",
        content:
          "Franklin EV models, Franklin EV low speed scooter, Franklin EV high speed scooter, 25 km/h electric scooter, 60 km/h electric scooter, lithium ion electric scooter, graphene battery scooter Hyderabad",
      },
      { property: "og:title", content: "The Franklin EV Range — Low Speed & High Speed" },
      {
        property: "og:description",
        content:
          "Explore Franklin EV scooter specs, model features, battery charging details and test ride options.",
      },
      { property: "og:url", content: "https://franklinev-website.vercel.app/vehicles" },
    ],
    links: [{ rel: "canonical", href: "https://franklinev-website.vercel.app/vehicles" }],
  }),
  component: VehiclesPage,
});

type ModelKey = "low-speed" | "high-speed";

interface ModelData {
  key: ModelKey;
  name: string;
  tagline: string;
  body: string;
  price: string;
  chips: string[];
  features: string[];
  images: { src: string; webp?: string; alt: string }[];
  accent: string;
  variants?: string[];
  featureIcons: { label: string; detail: string; Icon: typeof Gauge }[];
}

const models: ModelData[] = [
  {
    key: "low-speed",
    name: "Franklin EV Low Speed",
    tagline: "Budget-friendly urban mobility",
    body: "Designed for the evolving needs of modern urban mobility, our range of budget-friendly electric scooters offers an ideal balance of affordability, convenience, and efficiency. Tailored for college students, homemakers, and everyday city commuters, these low-speed models are powered by a dependable 250W BLDC hub motor, delivering a top speed of 25 km/h and a certified range of up to 55 km on a single charge.",
    price: "Contact dealer for pricing",
    chips: [
      "Top speed 25 km/h",
      "Range up to 55 km",
      "250W BLDC hub motor",
      "Lithium-ion battery option",
      "Graphene battery option",
    ],
    features: [
      "Ideal for college students, homemakers and everyday city commuters",
      "Easy daily riding with low operating cost",
      "Available with lithium-ion or graphene battery package",
      "Dealer support for model selection, charging and warranty guidance",
    ],
    images: [
      {
        src: "/assets/editorial/silver-apartment-front.jpg",
        alt: "Franklin EV Power ++ electric scooter in silver outside a premium apartment.",
      },
      {
        src: "/assets/editorial/red-apartment-front.jpg",
        alt: "Franklin EV Power ++ electric scooter in red at an apartment entrance.",
      },
      {
        src: "/assets/editorial/blue-urban-side.jpg",
        alt: "Franklin EV Power ++ electric scooter in sky blue parked near an urban cafe.",
      },
    ],
    accent: "from-accent/15 to-primary/5",
    variants: ["Low speed", "25 km/h", "Lithium-ion", "Graphene"],
    featureIcons: [
      { label: "Top speed", detail: "25 km/h", Icon: Gauge },
      { label: "Certified range", detail: "Up to 55 km", Icon: RouteIcon },
      { label: "Motor", detail: "250W BLDC", Icon: Zap },
      { label: "Best for", detail: "Students & city riders", Icon: GraduationCap },
    ],
  },
  {
    key: "high-speed",
    name: "Franklin EV High Speed",
    tagline: "Faster city performance for longer rides",
    body: "The high-speed Franklin EV variant is built for riders who need stronger daily performance, confident acceleration and practical range for Hyderabad commutes. It supports up to 60 km/h riding and is offered with lithium-ion and graphene battery options based on customer preference and dealer availability.",
    price: "Contact dealer for pricing",
    chips: [
      "Top speed up to 60 km/h",
      "Longer commute ready",
      "Lithium-ion battery option",
      "Graphene battery option",
      "Smart ownership support",
    ],
    features: [
      "Higher-speed variant for riders who need quicker daily movement",
      "Comfortable for office commutes and longer city routes",
      "Battery package options to match budget and usage",
      "Warranty and service support through Franklin EV dealer network",
    ],
    images: [
      {
        src: "/assets/editorial/red-night-apartment.jpg",
        alt: "Franklin EV Rapid electric scooter in red parked outside an apartment at night.",
      },
      {
        src: "/assets/editorial/red-sunset-profile.jpg",
        alt: "Franklin EV Rapid electric scooter in red shown in profile at sunset.",
      },
      {
        src: "/assets/editorial/blue-coast-front.jpg",
        alt: "Franklin EV Rapid electric scooter in sky blue with a scenic front view.",
      },
    ],
    accent: "from-primary/15 to-accent/5",
    variants: ["High speed", "Up to 60 km/h", "Lithium-ion", "Graphene"],
    featureIcons: [
      { label: "Top speed", detail: "Up to 60 km/h", Icon: Gauge },
      { label: "Battery", detail: "Lithium-ion / Graphene", Icon: BatteryCharging },
      { label: "Ownership", detail: "Dealer support", Icon: ShieldCheck },
      { label: "Cleaner ride", detail: "Zero tailpipe emissions", Icon: Leaf },
    ],
  },
];

const faqs = [
  {
    q: "What motor do Franklin EV scooters use?",
    a: "Franklin EV low-speed models use a dependable 250W BLDC hub motor. High-speed model details vary by variant and dealer availability.",
  },
  {
    q: "What is the warranty?",
    a: "Graphene battery packages include 12 months on battery, motor and controller, with 6 months on charger. Lithium-ion packages include 2+1 year battery warranty and 12 months on motor, charger and controller. Final terms depend on invoice and dealer confirmation.",
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
    a: "The low-speed variant is certified for up to 55 km on a single charge. High-speed range depends on the selected battery package, rider load and road conditions.",
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
  ["Ex-showroom price", "Contact dealer for pricing", "Contact dealer for pricing"],
  ["Top speed", "25 km/h", "Up to 60 km/h"],
  ["Range per charge", "Certified up to 55 km", "Depends on battery package"],
  ["Motor", "250W BLDC hub motor", "High-speed BLDC package"],
  ["Battery options", "Lithium-ion / Graphene", "Lithium-ion / Graphene"],
  ["Cruise control", "Ask dealer for current availability", "Ask dealer for current availability"],
  ["Anti-theft + key alerts", "Supported variants", "Supported variants"],
  ["Charger", "650 W plug-and-play (15 A socket)", "650 W plug-and-play (15 A socket)"],
  ["Charge time", "~4 h 30 m (0-80%)", "~4 h 30 m (0-80%)"],
  ["Full-charge cost", "~Rs. 24.50 (~3.5 units)", "~Rs. 24.50 (~3.5 units)"],
  ["Warranty", "Battery-package based terms", "Battery-package based terms"],
  ["Colours", "Silver, Sky Blue, Maroon", "Silver with Rapid accent options"],
  ["Recommended for", "Students, homemakers and everyday city riders", "Longer commutes and faster city riding"],
] as const;

const featureHighlights = [
  { label: "Removable Batteries", value: "Lithium-ion / Graphene", Icon: Battery },
  { label: "IDC Range", value: "Up to 55 km on low-speed", Icon: RouteIcon },
  { label: "Top Speed", value: "25 km/h or up to 60 km/h", Icon: Gauge },
  { label: "Motor", value: "250W BLDC on low-speed", Icon: Zap },
  { label: "Digital Display", value: "Variant based availability", Icon: Monitor },
  { label: "LED Projector Headlamp", value: "Ask dealer for variant", Icon: Leaf },
  { label: "Boot Space", value: "Practical daily storage", Icon: PackageOpen },
  { label: "Keyless Entry", value: "Supported variants", Icon: KeyRound },
] as const;

const modelColors = [
  {
    id: "silver",
    name: "Silver",
    swatch: "#bbb19b",
    image: "/assets/models/premium-colors-layout/power-silver-angle-layout.png",
    imageWebp: "/assets/models/premium-colors-layout/power-silver-angle-layout.webp",
    preview: "/assets/models/premium-colors-layout/power-silver-front-layout.png",
    previewWebp: "/assets/models/premium-colors-layout/power-silver-front-layout.webp",
  },
  {
    id: "blue",
    name: "Sky Blue",
    swatch: "#8fd5f3",
    image: "/assets/models/premium-colors-layout/power-blue-angle-layout.png",
    imageWebp: "/assets/models/premium-colors-layout/power-blue-angle-layout.webp",
    preview: "/assets/models/premium-colors-layout/power-blue-front-layout.png",
    previewWebp: "/assets/models/premium-colors-layout/power-blue-front-layout.webp",
  },
  {
    id: "maroon",
    name: "Maroon",
    swatch: "#9f2438",
    image: "/assets/models/premium-colors-layout/power-maroon-angle-layout.png",
    imageWebp: "/assets/models/premium-colors-layout/power-maroon-angle-layout.webp",
    preview: "/assets/models/premium-colors-layout/power-maroon-front-layout.png",
    previewWebp: "/assets/models/premium-colors-layout/power-maroon-front-layout.webp",
  },
] as const;

const activeColorModel = {
  name: "Franklin EV Power ++",
  buttonLabel: "Power ++",
  badge: "Available in 3 finishes - built for everyday Indian riders.",
  body: "Franklin EV Power ++ combines commanding road presence with practical long-range performance. Available in Silver, Sky Blue and Maroon - choose your finish and book a test ride at a dealer near you.",
  specs: ["Silver finish available", "Sky Blue finish available", "Maroon finish available"],
} as const;

function VehiclesPage() {
  const [colorId, setColorId] = useState<(typeof modelColors)[number]["id"]>("silver");
  const selectedColor = modelColors.find((color) => color.id === colorId) ?? modelColors[0];

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 space-y-24">
        {models.map((m, i) => (
          <Reveal key={m.key}>
            <article
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div
                className={`model-image-wrapper relative rounded-[2.5rem] aspect-square bg-gradient-to-br ${m.accent} border border-border shadow-soft overflow-hidden grid place-items-center`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,oklch(0.62_0.18_248/0.15),transparent_70%)]" />
                <span className="model-badge">{m.key === "low-speed" ? "Low Speed" : "High Speed"}</span>
                <picture className="vehicle-main-photo">
                  {m.images[0].webp ? <source srcSet={m.images[0].webp} type="image/webp" /> : null}
                  <motion.img
                    src={m.images[0].src}
                    alt={m.images[0].alt}
                    loading="lazy"
                    width={1200}
                    height={1200}
                    className="vehicle-main-photo-img"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </picture>
                <div className="vehicle-gallery-strip" aria-label={`${m.name} lifestyle images`}>
                  {m.images.slice(1).map((image) => (
                    <figure key={image.src}>
                      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                    </figure>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
                  {m.name}{" "}
                  <span className="block text-2xl mt-1 font-medium text-muted-foreground">
                    — {m.tagline}
                  </span>
                </h2>
                <div className="model-price">
                  <span className="price-label">Ex-showroom price</span>
                  <span className="price-value">{m.price}</span>
                </div>
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
                <div className="variant-icon-grid mt-6">
                  {m.featureIcons.map(({ label, detail, Icon }) => (
                    <div key={label} className="variant-icon-card">
                      <Icon className="h-5 w-5" />
                      <span>{label}</span>
                      <strong>{detail}</strong>
                    </div>
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

      <section
        className="cinema-section model-showcase vehicle-color-showcase"
        id="available-colors"
        data-animate="fade-up"
        style={{ "--model-tone": selectedColor.swatch } as CSSProperties}
      >
        <div className="model-stage">
          <div className="model-glow" />
          <picture key={colorId}>
            <source srcSet={selectedColor.imageWebp} type="image/webp" />
            <img
              src={selectedColor.image}
              alt={`Franklin EV ${activeColorModel.buttonLabel} electric scooter in ${selectedColor.name}`}
              loading="eager"
              decoding="async"
              fetchPriority="low"
              width={1200}
              height={1200}
            />
          </picture>
          <div className="model-platform" />
        </div>
        <Reveal className="model-info">
          <div className="cinema-eyebrow">Available Colors</div>
          <p className="model-badge model-note">{activeColorModel.badge}</p>
          <h1 className="vehicle-colors-title">{activeColorModel.name}</h1>
          <p className="model-description">{activeColorModel.body}</p>
          <div className="model-pills">
            {activeColorModel.specs.map((spec) => (
              <span key={spec}>{spec}</span>
            ))}
          </div>
          <div className="color-grid" aria-label={`Choose ${activeColorModel.name} color`}>
            {modelColors.map((color) => (
              <button
                key={color.id}
                type="button"
                className={color.id === colorId ? "active" : undefined}
                style={{ "--swatch": color.swatch } as CSSProperties}
                onClick={() => setColorId(color.id)}
                aria-label={`Show ${activeColorModel.buttonLabel} in ${color.name}`}
              >
                <picture>
                  <source srcSet={color.previewWebp} type="image/webp" />
                  <img
                    src={color.preview}
                    alt={`Franklin EV ${activeColorModel.buttonLabel} preview in ${color.name}`}
                    loading="eager"
                    decoding="async"
                    fetchPriority="low"
                    width={1200}
                    height={1200}
                  />
                </picture>
                <span />
                <strong>{color.name}</strong>
              </button>
            ))}
          </div>
          <Link to="/contact" className="cinema-btn cinema-btn-primary">
            Book a Test Ride for This Model <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <div className="vehicle-section-heading">
            <span className="cinema-eyebrow">Feature Highlights</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
              Specs shown with clear icons
            </h2>
            <p>
              Compact feature cards make it easier for customers to compare important scooter
              details without reading long paragraphs.
            </p>
          </div>
        </Reveal>
        <div className="feature-spec-grid">
          {featureHighlights.map(({ label, value, Icon }) => (
            <Reveal key={label}>
              <article className="feature-spec-card">
                <Icon className="h-8 w-8" />
                <h3>{label}</h3>
                <p>{value}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

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
                  <th className="text-left p-4 font-semibold text-primary">Low Speed</th>
                  <th className="text-left p-4 font-semibold text-primary">High Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className="hover:bg-background/60">
                    <td className="p-4 font-medium text-ink">{row[0]}</td>
                    <td className="p-4 text-muted-foreground">{row[1]}</td>
                    <td className="p-4 text-muted-foreground">{row[2]}</td>
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
                    ["Low Speed", power],
                    ["High Speed", rapid],
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
  return (
    <details className="faq-item rounded-2xl bg-surface border border-border shadow-soft overflow-hidden">
      <summary className="faq-question w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-semibold text-ink">{q}</span>
        <span className="faq-chevron text-primary">
          <ChevronDown className="w-5 h-5" />
        </span>
      </summary>
      <div className="faq-answer">
        <p className="px-5 pb-5 text-muted-foreground">{a}</p>
      </div>
    </details>
  );
}
