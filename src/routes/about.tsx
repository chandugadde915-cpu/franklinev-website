import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Leaf, VolumeX, Sparkles, MapPin } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Franklin EV | Electric Scooter Brand in Hyderabad, India" },
      {
        name: "description",
        content:
          "Learn about Franklin EV India Pvt. Ltd., an electric scooter company based in Hyderabad with POWER and Classic models, low running cost, BLDC hub motor technology and dealer support in Telangana and Andhra Pradesh.",
      },
      {
        name: "keywords",
        content:
          "about Franklin EV, Franklin EV India, electric scooter company Hyderabad, EV scooter brand Telangana, Franklin EV dealers",
      },
      { property: "og:title", content: "About Franklin EV — Cleaner, Quieter, Smarter Mobility" },
      {
        property: "og:description",
        content:
          "Read Franklin EV's mission, model story and electric scooter support network for Telangana and Andhra Pradesh riders.",
      },
      { property: "og:url", content: "https://franklinev-website.vercel.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://franklinev-website.vercel.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="about-hero-grid max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-20">
          <Reveal>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink max-w-3xl leading-[1.1]">
              Electric mobility, <span className="text-primary-gradient">built around you</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Franklin EV India Pvt. Ltd. makes electric scooter ownership easier for city riders
              with practical range, low running cost, connected features and local dealer support.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="about-hero-image">
              <img
                src="/assets/editorial/dual-riders-underpass.jpg"
                alt="Two Franklin EV riders on electric scooters in an urban underpass."
                width={1672}
                height={941}
                loading="eager"
                decoding="async"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="p-8 rounded-3xl bg-surface border border-border shadow-soft h-full">
            <h2 className="font-display text-3xl font-bold text-ink">Our mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Franklin EV makes electric scooters for everyday city travel — low energy cost, BLDC hub motor, standard home charging and dealer support across Hyderabad, Telangana and Andhra Pradesh.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="p-8 rounded-3xl bg-primary-gradient text-primary-foreground shadow-lift h-full">
            <h2 className="font-display text-3xl font-bold">Our vision</h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/90">
              More city commutes on electric two-wheelers — cleaner streets, quieter rides, practical ownership for every rider.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink text-center">
            Cleaner. Quieter. <span className="text-primary-gradient">Smarter.</span>
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              Icon: Leaf,
              title: "Cleaner",
              body: "Zero tailpipe emissions and low electricity cost help make every local ride cleaner and more affordable than petrol commuting.",
            },
            {
              Icon: VolumeX,
              title: "Quieter",
              body: "A BLDC hub motor keeps the ride smooth and quiet, reducing everyday commute noise in busy city streets.",
            },
            {
              Icon: Sparkles,
              title: "Smarter",
              body: "Cruise control support, anti-theft key alerts and connected ownership features help riders manage daily travel with more confidence.",
            },
          ].map((v) => (
            <StaggerItem key={v.title}>
              <div className="h-full p-7 rounded-3xl glass-card border border-border shadow-soft">
                <div className="w-12 h-12 rounded-2xl bg-primary-gradient grid place-items-center text-primary-foreground">
                  <v.Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="rounded-[2.5rem] bg-hero-gradient p-10 lg:p-14 border border-border">
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: (
                  <>
                    <Counter value={88} />%
                  </>
                ),
                label: "Lower energy cost vs. petrol*",
              },
              { num: "0", label: "Tailpipe emissions" },
              {
                num: (
                  <>
                    <Counter value={3} />/<Counter value={50000} />
                  </>
                ),
                label: "Years / km warranty",
              },
              {
                num: (
                  <>
                    <Counter value={20} />+
                  </>
                ),
                label: "Listed dealer locations",
              },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <div className="p-5">
                  <p className="font-display text-4xl lg:text-5xl font-bold text-primary-gradient">
                    {s.num}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <p className="mt-6 text-xs text-muted-foreground">
            *Illustrative, based on an estimated Rs. 24.50 per full charge compared with petrol
            running costs.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto px-5 lg:px-8 py-20">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink text-center">
            The Franklin EV journey
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <figure className="about-journey-visual">
            <picture>
              <source
                srcSet="/assets/editorial/blue-cafe-parking.jpg"
                type="image/jpeg"
              />
              <img
                src="/assets/products/power-blue-left.png"
                alt="Franklin EV POWER electric scooter in Ocean Blue — left side view."
                width={1330}
                height={1183}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </figure>
        </Reveal>
        <ol className="journey-timeline">
          {[
            {
              year: "2021",
              title: "Founded in Hyderabad",
              body: "Franklin EV India Pvt. Ltd. incorporated with a mission to make electric scooters practical for everyday city riders.",
            },
            {
              year: "2022",
              title: "First dealer network",
              body: "Established initial dealer presence across Hyderabad and Secunderabad, covering key areas including AS Rao Nagar and Boduppal.",
            },
            {
              year: "2023",
              title: "Franklin EV POWER launch",
              body: "Franklin EV POWER launched with cruise control, up to 80 km range (graphene battery) and smart connectivity as the flagship model for Hyderabad riders.",
            },
            {
              year: "2024-25",
              title: "Expanding across Telangana & AP",
              body: "Dealer network expanded to 20+ touchpoints covering Nalgonda, Karimnagar, Visakhapatnam, Srikakulam and districts across both states.",
            },
          ].map((step, i) => (
            <li
              key={step.year}
              className="journey-item"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className="journey-year">{step.year}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <div className="about-showroom-card p-10 lg:p-14 rounded-3xl bg-surface border border-border shadow-soft">
            <figure>
              <img
                src="/assets/products/power-green-left.png"
                alt="Franklin EV POWER electric scooter in Mint Green — left side view."
                width={1376}
                height={1143}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
              Why ride with Franklin EV
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              BLDC hub motor, standard home charging, smart safety features and a dealer network across Hyderabad and Telangana — Franklin EV is built for Indian city riders.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {[
                "Low running cost",
                "BLDC hub motor",
                "Standard charging",
                "Smart safety",
                "Dealer support",
              ].map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium inline-flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3" /> {c}
                </span>
              ))}
            </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHY RIDERS SWITCH */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why Riders Switch</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink mt-2">
              Why more riders are choosing <em>electric over petrol</em>.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Switch from petrol and cut your monthly commute cost significantly. Franklin EV makes the transition easy with home charging, low maintenance and dealer support.
            </p>
          </div>
        </Reveal>
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Lower charging costs",
              body: "Electricity costs roughly Rs. 0.08–0.12 per km vs Rs. 3–4/km for petrol, saving most Hyderabad riders Rs. 1,800–2,500 per month.",
            },
            {
              title: "Reduced maintenance",
              body: "No engine oil, coolant or spark plugs. Fewer moving parts means fewer workshop visits and fewer unexpected repair bills.",
            },
            {
              title: "No oil changes",
              body: "Electric motors need no oil changes. Remove Rs. 400–800 oil change costs every 3 months from your ownership equation.",
            },
            {
              title: "Convenient home charging",
              body: "Charge overnight with a standard 15 A socket. Wake up with a full charge and skip petrol station detours.",
            },
            {
              title: "Zero tailpipe emissions",
              body: "Zero emissions reduce your personal carbon footprint and support cleaner air across Hyderabad.",
            },
            {
              title: "Long-term savings",
              body: "Over 3 years, Franklin EV riders typically save over Rs. 82,000 compared with equivalent petrol scooter ownership costs.",
            },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <article className="h-full p-6 rounded-3xl bg-surface border border-border shadow-soft">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary mb-4">
                  <Check className="w-4 h-4" />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { src: "/assets/products/power-black-left.png", alt: "Franklin EV POWER in Midnight Black" },
              { src: "/assets/products/power-red-left.png", alt: "Franklin EV POWER in Flame Red" },
              { src: "/assets/products/classic-gold-left.png", alt: "Franklin EV Classic in Champagne Gold" },
            ].map((img) => (
              <figure key={img.src} className="rounded-2xl overflow-hidden border border-border bg-zinc-50">
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full object-contain p-3 drop-shadow-md" />
              </figure>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <Reveal>
          <div className="rounded-[2.5rem] bg-primary-gradient p-12 lg:p-20 text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground">
              Join the electric shift
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Compare the Franklin EV ride experience, charging support and model features in
              person.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-surface text-ink font-semibold shadow-lift hover:scale-[1.03] transition-transform"
            >
              Book a Test Ride <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
