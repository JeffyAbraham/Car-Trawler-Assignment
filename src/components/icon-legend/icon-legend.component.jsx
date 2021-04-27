import "./icon-legend.style.css";
import PropTypes from "prop-types";
export default function Legend({ title, icon, hoverMessage }) {
  return (
    <div className="legend-flexbox">
      <div>{title}</div>
      <div style={{ marginTop: "5px"  }}>
        <img src={icon} width="18px" height="18px" alt="icon" />
      </div>
    </div>
  );
}
Legend.PropType = {
  title: PropTypes.string,
  icon: PropTypes.object,
};
