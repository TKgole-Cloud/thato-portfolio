import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🚫 Prevent body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-navy py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">

          {/* 💡 Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-neon text-glow-neon-soft tracking-tight z-50 relative"
            onClick={closeMenu}
          >
            TK<span className="text-electric">.</span>
          </a>

          {/* 🎯 Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-neon text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

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
            onClick={closeMenu}
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="
                      text-3xl font-bold text-white
                      hover:text-neon hover:text-glow-neon-soft
                      transition-all duration-300
                    "
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* ⚡ Footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 text-xs font-mono-tech text-gray-600"
            >
              <span className="text-neon">$</span> navigate --menu
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}