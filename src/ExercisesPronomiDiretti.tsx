import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { useChartContext } from './ChartContext';
import { ArrowLeft, Check } from 'lucide-react';

const ExercisesPronomiDiretti = () => {
  const { t } = useLanguage();
  const { setView } = useChartContext();

  // Type definitions for our data
  type Sentence1 = { q: string; a: string };
  type Sentence2 = { q: string; a: string; missing: string };

  const sentences1 = t('practicePronomi.sentences1') as Sentence1[];
  const sentences2 = t('practicePronomi.sentences2') as Sentence2[];

  const [answers1, setAnswers1] = useState<{ [key: number]: string }>({});
  const [results1, setResults1] = useState<{ [key: number]: boolean | null }>({});
  
  const [answers2, setAnswers2] = useState<{ [key: number]: string }>({});
  const [results2, setResults2] = useState<{ [key: number]: boolean | null }>({});

  const checkPart1 = (index: number) => {
    const correct = sentences1[index].a.toLowerCase();
    const user = (answers1[index] || '').trim().toLowerCase();
    setResults1(prev => ({ ...prev, [index]: user === correct }));
  };

  const checkPart2 = (index: number) => {
    const correct = sentences2[index].missing.toLowerCase();
    const user = (answers2[index] || '').trim().toLowerCase();
    setResults2(prev => ({ ...prev, [index]: user === correct }));
  };

  const renderStyledSentence = (text: string) => {
    // Replaces *text* with bold styled text
    const parts = text.split('*');
    return (
      <span>
        {parts.map((part, i) => 
          i % 2 === 1 ? <strong key={i} className="text-indigo-600">{part}</strong> : part
        )}
      </span>
    );
  };

  const renderFillInBlank = (text: string, userVal: string, result: boolean | null, onChange: (val: string) => void, onCheck: () => void) => {
    // text is like "Sì, *lo* compro."
    // We want to replace *lo* with an input.
    const parts = text.split('*');
    // Assuming *word* is always present and in index 1.
    const pre = parts[0];
    const post = parts[2];

    return (
      <div className="flex items-center flex-wrap gap-2 text-lg">
        <span>{pre}</span>
        <div className="relative">
          <input
            type="text"
            value={userVal}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onCheck()}
            className={`w-16 p-1 text-center border-b-2 outline-none transition-colors ${
              result === true ? 'border-green-500 bg-green-50' : 
              result === false ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-indigo-500'
            }`}
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
        <h1 className="text-3xl font-bold text-slate-800">{t('practicePronomi.title')}</h1>
      </div>

      {/* Part 1 */}
      <section className="space-y-6">
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
          <h2 className="text-xl font-bold text-indigo-800 mb-2">{t('practicePronomi.part1Title')}</h2>
          <p className="text-indigo-600">{t('practicePronomi.part1Instr')}</p>
        </div>

        <div className="grid gap-4">
          {sentences1.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between flex-wrap gap-4"
            >
              <div className="text-lg text-slate-700 min-w-[200px]">
                {renderStyledSentence(item.q)}
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="..."
                  value={answers1[index] || ''}
                  onChange={(e) => setAnswers1(prev => ({ ...prev, [index]: e.target.value }))}
                  onKeyDown={(e) => e.key === 'Enter' && checkPart1(index)}
                  className={`w-20 px-3 py-2 rounded-lg border outline-none text-center font-medium transition-all ${
                    results1[index] === true ? 'border-green-500 bg-green-50 text-green-700' :
                    results1[index] === false ? 'border-red-500 bg-red-50 text-red-700' :
                    'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                  }`}
                />
                <button
                  onClick={() => checkPart1(index)}
                  className={`p-2 rounded-lg transition-colors ${
                    results1[index] === true ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500 hover:bg-indigo-100 hover:text-indigo-600'
                  }`}
                >
                  {results1[index] === true ? <Check size={20} /> : t('practicePronomi.check')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Part 2 */}
      <section className="space-y-6 pt-8 border-t border-slate-200">
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
          <h2 className="text-xl font-bold text-emerald-800 mb-2">{t('practicePronomi.part2Title')}</h2>
          <p className="text-emerald-600">{t('practicePronomi.part2Instr')}</p>
        </div>

        <div className="grid gap-4">
          {sentences2.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="text-lg font-medium text-slate-800">
                {item.q}
              </div>
              
              <div className="flex items-center gap-3 justify-end flex-grow">
                 {renderFillInBlank(
                   item.a, 
                   answers2[index] || '', 
                   results2[index] ?? null,
                   (val) => setAnswers2(prev => ({ ...prev, [index]: val })),
                   () => checkPart2(index)
                 )}
                <button
                  onClick={() => checkPart2(index)}
                  className={`p-2 rounded-lg transition-colors ml-2 ${
                    results2[index] === true ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500 hover:bg-emerald-100 hover:text-emerald-600'
                  }`}
                >
                   {results2[index] === true ? <Check size={20} /> : t('practicePronomi.check')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExercisesPronomiDiretti;