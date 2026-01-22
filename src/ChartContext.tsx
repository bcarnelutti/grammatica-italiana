import { createContext, useContext, useState, type ReactNode } from 'react';

export type ViewState = 
  | 'articles'
  | 'verbs_menu'
  | 'verbs_present'
  | 'verbs_passato_prossimo'
  | 'verbs_imperfetto'
  | 'verbs_futuro'
  | 'verbs_condizionale_presente'
  | 'verbs_congiuntivo_presente'
  | 'verbs_congiuntivo_passato'
  | 'verbs_reflexive'
  | 'prepositions'
  | 'vocabulary_menu' 
  | 'vocab_clothing' | 'vocab_health' | 'vocab_travel' | 'vocab_education' | 'vocab_body' | 'vocab_nature' | 'vocab_celebrations' | 'vocab_sports'
  | 'exercises';

interface ChartContextType {
  view: ViewState;
  setView: React.Dispatch<React.SetStateAction<ViewState>>;
}

const ChartContext = createContext<ChartContextType | null>(null);

export const ChartProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<ViewState>('articles');

  return (
    <ChartContext.Provider value={{ view, setView }}>
      {children}
    </ChartContext.Provider>
  );
};

export const useChartContext = () => {
  const context = useContext(ChartContext);
  if (!context) throw new Error("useChartContext must be used within a ChartProvider");
  return context;
};
