import { createContext, useContext, useState, ReactNode } from 'react';

interface EvaluationContextType {
  evaluations: string[];
  updateEvaluation: (index: number, answer: string) => void;
}

const EvaluationContext = createContext<EvaluationContextType | undefined>(undefined);

export function EvaluationProvider({ children }: { children: ReactNode }) {
  const [evaluations, setEvaluations] = useState<string[]>(['', '']);

  const updateEvaluation = (index: number, answer: string) => {
    setEvaluations(prev => {
      const newAnswers = [...prev];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  return (
    <EvaluationContext.Provider value={{ evaluations, updateEvaluation }}>
      {children}
    </EvaluationContext.Provider>
  );
}

export function useEvaluation() {
  const context = useContext(EvaluationContext);
  if (!context) {
    throw new Error('useEvaluation must be used within an EvaluationProvider');
  }
  return context;
}