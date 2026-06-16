import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Globe, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/legal-policy")({
  head: () => ({
    meta: [
      { title: "Legal Policy | Franklin EV India Pvt. Ltd." },
      {
        name: "description",
        content:
          "Franklin EV legal policy covering Terms and Conditions, Privacy Policy, website use, purchases, intellectual property and information processing.",
      },
      { property: "og:title", content: "Franklin EV Legal Policy" },
      {
        property: "og:description",
        content:
          "Terms and Conditions and Privacy Policy for Franklin EV India Pvt. Ltd. website visitors and customers.",
      },
      { property: "og:url", content: "https://franklinev-website.vercel.app/legal-policy" },
    ],
    links: [{ rel: "canonical", href: "https://franklinev-website.vercel.app/legal-policy" }],
  }),
  component: LegalPolicyPage,
});

const policies = [
  {
    title: "Website ownership",
    body: "This website, www.franklinev.com, is owned and operated by Franklin EV India Pvt. Ltd., a company incorporated under the Companies Act, 2013, having its registered office at Plot No. 53, Ramakrishna Nagar Colony, Chengicherla, Hyderabad, Telangana - 500095.",
  },
  {
    title: "Authorised use",
    body: "This website is authorised to market, promote and sell original Franklin EV products and related merchandise in India and is operated exclusively by Franklin EV India Pvt. Ltd.",
  },
  {
    title: "Acceptance of terms",
    body: "By accessing or using this website, you acknowledge that you have read, understood and agreed to be bound by these Terms & Conditions. If you do not agree, you must discontinue use of this website and its services immediately.",
  },
  {
    title: "Separate agreements",
    body: "These Terms & Conditions do not alter any separate agreement that may exist between you and Franklin EV India Pvt. Ltd. Your continued use of the website constitutes acceptance of these Terms & Conditions.",
  },
  {
    title: "Orders and transactions",
    body: "By placing an order through this website, you enter into a transaction with Franklin EV India Pvt. Ltd. for the purchase of Franklin EV products, accessories, merchandise or related offerings in India.",
  },
  {
    title: "Intellectual property",
    body: "All names, brands, trademarks, service marks, logos, designs and other intellectual property displayed on this website are the exclusive property of Franklin EV India Pvt. Ltd. and may not be used, reproduced, modified, distributed or otherwise exploited without prior written consent.",
  },
  {
    title: "Website content",
    body: "The content available on this website, including text, graphics, icons, images, videos, audio files, software, designs and other materials, is the property of Franklin EV India Pvt. Ltd. and www.franklinev.com. You may not copy, reproduce, republish, upload, post, transmit, distribute or use website content for public or commercial purposes without prior written permission.",
  },
  {
    title: "Promotional material",
    body: "Any statement, condition, representation, description, specification, illustration or warranty contained in any brochure, catalogue, advertisement, promotional material or other publication shall not modify or override these Terms & Conditions. These Terms & Conditions govern the sale, purchase and use of all products and services offered through www.franklinev.com.",
  },
];

const privacyPolicies = [
  {
    title: "Privacy commitment",
    body: "Franklin EV India Pvt. Ltd. respects the privacy of customers, dealers, distributors, vendors and visitors who access or use www.franklinev.com or otherwise provide information while availing products or services or engaging in business dealings with us.",
  },
  {
    title: "Information covered",
    body: "Information, including personal information, may be collected through website use, offline interactions, inquiries, dealership applications, purchases, service requests or any other business engagement with Franklin EV.",
  },
  {
    title: "Use and processing",
    body: "Any personal information collected is governed by this Privacy Policy, including the nature and type of information collected, how it is collected, and how it is used, stored, processed, disclosed and protected by Franklin EV India Pvt. Ltd.",
  },
  {
    title: "User consent",
    body: "By using the website or otherwise providing your information, you expressly consent to Franklin EV India Pvt. Ltd. collecting, storing, processing, using and managing your information, including personal information, in accordance with this Privacy Policy.",
  },
  {
    title: "Policy changes",
    body: "Franklin EV India Pvt. Ltd. reserves the right to amend, update, modify or revise this Privacy Policy at any time to comply with applicable laws or improve our services and user experience. Updated versions will be published on www.franklinev.com and become effective immediately unless otherwise specified.",
  },
];

const applicableLaws = [
  "Section 43A of the Information Technology Act, 2000",
  "Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011",
  "Digital Personal Data Protection Act, 2023, where applicable",
  "Any other applicable rules, regulations, notifications or amendments",
];

function LegalPolicyPage() {
  return (
    <>
      <section className="bg-hero-gradient">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 pt-20 pb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <FileText className="h-4 w-4" />
              Legal Policy
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl font-bold text-ink">
              Legal Policy
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
              Terms & Conditions and Privacy Policy for Franklin EV India Pvt. Ltd., based on the
              official client-provided policy document.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <div className="policy-section-title">
            <span className="cinema-eyebrow">Terms & Conditions</span>
            <h2>Website and purchase terms</h2>
          </div>
          <div className="privacy-panel legal-policy-panel">
            {policies.map((policy) => (
              <article key={policy.title}>
                <h2>{policy.title}</h2>
                <p>{policy.body}</p>
              </article>
            ))}
            <article>
              <h2>Corporate office</h2>
              <p className="legal-contact-line">
                <MapPin className="h-4 w-4" />
                Plot No. 53, Ramakrishna Nagar Colony, Chengicherla, Hyderabad, Telangana - 500095
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
          <div className="policy-section-title policy-section-title-spaced">
            <span className="cinema-eyebrow">Privacy Policy</span>
            <h2>Information handling and consent</h2>
          </div>
          <div className="privacy-panel legal-policy-panel">
            {privacyPolicies.map((policy) => (
              <article key={policy.title}>
                <h2>{policy.title}</h2>
                <p>{policy.body}</p>
              </article>
            ))}
            <article>
              <h2>Applicable laws</h2>
              <ul className="policy-list">
                {applicableLaws.map((law) => (
                  <li key={law}>{law}</li>
                ))}
              </ul>
            </article>
            <article>
              <h2>Privacy contact</h2>
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
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 cinema-btn cinema-btn-primary">
            Ask Franklin EV for current terms <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
