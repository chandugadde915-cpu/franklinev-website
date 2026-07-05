import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowRight,
  Battery,
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
  Users,
  Home,
  Briefcase,
  Award,
  Clock,
  Sparkles,
  DollarSign,
  Smartphone,
  BatteryCharging,
  LockKeyhole,
  TrendingUp,
  Timer,
  Plug,
  Coins,
  Beaker,
} from "lucide-react";
import { Reveal, WordReveal } from "@/components/Reveal";

export const Route = createFileRoute("/vehicles")({
  head: () => ({
    meta: [
      {
        title:
          "Franklin EV Scooters — POWER & RAPID Variants | Lithium-ion & Graphene Battery | Hyderabad",
      },
      {
        name: "description",
        content:
          "Explore Franklin EV POWER and RAPID electric scooter variants in Hyderabad. Compare top speed (25 km/h or 60 km/h), range (55–80 km), lithium-ion vs graphene battery options.",
      },
      {
        name: "keywords",
        content:
          "Franklin EV POWER scooter, Franklin EV RAPID scooter, electric scooter Hyderabad, lithium ion electric scooter, graphene battery electric scooter, electric scooter black blue green red, Franklin EV variants",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large",
      },
      {
        property: "og:title",
        content: "Franklin EV POWER & RAPID — All Variants, Colours & Battery Options",
      },
      {
        property: "og:description",
        content:
          "Compare Franklin EV POWER and RAPID electric scooters. Choose your battery (lithium-ion or graphene) and colour. Book a test ride in Hyderabad.",
      },
      {
        property: "og:url",
        content: "https://franklinev-website.vercel.app/vehicles",
      },
      {
        property: "og:image",
        content: "https://franklinev-website.vercel.app/assets/products/power-black-left.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Franklin EV POWER & RAPID — Choose Your Variant",
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
                    "Sporty high-performance electric scooter with aggressive design, LED projector headlamps and available in 4 colours. Choose lithium-ion or graphene battery.",
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
                  name: "Franklin EV RAPID",
                  brand: { "@type": "Brand", name: "Franklin EV" },
                  description:
                    "Everyday urban electric scooter with clean lines, practical storage and reliable BLDC motor. Available in Flame Red, Ocean Blue, Slate Gray and Mint Green with lithium-ion or graphene battery.",
                  image: [
                    "https://franklinev-website.vercel.app/assets/products/flame-red-left.png",
                    "https://franklinev-website.vercel.app/assets/products/ocean-blue-left.png",
                    "https://franklinev-website.vercel.app/assets/products/slate-gray-left.png",
                    "https://franklinev-website.vercel.app/assets/products/mint-left.png",
                  ],
                  color: "Flame Red, Ocean Blue, Slate Gray, Mint Green",
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

type VariantKey = "power" | "rapid";
type BatteryKey = "lithium" | "graphene";

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
  speed: string;
  lowSpeedRange: string;
  highSpeedRange: string;
  chargeTime: string;
  charger: string;
  chargeCost: string;
  chemistry: string;
  warrantyBattery: string;
  warrantyMotor: string;
  warrantyCharger: string;
  color: string;
  image: string;
  imageAlt: string;
  imageBg: string;
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
}

// ─── UPDATED BATTERY SPECS ────────────────────────────────
const batteryOptions: BatterySpec[] = [
  {
    key: "lithium",
    name: "Lithium-Ion Battery",
    tagline: "Trusted long-life chemistry",
    icon: Battery,
    speed: "60 km/h",         // now shows 60 km/h
    lowSpeedRange: "",        // not used – removed from UI
    highSpeedRange: "60 km/h",
    chargeTime: "~3 h 30 m (0–80%)", // changed to 3.5 h
    charger: "650 W plug-and-play (15 A)",
    chargeCost: "~₹24.50 (~3.5 units)",
    chemistry: "Lithium-Ion cells",
    color: "text-blue-600",
    warrantyBattery: "2 + 1 Years",
    warrantyMotor: "12 Months",
    warrantyCharger: "12 Months",
    image: "/assets/products/power-black-left.png",
    imageAlt: "Franklin EV with Lithium-Ion Battery",
    imageBg: "bg-[#e6f0fa]",
  },
  {
    key: "graphene",
    name: "Graphene Battery",
    tagline: "Higher performance, faster charge",
    icon: Zap,
    speed: "25 km/h",         
    lowSpeedRange: "",        
    highSpeedRange: "25 km/h",
    chargeTime: "~4 h 30 m (0–80%)", 
    charger: "650 W plug-and-play (15 A)",
    chargeCost: "~₹24.50 (~3.5 units)",
    chemistry: "Graphene-enhanced cells",
    color: "text-orange-500",
    warrantyBattery: "12 Months",
    warrantyMotor: "12 Months",
    warrantyCharger: "6 Months",
    image: "/assets/products/power-black-right.png",
    imageAlt: "Franklin EV with Graphene Battery",
    imageBg: "bg-[#fdf0e0]",
  },
];

const vehicles: VehicleModel[] = [
  {
    key: "power",
    name: "Franklin EV POWER PLUS",
    tagline: "Sport-aggressive design. Built to stand out.",
    description:
      "The Franklin EV POWER is designed for riders who want aggressive road presence without compromising daily practicality. Its sculpted front fairing with LED projector headlamps, sharp body lines and bold POWER badging make an unmistakable statement. Available in four striking finishes — choose your battery to match your ride style.",
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
    colors: [
      {
        id: "black",
        name: "Midnight Black",
        swatch: "#1a1a1a",
        images: [
          {
            src: "/assets/products/power-black-left.png",
            alt: "Franklin EV POWER Midnight Black – left side view",
            label: "Left",
          },
          {
            src: "/assets/products/power-black-right.png",
            alt: "Franklin EV POWER Midnight Black – right side view",
            label: "Right",
          },
          {
            src: "/assets/products/power-black-front.png",
            alt: "Franklin EV POWER Midnight Black – front view",
            label: "Front",
          },
        ],
      },
      {
        id: "blue",
        name: "Ocean Blue",
        swatch: "#1a5fa8",
        images: [
          {
            src: "/assets/products/power-blue-left.png",
            alt: "Franklin EV POWER Ocean Blue – left side view",
            label: "Left",
          },
          {
            src: "/assets/products/power-blue-right.png",
            alt: "Franklin EV POWER Ocean Blue – right side view",
            label: "Right",
          },
          {
            src: "/assets/products/power-blue-left2.png",
            alt: "Franklin EV POWER Ocean Blue – angled left view",
            label: "Angle",
          },
          {
            src: "/assets/products/power-blue-tail.png",
            alt: "Franklin EV POWER Ocean Blue – tail light detail",
            label: "Tail",
          },
        ].filter(img => ["Left", "Right", "Front"].includes(img.label)),
      },
      {
        id: "green",
        name: "Mint Green",
        swatch: "#5ecfb0",
        images: [
          {
            src: "/assets/products/power-green-left.png",
            alt: "Franklin EV POWER Mint Green – left side view",
            label: "Left",
          },
          {
            src: "/assets/products/power-green-right.png",
            alt: "Franklin EV POWER Mint Green – right side view",
            label: "Right",
          },
          {
            src: "/assets/products/power-green-front.png",
            alt: "Franklin EV POWER Mint Green – front view",
            label: "Front",
          },
        ],
      },
      {
        id: "red",
        name: "Flame Red",
        swatch: "#c0392b",
        images: [
          {
            src: "/assets/products/power-red-left.png",
            alt: "Franklin EV POWER Flame Red – left side view",
            label: "Left",
          },
          {
            src: "/assets/products/power-red-right.png",
            alt: "Franklin EV POWER Flame Red – right side view",
            label: "Right",
          },
          {
            src: "/assets/products/power-red-front.png",
            alt: "Franklin EV POWER Flame Red – front view",
            label: "Front",
          },
        ],
      },
    ],
  },
  {
    key: "rapid",
    name: "Franklin EV RAPID",
    tagline: "Clean lines. Everyday confidence.",
    description:
      "The Franklin EV RAPID is engineered for the everyday Indian rider who values reliability, comfort and low running cost. Its clean, uncluttered design fits seamlessly into city life — whether it's the morning school run, office commute or evening errands. Available in four versatile finishes with full lithium-ion and graphene battery options.",
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
    colors: [
      {
        id: "flame-red",
        name: "Flame Red",
        swatch: "#c0392b",
        images: [
          {
            src: "/assets/products/upred.png",
            alt: "Franklin EV RAPID Flame Red – front view",
            label: "Front",
          },
          {
            src: "/assets/products/red.png",
            alt: "Franklin EV RAPID Flame Red – left side view",
            label: "Right",
          },
          {
            src: "/assets/products/redright.png",
            alt: "Franklin EV RAPID Flame Red – right side view",
            label: "Left",
          },
        ],
      },
      {
        id: "ocean-blue",
        name: "Ocean Blue",
        swatch: "#1a5fa8",
        images: [
          {
            src: "/assets/products/bluefront.png",
            alt: "Franklin EV RAPID Ocean Blue – front view",
            label: "Front",
          },
          {
            src: "/assets/products/bluelef.png",
            alt: "Franklin EV RAPID Ocean Blue – left side view",
            label: "Right",
          },
          {
            src: "/assets/products/bluerig.png",
            alt: "Franklin EV RAPID Ocean Blue – right side view",
            label: "Left",
          },
        ],
      },
      {
        id: "slate-gray",
        name: "Slate Gray",
        swatch: "#6b7280",
        images: [
          {
            src: "/assets/products/frntslate.png",
            alt: "Franklin EV RAPID Slate Gray – front view",
            label: "Front",
          },
          {
            src: "/assets/products/rigslate.png",
            alt: "Franklin EV RAPID Slate Gray – right side view",
            label: "Right",
          },
          {
            src: "/assets/products/slateleft.png",
            alt: "Franklin EV RAPID Slate Gray – left side view",
            label: "Left",
          },
        ],
      },
      {
        id: "mint-green",
        name: "Mint Green",
        swatch: "#5ecfb0",
        images: [
          {
            src: "/assets/products/mintfront.png",
            alt: "Franklin EV RAPID Mint Green – front view",
            label: "Front",
          },
        ],
      },
    ],
  },
];

const comparisonRows = [
  ["Motor", "High-Speed BLDC Package", "250W BLDC Hub Motor"],
  ["Top Speed", "60 km/h", "25 km/h"],
  ["Range", "Up to 80 km", "Up to 55 km"],
  ["Charge time", "~3 h 30 m (0–80%)", "~4 h 30 m (0–80%)"],
  ["Charger", "650 W plug-and-play (15 A socket)", "650 W plug-and-play (15 A socket)"],
  ["Full-charge cost", "~₹24.50 (~3.5 units)", "~₹24.50 (~3.5 units)"],
  [
    "Warranty (Battery / Motor / Charger)",
    "2+1 yr / 12 mo / 12 mo",
    "12 mo / 12 mo / 6 mo",
  ],
  [
    "POWER colours",
    "Midnight Black, Ocean Blue, Mint Green, Flame Red",
    "Midnight Black, Ocean Blue, Mint Green, Flame Red",
  ],
  [
    "RAPID colours",
    "Flame Red, Ocean Blue, Slate Gray, Mint Green",
    "Flame Red, Ocean Blue, Slate Gray, Mint Green",
  ],
] as const;

const faqs = [
  {
    q: "What are the two Franklin EV models?",
    a: "Franklin EV offers two variants: the POWER — a sport-styled scooter with aggressive front fairing and LED projector headlamps — and the RAPID — a clean, practical everyday scooter designed for comfortable urban commuting.",
  },
  {
    q: "What is the difference between lithium-ion and graphene battery?",
    a: "The lithium-ion battery offers a 2+1 year warranty and a top speed of 25 km/h. The graphene battery charges faster (~3 h 30 m vs 4 h 30 m) and provides a top speed of 60 km/h with up to 80 km range. Both use a standard 650 W plug-and-play charger on any 15 A home socket.",
  },
  {
    q: "What is the top speed of Franklin EV scooters?",
    a: "With the lithium-ion battery, the top speed is 25 km/h — ideal for students and home use. With the graphene battery, the top speed is up to 60 km/h — suitable for office commutes and longer city routes.",
  },
  {
    q: "How far can I go on one charge?",
    a: "With the lithium-ion battery: up to 55 km. With the graphene battery: up to 80 km. Actual range depends on rider weight, road conditions and terrain.",
  },
  {
    q: "What colours is the POWER variant available in?",
    a: "The Franklin EV POWER comes in four colours: Midnight Black (with orange accents), Ocean Blue, Mint Green and Flame Red — all with dual-tone orange contrast detailing.",
  },
  {
    q: "What colours is the RAPID variant available in?",
    a: "The Franklin EV RAPID is available in Flame Red, Ocean Blue, Slate Gray and Mint Green.",
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
  const [activeColorId, setActiveColorId] = useState<string>("black");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const vehicle = vehicles.find((v) => v.key === activeVariant)!;
  const color = vehicle.colors.find((c) => c.id === activeColorId) ?? vehicle.colors[0];
  const images = color.images;
  const battery = batteryOptions.find((b) => b.key === activeBattery)!;
  const currentImage = images[activeImageIndex] ?? images[0];

  // ── Auto‑play slideshow ──
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const slideInterval = 2000; // 2 seconds

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (images.length <= 1) {
      timerRef.current = null;
      return;
    }
    timerRef.current = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, slideInterval);
  }, [images.length]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    startTimer();
  }, [startTimer]);

  const pauseTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Start timer on mount and when images change
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // ── Handlers ──
  const handleVariantChange = (key: VariantKey) => {
    setActiveVariant(key);
    const newVehicle = vehicles.find((v) => v.key === key)!;
    const firstColor = newVehicle.colors[0];
    setActiveColorId(firstColor.id);
    setActiveImageIndex(0);
    resetTimer();
  };

  const handleColorChange = (id: string) => {
    const newColor = vehicle.colors.find((c) => c.id === id);
    if (!newColor) return;
    const currentLabel = images[activeImageIndex]?.label;
    const newImages = newColor.images;
    const sameAngleIdx = currentLabel
      ? newImages.findIndex((img) => img.label === currentLabel)
      : -1;
    setActiveColorId(id);
    setActiveImageIndex(sameAngleIdx >= 0 ? sameAngleIdx : 0);
    resetTimer();
  };

  const prevImage = () => {
    setActiveImageIndex((i) => (i - 1 + images.length) % images.length);
    resetTimer();
  };

  const nextImage = () => {
    setActiveImageIndex((i) => (i + 1) % images.length);
    resetTimer();
  };

  // Split FAQ into two columns (4 left, 4 right)
  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4, 8);

  const premiumGradient = "linear-gradient(90deg, #18BFEA 0%, #24CFA0 50%, #52E636 100%)";

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
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            <WordReveal text="One Smart Choice." delay={0.45} />
          </span>
        </h1>
        <Reveal delay={0.5}>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the Franklin EV POWER for sporty performance or the RAPID for everyday
            confidence. Both available with lithium-ion or graphene battery.
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
                  ? "text-white shadow-md"
                  : "text-muted-foreground hover:text-ink"
              }`}
              style={
                activeVariant === v.key
                  ? {
                      background: premiumGradient,
                      boxShadow: "0 4px 12px rgba(36, 207, 160, 0.35)",
                    }
                  : {}
              }
            >
              {v.name}
            </button>
          ))}
        </div>
      </section>

      {/* ── VEHICLE SHOWCASE – with larger image ── */}
      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVariant}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center"
          >
            {/* Main image container – increased max width */}
            <div
              className="relative w-full max-w-4xl rounded-3xl border border-border overflow-hidden aspect-[4/3] flex items-center justify-center"
              style={{
                background: activeVariant === 'rapid' 
                  ? 'transparent' 
                  : `radial-gradient(circle at 30% 40%, ${color.swatch}44, #0a0a0a 90%)`,
              }}
              onMouseEnter={pauseTimer}
              onMouseLeave={resetTimer}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeVariant}-${activeColorId}-${activeImageIndex}`}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 max-h-[600px] w-full object-contain p-10 drop-shadow-2xl"
                  loading="eager"
                  decoding="async"
                />
              </AnimatePresence>
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-border/60 flex items-center justify-center hover:bg-white transition"
                  >
                    <ChevronLeft className="w-4 h-4 text-ink" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-border/60 flex items-center justify-center hover:bg-white transition"
                  >
                    <ChevronRight className="w-4 h-4 text-ink" />
                  </button>
                </>
              )}
              <div className="absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-border/60 text-xs font-semibold text-ink shadow-sm">
                {currentImage.label}
              </div>
              <div
                className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-sm"
                style={{
                  background: `${vehicle.accentColor}22`,
                  color: vehicle.accentColor,
                  borderColor: `${vehicle.accentColor}44`,
                }}
              >
                {vehicle.badge}
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-4 flex flex-wrap justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {images.map((img, idx) => (
                  <motion.button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveImageIndex(idx);
                      resetTimer();
                    }}
                    aria-label={`View ${img.label}`}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-colors duration-200 ${
                      idx === activeImageIndex
                        ? "border-primary"
                        : "border-border/40 opacity-55 hover:opacity-90"
                    }`}
                    style={{ background: "#f8fafc" }}
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

            {/* Color selector */}
            <div className="mt-6 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-3">
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
              <div className="flex flex-wrap gap-4 justify-center">
                {vehicle.colors.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleColorChange(c.id)}
                    aria-label={`Select ${c.name}`}
                    title={c.name}
                    className="group relative"
                  >
                    <span
                      className={`block w-12 h-12 rounded-full transition-all duration-300 ${
                        c.id === activeColorId
                          ? "ring-2 ring-primary ring-offset-2 scale-110 shadow-lg"
                          : "ring-1 ring-border/30 hover:scale-105"
                      }`}
                      style={{ backgroundColor: c.swatch }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── CRAFTED FOR EVERY RIDE ── */}
      <section className="w-full py-24 px-5 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #020617 0%, #0B2545 100%)',
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Crafted for Every Ride
            </span>
            <h2 className="font-display heading-section font-bold text-white mt-3 leading-tight">
              Crafted for <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Every Ride</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Every detail is designed to enhance comfort, control, and confidence on the road.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-stretch">
            <div className="md:col-span-2 flex items-center justify-center relative min-h-[400px]">
              <motion.div
                className="relative w-full max-w-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full scale-110 -z-10" />
                <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full scale-125 -z-20" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/30 blur-xl rounded-full -z-5" />
                <img
                  src="/assets/editorial/franklin5.webp"
                  alt="Franklin EV – Hero"
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                  style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%231e293b"/%3E%3Ctext x="200" y="150" font-family="sans-serif" font-size="18" fill="%2394a3b8" text-anchor="middle" dominant-baseline="middle"%3EImage%20not%20found%3C/text%3E%3C/svg%3E';
                  }}
                />
              </motion.div>
            </div>
            <div className="md:col-span-3 flex items-center justify-center relative min-h-[400px]">
              <motion.div
                className="relative w-full h-full flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-emerald-500/5 blur-2xl" />
                <img
                  src="/assets/editorial/model.png"
                  alt="Franklin EV Model"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%231e293b"/%3E%3Ctext x="200" y="150" font-family="sans-serif" font-size="18" fill="%2394a3b8" text-anchor="middle" dominant-baseline="middle"%3EModel%20not%20found%3C/text%3E%3C/svg%3E';
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BATTERY COMPARISON ── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Battery Technology
          </span>
          <h2 className="font-display heading-section font-bold text-ink mt-3">
            Choose Your <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Power</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Two battery chemistries, one intelligent choice. Pick the variant that matches your riding style.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {batteryOptions.map((b, index) => {
            const Icon = b.icon;
            const isActive = activeBattery === b.key;

            // ─── Only high-speed range, removed low-speed ───
            const specItems = [
              { label: "High-speed range", value: b.highSpeedRange, icon: TrendingUp },
              { label: "Charge time", value: b.chargeTime, icon: Timer },
              { label: "Charger", value: b.charger, icon: Plug },
              { label: "Full charge cost", value: b.chargeCost, icon: Coins },
              { label: "Chemistry", value: b.chemistry, icon: Beaker },
            ];

            const warrantyItems = [
              { label: "Battery", value: b.warrantyBattery },
              { label: "Motor", value: b.warrantyMotor },
              { label: "Charger", value: b.warrantyCharger },
            ];

            return (
              <Reveal key={b.key} delay={index * 0.1}>
                <motion.div
                  className={`relative bg-white/70 backdrop-blur-xl border ${
                    isActive ? "border-primary/40" : "border-white/80"
                  } rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 cursor-pointer p-8 lg:p-10 overflow-hidden`}
                  onClick={() => setActiveBattery(b.key)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-ink">
                      {b.name}
                    </h3>
                    <Icon className={`w-6 h-6 ${b.color}`} />
                  </div>

                  <div className="space-y-0.5">
                    {specItems.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between py-2.5 border-b border-border/30 last:border-0"
                      >
                        <div className="flex items-center gap-2.5">
                          <item.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-[15px] text-muted-foreground">{item.label}</span>
                        </div>
                        <span className="text-[15px] font-semibold text-ink">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                      WARRANTY
                    </p>
                    <div className="grid grid-cols-3 gap-2.5">
                      {warrantyItems.map((item) => (
                        <div
                          key={item.label}
                          className="bg-white/60 backdrop-blur-sm border border-border/30 rounded-xl p-2.5 text-center shadow-sm"
                        >
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                            {item.label}
                          </p>
                          <p className="text-xs font-bold text-ink mt-0.5">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── SPEC COMPARISON TABLE ── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <Reveal>
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Specs</span>
            <h2 className="font-display heading-section font-bold text-ink mt-2">
              Compare Variants
            </h2>
          </div>
          <div className="hidden overflow-x-auto rounded-3xl border border-border bg-surface shadow-soft lg:block">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="bg-background border-b border-border">
                  <th className="text-left p-4 font-semibold text-ink w-48">Specification</th>
                  <th className="text-left p-4 font-semibold text-primary">
                    <span className="flex items-center gap-2">
                      <Battery className="w-4 h-4" /> Lithium-Ion
                    </span>
                  </th>
                  <th className="text-left p-4 font-semibold text-primary">
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Graphene
                    </span>
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
          <div className="space-y-4 lg:hidden">
            {comparisonRows.map(([spec, low, high]) => (
              <article
                key={spec}
                className="rounded-2xl border border-border bg-surface p-4 shadow-soft"
              >
                <h3 className="font-semibold text-ink mb-3">{spec}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      ["Lithium-Ion", low],
                      ["Graphene", high],
                    ] as const
                  ).map(([label, val]) => (
                    <div key={label} className="rounded-xl bg-background p-3">
                      <span className="text-xs font-bold uppercase tracking-wide text-primary">
                        {label}
                      </span>
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
      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <h2 className="font-display heading-section font-bold text-ink text-center mb-10">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-3">
            {leftFaqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
          <div className="space-y-3">
            {rightFaqs.map((f, i) => (
              <FaqItem key={i + 4} q={f.q} a={f.a} />
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-12 text-center rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-border p-8">
            <h3 className="font-display text-2xl font-bold text-ink">
              Ready to experience Franklin EV?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Visit a dealer in Hyderabad for a test ride. Compare both models and battery types in
              person.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
              style={{
                background: premiumGradient,
                boxShadow: '0 10px 30px rgba(36, 207, 160, 0.35)',
              }}
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
    <details className="rounded-2xl bg-surface border border-border shadow-soft overflow-hidden">
      <summary className="w-full flex items-center justify-between gap-4 p-4 text-left cursor-pointer hover:bg-background/50 transition-colors">
        <span className="font-semibold text-ink text-sm">{q}</span>
        <span className="text-primary shrink-0 transition-transform duration-300 group-open:rotate-180">
          <ChevronDown className="w-5 h-5" />
        </span>
      </summary>
      <div className="px-4 pb-4">
        <p className="text-sm text-muted-foreground">{a}</p>
      </div>
    </details>
  );
}


