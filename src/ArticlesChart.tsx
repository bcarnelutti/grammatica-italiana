import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const ArticlesChart = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-indigo-500 underline-offset-8">
          {t('articles.definiteTitle')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
            {/* Masculine */}
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                <h3 className="text-2xl font-bold text-indigo-800 mb-6 text-center">{t('common.masculine')}</h3>
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-indigo-200">
                            <th className="pb-2 text-indigo-600">{t('common.singular')}</th>
                            <th className="pb-2 text-indigo-600">{t('common.plural')}</th>
                            <th className="pb-2 text-indigo-400 font-normal italic">{t('common.usage')}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-indigo-200/50">
                        <tr>
                            <td className="py-3 font-bold text-xl text-indigo-900">il</td>
                            <td className="py-3 font-bold text-xl text-indigo-900">i</td>
                            <td className="py-3 text-sm text-indigo-800">{t('articles.rules.m_cons')}</td>
                        </tr>
                        <tr>
                            <td className="py-3 font-bold text-xl text-indigo-900">lo</td>
                            <td className="py-3 font-bold text-xl text-indigo-900">gli</td>
                            <td className="py-3 text-sm text-indigo-800">{t('articles.rules.m_special')}</td>
                        </tr>
                        <tr>
                            <td className="py-3 font-bold text-xl text-indigo-900">l'</td>
                            <td className="py-3 font-bold text-xl text-indigo-900">gli</td>
                            <td className="py-3 text-sm text-indigo-800">{t('articles.rules.m_vowel')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Feminine */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">{t('common.feminine')}</h3>
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-red-200">
                            <th className="pb-2 text-red-600">{t('common.singular')}</th>
                            <th className="pb-2 text-red-600">{t('common.plural')}</th>
                            <th className="pb-2 text-red-400 font-normal italic">{t('common.usage')}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-red-200/50">
                        <tr>
                            <td className="py-3 font-bold text-xl text-red-900">la</td>
                            <td className="py-3 font-bold text-xl text-red-900">le</td>
                            <td className="py-3 text-sm text-red-800">{t('articles.rules.f_cons')}</td>
                        </tr>
                        <tr>
                            <td className="py-3 font-bold text-xl text-red-900">l'</td>
                            <td className="py-3 font-bold text-xl text-red-900">le</td>
                            <td className="py-3 text-sm text-red-800">{t('articles.rules.f_vowel')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-amber-500 underline-offset-8">
          {t('articles.indefiniteTitle')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
             {/* Masculine */}
             <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">{t('common.masculine')}</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                        <span className="font-bold text-2xl text-amber-900">un</span>
                        <span className="text-sm text-amber-800 w-2/3 text-right">{t('articles.rules.un_m')}</span>
                    </div>
                    <div className="flex items-center justify-between pb-2">
                        <span className="font-bold text-2xl text-amber-900">uno</span>
                        <span className="text-sm text-amber-800 w-2/3 text-right">{t('articles.rules.uno_m')}</span>
                    </div>
                </div>
            </div>

            {/* Feminine */}
            <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                <h3 className="text-2xl font-bold text-pink-800 mb-6 text-center">{t('common.feminine')}</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-pink-200 pb-2">
                        <span className="font-bold text-2xl text-pink-900">una</span>
                        <span className="text-sm text-pink-800 w-2/3 text-right">{t('articles.rules.una_f')}</span>
                    </div>
                    <div className="flex items-center justify-between pb-2">
                        <span className="font-bold text-2xl text-pink-900">un'</span>
                        <span className="text-sm text-pink-800 w-2/3 text-right">{t('articles.rules.un_f')}</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesChart;