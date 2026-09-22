import { motion } from "framer-motion";
import Container from "../components/Container";
import { certifications } from "../data/certifications";

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

/* 🎨 Accent map */
const accentStyles = {
  electric: {
    text: "text-electric",
    border: "border-electric/30",
    bg: "bg-electric/5",
    glow: "hover:glow-electric-soft",
    badge: "from-electric-dark to-electric",
  },
  neon: {
    text: "text-neon",
    border: "border-neon/30",
    bg: "bg-neon/5",
    glow: "hover:glow-neon",
    badge: "from-neon-dark to-neon",
  },
  steel: {
    text: "text-steel",
    border: "border-steel/30",
    bg: "bg-steel/5",
    glow: "hover:glow-navy",
    badge: "from-navy-light to-steel",
  },
};

export default function Certifications() {
  return (
    <section
      id="certifications"
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
              <span className="text-neon">$</span> cat certifications.log
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient-electric">Certifications</span>
            </h2>
            <div className="w-20 h-1 gradient-neon rounded-full mx-auto glow-neon" />
            <p className="text-gray-400 max-w-2xl mx-auto pt-2">
              Microsoft-verified proof of cloud, DevOps, and security expertise.
            </p>
          </motion.div>

          {/* ============ EARNED CERTS ============ */}
          {certifications.earned.length > 0 && (
            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <span className="text-green-400 font-mono-tech text-xs tracking-widest">
                  ✓ earned
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.earned.map((cert) => (
                  <CertCard key={cert.code} cert={cert} variant="earned" />
                ))}
              </div>
            </div>
          )}

          {/* ============ IN-PROGRESS CERTS ============ */}
          {certifications.inProgress.length > 0 && (
            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <span className="text-electric font-mono-tech text-xs tracking-widest">
                  ▸ coming soon
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-electric/30 to-transparent" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.inProgress.map((cert) => (
                  <CertCard key={cert.code} cert={cert} variant="inProgress" />
                ))}
              </div>
            </div>
          )}

        </motion.div>
      </Container>
    </section>
  );
}

/* 🏅 The Cert Card — handles both earned & in-progress variants */
function CertCard({ cert, variant }) {
  const style = accentStyles[cert.accent];
  const isEarned = variant === "earned";

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className={`
        glass rounded-2xl p-6
        border ${style.border}
        ${style.glow}
        transition-all duration-300
        relative overflow-hidden
        ${!isEarned ? "border-dashed" : ""}
      `}
    >
      {/* 🌫️ Corner glow */}
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-30 ${
          cert.accent === "neon" ? "bg-neon" : cert.accent === "electric" ? "bg-electric" : "bg-steel"
        }`}
      />

      <div className="relative z-10 space-y-4">

        {/* 🏷️ Cert Code Badge */}
        <div className="flex items-start justify-between gap-3">
          <div className={`
            px-4 py-2 rounded-xl
            ${style.bg} border ${style.border}
            font-mono-tech font-bold text-lg
            ${style.text}
          `}>
            {cert.code}
          </div>

          {/* ✅ Earned check / ⏳ In-progress spinner */}
          <div className={`
            w-8 h-8 rounded-full
            flex items-center justify-center
            ${isEarned
              ? "bg-green-500/10 border border-green-500/40 text-green-400"
              : "glass border border-electric/30 text-electric"
            }
          `}>
            {isEarned ? "✓" : "⏳"}
          </div>
        </div>

        {/* 📛 Cert Name */}
        <div>
          <h3 className="text-lg font-bold text-white leading-tight">
            {cert.name}
          </h3>
          <p className="text-xs text-gray-500 mt-1 font-mono-tech">
            {cert.issuer}
            {isEarned && cert.issued && ` · ${cert.issued}`}
          </p>
        </div>

        {/* 📝 Description */}
        <p className="text-sm text-gray-400 leading-relaxed">
          {cert.description}
        </p>

        {/* ⏳ Progress bar (in-progress only) */}
        {!isEarned && cert.progress !== undefined && (
          <div className="pt-2">
            <div className="flex justify-between text-[10px] font-mono-tech text-gray-500 mb-1">
              <span>progress</span>
              <span className={style.text}>{cert.progress}%</span>
            </div>
            <div className="w-full h-1 bg-void/80 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${cert.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className={`h-full bg-gradient-to-r ${style.badge} rounded-full`}
              />
            </div>
          </div>
        )}

        {/* 🔗 Verify button (earned + has URL) */}
        {isEarned && cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex items-center gap-2
              px-4 py-2 rounded-full
              glass border
              text-xs font-medium
              transition-all duration-300
              hover:scale-[1.03]
              ${style.border} ${style.text} ${style.glow}
            `}
          >
            🔗 Verify credential
          </a>
        )}

        {/* 🔒 Placeholder for earned certs without a verify URL yet */}
        {isEarned && !cert.verifyUrl && (
          <p className="text-[10px] font-mono-tech text-gray-600 pt-1">
            {/* add credential URL when available */}
          </p>
        )}

      </div>
    </motion.div>
  );
}