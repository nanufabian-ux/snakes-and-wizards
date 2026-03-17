/*
 * DESIGN: Art Deco / Vintage Board Game Parlor
 * Menu: Dark background with menu-bg image, tabbed categories, gold price styling
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Droplets, Beer, UtensilsCrossed } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MENU_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663449473042/jdeL5AifXpZ5kk9g69B8GL/menu-bg-MdzLbsddzB2xKmzBNxSBXh.webp";

const menuCategories = [
  {
    id: "cafea",
    icon: Coffee,
    label: "Cafea & Ceai",
    items: [
      { name: "Espresso", price: "8 lei" },
      { name: "Cappuccino", price: "12 lei" },
      { name: "Latte", price: "14 lei" },
      { name: "Ceai specialty", price: "10 lei" },
      { name: "Ciocolată caldă", price: "14 lei" },
    ],
  },
  {
    id: "limonade",
    icon: Droplets,
    label: "Limonade & Răcoritoare",
    items: [
      { name: "Limonadă clasică", price: "14 lei" },
      { name: "Limonadă cu lavandă", price: "16 lei" },
      { name: "Smoothie fructe", price: "18 lei" },
      { name: "Apă minerală", price: "6 lei" },
    ],
  },
  {
    id: "bere",
    icon: Beer,
    label: "Bere & Cocktailuri",
    items: [
      { name: "Bere craft (draft)", price: "16 lei" },
      { name: "Bere la sticlă", price: "12 lei" },
      { name: "Cocktail clasic", price: "25 lei" },
      { name: "Spritz", price: "22 lei" },
    ],
  },
  {
    id: "gustari",
    icon: UtensilsCrossed,
    label: "Gustări",
    items: [
      { name: "Nachos cu sos", price: "22 lei" },
      { name: "Bruschete", price: "18 lei" },
      { name: "Platou brânzeturi", price: "35 lei" },
      { name: "Prăjitură zilei", price: "16 lei" },
    ],
  },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("cafea");
  const { ref, isVisible } = useScrollReveal();

  const activeCategory = menuCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="meniu" className="py-24 relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${MENU_BG})` }}
      />
      <div className="absolute inset-0 bg-[oklch(0.08_0.03_260/0.88)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Poțiuni & Elixiruri
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[oklch(0.94_0.02_85)] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Grimoarul{" "}
            <span className="text-gold-shimmer italic">Gusturilor</span>
          </h2>
          <p className="text-[oklch(0.65_0.04_85)] max-w-xl mx-auto"
            style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            Poțiuni, elixiruri și gustări pentru fiecare aventurier.
          </p>
          <div className="deco-divider max-w-xs mx-auto mt-6">
            <span className="text-[oklch(0.75_0.12_75)] text-lg">◆</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Tab navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-2 mb-6 lg:mb-8">
              {menuCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 rounded-sm transition-all duration-300 text-left text-sm sm:text-base ${
                      activeTab === cat.id
                        ? "bg-[oklch(0.75_0.12_75/0.15)] border border-[oklch(0.75_0.12_75/0.5)] text-[oklch(0.75_0.12_75)]"
                        : "border border-[oklch(0.75_0.12_75/0.1)] text-[oklch(0.65_0.04_85)] hover:border-[oklch(0.75_0.12_75/0.3)] hover:text-[oklch(0.80_0.04_85)]"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-semibold text-sm tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
                      {cat.label}
                    </span>
                    {activeTab === cat.id && (
                      <span className="ml-auto text-[oklch(0.75_0.12_75)] text-xs">▸</span>
                    )}
                  </button>
                );
              })}
            </div>

            <p className="text-[oklch(0.45_0.04_85)] text-xs italic" style={{ fontFamily: 'Raleway, sans-serif' }}>
              * Prețurile sunt orientative și pot varia. Întreabă staff-ul pentru meniul complet.
            </p>
          </motion.div>

          {/* Menu items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[oklch(0.13_0.03_260/0.8)] backdrop-blur-md border border-[oklch(0.75_0.12_75/0.2)] rounded-sm p-8"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[oklch(0.75_0.12_75/0.15)]">
                  {(() => {
                    const Icon = activeCategory.icon;
                    return <Icon size={20} className="text-[oklch(0.75_0.12_75)]" />;
                  })()}
                  <h3 className="text-[oklch(0.94_0.02_85)] font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {activeCategory.label}
                  </h3>
                </div>

                <div className="space-y-4">
                  {activeCategory.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.07 }}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.75_0.12_75/0.5)] group-hover:bg-[oklch(0.75_0.12_75)] transition-colors" />
                        <span className="text-[oklch(0.80_0.04_85)] group-hover:text-[oklch(0.94_0.02_85)] transition-colors text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                          {item.name}
                        </span>
                      </div>
                      <div className="flex-1 mx-4 border-b border-dotted border-[oklch(0.75_0.12_75/0.15)]" />
                      <span className="text-[oklch(0.75_0.12_75)] font-bold text-sm" style={{ fontFamily: 'Cinzel, serif' }}>
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
