import { PrizeLabel } from '@/components/PrizeLabel/PrizeLabel';
import styles from './prize-list.module.scss';
import { useAppSelector } from '@/store/hooks';

export const PrizeList = () => {
  const questions = useAppSelector(state => state.quiz.questions);
  const currentQuestionId = useAppSelector(state => state.quiz.currentQuestion);
  return (
    <div className={styles.prizeList}>
      <ul>
        {questions.toReversed().map(({ id, prize, isAnsweredCorrectly }, i) => {
          const status =
            id === currentQuestionId ? 'current' : isAnsweredCorrectly ? 'completed' : 'inactive';
          return (
            <li key={i}>
              <PrizeLabel status={status} prize={prize} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
