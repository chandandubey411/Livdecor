import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MiniHero    from '../components/MiniHero/MiniHero';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import DetailModal from '../components/DetailModal/DetailModal';
import { services } from '../data/services';
import { HiArrowRight } from 'react-icons/hi';

export default function Services() {
  const [activeModalData, setActiveModalData] = useState(null);
  return (
    <>
      <MiniHero
        title="Our Services"
        breadcrumb="Services"
        image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=85"
      />

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-badge">What We Offer</span>
            <h2 className="section-title">Premium Interior Services</h2>
            <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-4 mb-4"/>
            <p className="section-sub mx-auto max-w-xl">
              Comprehensive interior design services delivered by certified professionals — from concept to completion.
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-badge">How It Works</span>
            <h2 className="section-title">Our Simple Process</h2>
            <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-4"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step:'01', icon:'📞', title:'Free Consultation', desc:'Call or WhatsApp us to discuss your requirements and get a free design consultation.' },
              { step:'02', icon:'📐', title:'Site Measurement',  desc:'Our team visits your site for measurements and feasibility assessment.'           },
              { step:'03', icon:'🎨', title:'Design & Approval',  desc:'We create 3D designs and mood boards for your review and approval.'                },
              { step:'04', icon:'🏠', title:'Execution & Handover', desc:'Professional installation with quality checks and timely handover.'             },
            ].map((p, i) => (
              <motion.div key={p.step}
                initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.12 }}
                className="text-center relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-3rem)] h-0.5
                                  bg-primary/20 border-dashed"/>
                )}
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4
                                shadow-luxury text-2xl relative z-10">
                  {p.icon}
                </div>
                <div className="text-primary/30 font-bold text-xs tracking-widest mb-1">{p.step}</div>
                <h3 className="font-serif font-bold text-dark text-base mb-2">{p.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage:"url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=85')" }}/>
        <div className="absolute inset-0 bg-dark/78"/>
        <div className="relative z-10 container-custom text-center">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.65 }}>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-white/65 text-base mb-8 max-w-lg mx-auto">
              Contact us today for a free design consultation and detailed quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get Free Quote <HiArrowRight/>
              </Link>
              <a href="tel:08796766900" className="btn-outline-white">Call Now</a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Detail Modal */}
      <DetailModal data={activeModalData} onClose={() => setActiveModalData(null)} />
    </>
  );
}
