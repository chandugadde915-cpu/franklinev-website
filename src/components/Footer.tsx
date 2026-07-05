import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      Icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/franklin-ev",
    },
    {
      Icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/franklinev",
    },
    {
      Icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/franklinev",
    },
    {
      Icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/franklinev",
    },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/vehicles", label: "Vehicles" },
    { to: "/hyre-ev", label: "Hyre EV" },
    { to: "/about", label: "About Us" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/legal-policy", label: "Legal Policy" },
  ];

  const variants = [
    "Low Speed - 25 km/h",
    "High Speed - up to 60 km/h",
    "Lithium-ion Battery",
    "Graphene Battery",
  ];

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #111827 50%, #0b1220 100%)",
        color: "#ffffff",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "70px 24px 50px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "50px",
        }}
      >
        {/* Company Info */}
        <div>
          <img
            src="/assets/franklin-ev-logo.png"
            alt="Franklin EV"
            style={{
              maxWidth: "220px",
              height: "auto",
              marginBottom: "20px",
              filter: "brightness(0) invert(1)",
            }}
          />

          <h3
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginBottom: "16px",
              color: "#ffffff",
            }}
          >
            Franklin EV
          </h3>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.8",
              fontSize: "15px",
              marginBottom: "18px",
            }}
          >
            Franklin EV is redefining urban mobility with reliable, affordable, and smart electric
            scooters designed for modern commuters across India.
          </p>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.8",
              fontSize: "15px",
            }}
          >
            Experience innovation, performance, and sustainability with electric vehicles built for
            everyday travel.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "24px",
            }}
          >
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "#1e293b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: "22px",
              color: "#22c55e",
            }}
          >
            Quick Links
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {quickLinks.map(({ to, label }) => (
              <Link
                key={label}
                to={to}
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Variants */}
        <div>
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: "22px",
              color: "#22c55e",
            }}
          >
            Our Variants
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {variants.map((variant) => (
              <Link
                key={variant}
                to="/vehicles"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                {variant}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: "22px",
              color: "#22c55e",
            }}
          >
            Contact Us
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <MapPin
                size={20}
                style={{
                  color: "#22c55e",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              />
              <span
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.7",
                }}
              >
                Plot No. 53, Ramakrishna Nagar Colony, Chengicherla, Hyderabad, Telangana - 500095
              </span>
            </div>

            <a
              href="mailto:sales@franklinev.co.in"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                color: "#cbd5e1",
                textDecoration: "none",
              }}
            >
              <Mail size={18} style={{ color: "#22c55e" }} />
              sales@franklinev.co.in
            </a>

            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <Phone
                size={18}
                style={{
                  color: "#22c55e",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              />
              <span
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.7",
                }}
              >
                +91 89770 40935
                <br />
                +91 89770 40936
                <br />
                +91 89770 07062
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "24px",
          textAlign: "center",
          backgroundColor: "rgba(255,255,255,0.03)",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          © 2026 Franklin EV India Pvt. Ltd. All rights reserved.
        </p>

        <p
          style={{
            marginTop: "8px",
            color: "#94a3b8",
            fontSize: "13px",
          }}
        >
          Smart • Sustainable • Electric Mobility
        </p>
      </div>
    </footer>
  );
}
