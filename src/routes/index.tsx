import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  Apple,
  BatteryCharging,
  Bell,
  Check,
  Cpu,
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
import scooterFront from "@/assets/scooter-front.jpg.asset.json";
import scooterSide from "@/assets/scooter-side.jpg.asset.json";
import scooterTQ from "@/assets/scooter-three-quarter.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Franklin EV Electric Scooters in Hyderabad | KORO, NIX-DLX, POWER+",
      },
      {
        name: "description",
        content:
          "Explore Franklin EV electric scooters in Hyderabad, Telangana and Andhra Pradesh. Compare KORO, NIX-DLX and POWER+ with ~100 km range, 60 km/h top speed, BLDC hub motor, cruise control, anti-theft alerts and battery & motor warranty.",
      },
      {
        name: "keywords",
        content:
          "Franklin EV, electric scooter Hyderabad, electric scooter Telangana, electric scooter Andhra Pradesh, Franklin EV POWER+, Franklin EV KORO, Franklin EV NIX-DLX, removable battery scooter, BLDC hub motor scooter, electric two-wheeler Telangana, EV scooter dealer Hyderabad",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "IN-TG" },
      { name: "geo.placename", content: "Hyderabad, Telangana" },
      {
        property: "og:title",
        content: "Franklin EV Electric Scooters in Hyderabad | POWER+, KORO, NIX-DLX",
      },
      {
        property: "og:description",
        content:
          "Book a Franklin EV test ride and compare electric scooters with ~100 km range, BLDC hub motor, cruise control, anti-theft alerts and dealer support in Telangana and Andhra Pradesh.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.franklinev.co.in/assets/hero-powerplus.jpg" },
      {
        property: "og:image:alt",
        content: "Franklin EV POWER+ premium electric scooter launch hero.",
      },
      { property: "og:url", content: "https://www.franklinev.co.in" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Franklin EV Electric Scooters | Hyderabad & Telangana" },
      {
        name: "twitter:description",
        content:
          "Explore Franklin EV POWER+, KORO and NIX-DLX electric scooters with city-ready range, BLDC motor performance and battery & motor warranty.",
      },
      { name: "twitter:image", content: "https://www.franklinev.co.in/assets/hero-powerplus.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.franklinev.co.in/" },
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

const vehicleLineup = [
  {
    name: "KORO",
    tagline: "The everyday essential.",
    image: scooterSide.url,
    alt: "Franklin EV KORO electric scooter — side view",
    chips: ["60 km/h top speed", "~100 km range per charge", "Cruise control included"],
    badge: "City Model",
    cta: "Explore KORO",
  },
  {
    name: "NIX-DLX",
    tagline: "Style meets substance.",
    image: scooterTQ.url,
    alt: "Franklin EV NIX-DLX electric scooter — three-quarter view",
    chips: ["Premium finish & design", "Anti-theft smart alerts", "BLDC hub motor"],
    badge: "Premium Variant",
    cta: "Explore NIX-DLX",
  },
  {
    name: "POWER+",
    tagline: "Maximum presence, maximum performance.",
    image: scooterFront.url,
    alt: "Franklin EV POWER+ electric scooter — front view",
    chips: ["Flagship stance & build", "Battery & motor warranty", "Smart ride support"],
    badge: "Flagship Variant",
    cta: "Explore POWER+",
  },
] as const;

type HeroFrameMoment = {
  step: string;
  title: string;
  image: string;
  alt: string;
  kind: "hero" | "detail" | "wide";
  accent: string;
  position: string;
  scale: string;
  copy: string;
};

const heroSequenceFrameCount = 192;
const heroSequenceFrames = Array.from(
  { length: heroSequenceFrameCount },
  (_, index) => `/assets/hero-sequence/frame-${String(index + 1).padStart(3, "0")}.jpg`,
);
const heroSequenceSize = { width: 1600, height: 817 } as const;

const heroFrameKeyframes: HeroFrameMoment[] = [
  {
    step: "01",
    title: "Clean Roll-In",
    image: "/assets/scroll-frames/powerplus-front.jpg",
    alt: "Franklin EV POWER+ front view with LED headlamp signature",
    kind: "hero",
    accent: "#00aee8",
    position: "50% 50%",
    scale: "0.98",
    copy: "The scooter owns the first frame before the launch interface wakes up.",
  },
  {
    step: "02",
    title: "Wake Signal",
    image: "/assets/scroll-frames/powerplus-front.jpg",
    alt: "Franklin EV POWER+ LED headlamp wake frame",
    kind: "detail",
    accent: "#00e5ff",
    position: "50% 34%",
    scale: "1.34",
    copy: "The launch system fades in only after the rider begins scrolling.",
  },
  {
    step: "03",
    title: "Headlamp Pulse",
    image: "/assets/scroll-frames/powerplus-front.jpg",
    alt: "Franklin EV POWER+ front LED lighting check",
    kind: "detail",
    accent: "#36d7ff",
    position: "52% 39%",
    scale: "1.5",
    copy: "The POWER+ face gets a brighter LED-style launch beat.",
  },
  {
    step: "04",
    title: "Front Lock",
    image: "/assets/scroll-frames/powerplus-front.jpg",
    alt: "Franklin EV POWER+ front alignment frame",
    kind: "detail",
    accent: "#00aee8",
    position: "50% 58%",
    scale: "1.22",
    copy: "The front stance settles before the walkaround begins.",
  },
  {
    step: "05",
    title: "Side Glide",
    image: "/assets/scroll-frames/powerplus-side.jpg",
    alt: "Franklin EV POWER+ side profile scooter frame",
    kind: "wide",
    accent: "#f5a623",
    position: "50% 50%",
    scale: "0.96",
    copy: "The side profile comes in like a smooth product-trailer move.",
  },
  {
    step: "06",
    title: "Body Scan",
    image: "/assets/scroll-frames/powerplus-side.jpg",
    alt: "Franklin EV POWER+ side body scan frame",
    kind: "detail",
    accent: "#f5a623",
    position: "40% 44%",
    scale: "1.28",
    copy: "The side body line moves through the frame like a premium product scan.",
  },
  {
    step: "07",
    title: "Rider Zone",
    image: "/assets/scroll-frames/powerplus-side.jpg",
    alt: "Franklin EV POWER+ seat and rider zone frame",
    kind: "detail",
    accent: "#00c978",
    position: "50% 40%",
    scale: "1.38",
    copy: "The seat, floorboard, and daily riding geometry get a focused launch moment.",
  },
  {
    step: "08",
    title: "Wheel Roll",
    image: "/assets/scroll-frames/powerplus-side.jpg",
    alt: "Franklin EV POWER+ front wheel motion frame",
    kind: "detail",
    accent: "#ff4d4d",
    position: "24% 70%",
    scale: "1.42",
    copy: "The wheel frame adds movement so the scooter feels like it is rolling through the video.",
  },
  {
    step: "09",
    title: "Brake Detail",
    image: "/assets/scroll-frames/powerplus-side.jpg",
    alt: "Franklin EV POWER+ close crop of front brake and wheel hardware",
    kind: "detail",
    accent: "#ff4d4d",
    position: "82% 68%",
    scale: "1.5",
    copy: "A wheel-and-brake crop gives the sequence a sharper engineering beat.",
  },
  {
    step: "10",
    title: "Floorboard Pass",
    image: "/assets/scroll-frames/powerplus-side.jpg",
    alt: "Franklin EV POWER+ floorboard launch frame",
    kind: "detail",
    accent: "#00c978",
    position: "58% 58%",
    scale: "1.34",
    copy: "The usable riding space gets a clean, bright pass.",
  },
  {
    step: "11",
    title: "Rear Perspective",
    image: "/assets/scroll-frames/powerplus-rear-angle.jpg",
    alt: "Franklin EV POWER+ rear three-quarter view frame",
    kind: "wide",
    accent: "#36d7ff",
    position: "50% 50%",
    scale: "0.96",
    copy: "A rear three-quarter angle adds depth, body volume, and a more cinematic product reveal.",
  },
  {
    step: "12",
    title: "Cockpit Align",
    image: "/assets/scroll-frames/powerplus-rear-angle.jpg",
    alt: "Franklin EV POWER+ cockpit alignment frame",
    kind: "detail",
    accent: "#00aee8",
    position: "64% 50%",
    scale: "1.36",
    copy: "The cockpit and rider channel settle into view with a smoother technical readout.",
  },
  {
    step: "13",
    title: "Tail Glow",
    image: "/assets/scroll-frames/powerplus-rear-angle.jpg",
    alt: "Franklin EV POWER+ tail lamp launch frame",
    kind: "detail",
    accent: "#ff6b3d",
    position: "38% 52%",
    scale: "1.38",
    copy: "The tail section gets a brighter launch glow before the next angle.",
  },
  {
    step: "14",
    title: "Drive Sync",
    image: "/assets/scroll-frames/powerplus-rear-angle.jpg",
    alt: "Franklin EV POWER+ drivetrain sync frame",
    kind: "detail",
    accent: "#36d7ff",
    position: "58% 64%",
    scale: "1.3",
    copy: "The drivetrain moment adds one more mechanical beat before the full reveal.",
  },
  {
    step: "15",
    title: "Left Profile",
    image: "/assets/scroll-frames/powerplus-left-profile.jpg",
    alt: "Franklin EV POWER+ left side profile frame",
    kind: "wide",
    accent: "#00c978",
    position: "50% 50%",
    scale: "0.96",
    copy: "The opposite profile makes the frame section feel like a true walkaround experience.",
  },
  {
    step: "16",
    title: "Tail Detail",
    image: "/assets/scroll-frames/powerplus-left-profile.jpg",
    alt: "Franklin EV POWER+ close crop of tail lamp and rear body graphic",
    kind: "detail",
    accent: "#ff6b3d",
    position: "72% 48%",
    scale: "1.36",
    copy: "The tail lamp, rear badging, and orange graphics get their own high-contrast frame.",
  },
  {
    step: "17",
    title: "Battery Ready",
    image: "/assets/scroll-frames/powerplus-left-profile.jpg",
    alt: "Franklin EV POWER+ battery-ready side frame",
    kind: "detail",
    accent: "#00ff99",
    position: "46% 58%",
    scale: "1.32",
    copy: "The electric system reads as armed, efficient, and ready for city range.",
  },
  {
    step: "18",
    title: "Range Core",
    image: "/assets/scroll-frames/powerplus-left-profile.jpg",
    alt: "Franklin EV POWER+ range system launch frame",
    kind: "detail",
    accent: "#00c978",
    position: "54% 50%",
    scale: "1.24",
    copy: "The range system gets a calm, readable moment in the launch sequence.",
  },
  {
    step: "19",
    title: "Controller Check",
    image: "/assets/scroll-frames/powerplus-front.jpg",
    alt: "Franklin EV POWER+ controller system launch frame",
    kind: "detail",
    accent: "#00e5ff",
    position: "46% 44%",
    scale: "1.22",
    copy: "The smart controller check brings the interface back to the scooter face.",
  },
  {
    step: "20",
    title: "App Sync",
    image: "/assets/scroll-frames/powerplus-front.jpg",
    alt: "Franklin EV POWER+ connected app sync launch frame",
    kind: "detail",
    accent: "#36d7ff",
    position: "52% 46%",
    scale: "1.18",
    copy: "Connected ownership gets a futuristic launch-system cue.",
  },
  {
    step: "21",
    title: "Safety Seal",
    image: "/assets/scroll-frames/powerplus-side.jpg",
    alt: "Franklin EV POWER+ safety system launch frame",
    kind: "detail",
    accent: "#00c978",
    position: "50% 64%",
    scale: "1.22",
    copy: "The sequence gives safety and stability a confident visual lock.",
  },
  {
    step: "22",
    title: "Countdown",
    image: "/assets/scroll-frames/powerplus-front.jpg",
    alt: "Franklin EV POWER+ launch ready front frame",
    kind: "hero",
    accent: "#00aee8",
    position: "50% 50%",
    scale: "1",
    copy: "The launch interface is nearly complete, with the scooter centered and ready.",
  },
  {
    step: "23",
    title: "Final Walkaround",
    image: "/assets/scroll-frames/powerplus-left-profile.jpg",
    alt: "Franklin EV POWER+ full side walkaround closing frame",
    kind: "hero",
    accent: "#00aee8",
    position: "50% 50%",
    scale: "0.95",
    copy: "The sequence closes on a clean full-body profile for a confident product finish.",
  },
  {
    step: "24",
    title: "Ride Ready",
    image: "/assets/scroll-frames/powerplus-front.jpg",
    alt: "Franklin EV POWER+ ride ready launch frame",
    kind: "hero",
    accent: "#00aee8",
    position: "50% 50%",
    scale: "1",
    copy: "The scooter is bright, clear, and ready for the rest of the Franklin EV experience.",
  },
];

const heroFrameMoments: HeroFrameMoment[] = Array.from(
  { length: heroSequenceFrameCount },
  (_, index) => {
    const keyframeIndex = Math.min(
      heroFrameKeyframes.length - 1,
      Math.floor((index / heroSequenceFrameCount) * heroFrameKeyframes.length),
    );
    const source = heroFrameKeyframes[keyframeIndex];

    return {
      ...source,
      step: String(index + 1).padStart(2, "0"),
    };
  },
);

const features = [
  {
    Icon: Wallet,
    title: "Lower Running Cost",
    body: "Electric charging keeps daily running costs predictable and low. Use the savings calculator to compare Franklin EV ownership with petrol riding for your commute.",
  },
  {
    Icon: BatteryCharging,
    title: "Removable Battery",
    body: "Charge with a standard 15 A plug-and-play setup at home, at work, or with dealer guidance — made for Indian city riders who need simple charging.",
  },
  {
    Icon: Cpu,
    title: "Smart Connected Ownership",
    body: "Connected features support live location tracking, battery status, trip information and anti-theft alerts, giving riders a clearer view of everyday ownership.",
  },
  {
    Icon: ShieldCheck,
    title: "3-Year Warranty Coverage",
    body: "Franklin EV scooters are backed by battery and motor warranty coverage, with model details available from the nearest Franklin EV dealer.",
  },
] as const;

const modelColors = [
  {
    id: "red",
    name: "Red",
    swatch: "#d32122",
    image: "/assets/model-colors/bike_1_red_transparent.png",
  },
  {
    id: "light-blue",
    name: "Light Blue",
    swatch: "#9fc8df",
    image: "/assets/model-colors/bike_2_light_blue_transparent.png",
  },
  {
    id: "silver",
    name: "Silver",
    swatch: "#b9c1c8",
    image: "/assets/model-colors/bike_4_silver_transparent.png",
  },
  {
    id: "black",
    name: "Black",
    swatch: "#161616",
    image: "/assets/model-colors/bike_5_black_transparent.png",
  },
  {
    id: "blue",
    name: "Blue",
    swatch: "#1457a8",
    image: "/assets/model-colors/bike_6_blue_transparent.png",
  },
] as const;

const heroScrollRangeMultiplier = 6.4;
type ModelId = "power" | "koro" | "nix";

function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const heroCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroImageCacheRef = useRef<(HTMLImageElement | null)[]>([]);
  const lastDrawnHeroFrameRef = useRef(-1);
  const [heroFrameProgress, setHeroFrameProgress] = useState(0);
  const [dailyRide, setDailyRide] = useState(32);
  const [petrolPrice, setPetrolPrice] = useState(110);
  const [range, setRange] = useState(110);
  const [model, setModel] = useState<ModelId>("power");
  const [colorId, setColorId] = useState<(typeof modelColors)[number]["id"]>("light-blue");

  const selectedColor = modelColors.find((color) => color.id === colorId) ?? modelColors[0];
  const activeHeroFrame = Math.min(
    heroFrameMoments.length - 1,
    Math.floor(heroFrameProgress * heroFrameMoments.length),
  );
  const launchRevealProgress = Math.min(Math.max((heroFrameProgress - 0.055) / 0.18, 0), 1);
  const launchIsActive = heroFrameProgress > 0.055;
  const monthlyEvCost = Math.round(dailyRide * 30 * 0.22);
  const monthlyFuelCost = Math.round(((dailyRide * 30) / 42) * petrolPrice);
  const monthlySavings = Math.max(0, monthlyFuelCost - monthlyEvCost);
  const threeYearSavings = monthlySavings * 36;
  const models = {
    power: {
      name: "Franklin EV Power+",
      buttonLabel: "Power+",
      badge: "Flagship electric scooter for confident city rides.",
      body: "Franklin EV POWER+ is the flagship model for riders who want a bold road presence, ~100 km range, 60 km/h top speed, BLDC hub motor performance, cruise control and anti-theft alert support.",
      specs: ["~100 km range per charge", "60 km/h top speed", "BLDC hub motor"],
    },
    koro: {
      name: "Franklin EV KORO",
      buttonLabel: "KORO",
      badge: "Practical electric scooter for daily city commutes.",
      body: "Franklin EV KORO focuses on everyday electric mobility with ~100 km range, 60 km/h top speed, cruise control, anti-theft key alerts and low running cost for city riders.",
      specs: ["~100 km range", "Cruise control", "Anti-theft key alerts"],
    },
    nix: {
      name: "Franklin EV NIX-DLX",
      buttonLabel: "NIX-DLX",
      badge: "Premium styling with smart electric ownership.",
      body: "Franklin EV NIX-DLX pairs refined styling with the same practical electric scooter essentials: BLDC hub motor performance, smart alerts, ~100 km range and dealer support.",
      specs: ["Premium body design", "Smart anti-theft alerts", "BLDC hub motor"],
    },
  } as const;
  const activeModel = models[model];

  const loadHeroFrameImage = useCallback((index: number) => {
    const src = heroSequenceFrames[index];
    if (!src) {
      return null;
    }

    const cached = heroImageCacheRef.current[index];
    if (cached) {
      return cached;
    }

    const image = new Image();
    image.decoding = "async";
    image.src = src;
    heroImageCacheRef.current[index] = image;
    return image;
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
      return true;
    },
    [loadHeroFrameImage],
  );

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setHeroFrameProgress(0.24);
      return;
    }

    let frame = 0;
    let targetProgress = 0;
    let renderedProgress = 0;
    let touchStartY: number | null = null;

    const clampProgress = (value: number) => Math.min(Math.max(value, 0), 1);

    const getHeroTop = () => hero.getBoundingClientRect().top + window.scrollY;

    const getFrameScrollRange = () =>
      Math.max(window.innerHeight * heroScrollRangeMultiplier, 1200);

    const softenInputDelta = (deltaY: number) => {
      const maxDelta = Math.max(64, window.innerHeight * 0.34);
      return Math.sign(deltaY) * Math.min(Math.abs(deltaY), maxDelta);
    };

    const normalizeWheelDelta = (event: WheelEvent) => {
      if (event.deltaMode === 1) {
        return event.deltaY * 16;
      }

      if (event.deltaMode === 2) {
        return event.deltaY * window.innerHeight;
      }

      return event.deltaY;
    };

    const updateHeroFrame = () => {
      const delta = targetProgress - renderedProgress;
      renderedProgress += delta * 0.16;

      if (Math.abs(delta) < 0.0007) {
        renderedProgress = targetProgress;
      }

      setHeroFrameProgress((current) =>
        Math.abs(current - renderedProgress) > 0.0007 ? renderedProgress : current,
      );

      if (Math.abs(targetProgress - renderedProgress) > 0.0007) {
        frame = requestAnimationFrame(updateHeroFrame);
      } else {
        frame = 0;
      }
    };

    const requestFrame = () => {
      if (!frame) {
        frame = requestAnimationFrame(updateHeroFrame);
      }
    };

    const syncProgressFromPagePosition = () => {
      const heroTop = getHeroTop();

      if (window.scrollY > heroTop + 6) {
        targetProgress = 1;
        renderedProgress = 1;
        setHeroFrameProgress(1);
      }
    };

    const consumeHeroScroll = (deltaY: number, event: Event) => {
      if (Math.abs(deltaY) < 0.1) {
        return false;
      }

      const rect = hero.getBoundingClientRect();
      const heroTop = getHeroTop();
      const heroIsPinned = rect.top <= 1 && rect.bottom >= window.innerHeight * 0.72;
      const movingForward = deltaY > 0;
      const movingBackward = deltaY < 0;
      const shouldAdvanceFrames =
        movingForward && heroIsPinned && (targetProgress < 1 || renderedProgress < 0.995);
      const shouldReverseFrames =
        movingBackward && heroIsPinned && (targetProgress > 0 || renderedProgress > 0.005);

      if (!shouldAdvanceFrames && !shouldReverseFrames) {
        return false;
      }

      event.preventDefault();

      if (Math.abs(window.scrollY - heroTop) > 1) {
        window.scrollTo({ top: heroTop, behavior: "auto" });
      }

      targetProgress = clampProgress(
        targetProgress + softenInputDelta(deltaY) / getFrameScrollRange(),
      );
      requestFrame();
      return true;
    };

    const handleWheel = (event: WheelEvent) => {
      consumeHeroScroll(normalizeWheelDelta(event), event);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY;

      if (touchStartY === null || currentY === undefined) {
        return;
      }

      const deltaY = (touchStartY - currentY) * 0.72;

      if (consumeHeroScroll(deltaY, event)) {
        touchStartY = currentY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("resize", requestFrame);
    syncProgressFromPagePosition();
    requestFrame();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", requestFrame);
    };
  }, [loadHeroFrameImage]);

  useEffect(() => {
    const preloadStart = Math.max(0, activeHeroFrame - 4);
    const preloadEnd = Math.min(heroSequenceFrames.length, activeHeroFrame + 10);

    for (let index = preloadStart; index < preloadEnd; index += 1) {
      const image = loadHeroFrameImage(index);

      if (index === activeHeroFrame && image && !image.complete) {
        image.onload = () => {
          drawHeroFrame(index);
        };
      }
    }

    if (!drawHeroFrame(activeHeroFrame)) {
      const image = loadHeroFrameImage(activeHeroFrame);
      if (image) {
        image.onload = () => {
          drawHeroFrame(activeHeroFrame);
        };
      }
    }
  }, [activeHeroFrame, drawHeroFrame, loadHeroFrameImage]);

  useEffect(() => {
    const redrawCurrentFrame = () => {
      const frameToDraw =
        lastDrawnHeroFrameRef.current >= 0 ? lastDrawnHeroFrameRef.current : activeHeroFrame;
      drawHeroFrame(frameToDraw);
    };

    redrawCurrentFrame();
    window.addEventListener("resize", redrawCurrentFrame);

    return () => window.removeEventListener("resize", redrawCurrentFrame);
  }, [activeHeroFrame, drawHeroFrame]);

  useEffect(() => {
    const videos = Array.from(
      document.querySelectorAll<HTMLVideoElement>("video[data-lazy-video]"),
    );

    if (videos.length === 0) {
      return;
    }

    const loadVideo = (video: HTMLVideoElement) => {
      if (video.dataset.loaded === "true") {
        return;
      }

      video.dataset.loaded = "true";
      video.querySelectorAll<HTMLSourceElement>("source[data-src]").forEach((source) => {
        if (source.dataset.src && source.src !== source.dataset.src) {
          source.src = source.dataset.src;
        }
      });
      video.load();
      if (video.autoplay) {
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
            loadVideo(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "650px 0px", threshold: 0.01 },
    );

    videos.forEach((video) => observer.observe(video));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="cinema-home">
      <section className="cinema-hero" id="hero" ref={heroRef}>
        <div className="cinema-hero-stage" aria-hidden="true">
          <canvas
            ref={heroCanvasRef}
            className="cinema-hero-video"
            width={heroSequenceSize.width}
            height={heroSequenceSize.height}
            aria-hidden="true"
          />
          <div className="cinema-hero-rings">
            <span />
            <span />
            <span />
          </div>
          <div className="cinema-road" />
          <div className="cinema-hero-shade" />
          <div
            className={`cinema-frame-hud${launchIsActive ? " is-active" : ""}`}
            style={
              {
                "--frame-progress": `${heroFrameProgress * 100}%`,
                "--launch-progress": `${launchRevealProgress}`,
              } as CSSProperties
            }
          >
            <div className="cinema-frame-meter">
              <span />
            </div>
            <div className="cinema-frame-rail">
              {heroFrameMoments.map((frame, index) => (
                <span
                  key={frame.step}
                  aria-label={`Frame ${frame.step}: ${frame.title}`}
                  className={
                    index === activeHeroFrame
                      ? "is-current"
                      : index < activeHeroFrame
                        ? "is-complete"
                        : undefined
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`cinema-hero-content${launchIsActive ? " is-launching" : ""}`}
          style={{ "--launch-progress": `${launchRevealProgress}` } as CSSProperties}
        >
          <motion.div
            className="cinema-hero-copy"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="cinema-eyebrow">
              <Sparkles className="h-4 w-4" />
              Franklin EV Launchpad
            </div>
            <h1 className="cinema-hero-title">
              <span>Welcome to </span>
              <span>
                the <em>electric era</em>.
              </span>
            </h1>
            <p className="cinema-hero-sub">
              Explore Franklin EV electric scooters for Hyderabad, Telangana and Andhra Pradesh.
              Compare KORO, NIX-DLX and POWER+ with city-ready range, BLDC motor performance, cruise
              control, anti-theft alerts and local dealer support.
            </p>
            <div className="cinema-hero-actions">
              <Link to="/contact" className="cinema-btn cinema-btn-primary">
                Book Your Test Ride <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/vehicles" className="cinema-btn cinema-btn-ghost">
                Explore All Models
              </Link>
            </div>
            <div className="cinema-trust">
              <span />
              <strong>100 km</strong> approx. single-charge range
              <b />
              <strong>60 km/h</strong> top speed
            </div>
          </motion.div>

          <div className="cinema-callouts">
            {[
              ["100", "km", "Approx. range"],
              ["4.5", "hrs", "0-80% charge time"],
              ["60", "km/h", "Top speed"],
              ["3", "yrs", "Battery & motor warranty"],
            ].map(([value, unit, label], index) => (
              <motion.div
                key={label}
                className="cinema-callout"
                initial={false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.12, duration: 0.55 }}
              >
                <span className="cinema-callout-icon">
                  {index === 1 ? <BatteryCharging /> : index === 2 ? <Gauge /> : <Zap />}
                </span>
                <span>
                  <strong>
                    <span
                      data-count-to={value}
                      data-count-decimals={value.includes(".") ? "1" : "0"}
                    >
                      {value}
                    </span>{" "}
                    <small>{unit}</small>
                  </strong>
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="cinema-stat-strip"
        data-animate="fade-up"
        aria-label="Franklin EV key performance stats"
      >
        {[
          { value: 60, suffix: "km/h", label: "Top speed" },
          { value: 100, suffix: "km", label: "Approx. single-charge range" },
          { value: 3, suffix: "yrs", label: "Battery and motor warranty" },
          { value: 20, suffix: "+", label: "Listed dealer locations" },
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
          <div className="cinema-eyebrow">Battery Architecture</div>
          <h2 className="cinema-title">
            Removable power, <em>real</em> range.
          </h2>
          <p>
            Franklin EV charging is designed around daily convenience. Use the 650 W plug-and-play
            charger with a standard 15 A socket, charge at home or work, and speak with your nearest
            dealer for model-specific battery guidance and warranty support.
          </p>
          <div className="cinema-mini-stats">
            {[
              "~4.5 hr 0-80% charge",
              "650 W plug-and-play charger",
              "3-year battery & motor warranty",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
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
          >
            <source data-src="/frames/battery-charge.mp4" type="video/mp4" />
          </video>
        </Reveal>
      </section>

      <section className="cinema-section motor-cinema" id="motor" data-animate="fade-up">
        <Reveal className="motor-copy">
          <div className="cinema-eyebrow">The Heart of the Machine</div>
          <h2 className="cinema-title">
            A BLDC hub motor, <em>built to perform</em>.
          </h2>
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
          >
            <source data-src="/frames/motor-explode-scrub.mp4" type="video/mp4" />
          </video>
          <div className="motor-callout-row">
            {[
              "Precision-wound stator for consistent torque",
              "7 precision-machined components",
              "Ventilated disc brake for responsive stopping",
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
            Practical details, <em>built for daily EV riding</em>.
          </h2>
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

      <section className="cinema-section vehicle-lineup-section" id="lineup" data-animate="fade-up">
        <Reveal className="cinema-copy cinema-copy-wide">
          <div className="cinema-eyebrow">Vehicle Lineup</div>
          <h2 className="cinema-title">
            Choose your <em>electric signature</em>.
          </h2>
          <p>
            KORO, NIX-DLX, and POWER+ each carry the Franklin EV promise: cleaner commutes, quieter
            rides, low running costs and connected ownership support through listed dealer locations
            across Telangana and Andhra Pradesh.
          </p>
        </Reveal>
        <div className="vehicle-lineup-grid">
          {vehicleLineup.map((vehicle) => (
            <article className="vehicle-lineup-card" key={vehicle.name}>
              <div className="vehicle-card-media">
                <span className="vehicle-card-badge">{vehicle.badge}</span>
                <img src={vehicle.image} alt={vehicle.alt} loading="lazy" />
              </div>
              <div className="vehicle-card-body">
                <h3>{vehicle.name}</h3>
                <p>{vehicle.tagline}</p>
                <div className="vehicle-card-chips">
                  {vehicle.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
                <Link to="/vehicles" className="vehicle-card-link">
                  {vehicle.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="cinema-section cinema-split cost-section"
        id="intelligence"
        data-animate="fade-up"
      >
        <Reveal className="cinema-copy">
          <div className="cinema-eyebrow">Cost Comparison</div>
          <h2 className="cinema-title">
            Compare petrol costs with
            <em> electric riding.</em>
          </h2>
          <p>
            Adjust your daily ride distance and petrol price to estimate monthly running cost and
            possible savings with a Franklin EV electric scooter.
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
          <div className="cinema-eyebrow">Connected App Support</div>
          <h2 className="cinema-title">
            Your scooter, <em>clearer to manage</em>.
          </h2>
          <p>
            Franklin EV connected features help riders check live location, battery status,
            anti-theft alerts and trip information from a smartphone. Ask your dealer which app
            features are available for your selected model.
          </p>
          <div className="app-feature-list">
            {[
              { Icon: Navigation, label: "Live GPS location tracking" },
              { Icon: Bell, label: "Battery status alerts" },
              { Icon: LockKeyhole, label: "Anti-theft notifications" },
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
                <strong>Franklin EV POWER+</strong>
                <span>Hyderabad · 82% battery</span>
              </div>
              <div className="phone-metric-grid">
                <span>
                  <strong>100</strong>
                  km approx. range
                </span>
                <span>
                  <strong>4.5</strong>
                  hrs to 80% charge
                </span>
              </div>
              <div className="phone-alert">
                <Bell className="h-4 w-4" />
                Anti-theft protection active
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
          <motion.img
            key={`${model}-${colorId}`}
            src={selectedColor.image}
            alt={`Franklin EV ${activeModel.buttonLabel} electric scooter in ${selectedColor.name} color`}
            initial={false}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.45 }}
          />
          <div className="model-platform" />
        </div>
        <Reveal className="model-info">
          <div className="cinema-eyebrow">POWER+ / KORO / NIX-DLX</div>
          <p className="model-badge">{activeModel.badge}</p>
          <h2>{activeModel.name}</h2>
          <p>{activeModel.body}</p>
          <div className="model-pills">
            {activeModel.specs.map((spec) => (
              <span key={spec}>{spec}</span>
            ))}
          </div>
          <div className="model-switch" aria-label="Choose Franklin EV model">
            {(["power", "koro", "nix"] as const).map((id) => (
              <button
                key={id}
                type="button"
                className={model === id ? "active" : undefined}
                onClick={() => setModel(id)}
              >
                {models[id].buttonLabel}
              </button>
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
                  src={color.image}
                  alt={`Franklin EV ${activeModel.buttonLabel} electric scooter in ${color.name}`}
                  loading="lazy"
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
            Dealers across <em>Telangana & Andhra Pradesh</em>.
          </h2>
          <p>
            Find Franklin EV dealer locations in Hyderabad, Telangana and Andhra Pradesh for model
            enquiries, test ride support and service guidance. Contact the team before visiting to
            confirm current availability.
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

      <section className="cinema-section test-ride-panel" id="test-ride" data-animate="fade-up">
        <Reveal>
          <div className="cinema-eyebrow">Experience It Yourself</div>
          <h2>
            Book a <em>test ride</em> today.
          </h2>
          <p>
            Compare the ride quality, acceleration, comfort and connected features in person. Share
            your city and preferred model, and the Franklin EV team will help you plan the next
            step.
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
