/*
 * DESIGN: Art Deco / Vintage Board Game Parlor
 * Games: Bento-style grid with category cards, gold borders, hover effects
 * Background: Slightly lighter navy with diagonal pattern
 */

import { motion } from "framer-motion";
import { Swords, Users, Handshake, Scroll } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GAMES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663449473042/jdeL5AifXpZ5kk9g69B8GL/games-section-6PJhSz9crzb6HBrEduqge3.webp";

const categories = [
  {
    icon: Swords,
    title: "Strategie",
    subtitle: "Cucerește, construiește, domină",
    games: ["Catan", "Terraforming Mars", "Scythe", "7 Wonders", "Wingspan"],
    color: "oklch(0.75 0.12 75)",
    bg: "oklch(0.75 0.12 75 / 0.06)",
  },
  {
    icon: Users,
    title: "Party Games",
    subtitle: "Râsete garantate în grup",
    games: ["Codenames", "Dixit", "Wavelength", "Telestrations", "Just One"],
    color: "oklch(0.65 0.18 30)",
    bg: "oklch(0.65 0.18 30 / 0.06)",
  },
  {
    icon: Handshake,
    title: "Cooperativ",
    subtitle: "Echipa bate totul",
    games: ["Pandemic", "Spirit Island", "Gloomhaven", "The Crew", "Forbidden Island"],
    color: "oklch(0.65 0.15 160)",
    bg: "oklch(0.65 0.15 160 / 0.06)",
  },
  {
    icon: Scroll,
    title: "RPG & Aventură",
    subtitle: "Creează-ți povestea",
    games: ["D&D Starter Sets", "Descent", "Mansions of Madness", "Betrayal at House on the Hill"],
    color: "oklch(0.65 0.15 280)",
    bg: "oklch(0.65 0.15 280 / 0.06)",
  },
];

export default function GamesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="jocuri" className="py-24 bg-[oklch(0.13_0.03_260)] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.75 0.12 75) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.12 75) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[oklch(0.75_0.12_75)] text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'Cinzel, serif' }}>
            Colecția Noastră
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[oklch(0.94_0.02_85)] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Peste <span className="text-gold-shimmer">500 de Jocuri</span>
          </h2>
          <p className="text-[oklch(0.65_0.04_85)] max-w-xl mx-auto"
            style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            De la clasice la cele mai noi lansări — avem ceva pentru fiecare aventurier.
          </p>
          <div className="deco-divider max-w-xs mx-auto mt-6">
            <span className="text-[oklch(0.75_0.12_75)] text-lg">◆</span>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large image card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-1 lg:row-span-2 relative rounded-sm overflow-hidden min-h-[300px] lg:min-h-[500px] group"
          >
            <img src={GAMES_IMG} alt="Jocuri de societate" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.03_260/0.9)] via-[oklch(0.08_0.03_260/0.3)] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[oklch(0.75_0.12_75)] rounded-sm mb-3">
                <span className="text-[oklch(0.13_0.03_260)] text-xs font-bold tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
                  500+ TITLURI
                </span>
              </div>
              <p className="text-[oklch(0.94_0.02_85)] text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Cel mai mare catalog din București
              </p>
            </div>
          </motion.div>

          {/* Category cards */}
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="card-gold rounded-sm p-6 group"
                style={{ background: cat.bg }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cat.color.replace(')', ' / 0.15)')}`, border: `1px solid ${cat.color.replace(')', ' / 0.3)')}` }}
                  >
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <div>
                    <h3 className="text-[oklch(0.94_0.02_85)] font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {cat.title}
                    </h3>
                    <p className="text-[oklch(0.55_0.04_85)] text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {cat.subtitle}
                    </p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {cat.games.map((game) => (
                    <li key={game} className="flex items-center gap-2 text-[oklch(0.70_0.04_85)] text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      <span style={{ color: cat.color }} className="text-xs">▸</span>
                      {game}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center text-[oklch(0.45_0.04_85)] text-sm mt-10"
          style={{ fontFamily: 'Raleway, sans-serif', fontStyle: 'italic' }}
        >
          Și sute de alte titluri — întreabă staff-ul pentru recomandări personalizate.
        </motion.p>
      </div>
    </section>
  );
}
