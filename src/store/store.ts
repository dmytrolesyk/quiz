import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './slices/quiz-slice';

export const makeStore = () =>
  configureStore({
    reducer: {
      quiz: quizReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
