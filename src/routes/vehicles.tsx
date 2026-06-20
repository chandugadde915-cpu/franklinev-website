import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Battery,
  BatteryCharging,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Gauge,
  GraduationCap,
  Leaf,
  Route as RouteIcon,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Reveal, WordReveal } from "@/components/Reveal";

export const Route = createFileRoute("/vehicles")({
  head: () => ({
    meta: [
      {
        title:
          "Franklin EV Scooters — POWER & Classic Variants | Lithium-ion & Graphene Battery | Hyderabad",
      },
      {
        name: "description",
        content:
          "Explore Franklin EV POWER and Classic electric scooter variants in Hyderabad. Compare top speed (25 km/h or 60 km/h), range (55–80 km), lithium-ion vs graphene battery options, 4 colours including Black, Blue, Mint Green and Red.",
      },
      {
        name: "keywords",
        content:
          "Franklin EV POWER scooter, Franklin EV Classic scooter, electric scooter Hyderabad, lithium ion electric scooter, graphene battery electric scooter, low speed electric scooter 25 kmh, high speed electric scooter 60 kmh, electric scooter black blue green red, Franklin EV variants, electric scooter range 80 km Hyderabad",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large",
      },
      {
        property: "og:title",
        content: "Franklin EV POWER & Classic — All Variants, Colours & Battery Options",
      },
      {
        property: "og:description",
        content:
          "Compare Franklin EV POWER and Classic electric scooters. Choose your speed (25 or 60 km/h), battery (lithium-ion or graphene) and colour. Book a test ride in Hyderabad.",
      },
      {
        property: "og:url",
        content: "https://franklinev-website.vercel.app/vehicles",
      },
      {
        property: "og:image",
        content:
          "https://franklinev-website.vercel.app/assets/products/power-black-left.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Franklin EV POWER & Classic — Choose Your Variant",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://franklinev-website.vercel.app/vehicles",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Franklin EV Electric Scooter Models",
            url: "https://franklinev-website.vercel.app/vehicles",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@context": "https://schema.org",
                  "@type": "Product",
                  name: "Franklin EV POWER",
                  brand: { "@type": "Brand", name: "Franklin EV" },
                  description:
                    "Sporty high-performance electric scooter with aggressive design, LED projector headlamps and available in 4 colours. Choose 25 km/h or 60 km/h speed variants with lithium-ion or graphene battery.",
                  image: [
                    "https://franklinev-website.vercel.app/assets/products/power-black-left.png",
                    "https://franklinev-website.vercel.app/assets/products/power-blue-left.png",
                    "https://franklinev-website.vercel.app/assets/products/power-green-left.png",
                    "https://franklinev-website.vercel.app/assets/products/power-red-left.png",
                  ],
                  color: "Midnight Black, Ocean Blue, Mint Green, Flame Red",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    seller: { "@type": "Organization", name: "Franklin EV" },
                  },
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@context": "https://schema.org",
                  "@type": "Product",
                  name: "Franklin EV Classic",
                  brand: { "@type": "Brand", name: "Franklin EV" },
                  description:
                    "Everyday urban electric scooter with clean lines, practical storage and reliable BLDC motor. Available in Black, Champagne Gold and Slate Gray with lithium-ion or graphene battery.",
                  image: [
                    "https://franklinev-website.vercel.app/assets/products/classic-black-left.png",
                    "https://franklinev-website.vercel.app/assets/products/classic-gold-left.png",
                    "https://franklinev-website.vercel.app/assets/products/classic-gray-left.png",
                  ],
                  color: "Midnight Black, Champagne Gold, Slate Gray",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    seller: { "@type": "Organization", name: "Franklin EV" },
                  },
                },
              },
            ],
          },
        ]),
      },
    ],
  }),
  component: VehiclesPage,
});

/* ─── DATA ────────────────────────────────────────────────────── */

type VariantKey = "power" | "classic";
type BatteryKey = "lithium" | "graphene";
type SpeedKey = "low" | "high";

interface ColorOption {
  id: string;
  name: string;
  swatch: string;
  images: { src: string; alt: string; label: string }[];
}

interface BatterySpec {
  key: BatteryKey;
  name: string;
  tagline: string;
  icon: typeof Battery;
  specs: { label: string; value: string }[];
  warrantyBattery: string;
  warrantyMotor: string;
  warrantyCharger: string;
  badge: string;
  color: string;
}

interface SpeedVariant {
  key: SpeedKey;
  label: string;
  speed: string;
  range: string;
  motor: string;
  best: string;
}

interface VehicleModel {
  key: VariantKey;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  colors: ColorOption[];
  accentColor: string;
  features: string[];
  highlights: { label: string; value: string; Icon: typeof Gauge }[];
}

const batteryOptions: BatterySpec[] = [
  {
    key: "lithium",
    name: "Lithium-Ion Battery",
    tagline: "Trusted long-life chemistry",
    icon: Battery,
    badge: "Best Warranty",
    color: "text-blue-600",
    specs: [
      { label: "Low-speed range", value: "Up to 55 km" },
      { label: "High-speed range", value: "Up to 60 km" },
      { label: "Charge time", value: "~4 h 30 m (0–80%)" },
      { label: "Charger", value: "650 W plug-and-play (15 A)" },
      { label: "Full charge cost", value: "~₹24.50 (~3.5 units)" },
      { label: "Chemistry", value: "Lithium-Ion cells" },
    ],
    warrantyBattery: "2 + 1 Years",
    warrantyMotor: "12 Months",
    warrantyCharger: "12 Months",
  },
  {
    key: "graphene",
    name: "Graphene Battery",
    tagline: "Higher performance, faster charge",
    icon: Zap,
    badge: "High Performance",
    color: "text-orange-500",
    specs: [
      { label: "Low-speed range", value: "Up to 80 km" },
      { label: "High-speed range", value: "Up to 75 km" },
      { label: "Charge time", value: "~3 h 30 m (0–80%)" },
      { label: "Charger", value: "650 W plug-and-play (15 A)" },
      { label: "Full charge cost", value: "~₹24.50 (~3.5 units)" },
      { label: "Chemistry", value: "Graphene-enhanced cells" },
    ],
    warrantyBattery: "12 Months",
    warrantyMotor: "12 Months",
    warrantyCharger: "6 Months",
  },
];

const speedVariants: SpeedVariant[] = [
  {
    key: "low",
    label: "Low Speed — 25 km/h",
    speed: "25 km/h",
    range: "55 km (Li-Ion) / 80 km (Graphene)",
    motor: "250W BLDC Hub Motor",
    best: "Students, homemakers & city errands",
  },
  {
    key: "high",
    label: "High Speed — Up to 60 km/h",
    speed: "Up to 60 km/h",
    range: "60 km (Li-Ion) / 75 km (Graphene)",
    motor: "High-speed BLDC Package",
    best: "Office commutes & longer city routes",
  },
];

const vehicles: VehicleModel[] = [
  {
    key: "power",
    name: "Franklin EV POWER",
    tagline: "Sport-aggressive design. Built to stand out.",
    description:
      "The Franklin EV POWER is designed for riders who want aggressive road presence without compromising daily practicality. Its sculpted front fairing with LED projector headlamps, sharp body lines and bold POWER badging make an unmistakable statement. Available in four striking finishes — choose your speed variant and battery to match your ride style.",
    badge: "Sporty",
    accentColor: "#e67e22",
    features: [
      "LED projector headlamps with DRL",
      "Aggressive sport-fairing body kit",
      "Digital instrument cluster",
      "Dual-tone colour blocking with orange accents",
      "Anti-theft with key alerts",
      "Tubeless tyres with alloy wheels",
    ],
    highlights: [
      { label: "Top Speed", value: "25 or 60 km/h", Icon: Gauge },
      { label: "Range", value: "Up to 80 km", Icon: RouteIcon },
      { label: "Motor", value: "250W BLDC", Icon: Zap },
      { label: "Best For", value: "Sport commuters", Icon: ShieldCheck },
    ],
    colors: [
      {
        id: "black",
        name: "Midnight Black",
        swatch: "#1a1a1a",
        images: [
          { src: "/assets/products/power-black-left.png", alt: "Franklin EV POWER Midnight Black – left side view", label: "Left" },
          { src: "/assets/products/power-black-right.png", alt: "Franklin EV POWER Midnight Black – right side view", label: "Right" },
          { src: "/assets/products/power-black-front.png", alt: "Franklin EV POWER Midnight Black – front view", label: "Front" },
          { src: "/assets/products/power-black-rear.png", alt: "Franklin EV POWER Midnight Black – rear view", label: "Rear" },
          { src: "/assets/products/power-black-headlight.png", alt: "Franklin EV POWER Midnight Black – LED headlamp detail", label: "Headlight" },
          { src: "/assets/products/power-black-frontclose.png", alt: "Franklin EV POWER Midnight Black – front close-up", label: "Detail" },
        ],
      },
      {
        id: "blue",
        name: "Ocean Blue",
        swatch: "#1a5fa8",
        images: [
          { src: "/assets/products/power-blue-left.png", alt: "Franklin EV POWER Ocean Blue – left side view", label: "Left" },
          { src: "/assets/products/power-blue-right.png", alt: "Franklin EV POWER Ocean Blue – right side view", label: "Right" },
          { src: "/assets/products/power-blue-left2.png", alt: "Franklin EV POWER Ocean Blue – angled left view", label: "Angle" },
          { src: "/assets/products/power-blue-tail.png", alt: "Franklin EV POWER Ocean Blue – tail light detail", label: "Tail" },
        ],
      },
      {
        id: "green",
        name: "Mint Green",
        swatch: "#5ecfb0",
        images: [
          { src: "/assets/products/power-green-left.png", alt: "Franklin EV POWER Mint Green – left side view", label: "Left" },
          { src: "/assets/products/power-green-right.png", alt: "Franklin EV POWER Mint Green – right side view", label: "Right" },
          { src: "/assets/products/power-green-front.png", alt: "Franklin EV POWER Mint Green – front view", label: "Front" },
          { src: "/assets/products/power-green-headlight.png", alt: "Franklin EV POWER Mint Green – LED headlamp detail", label: "Headlight" },
          { src: "/assets/products/power-green-tail.png", alt: "Franklin EV POWER Mint Green – tail light detail", label: "Tail" },
        ],
      },
      {
        id: "red",
        name: "Flame Red",
        swatch: "#c0392b",
        images: [
          { src: "/assets/products/power-red-left.png", alt: "Franklin EV POWER Flame Red – left side view", label: "Left" },
          { src: "/assets/products/power-red-right.png", alt: "Franklin EV POWER Flame Red – right side view", label: "Right" },
          { src: "/assets/products/power-red-front.png", alt: "Franklin EV POWER Flame Red – front view", label: "Front" },
        ],
      },
    ],
  },
  {
    key: "classic",
    name: "Franklin EV Classic",
    tagline: "Clean lines. Everyday confidence.",
    description:
      "The Franklin EV Classic is engineered for the everyday Indian rider who values reliability, comfort and low running cost. Its clean, uncluttered design fits seamlessly into city life — whether it's the morning school run, office commute or evening errands. Available in three versatile finishes with full lithium-ion and graphene battery options.",
    badge: "Everyday",
    accentColor: "#f39c12",
    features: [
      "Spacious under-seat storage",
      "Comfortable wide seat with ergonomic design",
      "Reliable 250W BLDC hub motor",
      "Low step-through frame — easy mount/dismount",
      "Tubeless tyres for puncture safety",
      "Simple instrument cluster for daily use",
    ],
    highlights: [
      { label: "Top Speed", value: "25 or 60 km/h", Icon: Gauge },
      { label: "Range", value: "Up to 80 km", Icon: RouteIcon },
      { label: "Motor", value: "250W BLDC", Icon: Zap },
      { label: "Best For", value: "City & family use", Icon: GraduationCap },
    ],
    colors: [
      {
        id: "black",
        name: "Midnight Black",
        swatch: "#1a1a1a",
        images: [
          { src: "/assets/products/classic-black-left.png", alt: "Franklin EV Classic Midnight Black – left side view", label: "Left" },
          { src: "/assets/products/classic-black-right.png", alt: "Franklin EV Classic Midnight Black – right side view", label: "Right" },
          { src: "/assets/products/classic-black-left2.png", alt: "Franklin EV Classic Midnight Black – angled view", label: "Angle" },
          { src: "/assets/products/classic-black-cockpit.png", alt: "Franklin EV Classic Midnight Black – cockpit view", label: "Cockpit" },
          { src: "/assets/products/classic-black-throttle.png", alt: "Franklin EV Classic Midnight Black – throttle controls", label: "Controls" },
        ],
      },
      {
        id: "gold",
        name: "Champagne Gold",
        swatch: "#c8a951",
        images: [
          { src: "/assets/products/classic-gold-left.png", alt: "Franklin EV Classic Champagne Gold – left side view", label: "Left" },
          { src: "/assets/products/classic-gold-right.png", alt: "Franklin EV Classic Champagne Gold – right side view", label: "Right" },
          { src: "/assets/products/classic-gold-tail.png", alt: "Franklin EV Classic Champagne Gold – tail light detail", label: "Tail" },
          { src: "/assets/products/classic-gold-rearwheel.png", alt: "Franklin EV Classic Champagne Gold – hub motor & rear wheel", label: "Motor" },
        ],
      },
      {
        id: "gray",
        name: "Slate Gray",
        swatch: "#6b7280",
        images: [
          { src: "/assets/products/classic-gray-left.png", alt: "Franklin EV Classic Slate Gray – left side view", label: "Left" },
        ],
      },
    ],
  },
];

const comparisonRows = [
  ["Speed variant", "Low Speed (25 km/h)", "High Speed (Up to 60 km/h)"],
  ["Motor", "250W BLDC Hub Motor", "High-Speed BLDC Package"],
  ["Li-Ion range", "Up to 55 km", "Up to 60 km"],
  ["Graphene range", "Up to 80 km", "Up to 75 km"],
  ["Charge time", "~4 h 30 m (Li-Ion)", "~3 h 30 m (Graphene)"],
  ["Charger", "650 W plug-and-play (15 A socket)", "650 W plug-and-play (15 A socket)"],
  ["Full-charge cost", "~₹24.50 (~3.5 units)", "~₹24.50 (~3.5 units)"],
  ["Li-Ion warranty", "Battery 2+1 yr / Motor 12 mo / Charger 12 mo", "Battery 2+1 yr / Motor 12 mo / Charger 12 mo"],
  ["Graphene warranty", "Battery 12 mo / Motor 12 mo / Charger 6 mo", "Battery 12 mo / Motor 12 mo / Charger 6 mo"],
  ["POWER colours", "Midnight Black, Ocean Blue, Mint Green, Flame Red", "Midnight Black, Ocean Blue, Mint Green, Flame Red"],
  ["Classic colours", "Midnight Black, Champagne Gold, Slate Gray", "Midnight Black, Champagne Gold, Slate Gray"],
  ["Recommended for", "Students, homemakers & city errands", "Office commutes & longer city routes"],
] as const;

const faqs = [
  {
    q: "What are the two Franklin EV models?",
    a: "Franklin EV offers two variants: the POWER — a sport-styled scooter with aggressive front fairing and LED projector headlamps — and the Classic — a clean, practical everyday scooter designed for comfortable urban commuting.",
  },
  {
    q: "What is the difference between lithium-ion and graphene battery?",
    a: "The lithium-ion battery offers a 2+1 year warranty and a range of up to 55 km on low speed. The graphene battery charges faster (~3 h 30 m vs 4 h 30 m) and provides up to 80 km range on low speed, but carries a 12-month warranty. Both use a standard 650 W plug-and-play charger on any 15 A home socket.",
  },
  {
    q: "What is the top speed of Franklin EV scooters?",
    a: "Franklin EV scooters are available in two speed configurations: Low Speed (25 km/h) — ideal for students and home use without a licence requirement in many states — and High Speed (up to 60 km/h) — suitable for office commutes and longer city routes.",
  },
  {
    q: "How far can I go on one charge?",
    a: "With the lithium-ion battery: up to 55 km (low speed) or 60 km (high speed). With the graphene battery: up to 80 km (low speed) or 75 km (high speed). Actual range depends on rider weight, road conditions and terrain.",
  },
  {
    q: "What colours is the POWER variant available in?",
    a: "The Franklin EV POWER comes in four colours: Midnight Black (with orange accents), Ocean Blue, Mint Green and Flame Red — all with dual-tone orange contrast detailing.",
  },
  {
    q: "What colours is the Classic variant available in?",
    a: "The Franklin EV Classic is available in Midnight Black, Champagne Gold and Slate Gray.",
  },
  {
    q: "How much does a full charge cost?",
    a: "Approximately ₹24.50 (around 3.5 units of electricity) for a full charge — giving you up to 80 km of range. Actual cost depends on your local electricity tariff.",
  },
  {
    q: "What warranty comes with Franklin EV scooters?",
    a: "Lithium-ion package: 2+1 years on battery, 12 months on motor and charger and controller. Graphene package: 12 months on battery and motor and controller, 6 months on charger. Final terms are confirmed on invoice by your nearest dealer.",
  },
];

/* ─── COMPONENT ───────────────────────────────────────────────── */

function VehiclesPage() {
  const [activeVariant, setActiveVariant] = useState<VariantKey>("power");
  const [activeBattery, setActiveBattery] = useState<BatteryKey>("lithium");
  const [activeSpeed, setActiveSpeed] = useState<SpeedKey>("low");
  const [activeColorId, setActiveColorId] = useState<string>("black");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const vehicle = vehicles.find((v) => v.key === activeVariant)!;
  const color = vehicle.colors.find((c) => c.id === activeColorId) ?? vehicle.colors[0];
  const battery = batteryOptions.find((b) => b.key === activeBattery)!;
  const speed = speedVariants.find((s) => s.key === activeSpeed)!;
  const currentImage = color.images[activeImageIndex] ?? color.images[0];

  const handleVariantChange = (key: VariantKey) => {
    setActiveVariant(key);
    setActiveColorId("black");
    setActiveImageIndex(0);
  };

  const handleColorChange = (id: string) => {
    const newColor = vehicle.colors.find((c) => c.id === id);
    if (!newColor) return;
    // Preserve same angle label across color switches (Apple-style: same view, new color)
    const currentLabel = color.images[activeImageIndex]?.label;
    const sameAngleIdx = currentLabel
      ? newColor.images.findIndex((img) => img.label === currentLabel)
      : -1;
    setActiveColorId(id);
    setActiveImageIndex(sameAngleIdx >= 0 ? sameAngleIdx : 0);
  };

  const prevImage = () =>
    setActiveImageIndex((i) => (i - 1 + color.images.length) % color.images.length);
  const nextImage = () =>
    setActiveImageIndex((i) => (i + 1) % color.images.length);

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-8 text-center">
        <Reveal>
          <motion.p
            className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3"
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Franklin EV · All Models
          </motion.p>
        </Reveal>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          <WordReveal text="Two Variants. Two Batteries." delay={0.15} />
          <br />
          <span className="text-primary">
            <WordReveal text="One Smart Choice." delay={0.45} />
          </span>
        </h1>
        <Reveal delay={0.5}>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the Franklin EV POWER for sporty performance or the Classic for everyday confidence.
            Both available with lithium-ion or graphene battery at 25 km/h or 60 km/h.
          </p>
        </Reveal>

        {/* Variant tabs */}
        <div className="mt-8 inline-flex rounded-full border border-border bg-surface p-1 shadow-soft">
          {vehicles.map((v) => (
            <button
              key={v.key}
              type="button"
              onClick={() => handleVariantChange(v.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeVariant === v.key
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:text-ink"
              }`}
            >
              {v.name}
            </button>
          ))}
        </div>
      </section>

      {/* ── VEHICLE SHOWCASE ── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVariant}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Gallery */}
            <div className="space-y-4">
              {/* Main image — Apple ambient glow + Harley platform line */}
              <div className="product-showcase-wrap relative rounded-3xl border border-border overflow-hidden aspect-[4/3] flex items-center justify-center"
                style={{ background: "var(--ev-void, #050a0f)" }}
              >
                {/* Ambient glow blob — color changes with swatch */}
                <div
                  className="product-glow-blob"
                  style={{ background: color.swatch }}
                />
                {/* Platform / floor line — Harley-Davidson style */}
                <div
                  className="product-platform-line"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color.swatch}99, transparent)`,
                    boxShadow: `0 0 24px ${color.swatch}66`,
                  }}
                />
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeVariant}-${activeColorId}-${activeImageIndex}`}
                    src={currentImage.src}
                    alt={currentImage.alt}
                    initial={{ opacity: 0, scale: 0.94, x: 8 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 1.02, x: -8 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="product-main-img relative z-10 max-h-[380px] w-full object-contain"
                    style={{ filter: `drop-shadow(0 24px 48px ${color.swatch}44)` }}
                    loading="eager"
                    decoding="async"
                  />
                </AnimatePresence>
                {color.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevImage}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition"
                    >
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition"
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </>
                )}
                <div className="absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
                  {currentImage.label}
                </div>
                <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-sm"
                  style={{ background: `${vehicle.accentColor}22`, color: vehicle.accentColor, borderColor: `${vehicle.accentColor}44` }}
                >
                  {vehicle.badge}
                </div>
              </div>

              {/* Thumbnail strip — Samsung angle selector style */}
              {color.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {color.images.map((img, idx) => (
                    <motion.button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`View ${img.label}`}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      className={`thumb-btn flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-colors duration-200 ${
                        idx === activeImageIndex
                          ? "border-primary"
                          : "border-border/40 opacity-55 hover:opacity-90"
                      }`}
                      style={{ background: "var(--ev-void, #050a0f)" }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-contain p-1"
                        loading="lazy"
                      />
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Colour selector — Apple-style */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Colour
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={color.name}
                      className="text-xs font-bold text-ink"
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 6 }}
                      transition={{ duration: 0.22 }}
                    >
                      — {color.name}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className="flex flex-wrap gap-4">
                  {vehicle.colors.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleColorChange(c.id)}
                      aria-label={`Select ${c.name}`}
                      title={c.name}
                      data-color-name={c.name}
                      className="apple-swatch-btn group"
                    >
                      <span
                        className="apple-swatch-inner"
                        style={{
                          backgroundColor: c.swatch,
                          boxShadow: c.id === activeColorId
                            ? `0 0 0 3px var(--ev-void, #050a0f), 0 0 0 5px ${c.swatch}, 0 0 20px ${c.swatch}66`
                            : `0 0 0 1.5px rgba(255,255,255,0.15)`,
                          transform: c.id === activeColorId ? "scale(1.18)" : "scale(1)",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Specs panel */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {vehicle.badge} Variant
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink mt-1">
                  {vehicle.name}
                </h2>
                <p className="text-xl text-muted-foreground mt-1">{vehicle.tagline}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{vehicle.description}</p>
                <div className="vehicles-price-callout mt-4">
                  Starting from ₹{activeSpeed === "low" ? "59,999" : "74,999"} (ex-showroom)
                </div>
              </div>

              {/* Speed selector */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  Speed Variant
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {speedVariants.map((sv) => (
                    <button
                      key={sv.key}
                      type="button"
                      onClick={() => setActiveSpeed(sv.key)}
                      className={`rounded-2xl border-2 p-4 text-left transition-all ${
                        activeSpeed === sv.key
                          ? "border-primary bg-primary/5"
                          : "border-border bg-surface hover:border-primary/40"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Gauge className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wide text-primary">
                          {sv.key === "low" ? "Low Speed" : "High Speed"}
                        </span>
                      </div>
                      <p className="font-display text-2xl font-bold text-ink">{sv.speed}</p>
                      <p className="text-xs text-muted-foreground mt-1">{sv.best}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Battery selector */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  Battery Type
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {batteryOptions.map((b) => {
                    const Icon = b.icon;
                    return (
                      <button
                        key={b.key}
                        type="button"
                        onClick={() => setActiveBattery(b.key)}
                        className={`rounded-2xl border-2 p-4 text-left transition-all ${
                          activeBattery === b.key
                            ? "border-primary bg-primary/5"
                            : "border-border bg-surface hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`w-4 h-4 ${b.color}`} />
                          <span className={`text-xs font-bold uppercase tracking-wide ${b.color}`}>
                            {b.badge}
                          </span>
                        </div>
                        <p className="font-semibold text-ink text-sm">{b.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{b.tagline}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live stats */}
              <div className="rounded-2xl border border-border bg-surface p-5 space-y-3 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  {speed.label} · {battery.name}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-background p-3">
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-display text-2xl font-bold text-ink">{speed.speed}</p>
                  </div>
                  <div className="rounded-xl bg-background p-3">
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-display text-xl font-bold text-ink">
                      {activeBattery === "lithium"
                        ? activeSpeed === "low" ? "55 km" : "60 km"
                        : activeSpeed === "low" ? "80 km" : "75 km"}
                    </p>
                  </div>
                  <div className="rounded-xl bg-background p-3">
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-semibold text-ink text-sm">{speed.motor}</p>
                  </div>
                  <div className="rounded-xl bg-background p-3">
                    <p className="text-xs text-muted-foreground">Charge Time</p>
                    <p className="font-semibold text-ink text-sm">{battery.specs[2].value}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="grid sm:grid-cols-2 gap-2">
                {vehicle.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink">
                    <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-soft hover:shadow-lift transition-all"
                >
                  Book a Test Ride <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="cinema-btn cinema-btn-quote inline-flex items-center gap-2 px-5 py-3 rounded-full"
                >
                  Get On-Road Price
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-surface text-ink font-semibold hover:border-primary hover:text-primary transition-colors"
                >
                  <Download className="w-4 h-4" /> Request Brochure
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── BATTERY DEEP-DIVE ── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Battery Options</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink mt-2">
              Lithium-Ion vs Graphene
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Both variants support two battery chemistries. Choose based on your priority — longer warranty or faster charge and higher range.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {batteryOptions.map((b) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.key}>
                <article className={`rounded-3xl border-2 p-7 space-y-5 shadow-soft bg-surface ${activeBattery === b.key ? "border-primary" : "border-border"}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wide ${b.color}`}>{b.badge}</span>
                      <h3 className="font-display text-2xl font-bold text-ink mt-1">{b.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{b.tagline}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${b.key === "lithium" ? "bg-blue-50" : "bg-orange-50"}`}>
                      <Icon className={`w-6 h-6 ${b.color}`} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    {b.specs.map((s) => (
                      <div key={s.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <span className="text-sm text-muted-foreground">{s.label}</span>
                        <span className="text-sm font-semibold text-ink">{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl bg-background p-4 space-y-1.5">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Warranty</p>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {[
                        { label: "Battery", val: b.warrantyBattery },
                        { label: "Motor", val: b.warrantyMotor },
                        { label: "Charger", val: b.warrantyCharger },
                      ].map((w) => (
                        <div key={w.label} className="text-center rounded-xl bg-surface border border-border p-2">
                          <p className="text-[10px] text-muted-foreground">{w.label}</p>
                          <p className="text-xs font-bold text-ink mt-0.5">{w.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── SPEED VARIANTS ── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <Reveal>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Speed Variants</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink mt-2">
              25 km/h or 60 km/h
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Both models — POWER and Classic — are available in low-speed and high-speed configurations to match your licence, usage and city regulations.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {speedVariants.map((sv) => (
            <Reveal key={sv.key}>
              <article className="rounded-3xl border border-border bg-surface p-7 shadow-soft space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Gauge className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-primary">
                      {sv.key === "low" ? "Low Speed" : "High Speed"}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-ink">{sv.speed}</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-background p-3">
                    <p className="text-xs text-muted-foreground">Li-Ion Range</p>
                    <p className="font-bold text-ink text-lg">
                      {sv.key === "low" ? "55 km" : "60 km"}
                    </p>
                  </div>
                  <div className="rounded-xl bg-background p-3">
                    <p className="text-xs text-muted-foreground">Graphene Range</p>
                    <p className="font-bold text-ink text-lg">
                      {sv.key === "low" ? "80 km" : "75 km"}
                    </p>
                  </div>
                  <div className="rounded-xl bg-background p-3 col-span-2">
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-semibold text-ink">{sv.motor}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-ink">Best for:</strong> {sv.best}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>


      {/* ── SPEC COMPARISON TABLE ── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <Reveal>
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Specs</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink mt-2">Compare Variants</h2>
          </div>
          <div className="hidden overflow-x-auto rounded-3xl border border-border bg-surface shadow-soft lg:block">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="bg-background border-b border-border">
                  <th className="text-left p-4 font-semibold text-ink w-48">Specification</th>
                  <th className="text-left p-4 font-semibold text-primary">
                    <span className="flex items-center gap-2"><Gauge className="w-4 h-4" /> Low Speed · 25 km/h</span>
                  </th>
                  <th className="text-left p-4 font-semibold text-primary">
                    <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> High Speed · 60 km/h</span>
                  </th>
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
          {/* Mobile cards */}
          <div className="space-y-4 lg:hidden">
            {comparisonRows.map(([spec, low, high]) => (
              <article key={spec} className="rounded-2xl border border-border bg-surface p-4 shadow-soft">
                <h3 className="font-semibold text-ink mb-3">{spec}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {([["Low Speed", low], ["High Speed", high]] as const).map(([label, val]) => (
                    <div key={label} className="rounded-xl bg-background p-3">
                      <span className="text-xs font-bold uppercase tracking-wide text-primary">{label}</span>
                      <p className="mt-1 text-sm text-muted-foreground">{val}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink text-center mb-10">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
        <Reveal>
          <div className="mt-12 text-center rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-border p-8">
            <h3 className="font-display text-2xl font-bold text-ink">
              Ready to experience Franklin EV?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Visit a dealer in Hyderabad for a test ride. Compare both models and battery types in person.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-soft hover:shadow-lift transition-all"
            >
              Book a Test Ride Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="faq-item rounded-2xl bg-surface border border-border shadow-soft overflow-hidden">
      <summary className="faq-question w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer">
        <span className="font-semibold text-ink">{q}</span>
        <span className="faq-chevron text-primary shrink-0">
          <ChevronDown className="w-5 h-5" />
        </span>
      </summary>
      <div className="faq-answer">
        <p className="px-5 pb-5 text-muted-foreground">{a}</p>
      </div>
    </details>
  );
}
