import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';
import logoImg from '../../assets/logo.png';

const navLinks = [
  { name: 'Home',     path: '/'        },
  { name: 'About',    path: '/about'   },
  { name: 'Services', path: '/services'},
  { name: 'Gallery',  path: '/gallery' },
  { name: 'Contact',  path: '/contact' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const solid   = scrolled || !isHome;
  const outerCls = solid
    ? 'fixed top-0 inset-x-0 z-50 transition-all duration-500 py-3 px-4 md:px-8'
    : 'fixed top-0 inset-x-0 z-50 transition-all duration-500 py-5 px-4 md:px-8';

  const innerCls = solid
    ? 'mx-auto max-w-7xl w-full transition-all duration-500 rounded-2xl lg:rounded-full py-2.5 px-6 flex items-center justify-between bg-white/85 backdrop-blur-md border border-neutral-200/40 shadow-[0_12px_40px_rgba(0,0,0,0.06)]'
    : 'mx-auto max-w-7xl w-full transition-all duration-500 py-2.5 px-6 flex items-center justify-between bg-transparent border border-transparent';

  const txtCls  = solid ? 'text-dark'            : 'text-white';
  const linkCls = solid
    ? 'text-dark/80 hover:text-primary'
    : 'text-white/80 hover:text-white';

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={outerCls}
      >
        <div className={innerCls}>
          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logoImg} alt="LivDecor Logo" className="w-9 h-9 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110 shadow-luxury bg-white p-0.5" />
            <div className="leading-none">
              <div className={`font-serif font-bold text-[1.25rem] tracking-wide transition-colors duration-300 ${txtCls}`}>
                LivDecor
              </div>
              <div className={`text-[8.5px] tracking-[0.18em] uppercase font-medium transition-colors duration-300
                               ${solid ? 'text-primary' : 'text-primary-light'}`}>
                Interior Design
              </div>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-xs font-semibold uppercase tracking-wider transition-colors duration-300 py-2 px-4 rounded-full
                   ${isActive ? 'text-primary' : linkCls}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        className="absolute inset-0 bg-primary/10 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:08796766900"
               className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                 solid ? 'text-warm-gray hover:text-primary' : 'text-white/75 hover:text-white'
               }`}>
              <FaPhone className="text-primary text-xs" />
              <span>087967 66900</span>
            </a>
            <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-xs">Get Quote</Link>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${txtCls}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24}/> : <HiMenuAlt3 size={24}/>}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-secondary">
                <div className="flex items-center gap-2">
                  <img src={logoImg} alt="LivDecor Logo" className="w-8 h-8 object-contain rounded-lg bg-white" />
                  <span className="font-serif font-bold text-dark text-lg">LivDecor</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="text-warm-gray hover:text-dark p-1">
                  <HiX size={22}/>
                </button>
              </div>

              {/* links */}
              <nav className="flex-1 px-5 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div key={link.name}
                    initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }}
                    transition={{ delay: i * 0.06 }}>
                    <NavLink to={link.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                         ${isActive ? 'bg-primary/10 text-primary' : 'text-dark hover:bg-secondary hover:text-primary'}`
                      }>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"/>
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* footer */}
              <div className="px-5 pb-6 pt-4 border-t border-secondary space-y-3">
                <a href="tel:08796766900" className="flex items-center gap-2.5 text-sm text-warm-gray">
                  <FaPhone className="text-primary text-xs"/> 087967 66900
                </a>
                <Link to="/contact" className="btn-primary w-full justify-center">Get Free Quote</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
