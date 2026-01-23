import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { ArrowLeft, Info } from 'lucide-react';
import { useChartContext } from './ChartContext';

const PronomiOggettoDirettoChart = () => {
  const { t } = useLanguage();
  const { setView } = useChartContext();

  const pronouns = [
    { form: 'mi', label: t('pronomi.list.mi') },
    { form: 'ti', label: t('pronomi.list.ti') },
    { form: 'lo', label: t('pronomi.list.lo') },
    { form: 'la', label: t('pronomi.list.la') },
    { form: 'ci', label: t('pronomi.list.ci') },
    { form: 'vi', label: t('pronomi.list.vi') },
    { form: 'li', label: t('pronomi.list.li') },
    { form: 'le', label: t('pronomi.list.le') },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <button
        onClick={() => setView('pronomi_menu')}
        className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors mb-4"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">{t('nav.back')}</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">{t('pronomi.oggettoDirettoTitle')}</h2>
          <div className="flex items-start gap-3 mt-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
            <Info className="flex-shrink-0 mt-1" />
            <p className="text-indigo-50 leading-relaxed">
              {t('pronomi.oggettoDirettoDesc')}
            </p>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pronouns.map((item, index) => (
              <motion.div
                key={item.form}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
              >
                <span className="text-2xl font-bold text-indigo-700">{item.form}</span>
                <span className="text-slate-600 font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PronomiOggettoDirettoChart;