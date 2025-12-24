import { motion } from "framer-motion";

const hearts = Array.from({ length: 8 });

export default function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-400/40"
          initial={{
            y: "110%",
            x: `${Math.random() * 100}%`,
            scale: Math.random() * 0.6 + 0.4,
            opacity: 0,
          }}
          animate={{
            y: "-10%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            delay: Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❤️
        </motion.span>
      ))}
    </div>
  );
}
