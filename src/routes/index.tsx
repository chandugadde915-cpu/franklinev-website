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
        title: "Franklin EV | Hyderabad's Smart Electric Scooter Brand for Everyday Freedom",
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
        content: "Franklin EV - Hyderabad's Smart Electric Scooter Brand for Everyday Freedom",
      },
      {
        property: "og:description",
        content:
          "Discover smarter city commuting with Franklin EV electric scooters built for Hyderabad riders, everyday freedom, lower running costs, convenient home charging and intelligent technology.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.franklinev.co.in/assets/hero-powerplus.jpg" },
      {
        property: "og:image:alt",
        content: "Franklin EV Power ++ premium electric scooter launch hero.",
      },
      { property: "og:url", content: "https://www.franklinev.co.in" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Franklin EV Smart Electric Scooters in Hyderabad" },
      {
        name: "twitter:description",
        content:
          "Explore Franklin EV smart electric scooters for daily commute, home charging, low running cost and local test ride support in Hyderabad.",
      },
      { name: "twitter:image", content: "https://www.franklinev.co.in/assets/hero-powerplus.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.franklinev.co.in/" },
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

const modelColors = [
  {
    id: "silver",
    name: "Silver",
    swatch: "#bbb19b",
    image: "/assets/models/premium-colors-layout/power-silver-angle-layout.png",
    preview: "/assets/models/premium-colors-layout/power-silver-front-layout.png",
  },
  {
    id: "blue",
    name: "Sky Blue",
    swatch: "#8fd5f3",
    image: "/assets/models/premium-colors-layout/power-blue-angle-layout.png",
    preview: "/assets/models/premium-colors-layout/power-blue-front-layout.png",
  },
  {
    id: "maroon",
    name: "Maroon",
    swatch: "#9f2438",
    image: "/assets/models/premium-colors-layout/power-maroon-angle-layout.png",
    preview: "/assets/models/premium-colors-layout/power-maroon-front-layout.png",
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
  { value: "120", unit: "km", label: "Up to range", icon: "zap" },
  { value: "4.5", unit: "hrs", label: "0-80% charge time", icon: "battery" },
  { value: "60", unit: "km/h", label: "Top speed", icon: "gauge" },
  { value: "3", unit: "yrs", label: "Battery & motor warranty", icon: "shield" },
] as const;

function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const heroCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroImageCacheRef = useRef<(HTMLImageElement | null)[]>([]);
  const lastDrawnHeroFrameRef = useRef(-1);
  const heroFrameProgressRef = useRef(0);
  const heroProgressFrameRef = useRef(0);
  const heroProgressDeltaRef = useRef(0);
  const heroTouchStartYRef = useRef<number | null>(null);
  const heroViewportLockedRef = useRef(false);
  const heroOverflowStylesRef = useRef<{ html: string; body: string } | null>(null);
  const [heroFrameIndex, setHeroFrameIndex] = useState(0);
  const [isHeroFrameReady, setIsHeroFrameReady] = useState(false);
  const [useCompactHero, setUseCompactHero] = useState(false);
  const heroFrameProgress =
    heroSequenceFrameCount > 1 ? heroFrameIndex / (heroSequenceFrameCount - 1) : 0;

  const activeHeroFrame = heroFrameIndex;
  const launchRevealProgress = useCompactHero
    ? 1
    : Math.min(Math.max((heroFrameProgress - 0.055) / 0.18, 0), 1);
  const launchIsActive = useCompactHero || heroFrameProgress > 0.055;

  const setHeroProgress = useCallback((nextProgress: number) => {
    const clampedProgress = Math.min(Math.max(nextProgress, 0), 1);
    heroFrameProgressRef.current = clampedProgress;
    const nextFrameIndex = Math.min(
      heroSequenceFrameCount - 1,
      Math.round(clampedProgress * (heroSequenceFrameCount - 1)),
    );
    setHeroFrameIndex((current) => (current !== nextFrameIndex ? nextFrameIndex : current));
  }, []);

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

  const setHeroViewportLocked = useCallback((locked: boolean) => {
    if (typeof document === "undefined" || heroViewportLockedRef.current === locked) {
      return;
    }

    if (locked) {
      heroOverflowStylesRef.current = {
        html: document.documentElement.style.overflowY,
        body: document.body.style.overflowY,
      };
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
    } else {
      const previousOverflowStyles = heroOverflowStylesRef.current;
      document.documentElement.style.overflowY = previousOverflowStyles?.html ?? "";
      document.body.style.overflowY = previousOverflowStyles?.body ?? "";
      heroOverflowStylesRef.current = null;
    }

    heroViewportLockedRef.current = locked;
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
        setHeroProgress(0.24);
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
      setHeroProgress(0.24);
      return;
    }

    const getScrubDistance = () =>
      Math.max(hero.offsetHeight - window.innerHeight, window.innerHeight * 0.9, 1);

    const isHeroPinned = () => {
      const rect = hero.getBoundingClientRect();
      return rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
    };

    const syncHeroProgressFromViewport = () => {
      const rect = hero.getBoundingClientRect();

      if (rect.top >= 0) {
        setHeroViewportLocked(false);
        setHeroProgress(0);
        return;
      }

      if (rect.bottom <= window.innerHeight) {
        setHeroViewportLocked(false);
        setHeroProgress(1);
        return;
      }

      const heroDocumentTop = window.scrollY + rect.top;
      const scrubDistance = getScrubDistance();
      const traveled = Math.min(Math.max(window.scrollY - heroDocumentTop, 0), scrubDistance);
      setHeroViewportLocked(true);
      setHeroProgress(traveled / scrubDistance);
    };

    const flushHeroProgressDelta = () => {
      heroProgressFrameRef.current = 0;

      if (heroProgressDeltaRef.current === 0) {
        return;
      }

      const scrubDistance = getScrubDistance();
      const progressDelta = heroProgressDeltaRef.current;
      const currentProgress = heroFrameProgressRef.current;
      const unclampedProgress = currentProgress + progressDelta;
      const clampedProgress = Math.min(Math.max(unclampedProgress, 0), 1);
      const overflowProgress = unclampedProgress - clampedProgress;

      heroProgressDeltaRef.current = 0;
      setHeroProgress(clampedProgress);
      setHeroViewportLocked(clampedProgress < 0.999 && isHeroPinned());

      if (overflowProgress !== 0) {
        window.scrollBy(0, overflowProgress * scrubDistance);
      }
    };

    const queueHeroProgressDelta = (deltaY: number) => {
      heroProgressDeltaRef.current += deltaY / getScrubDistance();

      if (heroProgressFrameRef.current) {
        return;
      }

      heroProgressFrameRef.current = requestAnimationFrame(flushHeroProgressDelta);
    };

    const shouldCaptureScroll = (deltaY: number) => {
      if (!Number.isFinite(deltaY) || deltaY === 0 || !isHeroPinned()) {
        return false;
      }

      if (deltaY > 0) {
        return heroFrameProgressRef.current < 0.999;
      }

      return heroFrameProgressRef.current > 0.001;
    };

    const handleWheel = (event: WheelEvent) => {
      if (!shouldCaptureScroll(event.deltaY)) {
        return;
      }

      event.preventDefault();
      queueHeroProgressDelta(event.deltaY);
    };

    const handleTouchStart = (event: TouchEvent) => {
      heroTouchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const nextTouchY = event.touches[0]?.clientY;
      const previousTouchY = heroTouchStartYRef.current;

      if (nextTouchY == null || previousTouchY == null) {
        return;
      }

      const deltaY = previousTouchY - nextTouchY;
      heroTouchStartYRef.current = nextTouchY;

      if (!shouldCaptureScroll(deltaY)) {
        return;
      }

      event.preventDefault();
      queueHeroProgressDelta(deltaY);
    };

    const handleTouchEnd = () => {
      heroTouchStartYRef.current = null;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        (target instanceof HTMLElement &&
          (target.isContentEditable ||
            target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.tagName === "SELECT"))
      ) {
        return;
      }

      let deltaY = 0;

      switch (event.key) {
        case "ArrowDown":
          deltaY = 72;
          break;
        case "ArrowUp":
          deltaY = -72;
          break;
        case "PageDown":
          deltaY = window.innerHeight * 0.72;
          break;
        case "PageUp":
          deltaY = window.innerHeight * -0.72;
          break;
        case " ":
          deltaY = window.innerHeight * (event.shiftKey ? -0.72 : 0.72);
          break;
        default:
          return;
      }

      if (!shouldCaptureScroll(deltaY)) {
        return;
      }

      event.preventDefault();
      queueHeroProgressDelta(deltaY);
    };

    syncHeroProgressFromViewport();
    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false, capture: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown, { capture: true });

    return () => {
      cancelAnimationFrame(heroProgressFrameRef.current);
      heroProgressFrameRef.current = 0;
      heroProgressDeltaRef.current = 0;
      heroTouchStartYRef.current = null;
      setHeroViewportLocked(false);
      window.removeEventListener("wheel", handleWheel, true);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove, true);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [setHeroProgress, setHeroViewportLocked, useCompactHero]);

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
    >
      <div className="cinema-hero-stage" aria-hidden="true">
        <canvas
          ref={heroCanvasRef}
          className="cinema-hero-video"
          width={heroSequenceSize.width}
          height={heroSequenceSize.height}
          aria-hidden="true"
        />
        <img
          src="/assets/hero-powerplus.jpg"
          alt="Franklin EV Power ++ electric scooter hero poster"
          className="cinema-hero-poster"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="cinema-hero-rings">
          <span />
          <span />
          <span />
        </div>
        <div className="cinema-road" />
        <div className="cinema-hero-shade" />
      </div>

      <div
        className={`cinema-hero-content${launchIsActive ? " is-launching" : ""}`}
        style={{ "--launch-progress": `${launchRevealProgress}` } as CSSProperties}
      >
        <div className="cinema-hero-copy">
          <div className="cinema-eyebrow">
            <Sparkles className="h-4 w-4" />
            Hyderabad's Smart Electric Scooter Brand
          </div>
          <h1 className="cinema-hero-title">
            <span>Hyderabad's smart electric</span>
            <span>
              scooter brand for <em>everyday freedom</em>.
            </span>
          </h1>
          <p className="cinema-hero-sub">
            Experience smart electric scooters built for Hyderabad riders, with long range
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
          {heroCalloutItems.map(({ value, unit, label, icon }) => (
            <div key={label} className="cinema-callout">
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
              <span>
                <strong>
                  <span data-count-to={value} data-count-decimals={value.includes(".") ? "1" : "0"}>
                    {value}
                  </span>{" "}
                  <small>{unit}</small>
                </strong>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AmbientDepthBackdrop() {
  return (
    <div className="cinema-depth-bg" aria-hidden="true">
      <div className="cinema-depth-grid" />
      <div className="cinema-depth-beam cinema-depth-beam-a" />
      <div className="cinema-depth-beam cinema-depth-beam-b" />
      <div className="cinema-depth-beam cinema-depth-beam-c" />
      <div className="cinema-depth-orbit cinema-depth-orbit-a">
        <span />
      </div>
      <div className="cinema-depth-orbit cinema-depth-orbit-b">
        <span />
      </div>
      <div className="cinema-depth-sphere cinema-depth-sphere-a" />
      <div className="cinema-depth-sphere cinema-depth-sphere-b" />
    </div>
  );
}

function Home() {
  const [dailyRide, setDailyRide] = useState(32);
  const [petrolPrice, setPetrolPrice] = useState(110);
  const [range, setRange] = useState(110);
  const [colorId, setColorId] = useState<(typeof modelColors)[number]["id"]>("silver");

  const selectedColor = modelColors.find((color) => color.id === colorId) ?? modelColors[0];
  const monthlyEvCost = Math.round(dailyRide * 30 * 0.22);
  const monthlyFuelCost = Math.round(((dailyRide * 30) / 42) * petrolPrice);
  const monthlySavings = Math.max(0, monthlyFuelCost - monthlyEvCost);
  const threeYearSavings = monthlySavings * 36;
  const activeModel = {
    name: "Franklin EV Power ++",
    buttonLabel: "Power ++",
    badge:
      "Available now in the real three-color lineup with a cleaner, production-ready presentation.",
    body: "This updated showcase uses the supplied scooter photography only, with website-matched backgrounds and the currently available Silver, Sky Blue and Maroon finishes.",
    specs: ["Silver finish available", "Sky Blue finish available", "Maroon finish available"],
  } as const;

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navigatorWithConnection = navigator as Navigator & {
      connection?: { effectiveType?: string; saveData?: boolean };
    };
    const connection = navigatorWithConnection.connection;
    const saveData = connection?.saveData === true;
    const slowNetwork = /(^|-)2g$/.test(connection?.effectiveType ?? "");
    const videos = Array.from(
      document.querySelectorAll<HTMLVideoElement>("video[data-lazy-video]"),
    );

    if (videos.length === 0) {
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
        if (source.dataset.src && source.src !== source.dataset.src) {
          source.src = source.dataset.src;
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

    let idleCallbackId = 0;
    let warmupTimer = 0;

    if (!saveData && !slowNetwork && !reducedMotion) {
      const warmup = () => {
        videos.slice(0, 1).forEach((video) => loadVideo(video, "metadata"));
      };

      if ("requestIdleCallback" in window) {
        idleCallbackId = window.requestIdleCallback(warmup, { timeout: 1400 });
      } else {
        warmupTimer = window.setTimeout(warmup, 700);
      }
    }

    return () => {
      observer.disconnect();
      if (idleCallbackId) {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (warmupTimer) {
        window.clearTimeout(warmupTimer);
      }
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
            <strong>
              <span data-count-to={value}>{value}</span>
              {suffix}
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
            preload="metadata"
            poster="/assets/detail-battery.jpg"
            data-lazy-video
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
            preload="metadata"
            poster="/assets/detail-brakes.jpg"
            data-lazy-video
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
          {[
            "Lower charging costs",
            "Reduced maintenance requirements",
            "No engine oil changes",
            "Convenient home charging",
            "Sustainable transportation",
            "Long-term ownership savings",
          ].map((item) => (
            <StaggerItem key={item}>
              <article className="cinema-feature-card">
                <span>
                  <Check className="h-5 w-5" />
                </span>
                <h3>{item}</h3>
                <p>
                  Franklin EV makes electric mobility easier to compare, easier to own and easier to
                  justify for everyday city travel.
                </p>
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
              label="Daily ride distance"
              value={`${dailyRide} km`}
              min={8}
              max={90}
              current={dailyRide}
              onChange={setDailyRide}
            />
            <RideControl
              label="Petrol price"
              value={`Rs. ${petrolPrice}/L`}
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

      <section
        className="cinema-section model-showcase"
        id="models"
        data-animate="fade-up"
        style={{ "--model-tone": selectedColor.swatch } as CSSProperties}
      >
        <div className="model-stage">
          <div className="model-glow" />
          <img
            key={colorId}
            src={selectedColor.image}
            alt={`Franklin EV ${activeModel.buttonLabel} electric scooter in ${selectedColor.name}`}
            loading="eager"
            decoding="async"
            fetchPriority="low"
          />
          <div className="model-platform" />
        </div>
        <Reveal className="model-info">
          <div className="cinema-eyebrow">Available Colors</div>
          <p className="model-badge">{activeModel.badge}</p>
          <h2>{activeModel.name}</h2>
          <p>{activeModel.body}</p>
          <div className="model-pills">
            {activeModel.specs.map((spec) => (
              <span key={spec}>{spec}</span>
            ))}
          </div>
          <div className="color-grid" aria-label={`Choose ${activeModel.name} color`}>
            {modelColors.map((color) => (
              <button
                key={color.id}
                type="button"
                className={color.id === colorId ? "active" : undefined}
                style={{ "--swatch": color.swatch } as CSSProperties}
                onClick={() => setColorId(color.id)}
                aria-label={`Show ${activeModel.buttonLabel} in ${color.name}`}
              >
                <img
                  src={color.preview}
                  alt={`Franklin EV ${activeModel.buttonLabel} preview in ${color.name}`}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
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
  label,
  value,
  min,
  max,
  current,
  onChange,
}: {
  label: string;
  value: string;
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
        type="range"
        min={min}
        max={max}
        value={current}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}
