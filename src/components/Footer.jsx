import {
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Heart
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black text-gray-300 pt-20 pb-10 overflow-hidden">

      {/* Decorative Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Main Grid */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl font-extrabold flex items-center gap-2">
              <Heart className="text-rose-500" size={22} />
              FriendConnect
            </h3>

            <p className="text-sm mt-4 leading-relaxed text-gray-400 max-w-xs">
              Helping people build genuine friendships and emotional
              connections through verified profiles and safe conversations.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Twitter, MessageCircle].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="
                      p-2 rounded-full
                      bg-white/5
                      hover:bg-rose-500
                      hover:text-white
                      transition
                    "
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "How It Works", "Testimonials", "Pricing"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              {[
                "FAQ",
                "Contact Support",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Trusted & Secure
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>✔ 100% Verified Profiles</li>
              <li>✔ Secure Payments</li>
              <li>✔ 24/7 Human Support</li>
              <li>✔ Data Privacy Guaranteed</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} FriendConnect. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-rose-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
