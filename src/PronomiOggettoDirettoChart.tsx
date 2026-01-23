import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { ArrowLeft, Info, ArrowDown } from 'lucide-react';
import { useChartContext } from './ChartContext';

const PronomiOggettoDirettoChart = () => {
  const { t } = useLanguage();
  const { setView } = useChartContext();

  const pronouns = [
    { form: 'mi', label: t('pronomi.list.mi'), example: t('pronomi.examples.mi') },
    { form: 'ti', label: t('pronomi.list.ti'), example: t('pronomi.examples.ti') },
    { form: 'lo', label: t('pronomi.list.lo'), example: t('pronomi.examples.lo') },
    { form: 'la', label: t('pronomi.list.la'), example: t('pronomi.examples.la') },
    { form: 'ci', label: t('pronomi.list.ci'), example: t('pronomi.examples.ci') },
    { form: 'vi', label: t('pronomi.list.vi'), example: t('pronomi.examples.vi') },
    { form: 'li', label: t('pronomi.list.li'), example: t('pronomi.examples.li') },
    { form: 'le', label: t('pronomi.list.le'), example: t('pronomi.examples.le') },
  ];

  const renderExample = (sentence: string, pronoun: string) => {
    // Simple split to find the pronoun in the sentence
    const parts = sentence.split(new RegExp(`(\\b${pronoun}\\b)`, 'gi'));
    return (
      <p className="text-sm text-slate-500 mt-1 italic">
        {parts.map((part, i) => 
          part.toLowerCase() === pronoun.toLowerCase() 
            ? <strong key={i} className="text-indigo-600 font-bold">{part}</strong> 
            : part
        )}
      </p>
    );
  };

  const WordGroup = ({ label, word, highlight = false, color = "text-slate-500" }: { label?: string, word: string, highlight?: boolean, color?: string }) => (
    <div className="flex flex-col items-center gap-1">
      {label && (
        <div className={`flex flex-col items-center ${color}`}>
          <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
          <ArrowDown size={14} />
        </div>
      )}
      <span className={`text-xl ${highlight ? 'font-bold text-indigo-600 underline decoration-2 decoration-indigo-400 underline-offset-4' : 'font-medium text-slate-800'}`}>
        {word}
      </span>
    </div>
  );

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
        className="space-y-6"
      >
        {/* Title and Description Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">{t('pronomi.oggettoDirettoTitle')}</h2>
            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <Info className="flex-shrink-0 mt-1" />
              <p className="text-indigo-50 leading-relaxed">
                {t('pronomi.oggettoDirettoDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Diagram Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8">
          <h3 className="text-lg font-bold text-slate-400 mb-8 uppercase tracking-widest">{t('common.example')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Question Part */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-end gap-x-4 gap-y-6">
                <WordGroup word="Mangi" label={t('pronomi.diagram.verb')} color="text-pink-500" />
                <WordGroup word="la mela" label={t('pronomi.diagram.object')} color="text-emerald-500" />
                <WordGroup word="(tu)" label={t('pronomi.diagram.subject')} color="text-amber-500" />
                <span className="text-xl font-medium text-slate-800 mb-1">?</span>
              </div>
              <p className="text-slate-500 italic border-t border-slate-100 pt-3">
                Do you eat the <span className="underline decoration-slate-400 underline-offset-4 font-medium text-slate-700">apple</span>?
              </p>
            </div>

            {/* Answer Part */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-end gap-x-4 gap-y-6">
                <span className="text-xl font-medium text-slate-800 mb-1">Sì,</span>
                <WordGroup word="la" label={t('pronomi.diagram.directObject')} highlight={true} color="text-indigo-600" />
                <WordGroup word="mangio" label={t('pronomi.diagram.verb')} color="text-pink-500" />
                <WordGroup word="(io)" label={t('pronomi.diagram.subject')} color="text-amber-500" />
                <span className="text-xl font-medium text-slate-800 mb-1">.</span>
              </div>
               <p className="text-slate-500 italic border-t border-slate-100 pt-3">
                Yes, I eat <span className="underline decoration-indigo-300 underline-offset-4 font-bold text-indigo-600">it</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Pronoun List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pronouns.map((item, index) => (
            <motion.div
              key={item.form}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl font-bold text-indigo-700">{item.form}</span>
                <span className="text-slate-600 font-medium">{item.label}</span>
              </div>
              {renderExample(item.example, item.form)}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PronomiOggettoDirettoChart;