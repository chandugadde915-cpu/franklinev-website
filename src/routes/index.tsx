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
          "Franklin EV electric scooters in Hyderabad — POWER and Classic variants with lithium-ion or graphene battery, up to 80 km range, 25 or 60 km/h, home charging and low running cost.",
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
        content: "Franklin EV POWER electric scooter — Midnight Black hero shot.",
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
      "Range depends on model, riding mode, load and road conditions. Franklin EV highlights up to 80 km range (graphene battery, low-speed variant).",
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
  "Up to 80 KM Range",
  "Cruise Control",
  "Smart Features",
  "Home Charging",
  "Low Running Cost",
] as const;

const heroCalloutItems = [
  { value: "80", unit: "km", label: "Max range", icon: "zap", ariaLabel: "Up to 80 km range" },
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


const warrantyPackages = [
  {
    name: "Lithium-ion Battery",
    image: "/assets/client/fev-lithium-ion-battery.png",
    alt: "Franklin EV lithium-ion battery pack.",
    points: [
      "2+1 year battery warranty",
      "12 months motor warranty",
      "12 months charger warranty",
      "12 months controller warranty",
    ],
  },
  {
    name: "Graphene Battery",
    image: "/assets/client/fev-graphene-battery.png",
    alt: "Franklin EV graphene battery pack.",
    points: [
      "12 months battery warranty",
      "12 months motor warranty",
      "6 months charger warranty",
      "12 months controller warranty",
    ],
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
  const [useCompactHero, setUseCompactHero] = useState(false);
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
    const navigatorWithConnection = navigator as Navigator & {
      connection?: { effectiveType?: string; saveData?: boolean };
    };

    const syncHeroMode = () => {
      const connection = navigatorWithConnection.connection;
      const saveData = connection?.saveData === true;
      const slowNetwork = /(^|-)2g$/.test(connection?.effectiveType ?? "");
      const compact = reducedMotionQuery.matches || saveData || slowNetwork;

      setUseCompactHero(compact);
      if (compact) {
        setHeroProgress(1);
        setHeroLaunchProgress(1);
      }
    };

    syncHeroMode();
    reducedMotionQuery.addEventListener("change", syncHeroMode);

    return () => {
      reducedMotionQuery.removeEventListener("change", syncHeroMode);
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
  const [range, setRange] = useState(80);

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
    const navigatorWithConnection = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    const keepPostersOnly =
      reducedMotionQuery.matches ||
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

      <section className="cinema-section cinema-split" id="battery" data-animate="fade-up">
        <Reveal className="cinema-copy">
          <div className="cinema-eyebrow">The Future of Commuting</div>
          <h2 className="cinema-title">
            The future of commuting <em>starts here</em>.
          </h2>
          <p>
            Franklin EV electric scooters are built for everyday Indian city commuting — practical range, low running cost, home charging and smart features that fit your lifestyle.
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
            Franklin EV combines efficient BLDC hub motors, smart battery management and rider-focused engineering for a seamless daily commute.
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
            style={{ "--range-fill": `${Math.min(100, (range / 80) * 100)}%` } as CSSProperties}
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
                ["Eco", 80],
                ["City", 70],
                ["Sport", 55],
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
            Franklin EV ownership is simple — charge at home, low maintenance, warranty support and dealer service across Hyderabad and Telangana.
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
            <Link to="/contact" aria-label="Enquire about the Franklin EV connected app">
              <Smartphone className="h-5 w-5" />
              <span>Ask about the app</span>
            </Link>
            <Link to="/vehicles" aria-label="Explore Franklin EV models">
              <ArrowRight className="h-5 w-5" />
              <span>Explore models</span>
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
                <strong>Franklin EV POWER</strong>
                <span>Hyderabad · 82% battery</span>
              </div>
              <div className="phone-metric-grid">
                <span>
                  <strong>75</strong>
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

      {/* ── Warranty & Battery Packages ─────────────────────────────── */}
      <section className="battery-section" data-animate="fade-up">
        <div className="battery-section-inner">
          <Reveal className="battery-section-heading">
            <span className="cinema-eyebrow">Warranty Terms</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
              Battery Warranty at a Glance
            </h2>
            <p>
              Clear warranty terms for both battery types — so you know exactly what's covered before delivery.
            </p>
          </Reveal>

          <div className="battery-card-grid">
            {warrantyPackages.map((pkg) => (
              <Reveal key={pkg.name}>
                <article className="battery-package-card">
                  <img src={pkg.image} alt={pkg.alt} loading="lazy" decoding="async" />
                  <div>
                    <h3>{pkg.name}</h3>
                    <ul>
                      {pkg.points.map((pt) => (
                        <li key={pt}>
                          <Check className="h-4 w-4" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="warranty-terms-card">
              <div>
                <span className="cinema-eyebrow">Warranty Summary</span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
                  Know what's covered
                </h2>
                <p>
                  Franklin EV warranty terms are confirmed at delivery. Contact your nearest dealer for the full warranty document before purchase.
                </p>
                <Link to="/contact" className="cinema-btn cinema-btn-primary mt-4 inline-flex">
                  Ask about warranty <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="warranty-summary-grid">
                {[
                  { label: "Lithium-Ion Battery", battery: "2+1 yrs", motor: "12 mo", charger: "12 mo" },
                  { label: "Graphene Battery", battery: "12 mo", motor: "12 mo", charger: "6 mo" },
                ].map((w) => (
                  <div key={w.label} className="warranty-summary-item">
                    <p className="warranty-summary-name">{w.label}</p>
                    <div className="warranty-summary-rows">
                      {[["Battery", w.battery], ["Motor", w.motor], ["Charger", w.charger]].map(([k, v]) => (
                        <span key={k}><strong>{k}</strong>{v}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-range-transfer bg-hero-gradient" data-animate="fade-up">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
          <Reveal className="text-center">
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-ink">
              The Franklin EV <span className="text-primary-gradient">Range</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Two variants, two batteries, two speed configurations — choose the Franklin EV that fits your commute.
            </p>
          </Reveal>
          <StaggerGroup className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              {
                name: "Franklin EV POWER",
                badge: "Sporty",
                tagline: "Sport-aggressive design. Built to stand out.",
                img: "/assets/products/power-black-left.png",
                specs: ["LED projector headlamps", "4 bold colours", "Up to 80 km range", "25 or 60 km/h"],
                accentColor: "#e67e22",
              },
              {
                name: "Franklin EV Classic",
                badge: "Everyday",
                tagline: "Clean lines. Everyday confidence.",
                img: "/assets/products/classic-gold-left.png",
                specs: ["Spacious under-seat storage", "3 versatile finishes", "Up to 80 km range", "25 or 60 km/h"],
                accentColor: "#f39c12",
              },
            ].map((model) => (
              <StaggerItem key={model.name}>
                <article className="rounded-3xl border border-border bg-surface shadow-soft overflow-hidden">
                  <div className="relative bg-black/40 flex items-center justify-center p-6" style={{ minHeight: 220 }}>
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-sm"
                      style={{ background: `${model.accentColor}22`, color: model.accentColor, borderColor: `${model.accentColor}44` }}>
                      {model.badge}
                    </span>
                    <img src={model.img} alt={model.name} className="max-h-48 w-full object-contain drop-shadow-xl" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-ink">{model.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{model.tagline}</p>
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {model.specs.map((s) => (
                        <li key={s} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" /> {s}
                        </li>
                      ))}
                    </ul>
                    <Link to="/vehicles" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                      View details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/vehicles" className="cinema-btn cinema-btn-primary">
              Compare Both Models <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="cinema-btn cinema-btn-ghost">
              Book a Test Ride
            </Link>
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
            Visit a Franklin EV dealer to explore POWER and Classic models, compare battery options, take a test ride and get pricing. Locations across Hyderabad, Telangana and Andhra Pradesh.
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
            From Hitech City to Uppal, Gachibowli to LB Nagar — Franklin EV dealers are across Hyderabad, Telangana and Andhra Pradesh. Visit a showroom, compare POWER and Classic models and book a test ride.
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
        <StaggerGroup className="cinema-feature-grid">
          {faqItems.map((item) => (
            <StaggerItem key={item.question}>
              <article className="cinema-feature-card">
                <span>
                  <Check className="h-5 w-5" />
                </span>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="cinema-section test-ride-panel" id="test-ride" data-animate="fade-up">
        <Reveal>
          <div className="cinema-eyebrow">Experience It Yourself</div>
          <h2>
            Ready to experience <em>smarter mobility?</em>
          </h2>
          <p>
            Experience the Franklin EV POWER or Classic in person. Choose your speed, your battery and your colour at a dealer near you.
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
