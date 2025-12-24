import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 py-14 sm:py-16 md:py-28 overflow-hidden">

      {/* Floating Hearts – hide on very small screens */}
      <div className="hidden sm:block">
        <FloatingHearts />
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-[18rem] h-[18rem] sm:w-[28rem] sm:h-[28rem] bg-pink-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-6rem] right-[-6rem] w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] bg-rose-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="md:bg-transparent bg-white/70 md:backdrop-none backdrop-blur rounded-3xl p-6 sm:p-8 shadow md:shadow-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
         <div className="inline-flex items-center gap-2 mb-5 px-4 py-1 rounded-full bg-white/70 backdrop-blur text-sm text-rose-600 font-semibold shadow animate-pulse">
  ❤️ Trusted by 10,000+ Indians
</div>


         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
  <span className="text-primary">Never Feel Lonely</span>{" "}
  <span className="relative inline-block">
    <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
      Again ❤️
    </span>
  </span>
</h1>


          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            Connect with <b>verified, genuine people</b> looking for meaningful
            friendships. Start conversations that turn into real emotional
            connections.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#pricing">
             <button className="relative overflow-hidden bg-primary text-white px-9 py-4 rounded-full font-semibold shadow-lg group">
  <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-500 opacity-0 group-hover:opacity-100 transition"></span>
  <span className="relative">Start Connecting</span>
</button>

            </a>

            <button className="border-2 border-primary text-primary px-7 sm:px-9 py-3.5 sm:py-4 rounded-full hover:bg-primary hover:text-white transition">
              Learn More
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:flex gap-6 sm:gap-10 justify-center md:justify-start mt-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                10,000+
              </h3>
              <p className="text-gray-500 text-sm">Happy Members</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                50,000+
              </h3>
              <p className="text-gray-500 text-sm">Connections Made</p>
            </div>
          </div>
<p className="mt-6 text-sm text-gray-500 italic max-w-md">
  “Real people. Real conversations. No fake profiles.”
</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8 text-xs sm:text-sm text-gray-500">
            <span>✔ 100% Verified</span>
            <span>✔ Privacy Safe</span>
            <span>✔ Secure Payments</span>
          </div>
        </motion.div>
</div>
        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl blur-2xl opacity-30"></div>

          <img
          src="https://media.istockphoto.com/id/1298389287/photo/composite-image-of-couple-smiling-at-camera-holding-a-heart.jpg?s=612x612&w=0&k=20&c=xGtHQUW1rNwNBYlhhvunrUraOS8eb4j3WN3hO31PV90="
            alt="Indian Couple"
            className="relative w-full max-w-[240px] sm:max-w-sm md:max-w-lg rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />
          <div className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-lg animate-bounce">
  ❤️
</div>

<div className="absolute bottom-6 -left-6 bg-white rounded-full p-3 shadow-lg animate-bounce delay-200">
  💕
</div>

        </motion.div>
      </div>
    </section>
  );
}
