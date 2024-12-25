import { Challenge } from '../types/challenge';

export const challenges: Challenge[] = [
  {
    id: 'morning-routine',
    title: 'Morning Routine Challenge',
    category: 'Wellness',
    description: 'Start your day with purpose: Exercise, meditate, and plan your day before 8 AM.',
    traits: ['Discipline', 'Focus', 'Well-being'],
    image: '/images/1.png'
  },
  {
    id: 'learning-sprint',
    title: 'Learning Sprint Challenge',
    category: 'Growth',
    description: 'Learn a new skill and document your progress over 3 days.',
    traits: ['Curiosity', 'Persistence', 'Growth Mindset'],
    image: '/images/2.png'
  }
];