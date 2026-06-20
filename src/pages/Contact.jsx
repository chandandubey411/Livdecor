import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import MiniHero     from '../components/MiniHero/MiniHero';
import ContactForm  from '../components/ContactForm/ContactForm';

const info = [
  {
    icon: FaMapMarkerAlt,
    title: 'Visit Our Studio',
    lines: [
      '1st Floor, Green Avenue',
      'Shop No - 4, S3, Sector 85',
      'Faridabad, Haryana 121007',
    ],
  },
  {
    icon: FaPhone,
    title: 'Call / WhatsApp',
    lines: ['087967 66900'],
    href: 'tel:08796766900',
  },
  {
    icon: FaClock,
    title: 'Business Hours',
    lines: ['Monday – Sunday', '10:00 AM – 9:00 PM'],
  },
  {
    icon: HiMail,
    title: 'Email Us',
    lines: ['info@livdecor.in'],
    href: 'mailto:info@livdecor.in',
  },
];

export default function Contact() {
  return (
    <>
      <MiniHero
        title="Contact Us"
        breadcrumb="Contact"
        image="https://images.unsplash.com/photo-1497366754035-f200586c6a72?w=1400&q=85"
      />

      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title">Let's Start Your Project</h2>
            <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-4 mb-4"/>
            <p className="section-sub mx-auto max-w-xl">
              Have a project in mind? We'd love to hear about it. Reach out and our team will respond within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT – Info + Map */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {info.map((item, i) => (
                  <motion.div key={item.title}
                    initial={{ opacity:0, y:25 }} whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}
                    className="bg-white rounded-2xl p-5 shadow-card">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <item.icon className="text-primary text-lg"/>
                    </div>
                    <h4 className="font-serif font-bold text-dark text-sm mb-2">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href}
                         className="block text-warm-gray text-xs leading-relaxed hover:text-primary transition-colors">
                        {item.lines.join('\n')}
                      </a>
                    ) : (
                      item.lines.map((l, j) => (
                        <div key={j} className="text-warm-gray text-xs leading-relaxed">{l}</div>
                      ))
                    )}
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.5, delay:0.3 }}
                href="https://wa.me/918796766900?text=Hi%20LivDecor%2C%20I%20am%20interested%20in%20your%20interior%20design%20services."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-2xl
                           hover:bg-[#1eba58] transition-all duration-300 hover:-translate-y-0.5 shadow-card">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaWhatsapp className="text-xl"/>
                </div>
                <div>
                  <div className="font-semibold text-sm">Chat on WhatsApp</div>
                  <div className="text-white/75 text-xs">Quick response within minutes</div>
                </div>
              </motion.a>

              {/* Map */}
              <motion.div
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.5, delay:0.4 }}
                className="rounded-2xl overflow-hidden shadow-card h-56">
                <iframe
                  title="LivDecor Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.7854!2d77.3123!3d28.3811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDIyJzUyLjAiTiA3N8KwMTgnNDQuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border:0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>

            {/* RIGHT – Form */}
            <motion.div
              initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.65 }}>
              <ContactForm/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-dark py-14">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif font-bold text-2xl text-white mb-1">
                Ready to get started?
              </h3>
              <p className="text-white/55 text-sm">
                Visit our showroom at Sector 85, Faridabad — Mon to Sun, 10 AM to 9 PM.
              </p>
            </div>
            <a href="tel:08796766900"
               className="btn-primary shrink-0">
              <FaPhone className="text-sm"/> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
