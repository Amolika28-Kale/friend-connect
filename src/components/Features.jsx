import { motion } from "framer-motion";
import { ShieldCheck, Users, MessageCircle } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "100% Verified Profiles",
    desc: "Each profile goes through manual verification to ensure authenticity, safety, and real human connections.",
  },
  {
    icon: <Users size={28} />,
    title: "Genuine Indian People",
    desc: "Connect with real, respectful people who are genuinely looking for friendship, emotional bonding, and conversations.",
  },
  {
    icon: <MessageCircle size={28} />,
    title: "Easy & Direct Communication",
    desc: "Get instant access to WhatsApp or Telegram to start meaningful conversations without any hassle.",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
            Why Choose <span className="text-rose-500">FriendConnect?</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Safe, genuine, and meaningful connections — designed for you
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:gap-8 mt-12 sm:mt-14 md:mt-16
                        sm:grid-cols-2 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-rose-50
                         p-6 sm:p-7 md:p-8 rounded-2xl shadow
                         hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center
                           rounded-full bg-rose-100 text-rose-500
                           group-hover:scale-110 transition"
              >
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-semibold text-primary">
                {f.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
