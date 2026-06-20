import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '918796766900';
  const message = 'Hi LivDecor, I would like to get a free quote for interior design services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 group flex items-center"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-16 bg-dark text-white text-xs font-semibold px-3.5 py-1.5 rounded-full 
                       opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 
                       group-hover:translate-x-0 pointer-events-none whitespace-nowrap shadow-luxury border border-white/10">
        Chat with us
      </span>

      {/* Pulsing ring effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-10" />

      {/* Button */}
      <div className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center 
                      shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-colors duration-300">
        <FaWhatsapp size={30} />
      </div>
    </motion.a>
  );
}
