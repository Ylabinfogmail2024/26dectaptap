import { createContext, useContext, useState, ReactNode } from 'react';

interface QuestionEvaluationContextType {
  evaluations: string[];
  updateEvaluation: (index: number, answer: string) => void;
}

const QuestionEvaluationContext = createContext<QuestionEvaluationContextType | undefined>(undefined);

export function QuestionEvaluationProvider({ children }: { children: ReactNode }) {
  const [evaluations, setEvaluations] = useState<string[]>(['', '']);

  const updateEvaluation = (index: number, answer: string) => {
    setEvaluations(prev => {
      const newAnswers = [...prev];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  return (
    <QuestionEvaluationContext.Provider value={{ evaluations, updateEvaluation }}>
      {children}
    </QuestionEvaluationContext.Provider>
  );
}

export function useQuestionEvaluation() {
  const context = useContext(QuestionEvaluationContext);
  if (!context) {
    throw new Error('useQuestionEvaluation must be used within a QuestionEvaluationProvider');
  }
  return context;
}