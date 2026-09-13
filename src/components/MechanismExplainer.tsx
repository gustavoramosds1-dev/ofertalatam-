import React from 'react';
import { Check, AlertOctagon, Sparkles } from 'lucide-react';

export const MechanismExplainer: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-7 shadow-xs my-6 sm:my-8">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          El Mecanismo Descubierto
        </span>
        <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Cómo Funciona el <span className="text-emerald-700">"Ritual de Limpieza Profunda"</span>
        </h2>
        <p className="text-xs sm:text-base text-stone-600 mt-2">
          El protocolo matutino natural de 3 minutos diseñado para ablandar, despegar y eliminar heces petrificadas de meses sin cólicos ni diarrea.
        </p>
      </div>

      {/* Visual Contrast: Before vs After */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="p-3.5 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2 text-amber-900 font-bold text-xs sm:text-base">
            <AlertOctagon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 shrink-0" />
            <span>Antes del Ritual: Colon Obstruido</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            Paredes intestinales cubiertas por una costra gruesa de heces resecas y biofilm bacteriano tóxico. Los gases fétidos quedan atrapados, inflamando el abdomen y reabsorbiendo toxinas hacia el hígado y el torrente sanguíneo.
          </p>
          <div className="mt-2.5 sm:mt-3 flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-amber-900">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-600 shrink-0" />
            Hasta 3 kg a 7 kg de residuos acumulados
          </div>
        </div>

        <div className="p-3.5 sm:p-5 rounded-xl bg-emerald-50/70 border border-emerald-200">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2 text-emerald-950 font-bold text-xs sm:text-base">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 shrink-0" />
            <span>Después del Ritual: Colon Despejado</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            La acción osmótica suave despega la placa fecal endurecida sin irritar la mucosa. El reflejo gastrocólico se activa de forma natural, logrando evacuaciones suaves, completas e indoloras todas las mañanas.
          </p>
          <div className="mt-2.5 sm:mt-3 flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-emerald-900">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
            Abdomen visiblemente desinflamado en 24h a 48h
          </div>
        </div>
      </div>

      {/* Routine Timeline Banner */}
      <div className="bg-linear-to-r from-emerald-800 to-teal-900 rounded-xl p-4 sm:p-5 text-white">
        <h4 className="font-bold text-sm sm:text-lg mb-2 text-center text-emerald-100">
          Qué Esperar en los Primeros Días con el Ritual de Limpieza Profunda:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mt-3 sm:mt-4 text-xs sm:text-sm">
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-xs">
            <span className="font-extrabold text-amber-300 block mb-1">Día 1 (Primera Mañana)</span>
            Primera evacuación suave y abundante. Sensación inmediata de alivio y ligereza en la zona pélvica.
          </div>
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-xs">
            <span className="font-extrabold text-amber-300 block mb-1">Días 2 a 4</span>
            Reducción notable de gases y abdomen inflamado. La cintura comienza a reducirse y la ropa queda más holgada.
          </div>
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-xs">
            <span className="font-extrabold text-amber-300 block mb-1">Días 7 a 21</span>
            Intestino funcionando como un reloj todos los días. Energía renovada y piel con mejor aspecto.
          </div>
        </div>
      </div>
    </section>
  );
};
