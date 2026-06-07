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
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingDock } from "../components/FloatingDock";

const siteUrl = "https://www.franklinev.co.in";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Franklin EV India Pvt. Ltd.",
  url: siteUrl,
  image: `${siteUrl}/assets/hero-powerplus.jpg`,
  logo: `${siteUrl}/assets/franklin-ev-logo.png`,
  description:
    "Franklin EV India Pvt. Ltd. offers electric scooters for Indian city riders, including KORO, NIX-DLX and POWER+ with BLDC hub motor performance, city-ready range and dealer support.",
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
        name: "Franklin EV POWER+",
        brand: { "@type": "Brand", name: "Franklin EV" },
        image: `${siteUrl}/assets/hero-powerplus.jpg`,
        description:
          "Flagship Franklin EV electric scooter with ~100 km range, 60 km/h top speed, BLDC hub motor performance, cruise control, anti-theft alerts and battery & motor warranty support.",
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
        name: "Franklin EV KORO",
        brand: { "@type": "Brand", name: "Franklin EV" },
        image: `${siteUrl}/assets/scroll-frames/powerplus-side.jpg`,
        description:
          "Franklin EV KORO is a practical electric scooter for daily city commutes with ~100 km range, low running cost, cruise control, anti-theft key alerts and BLDC hub motor performance.",
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
      position: 3,
      item: {
        "@type": "Product",
        name: "Franklin EV NIX-DLX",
        brand: { "@type": "Brand", name: "Franklin EV" },
        image: `${siteUrl}/assets/scroll-frames/powerplus-front.jpg`,
        description:
          "Franklin EV NIX-DLX combines premium styling, smart anti-theft alerts, cruise control and efficient electric scooter performance for Hyderabad and Telangana riders.",
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
    "Official Franklin EV website for electric scooter test rides, model comparison, dealer locations, and ownership information.",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
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
      {
        title: "Franklin EV Electric Scooters in Hyderabad | KORO, NIX-DLX, POWER+",
      },
      {
        name: "description",
        content:
          "Franklin EV offers KORO, NIX-DLX and POWER+ electric scooters for Hyderabad, Telangana and Andhra Pradesh riders. Compare ~100 km range, 60 km/h top speed, BLDC hub motor, cruise control, anti-theft alerts and warranty support.",
      },
      {
        name: "keywords",
        content:
          "electric scooter Hyderabad, buy EV scooter Telangana, Franklin EV KORO, Franklin EV POWER+, NIX-DLX scooter, removable battery electric scooter, low running cost scooter India, BLDC motor scooter, electric two-wheeler Telangana",
      },
      { name: "author", content: "Franklin EV India Pvt. Ltd." },
      { property: "og:site_name", content: "Franklin EV" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Franklin EV Electric Scooters | Hyderabad, Telangana & Andhra Pradesh",
      },
      {
        property: "og:description",
        content:
          "Discover Franklin EV KORO, NIX-DLX and POWER+ with ~100 km range, 60 km/h top speed, BLDC hub motor performance, cruise control, anti-theft alerts and dealer support.",
      },
      { property: "og:url", content: "https://www.franklinev.co.in" },
      { property: "og:image", content: "https://www.franklinev.co.in/assets/hero-powerplus.jpg" },
      {
        property: "og:image:alt",
        content: "Franklin EV POWER+ electric scooter launch image.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@franklinev" },
      { name: "twitter:image", content: "https://www.franklinev.co.in/assets/hero-powerplus.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "canonical", href: "https://www.franklinev.co.in/" },
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
      </head>
      <body>
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
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <FloatingDock />
    </QueryClientProvider>
  );
}

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setProgress(Math.min(window.scrollY / scrollable, 1));
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

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />;
}

function useSiteMotion(pathname: string) {
  useEffect(() => {
    const countElements = Array.from(document.querySelectorAll<HTMLElement>("[data-count-to]"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "120px 0px" },
    );

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.target instanceof HTMLElement === false) {
            return;
          }

          const target = Number(entry.target.dataset.countTo ?? 0);
          const decimals = Number(entry.target.dataset.countDecimals ?? 0);
          const duration = 700;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            entry.target.textContent = (target * eased).toLocaleString("en-IN", {
              maximumFractionDigits: decimals,
              minimumFractionDigits: decimals,
            });

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
          countObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "120px 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-animate]").forEach((element) => {
      revealObserver.observe(element);
    });
    countElements.forEach((element) => countObserver.observe(element));

    return () => {
      revealObserver.disconnect();
      countObserver.disconnect();
    };
  }, [pathname]);
}
