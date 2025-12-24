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
    <section className="py-20 md:py-24 bg-white">
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
            Why Choose <span className="text-rose-500">LoveConnects?</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Safe, genuine, and meaningful connections — designed for you
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
              src="https://images.unsplash.com/photo-1765185206516-d2928c34b085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8"
                alt="Happy Couple"
                className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                <p className="text-white text-xl font-semibold">
                  Build Real Connections ❤️
                </p>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 bg-rose-200 rounded-full blur-3xl opacity-70" />
          </motion.div>

          {/* Feature Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-rose-50
                           p-6 sm:p-7 rounded-2xl shadow
                           hover:shadow-xl hover:-translate-y-1
                           transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-100 text-rose-500 group-hover:scale-110 transition">
                  {f.icon}
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-primary">
                  {f.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
