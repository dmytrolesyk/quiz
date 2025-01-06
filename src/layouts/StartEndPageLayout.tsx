import { FC, ReactNode } from 'react';
import cn from 'classnames';
import { Image } from '@/components/Image/Image';
import styles from './start-end-page-layout.module.scss';

interface StartEndPageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const StartEndPageLayout: FC<StartEndPageLayoutProps> = ({ children, className }) => {
  return (
    <main className={cn(styles.wrapper, className)}>
      <div className={styles.flexContainer}>
        <Image
          mobileHeight={192}
          mobileWidth={288}
          desktopHeight={367}
          desktopWidth={624}
          src="/thumb.svg"
          alt="picture of thumb"
        />
        <div className={styles.infoWrapper}>{children}</div>
      </div>
    </main>
  );
};
