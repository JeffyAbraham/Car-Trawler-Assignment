import "./toggle-display.css";
import { useState } from "react";

export default function Toggle({ type, children }) {
  const [status, setDisplay] = useState(true);

  return <div className="form-container">{children}</div>;
}
