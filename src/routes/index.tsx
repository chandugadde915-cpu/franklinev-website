import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Wallet,
  ShieldCheck,
  Wrench,
  Sparkles,
  Gauge,
  Cpu,
  Smartphone,
  MapPin,
} from "lucide-react";
import { FloatingObjects } from "@/components/FloatingObjects";
import { Counter } from "@/components/Counter";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { ModelCard } from "@/components/ModelCard";
import scooterFront from "@/assets/scooter-front.jpg.asset.json";
import scooterSide from "@/assets/scooter-side.jpg.asset.json";
import scooterTQ from "@/assets/scooter-three-quarter.jpg.asset.json";
import scooterRear from "@/assets/scooter-rear.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Franklin EV | Premium Electric Scooters in Hyderabad — Cleaner. Quieter. Smarter." },
      {
        name: "description",
        content:
          "Discover Franklin EV electric scooters — 60 km/h top speed, ~100 km range, cruise control and anti-theft protection. Cleaner, quieter, smarter rides built in India. Book a test ride in Hyderabad today.",
      },
      { property: "og:title", content: "Franklin EV — Electric Scooters Built for Modern India" },
      {
        property: "og:description",
        content:
          "Quiet, connected and built to last. Explore KORO, NIX-DLX and POWER+ electric scooters. Book your test ride.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const cities = [
  "Hyderabad", "Secunderabad", "AS Rao Nagar", "Kanajiguda", "Boduppal", "Chintal",
  "Champapet", "Malkajgiri", "Hayath Nagar", "Manikonda", "Nalgonda", "Karimnagar",
  "Mancherial", "Vikarabad", "Kothagudem", "Bhupalpally", "Khammam", "Kollapur",
  "Vemulawada", "Jammikunta", "Srikakulam", "Visakhapatnam",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-hero-gradient">
        <FloatingObjects />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/70 backdrop-blur border border-border text-xs font-medium text-primary"
            >
              <Sparkles className="w-3.5 h-3.5" /> Cleaner. Quieter. Smarter.
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-ink leading-[1.05]"
            >
              Ride Cleaner.<br />Ride Quieter.<br />
              <span className="text-primary-gradient">Ride Smarter.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              Franklin EV builds premium electric scooters for the way India moves
              today — silent power, real-world range, and intelligent features that
              make every ride effortless.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-soft hover:shadow-lift hover:scale-[1.03] transition-all"
              >
                Book a Test Ride <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/vehicles"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface text-ink font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Explore the Range
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,oklch(0.62_0.18_248/0.3),transparent_70%)] blur-2xl" />
            <motion.img
              src={scooterTQ.url}
              alt="Franklin EV electric scooter gliding through a bright city street"
              className="relative w-full h-auto"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-6 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: <Counter value={60} />, unit: "km/h", label: "Top speed" },
            { num: <><span>~</span><Counter value={100} /></>, unit: "km", label: "Range per charge" },
            { num: <Counter value={3} />, unit: "years", label: "Warranty (battery & motor)" },
            { num: <><span>~</span><Counter value={4.5} decimals={1} /></>, unit: "hrs", label: "Full charge (0–80%)" },
          ].map((s, i) => (
            <StaggerItem key={i}>
              <div className="p-7 rounded-3xl bg-surface border border-border shadow-soft hover:shadow-lift transition-shadow">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-5xl font-bold text-primary-gradient">{s.num}</span>
                  <span className="text-sm font-semibold text-muted-foreground">{s.unit}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* WHY */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
            Why riders choose Franklin EV
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Owning an electric scooter should save you money, time and hassle —
            not add to them. Franklin EV is engineered around three simple promises.
          </p>
        </Reveal>
        <StaggerGroup className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              Icon: Wallet,
              title: "Cost Effective",
              body: "Charge for a fraction of the cost of petrol. A full charge of roughly 3.5 units costs about ₹24.50 and takes you close to 100 km.",
            },
            {
              Icon: ShieldCheck,
              title: "Durable",
              body: "Built with quality components and a robust BLDC hub motor, backed by a 3-year / 50,000 km warranty on battery and motor.",
            },
            {
              Icon: Wrench,
              title: "Low Maintenance",
              body: "Fewer moving parts than a petrol scooter means fewer service visits, lower running costs and more time on the road.",
            },
          ].map((p, i) => (
            <StaggerItem key={i}>
              <div className="h-full p-7 rounded-3xl bg-surface border border-border shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary-gradient grid place-items-center text-primary-foreground shadow-soft">
                  <p.Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* FEATURED MODELS */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
            Meet the Franklin EV family
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three scooters, one philosophy — clean power and smart features, without compromise.
          </p>
        </Reveal>
        <StaggerGroup className="mt-12 grid md:grid-cols-3 gap-6">
          <StaggerItem>
            <ModelCard
              name="KORO"
              tagline="The everyday essential — light, nimble and efficient."
              image={scooterSide.url}
              alt="Franklin EV KORO electric scooter, side profile, studio light background."
              chips={["60 km/h", "Cruise control", "Anti-theft + key alerts"]}
              accent="teal"
            />
          </StaggerItem>
          <StaggerItem>
            <ModelCard
              name="NIX-DLX"
              tagline="Style meets substance — refined ride, premium finish."
              image={scooterTQ.url}
              alt="Franklin EV NIX-DLX electric scooter, three-quarter front view."
              chips={["60 km/h", "Cruise control", "Anti-theft + key alerts"]}
              accent="blue"
            />
          </StaggerItem>
          <StaggerItem>
            <ModelCard
              name="POWER+"
              tagline="Maximum presence, maximum performance. Blue & Maroon."
              image={scooterFront.url}
              alt="Franklin EV POWER+ electric scooter, three-quarter view."
              chips={["60 km/h", "Cruise control", "Anti-theft + key alerts"]}
              accent="maroon"
            />
          </StaggerItem>
        </StaggerGroup>
      </section>

      {/* THREE PILLARS */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
            Designed around three pillars
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { Icon: Sparkles, title: "Design", body: "Clean lines, modern detailing and a premium fit-and-finish that looks as good parked as it does in motion." },
            { Icon: Gauge, title: "Performance", body: "A responsive BLDC hub motor with up to 2.5 kW peak power and a smooth, silent 60 km/h top speed." },
            { Icon: Cpu, title: "Durability", body: "Engineered to handle real Indian roads, day after day, with a warranty that backs it up." },
          ].map((p, i) => (
            <StaggerItem key={i}>
              <div className="h-full p-7 rounded-3xl glass-card border border-border shadow-soft">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 grid place-items-center text-accent">
                  <p.Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* COST COMPARISON */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="rounded-[2.5rem] bg-hero-gradient p-10 lg:p-16 border border-border shadow-soft">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink max-w-2xl">
              Petrol burns money. <span className="text-primary-gradient">Electrons don't.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              A petrol two-wheeler can cost around ₹200 to cover 150 km. A Franklin EV
              covers similar distances for a tiny fraction of that — roughly ₹24.50
              for a full charge of nearly 100 km. Over a year of commuting, the savings add up fast.
            </p>
          </Reveal>
          <div className="mt-10 space-y-5">
            <CostBar label="Petrol scooter" cost="₹200" sub="for ~150 km" widthPct={100} color="bg-[oklch(0.65_0.18_30)]" />
            <CostBar label="Franklin EV" cost="₹24.50" sub="for ~100 km" widthPct={14} color="bg-primary-gradient" />
          </div>
          <div className="mt-8">
            <Link
              to="/vehicles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-soft hover:shadow-lift transition-all"
            >
              Calculate your savings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* APP SECTION */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Smartphone className="w-3.5 h-3.5" /> Franklin EV App
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-ink">
            Your scooter, smarter
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Stay connected to your ride. The Franklin EV app puts key alerts,
            status and smart controls in your pocket — available on Android and iOS.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="px-5 py-3 rounded-2xl bg-ink text-background font-semibold text-sm">Download on the App Store</a>
            <a href="#" className="px-5 py-3 rounded-2xl bg-ink text-background font-semibold text-sm">Get it on Google Play</a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mx-auto w-64 h-[520px] rounded-[2.5rem] bg-ink p-3 shadow-lift">
            <div className="w-full h-full rounded-[2rem] bg-hero-gradient overflow-hidden relative">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-ink/80" />
              <div className="absolute inset-0 grid place-items-center p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-gradient grid place-items-center text-primary-foreground shadow-soft">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <p className="mt-4 font-display font-bold text-ink text-xl">Franklin EV</p>
                  <p className="mt-1 text-xs text-muted-foreground">Battery 92% · ~92 km</p>
                  <div className="mt-6 space-y-2 text-left">
                    {["Locate my scooter", "Battery health", "Anti-theft alerts"].map((t) => (
                      <div key={t} className="px-3 py-2 rounded-xl bg-surface border border-border text-xs font-medium text-ink">
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* DEALER MARQUEE */}
      <section className="py-16 border-y border-border bg-surface overflow-hidden">
        <Reveal className="max-w-7xl mx-auto px-5 lg:px-8 mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">Find Franklin EV near you</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Our growing dealer network spans Telangana and Andhra Pradesh — from
            Hyderabad to Vizag — so expert help and a test ride are never far away.
          </p>
        </Reveal>
        <div className="relative overflow-hidden">
          <div className="flex gap-3 whitespace-nowrap" style={{ animation: "marquee 40s linear infinite", width: "max-content" }}>
            {[...cities, ...cities].map((c, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full bg-background border border-border text-sm font-medium text-ink inline-flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" /> {c}
              </span>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-8">
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            See all dealers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-24">
        <Reveal>
          <div className="relative rounded-[2.5rem] bg-primary-gradient p-12 lg:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(50% 50% at 20% 30%, white 0%, transparent 70%), radial-gradient(50% 50% at 80% 70%, white 0%, transparent 70%)" }} />
            <div className="relative">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground">
                Ready to feel the difference?
              </h2>
              <p className="mt-5 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Book a free test ride and experience a cleaner, quieter, smarter way to move.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-surface text-ink font-semibold shadow-lift hover:scale-[1.03] transition-transform"
              >
                Book a Test Ride <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* hidden alt image so it loads for SEO/crawlers */}
      <img src={scooterRear.url} alt="Franklin EV electric scooter rear three-quarter view" className="sr-only" loading="lazy" />
    </>
  );
}

function CostBar({ label, cost, sub, widthPct, color }: { label: string; cost: string; sub: string; widthPct: number; color: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-semibold text-ink">{label}</span>
        <span className="text-sm text-muted-foreground">
          <span className="font-display text-2xl font-bold text-ink">{cost}</span> {sub}
        </span>
      </div>
      <div className="h-5 rounded-full bg-background border border-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${widthPct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`h-full ${color}`}
        />
      </div>
    </div>
  );
}
