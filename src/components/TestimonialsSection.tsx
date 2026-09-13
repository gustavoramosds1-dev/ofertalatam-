import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/quizQuestions';

export const TestimonialsSection: React.FC = () => {
  return (
    <div className="my-8">
      <div className="text-center max-w-xl mx-auto mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 mb-2">
          <ThumbsUp className="w-3.5 h-3.5 text-emerald-700" />
          Testimonios de Quienes ya lo Probaron
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
          Personas Reales, Alivio Real en Menos de 24 Horas
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Más de 42,000 personas ya han liberado su intestino gracias al mecanismo del Ritual de Limpieza Profunda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-stone-700 ml-1">5.0</span>
              </div>

              {/* Quote icon */}
              <Quote className="w-6 h-6 text-emerald-200 mb-2" />

              {/* Quote text */}
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-4">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100">
              {/* Highlight tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {t.daysToRelief}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  {t.weightLost}
                </span>
              </div>

              {/* User info */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-emerald-300"
                />
                <div>
                  <div className="flex items-center gap-1 text-xs font-bold text-stone-900">
                    <span>{t.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 inline" />
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {t.age} años • {t.city}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
