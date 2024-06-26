import React, { createContext, useContext, useState, ReactNode } from 'react';

type Box = {
  id: number;
  name: string;
  color: string;
};

type BoxContextType = {
  boxs: Box[];
  setBoxs: React.Dispatch<React.SetStateAction<Box[]>>;
};

const initialBoxs: Box[] = [
  { id: 1, name: 'first', color: 'white' },
  { id: 2, name: 'second', color: 'white' },
  { id: 3, name: 'third', color: 'white' },
  { id: 4, name: 'fourth', color: 'white' },
  { id: 5, name: 'fifth', color: 'white' },
  { id: 6, name: 'sixth', color: 'white' },
];

const BoxContext = createContext<BoxContextType | undefined>(undefined);

const BoxProvider = ({ children }: { children: ReactNode }) => {
  const [boxs, setBoxs] = useState<Box[]>(initialBoxs);
  return (
    <BoxContext.Provider value={{ boxs, setBoxs }}>
      {children}
    </BoxContext.Provider>
  );
};

export const useBoxContext = (): BoxContextType => {
  const context = useContext(BoxContext);
  if (!context) {
    throw new Error('useBoxContext must be used within a BoxProvider');
  }
  return context;
};

export default BoxProvider;