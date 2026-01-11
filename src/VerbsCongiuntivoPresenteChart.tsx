import { useLanguage } from './LanguageContext';

const VerbsCongiuntivoPresenteChart = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-teal-500 underline-offset-8">
          {t('verbs.congiuntivoPresenteTitle')}
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-gray-500 font-medium w-1/4">{t('common.pronoun')}</th>
                <th className="p-4 text-teal-600 font-bold w-1/4">-ARE (parl-are)</th>
                <th className="p-4 text-teal-600 font-bold w-1/4">-ERE (prend-ere)</th>
                <th className="p-4 text-teal-600 font-bold w-1/4">-IRE (dorm-ire)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">che io</td>
                <td className="p-4">parl<span className="font-bold text-teal-600">i</span></td>
                <td className="p-4">prend<span className="font-bold text-teal-600">a</span></td>
                <td className="p-4">dorm<span className="font-bold text-teal-600">a</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">che tu</td>
                <td className="p-4">parl<span className="font-bold text-teal-600">i</span></td>
                <td className="p-4">prend<span className="font-bold text-teal-600">a</span></td>
                <td className="p-4">dorm<span className="font-bold text-teal-600">a</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">che lui / lei</td>
                <td className="p-4">parl<span className="font-bold text-teal-600">i</span></td>
                <td className="p-4">prend<span className="font-bold text-teal-600">a</span></td>
                <td className="p-4">dorm<span className="font-bold text-teal-600">a</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">che noi</td>
                <td className="p-4">parl<span className="font-bold text-teal-600">iamo</span></td>
                <td className="p-4">prend<span className="font-bold text-teal-600">iamo</span></td>
                <td className="p-4">dorm<span className="font-bold text-teal-600">iamo</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">che voi</td>
                <td className="p-4">parl<span className="font-bold text-teal-600">iate</span></td>
                <td className="p-4">prend<span className="font-bold text-teal-600">iate</span></td>
                <td className="p-4">dorm<span className="font-bold text-teal-600">iate</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">che loro</td>
                <td className="p-4">parl<span className="font-bold text-teal-600">ino</span></td>
                <td className="p-4">prend<span className="font-bold text-teal-600">ano</span></td>
                <td className="p-4">dorm<span className="font-bold text-teal-600">ano</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 bg-teal-50 p-6 rounded-xl border border-teal-100">
             <h4 className="font-bold text-teal-800 mb-2">Nota: Verbi in -IRE con -ISC-</h4>
             <p className="text-teal-900 text-sm italic">
                io cap<strong>isc</strong>a, tu cap<strong>isc</strong>a, lui cap<strong>isc</strong>a, loro cap<strong>isc</strong>ano.
             </p>
        </div>
      </section>
    </div>
  );
};

export default VerbsCongiuntivoPresenteChart;