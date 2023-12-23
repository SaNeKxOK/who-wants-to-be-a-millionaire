export interface IOption {
  id: string;
  letter: string;
  text: string;
  isCorrect: boolean;
  questionId: string;
}

export interface IQuestion {
  id: string;
  question: string;
  options: IOption[];
  reward: number;
}

export interface IGameState {
  currentQuestionIndex: number;
  questions: IQuestion[];
  gameOver: boolean;
  score: number;
}

export enum ScreenType {
  MOBILE,
  TABLET,
  DESKTOP,
  DESKTOP_PLUS,
}

export interface IScreenSize {
  windowSize: number;
}

export interface IUIState {
  windowSize: number;
  screen: ScreenType;
}
