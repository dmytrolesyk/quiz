import { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}
export const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  console.log('test');
  return (
    <button className={cn(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
