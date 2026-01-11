import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Pencil, ChevronDown, ChevronUp, Book, FileText } from 'lucide-react';
import Lesson1Exercises from './Lesson1Exercises';

const Exercises = () => {
  const { t } = useLanguage();
  const [is202Expanded, setIs202Expanded] = useState(false);
  const [activeLesson, setActiveLesson] = useState<number | null>(null);

  return (
    <div className="space-y-8 my-12 max-w-4xl mx-auto">
      <section className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center min-h-[300px]">
        <div className="bg-yellow-50 p-6 rounded-full mb-6">
            <Pencil size={64} className="text-yellow-500" />
        </div>
        <h2 className="text-4xl font-serif text-center mb-4 text-gray-800">
          {t('exercises.title')}
        </h2>
        <p className="text-xl text-slate-500 italic mb-8">
            {activeLesson ? t('exercises.lesson1') : t('exercises.comingSoon')}
        </p>

        {/* Collapsible Section ITALIAN 202 */}
        <div className="w-full max-w-3xl">
            <motion.button
                onClick={() => setIs202Expanded(!is202Expanded)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 bg-slate-50 rounded-b-xl border-x border-b border-slate-200 shadow-inner">
                            {/* Lesson Buttons */}
                            <div className="flex gap-4 mb-6">
                                <button 
                                    onClick={() => setActiveLesson(activeLesson === 1 ? null : 1)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold shadow-sm transition-all ${
                                        activeLesson === 1 
                                            ? 'bg-indigo-600 text-white' 
                                            : 'bg-white text-indigo-600 hover:bg-indigo-50'
                                    }`}
                                >
                                    <FileText size={18} />
                                    {t('exercises.lesson1')}
                                </button>
                            </div>

                            {/* Content Area */}
                            <AnimatePresence mode='wait'>
                                {activeLesson === 1 && (
                                    <motion.div
                                        key="lesson1"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <Lesson1Exercises />
                                    </motion.div>
                                )}
                            </AnimatePresence>
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