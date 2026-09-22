import { motion } from "framer-motion";
import Container from "../components/Container";
import { lookingFor } from "../data/lookingFor";
import { personal } from "../data/personal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function LookingFor() {
  return (
    <section
      id="looking-for"
      className="relative py-24 md:py-32 border-t border-electric/10"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto space-y-10"
        >

          {/* ============ HEADER ============ */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <p className="text-electric font-mono-tech text-sm tracking-widest">
              <span className="text-neon">$</span> cat opportunities.txt
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient-electric">What</span>{" "}
              <span className="text-white">I'm Looking For</span>
            </h2>
            <div className="w-20 h-1 gradient-neon rounded-full mx-auto glow-neon" />
          </motion.div>

          {/* ============ MAIN CARD ============ */}
          <motion.div
            variants={itemVariants}
            className="
              glass rounded-2xl p-8 md:p-10
              border border-electric/20
              relative overflow-hidden
            "
          >
            <div className="relative z-10 space-y-8">

              {/* 📝 Intro */}
              <p className="text-electric text-lg text-center leading-relaxed font-medium">
                {lookingFor.intro}
              </p>

              {/* 📋 Areas Grid */}
              <div className="grid sm:grid-cols-2 gap-3">
                {lookingFor.areas.map((area) => (
                  <div
                    key={area}
                    className="
                      flex items-center gap-3
                      px-4 py-3 rounded-xl
                      glass border border-electric/15
                      hover:border-neon/40 hover-glow-electric-soft
                      transition-all duration-300
                    "
                  >
                    <span className="text-neon text-sm">▸</span>
                    <span className="text-sm text-white">{area}</span>
                  </div>
                ))}
              </div>

              {/* 📝 Outro */}
              <p className="text-gray-400 text-center leading-relaxed">
                {lookingFor.outro}
              </p>

              {/* 🎯 CTA */}
              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="
                    inline-flex items-center gap-2
                    gradient-neon text-void font-bold
                    px-6 py-3 rounded-full
                    glow-neon hover-glow-neon-strong
                    transition-all duration-300
                    hover:scale-[1.03]
                  "
                >
                  Get In Touch
                </a>
                <a
                  href={personal.resumeUrl}
                  download
                  className="
                    inline-flex items-center gap-2
                    glass border border-neon/40 text-neon font-medium
                    px-6 py-3 rounded-full
                    hover-glow-neon
                    transition-all duration-300
                    hover:scale-[1.03]
                  "
                >
                  Download CV
                </a>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}