import CarList from "../../containers/car-container-list/car-container-list";
import { useEffect } from "react";
import { apiReq } from "../../redux/car-reducer/car-action";
import { connect } from "react-redux";
import WithSpinner from "../../hoc/with-spinner/with-spinner";
import AutoComplete from "../../components/google-autocomplete/autocomplete.component";
import FilterContainer from "../../containers/filter-container/filter-container";

function Home({ apiReq, filteredVersionCarDetails, isFetching }) {
  useEffect(() => {
    apiReq();
  }, []);

  return (
    
    <div>
      {console.log(filteredVersionCarDetails)}
      <div>
        <div>
          <AutoComplete label="Pick Location" />
        </div>
        <div>
          <AutoComplete label="Drop Location" />
        </div>
      </div>
      <div>
        <FilterContainer />
      </div>
      <div>
        <WithSpinner isFetching={isFetching}>
          <CarList carDetails={filteredVersionCarDetails} />
        </WithSpinner>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  apiReq: () => dispatch(apiReq()),
});
const mapStateToProps = ({
  cars: { filteredVersionCarDetails, isFetching },
}) => ({
  filteredVersionCarDetails,
  isFetching,
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
