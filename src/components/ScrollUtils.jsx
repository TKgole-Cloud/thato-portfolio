import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/* 📊 Top-of-page progress bar */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed top-0 left-0 right-0 z-[60]
        h-[3px] origin-left
        gradient-neon
        shadow-[0_0_10px_rgba(0,217,255,0.6)]
      "
    />
  );
}

/* ⬆️ Scroll-to-top button */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollUp}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.7,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
      aria-label="Scroll to top"
      className="
        fixed bottom-8 right-8 z-50
        w-12 h-12 rounded-full
        glass border-neon text-neon
        flex items-center justify-center
        text-lg font-bold
        hover-glow-neon hover:scale-110
        transition-all duration-300
      "
    >
      ↑
    </motion.button>
  );
}