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
  Home as HomeIcon,
  LockKeyhole,
  MapPin,
  Navigation,
  Play,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Settings,
  Wallet,
  Zap,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { motion } from "framer-motion";

// ---------- MAP COORDINATES ----------
const cityCoordinates: Record<string, [number, number]> = {
  "AS Rao Nagar": [17.4589, 78.5738],
  Kanajiguda: [17.4567, 78.5521],
  Boduppal: [17.4285, 78.5739],
  Chintal: [17.4817, 78.4104],
  Champapet: [17.3659, 78.5405],
  Malkajgiri: [17.4519, 78.5432],
  "Hayath Nagar": [17.3278, 78.6044],
  Manikonda: [17.4079, 78.3747],
  Nalgonda: [17.0517, 79.2676],
  Karimnagar: [18.4392, 79.129],
  Mancherial: [18.8709, 79.4386],
  Vikarabad: [17.3388, 77.904],
  Kothagudem: [17.5533, 80.6186],
  Bhupalpally: [18.4345, 79.8584],
  Khammam: [17.2473, 80.1514],
  Kollapur: [16.1202, 78.2826],
  Vemulawada: [18.5534, 78.7931],
  Jammikunta: [18.3456, 79.0566],
  Srikakulam: [18.2985, 83.8978],
  Visakhapatnam: [17.6868, 83.2185],
};

const allCities = Object.keys(cityCoordinates);

// ---------- Client‑only Premium Map Component ----------
function DealerMap() {
  const [isClient, setIsClient] = useState(false);
  const [MapComponent, setMapComponent] = useState<(() => JSX.Element) | null>(null);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsClient(true);

    const loadMap = async () => {
      try {
        const leafletModule = await import("react-leaflet");
        const LModule = await import("leaflet");

        if (!isMounted) return;

        const { MapContainer, TileLayer, Marker, Popup } = leafletModule;
        const L = LModule.default;

        // Fix default icon
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        });

      // Premium custom marker
     const createCustomMarker = (color: string = "#e67e22") => {
  return L.divIcon({
    className: "custom-marker custom-marker-shadow", // ✅ merged classes
    html: `<svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0C6.268 0 0 6.268 0 14c0 9 14 26 14 26s14-17 14-26c0-7.732-6.268-14-14-14z" fill="${color}" stroke="white" stroke-width="2.5"/>
      <circle cx="14" cy="14" r="5" fill="white"/>
      <circle cx="14" cy="14" r="2.5" fill="${color}" opacity="0.6"/>
    </svg>`,
    iconSize: [28, 40],
    iconAnchor: [14, 40],
    popupAnchor: [0, -40],
  });
};

      const Map = () => (
        <MapContainer
          center={[17.385, 78.4867]}
          zoom={9}
          scrollWheelZoom
          zoomControl={true}
          className="w-full h-full min-h-[400px] rounded-3xl"
          style={{ background: "#e8ecf1" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />

          <>
            {allCities.map((city) => {
              const coords = cityCoordinates[city];
              if (!coords) return null;
              return (
                <Marker key={city} position={coords} icon={createCustomMarker("#e67e22")}>
                  <Popup closeButton={false} className="dealer-popup">
                    <div className="flex flex-col items-start gap-0.5 px-1 py-0.5">
                      <strong className="text-ink text-base font-bold">{city}</strong>
                      <span className="text-xs text-muted-foreground">📍 Franklin EV Dealer</span>
                      <button className="mt-1 text-xs font-semibold text-primary hover:underline">
                        Get Directions →
                      </button>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </>
        </MapContainer>
      );

        setMapComponent(() => Map);
      } catch (error) {
        console.error("Failed to load dealer map", error);
        if (isMounted) setMapError(true);
      }
    };

    loadMap();

    return () => {
      isMounted = false;
    };
  }, []);

  if (mapError) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-4 bg-muted/20 rounded-3xl p-6 text-center">
        <MapPin className="h-10 w-10 text-primary" />
        <div>
          <h3 className="font-display text-xl font-bold text-ink">Dealer map is unavailable</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">
            Franklin EV dealers are listed across Hyderabad, Telangana and Andhra Pradesh.
          </p>
        </div>
        <Link to="/contact" className="cinema-btn cinema-btn-primary">
          View dealer locations
        </Link>
      </div>
    );
  }

  if (!isClient || !MapComponent) {
    return (
      <div className="min-h-[400px] flex items-center justify-center bg-muted/20 rounded-3xl">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-muted-foreground">Loading map…</span>
        </div>
      </div>
    );
  }

  return <MapComponent />;
}

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

// features and riderStories are kept here because they may be referenced elsewhere,
// but they are no longer rendered on the home page.
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
  {
    value: "60",
    unit: "km/h",
    label: "Top speed",
    icon: "gauge",
    ariaLabel: "60 kilometres per hour top speed",
  },
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
    speed: "60 km/h",
    chargeTime: "~3 h 30 m (0–80%)",
    charger: "650 W plug-and-play (15 A)",
  },
  {
    name: "Graphene Battery",
    image: "/assets/client/fev-graphene-battery.png",
    alt: "Franklin EV graphene battery pack.",
    speed: "25 km/h",
    chargeTime: "~4 h 30 m (0–80%)",
    charger: "650 W plug-and-play (15 A)",
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

  const setHeroProgress = useCallback(
    (nextProgress: number) => {
      const clampedProgress = Math.min(Math.max(nextProgress, 0), 1);
      heroFrameProgressRef.current = clampedProgress;
      syncHeroLaunchProgress(clampedProgress);
      const nextFrameIndex = Math.min(
        heroSequenceFrameCount - 1,
        Math.round(clampedProgress * (heroSequenceFrameCount - 1)),
      );
      setHeroFrameIndex((current) => (current !== nextFrameIndex ? nextFrameIndex : current));
    },
    [syncHeroLaunchProgress],
  );

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
      reducedMotionQuery.matches || navigatorWithConnection.connection?.saveData === true;

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
            Franklin EV electric scooters are built for everyday Indian city commuting — practical
            range, low running cost, home charging and smart features that fit your lifestyle.
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
            Franklin EV combines efficient BLDC hub motors, smart battery management and
            rider-focused engineering for a seamless daily commute.
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

      {/* ── 3D BATTERY SHOWCASE ── */}
      <section className="relative py-20 overflow-hidden" data-animate="fade-up">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 bg-emerald-400/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-emerald-400/20">
              Battery Technology
            </span>
            <h2 className="font-display heading-section font-bold text-ink mt-4">
              Choose Your <span className="text-primary-gradient">Power</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Two battery options tailored to your riding needs – performance and efficiency.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {warrantyPackages.map((pkg, index) => (
              <Reveal key={pkg.name} delay={index * 0.1}>
                <article
                  className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-emerald-500/10 hover:-translate-y-1"
                  style={{
                    background: `
                radial-gradient(circle at 20% 20%, rgba(34,197,94,0.15), transparent 40%),
                radial-gradient(circle at 80% 80%, rgba(0,180,255,0.10), transparent 40%),
                #0b1220
              `,
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400" />

                  <div className="p-6 lg:p-8 flex flex-col items-center text-center">
                    <div className="relative w-64 h-64 lg:w-72 lg:h-72 mb-6 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-cyan-400/20 to-emerald-400/20 rounded-full blur-2xl animate-pulse" />
                      <div
                        className="relative w-full h-full flex items-center justify-center animate-[float_4s_ease-in-out_infinite] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{ perspective: "800px" }}
                      >
                        <img
                          src={pkg.image}
                          alt={pkg.alt}
                          className="max-h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-700"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white">{pkg.name}</h3>

                    <div className="mt-6 w-full space-y-2 text-sm text-gray-300">
                      <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-gray-400">Top Speed</span>
                        <span className="font-semibold text-white">{pkg.speed}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-gray-400">Charge Time (0–80%)</span>
                        <span className="font-semibold text-white">{pkg.chargeTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Charger</span>
                        <span className="font-semibold text-white">{pkg.charger}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RANGE SECTION ── */}
      <section className="home-range-transfer bg-hero-gradient" data-animate="fade-up">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
          <Reveal className="text-center">
            <h2 className="font-display heading-section font-bold text-ink">
              The Franklin EV <span className="text-primary-gradient">Range</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Two variants, two batteries, two speed configurations — choose the Franklin EV that
              fits your commute.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              {
                name: "Franklin EV POWER PLUS",
                badge: "Sporty",
                tagline: "Sport-aggressive design. Built to stand out.",
                img: "/assets/products/power-black-left.png",
                accentColor: "#e67e22",
                heroStat: "0–60 in 4.2s",
              },
              {
                name: "Franklin EV RAPID",
                badge: "Everyday",
                tagline: "Clean lines. Everyday confidence.",
                img: "/assets/products/classic-gold-left.png",
                accentColor: "#f39c12",
                heroStat: "Up to 80km range",
              },
            ].map((model) => (
              <StaggerItem key={model.name}>
                <article className="group rounded-3xl border border-border bg-surface shadow-soft overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
                  <div className="relative flex items-center justify-center p-6 h-80 bg-transparent overflow-hidden">
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-40 blur-3xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
                      style={{
                        background: `radial-gradient(circle, ${model.accentColor}40, transparent 70%)`,
                        opacity: 0.6,
                      }}
                    />
                    <span
                      className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: `${model.accentColor}20`,
                        color: model.accentColor,
                        borderColor: `${model.accentColor}30`,
                        boxShadow: `0 4px 12px ${model.accentColor}20`,
                      }}
                    >
                      {model.badge}
                    </span>
                    <img
                      src={model.img}
                      alt={model.name}
                      className="max-h-full w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 pt-4 border-t border-border/50">
                    <div
                      className="h-[2.5px] w-12 rounded-full transition-all duration-500 group-hover:w-full mb-3"
                      style={{ background: model.accentColor }}
                    />
                    <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-primary">
                      {model.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-muted-foreground">{model.tagline}</p>
                      <Link
                        to="/vehicles"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline transition-all group-hover:gap-2.5 shrink-0 ml-4"
                      >
                        View Model
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                    <div className="mt-1 h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:h-5">
                      <span
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: model.accentColor }}
                      >
                        ⚡ {model.heroStat}
                      </span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── PREMIUM AUTOMOTIVE GALLERY (Tesla/Ather inspired) ── */}
      <section className="relative py-20 overflow-hidden" data-animate="fade-up">
        {/* Deep navy background with gradient glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(34,197,94,0.12), transparent 40%),
              radial-gradient(circle at 80% 80%, rgba(0,180,255,0.08), transparent 40%),
              #0f172a
            `,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
          {/* Section header */}
          <Reveal className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 bg-emerald-400/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-emerald-400/20">
              Lifestyle
            </span>
            <h2 className="font-display heading-section font-bold text-white mt-4">
              Ride the <span className="text-emerald-400">Future</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              See how Franklin EV fits into your daily life – from city commutes to weekend escapes.
            </p>
          </Reveal>

          {/* Premium gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
            
            {/* ── HERO IMAGE (col-span-2, row-span-2) ── */}
            <motion.div
              className="relative col-span-1 md:col-span-2 row-span-2 rounded-[32px] overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="relative w-full h-full bg-[#1a2332] flex items-center justify-center overflow-hidden">
                {/* Floating gradient glow behind hero */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-emerald-400/5 blur-3xl scale-150 animate-pulse" />
                
                {/* Parallax wrapper */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <motion.img
                    src="/assets/editorial/silver-rider-arrival.jpg"
                    alt="Franklin EV Power"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                
                {/* Glassmorphism overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 inline-block">
                    <p className="text-white font-semibold text-lg tracking-wide">Franklin EV Power</p>
                    <p className="text-gray-300 text-sm">Built for the open road</p>
                  </div>
                </div>
                
                {/* Badge */}
                {/* <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-emerald-400/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  ★ Hero
                </span> */}
              </div>
            </motion.div>

            {/* ── IMAGE 2 (top right) ── */}
            <motion.div
              className="relative rounded-[32px] overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full h-full bg-[#1a2332] flex items-center justify-center overflow-hidden">
                <motion.img
                  src="/assets/editorial/blue-cafe-parking.jpg"
                  alt="Smart Mobility"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 inline-block">
                    <p className="text-white font-semibold text-sm tracking-wide">Smart Mobility</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── IMAGE 3 (bottom right) ── */}
            <motion.div
              className="relative rounded-[32px] overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full h-full bg-[#1a2332] flex items-center justify-center overflow-hidden">
                <motion.img
                  src="/assets/editorial/red-apartment-front.jpg"
                  alt="City Ready"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 inline-block">
                    <p className="text-white font-semibold text-sm tracking-wide">City Ready</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── IMAGE 4 (full width below) ── */}
            {/* Made taller and used object-cover to fill width completely */}
            <motion.div
              className="relative col-span-1 md:col-span-3 rounded-[32px] overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="relative w-full h-[280px] md:h-[320px] bg-[#1a2332] flex items-center justify-center overflow-hidden">
                <motion.img
                  src="/assets/editorial/silver-apartment-front.jpg"
                  alt="Built for Everyday Freedom"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-2.5 inline-block">
                    {/* <p className="text-white font-semibold text-base tracking-wide">Built for Everyday Freedom</p> */}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* CTA */}
          <Reveal delay={0.4}>
            <div className="mt-12 text-center">
              <Link
                to="/vehicles"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-white font-semibold shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02] transition-all duration-300"
              >
                Explore the Range <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OWNERSHIP EXPERIENCE ── */}
      <section className="cinema-section cinema-split app-section" id="app" data-animate="fade-up">
        <Reveal className="cinema-copy">
          <div className="cinema-eyebrow text-primary font-semibold tracking-wider">
            Ownership Experience
          </div>
          <h2 className="font-display heading-section font-bold text-ink leading-tight">
            Simple to own. <br />
            <span className="text-primary-gradient">Easy to love.</span>
          </h2>
{/* 
          <div className="mt-10">
            <div className="relative">
              <div className="absolute top-8 left-8 right-8 h-[2px] bg-gradient-to-r from-primary via-cyan-400 to-primary" />

              <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
                {[
                  { icon: HomeIcon, title: "Charge at home" },
                  { icon: Gauge, title: "Smart diagnostics" },
                  { icon: ShieldCheck, title: "Warranty coverage" },
                  { icon: Settings, title: "Service support" },
                  { icon: Apple, title: "App Store" },
                  { icon: Play, title: "Google Play" },
                ].map(({ icon: Icon, title }) => (
                  <div key={title} className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full border-4 border-primary bg-white shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="mt-4 text-sm font-semibold text-ink max-w-[140px]">
                      {title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          <div className="mt-10">
  <div className="relative">

    {/* Hide line on mobile, show on tablet/laptop */}
    <div className="hidden md:block absolute top-8 left-8 right-8 h-[2px] bg-gradient-to-r from-primary via-cyan-400 to-primary" />

    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
      {[
        { icon: HomeIcon, title: "Charge at home" },
        { icon: Gauge, title: "Smart diagnostics" },
        { icon: ShieldCheck, title: "Warranty coverage" },
        { icon: Settings, title: "Service support" },
        { icon: Apple, title: "App Store" },
        { icon: Play, title: "Google Play" },
      ].map(({ icon: Icon, title }) => (
        <div
          key={title}
          className="flex flex-col items-center text-center group"
        >
          <div className="w-16 h-16 rounded-full border-4 border-primary bg-white shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
            <Icon className="w-7 h-7 text-primary" />
          </div>

          <h4 className="mt-4 text-sm font-semibold text-ink max-w-[140px]">
            {title}
          </h4>
        </div>
      ))}
    </div>

  </div>
</div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-gradient text-primary-foreground font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <Smartphone className="h-4 w-4" />
              Ask about the app
            </Link>
            <Link
              to="/vehicles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/20 bg-surface text-ink font-semibold text-sm shadow-sm hover:bg-primary/5 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
            >
              Explore models
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal className="phone-stage" delay={0.1}>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150" />

            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2.8rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] border border-white/50 overflow-hidden">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20" />

              <div className="p-5 pt-12 h-full bg-gradient-to-b from-slate-50 to-white">
                <div className="bg-white rounded-2xl p-3 shadow-sm border mb-4 flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-ink">Franklin EV</span>
                </div>

                <div className="bg-white rounded-3xl p-5 shadow-md border mb-4">
                  <p className="text-xs text-muted-foreground">Hyderabad • 82% Battery</p>
                  <h3 className="text-3xl font-bold mt-2">
                    <span className="text-sky-600">Franklin</span>{" "}
                    <span className="text-primary">EV</span>
                  </h3>
                  <p className="text-primary font-semibold mt-1">POWER MODE</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white rounded-2xl p-4 shadow-sm border">
                    <div className="text-3xl font-bold text-sky-600">75</div>
                    <p className="text-xs mt-2 text-muted-foreground">KM ESTIMATED RANGE</p>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-sm border">
                    <div className="text-3xl font-bold text-sky-600">4.5</div>
                    <p className="text-xs mt-2 text-muted-foreground">HRS TO FULL CHARGE</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white rounded-xl px-4 py-3 border shadow-sm flex items-center gap-3">
                    <Gauge className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Smart diagnostics active</span>
                  </div>
                  <div className="bg-white rounded-xl px-4 py-3 border shadow-sm flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Warranty protected</span>
                  </div>
                  <div className="bg-white rounded-xl px-4 py-3 border shadow-sm flex items-center gap-3">
                    <BatteryCharging className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Charging at home</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── DEALER SECTION ── */}
      <section className="cinema-section dealer-section bg-hero-gradient" data-animate="fade-up">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
          <Reveal className="text-center mb-12">
            <div className="cinema-eyebrow text-primary font-semibold">Find Us Near You</div>
            <h2 className="font-display heading-section font-bold text-ink mt-2">
              Experience Franklin EV <span className="text-primary-gradient">in person</span>.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit a Franklin EV dealer to explore POWER and Classic models, compare battery
              options, take a test ride and get pricing. Locations across Hyderabad, Telangana and
              Andhra Pradesh.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            <div className="relative rounded-3xl border border-border bg-surface shadow-soft overflow-hidden group h-full min-h-[400px]">
              <DealerMap />
            </div>

            <div className="relative rounded-3xl border border-border bg-surface shadow-soft overflow-hidden group h-full min-h-[400px]">
              <div className="relative w-full h-full">
                <img
                  src="/assets/editorial/dual-riders-underpass.jpg"
                  alt="Find a Franklin EV dealer near you"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.parentElement?.querySelector(".image-fallback");
                    if (fallback) fallback.classList.remove("hidden");
                  }}
                />
                <div className="image-fallback hidden absolute inset-0 flex flex-col items-center justify-center bg-muted/30">
                  <MapPin className="h-12 w-12 text-primary/40" />
                  <span className="mt-2 text-sm font-medium text-muted-foreground">
                    Find a dealer near you
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="relative py-20 overflow-hidden" data-animate="fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-muted/10 to-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(0,180,255,0.03)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-primary/20">
              FAQ
            </span>
            <h2 className="font-display heading-section font-bold text-ink mt-4">
              Frequently asked <span className="text-primary-gradient">questions</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {faqItems.map((item, index) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <Reveal key={item.question} delay={index * 0.03}>
                  <div
                    className={`group rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-primary/30 bg-white shadow-xl shadow-primary/5"
                        : "border-border bg-surface/80 hover:border-primary/20 hover:shadow-md"
                    }`}
                  >
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </span>
                        <h3 className="font-display text-sm font-semibold text-ink group-hover:text-primary transition-colors">
                          {item.question}
                        </h3>
                      </div>
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-5 pt-1">
                        <div className="h-px w-full bg-gradient-to-r from-primary/20 via-primary/5 to-transparent mb-3" />
                        <p className="text-sm text-muted-foreground leading-relaxed pr-4">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TEST RIDE PANEL (commented out) ── */}
      {/* 
      <section className="cinema-section test-ride-panel" id="test-ride" data-animate="fade-up">
        <Reveal>
          <div className="cinema-eyebrow">Experience It Yourself</div>
          <h2>Ready to experience <em>smarter mobility?</em></h2>
          <p>Experience the Franklin EV POWER or Classic in person. Choose your speed, your battery and your colour at a dealer near you.</p>
          <Link to="/contact" className="cinema-btn cinema-btn-primary">Book My Test Ride <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </section>
      */}
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
