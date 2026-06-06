import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, VolumeX, Sparkles, MapPin } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Franklin EV | Electric Mobility Built in India" },
      {
        name: "description",
        content:
          "Franklin EV India builds premium electric scooters that are cleaner, quieter and smarter. Learn about our mission to make sustainable, low-cost electric mobility the everyday choice across India.",
      },
      { property: "og:title", content: "About Franklin EV — Cleaner, Quieter, Smarter Mobility" },
      { property: "og:description", content: "Our mission, values and the story behind India's smart electric scooter brand." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
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
              Franklin EV exists to make clean, quiet, intelligent transport the obvious
              everyday choice — affordable to own, effortless to ride, and kinder to the
              cities we live in.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="p-8 rounded-3xl bg-surface border border-border shadow-soft h-full">
            <h2 className="font-display text-3xl font-bold text-ink">Our mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We set out to solve a simple problem: getting around your city shouldn't
              cost a fortune, pollute the air, or feel like a chore. By engineering
              electric scooters that are genuinely affordable to run, dependable over
              the long haul and packed with thoughtful features, we make the switch to
              electric an easy, confident decision.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="p-8 rounded-3xl bg-primary-gradient text-primary-foreground shadow-lift h-full">
            <h2 className="font-display text-3xl font-bold">Our vision</h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/90">
              A future where the default way to move through an Indian city is electric —
              silent streets, cleaner air, and smarter, connected rides for everyone.
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
            { Icon: Leaf, title: "Cleaner", body: "Zero tailpipe emissions and dramatically lower running costs mean every ride is better for your wallet and the world around you." },
            { Icon: VolumeX, title: "Quieter", body: "A silent BLDC motor turns the daily commute into a calmer, more pleasant experience — for you and your neighbourhood." },
            { Icon: Sparkles, title: "Smarter", body: "Intelligent features like cruise control, anti-theft key alerts and app connectivity make ownership genuinely effortless." },
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
              { num: <><Counter value={88} />%</>, label: "Lower energy cost vs. petrol*" },
              { num: "0", label: "Tailpipe emissions" },
              { num: <><Counter value={3} />/<Counter value={50000} /></>, label: "Years / km warranty" },
              { num: <><Counter value={20} />+</>, label: "Service & dealer locations" },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <div className="p-5">
                  <p className="font-display text-4xl lg:text-5xl font-bold text-primary-gradient">{s.num}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <p className="mt-6 text-xs text-muted-foreground">*Illustrative, based on ~₹24.50 per full charge vs. petrol running costs.</p>
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
            { t: "Founded in India", b: "Built on a belief that electric mobility should be practical and affordable for everyday riders." },
            { t: "A range takes shape", b: "KORO, NIX-DLX and POWER+ arrive, each engineered around design, performance and durability." },
            { t: "Connected riding", b: "The Franklin EV app brings smart alerts and control to every owner's pocket." },
            { t: "Growing network", b: "Dealerships expand across Telangana and Andhra Pradesh, bringing test rides and service closer to riders." },
          ].map((step, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`relative mb-10 lg:grid lg:grid-cols-2 lg:gap-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">Why ride with Franklin EV</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              Cost-effective ownership, durable engineering, low maintenance, smart safety
              features and a dealer network that's close by — Franklin EV is built to make
              electric easy from the showroom to your daily ride.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {["Cost-effective", "Durable", "Low maintenance", "Smart safety", "Close-by network"].map((c) => (
                <span key={c} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium inline-flex items-center gap-1">
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
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground">Join the electric shift</h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Experience a cleaner, quieter, smarter ride for yourself.
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
