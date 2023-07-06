// NPM PACKAGES
import React, { createContext } from 'react';
// HOOKS
import { useJune } from '../hooks/useJune.js';
// CONSTANTS
import { JUNE } from '../share/constants';

export const JuneContext = createContext(null);

export function JuneProvider({ children }) {
  const analytics = useJune(JUNE.writeKey);
  return <JuneContext.Provider value={{analytics}}>{children}</JuneContext.Provider>;
}