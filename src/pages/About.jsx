import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import MiniHero from '../components/MiniHero/MiniHero';
import CountUp from '../components/CountUp/CountUp';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { FaAward, FaUsers, FaProjectDiagram, FaSmile, FaQuoteLeft } from 'react-icons/fa';

const stats = [
  { icon: FaProjectDiagram, value:'500+', label:'Projects Done'    },
  { icon: FaSmile,          value:'350+', label:'Happy Clients'    },
  { icon: FaAward,          value:'8+',   label:'Years Experience' },
  { icon: FaUsers,          value:'20+',  label:'Expert Designers' },
];

const team = [
  { name:'Rajesh Kumar',  role:'Lead Interior Designer', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85' },
  { name:'Priya Singh',   role:'Wallpaper Specialist',   img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=85' },
  { name:'Amit Sharma',   role:'PVC Panel Expert',       img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=85' },
  { name:'Neha Gupta',    role:'3D Visualizer',          img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=85' },
];

const values = [
  'Premium materials sourced from top brands',
  'Transparent pricing — no hidden charges',
  'On-time delivery with quality assurance',
  'Personalized design for every client',
  'After-service support and maintenance',
];

function StatCard({ stat, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.55, delay:index*0.1 }}
      className="bg-white rounded-2xl p-6 text-center shadow-card">
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
        <stat.icon className="text-primary text-2xl"/>
      </div>
      <div className="font-serif font-bold text-3xl text-dark">
        <CountUp value={stat.value} inView={inView} />
      </div>
      <div className="text-warm-gray text-sm mt-1">{stat.label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <>
      <MiniHero
        title="About LivDecor"
        breadcrumb="About"
        image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=85"
      />

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.65 }}>
              <span className="section-badge">Our Story</span>
              <h2 className="section-title mb-5">Who We Are</h2>
              <div className="w-12 h-0.5 bg-primary rounded-full mb-6"/>
              <p className="text-warm-gray text-base leading-relaxed mb-5">
                LivDecor is a premier interior design studio based in Sector 85, Faridabad. Founded with a passion for transforming ordinary spaces into extraordinary experiences, we specialize in wallpaper installation, PVC wall panels, false ceilings, and complete modular interiors.
              </p>
              <p className="text-warm-gray text-base leading-relaxed mb-8">
                With over 8 years of experience and 500+ successfully completed projects across the NCR region, our team of certified designers and craftsmen brings artistry and precision to every project — no matter the size or budget.
              </p>
              <div className="flex items-start gap-4 bg-secondary rounded-2xl p-5">
                <FaQuoteLeft className="text-primary text-2xl shrink-0 mt-1"/>
                <p className="text-dark font-medium text-sm leading-relaxed italic">
                  "Our mission is simple — to make every home a masterpiece. We don't just design interiors; we craft experiences that stand the test of time."
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.65 }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-card">
                  <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=85"
                       alt="Living Room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden aspect-square shadow-card">
                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=85"
                         alt="Wallpaper" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-card">
                    <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=85"
                         alt="Bedroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon:'🎯',
                title:'Our Mission',
                text:'To deliver exceptional interior design services that transform living spaces into personalized sanctuaries — combining quality materials, innovative designs, and outstanding craftsmanship at every price point.',
              },
              {
                icon:'🔭',
                title:'Our Vision',
                text:'To become the most trusted interior design brand in NCR, known for our commitment to excellence, sustainability, and making premium aesthetics accessible to every household and business.',
              },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.55, delay:i*0.15 }}
                className="bg-white rounded-2xl p-8 shadow-card">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-dark mb-3">{item.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-badge">Numbers Speak</span>
            <h2 className="section-title">LivDecor By The Numbers</h2>
            <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-4"/>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i}/>)}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-badge">Trust & Quality</span>
              <h2 className="section-title mb-6">Why Customers Trust Us</h2>
              <div className="w-12 h-0.5 bg-primary rounded-full mb-8"/>
              <ul className="space-y-4">
                {values.map((v, i) => (
                  <motion.li key={i}
                    initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
                    viewport={{ once:true }} transition={{ delay:i*0.09 }}
                    className="flex items-start gap-3">
                    <HiCheckCircle className="text-primary text-xl shrink-0 mt-0.5"/>
                    <span className="text-dark/80 text-sm leading-relaxed">{v}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary mt-8 inline-flex">
                Get Free Consultation <HiArrowRight/>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card h-[450px]">
              <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=85"
                   alt="Why Trust LivDecor" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-badge">Meet The Team</span>
            <h2 className="section-title">Our Expert Team</h2>
            <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-4"/>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name}
                initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}
                className="group text-center">
                <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[3/4] shadow-card">
                  <img src={member.img} alt={member.name}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-all duration-400"/>
                </div>
                <h3 className="font-serif font-bold text-dark text-sm">{member.name}</h3>
                <p className="text-warm-gray text-xs mt-0.5">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
