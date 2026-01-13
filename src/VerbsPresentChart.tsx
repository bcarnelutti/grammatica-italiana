import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { X, MousePointerClick } from 'lucide-react';
import VerbSearchTool from './components/VerbSearchTool';

interface IrregularVerb {
  infinitive: string;
  meaning: string;
  conjugation: [string, string, string, string, string, string]; // io, tu, lui, noi, voi, loro
}

const irregularVerbs: IrregularVerb[] = [
  { infinitive: 'Essere', meaning: 'to be', conjugation: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'] },
  { infinitive: 'Avere', meaning: 'to have', conjugation: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'] },
  { infinitive: 'Andare', meaning: 'to go', conjugation: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'] },
  { infinitive: 'Venire', meaning: 'to come', conjugation: ['vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'] },
  { infinitive: 'Fare', meaning: 'to do/make', conjugation: ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'] },
  { infinitive: 'Stare', meaning: 'to stay/be', conjugation: ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'] },
  { infinitive: 'Dare', meaning: 'to give', conjugation: ['do', 'dai', 'dà', 'diamo', 'date', 'danno'] },
  { infinitive: 'Dire', meaning: 'to say', conjugation: ['dico', 'dici', 'dice', 'diciamo', 'dite', 'dicono'] },
  { infinitive: 'Sapere', meaning: 'to know', conjugation: ['so', 'sai', 'sa', 'sappiamo', 'sapete', 'sanno'] },
  { infinitive: 'Bere', meaning: 'to drink', conjugation: ['bevo', 'bevi', 'beve', 'beviamo', 'bevete', 'bevono'] },
  { infinitive: 'Uscire', meaning: 'to go out', conjugation: ['esco', 'esci', 'esce', 'usciamo', 'uscite', 'escono'] },
  { infinitive: 'Rimanere', meaning: 'to remain', conjugation: ['rimango', 'rimani', 'rimane', 'rimaniamo', 'rimanete', 'rimangono'] },
  { infinitive: 'Salire', meaning: 'to go up', conjugation: ['salgo', 'sali', 'sale', 'saliamo', 'salite', 'salgono'] },
  { infinitive: 'Scegliere', meaning: 'to choose', conjugation: ['scelgo', 'scegli', 'sceglie', 'scegliamo', 'scegliete', 'scelgono'] },
  { infinitive: 'Spegnere', meaning: 'to turn off', conjugation: ['spengo', 'spegni', 'spegne', 'spegniamo', 'spegnete', 'spengono'] },
  { infinitive: 'Tenere', meaning: 'to keep/hold', conjugation: ['tengo', 'tieni', 'tiene', 'teniamo', 'tenete', 'tengono'] },
  { infinitive: 'Volere', meaning: 'to want', conjugation: ['voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono'] },
  { infinitive: 'Potere', meaning: 'to be able to', conjugation: ['posso', 'puoi', 'può', 'possiamo', 'potete', 'possono'] },
  { infinitive: 'Dovere', meaning: 'to have to', conjugation: ['devo', 'devi', 'deve', 'dobbiamo', 'dovete', 'devono'] },
];

const iscVerbs: IrregularVerb[] = [
  { infinitive: 'Capire', meaning: 'to understand', conjugation: ['capisco', 'capisci', 'capisce', 'capiamo', 'capite', 'capiscono'] },
  { infinitive: 'Finire', meaning: 'to finish', conjugation: ['finisco', 'finisci', 'finisce', 'finiamo', 'finite', 'finiscono'] },
  { infinitive: 'Preferire', meaning: 'to prefer', conjugation: ['preferisco', 'preferisci', 'preferisce', 'preferiamo', 'preferite', 'preferiscono'] },
  { infinitive: 'Pulire', meaning: 'to clean', conjugation: ['pulisco', 'pulisci', 'pulisce', 'puliamo', 'pulite', 'puliscono'] },
  { infinitive: 'Spedire', meaning: 'to send', conjugation: ['spedisco', 'spedisci', 'spedisce', 'spediamo', 'spedite', 'spediscono'] },
  { infinitive: 'Costruire', meaning: 'to build', conjugation: ['costruisco', 'costruisci', 'costruisce', 'costruiamo', 'costruite', 'costruiscono'] },
];

const VerbsPresentChart = () => {
  const { t } = useLanguage();
  const [selectedVerb, setSelectedVerb] = useState<IrregularVerb | null>(null);

  const pronouns = ['io', 'tu', 'lui / lei', 'noi', 'voi', 'loro'];

  return (
    <div className="space-y-12">
      <VerbSearchTool tense="presente" />

      {/* Regular Verbs Section */}
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-green-500 underline-offset-8">
          {t('verbs.presentTitle')}
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-gray-500 font-medium w-1/4">{t('common.pronoun')}</th>
                <th className="p-4 text-green-600 font-bold w-1/4">-ARE (parl-are)</th>
                <th className="p-4 text-green-600 font-bold w-1/4">-ERE (scriv-ere)</th>
                <th className="p-4 text-green-600 font-bold w-1/4">-IRE (dorm-ire)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">io</td>
                <td className="p-4">parl-<span className="font-bold text-green-600">o</span></td>
                <td className="p-4">scriv-<span className="font-bold text-green-600">o</span></td>
                <td className="p-4">dorm-<span className="font-bold text-green-600">o</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">tu</td>
                <td className="p-4">parl-<span className="font-bold text-green-600">i</span></td>
                <td className="p-4">scriv-<span className="font-bold text-green-600">i</span></td>
                <td className="p-4">dorm-<span className="font-bold text-green-600">i</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">lui / lei</td>
                <td className="p-4">parl-<span className="font-bold text-green-600">a</span></td>
                <td className="p-4">scriv-<span className="font-bold text-green-600">e</span></td>
                <td className="p-4">dorm-<span className="font-bold text-green-600">e</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">noi</td>
                <td className="p-4">parl-<span className="font-bold text-green-600">iamo</span></td>
                <td className="p-4">scriv-<span className="font-bold text-green-600">iamo</span></td>
                <td className="p-4">dorm-<span className="font-bold text-green-600">iamo</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">voi</td>
                <td className="p-4">parl-<span className="font-bold text-green-600">ate</span></td>
                <td className="p-4">scriv-<span className="font-bold text-green-600">ete</span></td>
                <td className="p-4">dorm-<span className="font-bold text-green-600">ite</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-700">loro</td>
                <td className="p-4">parl-<span className="font-bold text-green-600">ano</span></td>
                <td className="p-4">scriv-<span className="font-bold text-green-600">ono</span></td>
                <td className="p-4">dorm-<span className="font-bold text-green-600">ono</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Irregular Verbs Section */}
      <section className="my-12">
        <h3 className="text-3xl font-bold text-slate-800 text-center mb-8 flex items-center justify-center gap-3">
            {t('verbs.irregularVerbsTitle')}
            <MousePointerClick className="text-slate-400" size={28}/>
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            {irregularVerbs.map((verb) => (
                <motion.button
                    key={verb.infinitive}
                    onClick={() => setSelectedVerb(verb)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col items-center"
                >
                    <span className="font-bold text-lg text-slate-800">{verb.infinitive}</span>
                    <span className="text-xs text-slate-500 italic">{verb.meaning}</span>
                </motion.button>
            ))}
        </div>

        {/* ISC Verbs Section */}
        <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100">
            <h4 className="text-2xl font-bold text-teal-800 text-center mb-2">{t('verbs.noteTitle')}</h4>
            <p className="text-center text-teal-700 mb-8 max-w-2xl mx-auto">{t('verbs.noteText')}</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {iscVerbs.map((verb) => (
                    <motion.button
                        key={verb.infinitive}
                        onClick={() => setSelectedVerb(verb)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 bg-white rounded-xl shadow-sm border border-teal-200 hover:border-teal-400 hover:shadow-md transition-all flex flex-col items-center"
                    >
                        <span className="font-bold text-lg text-teal-900">{verb.infinitive}</span>
                        <span className="text-xs text-teal-600 italic">{verb.meaning}</span>
                    </motion.button>
                ))}
            </div>
        </div>
      </section>

      {/* Verb Conjugation Modal */}
      <AnimatePresence>
        {selectedVerb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
            onClick={() => setSelectedVerb(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedVerb(null)}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X size={24} />
              </button>

              <div className="bg-indigo-50 p-6 border-b border-indigo-100 text-center">
                <h3 className="text-3xl font-bold text-indigo-900 mb-1">{selectedVerb.infinitive}</h3>
                <p className="text-indigo-600 italic">{selectedVerb.meaning}</p>
              </div>

              <div className="p-6">
                <table className="w-full text-lg">
                    <tbody className="divide-y divide-slate-100">
                        {pronouns.map((pronoun, idx) => (
                            <tr key={pronoun} className="group hover:bg-slate-50 transition-colors">
                                <td className="py-3 pl-4 text-slate-400 font-medium w-1/3">{pronoun}</td>
                                <td className="py-3 font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                                    {selectedVerb.conjugation[idx]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VerbsPresentChart;