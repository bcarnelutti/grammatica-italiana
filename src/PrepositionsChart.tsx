import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const PrepositionsChart = () => {
  const { t } = useLanguage();

  const simplePrepositions = [
    { prep: 'di', meaning: 'di (possession, origin)', example: 'Il libro di Marco' },
    { prep: 'a', meaning: 'a (to, at)', example: 'Vado a casa' },
    { prep: 'da', meaning: 'da (from, by)', example: 'Vengo da Roma' },
    { prep: 'in', meaning: 'in (in, into)', example: 'Vivo in Italia' },
    { prep: 'con', meaning: 'con (with)', example: 'Esco con Maria' },
    { prep: 'su', meaning: 'su (on, about)', example: 'Il gatto è sul tavolo' },
    { prep: 'per', meaning: 'per (for, through)', example: 'Questo è per te' },
    { prep: 'tra / fra', meaning: 'tra / fra (between, among)', example: 'Tra due giorni' },
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
                    <div className="text-sm text-orange-800 mb-2">{item.meaning}</div>
                    <div className="text-xs text-slate-500 italic">{item.example}</div>
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
    </div>
  );
};

export default PrepositionsChart;