import { createContext, useReducer, useEffect } from "react";
import countriesReducer from "./CountriesReducer";
import { searchCountries } from "./CountriesActions";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const initialState = {
    textInput: "",
    filterValue: "",
    countries: [],
    country: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(countriesReducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const searchACountry = async () => {
      const result = await searchCountries(state.textInput);
      dispatch({
        type: "GET_COUNTRIES",
        payload: result,
      });
    };

    searchACountry();
  }, [state.textInput]);

  return (
    <CountriesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
