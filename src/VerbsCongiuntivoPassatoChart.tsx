import { useLanguage } from './LanguageContext';
import { ExternalLink } from 'lucide-react';

const VerbsCongiuntivoPassatoChart = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-4 text-gray-800 underline decoration-cyan-500 underline-offset-8">
          {t('verbs.congiuntivoPassatoTitle')}
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
            <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100">
                <h3 className="text-2xl font-bold text-cyan-800 mb-6 text-center">Ausiliare AVERE</h3>
                <p className="text-center text-cyan-900 mb-4 font-medium italic">che io abbia parlato</p>
                 <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-cyan-200">
                            <th className="pb-2 text-cyan-600">{t('common.pronoun')}</th>
                            <th className="pb-2 text-cyan-600">Ausiliare</th>
                            <th className="pb-2 text-cyan-600">P. Passato</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-cyan-200/50">
                        <tr><td className="py-2 font-bold text-cyan-900">che io</td><td>abbia</td><td className="italic">parlato</td></tr>
                        <tr><td className="py-2 font-bold text-cyan-900">che tu</td><td>abbia</td><td className="italic">parlato</td></tr>
                        <tr><td className="py-2 font-bold text-cyan-900">che lui / lei</td><td>abbia</td><td className="italic">parlato</td></tr>
                        <tr><td className="py-2 font-bold text-cyan-900">che noi</td><td>abbiamo</td><td className="italic">parlato</td></tr>
                        <tr><td className="py-2 font-bold text-cyan-900">che voi</td><td>abbiate</td><td className="italic">parlato</td></tr>
                        <tr><td className="py-2 font-bold text-cyan-900">che loro</td><td>abbiano</td><td className="italic">parlato</td></tr>
                    </tbody>
                </table>
            </div>

             <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Ausiliare ESSERE</h3>
                <p className="text-center text-slate-700 mb-4 font-medium italic">che io sia andato/a</p>
                 <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-slate-200">
                            <th className="pb-2 text-slate-500">{t('common.pronoun')}</th>
                            <th className="pb-2 text-slate-500">Ausiliare</th>
                            <th className="pb-2 text-slate-500">P. Passato</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/50">
                        <tr><td className="py-2 font-bold text-slate-800">che io</td><td>sia</td><td className="italic">andato/a</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">che tu</td><td>sia</td><td className="italic">andato/a</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">che lui / lei</td><td>sia</td><td className="italic">andato/a</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">che noi</td><td>siamo</td><td className="italic">andati/e</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">che voi</td><td>siate</td><td className="italic">andati/e</td></tr>
                        <tr><td className="py-2 font-bold text-slate-800">che loro</td><td>siano</td><td className="italic">andati/e</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>
    </div>
  );
};

export default VerbsCongiuntivoPassatoChart;