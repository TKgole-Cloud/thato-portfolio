import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/Container";
import TiltCard from "../components/TiltCard";
import { skillCategories, skills, learningSkills } from "../data/skills";

/* 🎬 Animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

/* 🎨 Accent map (same pattern as About) */
const accentStyles = {
  electric: {
    text: "text-electric",
    border: "border-electric/30",
    bg: "bg-electric/5",
    glow: "hover:glow-electric-soft",
  },
  neon: {
    text: "text-neon",
    border: "border-neon/30",
    bg: "bg-neon/5",
    glow: "hover:glow-neon",
  },
  steel: {
    text: "text-steel",
    border: "border-steel/30",
    bg: "bg-steel/5",
    glow: "hover:glow-navy",
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
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
              <span className="text-neon">$</span> ls ~/skills
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient-electric">Tech</span>{" "}
              <span className="text-white">Arsenal</span>
            </h2>
            <div className="w-20 h-1 gradient-neon rounded-full mx-auto glow-neon" />
            <p className="text-gray-400 max-w-2xl mx-auto pt-2">
              The tools I use to design, deploy, and secure cloud infrastructure on Microsoft Azure.
            </p>
          </motion.div>

          {/* ============ CATEGORY TABS ============ */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    flex items-center gap-2
                    px-5 py-2.5 rounded-full
                    text-sm font-medium
                    transition-all duration-300
                    ${
                      isActive
                        ? "gradient-neon text-void glow-neon"
                        : "glass border border-electric/20 text-gray-300 hover:border-neon hover:text-neon"
                    }
                  `}
                >
                  <Icon className="text-base" />
                  {cat.label}
                </button>
              );
            })}
          </motion.div>

          {/* ============ SKILLS GRID ============ */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => {
                const Icon = skill.icon;
                const style = accentStyles[skill.accent];
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TiltCard
                      className={`
                        glass rounded-2xl p-6
                        border ${style.border}
                        ${style.glow}
                        h-full
                      `}
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className={`
                          w-14 h-14 rounded-xl ${style.bg}
                          border ${style.border}
                          flex items-center justify-center
                        `}>
                          <Icon className={`text-3xl ${style.text}`} />
                        </div>
                        <h4 className="text-sm font-semibold text-white leading-tight">
                          {skill.name}
                        </h4>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* ============ FOOTER COUNT ============ */}
          <motion.p
            variants={itemVariants}
            className="text-center text-xs text-gray-600 font-mono-tech"
          >
            // {filteredSkills.length} {filteredSkills.length === 1 ? "skill" : "skills"} shown
          </motion.p>

          {/* ============ STILL LEARNING ============ */}
          <motion.div variants={itemVariants} className="space-y-8 pt-8">
            <div className="text-center space-y-3">
              <p className="text-electric font-mono-tech text-sm tracking-widest">
                <span className="text-neon">$</span> cat roadmap.txt
              </p>
              <h3 className="text-2xl md:text-3xl font-bold">
                Currently <span className="text-gradient-neon">Learning</span>
              </h3>
              <div className="w-16 h-1 gradient-electric rounded-full mx-auto glow-electric-soft" />
              <p className="text-gray-500 text-sm max-w-xl mx-auto pt-2">
                Actively expanding my stack — always in motion, always growing. 📚
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {learningSkills.map((skill) => {
                const Icon = skill.icon;
                const style = accentStyles[skill.accent];
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4 }}
                    className={`
                      glass rounded-2xl p-5
                      border border-dashed ${style.border}
                      flex items-center gap-3
                      transition-all duration-300
                      ${style.glow}
                    `}
                  >
                    <div className={`
                      w-11 h-11 rounded-lg ${style.bg}
                      border ${style.border}
                      flex items-center justify-center shrink-0
                    `}>
                      <Icon className={`text-xl ${style.text}`} />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white leading-tight">
                        {skill.name}
                      </p>
                      <p className="text-[10px] font-mono-tech text-gray-500 mt-0.5">
                        in progress...
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}