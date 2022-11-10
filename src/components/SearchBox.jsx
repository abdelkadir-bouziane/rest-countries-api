import { CgClose } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import CountriesContext from "../context/countries/CountriesContext";

function SearchBox() {
  const { textInput, dispatch } = useContext(CountriesContext);

  return (
    <div className="search-box">
      <AiOutlineSearch className="search-icon" />
      <input
        type="text"
        value={textInput}
        placeholder="Search for a country..."
        onChange={(e) => {
          const fullText = e.target.value;
          const trimmedText = e.target.value.trim();
          if (trimmedText === "") {
            e.target.value = "";
          }
          if (fullText.length <= trimmedText.length + 1) {
            dispatch({
              type: "SET_TEXT_INPUT",
              payload: e.target.value,
            });
          }
        }}
      />
      {textInput !== "" && (
        <button
          onClick={() => {
            dispatch({
              type: "SET_TEXT_INPUT",
              payload: "",
            });
          }}
        >
          <CgClose className="cancel-icon" />
        </button>
      )}
    </div>
  );
}

export default SearchBox;
