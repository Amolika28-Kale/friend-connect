import { X, Lock } from "lucide-react";

export default function PaymentModal({ open, onClose, plan, amount }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm
                    flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl relative
                      animate-in zoom-in duration-200">

        {/* Header */}
        <div className="bg-[#2d6cdf] text-white p-4 rounded-t-2xl relative">
          <h3 className="text-lg font-bold">LoveConnects</h3>
          <p className="text-sm opacity-90">{plan}</p>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:opacity-80"
          >
            <X size={22} />
          </button>
        </div>

        {/* Amount */}
        <div className="p-6 text-center border-b">
          <p className="text-gray-500 text-sm">Amount Payable</p>
          <h2 className="text-3xl font-extrabold mt-1">₹{amount}</h2>
          <p className="text-xs text-gray-400 mt-1">
            Inclusive of all taxes
          </p>
        </div>

        {/* Payment Methods */}
        <div className="px-6 py-4 space-y-3">
          {[
            {
              label: "UPI",
              img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo-vector.svg",
            },
            {
              label: "Credit / Debit Card",
              img: "https://cdn-icons-png.flaticon.com/512/196/196578.png",
            },
            {
              label: "Net Banking",
              img: "https://cdn-icons-png.flaticon.com/512/5968/5968299.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-3 flex items-center gap-3
                         hover:bg-gray-50 transition cursor-not-allowed"
            >
              <img src={item.img} alt={item.label} className="h-6" />
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Pay Button */}
        <div className="p-6">
          <button
            disabled
            className="w-full bg-[#2d6cdf] text-white py-3 rounded-xl
                       font-semibold flex items-center justify-center gap-2
                       opacity-80 cursor-not-allowed"
          >
            <Lock size={16} />
            Pay ₹{amount}
          </button>

          <p className="text-xs text-center text-gray-400 mt-3">
            🔒 Demo Razorpay UI • Payment Disabled
          </p>
        </div>
      </div>
    </div>
  );
}
