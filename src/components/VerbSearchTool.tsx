import { useState } from 'react';
import { Search } from 'lucide-react';
import { conjugateVerb, Tense, PRONOUNS, SUBJ_PRONOUNS } from '../utils/conjugator';

interface VerbSearchToolProps {
  tense: Tense;
}

const VerbSearchTool = ({ tense }: VerbSearchToolProps) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string[] | null>(null);
  const [searchedVerb, setSearchVerb] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    
    const conjugation = conjugateVerb(query, tense);
    setResult(conjugation);
    setSearchVerb(query);
  };

  const pronouns = tense.startsWith('congiuntivo') ? SUBJ_PRONOUNS : PRONOUNS;

  return (
    <div className="my-8 max-w-2xl mx-auto bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca un verbo (es: mangiare, dormire...)"
            className="w-full pl-4 pr-10 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        </div>
        <button 
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Coniuga
        </button>
      </form>

      {result && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          <h4 className="text-xl font-bold text-slate-800 mb-4 text-center border-b pb-2">
            {searchedVerb}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            {result.map((verbForm, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                <span className="text-slate-400 font-medium w-24 text-sm">{pronouns[idx]}</span>
                <span className="text-indigo-700 font-bold text-lg text-right flex-1">{verbForm}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VerbSearchTool;