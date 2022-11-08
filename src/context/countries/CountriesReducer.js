const countriesReducer = (state, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "SET_TEXT_INPUT":
      return {
        ...state,
        textInput: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
