import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CalendarClock,
  CheckCircle2,
  Route as RouteIcon,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/hyre-ev")({
  head: () => ({
    meta: [
      { title: "Hyre EV Powered by Franklin EV | Electric Scooter Rentals Hyderabad" },
      {
        name: "description",
        content:
          "Hyre EV Powered by Franklin EV offers practical electric scooter rental support for students, professionals, delivery riders and urban mobility partners in Hyderabad.",
      },
      { property: "og:title", content: "Hyre EV Powered by Franklin EV" },
      {
        property: "og:description",
        content:
          "A Franklin EV rental mobility page for electric scooter rentals, fleet enquiries and city commute support.",
      },
      { property: "og:url", content: "https://franklinev-website.vercel.app/hyre-ev" },
    ],
    links: [{ rel: "canonical", href: "https://franklinev-website.vercel.app/hyre-ev" }],
  }),
  component: HyreEvPage,
});

const rentalFeatures = [
  {
    title: "Daily city users",
    body: "Flexible rental support for students, professionals and short-distance commuters.",
    Icon: RouteIcon,
  },
  { title: "Fleet-ready mobility", body: "Electric scooter access for delivery teams, campuses, hostels and local businesses.", Icon: Building2 },
  { title: "Battery guidance", body: "Dealer-backed charging, battery handling and usage guidance for rental customers.", Icon: BatteryCharging },
  { title: "Service support", body: "Franklin EV network support for inspection, maintenance and ownership questions.", Icon: ShieldCheck },
];

function HyreEvPage() {
  return (
    <>
      <section className="rental-hero">
        <div className="rental-hero-media">
          <img
            src="/assets/editorial/commute-city-ride.jpg"
            alt="Franklin EV scooter used for city commute rentals."
            width={1402}
            height={1122}
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="rental-hero-copy">
          <Reveal>
            <span className="cinema-eyebrow">Scooter Rentals</span>
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-ink">
              Hyre EV <span>Powered by Franklin EV</span>
            </h1>
            <p>
              Electric scooter rentals for practical city movement, campus travel, delivery routes
              and everyday Hyderabad commuting.
            </p>
            <div className="rental-actions">
              <Link to="/contact" className="cinema-btn cinema-btn-primary">
                Enquire for Rentals <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/vehicles" className="cinema-btn cinema-btn-ghost">
                View Scooter Variants
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <div className="rental-intro">
            <div>
              <span className="cinema-eyebrow">Built for city use</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
                Rental mobility for modern urban needs
              </h2>
            </div>
            <p>
              Hyre EV brings Franklin EV scooters into a rental-first experience for customers who
              want electric mobility without immediate ownership. It is suitable for college users,
              homemakers, delivery partners, office commuters and businesses planning small EV
              fleets.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {rentalFeatures.map(({ title, body, Icon }) => (
            <Reveal key={title}>
              <article className="feature-icon-panel">
                <Icon className="h-6 w-6" />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rental-band">
        <div className="rental-band-inner">
          <Reveal>
            <img
              src="/assets/editorial/blue-school-family.jpg"
              alt="Franklin EV scooter near a school and family mobility setting."
              width={1402}
              height={1122}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal>
            <div className="rental-checklist">
              <span className="cinema-eyebrow">Rental enquiries</span>
              <h2>What customers can ask for</h2>
              {[
                "Short-term and long-term scooter rental requirements",
                "Student, employee, delivery and fleet mobility plans",
                "Low-speed and high-speed scooter availability",
                "Lithium-ion and graphene battery package guidance",
                "Pickup, service and dealer support information",
              ].map((item) => (
                <p key={item}>
                  <CheckCircle2 className="h-5 w-5" />
                  {item}
                </p>
              ))}
              <Link to="/contact" className="cinema-btn cinema-btn-primary">
                Contact Hyre EV <CalendarClock className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
