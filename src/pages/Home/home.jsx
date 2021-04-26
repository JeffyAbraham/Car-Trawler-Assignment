import CarList from "../../containers/car-container-list/car-container-list";
import { useEffect } from "react";
import { apiReq } from "../../redux/car-reducer/car-action";
import { connect } from "react-redux";
import WithSpinner from "../../hoc/with-spinner/with-spinner";
import AutoComplete from "../../components/google-autocomplete/autocomplete.component";
import PriceFilterContainer from "../../containers/filter-container/price-filter-container/price-filter-container";
import SupplyFilterContainer from '../../containers/filter-container/supply-filter-container/supply-filter-container'

function Home({ apiReq, filteredVersionCarDetails, isFetching }) {
  console.log(filteredVersionCarDetails);
  useEffect(() => {
    apiReq();
  }, []);

  return (
    <div>
      <div>
        <div>
          <AutoComplete label="Pick Location" />
        </div>
        <div>
          <AutoComplete label="Drop Location" />
        </div>
      </div>
      <div style={{display:'flex'}}>
      <div>

        <PriceFilterContainer/>
        <SupplyFilterContainer/>
      </div>
      <div style={{marginTop:'-100px' ,marginLeft:'100px'}}>
      <WithSpinner status={isFetching}>
        <div>
          <CarList carDetails={filteredVersionCarDetails} />
        </div>
      </WithSpinner>
      </div>
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
