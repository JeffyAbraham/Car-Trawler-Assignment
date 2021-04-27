//toggle between 2 button on click
//if false render the inverse immae
import "./dropdown-button.css";
import { useState } from "react";
import UpArrow from "../../assests/up-arrow.png";
import DownArrow from "../../assests/down-arrow.png";
export default function DropDownButton({ getDropdownState }) {
  const [active, setToggle] = useState(true);

  //first check the type of the button
  //then check the status of the button

  return (
    <div
      className="dropdown-button"
      onClick={() => {
        setToggle(!active);
        getDropdownState(active);
      }}
    >
      {active ? (
        <span>
          <img src={UpArrow} width="24px" alt="s" />
        </span>
      ) : (
        <span>
          <img src={DownArrow} width="24px" alt="p" />
        </span>
      )}
    </div>
  );
}
