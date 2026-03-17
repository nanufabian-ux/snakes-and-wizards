/*
 * DESIGN: Art Deco / Vintage Board Game Parlor
 * Footer: Dark with gold accents, Art Deco ornaments
 */

import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, Star, Map } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.09_0.03_260)] border-t border-[oklch(0.75_0.12_75/0.15)]">
      {/* Art Deco top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[oklch(0.75_0.12_75/0.6)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-[oklch(0.75_0.12_75/0.6)] flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663449473042/jdeL5AifXpZ5kk9g69B8GL/t51_b71e562b.png" alt="Snakes & Wizards" className="w-full h-full object-cover" />
              </div>
              <span className="text-[oklch(0.94_0.02_85)] font-semibold text-lg" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}>
                Snakes & Wizards
              </span>
            </div>
            <p className="text-[oklch(0.55_0.04_85)] text-sm leading-relaxed mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
              Cafeneaua de jocuri de societate din inima Bucureștiului. Peste 500 de jocuri, băuturi artizanale și o atmosferă magică.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/snakes_and_wizards" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[oklch(0.75_0.12_75/0.3)] rounded-sm flex items-center justify-center text-[oklch(0.65_0.04_85)] hover:text-[oklch(0.75_0.12_75)] hover:border-[oklch(0.75_0.12_75/0.6)] transition-all">
                <Instagram size={15} />
              </a>
              <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[oklch(0.75_0.12_75/0.3)] rounded-sm flex items-center justify-center text-[oklch(0.65_0.04_85)] hover:text-[oklch(0.75_0.12_75)] hover:border-[oklch(0.75_0.12_75/0.6)] transition-all">
                <Star size={15} />
              </a>
              <a href="https://maps.google.com/?q=Strada+Ieremia+Grigorescu+24+Bucuresti" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[oklch(0.75_0.12_75/0.3)] rounded-sm flex items-center justify-center text-[oklch(0.65_0.04_85)] hover:text-[oklch(0.75_0.12_75)] hover:border-[oklch(0.75_0.12_75/0.6)] transition-all">
                <Map size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[oklch(0.75_0.12_75)] text-xs tracking-[0.25em] uppercase mb-5" style={{ fontFamily: 'Cinzel, serif' }}>
              Navigare
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Acasă", href: "#hero" },
                { label: "Galerie", href: "#galerie" },
                { label: "Jocuri", href: "#jocuri" },
                { label: "Meniu", href: "#meniu" },
                { label: "Program", href: "#program" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[oklch(0.60_0.04_85)] hover:text-[oklch(0.75_0.12_75)] transition-colors text-sm"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[oklch(0.75_0.12_75)] text-xs tracking-[0.25em] uppercase mb-5" style={{ fontFamily: 'Cinzel, serif' }}>
              Contact
            </h4>
            <div className="space-y-3">
              <a href="tel:0726387225" className="flex items-center gap-3 text-[oklch(0.60_0.04_85)] hover:text-[oklch(0.75_0.12_75)] transition-colors text-sm group">
                <Phone size={14} className="text-[oklch(0.75_0.12_75)] flex-shrink-0" />
                <span style={{ fontFamily: 'Raleway, sans-serif' }}>0726 387 225</span>
              </a>
              <div className="flex items-start gap-3 text-[oklch(0.60_0.04_85)] text-sm">
                <MapPin size={14} className="text-[oklch(0.75_0.12_75)] flex-shrink-0 mt-0.5" />
                <div style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <p>Str. Ieremia Grigorescu 24</p>
                  <p>București, România</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:0726387225"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-[oklch(0.75_0.12_75)] text-[oklch(0.13_0.03_260)] text-sm font-bold rounded-sm hover:bg-[oklch(0.85_0.14_80)] transition-all hover:shadow-[0_0_20px_oklch(0.75_0.12_75/0.4)] tracking-wider"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              <Phone size={14} />
              Rezervă Acum
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[oklch(0.75_0.12_75/0.1)] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[oklch(0.40_0.04_85)] text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
            © 2026 Snakes & Wizards. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[oklch(0.75_0.12_75)]" />
            <p className="text-[oklch(0.40_0.04_85)] text-xs" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.1em' }}>
              BUCUREȘTI • BOARD GAME CAFE
            </p>
            <div className="w-1 h-1 rounded-full bg-[oklch(0.75_0.12_75)]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
