import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiHome, HiChevronRight } from 'react-icons/hi';

export default function MiniHero({ title, breadcrumb, image }) {
  const bg = image || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=85';

  return (
    <section className="relative h-[340px] sm:h-[400px] flex items-end">
      {/* BG */}
      <div className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url(${bg})` }}/>
      <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/60 to-dark/30"/>

      {/* Content */}
      <div className="relative z-10 container-custom pb-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-white/55 text-xs mb-4 font-medium tracking-wide">
            <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
              <HiHome size={12}/> Home
            </Link>
            <HiChevronRight size={12}/>
            <span className="text-primary">{breadcrumb || title}</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
          <div className="mt-4 w-14 h-1 bg-primary rounded-full"/>
        </motion.div>
      </div>
    </section>
  );
}
