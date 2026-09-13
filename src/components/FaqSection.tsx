import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Qué es exactamente el Ritual de Limpieza Profunda?',
      a: 'Es un protocolo matutino simple de 3 minutos compuesto por una combinación sinérgica de bioactivos naturales que actúan por hidratación osmótica. No fuerza la evacuación con cólicos ni retorcijones: en su lugar, ablanda la placa fecal reseca adherida a las curvas del colon y estimula el reflejo gastrocólico natural para que evacues de manera suave y completa.'
    },
    {
      q: '¿Sentiré dolor de estómago, cólicos o diarrea incontrolable?',
      a: '¡No! Ese es el gran diferenciador de este mecanismo. A diferencia de los tés con sen o laxantes químicos que provocan espasmos dolorosos, el Ritual de Limpieza Profunda actúa ablandando la materia fecal y nutriendo la mucosa. La evacuación es natural, suave y sin urgencias incómodas.'
    },
    {
      q: '¿Cuánto tiempo tarda en hacer efecto?',
      a: 'La mayoría de las personas experimenta la primera evacuación abundante y aliviadora en la primera mañana de aplicación, generalmente entre 20 y 45 minutos después de realizar el ritual matutino. En 3 a 7 días, el abdomen se desinflama notablemente.'
    },
    {
      q: 'Ya tomo medicamentos de farmacia desde hace años. ¿Puedo hacer el ritual?',
      a: 'Sí. El protocolo fue diseñado precisamente para reeducar el colon debilitado por laxantes químicos, reactivando la contracción peristáltica autónoma sin generar dependencia ni efecto rebote.'
    },
    {
      q: '¿Se necesitan ingredientes caros o difíciles de conseguir?',
      a: 'No. El protocolo se basa en ingredientes 100% naturales, accesibles y fáciles de preparar en tu propia cocina a primera hora de la mañana en menos de 3 minutos.'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 p-4 sm:p-8 shadow-xs my-6 sm:my-8">
      <div className="text-center max-w-xl mx-auto mb-5 sm:mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-stone-700 border border-stone-200 mb-2">
          <HelpCircle className="w-4 h-4 text-emerald-700" />
          Preguntas Frecuentes
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          Dudas Comunes Sobre el Ritual
        </h3>
      </div>

      <div className="space-y-3 sm:space-y-3.5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-stone-200/90 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-3.5 font-bold text-stone-900 bg-stone-50/70 hover:bg-stone-100/80 active:bg-stone-200/60 transition-colors text-sm xs:text-base sm:text-lg cursor-pointer touch-manipulation"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4.5 h-4.5 text-stone-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-700' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="p-4 sm:p-5 bg-white text-sm xs:text-base sm:text-base text-stone-700 leading-relaxed border-t border-stone-100">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
