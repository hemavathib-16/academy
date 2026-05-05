import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Admissions", path: "/admissions" },
  { label: "Faculty", path: "/faculty" },
  { label: "Results", path: "/results" },
  { label: "Gallery", path: "/infrastructure" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
  { label: "Sister Institutions", path: "/sister-institutions" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone size={14} /> +91 80 1234 5678</span>
            <span className="flex items-center gap-1.5"><Mail size={14} /> info@bmsacademy.in</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/admissions" className="hover:text-gold transition-colors">Apply Now</Link>
            <span className="text-primary-foreground/40">|</span>
            <Link to="/contact" className="hover:text-gold transition-colors">Book Free Counselling</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-lg shadow-lg" : "bg-card shadow-sm"}`}>
        <div className="container-custom flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoImg} alt="BMS Academy" className="h-16 w-auto" />
            {/* <div>
              <img src="Logo" alt="" srcset="" />
              <span className="font-display text-lg lg:text-xl font-bold text-primary leading-tight block">BMS Academy</span>
              <span className="text-[10px] lg:text-xs text-muted-foreground tracking-wider uppercase">Professional Courses</span>
            </div> */}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-gold bg-primary/5"
                    : "text-foreground/80 hover:text-gold hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="ml-3 px-5 py-2.5 bg-gold text-accent-foreground rounded-lg text-sm font-semibold hover:bg-gold-dark transition-colors gold-shadow"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="container-custom py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-gold bg-primary/5"
                        : "text-foreground/80 hover:text-gold hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 flex flex-col gap-2">
                  <Link
                    to="/admissions"
                    className="block text-center px-5 py-3 bg-gold text-accent-foreground rounded-lg text-sm font-semibold"
                  >
                    Apply Now
                  </Link>
                  <Link
                    to="/contact"
                    className="block text-center px-5 py-3 border border-primary text-primary rounded-lg text-sm font-semibold"
                  >
                    Book Free Counselling
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
