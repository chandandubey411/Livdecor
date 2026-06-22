import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

export default function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group rounded-2xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img src={project.image} alt={project.title}
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             loading="lazy"/>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 overlay-bottom"/>
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-400"/>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-1.5">
          {project.category}
        </span>
        <h3 className="font-serif font-bold text-white text-lg leading-snug mb-3">{project.title}</h3>
        <div className="flex items-center gap-1.5 text-primary text-sm font-semibold
                        opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                        transition-all duration-300">
          View Project <HiArrowRight/>
        </div>
      </div>
    </motion.div>
  );
}
