import { FC } from 'react';
import dynamic from 'next/dynamic';
import cn from 'classnames';
import styles from './svg-icon.module.scss';

const CloseIcon = dynamic(() => import('./icons/close').then(m => m.CloseIcon));
const MenuIcon = dynamic(() => import('./icons/menu').then(m => m.MenuIcon));

interface SVGIconProps {
  name: 'close' | 'menu';
  fill?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const iconsMap = {
  close: CloseIcon,
  menu: MenuIcon,
};

export const SVGIcon: FC<SVGIconProps> = ({
  name,
  fill = '#1C1C21',
  size = 24,
  className,
  onClick,
}) => {
  const Icon = iconsMap[name];
  return (
    <svg
      className={cn(styles.svgIcon, className)}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      onClick={onClick}
    >
      <Icon fill={fill} />
    </svg>
  );
};
