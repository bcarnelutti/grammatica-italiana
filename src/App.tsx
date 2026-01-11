import { useState, createContext, useContext } from 'react';
import { motion } from 'framer-motion';
import { Globe, Shirt, Stethoscope, Plane, GraduationCap, User, Trees, Gift, Dumbbell } from 'lucide-react';

import ArticlesChart from './ArticlesChart';
import VerbsMenu from './VerbsMenu';
import VerbsPresentChart from './VerbsPresentChart';
import VerbsPassatoProssimoChart from './VerbsPassatoProssimoChart';
import VerbsImperfettoChart from './VerbsImperfettoChart';
import VerbsFuturoChart from './VerbsFuturoChart';
import VerbsCondizionalePresenteChart from './VerbsCondizionalePresenteChart';
import VerbsCongiuntivoPresenteChart from './VerbsCongiuntivoPresenteChart';
import VerbsCongiuntivoPassatoChart from './VerbsCongiuntivoPassatoChart';
import VerbsReflexiveChart from './VerbsReflexiveChart';
import CasaDiEssereChart from './CasaDiEssereChart';
import PrepositionsChart from './PrepositionsChart';
import VocabularyChart from './VocabularyChart';

import { LanguageProvider, useLanguage } from './LanguageContext';
import { ChartProvider, useChartContext, type ViewState } from './ChartContext';

// --- Components ---

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
      className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md text-slate-600 hover:text-indigo-600 font-medium border border-slate-100 transition-all hover:shadow-lg"
    >
      <Globe size={18} />
      <span>{language === 'it' ? 'IT' : 'EN'}</span>
    </button>
  );
};

const Navigation = () => {
  const { view, setView } = useChartContext();
  const { t } = useLanguage();
  const isVerbsActive = view.startsWith('verbs_');
  const isVocabActive = view.startsWith('vocab_') || view === 'vocabulary_menu';

  return (
    <div className="flex justify-center mb-12 space-x-6 flex-wrap gap-y-4">
      <button
        onClick={() => setView('articles')}
        className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
          view === 'articles'
            ? 'bg-indigo-600 text-white shadow-lg scale-105'
            : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm'
        }`}
      >
        {t('nav.articles')}
      </button>
      <button
        onClick={() => setView('verbs_menu')}
        className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
          isVerbsActive
            ? 'bg-indigo-600 text-white shadow-lg scale-105'
            : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm'
        }`}
      >
        {t('nav.verbs')}
      </button>
      <button
        onClick={() => setView('prepositions')}
        className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
          view === 'prepositions'
            ? 'bg-indigo-600 text-white shadow-lg scale-105'
            : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm'
        }`}
      >
        {t('nav.prepositions')}
      </button>
      <button
        onClick={() => setView('vocabulary_menu')}
        className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
          isVocabActive
            ? 'bg-indigo-600 text-white shadow-lg scale-105'
            : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm'
        }`}
      >
        {t('nav.vocabulary')}
      </button>
    </div>
  );
};

const HeaderControls = () => {
    return (
        <div className="fixed top-8 right-8 z-[100] flex flex-col gap-4 items-end">
            <LanguageSwitcher />
        </div>
    )
}

function App() {
  return (
    <LanguageProvider>
      <ChartProvider>
        <AppContent />
      </ChartProvider>
    </LanguageProvider>
  );
}

const AppContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <HeaderControls />
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            {t('subtitle')}
          </p>
          <Navigation />
        </header>

        <MainContent />
        
        <footer className="mt-24 text-center text-slate-400 text-sm space-y-2">
          <p>
            {t('footer')} — <a href="https://github.com/bcarnelutti/grammatica-italiana" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 underline transition-colors">Creato da Beatrice Carnelutti</a>
          </p>
          <p className="text-xs opacity-70">
            App: MIT License | Content: <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 underline">CC BY-NC-SA 4.0</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

const MainContent = () => {
  const { view } = useChartContext();

  if (view === 'articles') {
    return <ArticlesChart />;
  }

  if (view === 'verbs_menu') {
    return <VerbsMenu />;
  }

  if (view === 'verbs_present') {
    return <VerbsPresentChart />;
  }

  if (view === 'verbs_passato_prossimo') {
    return <VerbsPassatoProssimoChart />;
  }

  if (view === 'verbs_imperfetto') {
    return <VerbsImperfettoChart />;
  }

  if (view === 'verbs_futuro') {
    return <VerbsFuturoChart />;
  }

  if (view === 'verbs_condizionale_presente') {
    return <VerbsCondizionalePresenteChart />;
  }

  if (view === 'verbs_congiuntivo_presente') {
    return <VerbsCongiuntivoPresenteChart />;
  }

  if (view === 'verbs_congiuntivo_passato') {
    return <VerbsCongiuntivoPassatoChart />;
  }

  if (view === 'verbs_reflexive') {
    return <VerbsReflexiveChart />;
  }

  if (view === 'verbs_casa_di_essere') {
    return <CasaDiEssereChart />;
  }

  if (view === 'prepositions') {
    return <PrepositionsChart />;
  }

  if (view === 'vocabulary_menu') {
    return <VocabularyMenu />;
  }

  if (view.startsWith('vocab_')) {
     const topic = view.replace('vocab_', '') as any;
     return <VocabularyChart topic={topic} />;
  }

  return null;
};

const VocabularyMenu = () => {
  const { setView } = useChartContext();
  const { t } = useLanguage();

  const menuItems = [
    { id: 'vocab_clothing', label: t('vocabularyMenu.clothing'), icon: Shirt, color: 'text-pink-600' },
    { id: 'vocab_health', label: t('vocabularyMenu.health'), icon: Stethoscope, color: 'text-red-600' },
    { id: 'vocab_travel', label: t('vocabularyMenu.travel'), icon: Plane, color: 'text-sky-600' },
    { id: 'vocab_education', label: t('vocabularyMenu.education'), icon: GraduationCap, color: 'text-indigo-600' },
    { id: 'vocab_body', label: t('vocabularyMenu.body'), icon: User, color: 'text-orange-600' },
    { id: 'vocab_nature', label: t('vocabularyMenu.nature'), icon: Trees, color: 'text-emerald-600' },
    { id: 'vocab_celebrations', label: t('vocabularyMenu.celebrations'), icon: Gift, color: 'text-purple-600' },
    { id: 'vocab_sports', label: t('vocabularyMenu.sports'), icon: Dumbbell, color: 'text-blue-600' },
  ] as const;

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {menuItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => setView(item.id as ViewState)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all flex flex-col items-center gap-4 group"
        >
          <div className={`p-4 rounded-full bg-slate-50 group-hover:bg-slate-100 transition-colors ${item.color}`}>
             <item.icon size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            {item.label}
          </h3>
        </motion.button>
      ))}
    </div>
  );
};

export default App;