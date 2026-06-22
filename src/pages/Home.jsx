import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import HeroSlider       from '../components/HeroSlider/HeroSlider';
import ServiceCard      from '../components/ServiceCard/ServiceCard';
import ProjectCard      from '../components/ProjectCard/ProjectCard';
import TestimonialCard  from '../components/TestimonialCard/TestimonialCard';
import CountUp          from '../components/CountUp/CountUp';
import DetailModal      from '../components/DetailModal/DetailModal';
import { services }     from '../data/services';
import { testimonials } from '../data/testimonials';
import { stats }        from '../data/stats';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';

// ── Featured collections ───────────────────────────────────────────
const collections = [
  { title:'Living Room',      image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=85' },
  { title:'Bedroom',          image:'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=85' },
  { title:'Wardrobes',        image:'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=700&q=85' },
  { title:'Home Office',      image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=85' },
  { title:'Luxury Wallpaper', image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=85' },
  { title:'Modern PVC Panel', image:'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=85' },
];

// ── Projects ───────────────────────────────────────────────────────
const projects = [
  {
    id:1,
    title:'Luxury Villa Living Room',
    category:'Living Room',
    image:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85',
    description:'A complete luxury villa living room makeover with clean, modern styling. Features customized wood-fluted panels, POP false ceiling, designer profile lighting, and a neutral, warm color palette that exudes elegance.',
    specs: {
      'Client': 'Sharma Family',
      'Location': 'Sector 85, Faridabad',
      'Duration': '4 Weeks',
      'Materials': 'High-Density MDF, LED Profiles, Acrylic Paints'
    }
  },
  {
    id:2,
    title:'Master Bedroom Suite',
    category:'Bedroom',
    image:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=85',
    description:'Designed to be a cozy personal sanctuary, this master bedroom features a customized upholstered bedhead panel, modern wardrobes with gold inlay handles, and layered ambient lighting.',
    specs: {
      'Client': 'Verma Family',
      'Location': 'Sector 15, Faridabad',
      'Duration': '3.5 Weeks',
      'Materials': 'Suede Fabric, Laminated Plywood, Hettich Fittings'
    }
  },
  {
    id:3,
    title:'Modern PVC Panel Office',
    category:'PVC Panel',
    image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=85',
    description:'A sleek, highly productive office space using durable water-resistant PVC wall panels to build a stunning accent wall. Outfitted with customized modular work desks.',
    specs: {
      'Client': 'Nexus Tech Co.',
      'Location': 'Neelam Flyover, Faridabad',
      'Duration': '2 Weeks',
      'Materials': 'Fluted PVC Panels, Powder-Coated Metal'
    }
  },
  {
    id:4,
    title:'Floral Wallpaper Bedroom',
    category:'Wallpaper',
    image:'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=85',
    description:'A warm and inviting guest bedroom featuring a premium floral wallpaper accent wall. Complemented by vintage-style nightstands and warm yellow bedside lights.',
    specs: {
      'Client': 'Ms. Ritu Sen',
      'Location': 'Green Field, NCR',
      'Duration': '3 Days',
      'Materials': 'Non-woven Wallpaper, Eco-friendly Adhesive'
    }
  },
  {
    id:5,
    title:'Modular Kitchen Interior',
    category:'Modular',
    image:'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=700&q=85',
    description:'An ultra-functional, handleless modular kitchen featuring marine-grade boiling-waterproof plywood cabinet boxes, high-gloss acrylic shutter fronts, and a custom quartz countertop.',
    specs: {
      'Client': 'Mr. & Mrs. Kapoor',
      'Location': 'Charmwood Village, Faridabad',
      'Duration': '5 Weeks',
      'Materials': 'BWP Plywood, Quartz Stone, Blum Soft-close Hardware'
    }
  },
];

// ── USPs ──────────────────────────────────────────────────────────
const usps = [
  'Premium quality materials from trusted brands',
  'Experienced team of certified designers',
  'On-time project delivery guaranteed',
  'Affordable pricing with no hidden charges',
  'Free design consultation for all clients',
];

// Stats are imported dynamically from '../data/stats'

function StatBox({ stat, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.55, delay:index*0.1 }}
      className="flex flex-col items-center gap-2 text-center">
      <div className="w-14 h-14 bg-primary/15 rounded-2xl flex items-center justify-center mb-1">
        <stat.icon className="text-primary text-2xl"/>
      </div>
      <div className="font-serif font-bold text-4xl text-dark">
        <CountUp value={stat.value} inView={inView} />
      </div>
      <div className="text-warm-gray text-sm font-medium">{stat.label}</div>
    </motion.div>
  );
}

export default function Home() {
  const [activeModalData, setActiveModalData] = useState(null);

  return (
    <>
      {/* 1. Hero Slider */}
      <HeroSlider/>

      {/* 2. Our Services */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-badge">What We Offer</span>
            <h2 className="section-title mx-auto">Our Premium Services</h2>
            <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-4 mb-4"/>
            <p className="section-sub mx-auto max-w-xl">
              From luxury wallpapers to modular kitchens — we transform every corner of your home with craftsmanship and care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => (
              <ServiceCard
                key={s.id}
                service={s}
                index={i}
                onClick={() => setActiveModalData({ ...s, type: 'service' })}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline-primary">
              View All Services <HiArrowRight/>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Collections */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-badge">Collections</span>
            <h2 className="section-title">Featured Collections</h2>
            <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-4 mb-4"/>
            <p className="section-sub mx-auto max-w-xl">
              Handpicked interior styles to inspire your next transformation.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {collections.map((col, i) => (
              <motion.div key={col.title}
                initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.08 }}
                className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-3 aspect-[3/4] shadow-card">
                  <img src={col.image} alt={col.title}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       loading="lazy"/>
                  <div className="absolute inset-0 overlay-bottom"/>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Link to="/gallery"
                      className="block text-center bg-white/10 backdrop-blur-sm border border-white/25 text-white
                                 text-xs font-semibold py-2 rounded-full opacity-0 group-hover:opacity-100
                                 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Explore →
                    </Link>
                  </div>
                </div>
                <div className="font-serif font-semibold text-dark text-sm text-center group-hover:text-primary transition-colors">
                  {col.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose LivDecor */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.65 }}>
              <span className="section-badge">Why Us</span>
              <h2 className="section-title mb-5">
                Why Thousands Choose<br/>
                <span className="text-gradient">LivDecor</span>
              </h2>
              <p className="section-sub mb-8">
                We combine artistic vision with technical expertise to deliver interiors that are beautiful, functional, and built to last.
              </p>
              <ul className="space-y-4">
                {usps.map((u, i) => (
                  <motion.li key={i}
                    initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
                    viewport={{ once:true }} transition={{ delay:i*0.08 }}
                    className="flex items-start gap-3">
                    <HiCheckCircle className="text-primary text-xl shrink-0 mt-0.5"/>
                    <span className="text-dark/80 text-sm leading-relaxed">{u}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary mt-8 inline-flex">
                Learn More <HiArrowRight/>
              </Link>
            </motion.div>

            {/* Right – image collage */}
            <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.65 }}
              className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-card">
                  <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=85"
                       alt="Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-card">
                  <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=85"
                       alt="Bedroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-card">
                  <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=85"
                       alt="Wallpaper" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-card">
                  <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&q=85"
                       alt="PVC" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-light-gray">
            {stats.map((s, i) => <StatBox key={s.label} stat={s} index={i}/>)}
          </div>
        </div>
      </section>

      {/* 5. Latest Projects */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="section-badge">Portfolio</span>
              <h2 className="section-title">Latest Projects</h2>
              <div className="w-12 h-0.5 bg-primary rounded-full mt-4"/>
            </div>
            <Link to="/gallery" className="btn-outline-primary shrink-0">
              View Gallery <HiArrowRight/>
            </Link>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 640:{ slidesPerView:2 }, 1024:{ slidesPerView:3 } }}
            className="proj-swiper !pb-12"
          >
            {projects.map((p, i) => (
              <SwiperSlide key={p.id}>
                <ProjectCard
                  project={p}
                  index={i}
                  onClick={() => setActiveModalData({ ...p, type: 'project' })}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-badge">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-4"/>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 640:{ slidesPerView:2 }, 1024:{ slidesPerView:3 } }}
            className="proj-swiper !pb-12"
          >
            {testimonials.map(t => (
              <SwiperSlide key={t.id} className="h-auto">
                <TestimonialCard t={t}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage:"url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=85')" }}/>
        <div className="absolute inset-0 bg-dark/75"/>
        <div className="relative z-10 container-custom text-center">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.65 }}>
            <span className="section-badge text-primary">Start Today</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 max-w-2xl mx-auto leading-tight">
              Transform Your Home With <span className="text-gradient">LivDecor</span>
            </h2>
            <p className="text-white/65 text-base mb-10 max-w-lg mx-auto">
              Book a free design consultation and let our experts bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation <HiArrowRight/>
              </Link>
              <a href="tel:08796766900" className="btn-outline-white">
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Detail Modal */}
      <DetailModal data={activeModalData} onClose={() => setActiveModalData(null)} />
    </>
  );
}
