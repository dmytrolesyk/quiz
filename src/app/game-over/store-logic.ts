import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { storeInitialized } from '@/store/slices/quiz-slice';
import { ConfigI } from '@/types/store.types';

export const useGameOverPageStoreLogic = () => {
  const dispatch = useAppDispatch();
  const resetStore = (config: ConfigI) => dispatch(storeInitialized(config));

  const currentQuestionId = useAppSelector(state => state.quiz.currentQuestion);

  const prizeWon = useAppSelector(state => {
    const currentQuestion = state.quiz.questions.find(q => q.id === currentQuestionId);
    return currentQuestion?.isAnsweredCorrectly ? currentQuestion.prize : 0;
  });

  return {
    resetStore,
    prizeWon,
  };
};
