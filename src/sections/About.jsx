import { motion } from "framer-motion";
import Container from "../components/Container";
import { about } from "../data/About";
import { personal } from "../data/personal";

/* 🎬 Shared animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

/* 🎨 Map accent names to Tailwind-safe class strings */
const accentStyles = {
  electric: {
    text: "text-electric",
    border: "border-electric/30",
    glow: "hover:glow-electric-soft",
    bg: "bg-electric/5",
  },
  neon: {
    text: "text-neon",
    border: "border-neon/30",
    glow: "hover:glow-neon",
    bg: "bg-neon/5",
  },
  steel: {
    text: "text-steel",
    border: "border-steel/30",
    glow: "hover:glow-navy",
    bg: "bg-steel/5",
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 border-t border-electric/10"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >

          {/* ============ SECTION HEADER ============ */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <p className="text-electric font-mono-tech text-sm tracking-widest">
              <span className="text-neon">$</span> cat about.md
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient-electric">About</span>{" "}
              <span className="text-white">Me</span>
            </h2>
            <div className="w-20 h-1 gradient-neon rounded-full mx-auto glow-neon" />
          </motion.div>

          {/* ============ GRID: BIO + TERMINAL ============ */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* 📖 Bio card (3/5 width) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 glass rounded-2xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold text-neon mb-6 flex items-center gap-3">
                <span className="text-electric font-mono-tech text-lg">01.</span>
                Who I Am
              </h3>
              <p className="text-electric text-lg mb-6 leading-relaxed font-medium">
                {about.intro}
              </p>
              <div className="space-y-4">
                {about.bio.map((paragraph, i) => (
                  <p key={i} className="text-gray-400 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* 🖥️ Terminal card (2/5 width) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 glass-navy border-neon rounded-2xl overflow-hidden glow-navy"
            >
              {/* Terminal top bar with dots */}
              <div className="flex items-center gap-2 px-4 py-3 bg-void/50 border-b border-electric/20">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-xs text-gray-500 ml-3 font-mono-tech">
                  thato@azure:~$
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono-tech text-sm space-y-2 leading-relaxed">
                <p className="text-gray-500">$ whoami --verbose</p>
                <p className="text-electric">
                  <span className="text-neon">name:</span> {personal.name}
                </p>
                <p className="text-electric">
                  <span className="text-neon">role:</span> Cloud Engineer
                </p>
                <p className="text-electric">
                  <span className="text-neon">location:</span> {personal.location}
                </p>
                <p className="text-electric">
                  <span className="text-neon">cloud:</span> Microsoft Azure ☁️
                </p>
                <p className="text-electric">
                  <span className="text-neon">stack:</span> Terraform, Docker, K8s-AKS, ACR
                </p>
                <p className="text-electric">
                  <span className="text-neon">status:</span>{" "}
                  <span className="text-green-400">● available</span>
                </p>
                <p className="text-neon animate-pulse">▊</p>
              </div>
            </motion.div>

          </div>

          {/* ============ SERVICES GRID ============ */}
          <div className="space-y-10">
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-center"
            >
              <span className="text-electric font-mono-tech text-lg block mb-2">02.</span>
              What I <span className="text-gradient-neon">Do</span>
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {about.services.map((service) => {
                const style = accentStyles[service.accent];
                return (
                  <motion.div
                    key={service.title}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className={`
                      glass rounded-2xl p-6
                      border ${style.border}
                      transition-all duration-300
                      ${style.glow}
                    `}
                  >
                    <div className={`
                      w-14 h-14 rounded-xl ${style.bg}
                      border ${style.border}
                      flex items-center justify-center
                      text-3xl mb-4
                    `}>
                      {service.icon}
                    </div>
                    <h4 className={`text-lg font-bold mb-2 ${style.text}`}>
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ============ STATS ROW ============ */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:p-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {about.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-neon text-glow-neon-soft">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 mt-2 font-mono-tech tracking-wider">
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