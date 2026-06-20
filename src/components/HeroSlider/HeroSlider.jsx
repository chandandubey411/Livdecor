import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=90',
    badge: 'Premium Interiors',
    heading: 'Design Your Dream',
    accent:  'Living Space',
    sub: 'Stylish furniture, wallpaper and PVC panel solutions to elevate your home into a masterpiece.',
    cta1: { text: 'Explore Services', path: '/services' },
    cta2: { text: 'Get Free Quote',   path: '/contact'  },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&q=90',
    badge: 'Bedroom Interiors',
    heading: 'Transform Every',
    accent:  'Corner Beautifully',
    sub: 'From master bedrooms to cozy guest rooms — we create serene spaces that inspire rest and renewal.',
    cta1: { text: 'View Gallery',   path: '/gallery'  },
    cta2: { text: 'Our Services',   path: '/services' },
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=90',
    badge: 'Wallpaper & Panels',
    heading: 'Elegant Walls With',
    accent:  'Premium Finishes',
    sub: 'Discover our exclusive collection of PVC wall panels and luxury wallpapers — modern, durable, and effortlessly stylish.',
    cta1: { text: 'Explore Designs', path: '/services' },
    cta2: { text: 'Contact Us',      path: '/contact'  },
  },
];

const txt = {
  hidden:  { opacity: 0, y: 36 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.14, duration: 0.7, ease: 'easeOut' } }),
};

function Slide({ s }) {
  return (
    <div className="relative h-full flex items-center">
      {/* BG */}
      <div className="absolute inset-0 bg-cover bg-center scale-[1.06] transition-transform duration-[7000ms] ease-out"
           style={{ backgroundImage: `url(${s.image})` }}/>
      <div className="absolute inset-0 overlay-hero"/>

      {/* Content */}
      <div className="relative z-10 container-custom w-full pt-20">
        <div className="max-w-2xl">
          <motion.span custom={0} initial="hidden" animate="visible" variants={txt}
            className="inline-block text-primary text-xs font-bold tracking-[0.28em] uppercase mb-5
                       border border-primary/50 rounded-full px-4 py-1.5">
            {s.badge}
          </motion.span>

          <motion.h1 custom={1} initial="hidden" animate="visible" variants={txt}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-tight mb-4">
            {s.heading}<br/>
            <span className="text-gradient">{s.accent}</span>
          </motion.h1>

          <motion.p custom={2} initial="hidden" animate="visible" variants={txt}
            className="text-white/70 text-base md:text-lg leading-relaxed mb-9 max-w-xl">
            {s.sub}
          </motion.p>

          <motion.div custom={3} initial="hidden" animate="visible" variants={txt}
            className="flex flex-wrap gap-4">
            <Link to={s.cta1.path} className="btn-primary group">
              {s.cta1.text}
              <HiArrowRight className="group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link to={s.cta2.path} className="btn-outline-white">
              {s.cta2.text}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/25 animate-pulse"/>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  return (
    <section className="relative h-screen min-h-[620px] hero-swiper">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        navigation pagination={{ clickable: true }}
        loop speed={1000}
        className="h-full w-full"
      >
        {slides.map(s => (
          <SwiperSlide key={s.id} className="h-full">
            <Slide s={s}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
