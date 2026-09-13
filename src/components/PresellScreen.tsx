import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface PresellScreenProps {
  onStart: () => void;
}

export const PresellScreen: React.FC<PresellScreenProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full max-w-2xl mx-auto px-3 xs:px-4 sm:px-6 py-4 sm:py-7"
    >
      {/* Mockup / Logo no topo do Quiz - ampliado e nítido no mobile */}
      <div className="flex justify-center items-center mb-5 sm:mb-7">
        <div className="relative group">
          <picture>
            <source srcSet="/assets/logo_quiz.webp" type="image/webp" />
            <img
              id="quiz-mockup-logo"
              src="/assets/logo_quiz.png"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://i.imgur.com/Njnw6Ra.png';
              }}
              alt="Ritual de Limpieza Profunda Logo Mockup"
              width={600}
              height={600}
              className="w-44 xs:w-52 sm:w-60 md:w-64 h-auto max-w-[280px] object-contain mx-auto drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              referrerPolicy="no-referrer"
            />
          </picture>
        </div>
      </div>

      {/* Headline estruturada com as cores e sublinhados exatos da imagem - maior e mais chamativo no celular */}
      <div className="text-center font-black tracking-tight uppercase mb-6 sm:mb-8 px-0.5 sm:px-1">
        {/* Linha Vermelha com Sublinhado Vermelho */}
        <h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-[2.35rem] text-[#D80000] font-black leading-tight sm:leading-snug mb-1.5 sm:mb-2">
          <span className="underline decoration-[#D80000] decoration-3 sm:decoration-[4px] underline-offset-4 sm:underline-offset-6">
            ¿BARRIGA INFLAMADA, INTESTINO TRABADO
          </span>
        </h1>

        {/* Linha Preta */}
        <div className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-[2.35rem] text-[#1E1E1E] font-black leading-tight sm:leading-snug mb-1.5 sm:mb-2">
          Y SENSACIÓN DE
        </div>

        {/* Linha Verde com Sublinhado Verde */}
        <div className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-[2.35rem] text-[#0F9D58] font-black leading-tight sm:leading-snug">
          <span className="underline decoration-[#0F9D58] decoration-3 sm:decoration-[4px] underline-offset-4 sm:underline-offset-6">
            EVACUACIÓN INCOMPLETA?
          </span>
        </div>
      </div>

      {/* Subheadline com Efeito Caneta Marca-Texto Amarelo - mais legível e espaçoso no celular */}
      <div className="text-center max-w-xl mx-auto mb-7 sm:mb-9 px-1 sm:px-2">
        <p className="text-lg xs:text-xl sm:text-xl md:text-2xl text-stone-900 leading-[1.8] sm:leading-[1.9] font-medium">
          <span className="bg-[#FFDE59] px-2 py-1 box-decoration-clone rounded-[4px]">
            Responde unas breves preguntas y recibe una{' '}
            <strong className="font-extrabold underline decoration-stone-950 decoration-[1.5px] sm:decoration-2 underline-offset-2 sm:underline-offset-3">
              evaluación personalizada
            </strong>{' '}
            de tu{' '}
            <strong className="font-extrabold underline decoration-stone-950 decoration-[1.5px] sm:decoration-2 underline-offset-2 sm:underline-offset-3">
              perfil intestinal
            </strong>
            , además del{' '}
            <strong className="font-extrabold underline decoration-stone-950 decoration-[1.5px] sm:decoration-2 underline-offset-2 sm:underline-offset-3">
              paso a paso
            </strong>{' '}
            para liberar{' '}
            <strong className="font-extrabold underline decoration-stone-950 decoration-[1.5px] sm:decoration-2 underline-offset-2 sm:underline-offset-3">
              ¡hasta 10 kg de heces atoradas!
            </strong>
          </span>
        </p>
      </div>

      {/* Destaques rápidos de credibilidade */}
      <div className="bg-white rounded-2xl border border-stone-200/90 p-4 sm:p-6 shadow-xs mb-7 sm:mb-9 space-y-4 sm:space-y-4.5">
        <div className="flex items-start gap-3.5 sm:gap-4">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h2 className="text-base xs:text-lg sm:text-xl font-bold text-stone-900 leading-snug">
              Evaluación Personalizada de Retención Fecal
            </h2>
            <p className="text-sm xs:text-base sm:text-base text-stone-600 mt-1 leading-relaxed">
              Cálculo individual de la estimación de materia retenida en el colon y nivel de distensión abdominal.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 sm:gap-4 pt-4 border-t border-stone-100">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h2 className="text-base xs:text-lg sm:text-xl font-bold text-stone-900 leading-snug">
              Protocolo para Desprender Placas Fecales
            </h2>
            <p className="text-sm xs:text-base sm:text-base text-stone-600 mt-1 leading-relaxed">
              Conoce cómo restaurar la motilidad matutina de forma suave, sin laxantes químicos y sin dolor.
            </p>
          </div>
        </div>
      </div>

      {/* Botão "Iniciar consulta" */}
      <div className="flex flex-col items-center w-full">
        <motion.button
          type="button"
          id="btn-destravar-intestino"
          onClick={onStart}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto min-w-full xs:min-w-[300px] sm:min-w-[360px] px-6 sm:px-10 py-4.5 sm:py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-lg xs:text-xl sm:text-xl uppercase tracking-wider shadow-lg shadow-emerald-700/25 transition-all cursor-pointer flex items-center justify-center gap-3 border-2 border-emerald-500/80 touch-manipulation min-h-[58px]"
        >
          <span>Iniciar consulta</span>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
        </motion.button>
      </div>
    </motion.div>
  );
};
