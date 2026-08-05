
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronLeft, AlertCircle } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/blog/home-charging-electric-scooter")({
  head: () => ({
    meta: [
      {
        title: "Home Charging for Electric Scooters — Complete Guide for First-Time EV Riders",
      },
      {
        name: "description",
        content:
          "Everything first-time EV riders need to know about charging a Franklin EV electric scooter at home — socket type, charge time, cost, safety and battery care tips.",
      },
      {
        name: "keywords",
        content:
          "electric scooter home charging India, how to charge electric scooter at home, Franklin EV charging guide, EV charging cost Hyderabad, graphene battery charging time",
      },
      {
        property: "og:title",
        content: "Home Charging for Electric Scooters — First-Time Rider Guide",
      },
      {
        property: "og:url",
        content: "https://www.franklinev.co.in/blog/home-charging-electric-scooter",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.franklinev.co.in/blog/home-charging-electric-scooter",
      },
    ],
  }),
  component: ArticleHomeCharging,
});

function ArticleHomeCharging() {
  return (
    <article className="max-w-3xl mx-auto px-5 lg:px-8 py-16">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* Force override for battery cards */
          .battery-charging-card.battery-charging-card {
            background: #F5F7FA !important;
            padding: 24px !important;
            border-radius: 16px !important;
            border: 1px solid rgba(0, 0, 0, 0.06) !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
            transition: all 0.3s ease !important;
          }
          .battery-charging-card.battery-charging-card:hover {
            background: #EEF2F7 !important;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08) !important;
            transform: translateY(-2px) !important;
          }
          .battery-charging-card-lithium.battery-charging-card-lithium {
            border-left: 4px solid #00B4FF !important;
          }
          .battery-charging-card-graphene.battery-charging-card-graphene {
            border-left: 4px solid #00D4FF !important;
          }
          .battery-charging-title {
            font-size: 12px !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.05em !important;
            color: #00B4FF !important;
            margin-bottom: 8px !important;
          }
          .battery-charging-time {
            font-size: 30px !important;
            font-weight: 700 !important;
            color: #0A0F1A !important;
            margin-bottom: 4px !important;
          }
          .battery-charging-pct {
            font-size: 14px !important;
            color: #6B7280 !important;
            margin-top: 4px !important;
          }
          .battery-charging-note {
            font-size: 12px !important;
            color: #6B7280 !important;
            margin-top: 8px !important;
            font-style: italic !important;
          }
          /* White text for warranty items */
          .warranty-text-white {
            color: #FFFFFF !important;
            font-size: 16px !important;
            font-weight: 500 !important;
            line-height: 1.6 !important;
          }
          .warranty-text-white strong {
            color: #FFFFFF !important;
            font-weight: 600 !important;
          }
        `,
        }}
      />

      <Reveal>
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
          Ownership Guide · 6 min read
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
          Home charging explained for first-time electric scooter riders
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          One of the biggest concerns for first-time EV buyers is charging. Where does it charge?
          How long does it take? What does it cost? Will it damage my home wiring? This guide
          answers every home charging question for Franklin EV POWER and Classic owners.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <figure className="my-10 rounded-2xl overflow-hidden border border-border bg-zinc-50 p-6">
          <img
            src="/assets/client/fev-lithium-ion-battery.png"
            alt="Franklin EV lithium-ion battery pack"
            className="w-full object-contain max-h-52"
            loading="eager"
          />
        </figure>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-4 mb-4">
          What socket do I need to charge a Franklin EV?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Franklin EV scooters charge from a standard 15A domestic socket — the same socket you use
          for your AC, washing machine or water heater. You don't need a dedicated EV charging
          point, a special installation or a wall box. If your home has a standard 15A socket near
          your parking area, you're ready to charge.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The charger is included with your scooter at delivery. Plug the charger into the socket,
          connect the charging connector to the scooter's charge port, and the charging indicator
          will confirm the session has started.
        </p>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">
          How long does it take to charge?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {[
            {
              battery: "Lithium-ion battery",
              time: "4–5 hours",
              pct: "0% → 100%",
              note: "Suits overnight charging",
              type: "lithium",
              warranty: [
                "2+1 year battery warranty",
                "12 months motor warranty",
                "12 months charger warranty",
                "12 months controller warranty",
              ],
            },
            {
              battery: "Graphene battery",
              time: "5–6 hours",
              pct: "0% → 100%",
              note: "Charge at low load tariff hours",
              type: "graphene",
              warranty: [
                "12 months battery warranty",
                "12 months motor warranty",
                "6 months charger warranty",
                "12 months controller warranty",
              ],
            },
          ].map((b) => (
            <div
              key={b.battery}
              className={`battery-charging-card ${
                b.type === "lithium"
                  ? "battery-charging-card-lithium"
                  : "battery-charging-card-graphene"
              }`}
            >
              <p className="battery-charging-title">{b.battery}</p>
              <p className="battery-charging-time">{b.time}</p>
              <p className="battery-charging-pct">{b.pct}</p>
              <p className="battery-charging-note">{b.note}</p>
              {/* Warranty items with white text */}
              <div className="mt-4 pt-3 border-t border-gray-200/50">
                {b.warranty.map((item, index) => (
                  <p key={index} className="warranty-text-white">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Most riders charge overnight — plug in after dinner, wake up to a full battery. For a 32
          km daily commute with the graphene battery, you'll typically need to charge every other
          day.
        </p>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">
          How much does charging cost?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Charging cost depends on your local electricity tariff. In Hyderabad / Telangana, the
          domestic tariff for moderate consumption is approximately Rs. 6–8 per unit (kWh). A full
          charge on the lithium-ion battery typically uses 2.5–3 kWh, costing approximately Rs.
          18–24. The graphene battery uses slightly more, costing Rs. 22–30 per full charge.
        </p>
        <div className="mt-6 p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <p className="text-sm font-bold text-ink mb-3">Estimated charging cost breakdown</p>
          <div className="space-y-2 text-sm">
            {[
              ["Lithium-ion — full charge", "~Rs. 18–24"],
              ["Graphene — full charge", "~Rs. 22–30"],
              ["Daily cost (32 km commute)", "~Rs. 6–10"],
              ["Monthly cost (32 km/day)", "~Rs. 180–300"],
            ].map(([label, cost]) => (
              <div
                key={label}
                className="flex justify-between items-center py-2 border-b border-border last:border-0"
              >
                <span className="text-muted-foreground">{label}</span>
                <span className="font-bold text-primary">{cost}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Based on Rs. 7/unit TSSPDCL domestic tariff. Your actual cost depends on your slab and
            consumption pattern.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">
          Is it safe to charge at home overnight?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Yes, with the charger provided by Franklin EV and a standard earthed socket in good
          condition. Franklin EV chargers include overcharge protection — the charger automatically
          stops delivering power when the battery reaches full capacity. This is standard for modern
          lithium-ion and graphene battery management systems.
        </p>
        <div className="mt-6 p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 flex gap-3">
          <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Always use the original charger supplied with your scooter. Do not use third-party
            chargers not approved by Franklin EV. Ensure your socket is earthed and in good
            condition. If you notice any unusual heat, smell or sound during charging, stop and
            contact your dealer.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">
          Battery care tips for longer life
        </h2>
        <StaggerGroup className="space-y-3 mt-4">
          {[
            {
              tip: "Don't run to 0% regularly",
              detail:
                "Try to charge when your battery reaches 15–20% rather than fully draining it. Deep discharges accelerate battery aging over time.",
            },
            {
              tip: "Avoid leaving at 100% for extended periods",
              detail:
                "If you're not riding for a few days, storing the battery at 40–80% charge is better for long-term health than leaving it fully charged.",
            },
            {
              tip: "Charge in a cool, ventilated area",
              detail:
                "Heat accelerates battery degradation. Park and charge in a shaded or indoor area rather than in direct Hyderabad afternoon sun.",
            },
            {
              tip: "Use the supplied charger only",
              detail:
                "Third-party chargers that don't match the voltage and current specifications can damage the battery management system.",
            },
            {
              tip: "Charge after a cool-down period",
              detail:
                "After a long ride on a hot day, wait 15–20 minutes before charging to let the battery temperature stabilise.",
            },
          ].map((item) => (
            <StaggerItem key={item.tip}>
              <div className="p-5 rounded-2xl bg-surface border border-border flex gap-4 items-start">
                <Check className="h-4 w-4 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-ink text-sm">{item.tip}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">
          Lithium-ion vs graphene: which charges better?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Both battery options support home charging from a 15A socket. The practical difference is
          in range and warranty. The lithium-ion battery comes with a 2+1 year warranty and charges
          in roughly 4–5 hours. The graphene battery offers up to 80 km range (vs 55 km for
          lithium-ion) but has a 12-month warranty and takes slightly longer to charge.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          For most Hyderabad daily commuters with a 25–35 km round trip, the lithium-ion battery is
          the practical choice — longer warranty, similar real-world range for the route length, and
          a lower purchase price. Choose graphene if your round trip regularly exceeds 40 km or if
          you want the maximum range buffer.
        </p>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">
          Do I need to do anything to prepare my home for charging?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          For most homes, no. If you have a 15A earthed socket near your parking area — whether in a
          flat, independent house or gated community — you're ready to charge the day your scooter
          is delivered.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          If your nearest socket is 5+ metres away, a licensed electrician can install a new 15A
          socket near your parking space at a typical cost of Rs. 800–1,500 including wiring.
          Franklin EV dealers can advise you on this before purchase.
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-14 p-8 rounded-3xl bg-primary-gradient text-primary-foreground text-center">
          <h2 className="font-display text-2xl font-bold">Have more charging questions?</h2>
          <p className="mt-3 text-primary-foreground/90 max-w-md mx-auto">
            Franklin EV dealers can walk you through the charging setup, socket requirements and
            battery care guide specific to your home and daily route before you buy.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface text-ink font-semibold hover:scale-[1.03] transition-transform"
          >
            Ask Franklin EV <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
