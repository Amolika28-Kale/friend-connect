import { motion } from "framer-motion";
import { MessageCircle, Send, Heart } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-rose-500 via-pink-500 to-primary text-white">

      {/* Floating Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

      {/* Floating Hearts */}
      <Heart className="absolute top-16 left-1/4 text-white/20 w-10 h-10 animate-pulse" />
      <Heart className="absolute bottom-24 right-1/4 text-white/20 w-14 h-14 animate-pulse" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Ready to End{" "}
          <span className="text-yellow-300">Loneliness?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
        >
          Get <strong>verified & genuine connections</strong> delivered
          directly to your <strong>WhatsApp</strong> or{" "}
          <strong>Telegram</strong> — start meaningful conversations today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="
              flex items-center justify-center gap-2
              bg-white text-primary
              px-8 py-4
              rounded-full
              font-semibold
              shadow-xl
              hover:scale-105
              transition
            "
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/yourusername"
            target="_blank"
            className="
              flex items-center justify-center gap-2
              border border-white/80
              px-8 py-4
              rounded-full
              font-semibold
              hover:bg-white
              hover:text-primary
              transition
            "
          >
            <Send size={20} />
            Chat on Telegram
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-white/90"
        >
          <span>🔒 100% Safe</span>
          <span>👥 Verified Profiles</span>
          <span>💬 24/7 Human Support</span>
        </motion.div>
      </div>
    </section>
  );
}
