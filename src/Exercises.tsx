import { useLanguage } from './LanguageContext';
import { Pencil } from 'lucide-react';

const Exercises = () => {
  const { t } = useLanguage();

  return (
    <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
        <div className="bg-yellow-50 p-6 rounded-full mb-6">
            <Pencil size={64} className="text-yellow-500" />
        </div>
        <h2 className="text-4xl font-serif text-center mb-4 text-gray-800">
          {t('exercises.title')}
        </h2>
        <p className="text-xl text-slate-500 italic">
            {t('exercises.comingSoon')}
        </p>
    </section>
  );
};

export default Exercises;