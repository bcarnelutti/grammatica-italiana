import { useState } from 'react';
import { useLanguage } from './LanguageContext';

const PrepositionsChart = () => {
  const { t } = useLanguage();
  const [showPartitivoModal, setShowPartitivoModal] = useState(false);

  const simplePrepositions = [
    { prep: 'di', label: 'di' },
    { prep: 'a', label: 'a' },
    { prep: 'da', label: 'da' },
    { prep: 'in', label: 'in' },
    { prep: 'con', label: 'con' },
    { prep: 'su', label: 'su' },
    { prep: 'per', label: 'per' },
    { prep: 'tra / fra', label: 'tra' },
  ];

  return (
    <div className="space-y-12">
      {/* Simple Prepositions */}
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-orange-500 underline-offset-8">
          {t('prepositions.simpleTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {simplePrepositions.map((item, idx) => (
                <div key={idx} className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <div className="text-2xl font-bold text-orange-900 mb-1">{item.prep}</div>
                    <div className="text-sm text-orange-800 mb-2">{t(`prepositions.labels.${item.label}`)}</div>
                    {item.prep === 'di' && (
                      <button
                        onClick={() => setShowPartitivoModal(true)}
                        className="mt-2 text-sm text-orange-600 hover:text-orange-800 font-medium block flex items-center gap-1 transition-colors"
                      >
                        <span className="text-lg">•</span> {t('prepositions.partitivo.label')}
                      </button>
                    )}
                </div>
            ))}
        </div>
      </section>

      {/* Articulated Prepositions */}
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-x-auto">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-purple-500 underline-offset-8">
          {t('prepositions.articulatedTitle')}
        </h2>
        
        <table className="w-full min-w-[800px] border-collapse text-center">
            <thead>
                <tr className="bg-purple-50">
                    <th className="p-3 border border-purple-100 text-left">Preposizione</th>
                    <th className="p-3 border border-purple-100 font-bold text-slate-700">+ il</th>
                    <th className="p-3 border border-purple-100 font-bold text-slate-700">+ lo</th>
                    <th className="p-3 border border-purple-100 font-bold text-slate-700">+ l'</th>
                    <th className="p-3 border border-purple-100 font-bold text-slate-700">+ la</th>
                    <th className="p-3 border border-purple-100 font-bold text-slate-700">+ i</th>
                    <th className="p-3 border border-purple-100 font-bold text-slate-700">+ gli</th>
                    <th className="p-3 border border-purple-100 font-bold text-slate-700">+ le</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-3 border border-gray-100 font-bold text-xl text-purple-900">di</td>
                    <td className="p-3 border border-gray-100">del</td>
                    <td className="p-3 border border-gray-100">dello</td>
                    <td className="p-3 border border-gray-100">dell'</td>
                    <td className="p-3 border border-gray-100">della</td>
                    <td className="p-3 border border-gray-100">dei</td>
                    <td className="p-3 border border-gray-100">degli</td>
                    <td className="p-3 border border-gray-100">delle</td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-100 font-bold text-xl text-purple-900">a</td>
                    <td className="p-3 border border-gray-100">al</td>
                    <td className="p-3 border border-gray-100">allo</td>
                    <td className="p-3 border border-gray-100">all'</td>
                    <td className="p-3 border border-gray-100">alla</td>
                    <td className="p-3 border border-gray-100">ai</td>
                    <td className="p-3 border border-gray-100">agli</td>
                    <td className="p-3 border border-gray-100">alle</td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-100 font-bold text-xl text-purple-900">da</td>
                    <td className="p-3 border border-gray-100">dal</td>
                    <td className="p-3 border border-gray-100">dallo</td>
                    <td className="p-3 border border-gray-100">dall'</td>
                    <td className="p-3 border border-gray-100">dalla</td>
                    <td className="p-3 border border-gray-100">dai</td>
                    <td className="p-3 border border-gray-100">dagli</td>
                    <td className="p-3 border border-gray-100">dalle</td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-100 font-bold text-xl text-purple-900">in</td>
                    <td className="p-3 border border-gray-100">nel</td>
                    <td className="p-3 border border-gray-100">nello</td>
                    <td className="p-3 border border-gray-100">nell'</td>
                    <td className="p-3 border border-gray-100">nella</td>
                    <td className="p-3 border border-gray-100">nei</td>
                    <td className="p-3 border border-gray-100">negli</td>
                    <td className="p-3 border border-gray-100">nelle</td>
                </tr>
                <tr>
                    <td className="p-3 border border-gray-100 font-bold text-xl text-purple-900">su</td>
                    <td className="p-3 border border-gray-100">sul</td>
                    <td className="p-3 border border-gray-100">sullo</td>
                    <td className="p-3 border border-gray-100">sull'</td>
                    <td className="p-3 border border-gray-100">sulla</td>
                    <td className="p-3 border border-gray-100">sui</td>
                    <td className="p-3 border border-gray-100">sugli</td>
                    <td className="p-3 border border-gray-100">sulle</td>
                </tr>
            </tbody>
        </table>
      </section>

      {/* Partitivo Modal */}
      {showPartitivoModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShowPartitivoModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl relative animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowPartitivoModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>
            <h3 className="text-2xl font-serif text-orange-900 mb-6 border-b border-orange-100 pb-2">{t('prepositions.partitivo.title')}</h3>
            <div className="space-y-6 text-gray-700">
              <div>
                <p className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-lg leading-relaxed text-orange-900">
                  {t('prepositions.partitivo.explanation')}
                </p>
              </div>
              <div>
                <h4 className="font-bold text-orange-800 mb-2 uppercase text-sm tracking-wide">{t('common.usage')}</h4>
                <p className="text-gray-600">{t('prepositions.partitivo.usage')}</p>
              </div>
              <div>
                <h4 className="font-bold text-orange-800 mb-3 uppercase text-sm tracking-wide">{t('common.example')}</h4>
                <ul className="list-none space-y-3">
                  {(t('prepositions.partitivo.examples') as unknown as string[]).map((ex, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-orange-400 mt-1">➜</span>
                      <span className="bg-gray-50 px-3 py-1 rounded text-gray-800">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrepositionsChart;