import {
  constructArrayByPrice,
  multiFilter,
  findById,
  getRentalLocation,
  setLocation
} from "./car-utility";
//copy the array to another array and use it to display state
//else if original array modifies then the ablity to retain the value will be impossible
//Ideally the it would be good idea to store the filter in  array and then iterate through the array and apply filters
//because it would reduce the reduendancy in data on the downside you might have to write additional logic
const INITIAL_STATE = {
  vehRental: {Pickup: "", Drop: ""},
  filteredVersionCarDetails: [],
  carDetails: [],
  isFetching: false,
  priceFilterId: "",
  supplyFilterId: " ",
  baggageFilterId: " ",
  currentCar: '',
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
        vehRental: getRentalLocation(action.payload),
      };
    case "SET_LOCATION":
          return{
            ...state,vehRental:setLocation(state.vehRental,action.payload)
          }
    case "ERROR_DETAILS":
      return { ...state, isFetching: false, ...action.payload };

    case "SET_PRICE_FILTER":
      return { ...state, priceFilterId: action.payload };

    case "SET_SUPPLY_FILTER":
      return { ...state, supplyFilterId: action.payload };

    case "APPLY_MULTIFILTER":
      var filterdData = multiFilter(
        state.carDetails,
        state.priceFilterId,
        state.supplyFilterId
      );

      return {
        ...state,
        filteredVersionCarDetails: filterdData,
      };
    case "FIND_CAR_BY_ID":
      var current = findById(action.payload, state.carDetails);
      return {
        ...state,
        currentCar: current,
      };

    default:
      return state;
  }
};

export default carReducer;
