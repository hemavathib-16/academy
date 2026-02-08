import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <GraduationCap className="text-accent-foreground" size={24} />
              </div>
              <div>
                <span className="font-display text-lg font-bold leading-tight block">BMS Academy</span>
                <span className="text-xs text-primary-foreground/60 tracking-wider uppercase">Professional Courses</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Bangalore's premier coaching academy for Civil Services, Commerce, and Science competitive examinations. Shaping careers since 2008.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", path: "/about" },
                { label: "Courses", path: "/courses" },
                { label: "Admissions", path: "/admissions" },
                { label: "Results", path: "/results" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2.5">
              {["UPSC Coaching", "CA / CS / CMA", "IIT-JEE Coaching", "NEET Coaching", "KPSC Coaching", "KCET Coaching"].map((item) => (
                <li key={item}>
                  <Link to="/courses" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-primary-foreground/70">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>#42, 2nd Floor, Jayanagar 4th Block, Bangalore – 560041</span>
              </li>
              <li className="flex gap-3 text-sm text-primary-foreground/70">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+91 80 1234 5678</span>
              </li>
              <li className="flex gap-3 text-sm text-primary-foreground/70">
                <Mail size={18} className="text-gold shrink-0" />
                <span>info@bmsacademy.in</span>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-primary-foreground/5 text-sm text-primary-foreground/60">
              <strong className="text-primary-foreground/80">Office Hours:</strong><br />
              Mon – Sat: 8:00 AM – 8:00 PM<br />
              Sun: 9:00 AM – 1:00 PM
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© 2026 BMS Academy for Professional Courses. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
