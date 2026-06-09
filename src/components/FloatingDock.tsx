import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CalendarCheck, MessageCircle, Phone, X } from "lucide-react";

export function FloatingDock() {
  const [collapsed, setCollapsed] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`floating-actions${collapsed ? " is-collapsed" : ""}${
        footerVisible ? " is-footer-visible" : ""
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
