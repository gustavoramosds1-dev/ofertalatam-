import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { DiagnosticData, UserAnswers } from '../types';
import { FaqSection } from './FaqSection';
import {
  Flame,
  Scale,
  Activity,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  Check,
  Lock,
  X,
} from 'lucide-react';

interface DiagnosticResultProps {
  diagnostic: DiagnosticData;
  answers: UserAnswers;
  onRestart: () => void;
}

export const DiagnosticResult: React.FC<DiagnosticResultProps> = ({
  diagnostic,
  onRestart,
}) => {
  const [timeLeft, setTimeLeft] = useState(895); // 14 min 55 sec
  const [ctaModalOpen, setCtaModalOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Countdown timer for scarcity
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleVideoRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRedirecting(true);
    setTimeout(() => {
      window.open('https://pay.hotmart.com/W107579403T?bid=1789236719420', '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
      setCtaModalOpen(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3.5 sm:px-4 py-4 sm:py-8 overflow-x-hidden">
      {/* Top Logo / Mockup */}
      <div className="flex justify-center items-center mb-5 sm:mb-6">
        <picture>
          <source srcSet="/assets/logo_quiz.webp" type="image/webp" />
          <img
            src="/assets/logo_quiz.png"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://i.imgur.com/Njnw6Ra.png';
            }}
            alt="Ritual de Limpieza Profunda"
            width={600}
            height={600}
            className="w-40 xs:w-48 sm:w-56 h-auto object-contain drop-shadow-md"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
        </picture>
      </div>

      {/* Top Scarcity Bar */}
      <div className="bg-red-600 text-white font-bold text-sm sm:text-base py-2.5 px-3.5 sm:px-4 rounded-xl text-center shadow-sm mb-5 sm:mb-6 flex items-center justify-center gap-2 flex-wrap">
        <span>Esta oferta termina en: </span>
        <span className="font-extrabold bg-red-950/80 text-white border border-red-400/40 px-2.5 py-0.5 rounded-md font-mono text-sm sm:text-base shadow-xs">
          {formattedTime}
        </span>
      </div>

      {/* Main Diagnostic Header */}
      <div className="bg-white rounded-2xl border border-stone-200/90 p-4 sm:p-8 shadow-xs mb-6 sm:mb-8">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight mb-2.5 sm:mb-3">
          Resultado: <span className="text-rose-700">Estancamiento Fecal Grado {diagnostic.severityLevel}</span>
        </h1>

        <p className="text-sm xs:text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl mb-5 sm:mb-6">
          Con base en tus respuestas, tu sistema digestivo presenta un fuerte indicio de <strong className="text-stone-900">costra fecal petrificada en las vellosidades intestinales</strong> y lentitud motora severa, bloqueando la evacuación natural.
        </p>

        {/* 3 Core Diagnostic Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {/* Metric 1 */}
          <div className="bg-stone-50 border border-stone-200/90 rounded-xl p-3.5 sm:p-4 text-center">
            <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-rose-700 mx-auto mb-1" />
            <div className="text-xs sm:text-sm text-stone-600 font-semibold">Grado de Estancamiento</div>
            <div className="text-2xl sm:text-3xl font-black text-rose-700 mt-1">
              {diagnostic.stagnationPercentage}%
            </div>
            <div className="text-xs sm:text-sm font-bold text-rose-900 mt-0.5">
              Nivel {diagnostic.severityLevel}
            </div>
          </div>

          {/* Metric 2 */}
          <div className="bg-stone-50 border border-stone-200/90 rounded-xl p-3.5 sm:p-4 text-center">
            <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700 mx-auto mb-1" />
            <div className="text-xs sm:text-sm text-stone-600 font-semibold">Heces Retenidas Estimadas</div>
            <div className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
              {diagnostic.estimatedFecalWeight}
            </div>
            <div className="text-xs sm:text-sm font-bold text-amber-900 mt-0.5">
              Materia reseca
            </div>
          </div>

          {/* Metric 3 */}
          <div className="bg-stone-50 border border-stone-200/90 rounded-xl p-3.5 sm:p-4 text-center">
            <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-700 mx-auto mb-1" />
            <div className="text-xs sm:text-sm text-stone-600 font-semibold">Fermentación y Gases</div>
            <div className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
              Elevado
            </div>
            <div className="text-xs sm:text-sm font-bold text-orange-900 mt-0.5">
              Biofilm activo
            </div>
          </div>
        </div>
      </div>

      {/* Primary Conversion & CTA Offer Section */}
      <div
        id="cta-section-container"
        className="bg-linear-to-b from-stone-900 to-stone-950 rounded-2xl p-5 sm:p-10 text-white shadow-xl my-6 sm:my-8 border border-stone-800 text-center relative overflow-hidden"
      >
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-teal-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto">
          {/* Big CTA Button */}
          <motion.a
            href="https://pay.hotmart.com/W107579403T?bid=1789236719420"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-unlock-protocol-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 sm:px-10 py-4.5 sm:py-5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-black text-base xs:text-lg sm:text-xl rounded-2xl shadow-xl shadow-green-950/50 border-2 border-green-400/40 flex items-center justify-center gap-3 mx-auto transition-all cursor-pointer leading-tight uppercase no-underline tracking-wide min-h-[58px]"
          >
            <span>DESTRABAR INTESTINO AHORA</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] shrink-0" />
          </motion.a>

          <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-stone-400">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Acceso Inmediato y Seguro
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Garantía Blindada de 60 Días
            </span>
          </div>

          {/* Guarantee Highlight */}
          <div className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-left flex items-start gap-3 sm:gap-3.5">
            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm sm:text-base font-bold text-white mb-1">
                Garantía Incondicional de 60 Días de Satisfacción
              </div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Pruebas el Ritual de Limpieza Profunda por hasta 60 días completos. Si tu intestino no funciona suave y regulado todos los días, o si no se desinflama tu barriga, recibes el 100% de tu dinero de vuelta sin preguntas. Riesgo cero para ti.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer Utilities (Restart quiz) */}
      <div className="flex items-center justify-center pt-5 sm:pt-7 border-t border-stone-200 text-sm text-stone-600">
        <button
          type="button"
          onClick={onRestart}
          id="restart-quiz-btn"
          className="flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-stone-800 hover:text-stone-950 font-bold bg-stone-100 hover:bg-stone-200 active:bg-stone-300 transition-colors cursor-pointer border border-stone-200 text-sm sm:text-base min-h-[44px] touch-manipulation"
        >
          <RotateCcw className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
          <span>Repetir Quiz (Probar Otras Respuestas)</span>
        </button>
      </div>

      {/* Simulated Offer Presentation Modal */}
      {ctaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/70 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-lg w-full p-4 sm:p-7 shadow-2xl border border-stone-200 text-stone-900 relative max-h-[92vh] overflow-y-auto no-scrollbar"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-100 text-emerald-800">
                Protocolo Personalizado Liberado
              </span>
              <button
                type="button"
                onClick={() => setCtaModalOpen(false)}
                className="text-stone-400 hover:text-stone-700 p-1 cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-lg sm:text-2xl font-black text-stone-900 mb-1.5 sm:mb-2 leading-snug">
              Tu Ritual de Limpieza Profunda Está Listo
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 mb-3 sm:mb-4 leading-relaxed">
              Tu evaluación de <strong className="text-stone-900">{diagnostic.stagnationPercentage}% de estancamiento</strong> fue vinculada con éxito. Estás a un clic de ver la presentación oficial que enseña la fórmula exacta del ritual matutino de 3 minutos.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 sm:p-3.5 mb-4 sm:mb-5 space-y-1.5 sm:space-y-2 text-xs text-stone-700">
              <div className="flex items-center gap-2 font-semibold text-emerald-800">
                <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Guía en video y PDF del Ritual Matutino de 3 Minutos</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-emerald-800">
                <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Tabla de proporciones exactas de bioactivos osmóticos</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-emerald-800">
                <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Cronograma de desinflamación y pérdida de materia fecal retenida</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-emerald-800">
                <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Garantía Incondicional de 60 Días</span>
              </div>
            </div>

            {isRedirecting ? (
              <div className="w-full py-3.5 px-4 bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-center rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm animate-pulse">
                <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Redirigiendo a la Presentación Oficial...</span>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleVideoRedirect}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-center rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-base leading-tight"
                >
                  <span>Ver Video Oficial del Ritual</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <button
                  type="button"
                  onClick={() => setCtaModalOpen(false)}
                  className="w-full py-2 text-xs text-stone-500 hover:text-stone-800 font-medium cursor-pointer"
                >
                  Volver y leer los detalles de la evaluación
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};
