import "./toggle-display.css";
import { useState } from "react";
import DropDownButton from "../../components/dropdown-button/dropdown-button";

export default function Toggle({ type, children,title }) {
  const [status, setDisplay] = useState(false);

  const getDropdownStatus = function (status) {
    setDisplay(status);
   
  };

  return (
    <div>
      <div className="form-container">
        <div>{title}</div>
        <div>
          <DropDownButton getDropdownState={getDropdownStatus} />
        </div>
      </div>
      <div className={status ? "show-content" : "hide-content"}>{children}</div>
    </div>
  );
}
