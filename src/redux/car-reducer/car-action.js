import axios from "axios";
export const getCarDetails = () => ({
  type: "GET_DETAILS",
});

export const setCarDetails = (data) => ({
  type: "SET_DETAILS",
  payload: data,
});

export const errCarDetails = (err) => ({
  type: "ERROR_DETAILS",
  payload: err,
});
export const applyMultiFilter = () => ({
  type: "APPLY_MULTIFILTER",
});
export const setPriceFilter = (id) => ({
  type: "SET_PRICE_FILTER",
  payload: id,
});
export const setSupplyFilter = (id) => ({
  type: "SET_SUPPLY_FILTER",
  payload: id,
});
export const findCarbyId=(id)=>({
    type:"FIND_CAR_BY_ID",
    payload:id
})
export const apiReq = () => {
  return (dispatch) => {
    dispatch(getCarDetails());

    axios
      .get("http://www.cartrawler.com/ctabe/cars.json")
      .then((res) => {
        var data = res.data[0].VehAvailRSCore;
        const { VehVendorAvails } = data;
        dispatch(setCarDetails(VehVendorAvails));
      })
      .catch((err) => {
        console.log(err);
        dispatch(errCarDetails(err.data));
      });
  };
};
