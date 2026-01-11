import { useLanguage } from './LanguageContext';

const VerbsImperfettoChart = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-blue-500 underline-offset-8">
          {t('verbs.imperfettoTitle')}
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-gray-500 font-medium w-1/4">{t('common.pronoun')}</th>
                <th className="p-4 text-blue-600 font-bold w-1/4">-ARE (parl-are)</th>
                <th className="p-4 text-blue-600 font-bold w-1/4">-ERE (legg-ere)</th>
                <th className="p-4 text-blue-600 font-bold w-1/4">-IRE (dorm-ire)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">io</td>
                <td className="p-4">parl-<span className="font-bold text-blue-600">avo</span></td>
                <td className="p-4">legg-<span className="font-bold text-blue-600">evo</span></td>
                <td className="p-4">dorm-<span className="font-bold text-blue-600">ivo</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">tu</td>
                <td className="p-4">parl-<span className="font-bold text-blue-600">avi</span></td>
                <td className="p-4">legg-<span className="font-bold text-blue-600">evi</span></td>
                <td className="p-4">dorm-<span className="font-bold text-blue-600">ivi</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">lui / lei</td>
                <td className="p-4">parl-<span className="font-bold text-blue-600">ava</span></td>
                <td className="p-4">legg-<span className="font-bold text-blue-600">eva</span></td>
                <td className="p-4">dorm-<span className="font-bold text-blue-600">iva</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">noi</td>
                <td className="p-4">parl-<span className="font-bold text-blue-600">avamo</span></td>
                <td className="p-4">legg-<span className="font-bold text-blue-600">evamo</span></td>
                <td className="p-4">dorm-<span className="font-bold text-blue-600">ivamo</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">voi</td>
                <td className="p-4">parl-<span className="font-bold text-blue-600">avate</span></td>
                <td className="p-4">legg-<span className="font-bold text-blue-600">evate</span></td>
                <td className="p-4">dorm-<span className="font-bold text-blue-600">ivate</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">loro</td>
                <td className="p-4">parl-<span className="font-bold text-blue-600">avano</span></td>
                <td className="p-4">legg-<span className="font-bold text-blue-600">evano</span></td>
                <td className="p-4">dorm-<span className="font-bold text-blue-600">ivano</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-2">Verbi Irregolari Comuni</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-blue-900">
                <div>
                    <strong>Essere:</strong> ero, eri, era, eravamo, eravate, erano
                </div>
                <div>
                    <strong>Bere:</strong> bevevo, bevevi, beveva, bevevamo, bevevate, bevevano
                </div>
                <div>
                    <strong>Dire:</strong> dicevo, dicevi, diceva, dicevamo, dicevate, dicevano
                </div>
                <div>
                    <strong>Fare:</strong> facevo, facevi, faceva, facevamo, facevate, facevano
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default VerbsImperfettoChart;