import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface QuizHeaderProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  canGoBack: boolean;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({
  currentStep,
  totalSteps,
  onBack,
  canGoBack,
}) => {
  const progressPercent = Math.min(100, Math.max(0, Math.round((currentStep / totalSteps) * 100)));

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-3xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {canGoBack ? (
              <button
                type="button"
                onClick={onBack}
                id="quiz-back-btn"
                className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 active:bg-stone-300 px-3 sm:px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer min-h-[36px] touch-manipulation"
                title="Volver a la pregunta anterior"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
              </button>
            ) : (
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 sm:px-3.5 py-1.5 rounded-lg min-h-[36px]">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Análisis Oficial</span>
              </div>
            )}
          </div>

          {/* Logo / Mockup no centro do Quiz - mais nítido e visível */}
          <div className="flex items-center justify-center flex-1 max-w-[140px]">
            <picture>
              <source srcSet="/assets/logo_quiz.webp" type="image/webp" />
              <img
                src="/assets/logo_quiz.png"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://i.imgur.com/Njnw6Ra.png';
                }}
                alt="Logo"
                width={600}
                height={600}
                className="h-8 xs:h-9 sm:h-10 w-auto max-w-[100px] xs:max-w-[120px] sm:max-w-[135px] object-contain drop-shadow-2xs"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />
            </picture>
          </div>

          <div className="flex items-center shrink-0">
            <span className="text-xs xs:text-sm sm:text-base font-extrabold text-stone-800">
              Paso <span className="text-emerald-700">{currentStep}</span> de {totalSteps}
            </span>
          </div>
        </div>

        {/* Barra de Progresso Verde */}
        <div 
          className="w-full bg-stone-200/80 h-2.5 sm:h-3 rounded-full overflow-hidden mt-2 sm:mt-2.5"
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progreso del cuestionario"
        >
          <div
            className="bg-emerald-500 h-full rounded-full transition-all duration-500 ease-out shadow-xs"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-stone-100 text-[11px] sm:text-xs text-stone-500">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-amber-50/95 border border-amber-300/90 text-amber-900 text-[11px] sm:text-xs font-bold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span className="tracking-tight">Evaluación 100% confidencial</span>
          </div>
          <span className="shrink-0 text-stone-500 font-semibold">Tiempo: ~2 min</span>
        </div>
      </div>
    </header>
  );
};
