import React from 'react';
import { Check, X, Sparkles, AlertTriangle } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const criteria = [
    {
      feature: 'Despega heces antiguas de las curvas del colon',
      ritual: true,
      laxatives: false,
      herbalTeas: false,
      fibers: false,
    },
    {
      feature: 'Sin cólicos dolorosos ni sudor frío',
      ritual: true,
      laxatives: false,
      herbalTeas: false,
      fibers: true,
    },
    {
      feature: 'Sin riesgo de crear dependencia o intestino perezoso',
      ritual: true,
      laxatives: false,
      herbalTeas: false,
      fibers: true,
    },
    {
      feature: 'Activa el reflejo gastrocólico natural en 15-30 minutos',
      ritual: true,
      laxatives: false,
      herbalTeas: false,
      fibers: false,
    },
    {
      feature: 'Desinflama el abdomen y elimina gases fétidos',
      ritual: true,
      laxatives: false,
      herbalTeas: false,
      fibers: false,
    },
    {
      feature: 'Ingredientes 100% naturales sin químicos artificiales',
      ritual: true,
      laxatives: false,
      herbalTeas: true,
      fibers: true,
    },
    {
      feature: 'Restaura la mucosa y la microbiota intestinal',
      ritual: true,
      laxatives: false,
      herbalTeas: false,
      fibers: false,
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-3.5 sm:p-7 shadow-xs my-6 sm:my-8 overflow-hidden">
      <div className="text-center max-w-xl mx-auto mb-5 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          ¿Por Qué los Métodos Tradicionales Suelen Fallar?
        </h3>
        <p className="text-sm sm:text-base text-stone-600 mt-1.5">
          Compara directamente el Ritual de Limpieza Profunda frente a los enfoques convencionales.
        </p>
      </div>

      <div className="overflow-x-auto no-scrollbar -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[540px] text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b border-stone-200 text-stone-600">
              <th className="py-2.5 sm:py-3 px-2 sm:px-4 font-semibold text-stone-800">
                Criterio de Salud Digestiva
              </th>
              <th className="py-2.5 sm:py-3 px-2 sm:px-3 text-center bg-emerald-50 text-emerald-950 font-extrabold rounded-t-lg border-t-2 border-x border-emerald-500">
                <div className="flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="whitespace-nowrap">Ritual de Limpieza</span>
                </div>
              </th>
              <th className="py-2.5 sm:py-3 px-2 sm:px-3 text-center font-medium text-stone-500 whitespace-nowrap">
                Laxantes Comunes
              </th>
              <th className="py-2.5 sm:py-3 px-2 sm:px-3 text-center font-medium text-stone-500 whitespace-nowrap">
                Tés Agresivos (Sen)
              </th>
              <th className="py-2.5 sm:py-3 px-2 sm:px-3 text-center font-medium text-stone-500 whitespace-nowrap">
                Fibras Sueltas / Avena
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {criteria.map((item, index) => (
              <tr key={index} className="hover:bg-stone-50/50 transition-colors">
                <td className="py-2.5 sm:py-3 px-2 sm:px-4 text-stone-800 font-medium text-xs sm:text-sm">
                  {item.feature}
                </td>
                <td className="py-2.5 sm:py-3 px-2 sm:px-3 text-center bg-emerald-50/70 border-x border-emerald-500 font-bold text-emerald-700">
                  <div className="flex justify-center items-center">
                    <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </div>
                  </div>
                </td>
                <td className="py-2.5 sm:py-3 px-2 sm:px-3 text-center text-stone-400">
                  <div className="flex justify-center items-center">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
                  </div>
                </td>
                <td className="py-2.5 sm:py-3 px-2 sm:px-3 text-center text-stone-400">
                  <div className="flex justify-center items-center">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
                  </div>
                </td>
                <td className="py-2.5 sm:py-3 px-2 sm:px-3 text-center text-stone-400">
                  <div className="flex justify-center items-center">
                    {item.fibers ? (
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-500" />
                    ) : (
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 sm:mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Atención: </span>
          <span>
            El uso prolongado de laxantes y hierbas estimulantes (como el sen) puede provocar <em>melanosis coli</em> (oscurecimiento y atrofia muscular del colon). El Ritual de Limpieza Profunda utiliza mecanismos fisiológicos naturales sin agresión química.
          </span>
        </div>
      </div>
    </div>
  );
};
