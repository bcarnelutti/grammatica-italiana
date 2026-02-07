import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { useChartContext } from '../ChartContext';
import { ArrowLeft, Check } from 'lucide-react';

const ExercisesPartitivo = () => {
  const { t } = useLanguage();
  const { setView } = useChartContext();

  type Sentence = { q: string; a: string };

  // Helper to safely cast the translation result to array
  const sentences = (t('practicePartitivo.sentences') as unknown as Sentence[]);

  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [results, setResults] = useState<{ [key: number]: boolean | null }>({});

  const checkAnswer = (index: number) => {
    const correct = sentences[index].a.toLowerCase();
    const user = (answers[index] || '').trim().toLowerCase();
    // Allow for apostrophe variations if needed, but standardizing on simple check first
    setResults(prev => ({ ...prev, [index]: user === correct }));
  };

  const renderSentence = (text: string, index: number) => {
    const parts = text.split('___');
    // Assuming '___' is always present once
    const pre = parts[0];
    const post = parts[1];
    
    const userVal = answers[index] || '';
    const result = results[index] ?? null;

    return (
      <div className="flex items-center flex-wrap gap-2 text-lg">
        <span>{pre}</span>
        <div className="relative">
          <input
            type="text"
            value={userVal}
            onChange={(e) => setAnswers(prev => ({ ...prev, [index]: e.target.value }))}
            onKeyDown={(e) => e.key === 'Enter' && checkAnswer(index)}
            className={`w-24 p-1 text-center border-b-2 outline-none transition-colors font-medium ${
              result === true ? 'border-green-500 bg-green-50 text-green-700' : 
              result === false ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-300 focus:border-orange-500'
            }`}
            placeholder="..."
          />
        </div>
        <span>{post}</span>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 pb-24">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => setView('practice_menu')}
          className="p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <ArrowLeft size={24} className="text-slate-600" />
        </button>
        <h1 className="text-3xl font-bold text-slate-800">{t('practicePartitivo.title')}</h1>
      </div>

      <section className="space-y-6">
        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
          <p className="text-orange-800 font-medium text-lg">{t('practicePartitivo.instruction')}</p>
        </div>

        <div className="grid gap-4">
          {Array.isArray(sentences) && sentences.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex-grow">
                 {renderSentence(item.q, index)}
              </div>
              
              <button
                onClick={() => checkAnswer(index)}
                className={`p-2 px-4 rounded-lg transition-colors font-medium flex items-center gap-2 self-end sm:self-center ${
                  results[index] === true 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-700'
                }`}
              >
                {results[index] === true ? (
                  <>
                    <Check size={18} />
                    {t('practicePartitivo.correct')}
                  </>
                ) : (
                  t('practicePartitivo.check')
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExercisesPartitivo;