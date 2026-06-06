import { Phone, MessageCircle } from "lucide-react";

export function FloatingDock() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/918977040935"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 grid place-items-center rounded-full bg-[oklch(0.72_0.17_152)] text-white shadow-lift hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      <a
        href="tel:+918977040935"
        aria-label="Call Franklin EV"
        className="w-12 h-12 grid place-items-center rounded-full bg-primary-gradient text-primary-foreground shadow-lift hover:scale-110 transition-transform"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
