import { motion } from "framer-motion";

const hearts = Array.from({ length: 10 });

export default function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((_, i) => {
        const size = Math.random() * 20 + 16; // 16px – 36px
        const duration = Math.random() * 6 + 10;

        return (
          <motion.span
            key={i}
            className="absolute select-none"
            style={{
              fontSize: `${size}px`,
              left: `${Math.random() * 100}%`,
              color: "rgba(244, 63, 94, 0.35)", // rose-500 soft
            }}
            initial={{
              y: "110%",
              rotate: Math.random() * 30 - 15,
              opacity: 0,
            }}
            animate={{
              y: "-15%",
              opacity: [0, 0.8, 0.8, 0],
              rotate: Math.random() * 60 - 30,
            }}
            transition={{
              duration,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ❤️
          </motion.span>
        );
      })}
    </div>
  );
}
