import { useState } from "react";
import PaymentModal from "./PaymentModal";

export default function Pricing() {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState(0);

  const openPayment = (p, a) => {
    setPlan(p);
    setAmount(a);
    setOpen(true);
  };

  return (
    <>
      <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
              Choose Your <span className="text-rose-500">Connection Plan</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Start your journey to meaningful friendships today
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">

            {/* Starter Pack */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow hover:shadow-xl transition">
              <h3 className="text-center text-sm font-semibold tracking-widest text-gray-500">
                STARTER PACK
              </h3>

              <p className="text-center text-4xl sm:text-5xl font-extrabold text-primary mt-4">
                ₹499
              </p>

              <div className="bg-primary text-white text-center py-2 rounded-full my-5 text-sm font-medium">
                15 Verified Connections
              </div>

              <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                <li>✔ 15 verified contacts</li>
                <li>✔ 100% genuine profiles</li>
                <li>✔ Delivery within 24 hours</li>
                <li>✔ Ideal for first-time users</li>
              </ul>

              <button
                onClick={() => openPayment("Starter Pack", 499)}
                className="mt-7 w-full bg-primary text-white py-3 rounded-full
                           font-semibold hover:scale-[1.02] transition"
              >
                Get Started
              </button>
            </div>

            {/* Premium Pack */}
            <div className="relative bg-gradient-to-br from-rose-500 to-pink-600
                            text-white rounded-3xl p-6 sm:p-8 shadow-xl">

              {/* Badge */}
              <span className="absolute -top-3 right-6 bg-white text-rose-500
                               px-4 py-1 rounded-full text-xs font-bold shadow">
                MOST POPULAR
              </span>

              <h3 className="text-center text-sm font-semibold tracking-widest opacity-90">
                PREMIUM PACK
              </h3>

              <p className="text-center text-4xl sm:text-5xl font-extrabold mt-4">
                ₹999
              </p>

              <div className="bg-white text-primary text-center py-2 rounded-full my-5 text-sm font-medium">
                35 Premium Connections
              </div>

              <ul className="space-y-3 text-sm sm:text-base opacity-95">
                <li>✔ 35 verified contacts</li>
                <li>✔ Priority delivery</li>
                <li>✔ Best value for money</li>
                <li>✔ Free 24/7 support</li>
              </ul>

              <button
                onClick={() => openPayment("Premium Pack", 999)}
                className="mt-7 w-full bg-white text-primary py-3 rounded-full
                           font-semibold hover:scale-[1.02] transition"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Trust Line */}
          <p className="text-center mt-10 text-sm text-gray-500">
            🔒 Secure payments • 💯 Verified profiles • 🇮🇳 Trusted across India
          </p>
        </div>
      </section>

      {/* Razorpay UI Modal */}
      <PaymentModal
        open={open}
        onClose={() => setOpen(false)}
        plan={plan}
        amount={amount}
      />
    </>
  );
}
