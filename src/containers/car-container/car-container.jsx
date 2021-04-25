import './car-container.style.css'
import PassengerIcon from "../../assests/man-user.png";
import DoorIcon from "../../assests/car-door.png";
import BreifCase from "../../assests/briefcase.png";
import Snowflake from "../../assests/snowflake.png";
import Legend from "../../components/icon-legend/icon-legend.component";
export default function CarContainer({ ...otherProps }) {
  const { Vehicle, Name, TotalCharge } = otherProps;
  const { VehMakeModel } = Vehicle;
  return (
    <div className='car-cotainer-flex'>
      <div style={{padding:'20px'}}>
          <img src={Vehicle['PictureURL']} width='200px'/>
               
      </div>
      <div>
      <div style={{fontSize:'26px',fontWeight:'600'}}>{VehMakeModel["@Name"].replace("or similar", "")}</div>
      <div style={{display:'flex'}}>
      <Legend title={Vehicle["@PassengerQuantity"]} icon={PassengerIcon} />
      <Legend title={Vehicle["@DoorCount"]} icon={DoorIcon} />
      </div> 
      <div style={{display:'flex'}}>
      <Legend title={Vehicle["@BaggageQuantity"]} icon={BreifCase} />
      {Vehicle["@AirConditionInd"] ? (
        <Legend title="Aircon" icon={Snowflake} />
      ) : (
        <div></div>
      )}
    </div>
      </div>  
      <div>
          {TotalCharge["@RateTotalAmount"]}
      </div>
    </div>
  );
}
