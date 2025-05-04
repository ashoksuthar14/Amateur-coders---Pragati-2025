
export type LearningStyle = 'visual' | 'auditory' | 'textual' | 'practical';

export interface Question {
  id: string;
  text: string;
  options: {
    text: string;
    type: LearningStyle;
  }[];
}

export interface QuizResult {
  primary: LearningStyle;
  scores: Record<LearningStyle, number>;
}
