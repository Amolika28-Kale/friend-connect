import { Star } from "lucide-react";
import { motion } from "framer-motion";

const users = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    msg: "I never thought online connections could feel this real. FriendConnect truly changed my life.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rahul Verma",
    city: "Bangalore",
    msg: "Genuine people, quick delivery and great support. Totally worth it!",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Anjali Mehta",
    city: "Delhi",
    msg: "Safe, trusted and meaningful conversations. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-rose-50 to-soft">
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
            Real Stories, <span className="text-rose-500">Real Connections</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            Thousands of people found companionship through FriendConnect
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="
            mt-14
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3

            max-sm:flex
            max-sm:overflow-x-auto
            max-sm:gap-4
            max-sm:pb-4
            max-sm:snap-x
          "
        >
          {users.map((u, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                min-w-[280px]
                bg-white/80 backdrop-blur
                border border-rose-100
                p-6 rounded-3xl
                shadow-lg
                snap-center
                relative
              "
            >
              {/* Quote */}
              <span className="absolute top-4 right-6 text-5xl text-rose-200 font-serif">
                “
              </span>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={u.img}
                  alt={u.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-rose-200"
                />
                <div>
                  <h3 className="font-semibold text-primary text-base">
                    {u.name}
                  </h3>
                  <p className="text-sm text-gray-500">{u.city}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="mt-4 text-gray-600 italic leading-relaxed text-sm sm:text-base">
                “{u.msg}”
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-sm text-gray-500"
        >
          ⭐ Rated 4.9/5 by 10,000+ verified users across India
        </motion.p>

      </div>
    </section>
  );
}
