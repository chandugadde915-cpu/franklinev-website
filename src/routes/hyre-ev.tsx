import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CalendarClock,
  CheckCircle2,
  IndianRupee,
  Route as RouteIcon,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

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
              Hyre EV brings Franklin EV POWER and Classic scooters into a rental-first experience — for students, homemakers, delivery partners, office commuters and small businesses.
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

      {/* RENTAL PLANS */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 bg-hero-gradient rounded-[2rem] my-4">
        <Reveal className="text-center mb-10">
          <span className="cinema-eyebrow">Rental Plans</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
            Indicative pricing
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm">
            Pricing is indicative and subject to availability, deposit and location. Contact Hyre EV for a confirmed quote.
          </p>
        </Reveal>
        <StaggerGroup className="grid sm:grid-cols-3 gap-6">
          {[
            { plan: "Daily", price: "₹199–299", unit: "/ day", icon: CalendarClock, note: "Min. 1 day • subject to availability" },
            { plan: "Weekly", price: "₹999–1,499", unit: "/ week", icon: RouteIcon, note: "7-day rental • includes dealer support" },
            { plan: "Monthly", price: "₹2,999–4,499", unit: "/ month", icon: IndianRupee, note: "30-day plan • deposit required" },
          ].map(({ plan, price, unit, icon: Icon, note }) => (
            <StaggerItem key={plan}>
              <article className="p-7 rounded-3xl bg-surface border border-border shadow-soft text-center h-full">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-bold text-ink">{plan}</h3>
                <p className="mt-2 text-3xl font-bold text-primary">{price}<span className="text-base font-normal text-muted-foreground">{unit}</span></p>
                <p className="mt-3 text-xs text-muted-foreground">{note}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <p className="mt-6 text-center text-xs text-muted-foreground">All plans require a valid driving licence and refundable security deposit. Pricing may vary by scooter variant and location.</p>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <Reveal className="text-center mb-10">
          <span className="cinema-eyebrow">Rental Process</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">How Hyre EV works</h2>
        </Reveal>
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Submit enquiry", body: "Fill the form below or call Franklin EV with your rental dates, location and scooter preference." },
            { step: "2", title: "Get a quote", body: "Our team confirms availability, pricing and any deposit terms for your rental period." },
            { step: "3", title: "Visit the dealer", body: "Collect your scooter at the nearest Franklin EV dealer point after completing documentation." },
            { step: "4", title: "Ride & return", body: "Ride with Franklin EV dealer support. Return the scooter at the agreed location when your rental ends." },
          ].map(({ step, title, body }) => (
            <StaggerItem key={step}>
              <div className="p-6 rounded-3xl bg-surface border border-border shadow-soft h-full">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-gradient text-primary-foreground font-bold text-lg mb-4">{step}</span>
                <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* WHO IS IT FOR */}
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
              <span className="cinema-eyebrow">Rental eligibility</span>
              <h2>Who can rent a Hyre EV scooter</h2>
              {[
                "Valid driving licence (2-wheeler)",
                "Age 18+ with valid government ID proof",
                "Students on campus or daily commute",
                "Delivery partners and fleet operators",
                "Professionals and short-stay visitors in Hyderabad",
              ].map((item) => (
                <p key={item}>
                  <CheckCircle2 className="h-5 w-5" />
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FLEET / B2B */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <div className="p-10 lg:p-14 rounded-3xl bg-surface border border-border shadow-soft grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="cinema-eyebrow">Fleet & B2B</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-2">Need scooters for your team or business?</h2>
              <p className="mt-4 text-muted-foreground">
                Hyre EV supports campus hostels, delivery companies, small businesses and mobility partners needing multiple scooters. Contact us for fleet pricing, delivery coordination and service support.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {["Bulk rental pricing available", "Dedicated dealer support point", "Monthly billing option", "Fleet tracking assistance"].map((pt) => (
                  <li key={pt} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" />{pt}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </span>
              <p className="text-sm text-muted-foreground">Tell us your fleet size and rental period — our team will send a customised quote within 24 hours.</p>
              <Link to="/contact" className="cinema-btn cinema-btn-primary">
                Request Fleet Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* DEDICATED ENQUIRY FORM */}
      <section className="max-w-4xl mx-auto px-5 lg:px-8 py-16" id="enquiry">
        <Reveal className="text-center mb-10">
          <span className="cinema-eyebrow">Rental Enquiry</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">Book your Hyre EV scooter</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Fill in your details and we'll get back to you within 24 hours to confirm availability and pricing.</p>
        </Reveal>
        <Reveal>
          <HyreEnquiryForm />
        </Reveal>
      </section>
    </>
  );
}

function HyreEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "hyre-ev" }),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-10 rounded-3xl bg-surface border border-border shadow-soft text-center">
        <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-ink">Enquiry received!</h3>
        <p className="mt-2 text-muted-foreground">We'll contact you within 24 hours with availability and pricing details.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="p-8 lg:p-10 rounded-3xl bg-surface border border-border shadow-soft">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="hyre-name" className="block text-sm font-medium text-ink mb-1.5">Full name</label>
          <input id="hyre-name" name="full_name" required placeholder="Ravi Kumar" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-ink" />
        </div>
        <div>
          <label htmlFor="hyre-phone" className="block text-sm font-medium text-ink mb-1.5">Phone number</label>
          <input id="hyre-phone" name="phone" type="tel" required placeholder="9876543210" inputMode="numeric" pattern="[6-9][0-9]{9}" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-ink" />
        </div>
        <div>
          <label htmlFor="hyre-city" className="block text-sm font-medium text-ink mb-1.5">City / Area</label>
          <input id="hyre-city" name="city" required placeholder="Hyderabad, Secunderabad..." className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-ink" />
        </div>
        <div>
          <label htmlFor="hyre-plan" className="block text-sm font-medium text-ink mb-1.5">Rental plan</label>
          <select id="hyre-plan" name="rental_plan" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-ink">
            <option>Not sure yet</option>
            <option>Daily rental (1–6 days)</option>
            <option>Weekly rental (7 days)</option>
            <option>Monthly rental (30 days)</option>
            <option>Fleet / B2B enquiry</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="hyre-msg" className="block text-sm font-medium text-ink mb-1.5">Additional details</label>
          <textarea id="hyre-msg" name="message" rows={3} placeholder="Any specifics about scooter type, rental dates or pickup location..." className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-ink resize-none" />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-soft hover:shadow-lift hover:scale-[1.02] transition-all disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : <><Send className="h-4 w-4" /> Send Rental Enquiry</>}
      </button>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-500">Something went wrong. Please call +91 89770 40935 directly.</p>
      )}
      <p className="mt-4 text-xs text-muted-foreground">By submitting, you agree to be contacted by Franklin EV. See our <a href="/privacy" className="consent-link">Privacy Policy</a>.</p>
    </form>
  );
}
