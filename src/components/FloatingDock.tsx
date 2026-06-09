import { Link } from "@tanstack/react-router";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";

export function FloatingDock() {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a
        href="tel:+918977040935"
        className="floating-action floating-action-phone"
        aria-label="Call Franklin EV"
        title="Call Franklin EV"
      >
        <Phone />
      </a>
      <a
        href="https://wa.me/918977040935"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action floating-action-whatsapp"
        aria-label="WhatsApp Franklin EV"
        title="WhatsApp Franklin EV"
      >
        <MessageCircle />
      </a>
      <Link
        to="/contact"
        className="floating-action floating-action-ride"
        aria-label="Book Test Ride"
        title="Book Test Ride"
      >
        <CalendarCheck />
      </Link>
    </div>
  );
}
