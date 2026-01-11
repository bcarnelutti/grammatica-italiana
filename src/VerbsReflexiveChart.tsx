import { useLanguage } from './LanguageContext';

const VerbsReflexiveChart = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-pink-500 underline-offset-8">
          {t('verbs.reflexiveTitle')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                <h3 className="text-2xl font-bold text-pink-800 mb-6 text-center">Presente</h3>
                <p className="text-center text-pink-900 mb-4 font-medium italic">alzarsi (to get up)</p>
                 <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-pink-200">
                            <th className="pb-2 text-pink-600">{t('common.pronoun')}</th>
                            <th className="pb-2 text-pink-600">Verbo</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-pink-200/50">
                        <tr><td className="py-2 font-bold text-pink-900">io</td><td><span className="font-bold">mi</span> alzo</td></tr>
                        <tr><td className="py-2 font-bold text-pink-900">tu</td><td><span className="font-bold">ti</span> alzi</td></tr>
                        <tr><td className="py-2 font-bold text-pink-900">lui / lei</td><td><span className="font-bold">si</span> alza</td></tr>
                        <tr><td className="py-2 font-bold text-pink-900">noi</td><td><span className="font-bold">ci</span> alziamo</td></tr>
                        <tr><td className="py-2 font-bold text-pink-900">voi</td><td><span className="font-bold">vi</span> alzate</td></tr>
                        <tr><td className="py-2 font-bold text-pink-900">loro</td><td><span className="font-bold">si</span> alzano</td></tr>
                    </tbody>
                </table>
            </div>

             <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Passato Prossimo</h3>
                <p className="text-center text-slate-700 mb-4 font-medium italic">alzarsi</p>
                 <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-slate-200">
                            <th className="pb-2 text-slate-500">{t('common.pronoun')}</th>
                            <th className="pb-2 text-slate-500">Verbo</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/50">
                        <tr><td className="py-2 font-bold text-slate-800">io</td><td><span className="font-bold">mi</span> sono alzato/a</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">tu</td><td><span className="font-bold">ti</span> sei alzato/a</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">lui / lei</td><td><span className="font-bold">si</span> è alzato/a</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">noi</td><td><span className="font-bold">ci</span> siamo alzati/e</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">voi</td><td><span className="font-bold">vi</span> siete alzati/e</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">loro</td><td><span className="font-bold">si</span> sono alzati/e</td></tr>
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