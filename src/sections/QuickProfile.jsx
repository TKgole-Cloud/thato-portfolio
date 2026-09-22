import { motion } from "framer-motion";
import Container from "../components/Container";
import { quickProfile } from "../data/quickProfile";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function QuickProfile() {
  return (
    <section
      id="quick-profile"
      className="relative py-16 md:py-20 border-t border-electric/10"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >

          {/* ============ HEADER ============ */}
          <motion.div variants={itemVariants} className="text-center space-y-3">
            <p className="text-electric font-mono-tech text-xs tracking-widest">
              <span className="text-neon">$</span> cat profile.json
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-white">Quick</span>{" "}
              <span className="text-gradient-electric">Profile</span>
            </h2>
          </motion.div>

          {/* ============ PROFILE TABLE ============ */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl overflow-hidden max-w-3xl mx-auto"
          >
            {quickProfile.map((item, i) => (
              <div
                key={item.label}
                className={`
                  grid grid-cols-1 md:grid-cols-[180px_1fr] gap-1 md:gap-6
                  px-6 py-4
                  ${i !== quickProfile.length - 1 ? "border-b border-electric/10" : ""}
                  hover:bg-electric/5
                  transition-colors duration-200
                `}
              >
                <div className="text-[10px] md:text-xs font-mono-tech text-electric tracking-widest uppercase">
                  {item.label}
                </div>
                <div className="text-sm text-white leading-relaxed">
                  {item.value}
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}