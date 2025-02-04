'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface TitleNavContextType {
  isTitleInNav: boolean;
  setTitleInNav: (val: boolean) => void;
}

const TitleNavContext = createContext<TitleNavContextType | undefined>(undefined);

export const TitleNavProvider = ({ children }: { children: ReactNode }) => {
  const [isTitleInNav, setTitleInNav] = useState(false);

  return (
    <TitleNavContext.Provider value={{ isTitleInNav, setTitleInNav }}>
      {children}
    </TitleNavContext.Provider>
  );
};

export const useTitleNav = (): TitleNavContextType => {
  const context = useContext(TitleNavContext);
  if (!context) {
    throw new Error('useTitleNav must be used within a TitleNavProvider');
  }
  return context;
};
