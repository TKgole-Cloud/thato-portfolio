import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { personal } from "../data/personal";
import { contact } from "../data/contact";

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

/* 🎯 Accent map — now uses hover-glow-* classes */
const accentStyles = {
  neon: {
    text: "text-neon",
    border: "border-neon/30",
    bg: "bg-neon/5",
    glow: "hover-glow-neon",
    glowColor: "bg-neon",
  },
  electric: {
    text: "text-electric",
    border: "border-electric/30",
    bg: "bg-electric/5",
    glow: "hover-glow-electric",
    glowColor: "bg-electric",
  },
  steel: {
    text: "text-steel",
    border: "border-steel/30",
    bg: "bg-steel/5",
    glow: "hover-glow-navy",
    glowColor: "bg-steel",
  },
};

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const contactItems = [
    {
      key: "email",
      icon: "📧",
      label: "Email",
      value: personal.email,
      action: "copy",
      copyValue: personal.email,
      accent: "neon",
    },
    {
      key: "phone",
      icon: "📱",
      label: "Phone",
      value: personal.phone,
      action: "copy",
      copyValue: personal.phone,
      accent: "electric",
    },
    {
      key: "linkedin",
      icon: "💼",
      label: "LinkedIn",
      value:
        personal.socials
          .find((s) => s.name === "LinkedIn")
          ?.href.replace("https://", "") || "",
      action: "open",
      openUrl:
        personal.socials.find((s) => s.name === "LinkedIn")?.href || "#",
      accent: "steel",
    },
  ];

  return (
    <section
      id="contact"
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
              <span className="text-neon">$</span> ping thato --contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient-electric">Get In</span>{" "}
              <span className="text-white">Touch</span>
            </h2>
            <div className="w-20 h-1 gradient-neon rounded-full mx-auto glow-neon" />
            <p className="text-gray-400 max-w-2xl mx-auto pt-2 leading-relaxed">
              {contact.description}
            </p>
          </motion.div>

          {/* ============ AVAILABILITY BANNER ============ */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="glass border border-green-500/30 rounded-full px-6 py-3 inline-flex items-center gap-3">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  contact.status.available
                    ? "bg-green-400 animate-pulse"
                    : "bg-gray-500"
                }`}
              />
              <span className="text-sm font-medium text-green-400">
                {contact.status.label}
              </span>
              <span className="text-xs text-gray-500 font-mono-tech">
                · {contact.status.subtext}
              </span>
            </div>
          </motion.div>

          {/* ============ CONTACT GRID ============ */}
          <div className="grid md:grid-cols-3 gap-5">
            {contactItems.map((item) => {
              const style = accentStyles[item.accent];
              const isCopied = copied === item.key;
              const isCopyAction = item.action === "copy";

              return (
                <motion.div
                  key={item.key}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className={`
                    glass rounded-2xl p-6
                    border ${style.border}
                    ${style.glow}
                    transition-all duration-300
                    relative overflow-hidden
                  `}
                >
                  {/* 🌫️ Corner glow */}
                  <div
                    className={`
                      absolute -top-12 -right-12 w-28 h-28 rounded-full blur-3xl opacity-30
                      ${style.glowColor}
                    `}
                  />

                  <div className="relative z-10 space-y-4">
                    {/* 🖼️ Icon */}
                    <div
                      className={`
                        w-12 h-12 rounded-xl
                        ${style.bg} border ${style.border}
                        flex items-center justify-center
                        text-2xl
                      `}
                    >
                      {item.icon}
                    </div>

                    {/* 🏷️ Label + Value */}
                    <div>
                      <p className="text-[10px] font-mono-tech text-gray-500 tracking-widest uppercase">
                        {item.label}
                      </p>
                      <p
                        className={`text-sm font-semibold mt-1 ${style.text} break-all`}
                      >
                        {item.value}
                      </p>
                    </div>

                    {/* 🎯 Action Button (Copy OR Open) */}
                    {isCopyAction ? (
                      <button
                        onClick={() =>
                          copyToClipboard(item.copyValue, item.key)
                        }
                        className={`
                          w-full text-center
                          px-3 py-2 rounded-full
                          glass border
                          text-xs font-medium
                          hover:scale-[1.03]
                          transition-all duration-300
                          ${
                            isCopied
                              ? "text-green-400 border-green-500/40"
                              : `${style.text} ${style.border}`
                          }
                        `}
                      >
                        {isCopied ? "✓ Copied!" : "📋 Copy"}
                      </button>
                    ) : (
                      <a
                        href={item.openUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          block w-full text-center
                          px-3 py-2 rounded-full
                          glass border
                          text-xs font-medium
                          hover:scale-[1.03]
                          transition-all duration-300
                          ${style.text} ${style.border}
                        `}
                      >
                        🔗 Open Profile
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ============ FINAL CTA ============ */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden text-center"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-neon/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-electric/10 blur-3xl" />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <p className="text-[10px] font-mono-tech text-electric tracking-widest uppercase">
                ⏰ {contact.responseTime}
              </p>

              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to{" "}
                <span className="text-gradient-neon">work together</span>?
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Let's talk about your cloud project, your team's needs, or your
                next big idea. Send me a message and I'll get back to you soon.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="
                    inline-flex items-center gap-3
                    gradient-neon text-void font-bold
                    px-8 py-3.5 rounded-full
                    glow-neon hover-glow-neon-strong
                    transition-all duration-300
                    hover:scale-105
                  "
                >
                  📧 Email me directly
                </a>

                <a
                  href={
                    personal.socials.find((s) => s.name === "LinkedIn")
                      ?.href || "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-3
                    glass border border-neon/40 text-neon font-medium
                    px-8 py-3.5 rounded-full
                    hover-glow-neon hover:border-neon
                    transition-all duration-300
                    hover:scale-105
                  "
                >
                  💼 Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* ============ SOCIAL ICONS ROW ============ */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {personal.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="
                  w-12 h-12 rounded-full
                  glass border border-electric/30
                  flex items-center justify-center
                  text-lg
                  hover:border-neon hover-glow-neon hover:scale-110
                  transition-all duration-300
                "
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}