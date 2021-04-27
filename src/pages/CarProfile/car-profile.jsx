import { useEffect } from "react";
import { connect } from "react-redux";
import { findCarbyId } from "../../redux/car-reducer/car-action";
import WithSpinner from "../../hoc/with-spinner/with-spinner";
import Avis from "../../assests/avis.png";
import Alamo from "../../assests/alamo.png";
import Hertz from "./../../assests/Hertz.png";
import Loader from "react-loader-spinner";
import "./car-profile.css";
function CarProfile({ match, findCarbyId, currentCar }) {
  useEffect(() => {
    // Update the document title using the browser API

    findCarbyId(match.params.id);
  }, []);

  return (
    <div>
      {currentCar["Name"] === undefined ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="car-profile-container">
          <div>
            <img alt="s" src={currentCar["Vehicle"]["PictureURL"]} />
          </div>
          <div>
            <div>
              <h2>{currentCar["Vehicle"]["VehMakeModel"]["@Name"]}</h2>
            </div>
            <div className="flex-car-details">
              <div>Cost</div>
              <div>{currentCar["TotalCharge"]["@RateTotalAmount"]} EUR</div>
            </div>
            <div className="flex-car-details">
              <div>Door Count:</div>
              <div>{currentCar["Vehicle"]["@DoorCount"]}</div>
            </div>
            <div className="flex-car-details">
              <div>Fuel Type:</div>
              <div>{currentCar["Vehicle"]["@FuelType"]}</div>
            </div>
            <div className="flex-car-details">
              <div>Passenger Qunatity:</div>
              <div>{currentCar["Vehicle"]["@PassengerQuantity"]}</div>
            </div>
            <div className="flex-car-details">
              <div>Transmission Type:</div>
              <div>{currentCar["Vehicle"]["@TransmissionType"]}</div>
            </div>
            <div className="flex-car-details">
              <div>Airconditioned:</div>
              <div>{currentCar["Vehicle"]["@AirConditionInd"]}</div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <div>
                {currentCar["Name"] === "HERTZ" ? (
                  <div>
                    <img width="94px" src={Hertz} />
                  </div>
                ) : currentCar["Name"] === "ALAMO" ? (
                  <div>
                    <img width="94px" src={Alamo} />
                  </div>
                ) : (
                  <div>
                    <img width="94px" src={Avis} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  findCarbyId: (id) => dispatch(findCarbyId(id)),
});

const mapStateToProps = ({ cars: { currentCar } }) => ({
  currentCar,
});
export default connect(mapStateToProps, mapDispatchToProps)(CarProfile);
