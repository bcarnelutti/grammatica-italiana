import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { vocabularyData, type VocabItem } from './vocabularyData';
import { useLanguage } from './LanguageContext';
import { Shirt, Stethoscope, Plane, GraduationCap, User, Trees, Gift, X, Dumbbell } from 'lucide-react';

interface VocabularyChartProps {
  topic: keyof typeof vocabularyData;
}

const icons: Record<string, React.ElementType> = {
  clothing: Shirt,
  health: Stethoscope,
  travel: Plane,
  education: GraduationCap,
  body: User,
  nature: Trees,
  celebrations: Gift,
  sports: Dumbbell
};

const colors: Record<string, string> = {
  clothing: 'text-pink-600 bg-pink-50 border-pink-100',
  health: 'text-red-600 bg-red-50 border-red-100',
  travel: 'text-sky-600 bg-sky-50 border-sky-100',
  education: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  body: 'text-orange-600 bg-orange-50 border-orange-100',
  nature: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  celebrations: 'text-purple-600 bg-purple-50 border-purple-100',
  sports: 'text-blue-600 bg-blue-50 border-blue-100'
};

const VocabularyChart = ({ topic }: VocabularyChartProps) => {
  const { t, language } = useLanguage();
  const [selectedWord, setSelectedWord] = useState<VocabItem | null>(null);
  
  const items = [...vocabularyData[topic]].sort((a, b) => a.it.localeCompare(b.it));
  
  const Icon = icons[topic] || User;
  const colorClass = colors[topic] || 'text-slate-600 bg-slate-50 border-slate-100';

  const getGenderLabel = (gender?: string) => {
      if (!gender) return '';
      if (gender === 'm') return t('common.masculine');
      if (gender === 'f') return t('common.feminine');
      if (gender === 'pl') return t('common.plural');
      return gender;
  }

  return (
    <section className="my-8 max-w-6xl mx-auto relative">
      <div className={`p-8 rounded-2xl border-2 shadow-sm mb-8 flex items-center justify-center gap-4 ${colorClass}`}>
        <Icon size={40} />
        <h2 className="text-4xl font-serif font-bold">
          {t(`vocabularyMenu.${topic}`)}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            onClick={() => setSelectedWord(item)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center cursor-pointer group"
          >
            <span className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                {item.it}
            </span>
            <span className="text-sm text-slate-500 font-medium">{item.en}</span>
            {item.gender && (
                <span className={`mt-2 text-xs font-bold px-2 py-1 rounded-full ${
                    item.gender === 'm' ? 'bg-blue-100 text-blue-800' :
                    item.gender === 'f' ? 'bg-pink-100 text-pink-800' :
                    'bg-purple-100 text-purple-800'
                }`}>
                    {item.gender.toUpperCase()}
                </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedWord && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
            onClick={() => setSelectedWord(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="p-6 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                <div>
                  <h3 className="text-3xl font-black text-slate-800">{selectedWord.it}</h3>
                  <p className="text-slate-500 font-medium">{selectedWord.en}</p>
                </div>
                <button 
                  onClick={() => setSelectedWord(null)}
                  className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X size={24} className="text-slate-500" />
                </button>
              </div>

              <div className="p-8 flex justify-center">
                 <div className="text-center">
                    <p className="text-lg text-slate-600">
                        {t('common.gender')}: <span className="font-bold">
                            {getGenderLabel(selectedWord.gender)}
                        </span>
                    </p>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VocabularyChart;