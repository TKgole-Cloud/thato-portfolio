import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "../data/personal";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  /* Track scroll for glass effect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* 🎯 Handle nav click — works from anywhere */
  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setMobileOpen(false);

    // If already on home page → smooth scroll directly
    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // On another page → go home first, then scroll to hash
      navigate("/" + hash);
    }
  };

  /* 🎯 When arriving on home page with a hash, auto-scroll */
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // Small delay so the page has rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-navy py-3 border-b border-electric/10"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">

          {/* 💡 Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl font-bold text-white tracking-tight z-50 relative hover:text-neon transition-colors duration-300"
          >
            {personal.initials}
            <span className="text-neon">.</span>
          </Link>

          {/* 🎯 Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* 📄 Download CV — desktop */}
          <a
            href={personal.resumeUrl}
            download
            className="
              hidden md:inline-flex items-center gap-2
              px-4 py-2 rounded-full
              border border-neon/40 text-neon text-sm font-medium
              hover-glow-neon hover:border-neon
              transition-all duration-300
            "
          >
            Download CV
          </a>

          {/* 📱 Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-neon text-2xl z-50 relative w-10 h-10 flex items-center justify-center"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>

        </div>
      </nav>

      {/* 📱 Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed inset-0 z-40 md:hidden
              bg-void/95 backdrop-blur-xl
              flex flex-col items-center justify-center
            "
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="
                      text-2xl font-bold text-white
                      hover:text-neon
                      transition-colors duration-300
                      cursor-pointer
                    "
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * navLinks.length, duration: 0.25 }}
              >
                <a
                  href={personal.resumeUrl}
                  download
                  onClick={() => setMobileOpen(false)}
                  className="
                    mt-4 inline-flex items-center gap-2
                    px-6 py-3 rounded-full
                    gradient-neon text-void font-bold text-sm
                    glow-neon
                  "
                >
                  Download CV
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}