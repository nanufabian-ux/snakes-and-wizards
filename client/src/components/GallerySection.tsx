/*
 * DESIGN: Art Deco / Vintage Board Game Parlor
 * Gallery: Masonry-style grid with gold hover overlays
 * Images: Mix of generated + real cafe photos
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Gallery images for Snakes & Wizards cafe
const galleryImages = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449473042/jdeL5AifXpZ5kk9g69B8GL/hero-bg-E9FSxgWjpv4QwZY2voBhfe.webp",
    alt: "Atmosfera din cafenea",
    caption: "Seară de jocuri",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449473042/jdeL5AifXpZ5kk9g69B8GL/SaveClip.App_651985466_18106864537891835_6783907917516562085_n_2e9565bc.jpg",
    alt: "Oameni jucând jocuri",
    caption: "Momente cu prietenii",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449473042/jdeL5AifXpZ5kk9g69B8GL/SaveClip.App_613730029_18378321529156393_1176267573071567107_n_7eeea88e.jpg",
    alt: "Jocuri de societate",
    caption: "Colecția noastră",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449473042/jdeL5AifXpZ5kk9g69B8GL/games-section-6PJhSz9crzb6HBrEduqge3.webp",
    alt: "Jocuri de societate",
    caption: "Peste 500 de jocuri",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=600&q=80",
    alt: "Prieteni la jocuri",
    caption: "Momente de neuitat",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=600&q=80",
    alt: "Board games în acțiune",
    caption: "Atmosferă magică",
    span: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="galerie" className="py-24 bg-[oklch(0.11_0.03_260)] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, oklch(0.75 0.12 75) 0px, oklch(0.75 0.12 75) 1px, transparent 1px, transparent 50px)`,
          backgroundSize: '50px 50px'
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
            Sanctuarul Nostru
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[oklch(0.94_0.02_85)] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Imagini din{" "}
            <span className="text-gold-shimmer italic">Sanctuar</span>
          </h2>
          <div className="deco-divider max-w-xs mx-auto mt-6">
            <span className="text-[oklch(0.75_0.12_75)] text-lg">◆</span>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-auto sm:grid-rows-3 gap-2 sm:gap-3 h-auto sm:h-[700px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${img.span.replace('col-span-2', 'sm:col-span-2 col-span-1').replace('row-span-2', 'sm:row-span-2 row-span-1')} relative overflow-hidden rounded-sm cursor-pointer group h-[200px] sm:h-auto`}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.03_260/0.8)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[oklch(0.94_0.02_85)] text-sm font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
                  {img.caption}
                </p>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-[oklch(0.75_0.12_75/0.9)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={14} className="text-[oklch(0.13_0.03_260)]" />
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-[oklch(0.75_0.12_75/0)] group-hover:border-[oklch(0.75_0.12_75/0.4)] transition-colors duration-300 rounded-sm pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[oklch(0.05_0.02_260/0.95)] backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] rounded-sm overflow-hidden border border-[oklch(0.75_0.12_75/0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selected].src}
                alt={galleryImages[selected].alt}
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-[oklch(0.75_0.12_75)] rounded-full flex items-center justify-center hover:bg-[oklch(0.85_0.14_80)] transition-colors"
              >
                <X size={18} className="text-[oklch(0.13_0.03_260)]" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[oklch(0.08_0.03_260/0.9)] to-transparent">
                <p className="text-[oklch(0.94_0.02_85)] font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
                  {galleryImages[selected].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
