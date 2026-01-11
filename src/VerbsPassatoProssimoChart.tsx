import { useLanguage } from './LanguageContext';
import { ExternalLink } from 'lucide-react';

const VerbsPassatoProssimoChart = () => {
  const { t } = useLanguage();

  const irregulars = [
    { infinitive: 'accendere', pp: 'acceso', meaning: 'to turn on' },
    { infinitive: 'aprire', pp: 'aperto', meaning: 'to open' },
    { infinitive: 'bere', pp: 'bevuto', meaning: 'to drink' },
    { infinitive: 'chiedere', pp: 'chiesto', meaning: 'to ask' },
    { infinitive: 'chiudere', pp: 'chiuso', meaning: 'to close' },
    { infinitive: 'correre', pp: 'corso', meaning: 'to run' },
    { infinitive: 'decidere', pp: 'deciso', meaning: 'to decide' },
    { infinitive: 'dire', pp: 'detto', meaning: 'to say' },
    { infinitive: 'essere', pp: 'stato', meaning: 'to be' },
    { infinitive: 'fare', pp: 'fatto', meaning: 'to do/make' },
    { infinitive: 'leggere', pp: 'letto', meaning: 'to read' },
    { infinitive: 'mettere', pp: 'messo', meaning: 'to put' },
    { infinitive: 'morire', pp: 'morto', meaning: 'to die' },
    { infinitive: 'nascere', pp: 'nato', meaning: 'to be born' },
    { infinitive: 'offrire', pp: 'offerto', meaning: 'to offer' },
    { infinitive: 'perdere', pp: 'perso', meaning: 'to lose' },
    { infinitive: 'prendere', pp: 'preso', meaning: 'to take' },
    { infinitive: 'rimanere', pp: 'rimasto', meaning: 'to remain' },
    { infinitive: 'rispondere', pp: 'risposto', meaning: 'to answer' },
    { infinitive: 'rompere', pp: 'rotto', meaning: 'to break' },
    { infinitive: 'scegliere', pp: 'scelto', meaning: 'to choose' },
    { infinitive: 'scrivere', pp: 'scritto', meaning: 'to write' },
    { infinitive: 'spegnere', pp: 'spento', meaning: 'to turn off' },
    { infinitive: 'stare', pp: 'stato', meaning: 'to stay' },
    { infinitive: 'vedere', pp: 'visto', meaning: 'to see' },
    { infinitive: 'venire', pp: 'venuto', meaning: 'to come' },
    { infinitive: 'vincere', pp: 'vinto', meaning: 'to win' },
    { infinitive: 'vivere', pp: 'vissuto', meaning: 'to live' },
  ];

  return (
    <div className="space-y-12">
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-4 text-gray-800 underline decoration-amber-500 underline-offset-8">
          {t('verbs.passatoProssimoTitle')}
        </h2>

        <div className="text-center mb-12">
            <a 
                href="https://www.patreon.com/posts/la-casa-46778875" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-bold underline transition-colors"
            >
                <ExternalLink size={18} />
                {t('verbs.casaDiEssereTitle')}
            </a>
        </div>
        
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
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col">
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

        {/* IRREGULAR LIST */}
        <div className="mt-12">
            <h4 className="text-2xl font-bold text-slate-800 text-center mb-8">{t('verbs.irregularPPTitle')}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {irregulars.map((item) => (
                    <div key={item.infinitive} className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex flex-col items-center text-center">
                        <span className="text-xs text-slate-400 font-medium italic mb-1">{item.infinitive} ({item.meaning})</span>
                        <span className="text-lg font-bold text-indigo-600">{item.pp}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default VerbsPassatoProssimoChart;