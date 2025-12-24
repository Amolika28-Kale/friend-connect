import { motion } from "framer-motion";
import { Heart, ShieldCheck, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50"
    >
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
            About <span className="text-rose-500">LoveConnects</span>
          </h2>

          <p className="mt-5 sm:mt-6 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
            LoveConnects is a trusted platform designed to help people find
            meaningful friendships and emotional connections in a safe and
            respectful environment.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-14 mt-14 md:mt-16 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-primary">
              Why We Exist ❤️
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              In today’s digital world, many people feel lonely despite being
              surrounded by social media. LoveConnects bridges that gap by
              connecting real people who genuinely want to talk, share, and
              build meaningful relationships.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              We focus on <b>quality over quantity</b>. Every profile is
              manually reviewed to ensure safety, authenticity, and respectful
              communication.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 text-center sm:text-left">
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-primary">
                  10k+
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Happy Members
                </p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-primary">
                  50k+
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Connections
                </p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-primary">
                  100%
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Verified Profiles
                </p>
              </div>
            </div>
          </motion.div>

     {/* Right Image + Cards */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="grid gap-6"
>
  {/* Romantic Image */}
  <div className="relative overflow-hidden rounded-3xl shadow-lg group">
    <img
    src="https://images.unsplash.com/photo-1760669345533-3f220832d486?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
      alt="Romantic Couple"
      className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

    {/* Text */}
    <div className="absolute bottom-4 left-0 right-0 text-center px-4">
      <p className="text-white text-lg font-semibold">
        Real People. Real Emotions ❤️
      </p>
    </div>
  </div>

  {/* Info Cards */}
  {[
    {
      title: "Our Mission",
      icon: Heart,
      text:
        "To help people overcome loneliness by connecting them with verified, genuine individuals for meaningful conversations.",
    },
    {
      title: "Our Vision",
      icon: Users,
      text:
        "A world where everyone has someone to talk to and no one feels ignored or alone.",
    },
    {
      title: "Why Trust Us?",
      icon: ShieldCheck,
      text:
        "We manually verify profiles, protect your privacy, and ensure a safe, respectful experience for everyone.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white p-5 sm:p-6 rounded-2xl shadow hover:shadow-lg transition"
    >
      <div className="flex items-center gap-3">
        <item.icon className="text-rose-500" />
        <h3 className="text-lg sm:text-xl font-semibold text-primary">
          {item.title}
        </h3>
      </div>
      <p className="mt-3 text-gray-600 text-sm sm:text-base">
        {item.text}
      </p>
    </div>
  ))}
</motion.div>

        </div>
      </div>
    </section>
  );
}
