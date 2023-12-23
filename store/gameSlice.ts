/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGameState, IQuestion } from '@/types';

const initialState: IGameState = {
  currentQuestionIndex: 0,
  questions: [],
  gameOver: false,
  score: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setQuestions: (
      state: IGameState,
      action: PayloadAction<IQuestion[]>,
    ) => {
      state.questions = action.payload;
    },
    goToTheNextQuestion: (state: IGameState) => {
      state.score =
        state.questions[state.currentQuestionIndex].reward;
      state.currentQuestionIndex += 1;
      if (state.currentQuestionIndex > state.questions.length)
        state.gameOver = true;
    },
    resetGame: (state: IGameState) => {
      state.currentQuestionIndex = 0;
      state.gameOver = false;
      state.score = 0;
    },
    endGame: (state: IGameState) => {
      state.gameOver = true;
    },
  },
});

export const {
  setQuestions,
  goToTheNextQuestion,
  resetGame,
  endGame,
} = gameSlice.actions;

export default gameSlice.reducer;
