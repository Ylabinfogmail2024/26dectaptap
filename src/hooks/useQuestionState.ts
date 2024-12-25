import { useState } from 'react';

export interface QuestionState {
  answers: string[];
  currentQuestion: number;
}

export function useQuestionState(initialAnswers: string[] = ['', '']) {
  const [state, setState] = useState<QuestionState>({
    answers: initialAnswers,
    currentQuestion: 0
  });

  const updateAnswer = (answer: string) => {
    setState(prev => ({
      ...prev,
      answers: prev.answers.map((a, i) => 
        i === prev.currentQuestion ? answer : a
      )
    }));
  };

  const nextQuestion = () => {
    setState(prev => ({
      ...prev,
      currentQuestion: prev.currentQuestion + 1
    }));
  };

  const previousQuestion = () => {
    setState(prev => ({
      ...prev,
      currentQuestion: Math.max(0, prev.currentQuestion - 1)
    }));
  };

  return {
    ...state,
    updateAnswer,
    nextQuestion,
    previousQuestion
  };
}