import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Franklin EV" },
      {
        name: "description",
        content:
          "Franklin EV privacy policy for test ride, dealer and model enquiry submissions in India.",
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
              This notice explains how Franklin EV India Pvt. Ltd. handles enquiry details shared
              through the website for model information, test rides, dealer support and service
              follow-up.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 lg:px-8 py-16">
        <Reveal>
          <div className="privacy-panel">
            <article>
              <h2>What we collect</h2>
              <p>
                When you submit an enquiry, we collect the details you choose to provide, including
                your name, phone number, email address, city, interested model and message.
              </p>
            </article>
            <article>
              <h2>How we use it</h2>
              <p>
                We use enquiry details to respond to your request, arrange sales follow-up, support
                test ride booking, connect you with a relevant dealer and answer model or service
                questions.
              </p>
            </article>
            <article>
              <h2>Data sharing</h2>
              <p>
                We may share relevant enquiry details with Franklin EV dealers or support teams only
                when needed to help with your enquiry. We do not sell enquiry details.
              </p>
            </article>
            <article>
              <h2>Deletion requests</h2>
              <p>
                To request access, correction or deletion of your enquiry details, contact Franklin
                EV using the details below.
              </p>
              <div className="privacy-contact">
                <a href="mailto:sales@franklinev.co.in">
                  <Mail className="h-4 w-4" />
                  sales@franklinev.co.in
                </a>
                <a href="tel:+918977040935">
                  <Phone className="h-4 w-4" />
                  +91 89770 40935
                </a>
              </div>
            </article>
          </div>
        </Reveal>
      </section>
    </>
  );
}
