import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function DetailModal({ data, onClose }) {
  // Close modal on Escape press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (data) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [data, onClose]);

  if (!data) return null;

  const isProject = data.type === 'project';
  const waMessage = `Hi LivDecor, I am interested in learning more about your ${
    isProject ? 'project' : 'service'
  }: "${data.title}". Can you provide more details?`;
  const waUrl = `https://wa.me/918796766900?text=${encodeURIComponent(waMessage)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row border border-light-gray"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-dark hover:text-primary transition-all duration-200 shadow-md border border-light-gray/40"
            aria-label="Close modal"
          >
            <HiX size={20} />
          </button>

          {/* Left Column: Image */}
          <div className="w-full md:w-1/2 h-60 md:h-auto min-h-[240px] relative overflow-hidden bg-secondary">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />
            
            {/* Float Service Icon */}
            {!isProject && data.icon && (
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl shadow-luxury">
                {data.icon}
              </div>
            )}

            {/* Float Project Category */}
            {isProject && data.category && (
              <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-luxury">
                {data.category}
              </div>
            )}
          </div>

          {/* Right Column: Text & Interaction */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
            <div>
              {/* Header tags */}
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary/80 bg-primary/10 px-2.5 py-1 rounded-md inline-block mb-3">
                {isProject ? 'Completed Project' : 'LivDecor Services'}
              </span>

              <h2 className="font-serif font-bold text-2xl md:text-3xl text-dark leading-tight mb-3">
                {data.title}
              </h2>

              <div className="w-10 h-0.5 bg-primary/70 rounded-full mb-5" />

              <p className="text-warm-gray text-sm md:text-base leading-relaxed mb-6">
                {data.description || 'Premium interior design solutions crafted to perfection by LivDecor experts.'}
              </p>

              {/* Service Features checklist */}
              {!isProject && data.features && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase text-dark tracking-wider mb-3">Key Features & Offerings</h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {data.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-dark/80">
                        <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0 text-primary mt-0.5">
                          <HiCheck size={12} className="stroke-[2.5]" />
                        </span>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Project Specs grid */}
              {isProject && data.specs && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase text-dark tracking-wider mb-3">Project Overview</h4>
                  <div className="grid grid-cols-2 gap-4 bg-secondary/50 border border-light-gray/40 rounded-2xl p-4">
                    {Object.entries(data.specs).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-[10px] font-bold text-warm-gray uppercase tracking-wider">{key}</div>
                        <div className="text-sm font-semibold text-dark mt-0.5 leading-snug">{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-light-gray mt-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center text-center text-xs py-3 px-5 grow"
              >
                📞 Enquire on WhatsApp
              </a>
              <Link
                to="/contact"
                onClick={onClose}
                className="btn-outline-primary justify-center text-center text-xs py-3 px-5"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
