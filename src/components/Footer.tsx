import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Zap, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 rounded-xl bg-primary-gradient grid place-items-center text-primary-foreground">
              <Zap className="w-5 h-5" strokeWidth={2.5} />
            </span>
            <span className="font-display font-bold text-lg text-ink">
              Franklin <span className="text-primary">EV</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Cleaner. Quieter. Smarter. Premium electric scooters built in India
            for cleaner cities and smarter commutes.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-ink mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/vehicles" className="hover:text-primary">Vehicles</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Book a Test Ride</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-ink mb-4">Models</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/vehicles" className="hover:text-primary">KORO</Link></li>
            <li><Link to="/vehicles" className="hover:text-primary">NIX-DLX</Link></li>
            <li><Link to="/vehicles" className="hover:text-primary">POWER+</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-ink mb-4">Reach us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              <span>KNR Arcade, Plot No. 12, Chanikyapuri Colony, Mallapur, Hyderabad 500076, Telangana, India</span>
            </li>
            <li className="flex gap-2">
              <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              <a href="mailto:sales@franklinev.co.in" className="hover:text-primary">sales@franklinev.co.in</a>
            </li>
            <li className="flex gap-2">
              <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              <span>+91 89770 40935 · +91 89770 40936 · +91 89770 07062</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© Franklin EV India Pvt. Ltd. All rights reserved.</p>
          <p>Cleaner. Quieter. Smarter.</p>
        </div>
      </div>
    </footer>
  );
}
