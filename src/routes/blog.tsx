
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  Gauge,
  Home,
  IndianRupee,
  Leaf,
  MapPin,
  PlugZap,
  Route as RouteIcon,
  ShieldCheck,
  Smartphone,
  Volume2,
  Wrench,
  Zap,
  Sparkles,
  TrendingUp,
  Bike,
  Car,
  LayoutDashboard,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

const siteUrl = "https://franklinev-website.vercel.app";
const blogUrl = `${siteUrl}/blog`;

const blogArticleMeta = [
  {
    slug: "power-plus-vs-rapid",
    title: "Franklin EV POWER vs Classic: choosing the right electric scooter",
    description:
      "Compare Franklin EV POWER and Classic by speed, battery, design and daily use to find the right variant for your commute.",
    keywords:
      "Franklin EV POWER vs Classic, electric scooter comparison Hyderabad, best Franklin EV model, electric scooter buying guide India",
    image: "/assets/products/power-black-left.png",
    category: "Buying Guide",
    readTime: "5 min read",
  },
  {
    slug: "best-electric-scooter-hyderabad-daily-commute",
    title: "Best electric scooter in Hyderabad for daily commute",
    description:
      "Read the 2026 Franklin EV buyer guide for Hyderabad riders covering range, charging, running cost, service support and city-road readiness.",
    keywords:
      "best electric scooter in Hyderabad, electric scooter daily commute Hyderabad, Franklin EV Hyderabad, electric scooter charging cost Hyderabad",
    image: "/assets/products/classic-gold-left.png",
    category: "Hyderabad Guide",
    readTime: "7 min read",
  },
  {
    slug: "home-charging-electric-scooter",
    title: "Home charging explained for first-time EV riders",
    description:
      "Learn electric scooter home charging basics, charging time, safe charging habits and key questions to ask before Franklin EV delivery.",
    keywords:
      "electric scooter home charging, EV scooter charging guide, Franklin EV charging, electric scooter charging time India",
    image: "/assets/products/power-blue-left.png",
    category: "Charging",
    readTime: "6 min read",
  },
] as const;

const blogArticleMetaTags = blogArticleMeta.flatMap((post, index) => {
  const position = index + 1;
  const postUrl = `${blogUrl}#${post.slug}`;

  return [
    { name: `blog:${position}:title`, content: post.title },
    { name: `blog:${position}:description`, content: post.description },
    { name: `blog:${position}:keywords`, content: post.keywords },
    { name: `blog:${position}:url`, content: postUrl },
    { name: `blog:${position}:category`, content: post.category },
    { name: `blog:${position}:read_time`, content: post.readTime },
  ];
});

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Franklin EV Blog",
  url: blogUrl,
  description:
    "Franklin EV guides for electric scooter buyers covering model comparison, Hyderabad commuting, home charging, running cost and ownership confidence.",
  publisher: {
    "@type": "Organization",
    name: "Franklin EV India Pvt. Ltd.",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/assets/franklin-ev-logo.png`,
    },
  },
  blogPost: blogArticleMeta.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${siteUrl}${post.image}`,
    url: `${blogUrl}#${post.slug}`,
    mainEntityOfPage: `${blogUrl}#${post.slug}`,
    author: {
      "@type": "Organization",
      name: "Franklin EV India Pvt. Ltd.",
    },
    publisher: {
      "@type": "Organization",
      name: "Franklin EV India Pvt. Ltd.",
    },
    articleSection: post.category,
    keywords: post.keywords,
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
  })),
};

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Franklin EV Blog | Electric Scooter Guides, Range & Ownership" },
      {
        name: "description",
        content:
          "Franklin EV guides for POWER and Classic buyers — range, battery types, home charging, running cost and test ride preparation for Hyderabad riders.",
      },
      {
        name: "keywords",
        content:
          "Franklin EV blog, electric scooter guide India, POWER scooter, Classic scooter, lithium-ion vs graphene battery, EV charging, scooter running cost Hyderabad",
      },
      { property: "og:title", content: "Franklin EV Blog - Smart Electric Scooter Guides" },
      {
        property: "og:description",
        content:
          "Practical Franklin EV articles for choosing, charging, maintaining and saving with electric scooters.",
      },
      { property: "og:url", content: blogUrl },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${siteUrl}/assets/hero-powerplus.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Franklin EV Blog - Electric Scooter Guides" },
      {
        name: "twitter:description",
        content:
          "Explore Franklin EV buying guides, Hyderabad commute tips, home charging advice and ownership cost explainers.",
      },
      { name: "twitter:image", content: `${siteUrl}/assets/hero-powerplus.jpg` },
      ...blogArticleMetaTags,
    ],
    links: [{ rel: "canonical", href: blogUrl }],
  }),
  component: BlogPage,
});

const featuredPosts = [
  {
    ...blogArticleMeta[0],
    summary: blogArticleMeta[0].description,
    Icon: Gauge,
  },
  {
    ...blogArticleMeta[1],
    summary: blogArticleMeta[1].description,
    Icon: RouteIcon,
  },
  {
    ...blogArticleMeta[2],
    summary: blogArticleMeta[2].description,
    Icon: PlugZap,
  },
] as const;

const commuteReasons = [
  {
    title: "Lower running costs",
    body: "Electric commuting can reduce monthly travel expense significantly compared with petrol scooters.",
    Icon: IndianRupee,
  },
  {
    title: "Convenient home charging",
    body: "Charge overnight from a standard household socket and avoid fuel station queues or fuel price surprises.",
    Icon: Home,
  },
  {
    title: "Minimal maintenance",
    body: "No engine oil, spark plugs or filter changes means simpler ownership and fewer service items.",
    Icon: Wrench,
  },
  {
    title: "Silent and smooth ride",
    body: "A quiet, vibration-free ride makes daily traffic easier for city riders.",
    Icon: Volume2,
  },
  {
    title: "Eco-friendly travel",
    body: "Zero tailpipe emissions support cleaner air across Hyderabad's growing urban zones.",
    Icon: Leaf,
  },
  {
    title: "Smart technology",
    body: "Connected features, ride analytics and intelligent protection systems improve daily confidence.",
    Icon: Smartphone,
  },
] as const;

const commuteFactors = [
  {
    title: "Battery range",
    body: "Choose a range that comfortably exceeds your daily travel distance to reduce range anxiety.",
    tags: ["20-30 km/day", "30-50 km/day", "50-80 km/day"],
  },
  {
    title: "Charging convenience",
    body: "A practical city EV should support easy home charging, low energy cost and simple daily routines.",
    tags: ["Overnight charging", "No fuel station dependency", "Low per-km cost"],
  },
  {
    title: "Service and warranty support",
    body: "Pick a brand with clear warranty coverage, genuine parts and reachable service support.",
    tags: ["Battery warranty", "Motor warranty", "Dealer support"],
  },
] as const;

const commuteFeatures = [
  "Certified real-world range",
  "Reliable battery technology",
  "Multiple ride modes",
  "Smart anti-theft protection",
  "Comfortable seating and suspension",
  "Digital or app-connected ownership",
] as const;

const hyderabadAreas = [
  "Hitech City",
  "Gachibowli",
  "Madhapur",
  "Financial District",
  "Kondapur",
  "Miyapur",
  "Kukatpally",
  "Kompally",
  "Uppal",
  "LB Nagar",
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
  "Dealer visit checklist before buying Franklin EV POWER or Classic",
] as const;

function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <Reveal className="blog-hero-copy">
            <div className="cinema-eyebrow">
              <BookOpenText className="h-4 w-4" />
              Franklin EV Blog
            </div>
            <h1 className="blog-hero-title">
              <div>Smart electric scooter</div>
              <div>guides for everyday riders.</div>
            </h1>
            <p>
              Practical articles for choosing Franklin EV POWER or Classic, understanding range,
              battery options, charging at home, reducing running cost and preparing for a confident
              Franklin EV test ride.
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
                alt="Franklin EV POWER electric scooter in Midnight Black — featured on the blog."
                width={1200}
                height={1200}
                loading="eager"
                decoding="async"
              />
            </picture>
          </Reveal>
        </div>
      </section>

      {/* Gradient bridge — smooth dark→light transition */}
      <div className="blog-hero-bridge" aria-hidden="true" />

      <section className="blog-section">
        <Reveal className="blog-section-heading">
          <div className="cinema-eyebrow">Featured Reads</div>
          <h2 className="blog-heading-one-line">Guides for Franklin EV buyers.</h2>
          <p>
            Quick, useful reading for riders comparing scooters, planning charging and calculating
            long-term value.
          </p>
        </Reveal>
        <StaggerGroup className="blog-card-grid">
          {featuredPosts.map(({ slug, title, summary, image, category, readTime, Icon }) => (
            <StaggerItem key={title}>
              <article className="blog-card" id={slug}>
                <figure>
                  <img src={image} alt="" loading="lazy" decoding="async" />
                </figure>
                <div className="blog-card-body">
                  <span className="blog-card-kicker">
                    <Icon className="h-4 w-4" /> {category} · {readTime}
                  </span>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <Link
                    to={
                      `/blog/${slug}` as
                        | "/blog/power-plus-vs-rapid"
                        | "/blog/best-electric-scooter-hyderabad-daily-commute"
                        | "/blog/home-charging-electric-scooter"
                    }
                    aria-label={`Read: ${title}`}
                  >
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="blog-article-section">
        <div className="blog-commute-switch-section">
          <Reveal>
            <div className="blog-commute-switch-header text-center">
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-5 py-2.5 rounded-full border border-primary/20">
                <MapPin className="w-4 h-4" /> Hyderabad Commuters
              </span>
              <h2 className="heading-section font-bold text-ink mt-6 leading-[1.1]">
                Why Hyderabad commuters are <br />
                <span className="text-primary">switching to electric</span>
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
                More riders across Hyderabad are making the switch to electric scooters. Here's why
                Franklin EV is becoming the preferred choice for urban commuting.
              </p>
              <div className="w-24 h-1 bg-primary/30 mx-auto mt-6 rounded-full" />
            </div>
          </Reveal>

          <StaggerGroup className="blog-commute-grid mt-12">
            {commuteReasons.map(({ title, body, Icon }) => (
              <StaggerItem key={title}>
                <article className="blog-commute-card blog-commute-switch-card">
                  <span className="blog-commute-switch-icon">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* <Reveal>
            <div className="blog-commute-switch-cta text-center mt-10">
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/5 border border-primary/20">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-base font-semibold text-muted-foreground">
                  Join <strong className="text-ink text-lg">thousands of Hyderabad commuters</strong> who have already switched to Franklin EV
                </span>
              </div>
            </div>
          </Reveal> */}
        </div>

        <div className="blog-factor-layout">
          <Reveal className="blog-factor-copy">
            <h2 className="blog-heading-one-line">What makes a good scooter for daily commute?</h2>
            <p>
              Focus on the details that affect everyday ownership instead of only comparing headline
              specifications.
            </p>
          </Reveal>

          <div className="blog-factor-marquee-wrapper">
            <div className="blog-factor-list-marquee">
              <div className="marquee-factor-track">
                {commuteFactors.map((factor, index) => (
                  <article key={factor.title} className="blog-factor-item marquee-factor-item">
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                    <div>
                      <h3>{factor.title}</h3>
                      <p>{factor.body}</p>
                      <div className="blog-factor-tags">
                        {factor.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}

                {commuteFactors.map((factor, index) => (
                  <article
                    key={factor.title + "-dup"}
                    className="blog-factor-item marquee-factor-item"
                  >
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                    <div>
                      <h3>{factor.title}</h3>
                      <p>{factor.body}</p>
                      <div className="blog-factor-tags">
                        {factor.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="blog-cost-panel">
          <Reveal className="blog-section-heading">
            <h2 className="blog-heading-one-line">Electric scooter vs petrol scooter.</h2>
            <p>
              Electric ownership keeps daily travel cost predictable and removes many engine-service
              expenses.
            </p>
          </Reveal>
          <div className="blog-cost-grid">
            <article className="blog-cost-card is-petrol">
              <span>Petrol Scooter</span>
              <h3>Traditional ownership</h3>
              <p>Monthly fuel expense can become a major recurring cost for long commutes.</p>
              <dl>
                <div>
                  <dt>Fuel expense</dt>
                  <dd>Rs. 4,000-8,000/mo</dd>
                </div>
                <div>
                  <dt>Engine servicing</dt>
                  <dd>Regular</dd>
                </div>
                <div>
                  <dt>Oil changes</dt>
                  <dd>Every few months</dd>
                </div>
              </dl>
            </article>
            <article className="blog-cost-card is-electric">
              <span>Electric Scooter</span>
              <h3>Smart EV ownership</h3>
              <p>Charging costs are a fraction of petrol, with simpler maintenance requirements.</p>
              <dl>
                <div>
                  <dt>Charging cost</dt>
                  <dd>Significantly lower</dd>
                </div>
                <div>
                  <dt>Engine servicing</dt>
                  <dd>Not required</dd>
                </div>
                <div>
                  <dt>Maintenance</dt>
                  <dd>Minimal</dd>
                </div>
              </dl>
            </article>
          </div>
          <div className="blog-savings-banner">
            <strong>Save thousands every year</strong>
            <p>
              Daily Hyderabad commuting becomes more affordable when fuel expense and engine
              servicing are removed from the routine.
            </p>
          </div>
        </div>

        <section className="blog-city-section-full">
          <div className="blog-city-panel">
            <Reveal className="blog-factor-copy">
              <div className="cinema-eyebrow">Hyderabad Coverage</div>
              <h2 className="blog-heading-one-line">Built for Hyderabad roads.</h2>
            </Reveal>
            <div className="blog-city-grid-wrapper">
              <div className="blog-city-grid">
                {hyderabadAreas.map((area) => (
                  <span key={area}>
                    <MapPin className="h-4 w-4" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="blog-feature-check">
          <Reveal className="blog-section-heading">
            <div className="cinema-eyebrow">What to Check</div>
            <h2 className="blog-heading-one-line">
              Features to look for before buying.
            </h2>
          </Reveal>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              position: "relative",
              gap: "20px",
              marginTop: "60px",
              flexWrap: "wrap",
              maxWidth: "1300px",
              marginInline: "auto",
            }}
          >
            <div
  className="hidden md:block"
  style={{
    position: "absolute",
    top: "35px",
    left: "5%",
    right: "5%",
    height: "4px",
    background:
      "linear-gradient(90deg, #00b4ff 0%, #00d084 100%)",
    borderRadius: "999px",
    zIndex: 0,
  }}
/>


            {[
              {
                icon: "⚡",
                title: "Certified Real-World Range",
              },
              {
                icon: "🔋",
                title: "Reliable Battery Technology",
              },
              {
                icon: "🛵",
                title: "Multiple Ride Modes",
              },
              {
                icon: "🛡️",
                title: "Smart Anti-Theft Protection",
              },
              {
                icon: <Bike className="h-6 w-6" />,
                title: "Comfortable Seating & Suspension",
              },
              {
                icon: "📱",
                title: "Digital or App-Connected Ownership",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  flex: 1,
                  minWidth: "180px",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    margin: "0 auto 18px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    border: "4px solid #22c55e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "30px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    color: "#0f172a",
                  }}
                >
                  {typeof item.icon === "string" ? item.icon : item.icon}
                </div>

                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#0f172a",
                    margin: 0,
                    lineHeight: "1.4",
                  }}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-section blog-guide-section">
        <Reveal className="blog-section-heading">
          <div className="cinema-eyebrow">Ownership Guides</div>
          <h2 className="blog-heading-one-line">Everything important before and after buying.</h2>
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
          <h2 className="blog-heading-one-line">More Franklin EV articles coming next.</h2>
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
