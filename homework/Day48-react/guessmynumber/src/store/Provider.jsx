//Chứa các state của store
// - context
// - useReducer
import Proptypes from "prop-types";
import { useReducer } from "react";
import { createContext } from "react";
import { initialState, rootReducer } from "./rootReducer";
export const ProviderContext = createContext();
export default function Provider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
}

Provider.propTypes = {
  children: Proptypes.node,
};
