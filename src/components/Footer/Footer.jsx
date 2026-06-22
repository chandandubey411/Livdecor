import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import logoImg from '../../assets/logo.png';
import { services } from '../../data/services';

const quickLinks  = [
  { name:'Home',       path:'/'         },
  { name:'About Us',   path:'/about'    },
  { name:'Services',   path:'/services' },
  { name:'Gallery',    path:'/gallery'  },
  { name:'Contact',    path:'/contact'  },
];
const socials     = [
  { Icon: FaInstagram, href:'#',                              label:'Instagram', hover:'hover:bg-pink-600'  },
  { Icon: FaFacebookF, href:'#',                              label:'Facebook',  hover:'hover:bg-blue-600'  },
  { Icon: FaWhatsapp,  href:'https://wa.me/918796766900',     label:'WhatsApp',  hover:'hover:bg-green-600' },
  { Icon: FaYoutube,   href:'#',                              label:'YouTube',   hover:'hover:bg-red-600'   },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src={logoImg} alt="LivDecor Logo" className="w-10 h-10 object-contain rounded-lg bg-white p-0.5 shadow-luxury" />
              <div className="leading-none">
                <div className="font-serif font-bold text-xl text-white">LivDecor</div>
                <div className="text-[8.5px] tracking-[0.18em] text-primary uppercase">Interior Design</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Premium interior design solutions — wallpaper, PVC panels, false ceilings, and complete home interiors across Faridabad & NCR.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label, hover }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                   className={`w-9 h-9 bg-white/10 rounded-full flex items-center justify-center
                               text-white/65 hover:text-white transition-all duration-300 ${hover}`}>
                  <Icon size={14}/>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.name}>
                  <Link to={l.path}
                    className="text-white/55 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <HiArrowRight className="text-primary/40 group-hover:text-primary text-xs transition-colors"/>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s.id}>
                  <Link to="/services"
                    className="text-white/55 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <HiArrowRight className="text-primary/40 group-hover:text-primary text-xs transition-colors"/>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-0.5 shrink-0"/>
                <span className="text-white/55 text-sm leading-relaxed">
                  1st Floor, Green Avenue, Shop No&nbsp;4, S3,<br/>
                  Sector 85, Faridabad, Haryana&nbsp;121007
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary shrink-0 text-sm"/>
                <a href="tel:08796766900" className="text-white/55 hover:text-primary text-sm transition-colors">
                  087967 66900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-primary shrink-0 text-sm"/>
                <div className="text-white/55 text-sm">
                  <div>Mon – Sun</div>
                  <div>10:00 AM – 9:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/35 text-xs">© {new Date().getFullYear()} LivDecor. All rights reserved.</p>
          <p className="text-white/25 text-xs">Designed with <span className="text-primary">♥</span> for premium interiors</p>
        </div>
      </div>
    </footer>
  );
}
