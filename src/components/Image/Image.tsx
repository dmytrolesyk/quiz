'use client';

import { FC } from 'react';
import NextImage from 'next/image';
import { useWindowSize } from '@/hooks/use-window-size';

interface ImageProps {
  src: string;
  alt: string;
  mobileWidth: number;
  desktopWidth: number;
  mobileHeight: number;
  desktopHeight: number;
}
export const Image: FC<ImageProps> = ({
  src,
  alt,
  mobileWidth,
  desktopWidth,
  mobileHeight,
  desktopHeight,
}) => {
  const { isDesktop } = useWindowSize();
  return (
    <NextImage
      src={src}
      alt={alt}
      width={isDesktop ? desktopWidth : mobileWidth}
      height={isDesktop ? desktopHeight : mobileHeight}
    />
  );
};
