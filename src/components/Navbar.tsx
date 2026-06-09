import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home", title: "Franklin EV smart electric scooters in Hyderabad" },
  {
    to: "/vehicles",
    label: "Vehicles",
    title: "Browse Franklin EV electric scooter models",
  },
  {
    to: "/about",
    label: "About",
    title: "About Franklin EV India Pvt. Ltd.",
  },
  {
    to: "/contact",
    label: "Contact",
    title: "Book a test ride or find a Franklin EV dealer near you",
  },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="site-navbar-inner" aria-label="Franklin EV main navigation">
        <Link
          to="/"
          className="site-logo"
          onClick={() => setOpen(false)}
          aria-label="Franklin EV — Electric Scooters India"
        >
          <img src="/assets/franklin-ev-logo.png" alt="Franklin EV" className="site-logo-image" />
        </Link>

        <ul className="site-nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="site-nav-link"
                activeProps={{ className: "site-nav-link is-active" }}
                activeOptions={{ exact: link.to === "/" }}
                title={link.title}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="site-nav-actions">
          <Link
            to="/contact"
            className="site-nav-cta"
            title="Book a test ride or find a Franklin EV dealer near you"
          >
            Book a Test Ride
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="site-menu-button"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="site-mobile-menu">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="site-mobile-link"
              title={link.title}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="site-mobile-cta">
            Book a Test Ride
          </Link>
        </div>
      ) : null}
    </header>
  );
}
