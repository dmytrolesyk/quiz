import { v4 as uuidv4 } from 'uuid';
import { ConfigI, QuizStateI } from '@/schemas/store.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: QuizStateI = {
  currentQuestion: null,
  questions: [],
};

const editorSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    storeInitialized(state, action: PayloadAction<ConfigI>) {
      state.questions = action.payload.questions.map(({ question, prize, answers }) => ({
        id: uuidv4(),
        question,
        prize,
        isAnsweredCorrectly: undefined,
        answers: answers.map(({ answer, correct }, i) => ({
          id: String.fromCharCode(65 + i),
          answer,
          correct,
        })),
      }));
      state.currentQuestion = state.questions[0].id;
    },
    questionAnswered(
      state,
      action: PayloadAction<{ questionId: string; isAnsweredCorrectly: boolean }>,
    ) {
      const { questionId, isAnsweredCorrectly } = action.payload;
      const question = state.questions.find(question => questionId === question.id);
      if (question) {
        question.isAnsweredCorrectly = isAnsweredCorrectly;
      }
    },
    currentQuestionUpdated(state) {
      const currentQuestionIndex = state.questions.findIndex(
        ({ id }) => id === state.currentQuestion,
      );
      if (currentQuestionIndex !== -1) {
        state.currentQuestion = state.questions[currentQuestionIndex + 1].id;
      }
    },
  },
});

export const { storeInitialized, questionAnswered, currentQuestionUpdated } = editorSlice.actions;

export default editorSlice.reducer;
