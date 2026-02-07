import { useState } from 'react';
import { Check, X } from 'lucide-react';

interface ExercisePart {
  type: 'fill' | 'write' | 'dialogue';
  question: string;
  answer?: string;
  options?: string[];
  placeholder?: string;
}

const ExerciseItem = ({ part }: { part: ExercisePart; index: number }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    if (!part.answer) return;
    
    const normalizedUser = userAnswer.toLowerCase().trim();
    const normalizedCorrect = part.answer.toLowerCase().trim();
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
            placeholder="Write your answer here..."
        />
      )}

      {part.type === 'fill' && part.answer && (
        <div className="mt-3 flex gap-3">
            <button 
                onClick={checkAnswer}
                className="px-4 py-1.5 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 disabled:opacity-50"
                disabled={!userAnswer}
            >
                Check
            </button>
            {isChecked && !isCorrect && (
                <span className="text-sm text-red-600 self-center">
                    Solution: <span className="font-bold">{part.answer}</span>
                </span>
            )}
        </div>
      )}
    </div>
  );
};

// New Component for Matching Exercises (Column A -> Column B)
const MatchingExercise = () => {
    const [answers, setAnswers] = useState({
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        gapA: '',
        gapB: '',
        gapC: '',
        gapD: '',
        gapE: ''
    });
    const [results, setResults] = useState<{ [key: string]: boolean } | null>(null);

    const correctAnswers = {
        item1: 'D',
        item2: 'A',
        item3: 'E',
        item4: 'B',
        item5: 'C',
        gapA: 'le',
        gapB: 'ci',
        gapC: 'gli',
        gapD: 'gli',
        gapE: 'le'
    };

    const handleChange = (key: string, value: string) => {
        const isMatchingItem = key.startsWith('item');
        const formattedValue = isMatchingItem ? value.toUpperCase().slice(0, 1) : value.toLowerCase();
        
        setAnswers(prev => ({ ...prev, [key]: formattedValue }));
        if (results) setResults(null);
    };

    const checkAll = () => {
        const newResults: { [key: string]: boolean } = {};
        (Object.keys(correctAnswers) as Array<keyof typeof correctAnswers>).forEach(key => {
            const userVal = answers[key].trim();
            newResults[key] = userVal.toLowerCase() === correctAnswers[key].toLowerCase();
        });
        setResults(newResults);
    };

    const getInputClass = (key: string, isGap = false) => {
        if (isGap) {
            const baseClass = "border-b-2 bg-transparent text-center w-12 focus:outline-none font-bold text-lg mx-1 ";
            if (!results) return baseClass + "border-slate-300 focus:border-indigo-500";
            return baseClass + (results[key] ? "border-green-500 text-green-700" : "border-red-500 text-red-700");
        }
        const baseClass = "border-2 w-10 h-10 text-center rounded-lg focus:outline-none font-bold text-lg ";
        if (!results) return baseClass + "border-slate-300 focus:border-indigo-500";
        return baseClass + (results[key] ? "border-green-500 text-green-700 bg-green-50" : "border-red-500 text-red-700 bg-red-50");
    };

    return (
        <div className="grid md:grid-cols-2 gap-8">
            {/* Column 1: Premises with Input */}
            <div className="space-y-4">
                <h5 className="font-bold text-slate-500 uppercase text-xs tracking-wider mb-2">People</h5>
                
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <input type="text" value={answers.item1} onChange={(e) => handleChange('item1', e.target.value)} className={getInputClass('item1')} placeholder="?" maxLength={1} />
                    <span className="font-medium text-slate-700">1. A Marco piace leggere</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <input type="text" value={answers.item2} onChange={(e) => handleChange('item2', e.target.value)} className={getInputClass('item2')} placeholder="?" maxLength={1} />
                    <span className="font-medium text-slate-700">2. A Sara piace la storia</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <input type="text" value={answers.item3} onChange={(e) => handleChange('item3', e.target.value)} className={getInputClass('item3')} placeholder="?" maxLength={1} />
                    <span className="font-medium text-slate-700">3. A Giulia piace il Natale</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <input type="text" value={answers.item4} onChange={(e) => handleChange('item4', e.target.value)} className={getInputClass('item4')} placeholder="?" maxLength={1} />
                    <span className="font-medium text-slate-700">4. A noi piace viaggiare</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <input type="text" value={answers.item5} onChange={(e) => handleChange('item5', e.target.value)} className={getInputClass('item5')} placeholder="?" maxLength={1} />
                    <span className="font-medium text-slate-700">5. A Sam e Leo piace il cibo</span>
                </div>
                
                <button 
                    onClick={checkAll}
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors shadow-sm font-bold w-full md:w-auto"
                >
                    Check all
                </button>
            </div>

            {/* Column 2: Completions with Letters and Gaps */}
            <div className="space-y-4">
                <h5 className="font-bold text-slate-500 uppercase text-xs tracking-wider mb-2">Interests (Insert the pronoun)</h5>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 shadow-sm">
                    <div className="bg-indigo-100 text-indigo-700 w-8 h-8 flex items-center justify-center rounded-full font-bold flex-shrink-0">A</div>
                    <span className="text-slate-700 py-1"><input type="text" value={answers.gapA} onChange={(e) => handleChange('gapA', e.target.value)} className={getInputClass('gapA', true)} />interessano le feste storiche.</span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 shadow-sm">
                    <div className="bg-indigo-100 text-indigo-700 w-8 h-8 flex items-center justify-center rounded-full font-bold flex-shrink-0">B</div>
                    <span className="text-slate-700 py-1"><input type="text" value={answers.gapB} onChange={(e) => handleChange('gapB', e.target.value)} className={getInputClass('gapB', true)} />interessa vedere posti nuovi.</span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 shadow-sm">
                    <div className="bg-indigo-100 text-indigo-700 w-8 h-8 flex items-center justify-center rounded-full font-bold flex-shrink-0">C</div>
                    <span className="text-slate-700 py-1"><input type="text" value={answers.gapC} onChange={(e) => handleChange('gapC', e.target.value)} className={getInputClass('gapC', true)} />interessano dolci diversi e spettacolari.</span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 shadow-sm">
                    <div className="bg-indigo-100 text-indigo-700 w-8 h-8 flex items-center justify-center rounded-full font-bold flex-shrink-0">D</div>
                    <span className="text-slate-700 py-1"><input type="text" value={answers.gapD} onChange={(e) => handleChange('gapD', e.target.value)} className={getInputClass('gapD', true)} />interessa scoprire nuovi autori.</span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100 shadow-sm">
                    <div className="bg-indigo-100 text-indigo-700 w-8 h-8 flex items-center justify-center rounded-full font-bold flex-shrink-0">E</div>
                    <span className="text-slate-700 py-1"><input type="text" value={answers.gapE} onChange={(e) => handleChange('gapE', e.target.value)} className={getInputClass('gapE', true)} />interessa comprare gli addobbi per l’albero.</span>
                </div>
            </div>
        </div>
    );
};

const CheckableEventCard = () => {
    const [answers, setAnswers] = useState({
        quando: '',
        dove: '',
        cosa: '',
        quanto1: '',
        quanto2: '',
        ora: ''
    });
    const [results, setResults] = useState<{ [key: string]: boolean } | null>(null);

    const correctAnswers = {
        quando: ['sabato'],
        dove: ['in centro'],
        cosa: ['degustazioni'],
        quanto1: ['10€', '10 euro', '10'],
        quanto2: ['gratis'],
        ora: ['alle 18:00', '18:00', '18']
    };

    const handleChange = (key: string, value: string) => {
        setAnswers(prev => ({ ...prev, [key]: value }));
        if (results) setResults(null);
    };

    const checkAll = () => {
        const newResults: { [key: string]: boolean } = {};
        (Object.keys(correctAnswers) as Array<keyof typeof correctAnswers>).forEach(key => {
            const userVal = answers[key].toLowerCase().trim();
            newResults[key] = correctAnswers[key].includes(userVal);
        });
        setResults(newResults);
    };

    const getInputClass = (key: string) => {
        const baseClass = "border-b-2 bg-transparent w-full focus:outline-none px-1 font-medium transition-colors ";
        if (!results) return baseClass + "border-slate-300 focus:border-indigo-500";
        return baseClass + (results[key] ? "border-green-500 text-green-700" : "border-red-500 text-red-700");
    };

    return (
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-inner">
            <div className="font-bold text-center border-b border-slate-200 pb-3 mb-6 text-xl text-indigo-900">
                Event: Festa dei Dolci
            </div>
            
            <div className="space-y-6 max-w-md mx-auto">
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase text-slate-400">When:</label>
                    <div className="relative">
                        <input type="text" value={answers.quando} onChange={(e) => handleChange('quando', e.target.value)} className={getInputClass('quando')} />
                        {results && (results.quando ? <Check size={16} className="absolute -right-6 top-1 text-green-600"/> : <X size={16} className="absolute -right-6 top-1 text-red-600"/>)}
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase text-slate-400">Where:</label>
                    <div className="relative">
                        <input type="text" value={answers.dove} onChange={(e) => handleChange('dove', e.target.value)} className={getInputClass('dove')} />
                        {results && (results.dove ? <Check size={16} className="absolute -right-6 top-1 text-green-600"/> : <X size={16} className="absolute -right-6 top-1 text-red-600"/>)}
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase text-slate-400">What to do:</label>
                    <div className="relative">
                        <input type="text" value={answers.cosa} onChange={(e) => handleChange('cosa', e.target.value)} className={getInputClass('cosa')} />
                        {results && (results.cosa ? <Check size={16} className="absolute -right-6 top-1 text-green-600"/> : <X size={16} className="absolute -right-6 top-1 text-red-600"/>)}
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase text-slate-400">How much it costs:</label>
                    <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                            <input type="text" value={answers.quanto1} onChange={(e) => handleChange('quanto1', e.target.value)} className={getInputClass('quanto1')} placeholder="Price" />
                            {results && (results.quanto1 ? <Check size={16} className="absolute -right-6 top-1 text-green-600"/> : <X size={16} className="absolute -right-6 top-1 text-red-600"/>)}
                        </div>
                        <span className="text-slate-400">/</span>
                        <div className="relative flex-1">
                            <input type="text" value={answers.quanto2} onChange={(e) => handleChange('quanto2', e.target.value)} className={getInputClass('quanto2')} placeholder="Option" />
                            {results && (results.quanto2 ? <Check size={16} className="absolute -right-6 top-1 text-green-600"/> : <X size={16} className="absolute -right-6 top-1 text-red-600"/>)}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase text-slate-400">What time it starts:</label>
                    <div className="relative">
                        <input type="text" value={answers.ora} onChange={(e) => handleChange('ora', e.target.value)} className={getInputClass('ora')} />
                        {results && (results.ora ? <Check size={16} className="absolute -right-6 top-1 text-green-600"/> : <X size={16} className="absolute -right-6 top-1 text-red-600"/>)}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <button 
                    onClick={checkAll}
                    className="px-8 py-2.5 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700 transition-all shadow-md font-bold"
                >
                    Check Card
                </button>
            </div>
        </div>
    );
};

// New Component for Multi-Gap Paragraphs
const CheckableParagraph = () => {
    const [answers, setAnswers] = useState({
        gap1: '',
        gap2: '',
        gap3: '',
        gap4: ''
    });
    const [results, setResults] = useState<{ [key: string]: boolean } | null>(null);

    const correctAnswers = {
        gap1: ['da piccolo', 'da piccola', 'da piccolo/a', 'da piccolo/a/*'],
        gap2: ['perché', 'perche'],
        gap3: ['per esempio'],
        gap4: ['secondo me']
    };

    const handleChange = (key: string, value: string) => {
        setAnswers(prev => ({ ...prev, [key]: value }));
        if (results) setResults(null);
    };

    const checkAll = () => {
        const newResults: { [key: string]: boolean } = {};
        (Object.keys(correctAnswers) as Array<keyof typeof correctAnswers>).forEach(key => {
            const userVal = answers[key].toLowerCase().trim();
            newResults[key] = correctAnswers[key].includes(userVal);
        });
        setResults(newResults);
    };

    const getInputClass = (key: string) => {
        const baseClass = "border-b-2 bg-transparent text-center w-32 focus:outline-none mx-1 font-medium ";
        if (!results) return baseClass + "border-slate-300 focus:border-indigo-500";
        return baseClass + (results[key] ? "border-green-500 text-green-700" : "border-red-500 text-red-700");
    };

    return (
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <div className="leading-loose text-lg">
                Il posto dove sono cresciuto/a/* 
                <span className="relative inline-block">
                    <input 
                        type="text" 
                        value={answers.gap1}
                        onChange={(e) => handleChange('gap1', e.target.value)}
                        className={getInputClass('gap1')} 
                    />
                    {results && (results.gap1 ? 
                        <Check size={16} className="absolute -right-5 top-1 text-green-600"/> : 
                        <X size={16} className="absolute -right-5 top-1 text-red-600"/>
                    )}
                </span>
                era molto interessante 
                <span className="relative inline-block">
                    <input 
                        type="text" 
                        value={answers.gap2}
                        onChange={(e) => handleChange('gap2', e.target.value)}
                        className={getInputClass('gap2')} 
                    />
                    {results && (results.gap2 ? 
                        <Check size={16} className="absolute -right-5 top-1 text-green-600"/> : 
                        <X size={16} className="absolute -right-5 top-1 text-red-600"/>
                    )}
                </span>
                c'erano tantissime cose da fare e da scoprire con gli amici. 
                <span className="relative inline-block">
                    <input 
                        type="text" 
                        value={answers.gap3}
                        onChange={(e) => handleChange('gap3', e.target.value)}
                        className={getInputClass('gap3')} 
                    />
                    {results && (results.gap3 ? 
                        <Check size={16} className="absolute -right-5 top-1 text-green-600"/> : 
                        <X size={16} className="absolute -right-5 top-1 text-red-600"/>
                    )}
                </span>
                , potevo andare al parco ogni pomeriggio o in biblioteca a leggere fumetti. 
                <span className="relative inline-block">
                    <input 
                        type="text" 
                        value={answers.gap4}
                        onChange={(e) => handleChange('gap4', e.target.value)}
                        className={getInputClass('gap4')} 
                    />
                    {results && (results.gap4 ? 
                        <Check size={16} className="absolute -right-5 top-1 text-green-600"/> : 
                        <X size={16} className="absolute -right-5 top-1 text-red-600"/>
                    )}
                </span>
                quel periodo della mia vita è stato il più divertente di tutti.
            </div>
            
            <div className="mt-6">
                <button 
                    onClick={checkAll}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors shadow-sm font-bold"
                >
                    Check answers
                </button>
            </div>
        </div>
    );
};

const Lesson1Exercises = () => {
  return (
    <div className="space-y-8">
      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 1: Interests</h3>
        <h4 className="font-bold text-slate-700 mb-2 flex flex-col sm:flex-row sm:items-center gap-2">
          <span>A. Complete with the correct pronoun + interessa/interessano.</span>
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
        
        <h4 className="font-bold text-slate-700 mt-6 mb-2">B. Writing</h4>
        <p className="text-sm text-slate-600 mb-2 italic">
            Write your answers below and then upload them to the <a href="https://brightspace.cuny.edu/d2l/le/1128170/discussions/List" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-bold">Brightspace Forum</a>.
        </p>
        <p className="text-sm text-slate-600 mb-2">Write 3 sentences about yourself: 2 things that interest you, 1 thing that does not interest you.</p>
        <ExerciseItem part={{ type: 'write', question: '' }} index={7} />
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 2: Who is interested in what?</h3>
        <h4 className="font-bold text-slate-700 mb-4">A. Match the person to the correct interest (Write the letter) and insert the missing pronoun.</h4>
        
        <MatchingExercise />
      </div>

      {/* Exercise 3 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 3: “Which event interests you the most?”</h3>
        <h4 className="font-bold text-slate-700 mb-2">A. Complete with: mi / ti / gli / le / ci / vi / gli</h4>
        <ExerciseItem part={{ type: 'fill', question: 'A voi ___ interessa partecipare?', answer: 'vi' }} index={13} />
        <ExerciseItem part={{ type: 'fill', question: 'A lei ___ interessa molto la mostra.', answer: 'le' }} index={14} />
        <ExerciseItem part={{ type: 'fill', question: 'A me ___ interessano i mercatini.', answer: 'mi' }} index={15} />
        <ExerciseItem part={{ type: 'fill', question: 'A loro ___ interessa la festa storica.', answer: 'gli' }} index={16} />
        <ExerciseItem part={{ type: 'fill', question: 'A te ___ interessa l’evento X?', answer: 'ti' }} index={17} />
        <ExerciseItem part={{ type: 'fill', question: 'A noi ___ interessano gli eventi gratuiti.', answer: 'ci' }} index={18} />
        <ExerciseItem part={{ type: 'fill', question: 'A lui ___ interessa scoprire nuovi autori.', answer: 'gli' }} index={19} />

        <h4 className="font-bold text-slate-700 mt-6 mb-2">B. Writing</h4>
        <p className="text-sm text-slate-600 mb-2">Answer in 3–4 lines: Which event from the list interests you the most? Why?</p>
        <ExerciseItem part={{ type: 'write', question: '' }} index={20} />
      </div>

      {/* Exercise 4 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 4: “Smartphone activity” questions</h3>
        <h4 className="font-bold text-slate-700 mb-2">A. Complete the questions (insert the missing word)</h4>
        <ExerciseItem part={{ type: 'fill', question: '__________ è? (Quando è?)', answer: 'quando' }} index={21} />
        <ExerciseItem part={{ type: 'fill', question: 'Cosa __________ __________?', answer: 'si fa' }} index={22} />
        <ExerciseItem part={{ type: 'fill', question: 'Quanto __________?', answer: 'costa' }} index={23} />
        <ExerciseItem part={{ type: 'fill', question: 'Bisogna pagare l’__________ o è __________?', answer: 'ingresso/gratis' }} index={24} />

        <h4 className="font-bold text-slate-700 mt-6 mb-2">B. Writing</h4>
        <p className="text-sm text-slate-600 mb-2">Choose an event and write 4 questions to find out more.</p>
        <ExerciseItem part={{ type: 'write', question: '' }} index={25} />
      </div>

      {/* Exercise 5 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 5: Event information</h3>
        <h4 className="font-bold text-slate-700 mb-4">A. Read Luca's message and complete the event card.</h4>
        
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-6 italic text-indigo-900">
            "Ciao! Hai programmi per le weekend? Io vado alla <strong>Festa dei Dolci</strong>! È questo <strong>sabato</strong> <strong>in centro</strong>. 
            Inizia <strong>alle 18:00</strong> e ci sono un sacco di <strong>degustazioni</strong> buonissime. 
            L'ingresso costa <strong>10€</strong>, ma per i bambini è <strong>gratis</strong>."
        </div>

        <CheckableEventCard />

        <h4 className="font-bold text-slate-700 mt-6 mb-2">B. Writing</h4>
        <p className="text-sm text-slate-600 mb-2">Write 5 sentences to invite a classmate to the event using the info from the card.</p>
        <ExerciseItem part={{ type: 'write', question: '' }} index={26} />
      </div>

      {/* Exercise 6 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 6: Dialogue in pairs</h3>
        <h4 className="font-bold text-slate-700 mb-2">A. Complete the dialogue</h4>
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

        <h4 className="font-bold text-slate-700 mt-6 mb-2">B. Writing</h4>
        <p className="text-sm text-slate-600 mb-2">Write a new dialogue (8–10 lines) with a different event.</p>
        <ExerciseItem part={{ type: 'write', question: '' }} index={27} />
      </div>

      {/* Exercise 7 */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">PARTE 7: Final mini-paragraph</h3>
        <h4 className="font-bold text-slate-700 mb-2">A. Complete with: perché / da piccolo/a/* / secondo me / per esempio</h4>
        
        <CheckableParagraph />

        <h4 className="font-bold text-slate-700 mt-6 mb-2">B. Writing</h4>
        <p className="text-sm text-slate-600 mb-2 italic">
            Write your paragraph below and then upload it to the <a href="https://brightspace.cuny.edu/d2l/le/1128170/discussions/List" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-bold">Brightspace Forum</a>.
        </p>
        <p className="text-sm text-slate-600 mb-2">Write a paragraph of 8–10 lines: “The place where I grew up from a child's point of view”</p>
        <ExerciseItem part={{ type: 'write', question: '' }} index={28} />
      </div>
    </div>
  );
};

export default Lesson1Exercises;