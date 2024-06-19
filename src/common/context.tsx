"use client";

import { createContext, useContext, useReducer } from "react";
import { AppActionTypes, appReducer, initialState } from "./state";

export interface IAppContext {
  brand: string[];
  model: string[];
  tarif: string[];
  page: number;
  pages: number;
  setValue: (value: { name: string; value: any }) => void;
}

const Context = createContext<IAppContext>({
  ...initialState,
  setValue: (value) => {},
});

export function AppProvider({ children }: { children: any }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const contextValue: IAppContext = {
    ...state,
    setValue: (value) =>
      dispatch({ type: AppActionTypes.SET_VALUE, payload: value }),
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export function useAppContext() {
  return useContext<IAppContext>(Context);
}
