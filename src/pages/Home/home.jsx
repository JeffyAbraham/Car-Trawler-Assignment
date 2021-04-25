import CarList from "../../containers/car-container-list/car-container-list";
import { useState, useEffect } from "react";
import axios from "axios";
import WithSpinner from "../../hoc/with-spinner/with-spinner";
import AutoComplete from "../../components/google-autocomplete/autocomplete.component";
import FilterContainer from "../../containers/filter-container/filter-container";

export default function Home() {
  const [vehRental, setRental] = useState();

  const [isFetching, setStatus] = useState({ status: true });
  const [carDetails, setCarDetail] = useState([]);
  useEffect(() => {
    axios.get("http://www.cartrawler.com/ctabe/cars.json").then((res) => {
      var data = res.data[0].VehAvailRSCore;
      const { VehRentalCore, VehVendorAvails } = data;
      setRental(VehRentalCore);
      setStatus({ status: false });
    
      setCarDetail(constructArrayByPrice(VehVendorAvails));
      
  
    });
  }, []);

  return (
    
    <div>
      {console.log(carDetails)}
      {console.log(isFetching)}
      <WithSpinner isFetching={isFetching.status}>
        
        <div>
          <div>
            <AutoComplete label="Pick Location" />
          </div>
          <div>
            <AutoComplete label="Drop Location" />
          </div>

        </div>
        <div>
          <FilterContainer/>
        </div>
        <div>
         <CarList carDetails={carDetails}/>
        </div>
      </WithSpinner>
    </div>
  );
}

function constructArrayByPrice(VehVendorAvails) {
  var newArr = [];
  VehVendorAvails.map(({ Vendor, VehAvails }) => {
    VehAvails.map((carDetails) => {
      carDetails["Name"] = Vendor["@Name"];
      newArr.push(carDetails);
    });
  });
  var x = newArr.sort((a, b) => {
    return (
      a.TotalCharge["@RateTotalAmount"] - b.TotalCharge["@RateTotalAmount"]
    );
  });
  return x;
}
