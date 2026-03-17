/*
 * DESIGN: Art Deco / Vintage Board Game Parlor
 * Hero: Full-bleed background image, floating dice particles, gold shimmer title
 * Layout: Asymmetric left-aligned with Art Deco geometric ornaments
 */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663449473042/jdeL5AifXpZ5kk9g69B8GL/hero-bg-E9FSxgWjpv4QwZY2voBhfe.webp";
const DICE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663449473042/jdeL5AifXpZ5kk9g69B8GL/dice-particles-fz4GwKbuAKRzcPHCpMXCPU.webp";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.03_260/0.92)] via-[oklch(0.10_0.03_260/0.75)] to-[oklch(0.10_0.03_260/0.4)]" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[oklch(0.13_0.03_260)] to-transparent" />

      {/* Art Deco corner ornament top-right */}
      <div className="absolute top-24 right-8 opacity-20 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M60 10 L110 60 L60 110 L10 60 Z" stroke="oklch(0.75 0.12 75)" strokeWidth="1" fill="none"/>
          <path d="M60 25 L95 60 L60 95 L25 60 Z" stroke="oklch(0.75 0.12 75)" strokeWidth="0.5" fill="none"/>
          <line x1="60" y1="10" x2="60" y2="0" stroke="oklch(0.75 0.12 75)" strokeWidth="1"/>
          <line x1="110" y1="60" x2="120" y2="60" stroke="oklch(0.75 0.12 75)" strokeWidth="1"/>
          <line x1="60" y1="110" x2="60" y2="120" stroke="oklch(0.75 0.12 75)" strokeWidth="1"/>
          <line x1="10" y1="60" x2="0" y2="60" stroke="oklch(0.75 0.12 75)" strokeWidth="1"/>
          <circle cx="60" cy="60" r="5" fill="oklch(0.75 0.12 75)"/>
        </svg>
      </div>

      {/* Dice image overlay - right side */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center opacity-15 hidden lg:block"
        style={{ backgroundImage: `url(${DICE_BG})`, backgroundPosition: 'center right' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24">
        <div className="max-w-2xl w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-[oklch(0.75_0.12_75)]" />
            <span
              className="text-[oklch(0.75_0.12_75)] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              București • Board Game Cafe
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="text-[oklch(0.94_0.02_85)]">Snakes</span>
            <br />
            <span className="text-gold-shimmer italic">&amp;</span>
            <br />
            <span className="text-[oklch(0.94_0.02_85)]">Wizards</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[oklch(0.75_0.04_85)] text-lg leading-relaxed mb-10 max-w-lg"
            style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}
          >
            Peste <strong className="text-[oklch(0.75_0.12_75)] font-semibold">500 de jocuri</strong> de societate, băuturi artizanale și o atmosferă magică te așteaptă în inima Bucureștiului.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12"
          >
            <a
              href="tel:0726387225"
              className="group flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-4 bg-[oklch(0.75_0.12_75)] text-[oklch(0.13_0.03_260)] font-bold rounded-sm hover:bg-[oklch(0.85_0.14_80)] transition-all hover:shadow-[0_0_30px_oklch(0.75_0.12_75/0.5)] text-sm tracking-wider"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              <Phone size={16} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Rezervă o Masă</span>
              <span className="sm:hidden">Rezervă</span>
            </a>
            <button
              onClick={() => scrollToSection("#jocuri")}
              className="flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-4 border border-[oklch(0.75_0.12_75/0.5)] text-[oklch(0.75_0.12_75)] font-semibold rounded-sm hover:border-[oklch(0.75_0.12_75)] hover:bg-[oklch(0.75_0.12_75/0.08)] transition-all text-sm tracking-wider"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Explorează
            </button>
          </motion.div>

          {/* Info pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-2 text-[oklch(0.65_0.04_85)] text-sm">
              <MapPin size={14} className="text-[oklch(0.75_0.12_75)]" />
              <span style={{ fontFamily: 'Raleway, sans-serif' }}>Str. Ieremia Grigorescu 24</span>
            </div>
            <div className="flex items-center gap-2 text-[oklch(0.65_0.04_85)] text-sm">
              <Phone size={14} className="text-[oklch(0.75_0.12_75)]" />
              <a href="tel:0726387225" className="hover:text-[oklch(0.75_0.12_75)] transition-colors" style={{ fontFamily: 'Raleway, sans-serif' }}>
                0726 387 225
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("#galerie")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[oklch(0.75_0.12_75/0.6)] hover:text-[oklch(0.75_0.12_75)] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 border-t border-[oklch(0.75_0.12_75/0.15)] hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { value: "500+", label: "Jocuri de Societate" },
            { value: "2017", label: "Fondată în" },
            { value: "★ 4.8", label: "Rating Google" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-start gap-1 sm:gap-2">
              <span
                className="text-lg sm:text-2xl font-bold text-gold-shimmer"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {stat.value}
              </span>
              <span
                className="text-[oklch(0.55_0.04_85)] text-[10px] sm:text-xs tracking-wider uppercase"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
