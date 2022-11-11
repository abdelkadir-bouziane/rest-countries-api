import { createContext, useReducer } from "react";
import themeReducer from "./ThemeReducer";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const initialState = {
    theme: "dark",
  };

  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
