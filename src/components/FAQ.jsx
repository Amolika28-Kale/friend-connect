import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Are the contacts really verified?",
    a: "Yes. Every profile goes through a strict manual verification process to ensure authenticity, safety, and real human interaction."
  },
  {
    q: "How will I receive the contacts?",
    a: "After successful payment, verified WhatsApp or Telegram contacts will be shared with you directly within the promised delivery time."
  },
  {
    q: "How long does delivery take?",
    a: "Contacts are usually delivered within 24 hours. Premium users receive priority delivery within a few hours."
  },
  {
    q: "Is my privacy safe?",
    a: "Absolutely. Your personal information is encrypted, protected, and never shared with any third party."
  },
  {
    q: "What if I face any issues?",
    a: "Our dedicated support team is available 24/7 via WhatsApp or Telegram to help you resolve any issues quickly."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="py-28 bg-gradient-to-b from-rose-50 via-white to-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5
                          rounded-full bg-rose-100 text-rose-600 text-sm font-semibold">
            <HelpCircle size={16} />
            FAQs
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-primary">
            Frequently Asked <span className="text-rose-500">Questions</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Everything you need to know before making your first connection
          </p>
        </motion.div>

        {/* FAQ Cards */}
        <div className="mt-16 space-y-5">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`rounded-2xl overflow-hidden border
                ${openIndex === i
                  ? "border-rose-300 shadow-lg"
                  : "border-gray-200 shadow-sm"
                }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full flex justify-between items-center
                           px-6 py-5 text-left
                           bg-white hover:bg-rose-50/50 transition"
              >
                <span className="font-semibold text-primary text-lg">
                  {item.q}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300
                    ${openIndex === i ? "rotate-180 text-rose-500" : "text-gray-400"}
                  `}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-6 pb-5 text-gray-600 leading-relaxed bg-white"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Trust Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-14 text-sm text-gray-500"
        >
          🔒 Secure Payments • ❤️ Genuine Connections • 💬 24/7 Support
        </motion.p>

      </div>
    </section>
  );
}
