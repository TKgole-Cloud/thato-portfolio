import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { projectsDetail } from "../data/projectsDetail";
import { personal } from "../data/personal";

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

const accentStyles = {
  electric: {
    text: "text-electric",
    border: "border-electric/30",
    bg: "bg-electric/5",
  },
  neon: {
    text: "text-neon",
    border: "border-neon/30",
    bg: "bg-neon/5",
  },
  steel: {
    text: "text-steel",
    border: "border-steel/30",
    bg: "bg-steel/5",
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsDetail[slug];

  /* ❌ Not found */
  if (!project) {
    return (
      <section className="min-h-screen flex items-center pt-32 pb-20">
        <Container>
          <div className="text-center space-y-6">
            <p className="text-electric font-mono-tech text-sm tracking-widest">
              <span className="text-neon">$</span> cat /projects/{slug}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Project Not Found
            </h1>
            <p className="text-gray-400">
              This project doesn't exist (yet).
            </p>
            <Link
              to="/"
              className="
                inline-flex items-center gap-2
                gradient-neon text-void font-bold
                px-6 py-3 rounded-full
                glow-neon
                transition-all duration-300
              "
            >
              ← Back to Portfolio
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const style = accentStyles[project.accent] || accentStyles.electric;

  return (
    <article className="pt-32 pb-20">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-16"
        >

          {/* ============ BREADCRUMB ============ */}
          <motion.div variants={itemVariants}>
            <Link
              to="/"
              className="
                inline-flex items-center gap-2
                text-xs font-mono-tech text-gray-500
                hover:text-neon
                transition-colors duration-200
              "
            >
              ← Back to Portfolio
            </Link>
          </motion.div>

          {/* ============ HERO ============ */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`
                px-3 py-1 rounded-full
                ${style.bg} border ${style.border}
                text-[10px] font-mono-tech tracking-widest uppercase
                ${style.text}
              `}>
                {project.category}
              </span>
              <span className="text-[10px] font-mono-tech text-gray-500 tracking-widest uppercase">
                Project · {project.year || "2026"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight text-white">
              {project.title}
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
              {project.overview}
            </p>

            {/* 🔗 Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    gradient-neon text-void font-bold
                    px-6 py-3 rounded-full
                    glow-neon hover-glow-neon-strong
                    transition-all duration-300
                    hover:scale-[1.03]
                  "
                >
                  View on GitHub →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    glass border border-neon/40 text-neon font-medium
                    px-6 py-3 rounded-full
                    hover-glow-neon
                    transition-all duration-300
                  "
                >
                  Live Demo →
                </a>
              )}
            </div>
          </motion.div>

          {/* ============ ARCHITECTURE ============ */}
          {project.architecture && (
            <motion.section variants={itemVariants} className="space-y-4">
              <SectionHeading icon="🏗️" label="Architecture" />
              <div className="glass rounded-2xl p-6 md:p-8 overflow-hidden">
                <pre className="
                  font-mono-tech text-sm text-electric
                  leading-relaxed
                  overflow-x-auto whitespace-pre
                ">
                  {project.architecture}
                </pre>
              </div>
            </motion.section>
          )}

          {/* ============ TECHNOLOGIES ============ */}
          {project.technologies && (
            <motion.section variants={itemVariants} className="space-y-4">
              <SectionHeading icon="⚙️" label="Technologies" />
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`
                      px-3 py-1.5 rounded-full
                      glass border ${style.border}
                      text-xs font-mono-tech ${style.text}
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>
          )}

          {/* ============ IMPLEMENTATION ============ */}
          {project.implementation && (
            <motion.section variants={itemVariants} className="space-y-4">
              <SectionHeading icon="🔧" label="Implementation" />
              <div className="glass rounded-2xl p-6 md:p-8 space-y-4">
                {project.implementation.map((para, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.section>
          )}

          {/* ============ SECURITY DECISIONS ============ */}
          {project.securityDecisions && (
            <motion.section variants={itemVariants} className="space-y-4">
              <SectionHeading icon="🔒" label="Security Decisions" />
              <div className="glass rounded-2xl p-6 md:p-8 space-y-4">
                {project.securityDecisions.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-neon mt-1">▸</span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ============ TROUBLESHOOTING ============ */}
          {project.troubleshooting && (
            <motion.section variants={itemVariants} className="space-y-4">
              <SectionHeading icon="🔍" label="Troubleshooting" />
              <div className="space-y-4">
                {project.troubleshooting.map((issue, i) => (
                  <div
                    key={i}
                    className="glass rounded-2xl p-6 border border-electric/20"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-[10px] font-mono-tech text-electric tracking-widest uppercase mt-1 shrink-0">
                          Problem
                        </span>
                        <p className="text-sm text-white">{issue.problem}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[10px] font-mono-tech text-electric tracking-widest uppercase mt-1 shrink-0">
                          Cause
                        </span>
                        <p className="text-sm text-gray-400">{issue.cause}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[10px] font-mono-tech text-green-400 tracking-widest uppercase mt-1 shrink-0">
                          Fix
                        </span>
                        <p className="text-sm text-gray-300">{issue.fix}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ============ LESSONS ============ */}
          {project.lessons && (
            <motion.section variants={itemVariants} className="space-y-4">
              <SectionHeading icon="📝" label="Lessons Learned" />
              <div className="glass rounded-2xl p-6 md:p-8 space-y-3">
                {project.lessons.map((lesson, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-neon mt-1">✓</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {lesson}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ============ FINAL CTA ============ */}
          <motion.section variants={itemVariants} className="pt-6">
            <div className="glass rounded-2xl p-8 md:p-10 text-center space-y-4 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-neon/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-electric/10 blur-3xl" />

              <div className="relative z-10 space-y-4">
                <p className="text-[10px] font-mono-tech text-electric tracking-widest uppercase">
                  Interested in this work?
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Let's talk about it
                </h3>
                <div className="flex flex-wrap gap-3 justify-center pt-2">
                  <Link
                    to="/#contact"
                    className="
                      inline-flex items-center gap-2
                      gradient-neon text-void font-bold
                      px-6 py-3 rounded-full
                      glow-neon
                      transition-all duration-300
                      hover:scale-[1.03]
                    "
                  >
                    Get In Touch
                  </Link>
                  <a
                    href={`mailto:${personal.email}`}
                    className="
                      inline-flex items-center gap-2
                      glass border border-neon/40 text-neon font-medium
                      px-6 py-3 rounded-full
                      hover-glow-neon
                      transition-all duration-300
                    "
                  >
                    Email Me
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

        </motion.div>
      </Container>
    </article>
  );
}

/* 📝 Reusable section heading */
function SectionHeading({ icon, label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl">{icon}</span>
      <h2 className="text-xs font-mono-tech text-electric tracking-widest uppercase">
        {label}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-electric/20 to-transparent" />
    </div>
  );
}