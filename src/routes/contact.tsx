import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Search,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Franklin EV | Book a Test Ride in Hyderabad & Telangana" },
      {
        name: "description",
        content:
          "Contact Franklin EV India Pvt. Ltd. in Hyderabad to book a test ride, enquire about Power ++ and Rapid, or find listed dealer locations across Telangana and Andhra Pradesh.",
      },
      {
        name: "keywords",
        content:
          "Franklin EV contact, Franklin EV Hyderabad, book Franklin EV test ride, Franklin EV dealer Telangana, Franklin EV Andhra Pradesh",
      },
      { property: "og:title", content: "Contact Franklin EV — Test Rides, Dealers & Support" },
      {
        property: "og:description",
        content:
          "Reach Franklin EV for model enquiries, test ride support, dealer locations and ownership questions.",
      },
      { property: "og:url", content: "https://franklinev-website.vercel.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://franklinev-website.vercel.app/contact" }],
  }),
  component: ContactPage,
});

const dealers: { district: string; locations: string[] }[] = [
  {
    district: "Hyderabad / Secunderabad",
    locations: [
      "AS Rao Nagar (MVR Motors)",
      "Kanajiguda (E-Drive)",
      "Boduppal",
      "Chintal",
      "Champapet",
      "Malkajgiri",
      "Hayath Nagar",
      "Manikonda",
    ],
  },
  {
    district: "Telangana districts",
    locations: [
      "Nalgonda",
      "Karimnagar",
      "Mancherial",
      "Vikarabad",
      "Kothagudem",
      "Bhupalpally",
      "Khammam",
      "Kollapur",
      "Vemulawada",
      "Jammikunta",
    ],
  },
  { district: "Andhra Pradesh", locations: ["Srikakulam", "Visakhapatnam"] },
];

function ContactPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="contact-hero-grid max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-16">
          <Reveal className="contact-hero-copy">
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink">
              Let's get you <span className="text-primary-gradient">riding</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              Book a test ride, ask about Franklin EV scooter models, or find a listed dealer
              location near you in Telangana or Andhra Pradesh.
            </p>
          </Reveal>
          <Reveal className="contact-hero-image" delay={0.1}>
            <img
              src="/assets/editorial/red-lifestyle-couple.jpg"
              alt="Two riders standing beside a Franklin EV scooter before a test ride."
              width={1402}
              height={1122}
              loading="eager"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-3">
          <ContactForm />
        </Reveal>

        <Reveal className="lg:col-span-2" delay={0.1}>
          <div className="p-7 rounded-3xl bg-surface border border-border shadow-soft">
            <h2 className="font-display text-2xl font-bold text-ink">Franklin EV headquarters</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Franklin EV India Pvt. Ltd., KNR Arcade, Plot No. 12, Chanikyapuri Colony,
                  Mallapur, Hyderabad 500076, Telangana, India
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:sales@franklinev.co.in" className="text-ink hover:text-primary">
                  sales@franklinev.co.in
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-ink">
                  <a href="tel:+918977040935" className="block hover:text-primary">
                    +91 89770 40935
                  </a>
                  <a href="tel:+918977040936" className="block hover:text-primary">
                    +91 89770 40936
                  </a>
                  <a href="tel:+918977007062" className="block hover:text-primary">
                    +91 89770 07062
                  </a>
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
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/franklin-ev",
                },
                {
                  Icon: Twitter,
                  label: "Twitter @franklinev",
                  href: "https://twitter.com/franklinev",
                },
                {
                  Icon: Instagram,
                  label: "Instagram @franklinev",
                  href: "https://www.instagram.com/franklinev",
                },
                { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/franklinev" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary"
                >
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
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
            Find a dealer near you
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Search Franklin EV listed dealer locations in Telangana and Andhra Pradesh. Contact the
            team before visiting to confirm current model availability, test ride timing and service
            support.
          </p>
        </Reveal>
        <DealerLocator />
      </section>
    </>
  );
}

function ContactForm() {
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
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  return (
    <form
      method="POST"
      action="/api/contact"
      onSubmit={onSubmit}
      aria-busy={isSending}
      className="p-7 lg:p-9 rounded-3xl bg-surface border border-border shadow-soft"
    >
      <AnimatePresence mode="wait">
        {
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="font-display text-2xl font-bold text-ink">Send a Franklin EV enquiry</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field
                label="Full name"
                id="name"
                name="full_name"
                autoComplete="name"
                placeholder="Ravi Kumar"
                required
              />
              <Field
                label="Phone number"
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="numeric"
                pattern="[6-9][0-9]{9}"
                placeholder="9876543210"
                required
              />
              <Field
                label="Email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="ravi@email.com"
                required
              />
              <Field
                label="City"
                id="city"
                name="city"
                autoComplete="address-level2"
                placeholder="Hyderabad, Secunderabad, Warangal..."
                required
              />
              <div className="sm:col-span-2">
                <label htmlFor="model" className="block text-sm font-medium text-ink mb-1.5">
                  Interested model
                </label>
                <select
                  id="model"
                  name="model_interest"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-ink"
                >
                  <option>Not sure yet</option>
                  <option>Power ++</option>
                  <option>Rapid</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="msg" className="block text-sm font-medium text-ink mb-1.5">
                  Message
                </label>
                <textarea
                  id="msg"
                  name="message"
                  rows={4}
                  placeholder="I'd like a test ride for the Power ++ model at Boduppal..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-ink resize-none"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSending}
              aria-label={status === "success" ? "Enquiry sent" : "Send my enquiry"}
              className={`mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-soft hover:shadow-lift hover:scale-[1.02] transition-all${isSending ? " btn-loading" : ""}`}
            >
              {isSending ? (
                <>
                  <span className="spinner" aria-hidden="true" /> Sending...
                </>
              ) : (
                <>
                  Send my enquiry <Send className="w-4 h-4" />
                </>
              )}
            </button>
            <div
              id="form-status"
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              className={
                status === "success"
                  ? "success"
                  : status === "error"
                    ? "error"
                    : status === "sending"
                      ? "sending"
                      : undefined
              }
            >
              {status === "sending"
                ? "Sending your enquiry..."
                : status === "success"
                  ? "Thank you! We'll contact you within 24 hours."
                  : status === "error"
                    ? "Something went wrong. Please call +91 89770 40935 directly."
                    : ""}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              By submitting, you agree to be contacted by Franklin EV. See our{" "}
              <a href="/privacy" className="consent-link">
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>
        }
      </AnimatePresence>
    </form>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
  autoComplete,
  inputMode,
  pattern,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
  pattern?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        pattern={pattern}
        placeholder={placeholder}
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
        locations: d.locations.filter(
          (l) => l.toLowerCase().includes(s) || d.district.toLowerCase().includes(s),
        ),
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
          <div
            key={d.district}
            className="p-6 rounded-3xl bg-surface border border-border shadow-soft"
          >
            <h3 className="font-display font-bold text-ink">{d.district}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {d.locations.map((l) => (
                <li key={l} className="flex gap-2">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 text-primary" /> {l}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-muted-foreground">No dealers match "{q}" — try a nearby city.</p>
        )}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">
        Note: Contact Franklin EV to confirm exact dealer address, test ride timing and current
        model availability before visiting.
      </p>
    </>
  );
}
