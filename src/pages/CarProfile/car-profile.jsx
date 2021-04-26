import { useEffect } from "react";
import { connect } from "react-redux";
import { findCarbyId } from "../../redux/car-reducer/car-action";
import WithSpinner from "../../hoc/with-spinner/with-spinner";
import ErrorBoundary from "../../hoc/with-error/with-error";

function CarProfile({ match, findCarbyId, currentCar }) {
  useEffect(() => {
    // Update the document title using the browser API

    findCarbyId(match.params.id);
  }, []);

  return (
    <div>
      <WithSpinner status={typeof currentCar}>
        <div>{currentCar["Name"]}</div>
      </WithSpinner>
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
