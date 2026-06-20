import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="card-base group"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"/>
        <div className="absolute top-4 left-4 w-10 h-10 bg-primary rounded-xl flex items-center justify-center
                        text-xl shadow-luxury transition-transform duration-300 group-hover:-translate-y-1">
          {service.icon}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-serif font-bold text-xl text-dark mb-2 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-warm-gray text-sm leading-relaxed mb-4">{service.description}</p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5">
          {service.features.map(f => (
            <li key={f} className="flex items-center gap-2 text-sm text-dark/70">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"/>
              {f}
            </li>
          ))}
        </ul>

        <Link to="/contact"
          className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold
                     group-hover:gap-2.5 transition-all duration-300">
          Get Quote <HiArrowRight/>
        </Link>
      </div>
    </motion.div>
  );
}
