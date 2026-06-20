import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialCard({ t }) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-card h-full flex flex-col">
      {/* Quote icon */}
      <FaQuoteLeft className="text-primary/25 text-3xl mb-4"/>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <FaStar key={i} className="text-primary text-sm"/>
        ))}
      </div>

      {/* Review */}
      <p className="text-warm-gray text-sm leading-relaxed flex-1 mb-6">"{t.review}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-secondary">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-dark
                        flex items-center justify-center text-white font-bold text-sm shrink-0">
          {t.initials}
        </div>
        <div>
          <div className="font-serif font-semibold text-dark text-sm">{t.name}</div>
          <div className="text-warm-gray text-xs">{t.role}</div>
        </div>
      </div>
    </div>
  );
}
