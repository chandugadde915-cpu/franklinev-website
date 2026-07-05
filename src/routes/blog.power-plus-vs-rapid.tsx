import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/blog/power-plus-vs-rapid")({
  head: () => ({
    meta: [
      { title: "Franklin EV POWER vs Classic — Which Electric Scooter is Right for You?" },
      {
        name: "description",
        content:
          "Compare Franklin EV POWER and Classic electric scooters by design, speed, battery, range, storage and daily use to find the right variant for your Hyderabad commute.",
      },
      {
        name: "keywords",
        content:
          "Franklin EV POWER vs Classic, best Franklin EV model, electric scooter comparison Hyderabad, Franklin EV buying guide 2026",
      },
      { property: "og:title", content: "Franklin EV POWER vs Classic — Full Comparison Guide" },
      {
        property: "og:description",
        content:
          "Side-by-side comparison of Franklin EV POWER and Classic: design, speed, battery options, range and who each model suits best.",
      },
      {
        property: "og:url",
        content: "https://franklinev-website.vercel.app/blog/power-plus-vs-rapid",
      },
    ],
    links: [
      { rel: "canonical", href: "https://franklinev-website.vercel.app/blog/power-plus-vs-rapid" },
    ],
  }),
  component: ArticlePowerVsClassic,
});

function ArticlePowerVsClassic() {
  return (
    <article className="max-w-3xl mx-auto px-5 lg:px-8 py-16">
      <Reveal>
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
          Buying Guide · 5 min read
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
          Franklin EV POWER vs Classic: which electric scooter is right for you?
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Franklin EV makes two distinct electric scooters for Hyderabad riders — the POWER and the
          Classic. Both share the same BLDC hub motor, home charging compatibility and low running
          cost. But they're built for different riders. Here's how to choose.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <figure className="my-10 rounded-2xl overflow-hidden border border-border">
          <img
            src="/assets/products/power-black-left.png"
            alt="Franklin EV POWER electric scooter in Midnight Black"
            className="w-full object-contain bg-zinc-900 p-8"
            loading="eager"
          />
        </figure>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-10 mb-4">
          The Franklin EV POWER
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The POWER is Franklin EV's flagship model. It has a sport-aggressive design with sharper
          body lines, LED projector headlamps and a raised tail section. If you want a scooter that
          gets noticed on Hyderabad roads, the POWER is the one.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          It's available in four bold colours — Midnight Black, Ocean Blue, Mint Green and Flame Red
          — giving you genuine colour choice at the showroom.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Sport-aggressive body design with sharp lines",
            "LED projector headlamps",
            "4 colour options: Black, Blue, Green, Red",
            "Cruise control built-in",
            "Lithium-ion or graphene battery option",
            "Up to 80 km range (graphene, low-speed variant)",
            "25 km/h (L-category) or 60 km/h (high-speed) variants",
          ].map((pt) => (
            <li key={pt} className="flex items-start gap-3 text-muted-foreground">
              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {pt}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <figure className="my-10 rounded-2xl overflow-hidden border border-border">
          <img
            src="/assets/products/classic-gold-left.png"
            alt="Franklin EV Classic electric scooter in Champagne Gold"
            className="w-full object-contain bg-zinc-50 p-8"
            loading="lazy"
          />
        </figure>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-10 mb-4">
          The Franklin EV Classic
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The Classic takes a different approach: clean, understated lines and a design built for
          practicality. It features a spacious under-seat storage compartment — practical for daily
          grocery runs, college bags or delivery use. The Classic is available in three versatile
          finishes.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          If you're buying for a family member, for a homemaker doing daily errands, or for a daily
          office commute where practicality matters more than style, the Classic delivers exactly
          what you need without compromise.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Clean, understated design with practical focus",
            "Spacious under-seat storage",
            "3 versatile colour finishes",
            "Same BLDC hub motor as the POWER",
            "Same lithium-ion or graphene battery options",
            "Up to 80 km range (graphene, low-speed variant)",
            "25 km/h or 60 km/h speed variants",
          ].map((pt) => (
            <li key={pt} className="flex items-start gap-3 text-muted-foreground">
              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {pt}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-6">
          Side-by-side comparison
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-4 font-bold text-ink">Feature</th>
                <th className="text-left p-4 font-bold text-primary">POWER</th>
                <th className="text-left p-4 font-bold text-ink">Classic</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Design", "Sport-aggressive", "Clean, practical"],
                ["Headlamps", "LED Projector", "Standard LED"],
                ["Colour options", "4 bold colours", "3 versatile finishes"],
                ["Under-seat storage", "Standard", "Spacious"],
                ["Cruise control", "Yes", "Yes"],
                ["Motor", "BLDC hub motor", "BLDC hub motor"],
                ["Battery options", "Lithium-ion / Graphene", "Lithium-ion / Graphene"],
                ["Max range", "Up to 80 km*", "Up to 80 km*"],
                ["Speed variants", "25 or 60 km/h", "25 or 60 km/h"],
                ["Starting price", "₹59,999 (ex-showroom)", "₹54,999 (ex-showroom)"],
              ].map(([feature, power, classic]) => (
                <tr key={feature} className="even:bg-surface/40">
                  <td className="p-4 font-medium text-ink">{feature}</td>
                  <td className="p-4 text-muted-foreground">{power}</td>
                  <td className="p-4 text-muted-foreground">{classic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          *Graphene battery, low-speed (25 km/h) variant, under standard test conditions. Real-world
          range depends on load, road and riding style.
        </p>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">
          Who should choose the POWER?
        </h2>
        <StaggerGroup className="grid sm:grid-cols-2 gap-4 mt-4">
          {[
            {
              title: "Style-conscious riders",
              body: "If you want a scooter that stands out in Hyderabad traffic, the POWER's sport lines and bold colour palette are built for you.",
            },
            {
              title: "Young professionals",
              body: "The POWER suits office commuters aged 22–40 who want a premium-looking ride without paying premium petrol costs.",
            },
            {
              title: "Riders who value brand presence",
              body: "The aggressive front with projector headlamps makes the POWER easily recognisable on the road.",
            },
            {
              title: "Four-colour choosers",
              body: "If colour matters to you and you want the most choice, the POWER gives you 4 options vs the Classic's 3.",
            },
          ].map((card) => (
            <StaggerItem key={card.title}>
              <div className="p-5 rounded-2xl bg-surface border border-border">
                <h3 className="font-display font-bold text-ink text-base">{card.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{card.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">
          Who should choose the Classic?
        </h2>
        <StaggerGroup className="grid sm:grid-cols-2 gap-4 mt-4">
          {[
            {
              title: "Families & homemakers",
              body: "The extra under-seat storage is a genuine daily-use advantage for grocery runs, school bags and home errands.",
            },
            {
              title: "First-time EV buyers",
              body: "The Classic's approachable design and lower starting price make it the natural choice for first-time electric scooter buyers.",
            },
            {
              title: "Daily commuters",
              body: "Clean, practical, reliable — the Classic is built for Hyderabad's 20–40 km daily commute routes without drama.",
            },
            {
              title: "Value-focused buyers",
              body: "Same motor, same battery options, similar range — at a lower entry price than the POWER.",
            },
          ].map((card) => (
            <StaggerItem key={card.title}>
              <div className="p-5 rounded-2xl bg-surface border border-border">
                <h3 className="font-display font-bold text-ink text-base">{card.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{card.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">
          Low-speed vs high-speed: which variant?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Both the POWER and Classic come in low-speed (25 km/h, L-category) and high-speed (60
          km/h) variants. The low-speed variant doesn't require a driving licence in most states,
          making it ideal for students and short-distance commuters. The high-speed variant needs a
          valid 2-wheeler licence and is better suited to main-road commutes across Hyderabad.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The low-speed graphene battery variant also offers the best range — up to 80 km — making
          it ideal if your daily round trip is under 40 km and you want to charge every 2 days.
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-14 p-8 rounded-3xl bg-primary-gradient text-primary-foreground text-center">
          <h2 className="font-display text-2xl font-bold">Still not sure which one to choose?</h2>
          <p className="mt-3 text-primary-foreground/90">
            Visit a Franklin EV dealer near you and test ride both models. Our team will help you
            pick the right speed variant and battery for your daily route.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface text-ink font-semibold hover:scale-[1.03] transition-transform"
          >
            Book a Test Ride <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
