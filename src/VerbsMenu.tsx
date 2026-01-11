import { motion } from 'framer-motion';
import { useChartContext, ViewState } from './ChartContext';
import { useLanguage } from './LanguageContext';
import { BookOpen, Clock, Activity, ArrowRight, RotateCw } from 'lucide-react';

const VerbsMenu = () => {
  const { setView } = useChartContext();
  const { t } = useLanguage();

  const menuItems = [
    { id: 'verbs_present', label: t('verbsMenu.present'), icon: Activity, color: 'text-green-600', bg: 'bg-green-50' },
    { id: 'verbs_passato_prossimo', label: t('verbsMenu.passato_prossimo'), icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'verbs_imperfetto', label: t('verbsMenu.imperfetto'), icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'verbs_futuro', label: t('verbsMenu.futuro'), icon: ArrowRight, color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 'verbs_reflexive', label: t('verbsMenu.reflexive'), icon: RotateCw, color: 'text-pink-600', bg: 'bg-pink-50' },
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

export default VerbsMenu;