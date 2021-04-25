import { constructArrayByPrice, filterPriceById } from "./car-utility";
//copy the array to another array and use it to display state
//else if original array modifies then the ablity to retain the value will be impossible
const INITIAL_STATE = {
  vehRental: "",
  filteredVersionCarDetails: [],
  carDetails: [],
  isFetching: false,
};
const carReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return { ...state, isFetching: true };

    case "SET_DETAILS":
      return {
        ...state,
        isFetching: false,
        carDetails: constructArrayByPrice(action.payload),
        filteredVersionCarDetails: constructArrayByPrice(action.payload),
      };

    case "ERROR_DETAILS":
      return { ...state, isFetching: false, ...action.payload };

    case "PRICE_CATEGORY":
    
      return { ...state, isFetching: false, filteredVersionCarDetails:filterPriceById(action.payload, state.carDetails) };
    default:
      return state;
  }
};

export default carReducer;
