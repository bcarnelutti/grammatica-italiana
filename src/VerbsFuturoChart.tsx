import { useLanguage } from './LanguageContext';

const VerbsFuturoChart = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-purple-500 underline-offset-8">
          {t('verbs.futuroTitle')}
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-gray-500 font-medium w-1/4">{t('common.pronoun')}</th>
                <th className="p-4 text-purple-600 font-bold w-1/4">-ARE (parl-are)</th>
                <th className="p-4 text-purple-600 font-bold w-1/4">-ERE (prend-ere)</th>
                <th className="p-4 text-purple-600 font-bold w-1/4">-IRE (dorm-ire)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">io</td>
                <td className="p-4">parl<span className="font-bold text-purple-600">erò</span></td>
                <td className="p-4">prend<span className="font-bold text-purple-600">erò</span></td>
                <td className="p-4">dorm<span className="font-bold text-purple-600">irò</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">tu</td>
                <td className="p-4">parl<span className="font-bold text-purple-600">erai</span></td>
                <td className="p-4">prend<span className="font-bold text-purple-600">erai</span></td>
                <td className="p-4">dorm<span className="font-bold text-purple-600">irai</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">lui / lei</td>
                <td className="p-4">parl<span className="font-bold text-purple-600">erà</span></td>
                <td className="p-4">prend<span className="font-bold text-purple-600">erà</span></td>
                <td className="p-4">dorm<span className="font-bold text-purple-600">irà</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">noi</td>
                <td className="p-4">parl<span className="font-bold text-purple-600">eremo</span></td>
                <td className="p-4">prend<span className="font-bold text-purple-600">eremo</span></td>
                <td className="p-4">dorm<span className="font-bold text-purple-600">iremo</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">voi</td>
                <td className="p-4">parl<span className="font-bold text-purple-600">erete</span></td>
                <td className="p-4">prend<span className="font-bold text-purple-600">erete</span></td>
                <td className="p-4">dorm<span className="font-bold text-purple-600">irete</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">loro</td>
                <td className="p-4">parl<span className="font-bold text-purple-600">eranno</span></td>
                <td className="p-4">prend<span className="font-bold text-purple-600">eranno</span></td>
                <td className="p-4">dorm<span className="font-bold text-purple-600">iranno</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 bg-purple-50 p-6 rounded-xl border border-purple-100">
             <h4 className="font-bold text-purple-800 mb-2">Nota: Verbi in -ARE</h4>
             <p className="text-purple-900 text-sm">Nei verbi regolari in -ARE, la 'a' dell'infinito cambia in 'e' nel futuro (parl<span className="font-bold">a</span>re &rarr; parl<span className="font-bold">e</span>rò).</p>
        </div>
      </section>
    </div>
  );
};

export default VerbsFuturoChart;