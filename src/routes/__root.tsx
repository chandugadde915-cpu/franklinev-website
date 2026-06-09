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
        image: `${siteUrl}/assets/hero-powerplus.jpg`,
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
        title: "Franklin EV | Hyderabad's Smart Electric Scooter Brand",
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
        content: "Franklin EV - Hyderabad's Smart Electric Scooter Brand for Everyday Freedom",
      },
      {
        property: "og:description",
        content:
          "Experience smarter mobility with Franklin EV electric scooters built for Hyderabad riders, everyday freedom, home charging, lower running costs and intelligent features.",
      },
      { property: "og:url", content: "https://www.franklinev.co.in" },
      { property: "og:image", content: "https://www.franklinev.co.in/assets/hero-powerplus.jpg" },
      {
        property: "og:image:alt",
        content: "Franklin EV Power ++ electric scooter launch image.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
  const isHomePage = location.pathname === "/";

  useSiteMotion(location.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgressBar />
      <Navbar />
      <main className={isHomePage ? "pt-16 pb-0" : "pt-16 pb-24 md:pb-10"}>
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
      { threshold: 0.01, rootMargin: "360px 0px" },
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
      { threshold: 0.01, rootMargin: "280px 0px" },
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
