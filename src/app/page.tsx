import { FC } from 'react';
import { StartEndPageLayout } from '@/layouts/StartEndPageLayout';
import { NavButton } from '@/components/NavButton/NavButton';
import styles from './home-page.module.scss';

export const dynamic = 'force-dynamic';

const StartPage: FC = () => {
  return (
    <StartEndPageLayout className={styles.backgroundGradient}>
      <h1 className={styles.heading}>Who wants to be a millionaire?</h1>
      <NavButton path="/quiz">Start</NavButton>
    </StartEndPageLayout>
  );
};

export default StartPage;
