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
  {
    title: "Fleet-ready mobility",
    body: "Electric scooter access for delivery teams, campuses, hostels and local businesses.",
    Icon: Building2,
  },
  {
    title: "Battery guidance",
    body: "Dealer-backed charging, battery handling and usage guidance for rental customers.",
    Icon: BatteryCharging,
  },
  {
    title: "Service support",
    body: "Franklin EV network support for inspection, maintenance and ownership questions.",
    Icon: ShieldCheck,
  },
];

function HyreEvPage() {
  return (
    <main className="overflow-hidden">
      {/* HERO - Dark background like your original */}
      <section className="flex flex-col md:flex-row items-center gap-8 px-5 py-10 md:py-16 bg-slate-900 text-white">
        <div className="w-full md:w-1/2">
          <img
            src="/assets/editorial/commute-city-ride.jpg"
            alt="Franklin EV scooter used for city commute rentals."
            width={1402}
            height={1122}
            loading="eager"
            decoding="async"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Reveal>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Scooter Rentals
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-2">
              Hyre EV <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Powered by Franklin EV
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
              Electric scooter rentals for practical city movement, campus travel, delivery routes
              and everyday Hyderabad commuting.
            </p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:from-green-600 hover:to-blue-600 transition shadow-lg"
              >
                Enquire for Rentals <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/vehicles"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition"
              >
                View Scooter Variants
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES - 1 col mobile, 4 col laptop */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <Reveal>
          <div className="text-center md:text-left md:flex md:items-end md:justify-between gap-8">
            <div>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Built for city use
              </span>
              <h2 className="font-display heading-section font-bold text-gray-900 mt-1">
                Rental mobility for modern urban needs
              </h2>
            </div>
            <p className="mt-3 md:mt-0 text-gray-600 max-w-xl text-base md:text-lg">
              Hyre EV brings Franklin EV POWER and Classic scooters into a rental-first experience —
              for students, homemakers, delivery partners, office commuters and small businesses.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rentalFeatures.map(({ title, body, Icon }) => (
            <Reveal key={title}>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition">
                <Icon className="h-6 w-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" />
                <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 mt-4">{title}</h3>
                <p className="mt-2 text-gray-600 text-sm md:text-base">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING - 1 col mobile, 3 col laptop */}
      <section className="max-w-7xl mx-auto px-5 py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] my-4">
        <Reveal className="text-center mb-10">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Rental Plans
          </span>
          <h2 className="font-display heading-section font-bold text-gray-900">
            Indicative pricing
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm md:text-base text-gray-600">
            Pricing is indicative and subject to availability, deposit and location. Contact Hyre EV
            for a confirmed quote.
          </p>
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              plan: "Daily",
              price: "₹199–299",
              unit: "/ day",
              icon: CalendarClock,
              note: "Min. 1 day • subject to availability",
            },
            {
              plan: "Weekly",
              price: "₹999–1,499",
              unit: "/ week",
              icon: RouteIcon,
              note: "7-day rental • includes dealer support",
            },
            {
              plan: "Monthly",
              price: "₹2,999–4,499",
              unit: "/ month",
              icon: IndianRupee,
              note: "30-day plan • deposit required",
            },
          ].map(({ plan, price, unit, icon: Icon, note }) => (
            <StaggerItem key={plan}>
              <div className="p-7 rounded-3xl bg-white border border-gray-200 shadow-sm text-center h-full">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-green-100 to-blue-100 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-4">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-bold text-gray-900">{plan}</h3>
                <p className="mt-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                  {price}
                  <span className="text-base font-normal text-gray-500">{unit}</span>
                </p>
                <p className="mt-3 text-sm md:text-base text-gray-500">{note}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <p className="mt-6 text-center text-sm md:text-base text-gray-500">
          All plans require a valid driving licence and refundable security deposit. Pricing may
          vary by scooter variant and location.
        </p>
      </section>

      {/* HOW IT WORKS - 1 col mobile, 4 col laptop */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <Reveal className="text-center mb-10">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Rental Process
          </span>
          <h2 className="font-display heading-section font-bold text-gray-900">
            How Hyre EV works
          </h2>
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Submit enquiry",
              body: "Fill the form below or call Franklin EV with your rental dates, location and scooter preference.",
            },
            {
              step: "2",
              title: "Get a quote",
              body: "Our team confirms availability, pricing and any deposit terms for your rental period.",
            },
            {
              step: "3",
              title: "Visit the dealer",
              body: "Collect your scooter at the nearest Franklin EV dealer point after completing documentation.",
            },
            {
              step: "4",
              title: "Ride & return",
              body: "Ride with Franklin EV dealer support. Return the scooter at the agreed location when your rental ends.",
            },
          ].map(({ step, title, body }) => (
            <StaggerItem key={step}>
              <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm h-full">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg mb-4">
                  {step}
                </span>
                <h3 className="font-display text-lg md:text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm md:text-base text-gray-600">{body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* WHO CAN RENT - stacks on mobile, side-by-side on laptop */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <Reveal className="w-full md:w-1/2">
            <img
              src="/assets/editorial/blue-school-family.jpg"
              alt="Franklin EV scooter near a school and family mobility setting."
              width={1402}
              height={1122}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </Reveal>
          <Reveal className="w-full md:w-1/2">
            <div>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Rental eligibility
              </span>
              <h2 className="font-display heading-section font-bold text-gray-900 mt-2">
                Who can rent a Hyre EV scooter
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Valid driving licence (2-wheeler)",
                  "Age 18+ with valid government ID proof",
                  "Students on campus or daily commute",
                  "Delivery partners and fleet operators",
                  "Professionals and short-stay visitors in Hyderabad",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                    <CheckCircle2 className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FLEET / B2B - stacks on mobile, side-by-side on laptop */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <Reveal>
          <div className="p-6 sm:p-10 lg:p-14 rounded-3xl bg-white border border-gray-200 shadow-sm grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Fleet & B2B
              </span>
              <h2 className="font-display heading-section font-bold text-gray-900 mt-2">
                Need scooters for your team or business?
              </h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg">
                Hyre EV supports campus hostels, delivery companies, small businesses and mobility
                partners needing multiple scooters. Contact us for fleet pricing, delivery
                coordination and service support.
              </p>
              <ul className="mt-5 space-y-2 text-sm md:text-base text-gray-600">
                {[
                  "Bulk rental pricing available",
                  "Dedicated dealer support point",
                  "Monthly billing option",
                  "Fleet tracking assistance",
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-r from-green-100 to-blue-100 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                <Users className="h-8 w-8" />
              </span>
              <p className="text-sm md:text-base text-gray-600">
                Tell us your fleet size and rental period — our team will send a customised quote
                within 24 hours.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:from-green-600 hover:to-blue-600 transition shadow"
              >
                Request Fleet Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ENQUIRY FORM */}
      <section className="max-w-4xl mx-auto px-5 py-16" id="enquiry">
        <Reveal className="text-center mb-10">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Rental Enquiry
          </span>
          <h2 className="font-display heading-section font-bold text-gray-900">
            Book your Hyre EV scooter
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-gray-600 text-sm md:text-base">
            Fill in your details and we'll get back to you within 24 hours to confirm availability
            and pricing.
          </p>
        </Reveal>
        <Reveal>
          <HyreEnquiryForm />
        </Reveal>
      </section>
    </main>
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
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm text-center">
        <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500" />
        <h3 className="font-display text-2xl font-bold text-gray-900">Enquiry received!</h3>
        <p className="mt-2 text-gray-600">
          We'll contact you within 24 hours with availability and pricing details.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="hyre-name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full name
          </label>
          <input
            id="hyre-name"
            name="full_name"
            required
            placeholder="Ravi Kumar"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="hyre-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone number
          </label>
          <input
            id="hyre-phone"
            name="phone"
            type="tel"
            required
            placeholder="9876543210"
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="hyre-city" className="block text-sm font-medium text-gray-700 mb-1.5">
            City / Area
          </label>
          <input
            id="hyre-city"
            name="city"
            required
            placeholder="Hyderabad, Secunderabad..."
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="hyre-plan" className="block text-sm font-medium text-gray-700 mb-1.5">
            Rental plan
          </label>
          <select
            id="hyre-plan"
            name="rental_plan"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
          >
            <option>Not sure yet</option>
            <option>Daily rental (1–6 days)</option>
            <option>Weekly rental (7 days)</option>
            <option>Monthly rental (30 days)</option>
            <option>Fleet / B2B enquiry</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="hyre-msg" className="block text-sm font-medium text-gray-700 mb-1.5">
            Additional details
          </label>
          <textarea
            id="hyre-msg"
            name="message"
            rows={3}
            placeholder="Any specifics about scooter type, rental dates or pickup location..."
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition resize-none"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:from-green-600 hover:to-blue-600 transition shadow disabled:opacity-60"
      >
        {status === "sending" ? (
          "Sending..."
        ) : (
          <>
            <Send className="h-4 w-4" /> Send Rental Enquiry
          </>
        )}
      </button>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">
          Something went wrong. Please call +91 89770 40935 directly.
        </p>
      )}
      <p className="mt-4 text-xs text-gray-500">
        By submitting, you agree to be contacted by Franklin EV. See our{" "}
        <a href="/privacy" className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}