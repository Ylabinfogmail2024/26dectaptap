import { createContext, useContext, useState, ReactNode } from 'react';

interface QuestionsContextType {
  answers: string[];
  updateAnswer: (questionIndex: number, answer: string) => void;
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);

export function QuestionsProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<string[]>(['', '']);

  const updateAnswer = (questionIndex: number, answer: string) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = answer;
      return newAnswers;
    });
  };

  return (
    <QuestionsContext.Provider value={{ answers, updateAnswer }}>
      {children}
    </QuestionsContext.Provider>
  );
}

export function useQuestions() {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error('useQuestions must be used within a QuestionsProvider');
  }
  return context;
}