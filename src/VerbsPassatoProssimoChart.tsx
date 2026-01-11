import { useLanguage } from './LanguageContext';

const VerbsPassatoProssimoChart = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-amber-500 underline-offset-8">
          {t('verbs.passatoProssimoTitle')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
            {/* AVERE */}
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">Ausiliare AVERE</h3>
                <p className="text-center text-amber-900 mb-4 font-medium italic">La maggior parte dei verbi transitivi (mangiare, dormire, parlare)</p>
                <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-amber-200">
                            <th className="pb-2 text-amber-600">{t('common.pronoun')}</th>
                            <th className="pb-2 text-amber-600">{t('verbs.auxiliary')}</th>
                            <th className="pb-2 text-amber-600">{t('verbs.pastParticiple')}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-200/50">
                        <tr><td className="py-2 font-bold text-amber-900">io</td><td>ho</td><td className="italic">parlato / venduto / finito</td></tr>
                        <tr><td className="py-2 font-bold text-amber-900">tu</td><td>hai</td><td className="italic">parlato / venduto / finito</td></tr>
                        <tr><td className="py-2 font-bold text-amber-900">lui / lei</td><td>ha</td><td className="italic">parlato / venduto / finito</td></tr>
                        <tr><td className="py-2 font-bold text-amber-900">noi</td><td>abbiamo</td><td className="italic">parlato / venduto / finito</td></tr>
                        <tr><td className="py-2 font-bold text-amber-900">voi</td><td>avete</td><td className="italic">parlato / venduto / finito</td></tr>
                        <tr><td className="py-2 font-bold text-amber-900">loro</td><td>hanno</td><td className="italic">parlato / venduto / finito</td></tr>
                    </tbody>
                </table>
            </div>

            {/* ESSERE */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Ausiliare ESSERE</h3>
                <p className="text-center text-blue-900 mb-4 font-medium italic">Verbi di moto, stato, cambiamento, riflessivi (andare, stare, nascere)</p>
                 <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-blue-200">
                            <th className="pb-2 text-blue-600">{t('common.pronoun')}</th>
                            <th className="pb-2 text-blue-600">{t('verbs.auxiliary')}</th>
                            <th className="pb-2 text-blue-600">{t('verbs.pastParticiple')}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-200/50">
                        <tr><td className="py-2 font-bold text-blue-900">io</td><td>sono</td><td className="italic">andato/a</td></tr>
                        <tr><td className="py-2 font-bold text-blue-900">tu</td><td>sei</td><td className="italic">andato/a</td></tr>
                        <tr><td className="py-2 font-bold text-blue-900">lui / lei</td><td>è</td><td className="italic">andato/a</td></tr>
                        <tr><td className="py-2 font-bold text-blue-900">noi</td><td>siamo</td><td className="italic">andati/e</td></tr>
                        <tr><td className="py-2 font-bold text-blue-900">voi</td><td>siete</td><td className="italic">andati/e</td></tr>
                        <tr><td className="py-2 font-bold text-blue-900">loro</td><td>sono</td><td className="italic">andati/e</td></tr>
                    </tbody>
                </table>
                <p className="mt-4 text-xs text-blue-800 font-bold text-center">{t('verbs.ppAgreement')}</p>
            </div>
        </div>
        
        <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
             <h4 className="font-bold text-slate-800 mb-2">{t('verbs.pastParticiple')} - Regolare</h4>
             <div className="flex justify-center gap-8 font-mono text-lg">
                <div className="text-green-700">-ARE &rarr; -ATO <span className="text-xs text-slate-500 block">(parlare &rarr; parlato)</span></div>
                <div className="text-amber-700">-ERE &rarr; -UTO <span className="text-xs text-slate-500 block">(vendere &rarr; venduto)</span></div>
                <div className="text-purple-700">-IRE &rarr; -ITO <span className="text-xs text-slate-500 block">(dormire &rarr; dormito)</span></div>
             </div>
        </div>
      </section>
    </div>
  );
};

export default VerbsPassatoProssimoChart;