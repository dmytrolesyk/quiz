'use client';

import { FC } from 'react';
import { StartEndPageLayout } from '@/layouts/StartEndPageLayout';
import { NavButton } from '@/components/NavButton/NavButton';
import { formatCurrency } from '@/utils/format';
import { useGameOverPageStoreLogic } from './store-logic';
import styles from './game-over-page.module.scss';

const GameOverPage: FC = () => {
  const { resetStore, prizeWon } = useGameOverPageStoreLogic();
  return (
    <StartEndPageLayout>
      <div className={styles.info}>
        <h2 className={styles.totalScore}>Total score:</h2>
        <h1 className={styles.heading}>{formatCurrency(prizeWon)} earned</h1>
      </div>
      <NavButton
        onClick={() => {
          const config = window._config;
          resetStore(config);
        }}
        path="/quiz"
      >
        Try again
      </NavButton>
    </StartEndPageLayout>
  );
};

export default GameOverPage;
