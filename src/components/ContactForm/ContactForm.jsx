import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

export default function ContactForm() {
  const [form, setForm]   = useState({ name:'', phone:'', email:'', message:'' });
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState('');

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSent(true);
  };

  if (sent) return (
    <div className="bg-white rounded-2xl p-8 shadow-card flex flex-col items-center gap-4 text-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
        <span className="text-3xl">✅</span>
      </div>
      <h3 className="font-serif font-bold text-xl text-dark">Message Sent!</h3>
      <p className="text-warm-gray text-sm">
        Thank you for reaching out. Our team will contact you within 24 hours.
      </p>
      <a href="https://wa.me/918796766900?text=Hi%20LivDecor%2C%20I%20am%20interested%20in%20your%20interior%20design%20services."
         target="_blank" rel="noopener noreferrer"
         className="btn-primary mt-2">
        <FaWhatsapp className="text-base"/> WhatsApp Us
      </a>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl p-8 shadow-card">
      <h2 className="font-serif font-bold text-2xl text-dark mb-1.5">Send a Message</h2>
      <p className="text-warm-gray text-sm mb-6">We'll get back to you within 24 hours.</p>

      {error && (
        <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={submit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-dark/70 mb-1.5 tracking-wide">
              Full Name <span className="text-primary">*</span>
            </label>
            <input name="name" value={form.name} onChange={handle} placeholder="Your name"
                   className="input-field"/>
          </div>
          <div>
            <label className="block text-xs font-semibold text-dark/70 mb-1.5 tracking-wide">
              Phone <span className="text-primary">*</span>
            </label>
            <input name="phone" value={form.phone} onChange={handle} placeholder="+91 XXXXX XXXXX"
                   className="input-field"/>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-dark/70 mb-1.5 tracking-wide">
            Email Address
          </label>
          <input name="email" type="email" value={form.email} onChange={handle}
                 placeholder="your@email.com" className="input-field"/>
        </div>

        <div>
          <label className="block text-xs font-semibold text-dark/70 mb-1.5 tracking-wide">
            Message <span className="text-primary">*</span>
          </label>
          <textarea name="message" value={form.message} onChange={handle} rows={5}
                    placeholder="Tell us about your project, budget, and timeline…"
                    className="input-field resize-none"/>
        </div>

        <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
          className="btn-primary w-full justify-center gap-2 py-4 text-sm">
          Send Message <HiArrowRight/>
        </motion.button>

        <div className="flex items-center gap-3 pt-2">
          <div className="flex-1 h-px bg-light-gray"/>
          <span className="text-warm-gray text-xs">or</span>
          <div className="flex-1 h-px bg-light-gray"/>
        </div>

        <a href="https://wa.me/918796766900?text=Hi%20LivDecor%2C%20I%20am%20interested%20in%20your%20services."
           target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-full
                      text-sm font-semibold transition-all duration-300 hover:bg-[#1eba58] hover:-translate-y-0.5">
          <FaWhatsapp className="text-base"/> Chat on WhatsApp
        </a>
      </form>
    </div>
  );
}
