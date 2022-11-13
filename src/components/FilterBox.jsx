import { useContext, useState } from "react";
import { MdOutlineKeyboardArrowDown as ArrowIcon } from "react-icons/md";
import CountriesContext from "../context/countries/CountriesContext";
import OutsideAlerter from "./OutsideAlerter";

function FilterBox({ options }) {
  const { filterValue, dispatch } = useContext(CountriesContext);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleSelectOption = (e) => {
    const content =
      e.target.textContent === "No filter" ? "" : e.target.textContent;
    dispatch({
      type: "SET_FILTER_VALUE",
      payload: content,
    });
    setOptionsVisible(false);
  };

  return (
    <div className="filter-box">
      <OutsideAlerter hideListOption={() => setOptionsVisible(false)}>
        <div
          className="input-div"
          onClick={() => {
            setOptionsVisible(!optionsVisible);
          }}
        >
          <input
            type="text"
            value={filterValue}
            placeholder="Filter by Region..."
            disabled
          />
          <ArrowIcon
            className="arrow-icon"
            style={
              optionsVisible && {
                transform: "rotate(180deg)",
              }
            }
          />
        </div>
        {optionsVisible && (
          <ul className="list-options">
            <li onClick={(e) => handleSelectOption(e)}>No filter</li>
            {options.map((option, index) => (
              <li key={index} onClick={(e) => handleSelectOption(e)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </OutsideAlerter>
    </div>
  );
}

export default FilterBox;
