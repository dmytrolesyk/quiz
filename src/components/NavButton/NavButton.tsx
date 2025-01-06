'use client';

import { FC, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button/Button';

interface NavButtonProps {
  path: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavButton: FC<NavButtonProps> = ({ path, children, className, onClick }) => {
  const router = useRouter();
  return (
    <Button
      className={className}
      onClick={() => {
        if (onClick) {
          onClick();
        }
        router.push(path);
      }}
    >
      {children}
    </Button>
  );
};
