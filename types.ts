
export interface FormData {
  question1: string;
  question2: string;
  question3: string;
}

export enum AppState {
  HERO = 'HERO',
  FORM = 'FORM',
  THANK_YOU = 'THANK_YOU'
}

export interface QuestionConfig {
  id: keyof FormData;
  label: string;
  sublabel?: string;
  placeholder: string;
  minChars: number;
  maxChars: number;
}
