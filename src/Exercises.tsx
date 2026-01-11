import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Pencil, ChevronDown, ChevronUp, Book } from 'lucide-react';

const Exercises = () => {
  const { t } = useLanguage();
  const [is202Expanded, setIs202Expanded] = useState(false);

  return (
    <div className="space-y-8 my-12 max-w-4xl mx-auto">
      <section className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center min-h-[300px]">
        <div className="bg-yellow-50 p-6 rounded-full mb-6">
            <Pencil size={64} className="text-yellow-500" />
        </div>
        <h2 className="text-4xl font-serif text-center mb-4 text-gray-800">
          {t('exercises.title')}
        </h2>
        <p className="text-xl text-slate-500 italic mb-8">
            {t('exercises.comingSoon')}
        </p>

        {/* Collapsible Section ITALIAN 202 */}
        <div className="w-full max-w-lg">
            <motion.button
                onClick={() => setIs202Expanded(!is202Expanded)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-between p-6 rounded-xl border-2 transition-all shadow-sm ${
                    is202Expanded 
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-800' 
                        : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-200'
                }`}
            >
                <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full ${is202Expanded ? 'bg-indigo-100' : 'bg-slate-100'}`}>
                        <Book size={24} className={is202Expanded ? 'text-indigo-600' : 'text-slate-500'} />
                    </div>
                    <span className="text-xl font-bold">{t('exercises.italian202')}</span>
                </div>
                {is202Expanded ? <ChevronUp /> : <ChevronDown />}
            </motion.button>

            <AnimatePresence>
                {is202Expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-inner">
                            <p className="text-slate-500 italic text-center">
                                Contenuto del corso 202 in arrivo...
                            </p>
                            {/* Placeholder for actual exercises links/content */}
                            <ul className="mt-4 space-y-2">
                                <li className="p-3 bg-slate-50 rounded-lg text-slate-400 text-sm flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                                    Esercizio 1 (Placeholder)
                                </li>
                                <li className="p-3 bg-slate-50 rounded-lg text-slate-400 text-sm flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                                    Esercizio 2 (Placeholder)
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Exercises;