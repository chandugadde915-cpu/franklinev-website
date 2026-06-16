import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <div className="footer-logo">
            <img
              src="/assets/franklin-ev-logo.png"
              alt="Franklin EV"
              className="site-logo-image"
              width={2674}
              height={598}
            />
          </div>
          <p>Franklin EV - Smart Electric Scooters In Hyderabad</p>
          <p>
            Franklin EV is a leading electric scooter company in Hyderabad offering innovative,
            reliable and affordable electric mobility solutions for modern riders.
          </p>
          <p>
            Whether you're searching for a long range electric scooter in Hyderabad, a smart
            electric scooter with cruise control or an electric scooter for daily commute, Franklin
            EV delivers the performance, technology and value you need.
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
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
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
          <Link to="/hyre-ev" title="Hyre EV Powered by Franklin EV scooter rentals">
            Hyre EV
          </Link>
          <Link to="/about" title="About Franklin EV India Pvt. Ltd.">
            About
          </Link>
          <Link to="/blog" title="Read Franklin EV electric scooter guides and ownership tips">
            Blog
          </Link>
          <Link to="/contact" title="Book a test ride or find a Franklin EV dealer near you">
            Contact
          </Link>
          <Link to="/contact">Book a Test Ride</Link>
          <Link to="/legal-policy">Legal Policy</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-column">
          <h4>Our Variants</h4>
          <Link to="/vehicles">Low Speed - 25 km/h</Link>
          <Link to="/vehicles">High Speed - up to 60 km/h</Link>
          <Link to="/vehicles">Lithium-ion battery</Link>
          <Link to="/vehicles">Graphene battery</Link>
        </div>

        <div className="footer-column footer-contact">
          <h4>Contact Us</h4>
          <p>
            <MapPin />
            Plot No. 53, Ramakrishna Nagar Colony, Chengicherla, Hyderabad, Telangana - 500095
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
