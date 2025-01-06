import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './questions.module.scss';
import { OptionButton } from '@/components/OptionButton/OptionButton';
import { useQuestionSectionStoreLogic } from './store-logic';

export const QuestionSection = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Array<string>>([]);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const router = useRouter();

  const { currentQuestion, isLastQuestion, correctAnswers, answerQuestion, updateCurrentQuestion } =
    useQuestionSectionStoreLogic();

  const onSelectAnswer = (answerId: string) => {
    const newSelectedAnswers = selectedAnswers.includes(answerId)
      ? selectedAnswers.filter(id => id !== answerId)
      : [...selectedAnswers, answerId];
    setSelectedAnswers(newSelectedAnswers);
  };

  useEffect(() => {
    if (currentQuestion && selectedAnswers.length === correctAnswers?.length) {
      setButtonsDisabled(true);
      const isAnsweredCorrectly = !selectedAnswers.filter(x => !correctAnswers.includes(x)).length;
      answerQuestion({ questionId: currentQuestion.id, isAnsweredCorrectly });
      if (isAnsweredCorrectly) {
        if (isLastQuestion) {
          setTimeout(() => {
            router.push('/game-over');
          }, 1000);
        } else {
          setTimeout(() => {
            setSelectedAnswers([]);
            updateCurrentQuestion();
            setButtonsDisabled(false);
          }, 1000);
        }
      } else {
        setTimeout(() => {
          router.push('/game-over');
        }, 1000);
      }
    }
  }, [selectedAnswers]);

  const getOptionButtonStateProp = (answerId: string) => {
    if (!selectedAnswers.includes(answerId)) {
      return 'inactive';
    }
    if (typeof currentQuestion?.isAnsweredCorrectly === 'boolean') {
      return currentQuestion.isAnsweredCorrectly ? 'correct' : 'wrong';
    }
    return 'selected';
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className={styles.questionSection}>
      <h2 className={styles.question}>{currentQuestion.question}</h2>
      <div className={styles.answers}>
        <ul>
          {currentQuestion.answers.map(({ id, answer }) => (
            <li key={id}>
              <OptionButton
                disabled={buttonsDisabled}
                state={getOptionButtonStateProp(id)}
                id={id}
                text={answer}
                onClick={onSelectAnswer}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
