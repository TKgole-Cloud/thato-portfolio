import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import { personal } from "../data/personal";

/* ⌨️ Typewriter hook */
function useTypewriter(words, typingSpeed = 100, pauseTime = 1500) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, typingSpeed, pauseTime]);

  return text;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
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

export default function Hero() {
  const typedText = useTypewriter(personal.roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* ================= LEFT SIDE - TEXT ================= */}
          <div className="space-y-6 text-center md:text-left">

            <motion.p
              variants={itemVariants}
              className="text-electric font-mono-tech text-sm tracking-wider"
            >
              <span className="text-neon">$</span> whoami
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight uppercase"
            >
              <span className="text-gradient-neon block">
                {personal.firstName}
              </span>
              <span className="text-white text-glow-white block">
                {personal.lastName}
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold text-electric h-10"
            >
              {typedText}
              <span className="text-neon animate-pulse">|</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              {personal.tagline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center md:justify-start pt-2"
            >
              <a
                href="#projects"
                className="
                  gradient-neon text-void font-bold
                  px-7 py-3 rounded-full
                  glow-neon hover-glow-neon-strong
                  transition-all duration-300
                  hover:scale-[1.03]
                "
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="
                  glass border border-neon/40 text-neon font-medium
                  px-7 py-3 rounded-full
                  hover-glow-neon
                  transition-all duration-300
                  hover:scale-[1.03]
                "
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center md:justify-start pt-4"
            >
              {personal.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="
                    w-11 h-11 rounded-full
                    glass border border-electric/20
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

          </div>

          {/* ================= RIGHT SIDE - AZURE FRAME ================= */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">

              {/* 🌫️ Soft glow behind frame */}
              <div className="absolute inset-8 rounded-full bg-neon/10 blur-3xl" />

              {/* 🖼️ Clean circular frame */}
              <div className="
                absolute inset-12 rounded-full
                border border-neon/40
                glow-neon
                bg-gradient-to-br from-void via-charcoal to-navy
                flex items-center justify-center
              ">
                <img
                  src="/azure.png"
                  alt="Microsoft Azure"
                  className="
                    w-32 h-32 md:w-40 md:h-40
                    object-contain
                  "
                />
              </div>

              {/* ⚡ Status badge — centered at bottom */}
              <div className="
                absolute left-1/2 -translate-x-1/2 bottom-2
                glass border border-neon/40 rounded-full
                px-4 py-2
                flex items-center gap-2
                text-xs font-mono-tech text-neon
                whitespace-nowrap
              ">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                available for work
              </div>

            </div>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}