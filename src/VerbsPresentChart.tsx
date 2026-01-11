import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const VerbsPresentChart = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-green-500 underline-offset-8">
          {t('verbs.presentTitle')}
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-gray-500 font-medium w-1/4">Pronome</th>
                <th className="p-4 text-green-600 font-bold w-1/4">-ARE (parl-are)</th>
                <th className="p-4 text-green-600 font-bold w-1/4">-ERE (scriv-ere)</th>
                <th className="p-4 text-green-600 font-bold w-1/4">-IRE (dorm-ire)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">io</td>
                <td className="p-4">parl-<span className="font-bold text-green-600">o</span></td>
                <td className="p-4">scriv-<span className="font-bold text-green-600">o</span></td>
                <td className="p-4">dorm-<span className="font-bold text-green-600">o</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">tu</td>
                <td className="p-4">parl-<span className="font-bold text-green-600">i</span></td>
                <td className="p-4">scriv-<span className="font-bold text-green-600">i</span></td>
                <td className="p-4">dorm-<span className="font-bold text-green-600">i</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">lui / lei</td>
                <td className="p-4">parl-<span className="font-bold text-green-600">a</span></td>
                <td className="p-4">scriv-<span className="font-bold text-green-600">e</span></td>
                <td className="p-4">dorm-<span className="font-bold text-green-600">e</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">noi</td>
                <td className="p-4">parl-<span className="font-bold text-green-600">iamo</span></td>
                <td className="p-4">scriv-<span className="font-bold text-green-600">iamo</span></td>
                <td className="p-4">dorm-<span className="font-bold text-green-600">iamo</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">voi</td>
                <td className="p-4">parl-<span className="font-bold text-green-600">ate</span></td>
                <td className="p-4">scriv-<span className="font-bold text-green-600">ete</span></td>
                <td className="p-4">dorm-<span className="font-bold text-green-600">ite</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">loro</td>
                <td className="p-4">parl-<span className="font-bold text-green-600">ano</span></td>
                <td className="p-4">scriv-<span className="font-bold text-green-600">ono</span></td>
                <td className="p-4">dorm-<span className="font-bold text-green-600">ono</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-100 text-sm text-green-800">
            <h4 className="font-bold mb-2">Nota: Verbi in -IRE con -ISC-</h4>
            <p>Alcuni verbi della 3^ coniugazione (capire, finire, preferire, pulire) aggiungono <strong>-isc-</strong> tra la radice e la desinenza nelle persone singolari e nella 3^ plurale.</p>
            <div className="mt-2 font-mono">
                io cap<strong>isc</strong>o, tu cap<strong>isc</strong>i, lui cap<strong>isc</strong>e, noi capiamo, voi capite, loro cap<strong>isc</strong>ono.
            </div>
        </div>
      </section>
    </div>
  );
};

export default VerbsPresentChart;