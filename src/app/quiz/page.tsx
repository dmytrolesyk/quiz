'use client';

import { useState } from 'react';
import cn from 'classnames';
import { SVGIcon } from '@/components/SVGIcon/SVGIcon';
import { QuestionSection } from './components/Questions/QuestionSection';
import { PrizeList } from './components/PrizeList/PrizeList';
import styles from './quiz.module.scss';

export default function Quiz() {
  const [prizeSectionVisible, setPrizeSectionVisible] = useState(false);
  return (
    <main className={styles.quizPage}>
      <div className={styles.questionSection}>
        <QuestionSection />
        <SVGIcon name="menu" className={styles.icon} onClick={() => setPrizeSectionVisible(true)} />
      </div>
      <div className={cn(styles.prizeSection, { [styles.visible]: prizeSectionVisible })}>
        <PrizeList />
        <SVGIcon
          name="close"
          className={styles.icon}
          onClick={() => setPrizeSectionVisible(false)}
        />
      </div>
    </main>
  );
}
