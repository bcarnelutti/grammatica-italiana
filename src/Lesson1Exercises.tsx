import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface ExercisePart {
  type: 'fill' | 'write' | 'dialogue';
  question: string;
  answer?: string;
  options?: string[];
  placeholder?: string;
}

const ExerciseItem = ({ part, index }: { part: ExercisePart; index: number }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    if (!part.answer) return;
    
    // Normalize answers for comparison (lowercase, trim)
    const normalizedUser = userAnswer.toLowerCase().trim();
    const normalizedCorrect = part.answer.toLowerCase().trim();
    
    // Handle multiple correct options separated by /
    const correctOptions = normalizedCorrect.split('/').map(s => s.trim());
    
    setIsCorrect(correctOptions.includes(normalizedUser));
    setIsChecked(true);
  };

  return (
    <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
      <div className="mb-2 font-medium text-slate-800">
        {part.question.split('__________').map((segment, i, arr) => (
          <span key={i}>
            {segment}
            {i < arr.length - 1 && (
              <span className="inline-block mx-1">
                {part.type === 'fill' ? (
                  <div className="relative inline-block">
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => {
                        setUserAnswer(e.target.value);
                        if (isChecked) setIsChecked(false);
                      }}
                      className={`border-b-2 bg-transparent text-center w-40 focus:outline-none ${
                        isChecked 
                          ? isCorrect ? 'border-green-500 text-green-700 font-bold' : 'border-red-500 text-red-700'
                          : 'border-slate-400 focus:border-indigo-500'
                      }`}
                      placeholder={part.placeholder || "..."}
                    />
                    {isChecked && (
                        <span className="absolute -right-6 top-0">
                            {isCorrect ? <Check size={18} className="text-green-600"/> : <X size={18} className="text-red-600"/>}
                        </span>
                    )}
                  </div>
                ) : (
                  <span className="text-slate-400">__________</span>
                )}
              </span>
            )}
          </span>
        ))}
      </div>

      {part.type === 'write' && (
        <textarea 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:outline-none text-sm"
            rows={4}
            placeholder="Scrivi qui la tua risposta..."
        />
      )}

      {part.type === 'fill' && part.answer && (
        <div className="mt-3 flex gap-3">
            <button 
                onClick={checkAnswer}
                className="px-4 py-1.5 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 disabled:opacity-50"
                disabled={!userAnswer}
            >
                Controlla
            </button>
            {isChecked && !isCorrect && (
                <span className="text-sm text-red-600 self-center">
                    Soluzione: <span className="font-bold">{part.answer}</span>
                </span>
            )}
        </div>
      )}
    </div>
  );
};

const Lesson1Exercises = () => {
  return (
    <div className="space-y-8">
      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 1: Interessi</h3>
        <h4 className="font-bold text-slate-700 mb-2 flex flex-col sm:flex-row sm:items-center gap-2">
          <span>A. Completa con il pronome corretto + interessa/interessano.</span>
          <span className="text-sm font-normal text-slate-500 italic">
            (Es: (A me) __________ lo sport. &rarr; mi interessa)
          </span>
        </h4>
        <ExerciseItem part={{ type: 'fill', question: '(A noi) __________ comprare gli addobbi per l’albero.', answer: 'ci interessa/non ci interessa' }} index={0} />
        <ExerciseItem part={{ type: 'fill', question: '(A te) __________ le feste storiche.', answer: 'ti interessano/non ti interessano' }} index={1} />
        <ExerciseItem part={{ type: 'fill', question: '(A me) __________ i concerti rock.', answer: 'mi interessano/non mi interessano' }} index={2} />
        <ExerciseItem part={{ type: 'fill', question: '(A voi) __________ scoprire nuovi autori.', answer: 'vi interessa/non vi interessa' }} index={3} />
        <ExerciseItem part={{ type: 'fill', question: '(A lui) __________ provare dolci diversi e spettacolari.', answer: 'gli interessa/non gli interessa' }} index={4} />
        <ExerciseItem part={{ type: 'fill', question: '(A loro) __________ i libri di storia.', answer: 'gli interessano/non gli interessano' }} index={5} />
        <ExerciseItem part={{ type: 'fill', question: '(A me) __________ il Festival di Sanremo.', answer: 'mi interessa/non mi interessa' }} index={6} />
        
        <h4 className="font-bold text-slate-700 mt-6 mb-2">B. Scrittura</h4>
        <p className="text-sm text-slate-600 mb-2 italic">
            Scrivi le tue risposte qui sotto e poi caricale sul <a href="https://brightspace.cuny.edu/d2l/le/1128170/discussions/List" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-bold">Forum di Brightspace</a>.
        </p>
        <p className="text-sm text-slate-600 mb-2">Scrivi 3 frasi su di te: 2 cose che ti interessano, 1 cosa che non ti interessa.</p>
        <ExerciseItem part={{ type: 'write', question: '' }} index={7} />
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 2: A chi interessa cosa?</h3>
        <h4 className="font-bold text-slate-700 mb-2">A. Completa con: gli / le</h4>
        <ExerciseItem part={{ type: 'fill', question: 'A Marco piace leggere: ____ interessa scoprire nuovi autori.', answer: 'gli' }} index={8} />
        <ExerciseItem part={{ type: 'fill', question: 'A Giulia piace il Natale: ____ interessa comprare gli addobbi per l’albero.', answer: 'le' }} index={9} />
        <ExerciseItem part={{ type: 'fill', question: 'A Sam e Leo piace il cibo: ____ interessano dolci diversi e spettacolari.', answer: 'gli' }} index={10} />
        <ExerciseItem part={{ type: 'fill', question: 'A Sara piace la storia: ____ interessano le feste storiche.', answer: 'le' }} index={11} />
      </div>

      {/* Exercise 3 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 3: “Quale evento ti interessa di più?”</h3>
        <h4 className="font-bold text-slate-700 mb-2">A. Completa con: mi / ti / gli / le / ci / vi / gli</h4>
        <ExerciseItem part={{ type: 'fill', question: 'A voi ___ interessa partecipare?', answer: 'vi' }} index={12} />
        <ExerciseItem part={{ type: 'fill', question: 'A lei ___ interessa molto la mostra.', answer: 'le' }} index={13} />
        <ExerciseItem part={{ type: 'fill', question: 'A me ___ interessano i mercatini.', answer: 'mi' }} index={14} />
        <ExerciseItem part={{ type: 'fill', question: 'A loro ___ interessa la festa storica.', answer: 'gli' }} index={15} />
        <ExerciseItem part={{ type: 'fill', question: 'A te ___ interessa l’evento X?', answer: 'ti' }} index={16} />
        <ExerciseItem part={{ type: 'fill', question: 'A noi ___ interessano gli eventi gratuiti.', answer: 'ci' }} index={17} />
        <ExerciseItem part={{ type: 'fill', question: 'A lui ___ interessa scoprire nuovi autori.', answer: 'gli' }} index={18} />
      </div>

      {/* Exercise 4 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 4: Domande “smartphone activity”</h3>
        <h4 className="font-bold text-slate-700 mb-2">A. Completa le domande (inserisci la parola mancante)</h4>
        <ExerciseItem part={{ type: 'fill', question: '__________ è? (Quando è?)', answer: 'quando' }} index={19} />
        <ExerciseItem part={{ type: 'fill', question: 'Cosa __________ __________?', answer: 'si fa' }} index={20} />
        <ExerciseItem part={{ type: 'fill', question: 'Quanto __________?', answer: 'costa' }} index={21} />
        <ExerciseItem part={{ type: 'fill', question: 'Bisogna pagare l’__________ o è __________?', answer: 'ingresso/gratis' }} index={22} />
      </div>

      {/* Exercise 5 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 5: Informazioni sull’evento</h3>
        <h4 className="font-bold text-slate-700 mb-2">A. Completa la scheda (usa le parole nel box: sabato / in centro / gratis / degustazioni / 10€ / alle 18:00)</h4>
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
            <div className="font-bold text-center border-b pb-2 mb-2">Evento: Festa dei Dolci</div>
            <div className="flex items-center gap-2">Quando: <input type="text" className="border-b bg-transparent w-full focus:outline-none" placeholder="sabato" /></div>
            <div className="flex items-center gap-2">Dove: <input type="text" className="border-b bg-transparent w-full focus:outline-none" placeholder="in centro" /></div>
            <div className="flex items-center gap-2">Cosa si fa: <input type="text" className="border-b bg-transparent w-full focus:outline-none" placeholder="degustazioni" /></div>
            <div className="flex items-center gap-2">Quanto costa: <input type="text" className="border-b bg-transparent w-full focus:outline-none" placeholder="10€ / oppure gratis" /></div>
            <div className="flex items-center gap-2">A che ora comincia: <input type="text" className="border-b bg-transparent w-full focus:outline-none" placeholder="alle 18:00" /></div>
        </div>
      </div>

      {/* Exercise 6 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 6: Dialogo a coppie</h3>
        <h4 className="font-bold text-slate-700 mb-2">A. Completa il dialogo</h4>
        <div className="space-y-2 font-mono text-sm bg-slate-50 p-4 rounded-lg">
            <p>S1: Mi interessa il __________ (evento).</p>
            <p>S2: Sì? __________? (Perché?)</p>
            <p>S1: Perché mi piace __________.</p>
            <p>S2: __________ è?</p>
            <p>S1: È __________.</p>
            <p>S2: Quanto __________?</p>
            <p>S1: Costa __________ / È __________.</p>
            <p>S2: Bello! Allora andiamo __________.</p>
        </div>
      </div>

      {/* Exercise 7 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 7: Punto di vista di un bambino</h3>
        <h4 className="font-bold text-slate-700 mb-2">A. Completa con i verbi all’imperfetto (ero / era / c’erano / andavo / potevo / mi piaceva)</h4>
        <div className="leading-loose">
            Da bambino/a, <input type="text" className="border-b w-20 text-center mx-1 focus:outline-none focus:border-indigo-500" /> (ero) cresciuto/a in una città piccola. 
            La città <input type="text" className="border-b w-20 text-center mx-1 focus:outline-none focus:border-indigo-500" /> (era) tranquilla e 
            <input type="text" className="border-b w-20 text-center mx-1 focus:outline-none focus:border-indigo-500" /> (c'erano) molti parchi. 
            In estate <input type="text" className="border-b w-20 text-center mx-1 focus:outline-none focus:border-indigo-500" /> (andavo) al parco con i miei amici e 
            <input type="text" className="border-b w-20 text-center mx-1 focus:outline-none focus:border-indigo-500" /> (potevo) giocare fuori fino a tardi. 
            <input type="text" className="border-b w-20 text-center mx-1 focus:outline-none focus:border-indigo-500" /> (Mi piaceva) molto anche andare in biblioteca.
        </div>
      </div>

      {/* Exercise 8 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 8: Mini-paragrafo finale</h3>
        <h4 className="font-bold text-slate-700 mb-2">A. Completa con: da piccolo/a / secondo me / per esempio / perché</h4>
        <div className="leading-loose">
            <input type="text" className="border-b w-32 text-center mx-1 focus:outline-none focus:border-indigo-500" /> (Da piccolo/a), il posto dove sono cresciuto/a era interessante 
            <input type="text" className="border-b w-32 text-center mx-1 focus:outline-none focus:border-indigo-500" /> (perché) era pieno di cose da fare. 
            <input type="text" className="border-b w-32 text-center mx-1 focus:outline-none focus:border-indigo-500" /> (Per esempio), potevo andare...
        </div>

        <h4 className="font-bold text-slate-700 mt-6 mb-2">B. Scrittura</h4>
        <p className="text-sm text-slate-600 mb-2 italic">
            Scrivi il tuo paragrafo qui sotto e poi caricalo sul <a href="https://brightspace.cuny.edu/d2l/le/1128170/discussions/List" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-bold">Forum di Brightspace</a>.
        </p>
        <p className="text-sm text-slate-600 mb-2">Scrivi un paragrafo di 8–10 righe: “Il posto dove sono cresciuto/a dal punto di vista di un bambino”</p>
        <ExerciseItem part={{ type: 'write', question: '' }} index={23} />
      </div>
    </div>
  );
};

export default Lesson1Exercises;