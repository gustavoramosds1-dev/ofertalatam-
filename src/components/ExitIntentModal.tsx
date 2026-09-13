import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { DiagnosticData } from '../types';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStay: () => void;
  hasStarted: boolean;
  currentStep: number;
  totalSteps: number;
  isCompleted: boolean;
  diagnostic: DiagnosticData | null;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({
  isOpen,
  onClose,
  onStay,
  hasStarted,
  currentStep,
  totalSteps,
  isCompleted,
  diagnostic,
}) => {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Copy tailored to motivate the lead to continue and finalize the quiz
  let badgeText = '¡NO TE VAYAS! COMPLETA TU EVALUACIÓN';
  let title = '¡ESTÁS A UN PASO DE CONOCER TU DIAGNÓSTICO!';
  let description =
    'Solo te tomará unos segundos completar las preguntas para recibir tu evaluación personalizada de retención fecal y el método para destrabar tu intestino.';
  let primaryBtnText = 'CONTINUAR Y FINALIZAR EL QUIZ';

  const benefits: string[] = [
    'Solo toma menos de 1 minuto para completar las preguntas restantes.',
    'Descubre cuántos kilos de heces pueden estar petrificadas en tu colon.',
    'Conoce el ritual matutino de 3 ingredientes para evacuar suave y sin dolor.',
  ];

  if (!hasStarted) {
    badgeText = '¡ESPERA! DESCUBRE CÓMO DESTRABAR TU INTESTINO';
    title = '¿BARRIGA INFLAMADA Y DIFICULTAD PARA EVACUAR?';
    description =
      'Solo toma 2 minutos responder unas breves preguntas para calcular tu nivel de estancamiento fecal y recibir la solución para regularizar tu digestión.';
    primaryBtnText = 'INICIAR Y FINALIZAR MI EVALUACIÓN';
  } else if (hasStarted && !isCompleted) {
    const questionsLeft = totalSteps - currentStep + 1;
    badgeText = `¡SOLO FALTAN ${questionsLeft} PREGUNTA${questionsLeft > 1 ? 'S' : ''} PARA FINALIZAR!`;
    title = '¡NO TE VAYAS! TUS RESPUESTAS ESTÁN CASI COMPLETAS';
    description = `Ya estás en la pregunta ${currentStep} de ${totalSteps}. Si sales ahora perderás tu progreso y no podrás descubrir cuánta materia fecal tienes acumulada ni cómo expulsarla.`;
    primaryBtnText = `CONTINUAR Y FINALIZAR EL QUIZ (PASO ${currentStep}/${totalSteps})`;
  } else if (isCompleted) {
    badgeText = `¡EVALUACIÓN COMPLETADA CON ÉXITO!`;
    title = '¡TU PROTOCOLO PERSONALIZADO ESTÁ LISTO!';
    description =
      'Ya completaste el quiz. Tu diagnóstico indicó señales de estancamiento fecal petrificado y tu método para desbloquear el colon ya está disponible.';
    primaryBtnText = 'VER MI PROTOCOLO Y DESBLOQUEAR MI COLON';
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop escuro com desfoque */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-rose-500/80 overflow-hidden z-10 my-auto text-left"
          >
            {/* Barra Superior Vermelha de Urgência - Headline mantida, sem cronômetro */}
            <div className="bg-rose-600 text-white px-4 py-3 sm:py-3.5 flex items-center justify-center gap-2 text-xs sm:text-sm font-black tracking-wide uppercase text-center shadow-xs shrink-0">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 shrink-0 animate-pulse" />
              <span>{badgeText}</span>
            </div>

            {/* Botão Fechar discreto */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar ventana"
              className="absolute top-2.5 right-2.5 p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer z-20"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Conteúdo do Modal rolável se necessário em telas pequenas */}
            <div className="p-4 xs:p-5 sm:p-7 overflow-y-auto">
              {/* Imagem do Mockup no topo do modal para reforço visual */}
              <div className="flex justify-center items-center mb-3.5 sm:mb-4">
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
                    className="w-28 xs:w-32 sm:w-36 h-auto object-contain drop-shadow-xs"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                  />
                </picture>
              </div>

              {/* Título Principal */}
              <h2 className="text-xl xs:text-2xl sm:text-2xl font-black text-stone-900 leading-tight text-center mb-2.5">
                {title}
              </h2>

              {/* Descrição persuasiva convidando a continuar e finalizar */}
              <p className="text-sm xs:text-base text-stone-600 leading-relaxed text-center mb-4 sm:mb-5 max-w-md mx-auto">
                {description}
              </p>

              {/* Lista de Benefícios para finalizar */}
              <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 mb-5 sm:mb-6 space-y-2.5 text-stone-800 text-xs xs:text-sm sm:text-base">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Botão de Ação Primário (Ficar na página e finalizar o quiz) */}
              <div>
                <motion.button
                  type="button"
                  id="exit-modal-stay-btn"
                  onClick={onStay}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-5 rounded-xl sm:rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-base xs:text-lg sm:text-lg uppercase tracking-wider shadow-lg shadow-emerald-700/30 transition-all cursor-pointer flex items-center justify-center gap-2.5 border-2 border-emerald-500/80 touch-manipulation min-h-[54px]"
                >
                  <span>{primaryBtnText}</span>
                  <ArrowRight className="w-5 h-5 stroke-[3] shrink-0" />
                </motion.button>
              </div>

              {/* Selo de Segurança no rodapé do modal */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-center gap-1.5 text-[11px] text-stone-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Protocolo Seguro e Información 100% Protegida</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
