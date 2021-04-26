import "./car-container.style.css";
import PassengerIcon from "../../assests/man-user.png";
import DoorIcon from "../../assests/car-door.png";
import BreifCase from "../../assests/briefcase.png";
import Snowflake from "../../assests/snowflake.png";
import Legend from "../../components/icon-legend/icon-legend.component";
import { useHistory } from "react-router-dom";
export default function CarContainer({ ...otherProps }) {
  const { Vehicle, TotalCharge, _id } = otherProps;
  const { VehMakeModel } = Vehicle;
  let history = useHistory();
  const handleClick = function handleClick(id) {
    history.push(`/cars/${_id}`);
  };
  return (
    <div className="car-cotainer-flex" onClick={() => handleClick(_id)}>
      <div style={{ padding: "20px" }}>
        <img src={Vehicle["PictureURL"]} alt="pics" width="200px" />
      </div>
      <div>
        <div style={{ fontSize: "26px", fontWeight: "600" }}>
          {VehMakeModel["@Name"].replace("or similar", "")}
        </div>
        <div style={{ display: "flex" }}>
          <Legend title={Vehicle["@PassengerQuantity"]} icon={PassengerIcon} />
          <Legend title={Vehicle["@DoorCount"]} icon={DoorIcon} />
        </div>
        <div style={{ display: "flex" }}>
          <Legend title={Vehicle["@BaggageQuantity"]} icon={BreifCase} />
          {Vehicle["@AirConditionInd"] ? (
            <Legend title="Aircon" icon={Snowflake} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div>{TotalCharge["@RateTotalAmount"]}</div>
    </div>
  );
}
