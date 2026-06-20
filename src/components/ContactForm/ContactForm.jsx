import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiLoader, FiCheck } from 'react-icons/fi';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [selectedService, setSelectedService] = useState('Full Home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    { id: 'Full Home', label: 'Full Home' },
    { id: 'Kitchen', label: 'Modular Kitchen' },
    { id: 'Living', label: 'Living Room' },
    { id: 'Commercial', label: 'Commercial' },
  ];

  const handle = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors(p => {
        const next = { ...p };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = e => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate sending message to create a premium experience
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
    }, 1500);
  };

  if (sent) return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white rounded-3xl p-8 md:p-10 shadow-card border border-light-gray/50 flex flex-col items-center gap-6 text-center"
    >
      <div className="relative">
        {/* Outer pulsing ring */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute -inset-2 rounded-full bg-primary/20"
        />
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 15 }}
          className="relative w-20 h-20 bg-gradient-to-tr from-primary to-primary-light rounded-full flex items-center justify-center shadow-lg"
        >
          <FiCheck className="text-white text-4xl" />
        </motion.div>
      </div>

      <div className="space-y-2">
        <h3 className="font-serif font-bold text-2xl text-dark">Message Sent!</h3>
        <p className="text-warm-gray text-sm leading-relaxed max-w-sm">
          Thank you for reaching out. We have received your query for a <strong>{selectedService}</strong> design project. Our team will contact you within 24 hours.
        </p>
      </div>

      <div className="w-full h-px bg-light-gray/50 my-2" />

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <a 
          href={`https://wa.me/918796766900?text=Hi%20LivDecor%2C%20I%20am%20interested%20in%20your%20services%20for%20a%20${encodeURIComponent(selectedService)}%20project.`}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-grow flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-[#1eba58] hover:shadow-[0_8px_20px_rgba(37,211,102,0.25)] hover:-translate-y-0.5"
        >
          <FaWhatsapp className="text-lg"/> WhatsApp Us
        </a>
        <button 
          onClick={() => {
            setForm({ name: '', phone: '', email: '', message: '' });
            setSent(false);
          }}
          className="flex-grow border border-primary text-primary hover:bg-primary/5 py-3.5 rounded-full text-sm font-semibold transition-all duration-300"
        >
          Send New Message
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card border border-light-gray/40 relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <h2 className="font-serif font-bold text-3xl text-dark mb-1.5 tracking-tight">Send a Message</h2>
      <p className="text-warm-gray text-sm mb-8">We'll get back to you within 24 hours.</p>

      <form onSubmit={submit} className="space-y-6">
        {/* Service selection chips */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-warm-gray/90">
            What service are you looking for?
          </label>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
            {services.map(service => {
              const active = selectedService === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(service.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 text-center sm:text-left ${
                    active
                      ? 'bg-primary text-white shadow-[0_4px_12px_rgba(216,154,91,0.25)] scale-[1.02]'
                      : 'bg-secondary/60 text-warm-gray hover:bg-secondary hover:text-dark'
                  }`}
                >
                  {service.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Inputs row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name Field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-warm-gray/90">
              Full Name <span className="text-primary">*</span>
            </label>
            <div className="relative group">
              <FiUser className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg transition-colors duration-300 ${errors.name ? 'text-red-400 animate-pulse' : 'text-warm-gray/50 group-focus-within:text-primary'}`} />
              <input
                name="name"
                value={form.name}
                onChange={handle}
                placeholder="Your name"
                className={`form-input-premium ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : ''}`}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs font-medium pl-1 animate-fade-in">{errors.name}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-warm-gray/90">
              Phone <span className="text-primary">*</span>
            </label>
            <div className="relative group">
              <FiPhone className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg transition-colors duration-300 ${errors.phone ? 'text-red-400 animate-pulse' : 'text-warm-gray/50 group-focus-within:text-primary'}`} />
              <input
                name="phone"
                value={form.phone}
                onChange={handle}
                placeholder="+91 XXXXX XXXXX"
                className={`form-input-premium ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : ''}`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs font-medium pl-1 animate-fade-in">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-warm-gray/90">
            Email Address
          </label>
          <div className="relative group">
            <FiMail className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg transition-colors duration-300 ${errors.email ? 'text-red-400 animate-pulse' : 'text-warm-gray/50 group-focus-within:text-primary'}`} />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handle}
              placeholder="your@email.com"
              className={`form-input-premium ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : ''}`}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs font-medium pl-1 animate-fade-in">{errors.email}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-warm-gray/90">
            Message <span className="text-primary">*</span>
          </label>
          <div className="relative group">
            <FiMessageSquare className={`absolute left-4 top-5 text-lg transition-colors duration-300 ${errors.message ? 'text-red-400 animate-pulse' : 'text-warm-gray/50 group-focus-within:text-primary'}`} />
            <textarea
              name="message"
              value={form.message}
              onChange={handle}
              rows={4}
              placeholder="Tell us about your project, budget, and timeline…"
              className={`form-input-premium resize-none pt-4 ${errors.message ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : ''}`}
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-xs font-medium pl-1 animate-fade-in">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.015 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.985 }}
          className={`btn-primary w-full justify-center gap-2.5 py-4 text-sm font-bold tracking-wide rounded-2xl relative overflow-hidden transition-all duration-300 group ${isSubmitting ? 'bg-primary-dark cursor-not-allowed opacity-90' : 'hover:shadow-[0_12px_32px_rgba(216,154,91,0.25)]'}`}
        >
          {isSubmitting ? (
            <>
              <FiLoader className="animate-spin text-lg" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <HiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </motion.button>

        {/* Or Divider */}
        <div className="flex items-center gap-4 pt-2">
          <div className="flex-1 h-px bg-light-gray/60" />
          <span className="text-warm-gray/70 text-xs font-medium uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-light-gray/60" />
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/918796766900?text=Hi%20LivDecor%2C%20I%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 border border-[#25D366]/80 text-[#25D366] hover:bg-[#25D366]/5 py-3.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-[0_8px_20px_rgba(37,211,102,0.08)] hover:-translate-y-0.5"
        >
          <FaWhatsapp className="text-lg" /> 
          <span>Discuss on WhatsApp</span>
        </a>
      </form>
    </div>
  );
}
