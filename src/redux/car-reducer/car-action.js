import axios from "axios";
export const getCarDetails = () => ({
  type: "GET_DETAILS",
});

export const setCarDetails = (data) => ({
  type: "SET_DETAILS",
  payload: data,
});


export const filterByPrice=(id)=>
({  
    type:"PRICE_CATEGORY",
    payload:id

})




export const errCarDetails = (err) => ({
  type: "ERROR_DETAILS",
  payload: err,
});
export const apiReq = () => {
  return (dispatch) => {
    dispatch(getCarDetails());

    axios
      .get("http://www.cartrawler.com/ctabe/cars.json")
      .then((res) => {
        var data = res.data[0].VehAvailRSCore;
        const { VehRentalCore, VehVendorAvails } = data;
        dispatch(setCarDetails(VehVendorAvails));
      })
      .catch((err) => {
        console.log(err);
        dispatch(errCarDetails(err.data));
      });
  };
};
