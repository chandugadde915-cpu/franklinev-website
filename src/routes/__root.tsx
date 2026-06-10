import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingDock } from "../components/FloatingDock";

const siteUrl = "https://franklinev-website.vercel.app";
const socialImageUrl = `${siteUrl}/assets/hero-powerplus.jpg`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Franklin EV India Pvt. Ltd.",
  url: siteUrl,
  image: socialImageUrl,
  logo: `${siteUrl}/assets/franklin-ev-logo.png`,
  description:
    "Franklin EV India Pvt. Ltd. offers smart electric scooters in Hyderabad for everyday freedom, daily commute, home charging, cruise control, low running cost and local dealer support.",
  priceRange: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "KNR Arcade, Plot No. 12, Chanikyapuri Colony, Mallapur",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500076",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-89770-40935",
    contactType: "Sales",
    areaServed: "IN",
    availableLanguage: ["English", "Telugu", "Hindi"],
  },
  sameAs: [
    "https://www.linkedin.com/company/franklin-ev",
    "https://www.instagram.com/franklinev",
    "https://www.facebook.com/franklinev",
    "https://twitter.com/franklinev",
  ],
};

const productCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Franklin EV electric scooter range",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Franklin EV Power ++",
        brand: { "@type": "Brand", name: "Franklin EV" },
        image: socialImageUrl,
        description:
          "Flagship Franklin EV electric scooter designed for longer daily rides, intelligent performance, cruise control, smart features and battery & motor warranty support.",
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/vehicles`,
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Franklin EV Rapid",
        brand: { "@type": "Brand", name: "Franklin EV" },
        image: `${siteUrl}/assets/scroll-frames/powerplus-side.jpg`,
        description:
          "Franklin EV Rapid is a practical electric scooter for daily city commutes with smart ownership, low running cost, cruise control support and convenient charging.",
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/vehicles`,
        },
      },
    },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Franklin EV",
  url: siteUrl,
  description:
    "Official Franklin EV website for smart electric scooters in Hyderabad, electric scooter test rides, model comparison, dealer locations, savings information, charging guidance and ownership support.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far can a Franklin EV scooter travel on a single charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Range depends on model, riding mode, load and road conditions. Franklin EV highlights up to 120 km range for suitable model configurations.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to charge an electric scooter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Charging cost depends on your electricity tariff and battery usage, but daily electric scooter charging is typically much lower than petrol running cost.",
      },
    },
    {
      "@type": "Question",
      name: "How long does charging take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Charging time varies by model, battery condition and charger type, but most riders can plan charging comfortably around home or overnight routines.",
      },
    },
    {
      "@type": "Question",
      name: "Can I charge my Franklin EV scooter at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Franklin EV ownership is designed around convenient home charging with a compatible socket and dealer guidance.",
      },
    },
    {
      "@type": "Question",
      name: "What warranty coverage is available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Warranty coverage depends on the model and battery package, and Franklin EV provides warranty support guidance through its sales and service network before delivery.",
      },
    },
    {
      "@type": "Question",
      name: "What maintenance does an electric scooter require?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Electric scooters have fewer moving parts than petrol scooters, helping reduce engine oil changes, fuel-system maintenance and regular running expenses.",
      },
    },
    {
      "@type": "Question",
      name: "Where are Franklin EV service centres located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Franklin EV supports riders through dealer and service locations across Hyderabad, Telangana and Andhra Pradesh. Contact the team before visiting to confirm availability.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Franklin EV over a petrol scooter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Franklin EV offers lower running costs, convenient charging, smart features, quieter riding and a cleaner commuting experience for city riders.",
      },
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex items-center justify-center bg-background px-4 py-3">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-ink">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary-gradient px-6 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="fixed left-1/2 top-20 z-[90] w-[min(92vw,26rem)] -translate-x-1/2 rounded-2xl border border-border bg-surface/95 px-4 py-3 text-center shadow-lift backdrop-blur">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-ink">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary-gradient px-6 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-2.5 text-sm font-semibold text-ink"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#EEF5F9" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      {
        title: "Franklin EV | India's Smart Electric Scooter Brand",
      },
      {
        name: "description",
        content:
          "Franklin EV offers smart electric scooters in Hyderabad for everyday freedom, daily commute, low running cost, home charging, cruise control, smart features and local test ride support.",
      },
      {
        name: "keywords",
        content:
          "best electric scooter in Hyderabad, affordable electric scooter in Hyderabad, electric scooter showroom in Hyderabad, electric scooter test ride in Hyderabad, long range electric scooter in Hyderabad, electric scooter with cruise control in India, electric scooter charging cost in Hyderabad, electric scooter dealer near Hitech City",
      },
      { name: "author", content: "Franklin EV India Pvt. Ltd." },
      { property: "og:site_name", content: "Franklin EV" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Franklin EV - India's Smart Electric Scooter Brand for Everyday Freedom",
      },
      {
        property: "og:description",
        content:
          "Experience smarter mobility with Franklin EV electric scooters built for Indian riders, everyday freedom, home charging, lower running costs and intelligent features.",
      },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: socialImageUrl },
      { property: "og:image:secure_url", content: socialImageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Franklin EV Power ++ electric scooter launch image.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@franklinev" },
      { name: "twitter:image", content: socialImageUrl },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Syne:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productCatalogSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  useSiteMotion(location.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content" className="pt-16 pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingDock />
    </QueryClientProvider>
  );
}

function ScrollProgressBar() {
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    if (mobileQuery.matches) {
      return;
    }

    const updateProgress = () => {
      const progressElement = progressRef.current;
      if (!progressElement) {
        return;
      }

      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / scrollable, 1);
      progressElement.style.transform = `scaleX(${progress})`;
    };

    const requestProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", requestProgress);
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" style={{ transform: "scaleX(0)" }} />;
}

function useSiteMotion(pathname: string) {
  useEffect(() => {
    let startTimer = 0;
    let revealObserver: IntersectionObserver | null = null;
    let statObserver: IntersectionObserver | null = null;
    const animationFrames = new Set<number>();

    const startObservers = () => {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: "360px 0px" },
      );

      statObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) {
              return;
            }

            if (entry.target.dataset.statAnimated === "true") {
              statObserver?.unobserve(entry.target);
              return;
            }

            entry.target.dataset.statAnimated = "true";
            const target = Number(entry.target.dataset.target ?? entry.target.textContent ?? 0);
            const decimals = Number(entry.target.dataset.decimals ?? 0);
            const duration = 900;
            const start = performance.now();

            const tick = (now: number) => {
              const progress = Math.min(Math.max((now - start) / duration, 0), 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              entry.target.textContent = (target * eased).toLocaleString("en-IN", {
                maximumFractionDigits: decimals,
                minimumFractionDigits: decimals,
              });

              if (progress < 1) {
                const frame = requestAnimationFrame(tick);
                animationFrames.add(frame);
              } else {
                entry.target.textContent = target.toLocaleString("en-IN", {
                  maximumFractionDigits: decimals,
                  minimumFractionDigits: decimals,
                });
              }
            };

            entry.target.textContent = decimals > 0 ? "0.0" : "0";
            const frame = requestAnimationFrame(tick);
            animationFrames.add(frame);
            statObserver?.unobserve(entry.target);
          });
        },
        { threshold: 0.2, rootMargin: "120px 0px" },
      );

      document.querySelectorAll<HTMLElement>("[data-animate]").forEach((element) => {
        revealObserver?.observe(element);
      });
      document.querySelectorAll<HTMLElement>("[data-stat-number]").forEach((element) => {
        statObserver?.observe(element);
      });
    };

    startTimer = window.setTimeout(startObservers, 900);

    return () => {
      window.clearTimeout(startTimer);
      revealObserver?.disconnect();
      statObserver?.disconnect();
      animationFrames.forEach((frame) => cancelAnimationFrame(frame));
      animationFrames.clear();
    };
  }, [pathname]);
}
