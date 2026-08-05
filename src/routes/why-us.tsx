import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  Gauge,
  LockKeyhole,
  Smartphone,
  Sparkles,
  Wallet,
  Zap,
  TrendingUp,
  Clock,
  Coins,
  Route as RouteIcon,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

// --- Feature data ---
const features = [
  {
    Icon: Gauge,
    title: "Cruise Control",
    body: "Enjoy smoother journeys with one of the most sought-after features in a modern electric scooter with cruise control.",
  },
  {
    Icon: Smartphone,
    title: "Smart Connectivity",
    body: "Stay connected through intelligent vehicle monitoring, ride information, battery status and maintenance insights.",
  },
  {
    Icon: BatteryCharging,
    title: "Long Range Performance",
    body: "Travel confidently with a long range electric scooter in Hyderabad designed to support daily commuting needs.",
  },
  {
    Icon: Zap,
    title: "Home Charging Convenience",
    body: "Charge easily at home and eliminate unnecessary trips to fuel stations.",
  },
  {
    Icon: LockKeyhole,
    title: "Anti-Theft Security",
    body: "Advanced security features help provide greater peace of mind wherever you ride.",
  },
  {
    Icon: Wallet,
    title: "Low Ownership Cost",
    body: "Spend less on maintenance while enjoying a dependable and efficient mobility solution.",
  },
] as const;

// --- Rider stories ---
const riderStories = [
  {
    title: "Professionals",
    body: "Professionals appreciate the savings and the practical city commute experience for routes across Hyderabad.",
  },
  {
    title: "Students",
    body: "Students enjoy the convenience, easier charging routine and simple daily mobility.",
  },
  {
    title: "Families",
    body: "Families value reliable performance, low running cost and simple ownership support.",
  },
  {
    title: "Business Owners",
    body: "Business owners benefit from lower operating costs and fewer maintenance interruptions every month.",
  },
] as const;

// --- RideControl component ---
function RideControl({
  id,
  name,
  label,
  value,
  ariaLabel,
  ariaValueText,
  min,
  max,
  current,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  ariaLabel: string;
  ariaValueText: string;
  min: number;
  max: number;
  current: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="flex flex-col gap-1 w-full">
      <div className="flex justify-between text-sm font-medium text-gray-700">
        <span>{label}</span>
        <strong className="text-gray-900">{value}</strong>
      </div>
      <input
        id={id}
        name={name}
        type="range"
        aria-label={ariaLabel}
        aria-valuenow={current}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuetext={ariaValueText}
        min={min}
        max={max}
        value={current}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-teal-500"
      />
    </label>
  );
}

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      {
        title: "Why Franklin EV – Smart Electric Scooters for Everyday Freedom",
      },
      {
        name: "description",
        content:
          "Discover why Franklin EV is the smart choice for city commuting – advanced features, low running costs, and rider-focused engineering.",
      },
      { property: "og:title", content: "Why Franklin EV – Smart Electric Scooters" },
      {
        property: "og:description",
        content:
          "Discover why Franklin EV is the smart choice for city commuting – advanced features, low running costs, and rider-focused engineering.",
      },
      { property: "og:url", content: "https://www.franklinev.co.in/why-us" },
    ],
    links: [{ rel: "canonical", href: "https://www.franklinev.co.in/why-us" }],
  }),
  component: WhyUs,
});

function WhyUs() {
  // --- Cost comparison state ---
  const [dailyRide, setDailyRide] = useState(32);
  const [petrolPrice, setPetrolPrice] = useState(110);
  const [range, setRange] = useState(80);

  const monthlyEvCost = Math.round(dailyRide * 30 * 0.22);
  const monthlyFuelCost = Math.round(((dailyRide * 30) / 42) * petrolPrice);
  const monthlySavings = Math.max(0, monthlyFuelCost - monthlyEvCost);
  const threeYearSavings = monthlySavings * 36;

  // Brand gradient (blue → teal → lime)
  const brandGradient = "linear-gradient(135deg, #0ea5e9 0%, #14b8a6 50%, #84cc16 100%)";
  const brandGradientStyle = {
    background: brandGradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  } as CSSProperties;

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ── SECTION 1: ENGINEERED AROUND REAL RIDERS ── */}
      <section className="py-16 px-5 lg:px-8 max-w-7xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Engineered around{" "}
            <span style={brandGradientStyle}>real riders</span>.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every Franklin EV scooter is designed around practical features that improve everyday
            riding for professionals, students, families and business owners across Hyderabad.
          </p>
        </Reveal>

        {/* ── MARQUEE: LARGER FEATURE CARDS ── */}
        <div className="relative overflow-hidden">
          <div className="marquee-track flex gap-10 animate-scroll">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-10 flex-shrink-0">
                {features.map(({ Icon, title, body }) => (
                  <div
                    key={`${setIndex}-${title}`}
                    className="w-96 p-10 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
                      <Icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
                    <p className="mt-3 text-base text-gray-600 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: SAVE MORE WITH EVERY RIDE ── */}
      <section className="py-20 px-5 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-teal-100/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-teal-100/20 to-lime-100/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column – content + savings cards (3 cards, same size) */}
          <Reveal>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full mb-4">
              Cost Comparison
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Save more with{" "}
              <span style={brandGradientStyle}>every ride</span>.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-lg">
              Save more on every ride with Franklin EV. Adjust your daily distance and fuel cost to see your estimated monthly savings.
            </p>

            {/* Savings cards – three cards, all same size */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
              {[
                { label: "Monthly Savings", value: `₹${monthlySavings}`, icon: TrendingUp },
                { label: "Range per Charge", value: `${range} km`, icon: RouteIcon },
                { 
                  label: "3‑Year Savings", 
                  value: `₹${threeYearSavings.toLocaleString("en-IN")}`,
                  icon: Coins,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <stat.icon className="w-5 h-5 text-teal-500 mx-auto mb-1.5" />
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right column – glass calculator only */}
          <Reveal delay={0.1}>
            <div className="bg-white/60 backdrop-blur-xl border border-white/70 shadow-2xl rounded-3xl p-6 lg:p-8">
              {/* Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-700">
                    <span>Petrol</span>
                    <strong>Rs. {monthlyFuelCost.toLocaleString("en-IN")}/mo</strong>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: "92%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-700">
                    <span>Franklin EV</span>
                    <strong>Rs. {monthlyEvCost.toLocaleString("en-IN")}/mo</strong>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
                      style={{ width: "28%" }}
                    />
                  </div>
                </div>
              </div>

              {/* Range selector */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(range / 80) * 264} 264`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <strong className="text-2xl font-bold text-gray-900">{range}</strong>
                    <span className="text-xs text-gray-500">km range</span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 space-y-4">
                <RideControl
                  id="daily-km"
                  name="daily_km"
                  label="Daily ride distance"
                  value={`${dailyRide} km`}
                  ariaLabel="Daily ride distance in kilometres"
                  ariaValueText={`${dailyRide} km per day`}
                  min={8}
                  max={90}
                  current={dailyRide}
                  onChange={setDailyRide}
                />
                <RideControl
                  id="petrol-price"
                  name="petrol_price"
                  label="Petrol price"
                  value={`Rs. ${petrolPrice}/L`}
                  ariaLabel="Petrol price per litre in rupees"
                  ariaValueText={`Rs. ${petrolPrice} per litre`}
                  min={85}
                  max={140}
                  current={petrolPrice}
                  onChange={setPetrolPrice}
                />
                <div className="flex gap-2">
                  {[
                    ["Eco", 80],
                    ["City", 70],
                    ["Sport", 55],
                  ].map(([label, value]) => (
                    <button
                      key={label}
                      type="button"
                      className={`flex-1 py-2 text-sm font-medium rounded-full border transition-colors ${
                        range === value
                          ? "bg-teal-600 text-white border-teal-600"
                          : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                      }`}
                      onClick={() => setRange(Number(value))}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-center text-gray-600 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200/60">
                <div>
                  <span>Charge every</span>
                  <strong className="block text-sm font-bold text-gray-900">
                    {Math.max(0.8, range / dailyRide).toFixed(1)} days
                  </strong>
                </div>
                <div>
                  <span>Monthly EV cost</span>
                  <strong className="block text-sm font-bold text-gray-900">
                    Rs. {monthlyEvCost.toLocaleString("en-IN")}
                  </strong>
                </div>
                <div>
                  <span>Monthly savings</span>
                  <strong className="block text-sm font-bold text-teal-600">
                    Rs. {monthlySavings.toLocaleString("en-IN")}
                  </strong>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 3: HYDERABAD'S ELECTRIC FUTURE ── */}
      <section className="py-16 px-5 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full">
            India Electric Future
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Proudly powering{" "}
            <span style={brandGradientStyle}>India's electric future</span>.
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {riderStories.map((story) => (
            <StaggerItem key={story.title}>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full text-center">
                <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{story.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{story.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* ── CTA SECTION – NO BACKGROUND ── */}
      <section className="py-16 px-5 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="rounded-3xl p-12 border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">Ready to make the switch?</h2>
          <p className="mt-3 text-lg text-gray-600">
            Experience the future of commuting – book a test ride today.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ background: brandGradient }}
          >
            Book a Test Ride <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── CUSTOM STYLES FOR THE MARQUEE ── */}
      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}