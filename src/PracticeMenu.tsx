import { motion } from 'framer-motion';
import { useChartContext, type ViewState } from './ChartContext';
import { useLanguage } from './LanguageContext';
import { Target, PieChart } from 'lucide-react';

const PracticeMenu = () => {
  const { setView } = useChartContext();
  const { t } = useLanguage();

  const menuItems = [
    { id: 'practice_pronomi_direct', label: t('practiceMenu.pronomi_direct'), icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { id: 'practice_partitivo', label: t('practiceMenu.partitivo'), icon: PieChart, color: 'text-orange-600', bg: 'bg-orange-50' },
  ] as const;

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {menuItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => setView(item.id as ViewState)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all text-left flex items-center gap-6 group"
        >
          <div className={`p-4 rounded-full ${item.bg} group-hover:bg-opacity-80 transition-colors`}>
            <item.icon size={32} className={item.color} />
          </div>
          <h3 className={`text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors`}>
            {item.label}
          </h3>
        </motion.button>
      ))}
    </div>
  );
};

export default PracticeMenu;