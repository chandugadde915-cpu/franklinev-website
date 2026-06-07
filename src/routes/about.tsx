import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, VolumeX, Sparkles, MapPin } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Franklin EV | Electric Scooter Brand in Hyderabad, India" },
      {
        name: "description",
        content:
          "Learn about Franklin EV India Pvt. Ltd., an electric scooter company based in Hyderabad with KORO, NIX-DLX and POWER+ models, low running cost, BLDC hub motor technology and dealer support in Telangana and Andhra Pradesh.",
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
      { property: "og:url", content: "https://www.franklinev.co.in/about" },
    ],
    links: [{ rel: "canonical", href: "https://www.franklinev.co.in/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-20 text-center">
          <Reveal>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink max-w-3xl mx-auto leading-[1.1]">
              Electric mobility, <span className="text-primary-gradient">built around you</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Franklin EV India Pvt. Ltd. makes electric scooter ownership easier for city riders
              with practical range, low running cost, connected features and local dealer support.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="p-8 rounded-3xl bg-surface border border-border shadow-soft h-full">
            <h2 className="font-display text-3xl font-bold text-ink">Our mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We focus on electric scooters that fit everyday Indian city travel: low energy cost,
              quiet BLDC hub motor performance, standard plug-in charging, smart safety features and
              support from Franklin EV dealer locations.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="p-8 rounded-3xl bg-primary-gradient text-primary-foreground shadow-lift h-full">
            <h2 className="font-display text-3xl font-bold">Our vision</h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/90">
              A future where more city commutes move on electric two-wheelers — cleaner streets,
              quieter rides and practical ownership for families, students and working riders.
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
        <div className="mt-14 relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border" />
          {[
            {
              t: "Founded in India",
              b: "Built on a belief that electric mobility should be practical, affordable and easy to understand for everyday riders.",
            },
            {
              t: "A range takes shape",
              b: "KORO, NIX-DLX and POWER+ give riders clear choices across everyday commuting, premium styling and flagship road presence.",
            },
            {
              t: "Connected riding",
              b: "Connected ownership features support battery status, location information and anti-theft alerts on supported models.",
            },
            {
              t: "Growing network",
              b: "Dealer locations across Telangana and Andhra Pradesh help riders enquire, book test rides and access service guidance closer to home.",
            },
          ].map((step, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div
                className={`relative mb-10 lg:grid lg:grid-cols-2 lg:gap-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="pl-12 lg:pl-0 lg:pr-8 lg:text-right">
                  <div className="absolute left-2 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1 w-5 h-5 rounded-full bg-primary-gradient shadow-soft" />
                  <h3 className="font-display text-xl font-bold text-ink">{step.t}</h3>
                  <p className="mt-2 text-muted-foreground">{step.b}</p>
                </div>
                <div />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <div className="p-10 lg:p-14 rounded-3xl bg-surface border border-border shadow-soft">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
              Why ride with Franklin EV
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              Cost-effective ownership, BLDC hub motor performance, standard charging, smart safety
              features and listed dealer locations make Franklin EV easier to evaluate before you
              switch from petrol to electric.
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
