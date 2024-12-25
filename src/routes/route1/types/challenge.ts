export interface Challenge {
  id: string;
  title: string;
  category: string;
  description: string;
  traits: string[];
  image: string;
}

export interface ChallengeSubmission {
  challengeId: string;
  whatIDid: string;
  howIFeel: string;
  whatILearned: string;
  mediaFile?: File;
}