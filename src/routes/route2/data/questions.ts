import { Question } from '../types/question';

export const questions: Question[] = [
  {
    id: 'q1',
    question:
      'What would you do if you had unlimited resources but only 24 hours to make an impact?',
    category: 'What Question',
    elaboration:
      'Consider how you would prioritize and what kind of impact matters most to you',
    traits: ['Decision Making', 'Vision', 'Values'],
  },
  {
    id: 'q2',
    question:
      "Why do you think some people resist change even when it's beneficial?",
    category: 'Why Question',
    elaboration:
      'Think about human psychology and personal experiences with change',
    traits: ['Empathy', 'Analysis', 'Understanding'],
  },
  {
    id: 'q3',
    question:
      'How would you redesign education if you could start from scratch?',
    category: 'How Question',
    elaboration: 'Consider both traditional values and future needs',
    traits: ['Innovation', 'Vision', 'Problem Solving'],
  },
  {
    id: 'q4',
    question:
      'What if you could instantly master any skill - which would you choose and why?',
    category: 'What Question',
    elaboration: 'Think about personal growth and long-term impact',
    traits: ['Self-awareness', 'Ambition', 'Purpose'],
  },
  {
    id: 'q5',
    question:
      'How would you build trust in a team that has experienced conflict?',
    category: 'How Question',
    elaboration: 'Consider leadership principles and conflict resolution',
    traits: ['Leadership', 'Communication', 'Emotional Intelligence'],
  },
];
