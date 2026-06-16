import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Franklin EV" },
      {
        name: "description",
        content:
          "Franklin EV Privacy Policy covering collection, storage, processing, sharing and protection of user information under applicable Indian laws.",
      },
      { property: "og:title", content: "Franklin EV Privacy Policy" },
      {
        property: "og:description",
        content:
          "How Franklin EV collects and uses enquiry details for sales follow-up, test rides and support.",
      },
      { property: "og:url", content: "https://franklinev-website.vercel.app/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://franklinev-website.vercel.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const privacySections = [
    {
      title: "Privacy commitment",
      body: "Franklin EV India Pvt. Ltd. respects the privacy of customers, dealers, distributors, vendors and visitors who access or use www.franklinev.com or otherwise provide information while using our products, services or business channels.",
    },
    {
      title: "Information covered",
      body: "Information, including personal information, may be collected through website use, offline interactions, inquiries, dealership applications, purchases, service requests or other business engagement with Franklin EV.",
    },
    {
      title: "How information is handled",
      body: "This Privacy Policy describes the nature and type of information collected, how it is collected, and how it is used, stored, processed, disclosed and protected by Franklin EV India Pvt. Ltd.",
    },
    {
      title: "Consent",
      body: "By using the website or otherwise providing your information, you consent to Franklin EV India Pvt. Ltd. collecting, storing, processing, using and managing your information in accordance with this Privacy Policy.",
    },
    {
      title: "General confirmation",
      body: "By accessing or browsing the website, or otherwise providing information, you confirm that you have the legal capacity to enter into a binding agreement and that you have read, understood and agreed to this Privacy Policy and our Terms & Conditions.",
    },
    {
      title: "Changes to this policy",
      body: "Franklin EV India Pvt. Ltd. may amend, update, modify or revise this Privacy Policy at any time to comply with applicable laws or improve services and user experience. Updated versions become effective upon publication on www.franklinev.com unless otherwise specified.",
    },
  ];

  const laws = [
    "Section 43A of the Information Technology Act, 2000",
    "Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011",
    "Digital Personal Data Protection Act, 2023, where applicable",
    "Any other applicable rules, regulations, notifications or amendments",
  ];

  return (
    <>
      <section className="bg-hero-gradient">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 pt-20 pb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <ShieldCheck className="h-4 w-4" />
              Privacy notice
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl font-bold text-ink">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
              This policy explains how Franklin EV India Pvt. Ltd. collects, stores, processes,
              uses, discloses and protects information shared through the website and business
              interactions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <div className="privacy-panel">
            {privacySections.map((section) => (
              <article key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            ))}
            <article>
              <h2>Applicable laws</h2>
              <ul className="policy-list">
                {laws.map((law) => (
                  <li key={law}>{law}</li>
                ))}
              </ul>
            </article>
            <article>
              <h2>Contact information</h2>
              <p>
                For questions, concerns, requests, withdrawal of consent or grievances relating to
                this Privacy Policy or processing of personal information, contact Franklin EV India
                Pvt. Ltd.
              </p>
              <p className="legal-contact-line">
                <MapPin className="h-4 w-4" />
                Plot No. 53, Ramakrishna Nagar Colony, Chengicherla, Hyderabad, Telangana - 500095,
                India
              </p>
              <div className="privacy-contact">
                <a href="mailto:info@franklinev.com">
                  <Mail className="h-4 w-4" />
                  info@franklinev.com
                </a>
                <a href="https://www.franklinev.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4" />
                  www.franklinev.com
                </a>
              </div>
            </article>
          </div>
        </Reveal>
      </section>
    </>
  );
}
