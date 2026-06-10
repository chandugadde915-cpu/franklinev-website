import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryCharging,
  BookOpenText,
  Gauge,
  Leaf,
  MapPin,
  PlugZap,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Franklin EV Blog | Electric Scooter Guides, Range & Ownership" },
      {
        name: "description",
        content:
          "Read Franklin EV guides on Power ++, Rapid, electric scooter range, home charging, savings, maintenance and test ride preparation for Indian city riders.",
      },
      {
        name: "keywords",
        content:
          "Franklin EV blog, electric scooter guide India, Power ++ scooter, Rapid scooter, electric scooter range, EV charging, scooter maintenance",
      },
      { property: "og:title", content: "Franklin EV Blog - Smart Electric Scooter Guides" },
      {
        property: "og:description",
        content:
          "Practical Franklin EV articles for choosing, charging, maintaining and saving with electric scooters.",
      },
      { property: "og:url", content: "https://franklinev-website.vercel.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://franklinev-website.vercel.app/blog" }],
  }),
  component: BlogPage,
});

const featuredPosts = [
  {
    title: "Power ++ vs Rapid: choosing the right Franklin EV scooter",
    summary:
      "Compare range, riding feel, daily use cases and ownership priorities before booking a test ride.",
    image: "/assets/models/premium-colors-layout/power-blue-angle-layout.png",
    category: "Buying Guide",
    readTime: "5 min read",
    Icon: Gauge,
  },
  {
    title: "How to get the best range from your electric scooter",
    summary:
      "Simple riding, charging and tyre-care habits that help you protect real-world range every day.",
    image: "/assets/detail-hero1.jpg",
    category: "Range",
    readTime: "4 min read",
    Icon: BatteryCharging,
  },
  {
    title: "Home charging explained for first-time EV riders",
    summary:
      "A clear guide to plug-in charging, charging time, safe habits and what to ask before delivery.",
    image: "/assets/detail-battery.jpg",
    category: "Charging",
    readTime: "6 min read",
    Icon: PlugZap,
  },
] as const;

const guideBlocks = [
  {
    title: "Savings and running cost",
    body: "Understand monthly electricity cost, reduced service needs and why electric scooters can lower everyday commute expense.",
    Icon: Zap,
  },
  {
    title: "Maintenance basics",
    body: "Know the simple checks that matter most: brakes, tyres, battery care, charger condition and scheduled inspection.",
    Icon: Wrench,
  },
  {
    title: "Warranty and support",
    body: "Learn what to confirm about battery and motor coverage, service locations and dealer support before ownership.",
    Icon: ShieldCheck,
  },
  {
    title: "Cleaner daily mobility",
    body: "See how zero tailpipe emissions, quieter rides and lower energy use support cleaner city commuting.",
    Icon: Leaf,
  },
] as const;

const latestPosts = [
  "What to check during a Franklin EV test ride",
  "Why BLDC hub motors suit everyday city scooters",
  "Electric scooter charging cost vs petrol running cost",
  "Cruise control, reverse mode and smart scooter features explained",
  "How students, families and professionals can choose an EV scooter",
  "Dealer visit checklist before buying Power ++ or Rapid",
] as const;

function BlogPage() {
  return (
    <>
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <Reveal className="blog-hero-copy">
            <div className="cinema-eyebrow">
              <BookOpenText className="h-4 w-4" />
              Franklin EV Blog
            </div>
            <h1>
              Smart electric scooter guides for <em>everyday riders</em>.
            </h1>
            <p>
              Practical articles for choosing Power ++ or Rapid, understanding range, charging at
              home, reducing running cost and preparing for a confident Franklin EV test ride.
            </p>
            <div className="blog-hero-actions">
              <Link to="/vehicles" className="cinema-btn cinema-btn-primary">
                Compare Models <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="cinema-btn cinema-btn-ghost">
                Book a Test Ride
              </Link>
            </div>
          </Reveal>
          <Reveal className="blog-hero-media" delay={0.1}>
            <picture>
              <source
                srcSet="/assets/models/premium-colors-layout/power-silver-angle-layout.webp"
                type="image/webp"
              />
              <img
                src="/assets/models/premium-colors-layout/power-silver-angle-layout.png"
                alt="Franklin EV Power ++ electric scooter featured on the blog."
                width={1200}
                height={1200}
                loading="eager"
                decoding="async"
              />
            </picture>
          </Reveal>
        </div>
      </section>

      <section className="blog-section">
        <Reveal className="blog-section-heading">
          <div className="cinema-eyebrow">Featured Reads</div>
          <h2>Updated blog blocks for Franklin EV buyers.</h2>
          <p>
            Quick, useful reading for riders comparing scooters, planning charging and calculating
            long-term value.
          </p>
        </Reveal>
        <StaggerGroup className="blog-card-grid">
          {featuredPosts.map(({ title, summary, image, category, readTime, Icon }) => (
            <StaggerItem key={title}>
              <article className="blog-card">
                <figure>
                  <img src={image} alt="" loading="lazy" decoding="async" />
                </figure>
                <div className="blog-card-body">
                  <span className="blog-card-kicker">
                    <Icon className="h-4 w-4" /> {category} · {readTime}
                  </span>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <Link to="/contact" aria-label={`Ask Franklin EV about ${title}`}>
                    Ask an Expert <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="blog-section blog-guide-section">
        <Reveal className="blog-section-heading">
          <div className="cinema-eyebrow">Ownership Guides</div>
          <h2>Everything important before and after buying.</h2>
        </Reveal>
        <StaggerGroup className="blog-guide-grid">
          {guideBlocks.map(({ title, body, Icon }) => (
            <StaggerItem key={title}>
              <article className="blog-guide-card">
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

      <section className="blog-section blog-latest-section">
        <Reveal className="blog-latest-copy">
          <div className="cinema-eyebrow">Latest Topics</div>
          <h2>More Franklin EV articles coming next.</h2>
          <p>
            These updated article blocks keep the blog useful while full posts are prepared. Each
            topic points riders toward a test ride, model comparison or ownership question.
          </p>
          <Link to="/contact" className="cinema-btn cinema-btn-primary">
            Talk to Franklin EV <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="blog-topic-list">
          {latestPosts.map((topic) => (
            <div key={topic}>
              <MapPin className="h-4 w-4" />
              <span>{topic}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
