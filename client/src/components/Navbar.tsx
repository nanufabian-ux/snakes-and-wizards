/*
 * DESIGN: Art Deco / Vintage Board Game Parlor
 * Navbar: Glassmorphism dark with gold accents, Cinzel font
 * Behavior: Transparent on top, solid on scroll
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Acasă", href: "#hero" },
  { label: "Galerie", href: "#galerie" },
  { label: "Jocuri", href: "#jocuri" },
  { label: "Meniu", href: "#meniu" },
  { label: "Program", href: "#program" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.13_0.03_260/0.95)] backdrop-blur-xl border-b border-[oklch(0.75_0.12_75/0.15)] shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav("#hero")}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full border-2 border-[oklch(0.75_0.12_75/0.6)] flex items-center justify-center bg-[oklch(0.18_0.04_260)] group-hover:border-[oklch(0.75_0.12_75)] transition-colors overflow-hidden flex-shrink-0">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663449473042/jdeL5AifXpZ5kk9g69B8GL/t51_b71e562b.png" alt="Snakes & Wizards" className="w-full h-full object-cover" />
              </div>
              <span
                className="text-[oklch(0.94_0.02_85)] font-semibold text-lg hidden sm:block"
                style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}
              >
                Snakes & Wizards
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-[oklch(0.75_0.04_85)] hover:text-[oklch(0.75_0.12_75)] transition-colors text-sm tracking-widest uppercase"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:0726387225"
                className="flex items-center gap-2 text-[oklch(0.75_0.12_75)] hover:text-[oklch(0.85_0.14_80)] transition-colors text-sm"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                <Phone size={14} />
                <span>0726 387 225</span>
              </a>
              <button
                onClick={() => handleNav("#program")}
                className="px-5 py-2 bg-[oklch(0.75_0.12_75)] text-[oklch(0.13_0.03_260)] text-sm font-semibold rounded-sm hover:bg-[oklch(0.85_0.14_80)] transition-all hover:shadow-[0_0_20px_oklch(0.75_0.12_75/0.4)] tracking-wider"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Rezervă
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[oklch(0.75_0.12_75)] p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[oklch(0.13_0.03_260/0.98)] backdrop-blur-xl border-b border-[oklch(0.75_0.12_75/0.2)] lg:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-[oklch(0.85_0.04_85)] hover:text-[oklch(0.75_0.12_75)] transition-colors text-sm tracking-widest uppercase py-2 border-b border-[oklch(0.75_0.12_75/0.1)]"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:0726387225"
                className="flex items-center gap-2 text-[oklch(0.75_0.12_75)] text-sm mt-2"
              >
                <Phone size={14} />
                0726 387 225
              </a>
              <button
                onClick={() => handleNav("#program")}
                className="mt-2 px-5 py-3 bg-[oklch(0.75_0.12_75)] text-[oklch(0.13_0.03_260)] text-sm font-semibold rounded-sm tracking-wider"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Rezervă o Masă
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
