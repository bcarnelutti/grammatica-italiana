import { useLanguage } from './LanguageContext';

const VerbsCondizionalePresenteChart = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-orange-500 underline-offset-8">
          {t('verbs.condizionalePresenteTitle')}
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-gray-500 font-medium w-1/4">{t('common.pronoun')}</th>
                <th className="p-4 text-orange-600 font-bold w-1/4">-ARE (parl-are)</th>
                <th className="p-4 text-orange-600 font-bold w-1/4">-ERE (prend-ere)</th>
                <th className="p-4 text-orange-600 font-bold w-1/4">-IRE (dorm-ire)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">io</td>
                <td className="p-4">parl<span className="font-bold text-orange-600">erei</span></td>
                <td className="p-4">prend<span className="font-bold text-orange-600">erei</span></td>
                <td className="p-4">dorm<span className="font-bold text-orange-600">irei</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">tu</td>
                <td className="p-4">parl<span className="font-bold text-orange-600">eresti</span></td>
                <td className="p-4">prend<span className="font-bold text-orange-600">eresti</span></td>
                <td className="p-4">dorm<span className="font-bold text-orange-600">iresti</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">lui / lei</td>
                <td className="p-4">parl<span className="font-bold text-orange-600">erebbe</span></td>
                <td className="p-4">prend<span className="font-bold text-orange-600">erebbe</span></td>
                <td className="p-4">dorm<span className="font-bold text-orange-600">irebbe</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">noi</td>
                <td className="p-4">parl<span className="font-bold text-orange-600">eremmo</span></td>
                <td className="p-4">prend<span className="font-bold text-orange-600">eremmo</span></td>
                <td className="p-4">dorm<span className="font-bold text-orange-600">iremmo</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">voi</td>
                <td className="p-4">parl<span className="font-bold text-orange-600">ereste</span></td>
                <td className="p-4">prend<span className="font-bold text-orange-600">ereste</span></td>
                <td className="p-4">dorm<span className="font-bold text-orange-600">ireste</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">loro</td>
                <td className="p-4">parl<span className="font-bold text-orange-600">erebbero</span></td>
                <td className="p-4">prend<span className="font-bold text-orange-600">erebbero</span></td>
                <td className="p-4">dorm<span className="font-bold text-orange-600">irebbero</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default VerbsCondizionalePresenteChart;