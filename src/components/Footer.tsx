import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <div className="footer-logo">
            <img src="/assets/franklin-ev-logo.png" alt="Franklin EV" className="site-logo-image" />
          </div>
          <p>Cleaner. Quieter. Smarter.</p>
          <p>
            Electric scooters for Indian city riders, with KORO, NIX-DLX and POWER+ model options,
            low running cost and dealer support in Telangana and Andhra Pradesh.
          </p>
          <div className="footer-socials">
            {[
              {
                Icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/franklin-ev",
              },
              { Icon: Twitter, label: "Twitter", href: "https://twitter.com/franklinev" },
              {
                Icon: Instagram,
                label: "Instagram",
                href: "https://www.instagram.com/franklinev",
              },
              { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/franklinev" },
            ].map(({ Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/vehicles" title="Browse Franklin EV electric scooter models">
            Vehicles
          </Link>
          <Link to="/about" title="About Franklin EV India Pvt. Ltd.">
            About
          </Link>
          <Link to="/contact" title="Book a test ride or find a Franklin EV dealer near you">
            Contact
          </Link>
          <Link to="/contact">Book a Test Ride</Link>
        </div>

        <div className="footer-column">
          <h4>Our Models</h4>
          <Link to="/vehicles">KORO</Link>
          <Link to="/vehicles">NIX-DLX</Link>
          <Link to="/vehicles">POWER+</Link>
        </div>

        <div className="footer-column footer-contact">
          <h4>Contact Us</h4>
          <p>
            <MapPin />
            KNR Arcade, Plot No. 12, Chanikyapuri Colony, Mallapur, Hyderabad 500076, Telangana,
            India
          </p>
          <a href="mailto:sales@franklinev.co.in">
            <Mail />
            sales@franklinev.co.in
          </a>
          <p>
            <Phone />
            +91 89770 40935 · +91 89770 40936 · +91 89770 07062
          </p>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© 2026 Franklin EV India Pvt. Ltd. All rights reserved.</p>
        <p>Electric scooter enquiries, test rides and dealer support.</p>
      </div>
    </footer>
  );
}
