/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import CounterReducer, { CounterInitialState } from "./counter-reducer";

export const CounterContext = createContext();

export function CounterProvider(props) {
  const [state, dispatch] = useReducer(CounterReducer, CounterInitialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
}
