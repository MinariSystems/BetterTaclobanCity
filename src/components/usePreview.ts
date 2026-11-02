import { createContext, useContext } from 'react';
export type Info = 'about' | 'emergency' | 'credits';
export const PreviewContext = createContext<{ openInfo: (info: Info) => void }>(
  { openInfo: () => {} }
);
export const usePreview = () => useContext(PreviewContext);
