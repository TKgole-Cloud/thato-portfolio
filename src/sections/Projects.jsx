import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projects, projectCategories } from "../data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 border-t border-electric/10"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-16"
        >

          {/* ============ HEADER ============ */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <p className="text-electric font-mono-tech text-sm tracking-widest">
              <span className="text-neon">$</span> git log --oneline
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient-electric">Featured</span>{" "}
              <span className="text-white">Projects</span>
            </h2>
            <div className="w-20 h-1 gradient-neon rounded-full mx-auto glow-neon" />
            <p className="text-gray-400 max-w-2xl mx-auto pt-2">
              Real infrastructure, real deployments, real security. Here's what I've been building on Azure.
            </p>
          </motion.div>

          {/* ============ CATEGORY TABS ============ */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
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
                  {cat.label}
                </button>
              );
            })}
          </motion.div>

          {/* ============ FEATURED PROJECTS ============ */}
          {featuredProjects.length > 0 && (
            <motion.div layout className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-neon font-mono-tech text-xs tracking-widest">
                  ⭐ featured
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-neon/30 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {featuredProjects.map((project, i) => (
                    <motion.div
                      key={project.title}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ProjectCard project={project} index={i + 1} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* ============ OTHER PROJECTS ============ */}
          {otherProjects.length > 0 && (
            <motion.div layout className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-electric font-mono-tech text-xs tracking-widest">
                  ▸ more work
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-electric/30 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <AnimatePresence mode="popLayout">
                  {otherProjects.map((project, i) => (
                    <motion.div
                      key={project.title}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ProjectCard
                        project={project}
                        index={featuredProjects.length + i + 1}
                        compact
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* ============ CTA — View All on GitHub ============ */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <a
              href="https://github.com/TKgole-Cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                glass border border-electric/30
                px-8 py-3 rounded-full
                text-electric font-medium
                hover:border-neon hover:text-neon hover:glow-neon
                transition-all duration-300
                hover:scale-105
              "
            >
              <span className="font-mono-tech text-sm">$</span>
              View all repos on GitHub
              <span>→</span>
            </a>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}