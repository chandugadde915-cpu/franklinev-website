import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  Apple,
  BatteryCharging,
  Bell,
  Check,
  Gauge,
  LockKeyhole,
  MapPin,
  Navigation,
  Play,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Wallet,
  Zap,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Franklin EV | India's Smart Electric Scooter Brand for Everyday Freedom",
      },
      {
        name: "description",
        content:
          "Experience Franklin EV in Hyderabad with smart electric scooters built for everyday freedom, up to 120 km range, cruise control, home charging, smart features and low running cost.",
      },
      {
        name: "keywords",
        content:
          "best electric scooter in Hyderabad, affordable electric scooter in Hyderabad, long range electric scooter in Hyderabad, electric scooter with cruise control in India, best electric scooter for daily commute in Hyderabad, smart electric scooter with app connectivity, electric scooter showroom in Hyderabad, electric scooter test ride in Hyderabad, electric scooter dealer near Gachibowli, electric scooter charging cost in Hyderabad",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "IN-TG" },
      { name: "geo.placename", content: "Hyderabad, Telangana" },
      {
        property: "og:title",
        content: "Franklin EV - India's Smart Electric Scooter Brand for Everyday Freedom",
      },
      {
        property: "og:description",
        content:
          "Discover smarter city commuting with Franklin EV electric scooters built for Indian riders, everyday freedom, lower running costs, convenient home charging and intelligent technology.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://franklinev-website.vercel.app/assets/hero-powerplus.jpg",
      },
      {
        property: "og:image:secure_url",
        content: "https://franklinev-website.vercel.app/assets/hero-powerplus.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Franklin EV Power ++ premium electric scooter launch hero.",
      },
      { property: "og:url", content: "https://franklinev-website.vercel.app" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Franklin EV Smart Electric Scooters in Hyderabad" },
      {
        name: "twitter:description",
        content:
          "Explore Franklin EV smart electric scooters for daily commute, home charging, low running cost and local test ride support in Hyderabad.",
      },
      {
        name: "twitter:image",
        content: "https://franklinev-website.vercel.app/assets/hero-powerplus.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://franklinev-website.vercel.app/" },
      { rel: "preload", as: "image", href: "/assets/hero-powerplus.jpg" },
      { rel: "preload", as: "image", href: "/assets/hero-sequence/frame-001.jpg" },
    ],
  }),
  component: Home,
});

const cities = [
  "AS Rao Nagar",
  "Kanajiguda",
  "Boduppal",
  "Chintal",
  "Champapet",
  "Malkajgiri",
  "Hayath Nagar",
  "Manikonda",
  "Nalgonda",
  "Karimnagar",
  "Mancherial",
  "Vikarabad",
  "Kothagudem",
  "Bhupalpally",
  "Khammam",
  "Kollapur",
  "Vemulawada",
  "Jammikunta",
  "Srikakulam",
  "Visakhapatnam",
];

const dealerGroups = [
  {
    state: "Telangana",
    cities: cities.filter((city) => !["Srikakulam", "Visakhapatnam"].includes(city)),
  },
  {
    state: "Andhra Pradesh",
    cities: ["Srikakulam", "Visakhapatnam"],
  },
] as const;

const heroSequenceFrameCount = 92;
const heroSequenceFrames = Array.from(
  { length: heroSequenceFrameCount },
  (_, index) => `/assets/hero-sequence/frame-${String(index + 1).padStart(3, "0")}.jpg`,
);
const heroSequenceSize = { width: 1600, height: 817 } as const;
const heroSingleScrollDistanceRatio = 0.28;

const features = [
  {
    Icon: Gauge,
    title: "Cruise Control",
    body: "Enjoy smoother journeys with one of the most sought-after features in a modern electric scooter with cruise control.",
  },
  {
    Icon: Smartphone,
    title: "Smart Connectivity",
    body: "Stay connected through intelligent vehicle monitoring, ride information, battery status and maintenance insights.",
  },
  {
    Icon: BatteryCharging,
    title: "Long Range Performance",
    body: "Travel confidently with a long range electric scooter in Hyderabad designed to support daily commuting needs.",
  },
  {
    Icon: Zap,
    title: "Home Charging Convenience",
    body: "Charge easily at home and eliminate unnecessary trips to fuel stations.",
  },
  {
    Icon: LockKeyhole,
    title: "Anti-Theft Security",
    body: "Advanced security features help provide greater peace of mind wherever you ride.",
  },
  {
    Icon: Wallet,
    title: "Low Ownership Cost",
    body: "Spend less on maintenance while enjoying a dependable and efficient mobility solution.",
  },
] as const;

const riderStories = [
  {
    title: "Professionals",
    body: "Professionals appreciate the savings and the practical city commute experience for routes across Hyderabad.",
  },
  {
    title: "Students",
    body: "Students enjoy the convenience, easier charging routine and simple daily mobility.",
  },
  {
    title: "Families",
    body: "Families value reliable performance, low running cost and simple ownership support.",
  },
  {
    title: "Business Owners",
    body: "Business owners benefit from lower operating costs and fewer maintenance interruptions every month.",
  },
] as const;

const faqItems = [
  {
    question: "How far can a Franklin EV scooter travel on a single charge?",
    answer:
      "Range depends on model, riding mode, load and road conditions. Franklin EV highlights up to 120 km range for suitable model configurations.",
  },
  {
    question: "How much does it cost to charge an electric scooter?",
    answer:
      "Charging cost depends on your electricity tariff and battery usage, but daily electric scooter charging is typically much lower than petrol running cost.",
  },
  {
    question: "How long does charging take?",
    answer:
      "Charging time varies by model, battery condition and charger type, but most riders can plan charging comfortably around home or overnight routines.",
  },
  {
    question: "Can I charge my Franklin EV scooter at home?",
    answer:
      "Yes. Franklin EV ownership is designed around convenient home charging with a standard compatible socket and dealer guidance.",
  },
  {
    question: "What warranty coverage is available?",
    answer:
      "Warranty coverage depends on the model and battery package, and Franklin EV provides warranty support guidance through its sales and service network before delivery.",
  },
  {
    question: "What maintenance does an electric scooter require?",
    answer:
      "Electric scooters have fewer moving parts than petrol scooters, helping reduce engine oil changes, fuel-system maintenance and regular running expenses.",
  },
  {
    question: "Where are Franklin EV service centres located?",
    answer:
      "Franklin EV supports riders through dealer and service locations across Hyderabad, Telangana and Andhra Pradesh. Contact the team before visiting to confirm availability.",
  },
  {
    question: "Why choose Franklin EV over a petrol scooter?",
    answer:
      "Franklin EV offers lower running costs, convenient charging, smart features, quieter riding and a cleaner commuting experience for city riders.",
  },
] as const;

const heroTrustItems = [
  "Up to 120 KM Range",
  "Cruise Control",
  "Smart Features",
  "Home Charging",
  "Low Running Cost",
] as const;

const heroCalloutItems = [
  { value: "120", unit: "km", label: "Up to range", icon: "zap", ariaLabel: "Up to 120 km range" },
  {
    value: "4.5",
    unit: "hrs",
    label: "0-80% charge time",
    icon: "battery",
    ariaLabel: "4.5 hours 0 to 80 percent charge time",
  },
  { value: "60", unit: "km/h", label: "Top speed", icon: "gauge", ariaLabel: "60 kilometres per hour top speed" },
  {
    value: "3",
    unit: "yrs",
    label: "Battery & motor warranty",
    icon: "shield",
    ariaLabel: "3 years battery and motor warranty",
  },
] as const;

const riderSwitchBenefits = [
  {
    title: "Lower charging costs",
    body: "Electricity costs roughly Rs. 0.08-0.12 per km vs Rs. 3-4/km for petrol, saving most Hyderabad riders Rs. 1,800-2,500 per month.",
  },
  {
    title: "Reduced maintenance requirements",
    body: "No engine oil, coolant, or spark plugs. Fewer moving parts means fewer workshop visits and fewer unexpected repair bills.",
  },
  {
    title: "No engine oil changes",
    body: "Electric motors need no oil changes. Remove Rs. 400-800 oil change costs every 3 months from your ownership equation.",
  },
  {
    title: "Convenient home charging",
    body: "Charge overnight with a standard compatible socket. Wake up with a full charge and skip petrol station detours.",
  },
  {
    title: "Sustainable transportation",
    body: "Zero tailpipe emissions reduce your personal carbon footprint and support cleaner air across Hyderabad.",
  },
  {
    title: "Long-term ownership savings",
    body: "Over 3 years, Franklin EV riders typically save over Rs. 82,000 compared with equivalent petrol scooter ownership costs.",
  },
] as const;

function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const heroCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroImageCacheRef = useRef<(HTMLImageElement | null)[]>([]);
  const lastDrawnHeroFrameRef = useRef(-1);
  const heroFrameProgressRef = useRef(0);
  const heroScrollFrameRef = useRef(0);
  const [heroFrameIndex, setHeroFrameIndex] = useState(0);
  const [isHeroFrameReady, setIsHeroFrameReady] = useState(false);
  const [useCompactHero, setUseCompactHero] = useState(true);
  const [heroLaunchProgress, setHeroLaunchProgress] = useState(1);

  const activeHeroFrame = heroFrameIndex;

  const syncHeroLaunchProgress = useCallback((progress: number) => {
    const nextProgress = Math.min(Math.max(progress * 1.05, 0), 1);
    setHeroLaunchProgress((current) =>
      Math.abs(current - nextProgress) < 0.012 ? current : nextProgress,
    );
  }, []);

  const setHeroProgress = useCallback((nextProgress: number) => {
    const clampedProgress = Math.min(Math.max(nextProgress, 0), 1);
    heroFrameProgressRef.current = clampedProgress;
    syncHeroLaunchProgress(clampedProgress);
    const nextFrameIndex = Math.min(
      heroSequenceFrameCount - 1,
      Math.round(clampedProgress * (heroSequenceFrameCount - 1)),
    );
    setHeroFrameIndex((current) => (current !== nextFrameIndex ? nextFrameIndex : current));
  }, [syncHeroLaunchProgress]);

  const loadHeroFrameImage = useCallback((index: number, priority: "high" | "low" = "low") => {
    const src = heroSequenceFrames[index];
    if (!src) {
      return null;
    }

    const cached = heroImageCacheRef.current[index];
    if (cached) {
      if (priority === "high" && "fetchPriority" in cached) {
        cached.fetchPriority = "high";
      }
      return cached;
    }

    const image = new Image();
    image.decoding = "async";
    if ("fetchPriority" in image) {
      image.fetchPriority = priority;
    }
    image.src = src;
    heroImageCacheRef.current[index] = image;
    return image;
  }, []);

  const decodeHeroFrameImage = useCallback((image: HTMLImageElement | null) => {
    if (!image || typeof image.decode !== "function") {
      return;
    }

    void image.decode().catch(() => undefined);
  }, []);

  const drawHeroFrame = useCallback(
    (index: number) => {
      const canvas = heroCanvasRef.current;
      const image = loadHeroFrameImage(index);

      if (!canvas || !image || !image.complete || image.naturalWidth === 0) {
        return false;
      }

      const context = canvas.getContext("2d", { alpha: false });
      if (!context) {
        return false;
      }

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = canvas.clientWidth || window.innerWidth;
      const displayHeight = canvas.clientHeight || window.innerHeight;
      const canvasWidth = Math.max(1, Math.round(displayWidth * pixelRatio));
      const canvasHeight = Math.max(1, Math.round(displayHeight * pixelRatio));

      if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
      }

      const imageAspect = image.naturalWidth / image.naturalHeight;
      const canvasAspect = canvasWidth / canvasHeight;
      let sourceX = 0;
      let sourceY = 0;
      let sourceWidth = image.naturalWidth;
      let sourceHeight = image.naturalHeight;

      if (imageAspect > canvasAspect) {
        sourceWidth = sourceHeight * canvasAspect;
        sourceX = (image.naturalWidth - sourceWidth) / 2;
      } else {
        sourceHeight = sourceWidth / canvasAspect;
        sourceY = (image.naturalHeight - sourceHeight) / 2;
      }

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(
        image,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        0,
        0,
        canvasWidth,
        canvasHeight,
      );
      lastDrawnHeroFrameRef.current = index;
      setIsHeroFrameReady(true);
      return true;
    },
    [loadHeroFrameImage],
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactWidthQuery = window.matchMedia("(max-width: 768px)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const navigatorWithConnection = navigator as Navigator & {
      connection?: { effectiveType?: string; saveData?: boolean };
    };

    const syncHeroMode = () => {
      const connection = navigatorWithConnection.connection;
      const saveData = connection?.saveData === true;
      const slowNetwork = /(^|-)2g$/.test(connection?.effectiveType ?? "");
      const compact =
        reducedMotionQuery.matches ||
        compactWidthQuery.matches ||
        coarsePointerQuery.matches ||
        saveData ||
        slowNetwork;

      setUseCompactHero(compact);
      if (compact) {
        setHeroProgress(1);
        setHeroLaunchProgress(1);
      }
    };

    syncHeroMode();
    reducedMotionQuery.addEventListener("change", syncHeroMode);
    compactWidthQuery.addEventListener("change", syncHeroMode);
    coarsePointerQuery.addEventListener("change", syncHeroMode);

    return () => {
      reducedMotionQuery.removeEventListener("change", syncHeroMode);
      compactWidthQuery.removeEventListener("change", syncHeroMode);
      coarsePointerQuery.removeEventListener("change", syncHeroMode);
    };
  }, [setHeroProgress]);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    if (useCompactHero) {
      setHeroProgress(1);
      return;
    }

    const syncHeroProgressFromViewport = () => {
      const rect = hero.getBoundingClientRect();

      if (rect.top >= 0) {
        setHeroProgress(0);
        return;
      }

      if (rect.bottom <= window.innerHeight) {
        setHeroProgress(1);
        return;
      }

      const singleScrollTravel = Math.max(window.innerHeight * heroSingleScrollDistanceRatio, 1);
      const traveled = Math.min(Math.max(-rect.top, 0), singleScrollTravel);
      setHeroProgress(traveled / singleScrollTravel);
    };

    const requestHeroProgressSync = () => {
      if (heroScrollFrameRef.current) {
        return;
      }

      heroScrollFrameRef.current = requestAnimationFrame(() => {
        heroScrollFrameRef.current = 0;
        syncHeroProgressFromViewport();
      });
    };

    syncHeroProgressFromViewport();
    window.addEventListener("scroll", requestHeroProgressSync, { passive: true });
    window.addEventListener("resize", requestHeroProgressSync);

    return () => {
      cancelAnimationFrame(heroScrollFrameRef.current);
      heroScrollFrameRef.current = 0;
      window.removeEventListener("scroll", requestHeroProgressSync);
      window.removeEventListener("resize", requestHeroProgressSync);
    };
  }, [setHeroProgress, useCompactHero]);

  useEffect(() => {
    if (useCompactHero) {
      return;
    }

    const preloadStart = Math.max(0, activeHeroFrame - 2);
    const preloadEnd = Math.min(heroSequenceFrames.length, activeHeroFrame + 9);

    for (let index = preloadStart; index < preloadEnd; index += 1) {
      const image = loadHeroFrameImage(index, index <= activeHeroFrame + 2 ? "high" : "low");
      decodeHeroFrameImage(image);

      if (index === activeHeroFrame && image && !image.complete) {
        image.addEventListener(
          "load",
          () => {
            drawHeroFrame(index);
          },
          { once: true },
        );
      }
    }

    if (!drawHeroFrame(activeHeroFrame)) {
      const image = loadHeroFrameImage(activeHeroFrame, "high");
      decodeHeroFrameImage(image);
      if (image) {
        image.addEventListener(
          "load",
          () => {
            drawHeroFrame(activeHeroFrame);
          },
          { once: true },
        );
      }
    }
  }, [activeHeroFrame, decodeHeroFrameImage, drawHeroFrame, loadHeroFrameImage, useCompactHero]);

  useEffect(() => {
    if (useCompactHero) {
      return;
    }

    let cancelled = false;
    let idleCallbackId = 0;
    let warmupTimer = 0;
    let nextIndex = Math.min(10, heroSequenceFrames.length);

    for (let index = 0; index < nextIndex; index += 1) {
      decodeHeroFrameImage(loadHeroFrameImage(index, index < 4 ? "high" : "low"));
    }

    const warmRemainingFrames = (deadline?: IdleDeadline) => {
      if (cancelled) {
        return;
      }

      let framesProcessed = 0;

      while (
        nextIndex < heroSequenceFrames.length &&
        framesProcessed < 10 &&
        (deadline ? deadline.timeRemaining() > 6 : true)
      ) {
        decodeHeroFrameImage(loadHeroFrameImage(nextIndex, "low"));
        nextIndex += 1;
        framesProcessed += 1;
      }

      if (nextIndex >= heroSequenceFrames.length || cancelled) {
        return;
      }

      if ("requestIdleCallback" in window) {
        idleCallbackId = window.requestIdleCallback(warmRemainingFrames, { timeout: 1200 });
      } else {
        warmupTimer = window.setTimeout(() => warmRemainingFrames(), 180);
      }
    };

    if ("requestIdleCallback" in window) {
      idleCallbackId = window.requestIdleCallback(warmRemainingFrames, { timeout: 900 });
    } else {
      warmupTimer = window.setTimeout(() => warmRemainingFrames(), 240);
    }

    return () => {
      cancelled = true;
      if (idleCallbackId) {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (warmupTimer) {
        window.clearTimeout(warmupTimer);
      }
    };
  }, [decodeHeroFrameImage, loadHeroFrameImage, useCompactHero]);

  useEffect(() => {
    if (useCompactHero) {
      return;
    }

    const redrawCurrentFrame = () => {
      const frameToDraw =
        lastDrawnHeroFrameRef.current >= 0 ? lastDrawnHeroFrameRef.current : activeHeroFrame;
      drawHeroFrame(frameToDraw);
    };

    redrawCurrentFrame();
    window.addEventListener("resize", redrawCurrentFrame);

    return () => window.removeEventListener("resize", redrawCurrentFrame);
  }, [activeHeroFrame, drawHeroFrame, useCompactHero]);

  return (
    <section
      className={`cinema-hero${useCompactHero ? " is-compact" : ""}${
        isHeroFrameReady ? " is-sequence-ready" : ""
      }`}
      id="hero"
      ref={heroRef}
      aria-label="Franklin EV hero - smart electric scooters in India"
    >
      <div className="cinema-hero-stage">
        <canvas
          ref={heroCanvasRef}
          className="cinema-hero-video"
          width={heroSequenceSize.width}
          height={heroSequenceSize.height}
          aria-hidden="true"
        />
        <img
          src="/assets/hero-powerplus.jpg"
          alt=""
          className="cinema-hero-poster"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width={2000}
          height={1334}
          aria-hidden="true"
        />
        <div className="cinema-hero-rings" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="cinema-road" aria-hidden="true" />
        <div className="cinema-hero-shade" aria-hidden="true" />

        <div
          className={`cinema-hero-content${heroLaunchProgress > 0.04 ? " is-launching" : ""}`}
          style={{ "--launch-progress": heroLaunchProgress } as CSSProperties}
        >
          <div className="cinema-hero-copy">
            <div className="cinema-eyebrow">
              <Sparkles className="h-4 w-4" />
              India's Smart Electric Scooter Brand
            </div>
            <h1 className="cinema-hero-title">
              <span>India's smart electric </span>
              <span>
                scooter brand for <em>everyday freedom</em>.
              </span>
            </h1>
            <p className="cinema-hero-sub">
              Experience smart electric scooters built for Indian riders, with long range
              performance, cruise control, home charging and low running cost for daily commute.
            </p>
            <div className="cinema-hero-actions">
              <Link to="/vehicles" className="cinema-btn cinema-btn-ghost">
                Explore Models
              </Link>
              <Link to="/contact" className="cinema-btn cinema-btn-primary">
                Book a Test Ride <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="cinema-trust">
              {heroTrustItems.map((item, index) => (
                <div key={item} className="inline-flex items-center gap-3">
                  {index > 0 ? <b /> : <span />}
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="cinema-callouts">
            {heroCalloutItems.map(({ value, unit, label, icon, ariaLabel }) => (
              <div key={label} className="cinema-callout" aria-label={ariaLabel}>
                <span className="cinema-callout-icon">
                  {icon === "battery" ? (
                    <BatteryCharging />
                  ) : icon === "gauge" ? (
                    <Gauge />
                  ) : icon === "shield" ? (
                    <ShieldCheck />
                  ) : (
                    <Zap />
                  )}
                </span>
                <span className="cinema-callout-text">
                  <strong className="cinema-callout-value">
                    <span
                      className="stat-number"
                      data-stat-number
                      data-target={value}
                      data-decimals={value.includes(".") ? "1" : "0"}
                    >
                      {value}
                    </span>{" "}
                    <small>{unit}</small>
                  </strong>{" "}
                  <span className="cinema-callout-label">{label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <b>↓</b>
      </div>
    </section>
  );
}

function AmbientDepthBackdrop() {
  return (
    <div className="cinema-depth-bg" aria-hidden="true">
      <div className="cinema-depth-grid" />
      <div className="cinema-depth-tunnel">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="cinema-depth-panel cinema-depth-panel-a" />
      <div className="cinema-depth-panel cinema-depth-panel-b" />
      <div className="cinema-depth-panel cinema-depth-panel-c" />
      <div className="cinema-depth-beam cinema-depth-beam-a" />
      <div className="cinema-depth-beam cinema-depth-beam-b" />
      <div className="cinema-depth-beam cinema-depth-beam-c" />
      <div className="cinema-depth-orbit cinema-depth-orbit-a">
        <span />
      </div>
      <div className="cinema-depth-orbit cinema-depth-orbit-b">
        <span />
      </div>
      <div className="cinema-depth-ribbon cinema-depth-ribbon-a" />
      <div className="cinema-depth-ribbon cinema-depth-ribbon-b" />
    </div>
  );
}

function Home() {
  const [dailyRide, setDailyRide] = useState(32);
  const [petrolPrice, setPetrolPrice] = useState(110);
  const [range, setRange] = useState(110);

  const monthlyEvCost = Math.round(dailyRide * 30 * 0.22);
  const monthlyFuelCost = Math.round(((dailyRide * 30) / 42) * petrolPrice);
  const monthlySavings = Math.max(0, monthlyFuelCost - monthlyEvCost);
  const threeYearSavings = monthlySavings * 36;

  useEffect(() => {
    const videos = Array.from(
      document.querySelectorAll<HTMLVideoElement>("video[data-lazy-video]"),
    );

    if (videos.length === 0) {
      return;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactWidthQuery = window.matchMedia("(max-width: 768px)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const navigatorWithConnection = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    const keepPostersOnly =
      reducedMotionQuery.matches ||
      compactWidthQuery.matches ||
      coarsePointerQuery.matches ||
      navigatorWithConnection.connection?.saveData === true;

    if (keepPostersOnly) {
      videos.forEach((video) => {
        video.pause();
        video.removeAttribute("autoplay");
        video.preload = "none";
      });
      return;
    }

    const loadVideo = (video: HTMLVideoElement, mode: "metadata" | "full" = "full") => {
      if (video.dataset.loaded === "full") {
        return;
      }

      if (mode === "metadata" && video.dataset.loaded === "metadata") {
        return;
      }

      video.querySelectorAll<HTMLSourceElement>("source[data-src]").forEach((source) => {
        const sourcePath = source.dataset.src;
        if (sourcePath && source.getAttribute("src") !== sourcePath) {
          source.setAttribute("src", sourcePath);
        }
      });
      video.preload = mode === "metadata" ? "metadata" : "auto";
      video.load();
      video.dataset.loaded = mode;

      if (mode === "full" && video.autoplay) {
        void video.play().catch(() => undefined);
      }
    };

    if (!("IntersectionObserver" in window)) {
      videos.forEach(loadVideo);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLVideoElement) {
            loadVideo(entry.target, "full");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "360px 0px", threshold: 0.01 },
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="cinema-home">
      <AmbientDepthBackdrop />
      <HeroSection />

      <section
        className="cinema-stat-strip"
        data-animate="fade-up"
        aria-label="Franklin EV key performance stats"
      >
        {[
          { value: 60, suffix: "km/h", label: "Top speed" },
          { value: 120, suffix: "km", label: "Up to single-charge range" },
          { value: 3, suffix: "yrs", label: "Battery and motor warranty" },
          { value: 20, suffix: "+", label: "Hyderabad, TG & AP touchpoints" },
        ].map(({ value, suffix, label }) => (
          <div key={label}>
            <strong className="stat-value">
              <span className="stat-number" data-stat-number data-target={value}>
                {value}
              </span>
              <span className="stat-unit">{suffix}</span>
            </strong>
            <small>{label}</small>
          </div>
        ))}
      </section>

      <section className="cinema-section cinema-split" id="battery" data-animate="fade-up">
        <Reveal className="cinema-copy">
          <div className="cinema-eyebrow">The Future of Commuting</div>
          <h2 className="cinema-title">
            The future of commuting <em>starts here</em>.
          </h2>
          <p>
            Cities are evolving. Roads are becoming smarter. Transportation is becoming cleaner. The
            modern rider expects more than just a vehicle. They expect efficiency, convenience,
            technology and sustainability. Franklin EV is helping redefine urban transportation by
            creating smart electric scooters for city commuting that fit seamlessly into everyday
            life.
          </p>
          <p>
            From professionals travelling to Hitech City and Gachibowli to students, families and
            business owners across Hyderabad, more people are making the switch to electric mobility
            because it delivers a better ownership experience. This isn't just about replacing
            petrol. It's about upgrading the way you move.
          </p>
          <div className="cinema-mini-stats">
            {["Smart city commuting", "Convenient home charging", "Low running cost"].map(
              (item) => (
                <span key={item}>{item}</span>
              ),
            )}
          </div>
        </Reveal>
        <Reveal className="cinema-media-frame" delay={0.1}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/assets/detail-battery.jpg"
            data-lazy-video
            data-src="/frames/battery-charge-optimized.mp4"
          >
            <source data-src="/frames/battery-charge-optimized.mp4" type="video/mp4" />
          </video>
        </Reveal>
      </section>

      <section className="cinema-section motor-cinema" id="motor" data-animate="fade-up">
        <Reveal className="motor-copy">
          <div className="cinema-eyebrow">The Heart of the Machine</div>
          <h2 className="cinema-title">
            Technology that works <em>behind every ride</em>.
          </h2>
          <p>
            Great performance isn't just about speed. It's about delivering confidence every time
            you ride. Franklin EV combines advanced battery systems, intelligent energy management,
            efficient motors and rider-focused engineering to create a seamless ownership
            experience.
          </p>
        </Reveal>
        <div className="motor-stage">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/assets/detail-brakes.jpg"
            data-lazy-video
            data-src="/frames/motor-explode-scrub.mp4"
          >
            <source data-src="/frames/motor-explode-scrub.mp4" type="video/mp4" />
          </video>
          <div className="motor-callout-row">
            {[
              "Smart battery technology",
              "BLDC motor efficiency",
              "Multiple riding modes",
              "Cruise control functionality",
              "Digital instrument cluster",
              "Reverse mode assistance",
            ].map((item) => (
              <span key={item}>
                <Check className="h-4 w-4" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="cinema-section" data-animate="fade-up">
        <Reveal className="cinema-copy cinema-copy-wide">
          <div className="cinema-eyebrow">Thoughtfully Designed</div>
          <h2 className="cinema-title">
            Engineered around <em>real riders</em>.
          </h2>
          <p>
            Every Franklin EV scooter is designed around practical features that improve everyday
            riding for professionals, students, families and business owners across Hyderabad.
          </p>
        </Reveal>
        <StaggerGroup className="cinema-feature-grid">
          {features.map(({ Icon, title, body }) => (
            <StaggerItem key={title}>
              <article className="cinema-feature-card">
                <span>
                  <Icon className="h-5 w-5" />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="cinema-section" data-animate="fade-up">
        <Reveal className="cinema-copy cinema-copy-wide">
          <div className="cinema-eyebrow">Why Riders Switch</div>
          <h2 className="cinema-title">
            Why more riders are choosing <em>electric over petrol</em>.
          </h2>
          <p>
            Every month, commuters spend a significant portion of their income on fuel, servicing,
            engine maintenance and rising operating costs. Franklin EV offers a smarter alternative:
            a smoother, quieter and more convenient riding experience for daily commute in
            Hyderabad.
          </p>
        </Reveal>
        <StaggerGroup className="cinema-feature-grid">
          {riderSwitchBenefits.map((item) => (
            <StaggerItem key={item.title}>
              <article className="cinema-feature-card">
                <span>
                  <Check className="h-5 w-5" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="cinema-lifestyle-band" delay={0.1}>
          <figure className="is-wide">
            <img
              src="/assets/editorial/commute-city-ride.jpg"
              alt="Franklin EV electric scooter riding through a city business district."
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure>
            <img
              src="/assets/editorial/red-sunset-profile.jpg"
              alt="Franklin EV red electric scooter at sunset near a city waterfront."
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure>
            <img
              src="/assets/editorial/silver-rider-arrival.jpg"
              alt="Franklin EV silver scooter ready for a rider outside a residential entrance."
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </Reveal>
      </section>

      <section
        className="cinema-section cinema-split cost-section"
        id="intelligence"
        data-animate="fade-up"
      >
        <Reveal className="cinema-copy">
          <div className="cinema-eyebrow">Cost Comparison</div>
          <h2 className="cinema-title">
            Save more with <em>every ride.</em>
          </h2>
          <p>
            Compared to conventional petrol scooters, Franklin EV helps reduce daily operating costs
            while delivering reliable performance. Adjust your daily ride distance and petrol price
            to estimate monthly savings.
          </p>
          <p className="savings-callout">
            Estimated 3-year savings <strong>Rs. {threeYearSavings.toLocaleString("en-IN")}</strong>
          </p>
        </Reveal>
        <Reveal className="ride-lab" delay={0.1}>
          <div className="savings-bars">
            <div className="savings-bar-row">
              <div>
                <span>Petrol</span>
                <strong>Rs. {monthlyFuelCost.toLocaleString("en-IN")}/mo</strong>
              </div>
              <div className="savings-track">
                <div
                  className="savings-bar-fill savings-bar-petrol"
                  style={{ "--bar-value": "92%" } as CSSProperties}
                />
              </div>
            </div>
            <div className="savings-bar-row">
              <div>
                <span>Franklin EV</span>
                <strong>Rs. {monthlyEvCost.toLocaleString("en-IN")}/mo</strong>
              </div>
              <div className="savings-track">
                <div
                  className="savings-bar-fill savings-bar-ev"
                  style={{ "--bar-value": "28%" } as CSSProperties}
                />
              </div>
            </div>
          </div>
          <div
            className="ride-orbit"
            style={{ "--range-fill": `${Math.min(100, (range / 120) * 100)}%` } as CSSProperties}
          >
            <div className="ride-orbit-ring" />
            <div className="ride-orbit-core">
              <strong>{range}</strong>
              <span>km range</span>
            </div>
          </div>
          <div className="ride-controls">
            <RideControl
              id="daily-km"
              name="daily_km"
              label="Daily ride distance"
              value={`${dailyRide} km`}
              ariaLabel="Daily ride distance in kilometres"
              ariaValueText={`${dailyRide} km per day`}
              min={8}
              max={90}
              current={dailyRide}
              onChange={setDailyRide}
            />
            <RideControl
              id="petrol-price"
              name="petrol_price"
              label="Petrol price"
              value={`Rs. ${petrolPrice}/L`}
              ariaLabel="Petrol price per litre in rupees"
              ariaValueText={`Rs. ${petrolPrice} per litre`}
              min={85}
              max={140}
              current={petrolPrice}
              onChange={setPetrolPrice}
            />
            <div className="ride-modes">
              {[
                ["Eco", 110],
                ["City", 100],
                ["Sport", 82],
              ].map(([label, value]) => (
                <button
                  key={label}
                  type="button"
                  className={range === value ? "active" : undefined}
                  onClick={() => setRange(Number(value))}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="ride-results">
            <span>
              Charge every <strong>{Math.max(0.8, range / dailyRide).toFixed(1)} days</strong>
            </span>
            <span>
              Monthly EV cost <strong>Rs. {monthlyEvCost.toLocaleString("en-IN")}</strong>
            </span>
            <span>
              Monthly savings <strong>Rs. {monthlySavings.toLocaleString("en-IN")}</strong>
            </span>
          </div>
        </Reveal>
      </section>

      <section className="cinema-section cinema-split app-section" id="app" data-animate="fade-up">
        <Reveal className="cinema-copy">
          <div className="cinema-eyebrow">Ownership Experience</div>
          <h2 className="cinema-title">
            Simple to own. <em>Easy to love.</em>
          </h2>
          <p>
            Owning an electric scooter should feel easier, not more complicated. Franklin EV
            simplifies ownership with convenient charging, low maintenance requirements, smart
            diagnostics, warranty support and dependable customer service.
          </p>
          <div className="app-feature-list">
            {[
              { Icon: Zap, label: "Charge at home" },
              { Icon: Bell, label: "Smart diagnostics" },
              { Icon: ShieldCheck, label: "Warranty coverage" },
              { Icon: LockKeyhole, label: "Service support" },
            ].map(({ Icon, label }) => (
              <span key={label}>
                <Icon className="h-4 w-4" /> {label}
              </span>
            ))}
          </div>
          <div className="app-store-row">
            <Link to="/contact" aria-label="Ask Franklin EV about iPhone app availability">
              <Apple className="h-5 w-5" />
              <span>Ask about iPhone support</span>
            </Link>
            <Link to="/contact" aria-label="Ask Franklin EV about Android app availability">
              <Play className="h-5 w-5" />
              <span>Ask about Android support</span>
            </Link>
          </div>
        </Reveal>
        <Reveal className="phone-stage" delay={0.1}>
          <div
            className="phone-mockup"
            role="img"
            aria-label="Franklin EV mobile app showing live GPS tracking and battery status"
          >
            <div className="phone-speaker" />
            <div className="phone-screen">
              <div className="phone-screen-top">
                <Smartphone className="h-5 w-5" />
                <span>Franklin EV</span>
              </div>
              <div className="phone-map-card">
                <Navigation className="h-6 w-6" />
                <strong>Franklin EV Power ++</strong>
                <span>Hyderabad · 82% battery</span>
              </div>
              <div className="phone-metric-grid">
                <span>
                  <strong>100</strong>
                  km estimated range
                </span>
                <span>
                  <strong>4.5</strong>
                  hrs to practical charge
                </span>
              </div>
              <div className="phone-alert">
                <Bell className="h-4 w-4" />
                Smart diagnostics active
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="home-range-transfer bg-hero-gradient" data-animate="fade-up">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 text-center">
          <Reveal>
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-ink">
              The Franklin EV <span className="text-primary-gradient">Range</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare Franklin EV Power ++ and Rapid by range, speed, motor, charging, connected
              features and warranty support before you book a test ride.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/vehicles" className="cinema-btn cinema-btn-primary">
                View Vehicles <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="cinema-btn cinema-btn-ghost">
                Book a Test Ride
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cinema-section dealer-section" data-animate="fade-up">
        <Reveal className="cinema-copy cinema-copy-wide">
          <div className="cinema-eyebrow">Find Us Near You</div>
          <h2 className="cinema-title">
            Experience Franklin EV <em>in person</em>.
          </h2>
          <p>
            Visit a Franklin EV Experience Centre or dealer location to explore models, compare
            features, take a test ride and speak with EV experts. Whether you're looking for an
            affordable electric scooter in Hyderabad or exploring the latest advancements in
            electric mobility, our team is ready to help.
          </p>
        </Reveal>
        <div
          className="dealer-grid-wrap"
          aria-label="Franklin EV dealer locations in Telangana and Andhra Pradesh"
        >
          {dealerGroups.map((group) => (
            <article className="dealer-state-card" key={group.state}>
              <h3>{group.state}</h3>
              <div className="dealer-chip-grid">
                {group.cities.map((city) => (
                  <span key={city}>
                    <MapPin className="h-4 w-4" /> {city}
                  </span>
                ))}
              </div>
            </article>
          ))}
          <div className="dealer-map-cta">
            <Link to="/contact" className="cinema-btn cinema-btn-primary">
              Find a Dealer Near You <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="cinema-section" data-animate="fade-up">
        <Reveal className="cinema-copy cinema-copy-wide">
          <div className="cinema-eyebrow">Hyderabad's Electric Future</div>
          <h2 className="cinema-title">
            Proudly powering <em>Hyderabad's electric future</em>.
          </h2>
          <p>
            As a Hyderabad electric vehicle company, Franklin EV understands the needs of local
            riders better than anyone. From Hitech City and Financial District to Miyapur,
            Kukatpally, Uppal, Kompally, Gachibowli and LB Nagar, Franklin EV is helping commuters
            embrace smarter transportation. If you're searching for an electric scooter showroom in
            Hyderabad, a trusted local EV brand or a dependable electric scooter for everyday
            travel, Franklin EV is built for your city and your lifestyle.
          </p>
        </Reveal>
        <StaggerGroup className="cinema-feature-grid">
          {riderStories.map((story) => (
            <StaggerItem key={story.title}>
              <article className="cinema-feature-card">
                <span>
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3>{story.title}</h3>
                <p>{story.body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="cinema-section" data-animate="fade-up">
        <Reveal className="cinema-copy cinema-copy-wide">
          <div className="cinema-eyebrow">FAQ</div>
          <h2 className="cinema-title">
            Frequently asked <em>questions</em>.
          </h2>
          <p>
            Quick answers for riders comparing electric scooter ownership, charging, maintenance and
            test rides in Hyderabad.
          </p>
        </Reveal>
        <div className="cinema-feature-grid">
          {faqItems.map((item) => (
            <article className="cinema-feature-card" key={item.question}>
              <span>
                <Check className="h-5 w-5" />
              </span>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cinema-section test-ride-panel" id="test-ride" data-animate="fade-up">
        <Reveal>
          <div className="cinema-eyebrow">Experience It Yourself</div>
          <h2>
            Ready to experience <em>smarter mobility?</em>
          </h2>
          <p>
            Join the growing community of riders choosing cleaner, smarter and more affordable
            transportation. Discover why Franklin EV is becoming one of the most trusted names for
            riders searching for the best electric scooter in Hyderabad.
          </p>
          <Link to="/contact" className="cinema-btn cinema-btn-primary">
            Book My Test Ride <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

function RideControl({
  id,
  name,
  label,
  value,
  ariaLabel,
  ariaValueText,
  min,
  max,
  current,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  ariaLabel: string;
  ariaValueText: string;
  min: number;
  max: number;
  current: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="ride-control">
      <span>{label}</span>
      <strong>{value}</strong>
      <input
        id={id}
        name={name}
        type="range"
        aria-label={ariaLabel}
        aria-valuenow={current}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuetext={ariaValueText}
        min={min}
        max={max}
        value={current}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}
