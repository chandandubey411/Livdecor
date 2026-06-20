import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import MiniHero    from '../components/MiniHero/MiniHero';
import GalleryCard from '../components/GalleryCard/GalleryCard';
import { galleryItems, galleryCategories } from '../data/gallery';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox,       setLightbox]       = useState(null); // { item, index }

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeCategory);

  const openLightbox = (item) => {
    const index = filtered.findIndex(g => g.id === item.id);
    setLightbox({ item, index });
  };

  const closeLightbox = () => setLightbox(null);

  const prev = () => {
    if (!lightbox) return;
    const newIdx = (lightbox.index - 1 + filtered.length) % filtered.length;
    setLightbox({ item: filtered[newIdx], index: newIdx });
  };

  const next = () => {
    if (!lightbox) return;
    const newIdx = (lightbox.index + 1) % filtered.length;
    setLightbox({ item: filtered[newIdx], index: newIdx });
  };

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return;
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <>
      <MiniHero
        title="Our Gallery"
        breadcrumb="Gallery"
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85"
      />

      <section className="py-20 bg-background">
        <div className="container-custom">

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map(cat => (
              <motion.button key={cat.id} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-luxury'
                    : 'bg-white text-dark/70 border border-light-gray hover:border-primary hover:text-primary'
                }`}>
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory}
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:20 }} transition={{ duration:0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((item, i) => (
                <GalleryCard key={item.id} item={item} index={i} onClick={openLightbox}/>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-warm-gray">No items found.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full
                         flex items-center justify-center text-white transition-colors z-10">
              <HiX size={20}/>
            </button>

            {/* Prev */}
            <button onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 sm:left-8 w-11 h-11 bg-white/10 hover:bg-primary rounded-full
                         flex items-center justify-center text-white transition-all">
              <FiChevronLeft size={22}/>
            </button>

            {/* Image */}
            <motion.div
              key={lightbox.item.id}
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] mx-16 flex flex-col items-center gap-4"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.item.image} alt={lightbox.item.title}
                   className="max-h-[78vh] max-w-full object-contain rounded-xl shadow-2xl"/>
              <div className="text-white/75 text-sm font-medium">{lightbox.item.title}</div>
            </motion.div>

            {/* Next */}
            <button onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 sm:right-8 w-11 h-11 bg-white/10 hover:bg-primary rounded-full
                         flex items-center justify-center text-white transition-all">
              <FiChevronRight size={22}/>
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs">
              {lightbox.index + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
