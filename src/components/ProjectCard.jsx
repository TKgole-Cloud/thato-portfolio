import { Link } from "react-router-dom";
import TiltCard from "./TiltCard";

/* 🎨 Accent map */
const accentStyles = {
  electric: {
    text: "text-electric",
    border: "border-electric/30",
    bg: "bg-electric/5",
    glow: "hover-glow-electric-soft",
    tag: "border-electric/20 text-electric/90",
    button: "border-electric/40 text-electric hover-glow-electric-soft",
    number: "text-electric",
  },
  neon: {
    text: "text-neon",
    border: "border-neon/30",
    bg: "bg-neon/5",
    glow: "hover-glow-neon",
    tag: "border-neon/20 text-neon/90",
    button: "border-neon/40 text-neon hover-glow-neon",
    number: "text-neon",
  },
  steel: {
    text: "text-steel",
    border: "border-steel/30",
    bg: "bg-steel/5",
    glow: "hover-glow-navy",
    tag: "border-steel/20 text-steel/90",
    button: "border-steel/40 text-steel hover-glow-navy",
    number: "text-steel",
  },
};

export default function ProjectCard({ project, index = 1, compact = false }) {
  const style = accentStyles[project.accent];

  return (
    <TiltCard
      className={`
        glass rounded-2xl overflow-hidden
        border ${style.border}
        ${style.glow}
        h-full flex flex-col
      `}
      maxTilt={compact ? 6 : 8}
    >
      {/* ============ PREVIEW AREA ============ */}
      <div
        className={`
          relative ${compact ? "h-32" : "h-40 md:h-48"}
          bg-gradient-to-br from-void via-charcoal to-navy
          border-b ${style.border}
          flex items-center justify-center
          overflow-hidden
        `}
      >
        {/* 🎨 Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(${
                project.accent === "neon"
                  ? "#00D9FF"
                  : project.accent === "electric"
                  ? "#38BDF8"
                  : "#60A5FA"
              }22 1px, transparent 1px),
              linear-gradient(90deg, ${
                project.accent === "neon"
                  ? "#00D9FF"
                  : project.accent === "electric"
                  ? "#38BDF8"
                  : "#60A5FA"
              }22 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />

        {/* 🌫️ Soft glow blob */}
        <div
          className={`
            absolute w-32 h-32 rounded-full blur-3xl opacity-40
            ${
              project.accent === "neon"
                ? "bg-neon"
                : project.accent === "electric"
                ? "bg-electric"
                : "bg-steel"
            }
          `}
        />

        {/* 🔢 Project number */}
        <span
          className={`
            relative z-10 font-mono-tech font-bold
            ${compact ? "text-5xl" : "text-6xl md:text-7xl"}
            ${style.number} opacity-80
          `}
        >
          0{index}
        </span>

        {/* ⭐ Featured badge */}
        {project.featured && !compact && (
          <div
            className={`
              absolute top-3 right-3 z-10
              glass border ${style.border}
              rounded-full px-3 py-1
              text-[10px] font-mono-tech tracking-wider
              ${style.text}
            `}
          >
            ⭐ featured
          </div>
        )}
      </div>

      {/* ============ CONTENT ============ */}
      <div className={`p-5 ${compact ? "md:p-5" : "md:p-6"} flex flex-col flex-1`}>

        {/* 🏷️ Category label */}
        {project.category && (
          <p className={`text-[10px] font-mono-tech tracking-widest uppercase mb-2 ${style.text}`}>
            {project.category}
          </p>
        )}

        {/* 📛 Title */}
        <h3
          className={`
            font-bold text-white mb-3 leading-tight
            ${compact ? "text-base" : "text-xl"}
          `}
        >
          {project.title}
        </h3>

        {/* 📝 Description */}
        <p
          className={`
            text-gray-400 mb-4 leading-relaxed flex-1
            ${compact ? "text-xs" : "text-sm"}
          `}
        >
          {project.description}
        </p>

        {/* 🏷️ Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, compact ? 3 : 6).map((tag) => (
            <span
              key={tag}
              className={`
                px-2.5 py-1 rounded-full
                border text-[10px] font-mono-tech
                ${style.tag}
              `}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > (compact ? 3 : 6) && (
            <span className="px-2.5 py-1 rounded-full border border-gray-600/40 text-[10px] text-gray-500 font-mono-tech">
              +{project.tags.length - (compact ? 3 : 6)}
            </span>
          )}
        </div>

        {/* 🔗 Actions — stacked */}
        <div className="flex flex-col gap-2 mt-auto">
          <Link
            to={`/projects/${project.slug}`}
            className="
              w-full flex items-center justify-center gap-2
              px-4 py-2.5 rounded-full
              gradient-neon text-void font-bold
              text-xs
              glow-neon hover-glow-neon-strong
              transition-all duration-300
              hover:scale-[1.02]
            "
          >
            View Project →
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              w-full flex items-center justify-center gap-2
              px-4 py-2.5 rounded-full
              glass border
              text-xs font-medium
              transition-all duration-300
              hover:scale-[1.02]
              ${style.button}
            `}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7 0-.7 0-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.2-.3-.5-1.5 0-3 0 0 1-.3 3.4 1.2a11.5 11.5 0 016.2 0c2.4-1.5 3.4-1.2 3.4-1.2.5 1.5.2 2.7 0 3 .7.8 1.2 1.9 1.2 3.1 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z" />
            </svg>
            GitHub
          </a>
        </div>

      </div>
    </TiltCard>
  );
}