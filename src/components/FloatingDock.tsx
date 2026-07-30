import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { CalendarCheck, MessageCircle, Phone, X } from "lucide-react";

export function FloatingDock() {
  // Collapsed to a single button by default on every screen size so the dock
  // never sits as a wide bar over page content (it previously covered the
  // Google Play badge, hero copy, FAQ text and the Contact form's City field).
  const [collapsed, setCollapsed] = useState(true);
  const [shouldHide, setShouldHide] = useState(false);
  const intersectingTargetsRef = useRef<Set<Element>>(new Set());

  useEffect(() => {
    const targets = document.querySelectorAll("footer, [data-hide-floating-dock]");
    if (targets.length === 0 || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersectingTargetsRef.current.add(entry.target);
          } else {
            intersectingTargetsRef.current.delete(entry.target);
          }
        }
        setShouldHide(intersectingTargetsRef.current.size > 0);
      },
      { threshold: 0.2 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`floating-actions${collapsed ? " is-collapsed" : ""}${
        shouldHide ? " is-footer-visible" : ""
      }`}
      aria-label="Quick contact actions"
    >
      <button
        type="button"
        className="floating-action floating-action-toggle"
        aria-label={collapsed ? "Show quick contact actions" : "Hide quick contact actions"}
        aria-expanded={!collapsed}
        onClick={() => setCollapsed((value) => !value)}
      >
        {collapsed ? <CalendarCheck /> : <X />}
      </button>
      <div className="floating-action-list">
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
    </div>
  );
}
