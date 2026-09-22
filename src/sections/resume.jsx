import { motion } from "framer-motion";
import Container from "../components/Container";
import { personal } from "../data/personal";
import { resume } from "../data/resume";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-24 md:py-32 border-t border-electric/10"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-16"
        >

          {/* ============ HEADER ============ */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <p className="text-electric font-mono-tech text-sm tracking-widest">
              <span className="text-neon">$</span> cat resume.pdf
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient-electric">My</span>{" "}
              <span className="text-white">Resume</span>
            </h2>
            <div className="w-20 h-1 gradient-neon rounded-full mx-auto glow-neon" />
          </motion.div>

          {/* ============ GRID: DOWNLOAD + HIGHLIGHTS ============ */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* ============ LEFT: BIG DOWNLOAD CARD (3/5) ============ */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 glass rounded-2xl p-8 md:p-10 relative overflow-hidden"
            >
              {/* 🌫️ Ambient glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-neon/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-electric/10 blur-3xl" />

              {/* 📄 Icon + header */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl glass-electric border border-neon/40 flex items-center justify-center glow-electric-soft">
                    <span className="text-3xl">📄</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {resume.headline}
                    </h3>
                    <p className="text-xs font-mono-tech text-gray-500 mt-1">
                      updated · {personal.resumeLastUpdated}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed max-w-2xl">
                  {resume.description}
                </p>

                {/* 🎯 Primary download button */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={personal.resumeUrl}
                    download
                    className="
                      inline-flex items-center gap-3
                      gradient-neon text-void font-bold
                      px-8 py-3.5 rounded-full
                      glow-neon hover:glow-neon-strong
                      transition-all duration-300
                      hover:scale-105
                    "
                  >
                    <span>⬇️</span>
                    Download PDF
                  </a>

                  <a
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-3
                      glass border border-neon/40 text-neon font-medium
                      px-8 py-3.5 rounded-full
                      hover:glow-neon hover:border-neon
                      transition-all duration-300
                      hover:scale-105
                    "
                  >
                    <span>👁️</span>
                    Preview
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ============ RIGHT: QUICK FACTS (2/5) ============ */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-4"
            >
              {resume.highlights.map((item) => (
                <div
                  key={item.label}
                  className="
                    glass rounded-xl p-5
                    border border-electric/20
                    flex items-start gap-4
                    hover:border-neon/40 hover:glow-electric-soft
                    transition-all duration-300
                  "
                >
                  <div className="
                    w-11 h-11 rounded-lg
                    bg-electric/5 border border-electric/30
                    flex items-center justify-center
                    text-xl shrink-0
                  ">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-mono-tech text-electric tracking-widest uppercase">
                      {item.label}
                    </p>
                    <p className="text-sm text-white mt-1 leading-snug">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ============ STATS ROW ============ */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:p-10"
          >
            <div className="grid grid-cols-3 gap-6">
              {resume.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-neon text-glow-neon-soft">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-500 mt-2 font-mono-tech tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}