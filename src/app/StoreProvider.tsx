'use client';
import { useRef, FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ConfigI } from '@/types/store.types';
import { makeStore, AppStore } from '@/store/store';
import { storeInitialized } from '@/store/slices/quiz-slice';

interface StoreProviderProps {
  children: ReactNode;
  config: ConfigI;
}

declare global {
  interface Window {
    _config: ConfigI;
  }
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, config }) => {
  const storeRef = useRef<AppStore>(null);
  if (!storeRef.current) {
    if (typeof window !== 'undefined') {
      window._config = config;
    }
    storeRef.current = makeStore();
    storeRef.current.dispatch(storeInitialized(config));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
