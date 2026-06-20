import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/blog/best-electric-scooter-hyderabad-daily-commute")({
  head: () => ({
    meta: [
      { title: "Best Electric Scooter in Hyderabad for Daily Commute 2026 | Franklin EV Guide" },
      {
        name: "description",
        content:
          "2026 buyer guide for Hyderabad riders switching to electric. Compare range, charging cost, running cost, service support and smart features before buying an electric scooter in Hyderabad.",
      },
      { name: "keywords", content: "best electric scooter in Hyderabad 2026, electric scooter daily commute Hyderabad, Franklin EV Hyderabad, electric scooter vs petrol Hyderabad, electric scooter charging cost Hyderabad" },
      { property: "og:title", content: "Best Electric Scooter in Hyderabad for Daily Commute — 2026 Guide" },
      { property: "og:url", content: "https://franklinev-website.vercel.app/blog/best-electric-scooter-hyderabad-daily-commute" },
    ],
    links: [{ rel: "canonical", href: "https://franklinev-website.vercel.app/blog/best-electric-scooter-hyderabad-daily-commute" }],
  }),
  component: ArticleHyderabadGuide,
});

const factors = [
  {
    title: "Range that covers your daily route",
    body: "Most Hyderabad daily commutes are 20–40 km round trip. Franklin EV's graphene battery variant offers up to 80 km range, meaning you can ride comfortably for 2 days before needing to charge. Choose lithium-ion if your route is under 25 km one-way.",
  },
  {
    title: "Charging at home without a petrol station",
    body: "Both Franklin EV POWER and Classic support standard home charging from a 15A socket. For most Hyderabad riders, a full overnight charge costs around Rs. 24–26 and takes 5–6 hours. No petrol station queues, no fuel price fluctuations.",
  },
  {
    title: "Speed variant for your route type",
    body: "Colony roads, colony-to-office routes and short hops suit the 25 km/h L-category variant (no licence required). Main Hyderabad roads — HITEC City, LB Nagar, Kompally — call for the 60 km/h high-speed variant with a valid 2-wheeler licence.",
  },
  {
    title: "Low running cost vs petrol",
    body: "At Rs. 110/litre petrol and a 42 km/litre mileage, a 32 km daily ride costs Rs. 84/day on petrol. With Franklin EV, the same distance costs roughly Rs. 7/day on electricity. That's a saving of Rs. 2,300+ per month for most Hyderabad riders.",
  },
  {
    title: "Dealer and service support near you",
    body: "Franklin EV has 20+ dealer touchpoints across Hyderabad, Telangana and Andhra Pradesh — including AS Rao Nagar, Boduppal, Kanajiguda, Malkajgiri and Manikonda. Service support is dealer-backed rather than requiring a manufacturer service centre.",
  },
  {
    title: "Smart features worth having",
    body: "Cruise control, anti-theft alerts and smart connectivity through the Franklin EV app make daily commuting easier. Remote diagnostics mean you know your battery status before you leave home rather than finding out mid-route.",
  },
];

function ArticleHyderabadGuide() {
  return (
    <article className="max-w-3xl mx-auto px-5 lg:px-8 py-16">
      <Reveal>
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8">
          <ChevronLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">Hyderabad Guide · 7 min read</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
          Best electric scooter in Hyderabad for daily commute — 2026 buyer guide
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Hyderabad is one of India's fastest-growing cities for electric two-wheelers. Rising petrol prices, expanding dealer networks and improving battery technology have made 2026 the most practical year yet to switch. This guide covers what Hyderabad riders specifically need to know before buying.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <figure className="my-10 rounded-2xl overflow-hidden border border-border">
          <img
            src="/assets/editorial/dual-riders-underpass.jpg"
            alt="Two Franklin EV riders on electric scooters in Hyderabad."
            className="w-full object-cover"
            style={{ maxHeight: 340 }}
            loading="eager"
          />
        </figure>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-4 mb-4">Why Hyderabad riders are switching to electric in 2026</h2>
        <p className="text-muted-foreground leading-relaxed">
          Three things have changed in the last two years. First, electricity costs in Telangana have stayed stable while petrol prices have risen to Rs. 110+ per litre. Second, dealer networks for local EV brands have expanded well beyond the traditional Hyderabad city limits. Third, battery warranty terms have improved — Franklin EV offers a 2+1 year warranty on lithium-ion battery variants, which removes the biggest ownership concern for first-time buyers.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The result: a Franklin EV scooter typically saves a Hyderabad rider Rs. 25,000–35,000 in the first year of ownership compared with a comparable petrol scooter, accounting for fuel, oil changes and reduced maintenance.
        </p>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-6">6 things to check before buying an electric scooter in Hyderabad</h2>
        <StaggerGroup className="space-y-5">
          {factors.map((f, i) => (
            <StaggerItem key={f.title}>
              <div className="p-6 rounded-2xl bg-surface border border-border">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-gradient text-primary-foreground font-bold text-sm shrink-0">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{f.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">Franklin EV vs a petrol scooter: the real numbers</h2>
        <div className="overflow-x-auto rounded-2xl border border-border mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left p-4 font-bold text-ink">Cost item</th>
                <th className="text-left p-4 font-bold text-ink">Petrol scooter</th>
                <th className="text-left p-4 font-bold text-primary">Franklin EV</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Daily fuel / charge (32 km)", "Rs. 84", "Rs. 7"],
                ["Monthly running cost", "Rs. 2,520", "Rs. 210"],
                ["Annual fuel / charge cost", "Rs. 30,240", "Rs. 2,520"],
                ["Oil change (every 3 months)", "Rs. 400–600", "Not required"],
                ["Annual maintenance estimate", "Rs. 3,000–5,000", "Rs. 800–1,500"],
                ["3-year total running cost", "Rs. 1,02,000+", "Rs. 12,000–15,000"],
              ].map(([item, petrol, ev]) => (
                <tr key={item} className="even:bg-surface/40">
                  <td className="p-4 font-medium text-ink">{item}</td>
                  <td className="p-4 text-muted-foreground">{petrol}</td>
                  <td className="p-4 text-primary font-semibold">{ev}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Estimates based on Rs. 110/litre petrol, 42 km/litre mileage, 32 km daily ride, Rs. 7/unit electricity tariff. Actual figures vary by riding pattern.</p>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">Which Franklin EV model suits Hyderabad riders?</h2>
        <div className="grid sm:grid-cols-2 gap-5 mt-4">
          <div className="p-6 rounded-2xl bg-surface border border-primary/30">
            <img src="/assets/products/power-black-left.png" alt="Franklin EV POWER" className="h-28 w-full object-contain mb-4" />
            <h3 className="font-display font-bold text-ink">Franklin EV POWER</h3>
            <p className="mt-1 text-xs text-primary font-bold">Starting from ₹59,999 ex-showroom</p>
            <ul className="mt-3 space-y-1.5">
              {["Sport design, 4 bold colours", "LED projector headlamps", "Cruise control standard", "25 or 60 km/h variant"].map((pt) => (
                <li key={pt} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3 w-3 text-primary shrink-0" /> {pt}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-surface border border-border">
            <img src="/assets/products/classic-gold-left.png" alt="Franklin EV Classic" className="h-28 w-full object-contain mb-4" />
            <h3 className="font-display font-bold text-ink">Franklin EV Classic</h3>
            <p className="mt-1 text-xs text-primary font-bold">Starting from ₹54,999 ex-showroom</p>
            <ul className="mt-3 space-y-1.5">
              {["Practical design, spacious storage", "3 versatile colour finishes", "Same BLDC motor", "25 or 60 km/h variant"].map((pt) => (
                <li key={pt} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3 w-3 text-primary shrink-0" /> {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">Franklin EV dealer locations in Hyderabad</h2>
        <p className="text-muted-foreground leading-relaxed">
          Franklin EV has dealer touchpoints across Hyderabad and Secunderabad — including AS Rao Nagar (MVR Motors), Kanajiguda (E-Drive), Boduppal, Chintal, Champapet, Malkajgiri, Hayath Nagar and Manikonda. You can visit any listed dealer to test ride the POWER or Classic before committing.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Call Franklin EV at +91 89770 40935 or use the contact form to confirm availability at your nearest location before visiting.
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-14 p-8 rounded-3xl bg-primary-gradient text-primary-foreground text-center">
          <h2 className="font-display text-2xl font-bold">Ready to test ride in Hyderabad?</h2>
          <p className="mt-3 text-primary-foreground/90 max-w-md mx-auto">
            Find your nearest Franklin EV dealer and book a test ride for the POWER or Classic in your preferred speed and battery configuration.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface text-ink font-semibold hover:scale-[1.03] transition-transform">
            Book a Test Ride <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
