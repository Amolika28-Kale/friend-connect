import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
          <a
          href="#home">
        <div className="font-extrabold text-primary text-xl cursor-pointer">
          ❤️ FriendConnect
           </div>
         </a>
       

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 text-gray-700 font-medium">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Why Choose", "#features"],
            ["FAQ", "#faq"],
            ["Pricing", "#pricing"],
            ["Contact", "#contact"],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="relative hover:text-primary transition after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#pricing"
          className="hidden md:inline-flex items-center bg-primary text-white px-6 py-2.5 rounded-full shadow hover:shadow-pink-400/40 hover:scale-105 transition"
        >
          Get Started
        </a>

      {/* Mobile Hamburger */}
<button
  onClick={() => setOpen(!open)}
  className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-primary z-50"
  aria-label="Toggle menu"
>
  <span
    className={`absolute h-0.5 w-6 bg-primary transition-transform duration-300 ${
      open ? "rotate-45" : "-translate-y-2"
    }`}
  />
  <span
    className={`absolute h-0.5 w-6 bg-primary transition-opacity duration-300 ${
      open ? "opacity-0" : "opacity-100"
    }`}
  />
  <span
    className={`absolute h-0.5 w-6 bg-primary transition-transform duration-300 ${
      open ? "-rotate-45" : "translate-y-2"
    }`}
  />
</button>

      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu Panel */}
    <div
  className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="pt-24 px-6 space-y-6 text-center">
    {[
      ["Home", "#home"],
      ["About", "#about"],
      ["Why Choose", "#features"],
      ["FAQ", "#faq"],
      ["Pricing", "#pricing"],
      ["Contact", "#contact"],
    ].map(([label, link]) => (
      <a
        key={label}
        href={link}
        onClick={() => setOpen(false)}
        className="block text-lg font-semibold text-gray-700 hover:text-primary transition"
      >
        {label}
      </a>
    ))}

    <a
      href="#pricing"
      onClick={() => setOpen(false)}
      className="block bg-primary text-white py-3 rounded-full mt-8 shadow hover:scale-105 transition"
    >
      Get Started
    </a>
  </div>
</div>

    </nav>
  );
}
