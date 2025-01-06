import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { questionAnswered, currentQuestionUpdated } from '@/store/slices/quiz-slice';

export const useQuestionSectionStoreLogic = () => {
  const dispatch = useAppDispatch();
  const currentQuestionId = useAppSelector(state => state.quiz.currentQuestion);
  const [currentQuestion, isLastQuestion] = useAppSelector(state => {
    const questions = state.quiz.questions;
    const currentQuestionIdx = questions.findIndex(({ id }) => id === currentQuestionId);
    const currentQuestion = questions[currentQuestionIdx];
    const isLastQuestion = currentQuestionIdx === questions.length - 1;
    return [currentQuestion, isLastQuestion];
  });

  const correctAnswers = currentQuestion?.answers
    .filter(({ correct }) => correct)
    .map(({ id }) => id);

  const answerQuestion = ({
    questionId,
    isAnsweredCorrectly,
  }: {
    questionId: string;
    isAnsweredCorrectly: boolean;
  }) => dispatch(questionAnswered({ questionId, isAnsweredCorrectly }));

  const updateCurrentQuestion = () => dispatch(currentQuestionUpdated());

  return {
    currentQuestion,
    isLastQuestion,
    correctAnswers,
    answerQuestion,
    updateCurrentQuestion,
  };
};
