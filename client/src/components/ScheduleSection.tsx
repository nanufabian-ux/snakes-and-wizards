/*
 * DESIGN: Art Deco / Vintage Board Game Parlor
 * Schedule: Correct hours from user image, gold accent for today's row
 * Phone: 0726 387 225 (corrected)
 * Contact: Address, social links, map link
 */

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Instagram, Star, Map } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// CORRECT schedule from user:
// Luni–Vineri: 17:00–00:00
// Sâmbătă–Duminică: 14:00–00:00
const schedule = [
  { day: "Luni", open: "17:00", close: "00:00" },
  { day: "Marți", open: "17:00", close: "00:00" },
  { day: "Miercuri", open: "17:00", close: "00:00" },
  { day: "Joi", open: "17:00", close: "00:00" },
  { day: "Vineri", open: "17:00", close: "00:00" },
  { day: "Sâmbătă", open: "14:00", close: "00:00" },
  { day: "Duminică", open: "14:00", close: "00:00" },
];

function getTodayIndex() {
  // JS: 0=Sun, 1=Mon, ... 6=Sat
  // Our array: 0=Luni(Mon), 1=Marți(Tue), ... 6=Duminică(Sun)
  const jsDay = new Date().getDay();
  const map: Record<number, number> = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 0: 6 };
  return map[jsDay];
}

export default function ScheduleSection() {
  const { ref, isVisible } = useScrollReveal();
  const todayIdx = getTodayIndex();

  return (
    <section id="program" className="py-24 bg-[oklch(0.11_0.03_260)] relative overflow-hidden">
      {/* Art Deco background pattern */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, oklch(0.75 0.12 75) 1px, transparent 1px), radial-gradient(circle at 75% 75%, oklch(0.75 0.12 75) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
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
            Vino să Ne Vizitezi
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[oklch(0.94_0.02_85)] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Când ne{" "}
            <span className="text-gold-shimmer italic">Găsești</span>
          </h2>
          <div className="deco-divider max-w-xs mx-auto mt-6">
            <span className="text-[oklch(0.75_0.12_75)] text-lg">◆</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Schedule card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[oklch(0.16_0.04_260/0.8)] backdrop-blur-md border border-[oklch(0.75_0.12_75/0.2)] rounded-sm p-8"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[oklch(0.75_0.12_75/0.15)]">
              <Clock size={20} className="text-[oklch(0.75_0.12_75)]" />
              <h3 className="text-[oklch(0.94_0.02_85)] font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                Program
              </h3>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {schedule.map((row, i) => {
                const isToday = i === todayIdx;
                return (
                  <motion.div
                    key={row.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className={`flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3 rounded-sm transition-all text-sm sm:text-base ${
                      isToday
                        ? "bg-[oklch(0.75_0.12_75/0.12)] border border-[oklch(0.75_0.12_75/0.4)]"
                        : "border border-transparent hover:border-[oklch(0.75_0.12_75/0.1)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <span className="w-2 h-2 rounded-full bg-[oklch(0.75_0.12_75)] animate-pulse" />
                      )}
                      <span
                        className={`text-sm font-semibold ${isToday ? "text-[oklch(0.75_0.12_75)]" : "text-[oklch(0.80_0.04_85)]"}`}
                        style={{ fontFamily: 'Cinzel, serif' }}
                      >
                        {row.day}
                        {isToday && (
                          <span className="ml-2 text-[10px] text-[oklch(0.75_0.12_75/0.7)] font-normal tracking-wider">
                            AZI
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-bold ${isToday ? "text-[oklch(0.75_0.12_75)]" : "text-[oklch(0.65_0.04_85)]"}`}
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      {row.open} – {row.close}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact & Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Phone */}
            <div className="bg-[oklch(0.16_0.04_260/0.8)] backdrop-blur-md border border-[oklch(0.75_0.12_75/0.2)] rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone size={18} className="text-[oklch(0.75_0.12_75)]" />
                <h3 className="text-[oklch(0.94_0.02_85)] font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Rezervări
                </h3>
              </div>
              <a
                href="tel:0726387225"
                className="group flex items-center gap-4 p-4 bg-[oklch(0.75_0.12_75/0.08)] border border-[oklch(0.75_0.12_75/0.2)] rounded-sm hover:bg-[oklch(0.75_0.12_75/0.15)] hover:border-[oklch(0.75_0.12_75/0.5)] transition-all"
              >
                <div className="w-10 h-10 bg-[oklch(0.75_0.12_75)] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[oklch(0.13_0.03_260)]" />
                </div>
                <div>
                  <p className="text-[oklch(0.75_0.12_75)] font-bold text-xl tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
                    0726 387 225
                  </p>
                  <p className="text-[oklch(0.55_0.04_85)] text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Apelează pentru rezervare sau informații
                  </p>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="bg-[oklch(0.16_0.04_260/0.8)] backdrop-blur-md border border-[oklch(0.75_0.12_75/0.2)] rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={18} className="text-[oklch(0.75_0.12_75)]" />
                <h3 className="text-[oklch(0.94_0.02_85)] font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Locație
                </h3>
              </div>
              <p className="text-[oklch(0.80_0.04_85)] mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Strada Ieremia Grigorescu 24
              </p>
              <p className="text-[oklch(0.55_0.04_85)] text-sm mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                București, România
              </p>
              <a
                href="https://maps.google.com/?q=Strada+Ieremia+Grigorescu+24+Bucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[oklch(0.75_0.12_75/0.3)] text-[oklch(0.75_0.12_75)] text-sm rounded-sm hover:bg-[oklch(0.75_0.12_75/0.1)] transition-all"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                <Map size={14} />
                Deschide în Maps
              </a>
            </div>

            {/* Social links */}
            <div className="bg-[oklch(0.16_0.04_260/0.8)] backdrop-blur-md border border-[oklch(0.75_0.12_75/0.2)] rounded-sm p-6">
              <h3 className="text-[oklch(0.94_0.02_85)] font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Urmărește-ne
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/snakes_and_wizards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[oklch(0.55_0.20_0)] to-[oklch(0.55_0.20_300)] text-white text-sm rounded-sm hover:opacity-90 transition-opacity"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  <Instagram size={14} />
                  Instagram
                </a>
                <a
                  href="https://www.tripadvisor.com/Restaurant_Review-g294458-d12345678-Reviews-Snakes_and_Wizards-Bucharest.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-[oklch(0.45_0.18_160)] text-white text-sm rounded-sm hover:opacity-90 transition-opacity"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  <Star size={14} />
                  TripAdvisor
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
