import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  const scrolledRef = useRef(false);
  const scrollFrameRef = useRef(0);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    if (mobileQuery.matches) {
      return;
    }

    const syncScrolled = () => {
      const nextScrolled = window.scrollY > 20;
      if (scrolledRef.current === nextScrolled) {
        return;
      }

      scrolledRef.current = nextScrolled;
      setScrolled(nextScrolled);
    };

    const onScroll = () => {
      if (scrollFrameRef.current) {
        return;
      }

      scrollFrameRef.current = requestAnimationFrame(() => {
        scrollFrameRef.current = 0;
        syncScrolled();
      });
    };

    syncScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = 0;
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`site-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="site-navbar-inner" aria-label="Franklin EV main navigation">
        <Link
          to="/"
          className="site-logo"
          onClick={() => setOpen(false)}
          aria-label="Franklin EV — Electric Scooters India"
        >
          <img
            src="/assets/franklin-ev-logo.png"
            alt="Franklin EV"
            className="site-logo-image"
            width={2674}
            height={598}
          />
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
            aria-expanded={open}
            aria-controls="site-mobile-menu"
            className="site-menu-button"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="site-mobile-menu" id="site-mobile-menu">
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
