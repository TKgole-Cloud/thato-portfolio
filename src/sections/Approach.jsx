import { motion } from "framer-motion";
import Container from "../components/Container";
import { approach } from "../data/approach";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative py-24 md:py-32 border-t border-electric/10"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >

          {/* ============ HEADER ============ */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <p className="text-electric font-mono-tech text-sm tracking-widest">
              <span className="text-neon">$</span> cat workflow.md
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient-electric">How</span>{" "}
              <span className="text-white">I Build</span>
            </h2>
            <div className="w-20 h-1 gradient-neon rounded-full mx-auto glow-neon" />
            <p className="text-gray-400 max-w-2xl mx-auto pt-2 leading-relaxed">
              {approach.intro}
            </p>
          </motion.div>

          {/* ============ VISUAL FLOW ============ */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            {approach.steps.map((step, i) => (
              <div key={step.title} className="flex items-center gap-3 md:gap-4">
                <span className="
                  px-4 py-2 rounded-full
                  glass border border-neon/30
                  font-mono-tech text-xs md:text-sm
                  text-neon tracking-wider uppercase
                ">
                  {step.title}
                </span>
                {i !== approach.steps.length - 1 && (
                  <span className="text-electric/40 text-lg">→</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* ============ STEPS GRID ============ */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {approach.steps.map((step) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="
                  glass rounded-2xl p-6
                  border border-electric/20
                  hover:border-neon/40 hover-glow-electric-soft
                  transition-all duration-300
                  relative overflow-hidden
                "
              >
                <div className="relative z-10 space-y-3">

                  {/* 🔢 Number + Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-electric text-sm">
                      {step.number}
                    </span>
                    <span className="text-2xl">{step.icon}</span>
                  </div>

                  {/* 🏷️ Title */}
                  <h3 className="text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  {/* 📝 Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </Container>
    </section>
  );
}