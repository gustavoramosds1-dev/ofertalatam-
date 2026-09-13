import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface NewsArticleScreenProps {
  onContinue: () => void;
  onBack?: () => void;
}

export const NewsArticleScreen: React.FC<NewsArticleScreenProps> = ({ onContinue, onBack }) => {
  const [useFallback, setUseFallback] = useState<boolean>(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="w-full max-w-xl mx-auto px-2 xs:px-3 sm:px-4 py-2 sm:py-4"
    >
      <div className="bg-white border border-stone-200/90 rounded-2xl shadow-sm p-2 xs:p-3 sm:p-4 space-y-3 sm:space-y-4">
        {/* Botão de retorno discreto */}
        {onBack && (
          <div className="flex items-center justify-between px-1 pt-0.5">
            <button
              type="button"
              onClick={onBack}
              id="article-back-btn"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 active:bg-stone-300 px-3 py-1.5 rounded-lg transition-colors cursor-pointer touch-manipulation active:scale-[0.98] min-h-[36px]"
            >
              <ArrowLeft className="w-4 h-4 text-stone-600" />
              <span>Volver a la pregunta anterior</span>
            </button>
          </div>
        )}

        {/* Imagem Editorial Instantânea - formato WebP de alto desempenho com fallback imediato */}
        <div className="w-full rounded-xl overflow-hidden border border-stone-100/90 shadow-2xs bg-stone-50 flex items-center justify-center">
          <picture className="w-full flex items-center justify-center">
            {!useFallback && (
              <>
                <source type="image/webp" srcSet="/assets/noticia_etapa_11.webp" />
                <source type="image/jpeg" srcSet="/assets/noticia_etapa_11.jpg" />
              </>
            )}
            <img
              src={useFallback ? 'https://i.imgur.com/RMKxdo4.png' : '/assets/noticia_etapa_11.webp'}
              alt="Noticia sobre la rutina intestinal y bienestar"
              width={941}
              height={1671}
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              onError={() => setUseFallback(true)}
              className="w-full h-auto max-w-full block object-contain rounded-xl select-none"
              style={{ aspectRatio: '941 / 1671' }}
            />
          </picture>
        </div>

        {/* Botão de Ação Otimizado para Toque Mobile */}
        <div className="pt-1 pb-1 px-0.5">
          <button
            type="button"
            id="continue-evaluation-btn"
            onClick={onContinue}
            className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-base xs:text-lg sm:text-xl py-4 sm:py-4.5 px-4 sm:px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2.5 cursor-pointer touch-manipulation active:scale-[0.99] min-h-[56px]"
          >
            <span className="tracking-wide">CONTINUAR MI EVALUACIÓN</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] shrink-0" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
