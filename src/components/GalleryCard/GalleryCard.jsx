import { motion } from 'framer-motion';
import { HiZoomIn } from 'react-icons/hi';

export default function GalleryCard({ item, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="relative group overflow-hidden rounded-2xl cursor-pointer bg-secondary"
      onClick={() => onClick(item)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* overlay */}
      <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/55 transition-all duration-400 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-luxury
                          scale-75 group-hover:scale-100 transition-transform duration-400">
            <HiZoomIn className="text-white text-xl"/>
          </div>
          <span className="text-white text-sm font-medium text-center px-4 leading-snug">{item.title}</span>
        </div>
      </div>
    </motion.div>
  );
}
