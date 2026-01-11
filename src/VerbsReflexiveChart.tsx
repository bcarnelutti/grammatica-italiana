import { useLanguage } from './LanguageContext';

const VerbsReflexiveChart = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-pink-500 underline-offset-8">
          {t('verbs.reflexiveTitle')}
        </h2>

        {/* Explanation Section */}
        <div className="mb-12 bg-pink-50 p-6 rounded-xl border border-pink-100">
            <h3 className="text-xl font-bold text-pink-800 mb-2">{t('verbs.reflexiveConstruction')}</h3>
            <p className="text-pink-900 mb-4 text-lg">
                {t('verbs.reflexiveExplanation')}
            </p>
            <div className="bg-white p-4 rounded-lg border border-pink-200">
                <p className="font-mono text-center text-pink-700 font-bold text-lg">
                    Pronome Riflessivo + Verbo
                </p>
                <p className="text-center text-sm text-pink-500 italic mt-1">
                    (mi, ti, si, ci, vi, si)
                </p>
            </div>
            <p className="text-pink-900 mt-4 text-sm italic border-t border-pink-200 pt-4">
                <span className="font-bold">Nota:</span> {t('verbs.reflexiveCompoundNote')}
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-pink-100 shadow-sm">
                <h3 className="text-2xl font-bold text-pink-800 mb-6 text-center">Presente</h3>
                <p className="text-center text-pink-900 mb-4 font-medium italic">alzarsi (to get up)</p>
                 <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-pink-200">
                            <th className="pb-2 text-pink-600">{t('common.pronoun')}</th>
                            <th className="pb-2 text-pink-600">Verbo</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-pink-100">
                        <tr><td className="py-2 font-bold text-pink-900">io</td><td><span className="font-bold text-pink-600">mi</span> alzo</td></tr>
                        <tr><td className="py-2 font-bold text-pink-900">tu</td><td><span className="font-bold text-pink-600">ti</span> alzi</td></tr>
                        <tr><td className="py-2 font-bold text-pink-900">lui / lei</td><td><span className="font-bold text-pink-600">si</span> alza</td></tr>
                        <tr><td className="py-2 font-bold text-pink-900">noi</td><td><span className="font-bold text-pink-600">ci</span> alziamo</td></tr>
                        <tr><td className="py-2 font-bold text-pink-900">voi</td><td><span className="font-bold text-pink-600">vi</span> alzate</td></tr>
                        <tr><td className="py-2 font-bold text-pink-900">loro</td><td><span className="font-bold text-pink-600">si</span> alzano</td></tr>
                    </tbody>
                </table>
            </div>

             <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Passato Prossimo</h3>
                <p className="text-center text-slate-700 mb-4 font-medium italic">alzarsi</p>
                 <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-slate-200">
                            <th className="pb-2 text-slate-500">{t('common.pronoun')}</th>
                            <th className="pb-2 text-slate-500">Verbo</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        <tr><td className="py-2 font-bold text-slate-800">io</td><td><span className="font-bold text-slate-600">mi</span> sono alzato/a</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">tu</td><td><span className="font-bold text-slate-600">ti</span> sei alzato/a</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">lui / lei</td><td><span className="font-bold text-slate-600">si</span> è alzato/a</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">noi</td><td><span className="font-bold text-slate-600">ci</span> siamo alzati/e</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">voi</td><td><span className="font-bold text-slate-600">vi</span> siete alzati/e</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">loro</td><td><span className="font-bold text-slate-600">si</span> sono alzati/e</td></tr>
                    </tbody>
                </table>
                <p className="mt-4 text-xs text-slate-600 font-bold text-center">
                    {t('verbs.reflexiveNote')}
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default VerbsReflexiveChart;