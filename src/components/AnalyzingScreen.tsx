import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Activity, CheckCircle2, Loader2, Sparkles, ShieldCheck, HeartPulse } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AnalyzingScreenProps {
  onComplete: () => void;
}

export const AnalyzingScreen: React.FC<AnalyzingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(12);
  const [stageIndex, setStageIndex] = useState(0);

  const stages = [
    { title: 'Cruzando datos biológicos e historial intestinal...', icon: Activity },
    { title: 'Calculando el Grado de Estancamiento y Atonía del Colon...', icon: HeartPulse },
    { title: 'Estimando volumen de materia fecal petrificada en las vellosidades...', icon: Loader2 },
    { title: 'Detectando incompatibilidad con laxantes y tés irritantes...', icon: ShieldCheck },
    { title: 'Personalizando protocolo: RITUAL DE LIMPIEZA PROFUNDA...', icon: Sparkles }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // progressive acceleration
        const increment = prev < 50 ? 4 : prev < 85 ? 3 : 2;
        const next = Math.min(prev + increment, 100);
        return next;
      });
    }, 90);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress < 25) setStageIndex(0);
    else if (progress < 50) setStageIndex(1);
    else if (progress < 75) setStageIndex(2);
    else if (progress < 95) setStageIndex(3);
    else setStageIndex(4);

    if (progress === 100) {
      // Trigger subtle celebratory confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }

      const finishTimeout = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(finishTimeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="w-full max-w-lg mx-auto px-3 xs:px-4 py-4 sm:py-8 flex flex-col items-center justify-center text-center">
      {/* Central Progress Ring */}
      <div className="relative w-36 h-36 xs:w-44 xs:h-44 sm:w-48 sm:h-48 mb-5 sm:mb-6 flex items-center justify-center shrink-0">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="#e7e5e4"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="url(#gradientProgress)"
            strokeWidth="8"
            strokeDasharray={264}
            strokeDashoffset={264 - (264 * progress) / 100}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-150 ease-out"
          />
          <defs>
            <linearGradient id="gradientProgress" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl xs:text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
            {progress}%
          </span>
          <span className="text-[11px] sm:text-xs font-bold text-emerald-800 uppercase tracking-widest mt-1">
            Procesando
          </span>
        </div>
      </div>

      {/* Titulo do Estagio Atual */}
      <div className="w-full min-h-[3.75rem] sm:min-h-[4rem] flex items-center justify-center mb-2.5 px-1">
        <motion.h2
          key={stageIndex}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg xs:text-xl sm:text-2xl font-extrabold text-stone-900 leading-snug break-words"
        >
          {stages[stageIndex].title}
        </motion.h2>
      </div>

      <p className="text-sm xs:text-base text-stone-600 max-w-md mb-6 sm:mb-7 leading-relaxed px-1">
        Espera unos segundos mientras correlacionamos tus respuestas con los patrones clínicos de disbiosis y estancamiento fecal.
      </p>

      {/* Steps checklist - 100% responsivo para mobile sem cortar palavras */}
      <div className="w-full bg-white border border-stone-200/90 rounded-2xl p-3.5 sm:p-5 shadow-xs text-left space-y-3">
        {stages.map((stg, i) => {
          const isDone = i < stageIndex;
          const isCurrent = i === stageIndex;

          return (
            <div
              key={i}
              className={`flex items-start gap-3 text-sm xs:text-base leading-snug transition-colors py-0.5 ${
                isDone
                  ? 'text-emerald-800 font-semibold'
                  : isCurrent
                  ? 'text-stone-900 font-bold'
                  : 'text-stone-500'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  isDone
                    ? 'bg-emerald-100 text-emerald-700'
                    : isCurrent
                    ? 'bg-emerald-600 text-white animate-pulse'
                    : 'bg-stone-100 text-stone-400'
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <span className="text-xs font-bold">{i + 1}</span>
                )}
              </div>
              <span className="flex-1 break-words leading-snug">{stg.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
