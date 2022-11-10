const countriesReducer = (state, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case "GET_COUNTRY_INFOS":
      return {
        ...state,
        country: action.payload,
        loading: false,
      };
    case "SET_TEXT_INPUT":
      return {
        ...state,
        textInput: action.payload,
      };
    case "SET_FILTER_VALUE":
      return {
        ...state,
        filterValue: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default countriesReducer;
