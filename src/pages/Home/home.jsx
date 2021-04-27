import CarList from "../../containers/car-container-list/car-container-list";
import { useEffect } from "react";
import { apiReq } from "../../redux/car-reducer/car-action";
import { connect } from "react-redux";
import WithSpinner from "../../hoc/with-spinner/with-spinner";
import AutoComplete from "../../components/google-autocomplete/autocomplete.component";
import './home.css'
import PriceFilterContainer from "../../containers/filter-container/price-filter-container/price-filter-container";
import SupplyFilterContainer from '../../containers/filter-container/supply-filter-container/supply-filter-container'
import PropTypes from 'prop-types'
function Home({ apiReq, filteredVersionCarDetails, isFetching,vehRental }) {
  console.log(filteredVersionCarDetails);
  useEffect(() => {
    apiReq();
  }, []);

  return (
    
    <div className='container'>
       <div className='location-container'>
        <div style={{marginLeft:'20px'}}>
          <AutoComplete title='Pick up location' label="Pickup" />
          <div>{vehRental.Pickup}</div>
        </div>
        <div style={{marginLeft:'20px'}}>
          <AutoComplete title='Drop Location' label="Drop" />
          <div>{vehRental.Drop}</div>
        </div>
        </div>
      <div className='flex-gallery'>
      <div>

        <PriceFilterContainer/>
        <SupplyFilterContainer/>
      </div>
      <div style={{marginTop:'-100px' ,marginLeft:'100px'}}>
      <WithSpinner status={isFetching}>
        <div style={{marginLeft:'-30px'}}>
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
  cars: { filteredVersionCarDetails, isFetching,vehRental },
}) => ({
  filteredVersionCarDetails,
  isFetching,
  vehRental
});
Home.PropType={
  apiReq:PropTypes.func,
  isFetching:PropTypes.bool
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
