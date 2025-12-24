import { motion } from "framer-motion";

const couples = [
  {
    img: "https://media.istockphoto.com/id/1464025748/photo/portrait-shot-of-happy-smiling-couple-looking-at-camera-during-candle-light-dinner-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cmi-4bLPRjkSJymKETd_EBQSv7Dz0Hgdvq3BpSw_PLI=",
    title: "Real Connections",
  },
  {
    img: "https://media.istockphoto.com/id/2220065928/photo/couple-toasting-wine-at-romantic-outdoor-picnic.jpg?s=612x612&w=0&k=20&c=ynfdmPGZG9YmS1CmyH8FTGDAZMBg7hcNpKggnSAIXe8=",
    title: "Meaningful Moments",
  },
  {
    img: "https://media.istockphoto.com/id/1195692733/photo/man-lifting-up-his-girlfriend-in-air.jpg?s=612x612&w=0&k=20&c=ottF0UhTs97-DJeUoXEV-L4380NS1A-n5l8z2S7HB_k=",
    title: "Genuine Companionship",
  },
  {
    img: "https://media.istockphoto.com/id/1904047787/photo/close-up-shot-romantic-man-holding-girlfriends-or-wifes-hand-during-candlelight-dinner.jpg?s=612x612&w=0&k=20&c=8igKYZCKC5zqzbPdl2KtMIx9wsFWJDqe2C0cQHrsitI=",
    title: "Indian Hearts, Real Love",
  },
];

export default function RomanticGallery() {
  return (
    <section className="py-28 bg-gradient-to-b from-soft via-white to-rose-50">
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
            Moments That <span className="text-rose-500">Matter</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            Real people. Real emotions. Real connections.
          </p>
        </motion.div>

        {/* Gallery */}
        <div
          className="
            mt-14
            grid gap-5
            sm:grid-cols-2
            lg:grid-cols-4

            max-sm:flex
            max-sm:overflow-x-auto
            max-sm:gap-4
            max-sm:pb-4
            max-sm:snap-x
          "
        >
          {couples.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.4 }}
              className="
                min-w-[260px]
                relative overflow-hidden
                rounded-3xl
                shadow-xl
                group
                snap-center
              "
            >
              {/* Image */}
              <img
                src={c.img}
                alt={c.title}
                className="
                  h-72 sm:h-80 lg:h-72
                  w-full object-cover
                  group-hover:scale-110
                  transition duration-700
                "
              />

              {/* Gradient Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/60 via-black/20 to-transparent
                  opacity-80
                "
              />

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="
                  absolute bottom-5 left-0 right-0
                  text-center
                  px-4
                "
              >
                <h3 className="text-white text-lg font-semibold tracking-wide">
                  {c.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Emotional Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-sm text-gray-500"
        >
          ❤️ Thousands of meaningful friendships and relationships start here
        </motion.p>

      </div>
    </section>
  );
}
