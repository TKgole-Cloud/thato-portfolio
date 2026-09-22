import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { personal } from "../data/personal";
import { feedback } from "../data/feedback";

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

export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Feedback from ${form.name}`
    );

    const body = encodeURIComponent(
      `Hi Thato,\n\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n\n` +
        `Message:\n${form.message}\n\n` +
        `— Sent from your portfolio feedback form`
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="feedback"
      className="relative py-24 md:py-32 border-t border-electric/10"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-12"
        >

          {/* ============ HEADER ============ */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <p className="text-electric font-mono-tech text-sm tracking-widest">
              <span className="text-neon">$</span> write feedback.txt
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient-electric">Feedback</span>{" "}
              <span className="text-white">Welcome</span>
            </h2>
            <div className="w-20 h-1 gradient-neon rounded-full mx-auto glow-neon" />
            <p className="text-gray-400 max-w-2xl mx-auto pt-2 leading-relaxed">
              {feedback.description}
            </p>
          </motion.div>

          {/* ============ FORM CARD ============ */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <div className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden">

              {/* 🌫️ Corner glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-neon/10 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-electric/10 blur-3xl" />

              <div className="relative z-10">

                {sent ? (
                  /* ============ SUCCESS STATE ============ */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="text-6xl">✅</div>
                    <h3 className="text-2xl font-bold text-neon text-glow-neon-soft">
                      Your email app should be open
                    </h3>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                      Just hit send and your message will land in my inbox.
                      Thanks for taking the time! 🙏
                    </p>
                  </motion.div>
                ) : (
                  /* ============ FORM STATE ============ */
                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* 👤 Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono-tech text-electric tracking-widest uppercase mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Thato Kgole"
                        className="
                          w-full px-4 py-3 rounded-xl
                          bg-void/60 border border-electric/20
                          text-white placeholder-gray-600
                          text-sm
                          focus:outline-none focus:border-neon
                          focus:glow-neon
                          transition-all duration-300
                        "
                      />
                    </div>

                    {/* 📧 Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono-tech text-electric tracking-widest uppercase mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="thatokgole@gmail.com"
                        className="
                          w-full px-4 py-3 rounded-xl
                          bg-void/60 border border-electric/20
                          text-white placeholder-gray-600
                          text-sm
                          focus:outline-none focus:border-neon
                          focus:glow-neon
                          transition-all duration-300
                        "
                      />
                    </div>

                    {/* 💬 Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono-tech text-electric tracking-widest uppercase mb-2"
                      >
                        Your Feedback
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="What should I improve? What did you like? Any opportunities I should know about?"
                        className="
                          w-full px-4 py-3 rounded-xl
                          bg-void/60 border border-electric/20
                          text-white placeholder-gray-600
                          text-sm
                          focus:outline-none focus:border-neon
                          focus:glow-neon
                          transition-all duration-300
                          resize-none
                        "
                      />
                    </div>

                    {/* 🚀 Submit */}
                    <button
                      type="submit"
                      className="
                        w-full flex items-center justify-center gap-3
                        gradient-neon text-void font-bold
                        px-8 py-3.5 rounded-full
                        glow-neon hover:glow-neon-strong
                        transition-all duration-300
                        hover:scale-[1.02]
                      "
                    >
                      📬 Send Feedback
                    </button>

                    {/* 🔒 Privacy note */}
                    <p className="text-center text-[10px] font-mono-tech text-gray-600 pt-2">
                      // {feedback.note}
                    </p>

                  </form>
                )}

              </div>
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}