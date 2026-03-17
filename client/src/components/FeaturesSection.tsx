/*
 * DESIGN: Art Deco / Vintage Board Game Parlor
 * Features: Three-column highlight section with gold icons
 * Shows key selling points of the cafe
 */

import { motion } from "framer-motion";
import { Gamepad2, Coffee, Users, Clock, Star, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: Gamepad2,
    title: "500+ Jocuri",
    desc: "De la clasice la ultimele lansări — colecția noastră crește în fiecare lună cu titluri noi.",
  },
  {
    icon: Coffee,
    title: "Băuturi Artizanale",
    desc: "Cafele de specialitate, ceaiuri, cocktailuri și gustări care completează perfect orice aventură.",
  },
  {
    icon: Users,
    title: "Atmosferă Magică",
    desc: "Un spațiu intim și primitor, perfect pentru prieteni, familie sau o seară romantică.",
  },
  {
    icon: Clock,
    title: "Fără Limită de Timp",
    desc: "Joacă cât vrei — nu există presiunea timpului. Plătești o singură taxă de acces.",
  },
  {
    icon: Star,
    title: "Staff Expert",
    desc: "Echipa noastră te ajută să alegi jocul perfect și îți explică regulile oricărui titlu.",
  },
  {
    icon: MapPin,
    title: "Locație Centrală",
    desc: "Ușor accesibil în centrul Bucureștiului, pe Str. Ieremia Grigorescu 24.",
  },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-[oklch(0.13_0.03_260)] relative">
      {/* Top Art Deco divider */}
      <div className="absolute top-0 left-0 right-0 flex items-center px-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[oklch(0.75_0.12_75/0.3)]" />
        <div className="mx-4 text-[oklch(0.75_0.12_75/0.5)] text-xl">◆</div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[oklch(0.75_0.12_75/0.3)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[oklch(0.75_0.12_75)] text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: 'Cinzel, serif' }}>
            De Ce Noi
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[oklch(0.94_0.02_85)]"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Experiența{" "}
            <span className="text-gold-shimmer italic">Snakes & Wizards</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex gap-4 p-5 rounded-sm border border-[oklch(0.75_0.12_75/0.1)] hover:border-[oklch(0.75_0.12_75/0.3)] hover:bg-[oklch(0.75_0.12_75/0.04)] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[oklch(0.75_0.12_75/0.1)] border border-[oklch(0.75_0.12_75/0.2)] flex items-center justify-center group-hover:bg-[oklch(0.75_0.12_75/0.2)] transition-colors">
                  <Icon size={18} className="text-[oklch(0.75_0.12_75)]" />
                </div>
                <div>
                  <h3 className="text-[oklch(0.94_0.02_85)] font-semibold mb-1 text-sm"
                    style={{ fontFamily: 'Cinzel, serif' }}>
                    {f.title}
                  </h3>
                  <p className="text-[oklch(0.60_0.04_85)] text-sm leading-relaxed"
                    style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Art Deco divider */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center px-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[oklch(0.75_0.12_75/0.3)]" />
        <div className="mx-4 text-[oklch(0.75_0.12_75/0.5)] text-xl">◆</div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[oklch(0.75_0.12_75/0.3)]" />
      </div>
    </section>
  );
}
