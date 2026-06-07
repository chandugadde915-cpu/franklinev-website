import { Link } from "@tanstack/react-router";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";

export function FloatingDock() {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a href="tel:+918977040935" className="floating-action floating-action-phone">
        <Phone />
        <span>Call Franklin EV</span>
      </a>
      <a
        href="https://wa.me/918977040935"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action floating-action-whatsapp"
      >
        <MessageCircle />
        <span>WhatsApp Franklin EV</span>
      </a>
      <Link to="/contact" className="floating-action floating-action-ride">
        <CalendarCheck />
        <span>Book Test Ride</span>
      </Link>
    </div>
  );
}
