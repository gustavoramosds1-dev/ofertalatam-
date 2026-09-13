import React, { useState } from 'react';
import { motion } from 'motion/react';
import { QuizQuestion, QuizOption } from '../types';
import { Check } from 'lucide-react';
import { QuestionImageCard } from './QuestionImageCard';

interface QuizStepProps {
  question: QuizQuestion;
  selectedOptionId?: string;
  onSelectOption: (option: QuizOption) => void;
  isLastQuestion?: boolean;
}

const renderHighlightedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*|==.*?==)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const content = part.slice(2, -2);
      return (
        <span key={index} className="text-emerald-600 font-extrabold">
          {content}
        </span>
      );
    }
    if (part.startsWith('==') && part.endsWith('==')) {
      const content = part.slice(2, -2);
      return (
        <span key={index} className="text-amber-600 font-extrabold">
          {content}
        </span>
      );
    }
    return part;
  });
};

export const QuizStep: React.FC<QuizStepProps> = ({
  question,
  selectedOptionId,
  onSelectOption,
  isLastQuestion = false,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="w-full max-w-2xl mx-auto px-3 xs:px-4 sm:px-6 py-3 sm:py-6"
    >
      {/* Step counter */}
      <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
        <span className="text-sm sm:text-base text-stone-600 font-medium">
          Pregunta <strong className="text-emerald-700 font-bold">{question.step}</strong> de 15
        </span>
      </div>

      {/* Main Question Heading - Maior e mais legível no mobile */}
      <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-3xl font-extrabold text-stone-900 leading-snug sm:leading-tight tracking-tight mb-2.5 sm:mb-3">
        {renderHighlightedText(question.question)}
      </h1>

      {/* Subtitle context */}
      {question.subtitle && (
        <p className="text-base xs:text-base sm:text-lg text-stone-700 leading-relaxed mb-4 sm:mb-5 font-normal">
          {renderHighlightedText(question.subtitle)}
        </p>
      )}

      {/* Image Card Slot (Otimizado com imagens maiores que preenchem bem a tela) */}
      {question.imageCard && (
        <QuestionImageCard
          questionId={question.id}
          imageCard={question.imageCard}
        />
      )}

      {/* Options List */}
      <div className="space-y-3 sm:space-y-3.5" role="radiogroup" aria-label={question.question.replace(/[*=]/g, '')}>
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isHovered = hoveredId === option.id;
          const isStep15 = question.step === 15;

          // Cores chamativas solicitadas especificamente para a última etapa
          let urgencyStyle = {
            card: isSelected
              ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-600/30'
              : 'border-stone-200 bg-white hover:border-emerald-400 hover:bg-stone-50/80 text-stone-800',
            radio: isSelected
              ? 'border-emerald-600 bg-emerald-600 text-white shadow-xs'
              : isHovered
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-stone-300 bg-stone-50',
            label: isSelected ? 'text-emerald-950 font-bold' : 'text-stone-900',
            sublabel: isSelected ? 'text-emerald-800' : 'text-stone-500',
            iconBadge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
          };

          if (isStep15) {
            if (option.id === 'urgencia_maxima') {
              // Vermelho chamativo e vibrante (urgência máxima)
              urgencyStyle = {
                card: isSelected
                  ? 'border-red-600 bg-red-50 ring-2 ring-red-600/40 shadow-sm'
                  : 'border-red-300/90 bg-linear-to-r from-red-50/70 to-red-50/30 hover:border-red-500 hover:bg-red-50 text-red-950 shadow-2xs',
                radio: isSelected
                  ? 'border-red-600 bg-red-600 text-white shadow-xs'
                  : isHovered
                  ? 'border-red-500 bg-red-100 text-red-700'
                  : 'border-red-400 bg-red-50 text-red-600',
                label: 'text-red-950 font-extrabold',
                sublabel: 'text-red-800 font-medium',
                iconBadge: '',
              };
            } else if (option.id === 'alta_urgencia') {
              // Vermelho com tom mais fraco / coral suave (urgência alta)
              urgencyStyle = {
                card: isSelected
                  ? 'border-rose-500 bg-rose-50 ring-2 ring-rose-500/30 shadow-sm'
                  : 'border-rose-200/90 bg-linear-to-r from-rose-50/50 to-rose-50/20 hover:border-rose-400 hover:bg-rose-50 text-rose-950 shadow-2xs',
                radio: isSelected
                  ? 'border-rose-500 bg-rose-500 text-white shadow-xs'
                  : isHovered
                  ? 'border-rose-400 bg-rose-100 text-rose-600'
                  : 'border-rose-300 bg-rose-50/70 text-rose-500',
                label: 'text-rose-950 font-bold',
                sublabel: 'text-rose-700 font-normal',
                iconBadge: '',
              };
            } else if (option.id === 'curioso_comprometido') {
              // Laranja chamativo / âmbar vibrante (urgência moderada)
              urgencyStyle = {
                card: isSelected
                  ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-500/30 shadow-sm'
                  : 'border-amber-200/90 bg-linear-to-r from-amber-50/50 to-amber-50/20 hover:border-amber-400 hover:bg-amber-50 text-amber-950 shadow-2xs',
                radio: isSelected
                  ? 'border-amber-500 bg-amber-500 text-white shadow-xs'
                  : isHovered
                  ? 'border-amber-400 bg-amber-100 text-amber-600'
                  : 'border-amber-300 bg-amber-50/70 text-amber-600',
                label: 'text-amber-950 font-bold',
                sublabel: 'text-amber-800 font-normal',
                iconBadge: '',
              };
            }
          }

          return (
            <motion.button
              key={option.id}
              type="button"
              id={`quiz-opt-${question.id}-${option.id}`}
              onClick={() => onSelectOption(option)}
              onMouseEnter={() => setHoveredId(option.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{
                y: -3,
                scale: 1.015,
                transition: { type: 'spring', stiffness: 450, damping: 25 },
              }}
              whileTap={{
                y: 0,
                scale: 0.985,
                transition: { duration: 0.1 },
              }}
              className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex items-start gap-3.5 sm:gap-4.5 cursor-pointer relative shadow-xs hover:shadow-md touch-manipulation active:scale-[0.99] min-h-[56px] ${urgencyStyle.card}`}
            >
              {/* Bolinha de seleção sempre na parte esquerda */}
              <div
                className={`w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all mt-0.5 ${urgencyStyle.radio}`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3.5]" />}
              </div>

              {/* Option Text - Tipografia mais generosa e nítida no celular */}
              <div className="flex-1 min-w-0">
                <span
                  className={`text-base xs:text-lg sm:text-lg leading-snug block font-bold ${urgencyStyle.label}`}
                >
                  {option.label}
                </span>
                {option.sublabel && (
                  <p
                    className={`text-sm xs:text-base sm:text-base mt-1.5 leading-relaxed ${urgencyStyle.sublabel}`}
                  >
                    {option.sublabel}
                  </p>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};
