import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, MapPin, Phone, Search, Send, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Franklin EV | Book a Test Ride in Hyderabad & Telangana" },
      {
        name: "description",
        content:
          "Get in touch with Franklin EV. Book a test ride, find your nearest dealer across Telangana and Andhra Pradesh, or reach our Hyderabad HQ by phone or email.",
      },
      { property: "og:title", content: "Contact Franklin EV — Test Rides, Dealers & Support" },
      { property: "og:description", content: "Reach the Franklin EV team and find a dealer near you." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const dealers: { district: string; locations: string[] }[] = [
  { district: "Hyderabad / Secunderabad", locations: ["AS Rao Nagar (MVR Motors)", "Kanajiguda (E-Drive)", "Boduppal", "Chintal", "Champapet", "Malkajgiri", "Hayath Nagar", "Manikonda"] },
  { district: "Telangana districts", locations: ["Nalgonda", "Karimnagar", "Mancherial", "Vikarabad", "Kothagudem", "Bhupalpally", "Khammam", "Kollapur", "Vemulawada", "Jammikunta"] },
  { district: "Andhra Pradesh", locations: ["Srikakulam", "Visakhapatnam"] },
];

function ContactPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-16 text-center">
          <Reveal>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink">
              Let's get you <span className="text-primary-gradient">riding</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a test ride, ask a question or find your nearest dealer — we'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-3">
          <ContactForm />
        </Reveal>

        <Reveal className="lg:col-span-2" delay={0.1}>
          <div className="p-7 rounded-3xl bg-surface border border-border shadow-soft">
            <h2 className="font-display text-2xl font-bold text-ink">Visit our headquarters</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Franklin EV India Pvt. Ltd., KNR Arcade, Plot No. 12, Chanikyapuri Colony, Mallapur, Hyderabad 500076, Telangana, India</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:sales@franklinev.co.in" className="text-ink hover:text-primary">sales@franklinev.co.in</a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-ink">
                  <a href="tel:+918977040935" className="block hover:text-primary">+91 89770 40935</a>
                  <a href="tel:+918977040936" className="block hover:text-primary">+91 89770 40936</a>
                  <a href="tel:+918977007062" className="block hover:text-primary">+91 89770 07062</a>
                </div>
              </li>
            </ul>
            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-border">
              <iframe
                title="Franklin EV HQ map"
                src="https://www.google.com/maps?q=Mallapur,Hyderabad,Telangana&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter @FEvindia" },
                { Icon: Instagram, label: "Instagram @franklinevindia" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* DEALER LOCATOR */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">Find a dealer near you</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Franklin EV dealers and service points span Telangana and Andhra Pradesh.
            Search by city to find your nearest one.
          </p>
        </Reveal>
        <DealerLocator />
      </section>
    </>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <form onSubmit={onSubmit} className="p-7 lg:p-9 rounded-3xl bg-surface border border-border shadow-soft">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-14"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 grid place-items-center text-accent">
              <Check className="w-8 h-8" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold text-ink">Thanks — your enquiry is on its way</h2>
            <p className="mt-2 text-muted-foreground">A Franklin EV expert will reach out shortly.</p>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="font-display text-2xl font-bold text-ink">Send us an enquiry</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full name" id="name" required />
              <Field label="Phone number" id="phone" type="tel" required />
              <Field label="Email" id="email" type="email" required />
              <Field label="City" id="city" required />
              <div className="sm:col-span-2">
                <label htmlFor="model" className="block text-sm font-medium text-ink mb-1.5">Interested model</label>
                <select id="model" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-ink">
                  <option>Not sure yet</option>
                  <option>KORO</option>
                  <option>NIX-DLX</option>
                  <option>POWER+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="msg" className="block text-sm font-medium text-ink mb-1.5">Message</label>
                <textarea id="msg" rows={4} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-ink resize-none" />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-soft hover:shadow-lift hover:scale-[1.02] transition-all"
            >
              Send my enquiry <Send className="w-4 h-4" />
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              By submitting, you agree to be contacted by Franklin EV about your enquiry.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-1.5">{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-ink"
      />
    </div>
  );
}

function DealerLocator() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return dealers;
    return dealers
      .map((d) => ({
        ...d,
        locations: d.locations.filter((l) => l.toLowerCase().includes(s) || d.district.toLowerCase().includes(s)),
      }))
      .filter((d) => d.locations.length > 0);
  }, [q]);
  return (
    <>
      <div className="mt-8 relative max-w-md">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search your city or district…"
          aria-label="Search dealers"
          className="w-full pl-11 pr-4 py-3 rounded-full bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-ink"
        />
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {filtered.map((d) => (
          <div key={d.district} className="p-6 rounded-3xl bg-surface border border-border shadow-soft">
            <h3 className="font-display font-bold text-ink">{d.district}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {d.locations.map((l) => (
                <li key={l} className="flex gap-2"><MapPin className="w-3.5 h-3.5 mt-0.5 text-primary" /> {l}</li>
              ))}
            </ul>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-muted-foreground">No dealers match "{q}" — try a nearby city.</p>
        )}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">Note: Exact addresses and phone numbers can be added per dealer.</p>
    </>
  );
}
